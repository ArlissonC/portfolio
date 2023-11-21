import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop id="video">
        <source src="/bg-home.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default BackgroundVideo;
