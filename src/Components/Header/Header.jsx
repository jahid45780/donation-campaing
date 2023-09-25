import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className=" flex justify-between items-center mt-8" >
            
    <div>
        <img className=" w-40" src={'https://i.ibb.co/r6JgcZr/Logo.png'} alt="" />
    </div>

    <div className=" flex gap-3" >


    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline" : ""
  }
>
  Home
</NavLink>


<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline" : ""
  }
>
  Donation
</NavLink>        


<NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline" : ""
  }
>
Statistics
</NavLink>  



    </div>

        </nav>
    );
};

export default Header;