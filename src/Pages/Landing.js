import React from 'react';
import frontimg from'../asset/sideImg.png'
const Landing = () => {
    return (

        <div class="hero min-h-screen mt-10 bg-white">
            <div class="hero-content flex-col lg:flex-row">
                <div className=' w-1/2'>
                    <h1 data-aos = "fade-right" data-aos-delay="50" data-aos-duration="1000" class="lg:text-5xl text-2xl text-gray-700 font-bold">Need A Break From <span className='text-green-400'>Beer</span></h1>
                    <p data-aos = "fade-right" data-aos-delay="100" data-aos-duration="1200" class="py-6 text-gray-900">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn px-2 text-xs py-1 lg:px-8 lg:py-4 btn-primary bg-none text-white hover:text-green-300">Try A Highball</button>
                </div>
                <img data-aos = "fade-down" data-aos-delay = "100" data-aos-duration ="1000" className='rounded-lg lg:w-1/3 w-1/2' src={frontimg} alt='' />

            </div>
        </div>
    );
};

export default Landing;