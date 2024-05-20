import motionart from "../assets/MotionArtEffect-logo.png"
import motionleaf from "../assets/motionarteffect-img2.png"
import motionwordpress from "../assets/motionarteffect-img3.png"
import motiong from "../assets/motionarteffect-img1.png"
import stars from "../assets/stars.png"
import magicstick from "../assets/magicstick.png"
import section from "../assets/section.png"
import browsers from "../assets/browsers.png"
import thunder from "../assets/thunder.png"
import moon from "../assets/moon.png"
import thumbs from "../assets/thumbs.png"
import page from "../assets/page.png"
// import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import Fluid from 'webgl-fluid'


const FrontPage =()=>{
    
   
     // const cursorRef = useRef(null);
     const canvas = useRef(null)
     useEffect( ()=> {
       let c = canvas.current
       Fluid(c,{
          DENSITY_DISSIPATION: 4,
          BLOOM: true,
          SUNRAYS: true,

          TRANSPARENT: true,
       })
     }, [])
     // useEffect(() => {
     //   const handleMouseMove = (e) => {
     //     gsap.to(cursorRef.current, {
     //       x: e.clientX,
     //       y: e.clientY,
     //       duration: 0.1,
     //       ease: 'power2.out'
     //     });
     //   };
   
     //   window.addEventListener('mousemove', handleMouseMove);
   
     //   return () => {
     //     window.removeEventListener('mousemove', handleMouseMove);
     //   };
     // }, []);
    return(

        <div  className="bg-[#0c0c24] min-h-screen flex flex-col flex-grow justify-center items-center ">
<canvas ref={canvas} className="w-full h-full fixed top-0 left-0 z-0 bg-[#0e0e1b02] sm:invisible sm2:visible" ></canvas>

            {/* <div className="fixed top-0 left-0 w-full h-full  pointer-events-none" style={{ opacity: 0.1}}>

<canvas ref={canvas} className="w-full h-full "> </canvas>
  </div> */}

   {/* <div ref={cursorRef} className="cursor "></div> */}
            <div className="xl:mr-76 lg:mr-52 ">
            {/* <div className="2xl:ml-[650px] xl:ml-40 lg:ml-5 md:ml-5 "> */}
            <div className="pt-[20px] ">
        <img src={motionart} alt="motionart" className="p-[10px]"/>
        </div>
        <div className="py-[80px] flex xl:gap-40 lg:gap-28 md:gap-16 flex-wrap justify-center">
          <div className="p-[10px]">
            <h1 className="font-sora pb-[10px] text-[18px] bg-gradient-to-r from-[#F87516] from-20% to-[#5E11FF] to-40% inline-block text-transparent bg-clip-text">
            Transform <br/> Your Website
            </h1>
            <h1 className="font-outfit text-[18px] text-[#EEE5FF]">
                With Motiton Art <br/>
                 Effect
            </h1>
            </div>
            <div className="p-[10px]">
            <h1 className="font-sora xl:text-[65px] md:text-[40px] sm:text-[35px] text-[#EEE5FF] pr-[10px] pb-[15px] sm:text-center sm2:text-left">Attract Your <br/>Visitors Attention <br/> With Colorful <br/> <span className="bg-gradient-to-r from-[#F87516] from-20% to-[#5E11FF] to-40% inline-block text-transparent bg-clip-text">Motion Art Effect</span></h1>
            <p className="text-[#EEE5FFBD] sm:text-center sm2:text-left">Unleash the power of creativity with Motion Art for Elementor - your <br/> ultimate solution for seamlessly integrating captivating animations into <br/>your website. 

</p>
            </div>
        </div>
        {/* <div className=" flex-wrap justify-center p-[10px]">
      
             <h1 className="text-[22px] text-[#EEE5FF] text-center">Trusted by thousands of users around the world</h1>
             <div className="flex pt-[50px] flex-wrap justify-center">
                <div className="flex gap-4 ">
                <img src={motionleaf} alt="leaf"/>
                <img src={stars} alt="star" className="h-5"/>

                </div>
                <div className="flex gap-4 ">

                <img src={motiong} alt="G2"/>
                <img src={stars} alt="star" className="h-5"/>

                </div>
                <div className="flex gap-4 ">

                <img src={motionwordpress} alt="wordpress"/>
                <img src={stars} alt="star" className="h-5"/>

                </div>

             
             </div>
        </div> */}
        </div>
        <div className=" flex-wrap justify-center p-[10px]">
      
      <h1 className="text-[22px] text-[#EEE5FF] text-center">Trusted by thousands of users around the world</h1>
      <div className="flex pt-[50px] flex-wrap xl:gap-52 md:gap-20 sm:gap-12 justify-center">
         <div className="flex gap-4 ">
         <img src={motionleaf} alt="leaf"/>
         <div  className="mt-5">
         <img src={stars} alt="star" className="h-5"/>
          <h1 className="font-sora text-[14px] text-[#EEE5FFBD] mt-5">4.5 Score, 9 Reviews</h1>
          </div>
         </div>
         <div className="flex gap-4 ">

         <img src={motiong} alt="G2"/>
         <div className="mt-5">
         <img src={stars} alt="star" className="h-5"/>
          <h1 className="font-sora text-[14px] text-[#EEE5FFBD] mt-5">4.5 Score, 9 Reviews</h1>
         </div>

         </div>
         <div className="flex gap-4">

         <img src={motionwordpress} alt="wordpress"/>
         <div  className="mt-5">
         <img src={stars} alt="star" className="h-5"/>
          <h1 className="font-sora text-[14px] text-[#EEE5FFBD] mt-5">4.5 Score, 9 Reviews</h1>

         </div>
         </div>

      
      </div>
 </div>
 <div className="flex flex-wrap justify-center pt-[100px] xl:gap-52 lg:gap-5">
 {/* <div className="2xl:ml-[650px] xl:ml-40 lg:ml-5 md:ml-5 pt-[100px] flex flex-wrap 2xl:gap-60 xl:gap-48 lg:gap-1"> */}
<div className="sm2:w-[60%] sm:w-[100%] flex flex-col ">
    <h1 className="xl:text-[40px] md:text-[30px] sm:text-[25px] font-sora text-[#EEE5FF] sm:text-center sm2:text-left">Turn Your Cursor Into A Colorful <br/> Magic Wand & Charm Your Visitors</h1>
 <p className="font-outfit text-[18px] mt-5 text-[#EEE5FFBD] sm:text-center sm2:text-left">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br/> your website with visually stunning motion art elements.</p>
 <button className="sm:w-72 sm2:w-96 sm:mx-auto sm2:mx-0 text-[20px] font-sora mt-8 text-white bg-gradient-to-r from-[#5F10FF] via-[#8A2EBB] to-[#EB6C2D] py-[20px] px-[35px] rounded-3xl"> Purchase from Envato</button>
 </div>
 <img src={magicstick} alt="magicstick" className="h-[246px] w-[248px] mt-5"/>
 </div>
 <div className="flex flex-col gap-20 py-[100px] ">
    <h1 className="font-sora xl:text-[40px] md:text-[30px] sm:text-[25px]  text-[#EEE5FF] text-center">Apply On Any Section Or Enable <br/>For Whole Page
</h1>

<div className="flex gap-5 justify-center sm:flex-wrap md:flex-nowrap sm:ml-5 sm:mr-5 ">
<div className="flex flex-col gap-7 p-[30px] lg:w-[32%] md:w-[70%] sm:w-[275px] md:mb-20 border-2 border-[#332C42] rounded-2xl  bg-gradient-to-b from-[#0E0621]  to-[#1C162C]">
<h1 className="font-sora xl:text-[25px] sm:text-[20px] text-[#EEE5FF] sm:text-center sm2:text-left">Apply On Section</h1>
<h2 className="font-outfit xl:text-[18px] sm:text-[16px] text-[#EEE5FFBD] sm:text-center sm2:text-left">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </h2>
<img src={section} alt="section"/>

</div>
<div className="mt-20 flex flex-col gap-7 p-[30px] lg:w-[32%] md:w-[70%] sm:w-[275px] border-2 border-[#332C42] rounded-2xl  bg-gradient-to-b from-[#0E0621]  to-[#1C162C]">
<h1 className="font-sora xl:text-[25px] sm:text-[20px] text-[#EEE5FF] sm:text-center sm2:text-left ">Apply On Page</h1>
<h2 className="font-outfit xl:text-[18px] sm:text-[16px] text-[#EEE5FFBD] sm:text-center sm2:text-left">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</h2>
<img src={page} alt="page"/>

</div>
</div>
 </div>
 <div className="flex flex-col gap-5 items-center 2xl:w-[50%] lg:w-[65%] sm:w-[92%] p-[30px]  border-2 border-[#332C42] rounded-2xl  bg-gradient-to-b from-[#0E0621]  to-[#1C162C] ">
   <h1 className="sm2:text-[25px] sm:text-[20px] font-sora text-[#EEE5FF] sm:text-center sm2:text-left">Supported by All Popular Browsers
</h1>
<p className="text-[18px] font-outfit text-[#EEE5FFBD] text-center ">Rest assured, Motion Art is designed to be compatible <br/> with all major web browsers.</p>
<img src={browsers} alt="browsers"/>

</div>
<div className="flex flex-col gap-10 py-[100px]">
<h1 className="xl:text-[40px] md:text-[30px] sm:text-[25px] font-sora text-[#EEE5FF] text-center">An All-Round Plugin With <br/> Powerful Features</h1>
<p className="md:text-[18px] sm:text-[16px] font-outfit text-[#EEE5FFBD] text-center">Whether you're a seasoned web designer or just starting out, Motion Art for <br/>
     Elementor seamlessly integrates with the Elementor platform, providing you <br/>
     with a seamless and intuitive experience.</p>
     <div className="flex gap-5 flex-wrap justify-center ml-5 mr-5">
     <div className="flex flex-col gap-5  border-2 border-[#332C42] rounded-2xl  bg-gradient-to-b from-[#0E0621]  to-[#1C162C]">
     <img src={thunder} alt="thunder" className="w-40 "/>
     <h1 className="xl:text-[25px] md:text-[23px] sm:text-[20px] font-sora text-[#EEE5FF] px-[30px] ">Light Weight</h1>
     <p className="md:text-[18px] sm:text-[16px] font-outfit text-[#EEE5FFBD]  px-[30px] pb-[50px]">Motion Art for Elementor is designed <br/> to be 
        lightweight.</p>

</div>
<div className="flex flex-col gap-5  border-2 border-[#332C42] rounded-2xl  bg-gradient-to-b from-[#0E0621]  to-[#1C162C]">
     <img src={thumbs} alt="thumbs" className="w-40 "/>
     <h1 className="xl:text-[25px] md:text-[23px] sm:text-[20px] font-sora text-[#EEE5FF] px-[30px] ">100% Responsive</h1>
     <p className="md:text-[18px] sm:text-[16px] font-outfit text-[#EEE5FFBD]  px-[30px] pb-[50px]">Create a consistent visual experience <br/>
     across all devices.</p>

</div>
<div className="flex flex-col gap-5  border-2 border-[#332C42] rounded-2xl  bg-gradient-to-b from-[#0E0621]  to-[#1C162C]">
     <img src={moon} alt="moon" className="w-40 "/>
     <h1 className="xl:text-[25px] md:text-[23px] sm:text-[20px] font-sora text-[#EEE5FF] px-[30px] ">User Friendly Interface</h1>
     <p className="md:text-[18px] sm:text-[16px]  font-outfit text-[#EEE5FFBD]  px-[30px] pb-[50px]">Ensure a smooth experience for both<br/>
     applicants and administrators.</p>

</div>
     </div>
</div>
<div className="bg-gradient-to-r from-[#EB6C2D] from-[10%] via-[#8A2EBB] to-[#5F10FF] w-[100%] pt-[10px] ">
     <div className="lg:flex lg:flex-row p-[10px] justify-center lg:gap-80 sm:flex sm:flex-col-reverse sm:items-center sm:gap-5">
     <h1 className="font-outfit text-[#EEE5FFBB] sm:text-[14px] text-center">© 2023 Copywrite. All rights reserved by QodeMatrix</h1>
     <div className="flex gap-5 ">
     <button className="font-outfit text-[#EEE5FFBB] sm:text-[14px]">Documentation</button>
     <button className="font-outfit text-[#EEE5FFBB] sm:text-[14px]">Support</button>
     </div>
     </div>
</div>

</div>
    )
}
export default FrontPage