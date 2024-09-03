import { Session } from "@supabase/supabase-js";

type HeaderProps = {
    session?: Session|null|undefined;
}

const Header = ({}: HeaderProps) => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">PartyPal</h1>
        <div className="space-x-4">
          <button>
            <img src="/icons/menu.svg" alt="Menu" />
          </button>
          <button>
            <img src="/icons/search.svg" alt="Search" />
          </button>
        </div>
      </header>
    )
}

export default Header;