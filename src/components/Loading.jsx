import React from 'react';
import loadingGif from "../assets/images/loading.gif";


const Loading = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={loadingGif} alt="Loading..." />
        </div>
    );
}

export default Loading;