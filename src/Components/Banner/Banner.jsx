const Banner = () => {
    return (
        <section>

<div className=" text-center my-24" >


<div className="hero  w-full min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JsQXwVp/smiley-volunteers-preparing-boxes-donation-with-food.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
    <h2 className=" font-bold text-4xl" > I Grow By Helping People In Need </h2>
 <br />
   <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3" >

   <div> <input className=" bg-slate-300 p-1  w-72 rounded-md "  type="text" name="name" placeholder="Search here.." id="" /> </div>
  
  <div> <button className=" bg-[#FF444A] p-1 rounded-md px-7 " >Search</button>  </div> 



   </div>

    </div>
  </div>
</div>




         
        </div>




        </section>
    );
};

export default Banner;

