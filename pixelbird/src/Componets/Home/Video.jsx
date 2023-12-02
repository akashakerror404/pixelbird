import React, { useRef } from 'react';
import VideoCarousel from './VideoCarousel';

function Video() {
  const containerRef = useRef(null);

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex bg-[#ebebed]">
        <div className="w-full p-6 flex justify-center md:pt-20">
          <div className="w-full md:w-[95%] lg:w-[95%] xl:w-[85%] 2xl:w-[80%] h-[313px] bg-[#ebebed] bg-opacity-60  ">
            <div className="flex">
              <div className="w-1/2 bg-[#ebebed] h-10 flex gap-x-3 items-center">
                <p className='font-bold font-sans'>Trailers</p>
                <p className='font-bold font-sans text-[#ff9401]'>see more</p>
              </div>
              <div className="w-1/2 bg-[#ebebed] h-10 flex p-2 justify-end gap-x-2">
                <div className='border border-gray-600 w-7 rounded-lg flex items-center justify-center' onClick={handlePrevClick}>
                  <p className="text-gray flex items-center justify-center">
                    <span>&lt;</span>
                  </p>
                </div>
                <div className='border border-gray-600 w-7 rounded-lg flex items-center justify-center' onClick={handleNextClick}>
                  <p className="text-gray flex items-center justify-center">
                    <span>&gt;</span>
                  </p>
                </div>
              </div>
            </div>

            <div ref={containerRef} className='flex-col overflow-x-auto overflow-y-hidden scrollbar-hide md:scrollbar-default flex justify-start  items-start bg-[#ebebed]'>
              <div className="flex gap-x-3 items-center justify-center scrollbar-hide md:scrollbar-default pt-2">
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />
                <VideoCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
