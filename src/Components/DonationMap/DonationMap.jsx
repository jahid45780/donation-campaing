

const DonationMap = ({donation}) => {
    const {image,title,donatePrice,category, backgroundColor,textColor}= donation;
    return (
    

<section className=" flex gap-6" style={{

   backgroundColor:backgroundColor

}} >

<div>
           <img src={ image } alt="" /> 
        </div>


        <div className=" space-y-4" >
            <h1 className=" shadow-md text-xl px-2 py-2 font-semibold " 
             style={{color:textColor}}
            
            > {category} </h1>
            <p className=" font-extrabold " > {title} </p>
            <p className=" font-semibold" 
              style={{color:textColor}}
            > ${donatePrice}.00 </p>
            <button className=" btn shadow-lg "
             style={{backgroundColor:textColor}}

            > View Details </button>
        </div>

        


     </section>





 
    );
};

export default DonationMap;