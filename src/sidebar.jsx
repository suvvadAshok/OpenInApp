import Dashboard from "./assets/dashboard.svg";
import Upload from "./assets/upload.svg";
import Invoice from "./assets/invoice.svg";
import Schedule from "./assets/schedule.svg";
import Calendar from "./assets/calendar.svg";
import NotificationFilled from "./assets/notificationFilled.svg";
import Settings from "./assets/settings.svg";
import baseLogo from "./assets/baseLogo.svg";
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

export function Sidebar() {
  return (
    <aside className="bg-white border-2 border-black w-[20%]">
      <div className="flex items-center justify-center py-4 gap-4">
        <img src={baseLogo} alt="logo" className="w-12 h-12" />
        <p className="text-2xl font-semibold">BASE</p>
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
  );
}
