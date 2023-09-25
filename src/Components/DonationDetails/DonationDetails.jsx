import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)

    const donation= donations.find(donation=> donation.id === idInt)
    
   console.log(donation)
    return (
        <div>
           
             <img  className=" w-full h-96 mt-6  relative  " src={donation.image} alt="" /> 
             <button  className=" bg-red-600 p-4 rounded-md -mt-16 ml-5 absolute " > Donate $ {donation.donatePrice} </button>
             <h1 className=" text-2xl font-bold mt-3" > {donation.title} </h1>
             <p className=" text-xl mt-3 " > {donation.description} </p>
        </div>
    );
};

export default DonationDetails;