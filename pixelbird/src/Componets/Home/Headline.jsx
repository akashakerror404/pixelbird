import React from 'react'
import paly from '../../assets/playbuttion.png';

function Headline() {
    return (
        <div>
            <div className="flex  bg-[#ebebed]" >
                <div className="w-full  p-6 flex justify-center md:pt-20">
                    <div className="w-full md:w-[95%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]  p-5 md:p-6  bg-opacity-60 rounded-[40px] flex-col md:flex-row ">
                        <div class="md:flex ">
                            <div class="md:w-1/2  ">
                                <h1 className='font-sans text-2xl md:mb-8 mb-2'>Welcome to</h1>
                                <h1 className='md:text-5xl text-4xl'>404 Productions</h1>

                            </div>
                            <div class="md:w-1/2  ">
                                <p className='mb-4 text-gray-400'>404 Productions envisions a cinematic landscape where every frame tells a story, evokes emotions, and leaves an indelible mark on the hearts of the audience.</p>

                                <div className='flex justify-center w-full md:justify-start gap-x-4'>
                                    <div className="px-3 md:px-5 py-2 bg-black rounded-xl justify-end items-center gap-3 inline-flex text-white ">
                                        <div className="w-6 h-6 md:w-8  relative rounded-full justify-center">
                                            <img src={paly} />
                                        </div>
                                        <div className="text-white  text-base md:text-lg font-bold  capitalize leading-normal">
                                            Show Reel
                                        </div>
                                    </div>
                                    <div className="px-3 md:px-5 py-2 bg-white rounded-xl justify-end items-center gap-3 inline-flex text-black ">
                                        <div className="w-6 h-6   relative rounded-full justify-center">
                                            <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-droite-orange.png" />
                                        </div>
                                        <div className="text-black  text-base md:text-lg font-bold  capitalize leading-normal">
                                            Show Reel
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            <hr className="  bg-gradient-to-r from-[#ebebed] via-blue-200 to-[#ebebed] dark:from-[#ebebed] dark:via-blue-700 dark:to-[#ebebed] h-1" />



           


        </div>
    )
}

export default Headline
