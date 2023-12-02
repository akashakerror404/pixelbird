import React from 'react'
import paly from '../../assets/playbuttion.png';

function Headline() {
    return (
        <div>
            <div className="flex  bg-[#ebebed] h-[350px]" >
                <div className="w-full  p-6 flex justify-center md:pt-20">
                    <div className="w-full md:w-[95%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]  p-5 md:p-6  bg-opacity-60 rounded-[40px] flex-col md:flex-row ">
                    <div class="md:flex">
    <div class="md:w-7/12">
        <h1 className='font-Poppins italic md:text-3xl text-3xl md:mb-8 mb-2'>Welcome to</h1>
        <h1 className='md:text-7xl text-4xl font-Poppins leading-14 tracking-wide'>404 Productions</h1>
    </div>
    <div class=" md:w-5/12">
        <p className='mb-4 text-gray-400 font-Poppins'>404 Productions envisions a cinematic landscape where every frame tells a story, evokes emotions, and leaves an indelible mark on the hearts of the audience.</p>
        <div className='flex justify-center w-full md:justify-start gap-x-4'>
            <div className="px-3 md:px-5 py-1 bg-black rounded-xl flex justify-end items-center gap-3 text-white cursor-pointer">
                <div className="w-7 h-7 relative rounded-full flex justify-center">
                    <img src={paly} />
                </div>
                <div className="text-white text-sm md:text-lg font-bold font-Poppins">
                    Show Reel
                </div>
            </div>
            <div className="px-3 md:px-5 py-2 bg-white rounded-xl justify-end items-center gap-3 inline-flex text-black cursor-pointer">
                <div className="w-6 h-6 relative rounded-full justify-center">
                    <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-droite-orange.png" />
                </div>
                <div className="text-black text-sm md:text-lg  font-bold font-Poppins capitalize leading-normal">
                    Read more
                </div>
            </div>
        </div>
    </div>
</div>


                    </div>
                </div>
                
            </div>

            <hr className="  bg-gradient-to-r from-[#ebebed] via-blue-200 to-[#ebebed] dark:from-[#ebebed] dark:via-blue-900 dark:to-[#ebebed] h-[2px]" />



           


        </div>
    )
}

export default Headline
