import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>WORK WITH EXPERTS</p>
          <p>
          Peppermint is an award-winning robotics company, supported by SINE IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial and Enterprise robots and platforms for mobility-led services. The Engineering team has 50+ years of experience in building deep-tech and robotics products. Robots built on the Peppermint Platform are deployed across 13 cities in 4 countries!
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
