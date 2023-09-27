import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const Statistics = () => {
    const [donationLength,setDonationLength]= useState(0)
    const [donatedLength,setDonatedLength]= useState(0)

    useEffect(()=>{
fetch('carts.json')
.then(res=> res.json())
.then(data=>  {
    // console.log(data.length);
    setDonationLength(data.length)
    setDonatedLength(JSON.parse(localStorage.getItem('donation-application')).length)
})
.catch(error=>{
    console.log(error);
})
},[])


const donatedPercentage = (donatedLength / donationLength * 100).toFixed(2)
const restPercentage = (100 - donatedPercentage).toFixed(2);


const data = [
  { name: 'Donation Percentage', value: parseFloat(restPercentage) },
  { name: 'Donated Percentage', value: parseFloat(donatedPercentage) },
];

const COLORS = ['#0088FE', '#00C49F']; 

    return (
        <div>
           <h2 className=" text-3xl font-bold text-center mt-6" > Statistics Donation </h2> 

           
    <ResponsiveContainer width="100%" height={400}>
           <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip  contentStyle={{
            backgroundColor: '#f5f5f5', // Background color of the tooltip
            color: '#333', // Text color of the tooltip
          }} />
      <Legend />
    </PieChart>
</ResponsiveContainer>
        </div>
    );
};

export default Statistics;