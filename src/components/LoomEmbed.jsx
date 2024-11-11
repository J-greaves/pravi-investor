import React from "react";

const LoomEmbed = () => {
  return (
    <div
      className="relative min-w-[100%] h-auto rounded"
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        src="https://www.loom.com/embed/e2d0c0811e9341818bd16da203749ca2?sid=fbd73e49-59a4-4e6d-aeda-2cf3fa2006a1"
        frameBorder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full max-h-[81%] rounded-2xl max-w-[850px] shadow shadow-black"
        title="Loom Video"
      ></iframe>
    </div>
  );
};

export default LoomEmbed;
