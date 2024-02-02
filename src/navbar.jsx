import notify from "./assets/notification.svg";
import avathar from "./assets/avathar.svg";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8">
      <h1>Upload CSV</h1>
      <div className="flex">
        <img src={notify} alt="notification" />
        <img src={avathar} alt="avathar" />
      </div>
    </nav>
  );
}
