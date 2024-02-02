import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Upload } from "./Upload_CSV/upload";

function App() {
  return (
    <div className="h-screen w-screen font-sans flex">
      <Sidebar />
      <div className="grow flex flex-col">
        <Navbar />
        <Upload />
      </div>
    </div>
  );
}

export default App;
