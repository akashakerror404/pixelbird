import React from 'react'
import backgroundImage from '../../assets/bg.png'; 
import blade from '../../assets/blade.png'; 



function Hero() {
  return (
    <div>
       <div className="flex  bg-[#ebebed]" >
  <div className="w-full 0 p-6 flex justify-center md:pt-20">
  <div className="w-full md:w-[95%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] h-[413px] p-5 md:p-10 bg-[#ebebed] bg-opacity-60 rounded-[40px] flex-col md:flex-row " style={{
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover", 
  backgroundPosition: "center", 
}} >
  <div className="flex justify-between items-center ">
    <div className="w-fullmd:w-[95%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] flex-col justify-start items-start gap-[140px] inline-flex">
      <div className="px-10 py-1 rounded-xl justify-start items-start gap-3 inline-flex">
        <div className="text-[9px] md:text-base text-white">
          Upcoming Release
        </div>
      </div>
      <div className="h-[171px] md:h-[200px] flex-col px-10 justify-start items-start gap-[22px] flex">
        <div className="h-[109px] md:pt-4 flex-col justify-end items-start gap-2 flex">
          <img className="w-52 h-[72px] md:w-50 md:h-[100px] relative" src={blade} />
          <div className="hidden md:flex w-48 md:w-96 text-white  md:text-sm text-sm">
            07 June 2019
          </div>
        </div>
        <div className='flex justify-center w-full md:justify-start'>
        <div className="px-3 md:px-5 py-2 bg-gradient-to-bl from-amber-500 to-amber-700 rounded-xl flex justify-center items-center gap-3 ">
          <div className="w-6 h-6 md:w-8 md:h-8 relative flex justify-center items-center ">
            <img className="w-5 h-5 md:w-6 md:h-6 left-[2px] top-[2px] absolute" src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_play_circle_filled_white_48px-512.png" />
          </div>
          <div className="text-white  text-base md:text-lg  font-Noto capitalize leading-normal cursor-pointer">
            Watch Trailer
          </div>
        </div>

        </div>
       
      </div>
    </div>
    <div className=''>
    <div className="hidden md:flex  px-3 py-2 origin-top-left rotate-90 rounded-[5px] backdrop-blur-[10px] justify-center items-center gap-2.5 ">
      <div className="w-1 h-1 bg-stone-50 rounded-full" />
      <div className="w-2 h-2 bg-orange-200 rounded-full" />
      <div className="w-1 h-1 bg-stone-50 rounded-full" />
    </div>

    </div>
    
  </div>
</div>

  </div>
</div>

      
    </div>
  )
}

export default Hero
