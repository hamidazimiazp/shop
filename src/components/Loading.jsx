import React from 'react';
import loadingGif from "../assets/images/loading.gif";


const Loading = () => {
    return (
        <>
            <img src={loadingGif} alt="Loading..." />
        </>
    );
}

export default Loading;