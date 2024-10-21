import React from 'react';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import FileUploader from '../FileUploader';

const DocumentsFiles = () => {

    return <FileUploader fileType="document" title="Document Files" icon={faFileAlt} />;

};

export default DocumentsFiles;