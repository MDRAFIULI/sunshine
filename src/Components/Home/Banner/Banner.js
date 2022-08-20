import React from 'react';
import BannerPic from '../../../img/Banner/20611.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={BannerPic} class="max-w-lg ml-16 rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">"Education" Course Platform </h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;