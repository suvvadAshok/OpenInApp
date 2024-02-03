import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Upload } from "./Upload_CSV/upload";
import React from "react";

function App() {
  const [close, setClose] = React.useState(false);
  return (
    <div className="h-screen w-screen font-sans flex flex-col">
      <Navbar setClose={setClose} close={close} />
      <div className="grow flex sm:hidden">
        <Sidebar close={close} />
        <Upload />
      </div>
      <div className="grow flex max-sm:hidden">
        <Sidebar setClose={setClose} close={true} />
        <Upload />
      </div>
    </div>
  );
}

export default App;
