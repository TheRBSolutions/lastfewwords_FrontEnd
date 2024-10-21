import React from 'react';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import FileUploader from '../FileUploader';

const AudioFiles = () => {

    return <FileUploader fileType="audio" title="Audio Files" icon={faVolumeUp} />;

};

export default AudioFiles;