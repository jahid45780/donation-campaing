import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Uitility/Localstoage";
import DonationMap from "../DonationMap/DonationMap";

const Donation = () => {
    const donations = useLoaderData();
    const  [alliedDonations, setAppliedDonations]=  useState([])
    const [isShow, setIsShow]= useState(false)  
    useEffect(()=>{
        const storedDonationIds = getStoredApplication();
        if(donations.length > 0 ){
            // const donationsApplied = donations.filter(donation => storedDonationIds.includes(donation.id) )

            const donationsApplied = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation => donation.id === id)
                if(donation){
                    donationsApplied.push(donation)
                }
            }
            setAppliedDonations(donationsApplied)
        }
    },[])
    return (
        <div className=" m-4" >
          

            <section className=" grid grid-cols-1 lg:grid-cols-2 gap-4 " >
                {
                    alliedDonations.map(donation => <DonationMap key={donation.id} donation={donation} ></DonationMap> )
                }
            </section>
           <div className=" flex justify-center mt-5" >

              {
                donations.length > 4 && <button onClick={()=> setIsShow(!isShow)} className=" bg-green-600 text-white rounded-md  p-3" >
                      See All
                </button>
              }

           </div>
        </div>
    );
};

export default Donation;