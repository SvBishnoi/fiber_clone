import React from 'react'

const Hero = () => {
  return (
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://lh3.googleusercontent.com/OC-SXJQO1-5271jrwS9O145eIz89eh-L7IZEWd493xoNZPtvJDX-vvbDlUOWY4gLHn_6AEZyElALsKIDSWd2qpevO7shC3dguA=s1600-nu-rw"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-6xl text-6xl mb-4 font-bold text-gray-900">Customer Service
      </h1>
      <p class="mb-8 leading-relaxed">#1 in 22 categories, including Customer Satisfaction as measured by American Customer Satisfaction Index (ACSI) in 2021.</p>
        <hr className='leading-3'/>
        <hr/>
        <h1 class="title-font sm:text-6xl text-6xl mb-4 font-bold text-gray-900">Speed
      </h1>
      <p class="mb-8 leading-relaxed">“Fastest internet provider in the country.” - Named 2022’s Fastest Internet Provider by HighSpeedInternet.com</p>
      {/*<div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
  </div>*/}
    </div>
  </div>
</section>
  )
}

export default Hero;