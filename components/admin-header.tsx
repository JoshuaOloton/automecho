import Link from "next/link"
import { Button } from "./ui/button"
import { Bell, User } from "lucide-react"

type Props = {}

const AdminHeader = (props: Props) => {
  return (
    <header className="border-b border-primary/20">
      <div className="flex items-center gap-10 w-11/12 mx-auto my-4">
        <div className="mr-auto">
          <h2 className="font-bold text-primary text-xl">Admin Console</h2>
        </div>
        <Bell className="text-black/70" size={20} />
        <div className="flex items-center gap-2">
          <h4 className="uppercase font-medium text-sm">Alex Rivera</h4>
          <User className="rounded-full border border-primary/50 p-1 shadow-md" />
        </div>
      </div>
    </header>
  )
}

export default AdminHeader