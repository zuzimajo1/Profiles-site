import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import {Data} from './data'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";

const Main = ()=>{
const [index, SetIndex] = React.useState(0);
const { id, img, name, title, description } = Data[index];


const AddIndex = ()=>{
  let new1 = index + 1;
  Condition(new1);
}

const MinusIndex = ()=>{
  let new2 = index - 1;
  Condition(new2); 
}

const Condition = (data)=>{
if (data > Data.length - 1) {
   SetIndex(0);
} else if (data < 0) {
   SetIndex(Data.length - 1);
} else {
   SetIndex(data);
}
}


const Surprise = ()=>{
  let random1 = Math.floor(Math.random()*5);
  if(random1 === index){
    Condition(random1 + 1);
  }else{
    SetIndex(random1);
  }
}



  return (
    <main className="" key={id}>
      <section className="flex flex-col justify-center items-center ">
        <h3 className="text-4xl font-bold tracking-wider pt-2 pb-1">
          Profiles
        </h3>
        <div className="w-40 h-1 bg-blue-400"></div>
        <div className="px-8 mb-12 sm:px-16 sm:mb-12 md:px-40 md:mb-12 lg:mb-12 xl:mb-12 lg:px-60 xl:px-80">
          <div className="flex flex-col rounded-md mt-8 justify-center items-center shadow-lg hover:shadow-xl bg-white">
            <div className="relative">
              <p className="relative transform translate-y-14  bg-blue-400  w-8 md:h-8  flex  justify-center  items-center  rounded-full  text-white  z-30  translate-x-2">
                <FaQuoteRight />
              </p>
              <div className=" relative  w-36  h-36  rounded-full  mt-2  bg-blue-400  left-2  z-10">
                <img
                  className=" relative  w-36  h-36 rounded-full  mt-4  transform  -translate-x-2  translate-y-1  z-10"
                  src={img}
                  alt={name}
                ></img>
              </div>
            </div>
            <div className=" text-center  py-5  px-12">
              <h3 className=" text-sm  tracking-wider  font-bold  text-gray-800">
                {name}
              </h3>
              <p className=" uppercase  text-sm  font-normal  text-blue-500">
                {title}
              </p>
              <div className="h-auto w-full sm:h-52 md:h-24 lg:h-44">
                <p className="text-sm sm:text-sm sm:px-5 md:text-sm lg:text-base text-blue-900 xl:px-4 pt-2">
                  {description}
                </p>
              </div>
              <div className='pt-8 sm:pt-1 md:pt-28 lg:pt-4 xl:pt-0'>
                <div className="md:pt-6 lg:pt-10 xl:pt-0">
                  <button
                    className=" px-2  text-xl  transform  transition  duration-300  ease-in-out  hover:scale-150  text-blue-500"
                    onClick={MinusIndex}
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    className=" px-2  text-xl  transform  transition  duration-300  ease-in-out  hover:scale-150  text-blue-500"
                    onClick={AddIndex}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
                <button
                  type="button"
                  className=" capitalize  py-1  px-2  rounded-sm mt-2  hover:bg-blue-400  hover:text-blue-900  transition  duration-500  ease-in-out  bg-blue-100  text-blue-600  text-xs"
                  onClick={Surprise}
                >
                  surprise me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3 className='text-center transform -translate-y-4 text-sm'>Coded by: <span className='text-blue-600'>Zuzim Ajo</span> &copy; 2021</h3>
    </main>
  );
}




ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

