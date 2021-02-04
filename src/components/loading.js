import React from "react";
import UseAnimations from "react-useanimations";
import Infinity from "react-useanimations/lib/infinity";
import '../css/blackBody.css'

const Loading = () => (
  <div className='loadContainer'>
    <UseAnimations className='loader' animation={Infinity} size={150} speed={0.5} />
  </div>
);

export default Loading;