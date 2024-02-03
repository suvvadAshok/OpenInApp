import notify from "./assets/notification.svg";
import avathar from "./assets/avathar.svg";
import baseLogo from "./assets/baseLogo.svg";
import hamburgerMenu from "./assets/hamburgerMenu.svg";

export function Navbar({setClose, close}) {
  
  return (
    <nav className="w-full max-sm:w-screen flex justify-between bg-[#FAFAFB] max-sm:bg-red-300">
      <div className="flex items-center justify-center sm:w-[20%] gap-4 p-2 ">
        <img src={hamburgerMenu} alt="hamburger" className="sm:hidden" onClick={()=>setClose(!close)} />
        <img src={baseLogo} alt="logo" className="w-12 h-12" />
        <p className="text-2xl font-semibold max-sm:text-xl">BASE</p>
      </div>
      <div className="flex sm:justify-between items-center grow px-8">
        <h1 className="text-2xl font-semibold max-sm:hidden">Upload CSV</h1>
        <div className="flex gap-4">
          <img src={notify} alt="notification h-8 w-8" />
          <img src={avathar} alt="avathar" className="h-8 w-8" />
        </div>
      </div>
    </nav>
  );
}
