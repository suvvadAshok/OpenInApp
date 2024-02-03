import Dashboard from "./assets/dashboard.svg";
import Upload from "./assets/upload.svg";
import Invoice from "./assets/invoice.svg";
import Schedule from "./assets/schedule.svg";
import Calendar from "./assets/calendar.svg";
import NotificationFilled from "./assets/notificationFilled.svg";
import Settings from "./assets/settings.svg";
import baseLogo from "./assets/baseLogo.svg";
import cross from "./assets/crossBrown.svg";

import { Link } from "react-router-dom";

const sidebarElments = [
  {
    id: 1,
    icon: Dashboard,
    link: "#",
    text: "Dashboard",
  },
  {
    id: 2,
    icon: Upload,
    link: "#",
    text: "Upload",
  },
  {
    id: 3,
    icon: Invoice,
    link: "#",
    text: "Invoice",
  },
  {
    id: 4,
    icon: Schedule,
    link: "#",
    text: "Schedule",
  },
  {
    id: 5,
    icon: Calendar,
    link: "#",
    text: "Calendar",
  },
  {
    id: 6,
    icon: NotificationFilled,
    link: "#",
    text: "Notification",
  },
  {
    id: 5,
    icon: Settings,
    link: "#",
    text: "Settings",
  },
];

export function Sidebar({ setClose, close }) {
  return (
    <>
      {close && (
        <aside className="bg-white sm:w-[20%] max-sm:w-[300px] max-sm:absolute top-0 max-sm:h-full max-sm:rounded-r-2xl">
          <div className="sm:hidden flex justify-between items-center px-4 py-8">
            <div className="flex items-center gap-2">
              <img src={baseLogo} alt="logo" className="w-12 h-12" />
              <p className="text-2xl font-semibold max-sm:text-xl">BASE</p>
            </div>
            <button className="bg-red-100 p-4" onClick={() => setClose(!close)}>
              <img src={cross} alt="cross" />
            </button>
          </div>
          <ul className="flex flex-col gap-8 px-4">
            {sidebarElments.map((ele, i) => (
              <li key={i}>
                <Link to={ele.link} className="flex gap-4">
                  <img src={ele.icon} alt={ele.text} />
                  <p className="text-[#9A9AA9]">{ele.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
