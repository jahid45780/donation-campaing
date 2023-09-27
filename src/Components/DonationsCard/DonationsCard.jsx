import { useEffect, useState } from "react";
import Card from "../Card/Card";

const DonationsCard = () => {

    const [cards, setCard]=useState([])

    useEffect(()=>{
        fetch('carts.json')
        .then(res=> res.json())
        .then(data=> setCard(data))
    },[])

    return (
        <div className=" m-16" >
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  " >
                {
                   cards.map(card => <Card key={card.id} card={card} ></Card> )
                }
            </div>

        </div> 
    );
};

export default DonationsCard;