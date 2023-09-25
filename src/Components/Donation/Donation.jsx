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
        <div>
            <h2> donation {alliedDonations.length} </h2>

            <section>
                {
                    alliedDonations.map(donation => <DonationMap key={donation.id} donation={donation} ></DonationMap> )
                }
            </section>

        </div>
    );
};

export default Donation;