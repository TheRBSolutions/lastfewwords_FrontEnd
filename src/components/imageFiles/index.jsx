import React from 'react';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import FileUploader from '../FileUploader';

const ImageFiles = () => {

    return <FileUploader fileType="image" title="Image Files" icon={faImage} />;

};

export default ImageFiles;