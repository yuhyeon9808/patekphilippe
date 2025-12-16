import React from 'react';

export default function PursuitOfExcellence() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center ">
        <video
          src="img/GP_LAUREATO.mp4"
          width="960"
          poster="/img/h_video.png"
          controls
        />
        <div className=" max-w-[960px] pb-30 px-4">
          <p className="text-40 font-fair pb-5 text-center">
            THE QUEST FOR EXCELLENCE
          </p>
          <p>
            For over two centuries, our watches have marked far more than
            time.They reflect our ability to bridge between the pastand future
            Between technical masteryand iconic design. Between functionality
            and aesthetics. Our name itself is born froma union, the marriage
            between Constant Girard and Marie Perregaux.
          </p>
        </div>
      </div>
    </section>
  );
}
