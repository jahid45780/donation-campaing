import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Uitility/Localstoage";
const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)

    const donation= donations.find(donation=> donation.id === idInt)
    
   console.log(donation)

   const handleDonation = ()=>{

  saveDonation(idInt)

    toast(' Your donation will be delivered correctly ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
     
        });
   }

    return (
    
        <div>
                  <ToastContainer />
             <img  className=" w-full h-96 mt-6  relative  " src={donation.image} alt="" /> 
             <button onClick={handleDonation} className=" bg-red-600 p-4 rounded-md -mt-16 ml-5 absolute " > Donate $ {donation.donatePrice} </button>
             <h1 className=" text-2xl font-bold mt-3" > {donation.title} </h1>
             <p className=" text-xl mt-3 " > {donation.description} </p>
            
        </div>
    );
};

export default DonationDetails;