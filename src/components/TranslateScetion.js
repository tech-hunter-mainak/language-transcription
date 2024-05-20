import React from 'react'
import UploadVidNoVid from './UploadVidNoVid'
import "../css/translate.css"

function TranslateScetion() {
    return (
        <div>
            <div id="translate-section">
                <div id="upload-video">
                    <UploadVidNoVid />
                </div>
                <div id="download-video"></div>
            </div>
            <div id="translate-btn-section"></div>
        </div>
    )
}

export default TranslateScetion