import React, { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import thumbnailImage from "../../assets/thub.jpg";
import palyicon from "../../assets/palyicon.jpg";


function VideoCarousel() {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div>
      <div className="flex justify-center " >
        <div className='w-[300px] rounded-md'>

        <div className={`relative rounded-lg bg-white max-w-sm overflow-hidden transition-transform duration-300 ease-in-out transform ${isHovered ? 'hover:scale-105' : ''}`}>
          <a
            href="#!"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? (
              <video
                ref={videoRef}
                width="160"
                height="120"
                controls
                className="w-full rounded-t-lg"
              >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            ) : (
                <>
                <img
                  src={thumbnailImage}
                  alt="Thumbnail"
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-20 left-2 p-2 rounded-full w-10 flex justify-center items-center bg-black h-10">
                  <img
                    src={palyicon}
                    alt="Small Icon"
                    className="w-[30px] h-[30px] rounded-full"
                  />
                </div>
              </>
           
            )}
          </a>
          <div className="p-2">
            <h5 className="text-gray-900 text-base font-medium mb-2">The Batman(2022) Official Trailer</h5>
            <div className="flex gap-x-2 items-center">
              <FaStar color="#ffc400" />
              <p className="">8.0 <span className="text-gray-500 text-sm">/10</span></p>
              <p className='text-sm'>176 <span className="text-gray-500 text-sm">min</span></p>
              <div className="border border-gray-400 w-7 rounded-md h-4 flex justify-center items-center">
                <p className='text-gray-500 text-[7px]'>PG13</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default VideoCarousel;

