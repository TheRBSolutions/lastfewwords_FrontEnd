import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import FileUploader from '../FileUploader';

const VideoFiles = () => {

    return <FileUploader fileType="video" title="Video Files" icon={faPlay} />;

};

export default VideoFiles;