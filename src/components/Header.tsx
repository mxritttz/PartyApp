import { supabase } from '../supabase/client'
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router";

type HeaderProps = {
    session?: Session|null|undefined;
}

const Header = ({ session }: HeaderProps) => {
  const navigate = useNavigate();
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        
        <div className="flex space-x-4">
          <h1 className="text-2xl font-bold">PartyPal</h1>
          
          {session 
            ? <button onClick={() => supabase.auth.signOut()}>Logout</button> 
            : <button onClick={() => navigate("/auth")}>Login</button>
          } 
          
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/event/add")}>Add Event</button>
        </div>
        
        <div className="flex space-x-4">
          <button>
            <img src="/icons/menu.svg" alt="Menu"/>
          </button>
          <button>
            <img src="/icons/search.svg" alt="Search"/>
          </button>
        </div>
      
      </header>
    )
}

export default Header;