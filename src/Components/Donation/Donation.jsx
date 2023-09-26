import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../Uitility/Localstoage";
import DonationMap from "../DonationMap/DonationMap";

const Donation = () => {
    const donations = useLoaderData();
    const  [alliedDonations, setAppliedDonations]=  useState([])
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
           <p className=" text-center" >

           <button  className=" bg-blue-600 rounded-lg text-xl text-white px-3 py-3 text-center  mt-5  " > See All </button>
           </p>
        </div>
    );
};

export default Donation;