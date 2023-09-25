/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Card = ({card}) => {


    const {id,backgroundColor,image,category,title,textColor,CategoryBackgroundColor }=card;
    

    return (
       <Link to={`/donation1/${id}`} >
       
       <div className=  "shadow-lg" style={{
            backgroundColor:backgroundColor,
            color:textColor
        }} >
   
            <img className=" w-full " src={image} alt="" />
            <button style={{backgroundColor:CategoryBackgroundColor}} className=" font-bold w-20 p-1 rounded-md mt-2 shadow-md  " > {category} </button>
            <h1  className=" font-bold space-y-2" > {title} </h1>
         
             
        </div> 
       
       
       
       </Link>
    );
};

export default Card;