import { CalendarDays, CarFront, LayoutDashboard, UserSearch } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {}

type NavItem = {
  icon: ReactNode;
  text: string;
  link: string;
};


const AdminSidebar = (props: Props) => {
  const navItems: NavItem[] = [
    {
      icon: <LayoutDashboard size={16} />,
      text: "Dashboard",
      link: "/admin/dashboard"
    },
    {
      icon: <UserSearch size={16} />,
      text: "User Management",
      link: "/admin/dashboard"
    },
    {
      icon: <CarFront size={16} />,
      text: "Car Management",
      link: "/admin/manage"
    },
    {
      icon: <CalendarDays size={16} />,
      text: "Bookings",
      link: "/admin/dashboard"
    },
  ]

  return (
    <div className="w-[200px] border h-screen p-4">
      <div className="my-4 border p-3">
        <h2 className="font-bold text-primary text-2xl">AutoMecho</h2>
        <p className="text-xs text-muted-foreground font-medium">Admin Console</p>
      </div>
      <nav className="mt-8 border">
        <ul className="flex flex-col gap-3">
          {navItems.map((item, index) => {
            const isActive = item.link == "/admin/manage";
            return (
              <li key={index} className={`${isActive ? 'bg-primary text-white' : 'text-muted-foreground'} p-3 rounded-lg`}>
                <Link href={item.link} className={`flex items-center gap-2 text-xs transition-all duration-300 ${!isActive && 'hover:text-primary hover:scale-105'}`}>
                  {item.icon}
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default AdminSidebar