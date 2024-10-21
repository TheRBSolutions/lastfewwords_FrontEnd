import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import {
    useFetchFilesQuery,
    useUploadFileMutation
} from '../../redux/slices/contentSlice/contentApiSlice';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '10%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const FileUploader = ({ fileType, title, icon }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedFileUrl, setSelectedFileUrl] = useState(null);
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const { data: files, isLoading, refetch } = useFetchFilesQuery(fileType);
    const [uploadFile, { isLoading: loading }] = useUploadFileMutation();

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setSelectedFileUrl(null);
    };

    const formik = useFormik({
        initialValues: {
            file: null,
            type: fileType,
            title: '',
            description: '',
        },
        validationSchema: Yup.object({
            file: Yup.mixed().required('File is required'),
            title: Yup.string(),
            description: Yup.string(),
        }),
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append('file', values.file);
            formData.append('userId', userInfo?._id);
            formData.append('type', values.type);
            formData.append('title', values.title);
            formData.append('description', values.description);

            try {
                await uploadFile(formData).unwrap();
                refetch();
                closeModal();
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        },
    });

    const handleFileClick = (fileUrl) => {
        openModal();
        setSelectedFileUrl(fileUrl);
    };

    if (isLoading) return <p className='cus__loader'>Loading...</p>;

    const filteredFiles = files?.data?.filter(file => file?.type === fileType);

    return (
        <div className="feature__container">
            <header className="feature-header">
                <FontAwesomeIcon icon={faArrowLeft} className="back-icon"
                    onClick={() => { navigate('/dashboard') }} />
                <h2 className='feature-title'>{title}</h2>
            </header>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>

            <div className="feature-list" style={{ height: '50vh' }}>
                {filteredFiles && filteredFiles?.length > 0 ? (
                    filteredFiles?.map((file, index) => (
                        <div key={index} className="feature-item"
                            onClick={() => handleFileClick(file?.fileUrl)}>
                            <FontAwesomeIcon
                                icon={icon}
                                className="feature-icon"
                            />
                            <a className="file-text">
                                {file?.fileUrl?.split('/')?.pop()}
                            </a>
                        </div>
                    ))
                ) : (
                    <p className='cus__loader_2'>No {fileType} available</p>
                )}
            </div>

            <button className="feature-item-add__btn" onClick={openModal}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {/* Modal for uploading files */}
            <Modal
                isOpen={modalIsOpen && !selectedFileUrl}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={`Upload ${title}`}
            >
                <span className='modal__title'>Upload {title}</span>
                <form onSubmit={formik.handleSubmit} style={{ marginTop: '1rem' }}>
                    <input
                        id="file"
                        name="file"
                        type="file"
                        accept={
                            fileType === 'image' ? 'image/*' :
                                fileType === 'video' ? 'video/*' :
                                    fileType === 'audio' ? 'audio/*' :
                                        fileType === 'document' ? '.pdf, .doc, .docx' :
                                            '*/*' // Fallback for unsupported file types
                        }
                        onChange={(event) => formik.setFieldValue("file", event.currentTarget.files[0])}
                    />
                    {formik.errors.file ? <div className='auth_error_message'>{formik.errors.file}</div> : null}

                    {/* <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.title ? <div>{formik.errors.title}</div> : null}

                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.description ? <div>{formik.errors.description}</div> : null} */}


                    <div className="modal-actions" style={{ textAlign: 'right', marginTop: '1rem' }}>
                        <button type="submit" className="download-btn">
                            {loading ? 'Uploading...' : 'Upload'}
                        </button>
                        <button onClick={closeModal} className="modal__close__btn">Cancel</button>
                    </div>
                </form>
            </Modal>

            {/* Modal for viewing and downloading the selected file */}
            <Modal
                isOpen={modalIsOpen && !!selectedFileUrl}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={`View ${title}`}
            >
                {selectedFileUrl && (
                    <div>

                        {fileType === 'image' ? (
                            <img src={selectedFileUrl} alt="Selected" style={{ width: '100%' }} />
                        ) : fileType === 'video' ? (
                            <video controls src={selectedFileUrl} style={{ width: '100%' }} />
                        ) : fileType === 'audio' ? (
                            <audio controls src={selectedFileUrl} style={{ width: '100%' }}>
                                Your browser does not support the audio element.
                            </audio>
                        ) : fileType === 'document' ? (
                            <iframe
                                src={selectedFileUrl}
                                style={{ width: '100%', height: '500px' }}
                                title="Document Preview"
                            >
                                Your browser does not support iframes.
                            </iframe>
                        ) : (
                            <p>Cannot preview this file type.</p>
                        )}
                        <div className="modal-actions" style={{ textAlign: 'right', marginTop: '1rem' }}>
                            <NavLink to={selectedFileUrl} className="download-btn" target='_blank'>
                                View {title}
                            </NavLink>
                            <button onClick={closeModal} className="modal__close__btn">Close</button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default FileUploader;
