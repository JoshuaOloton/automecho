import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="text-muted-foreground">
      <div className="flex items-center justify-between w-4/5 mx-auto my-4">
        <h2 className="font-bold text-primary text-xl">AutoMecho</h2>
        <nav>
          <ul className="flex gap-2">
            <li><Link href="/">Fleet</Link></li>
            <li><Link href="/">Rentals</Link></li>
            <li><Link href="/">Membership</Link></li>
            <li><Link href="/">Support</Link></li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Button className="px-3 py-2" variant={"outline"}><Link href="/login">Log in</Link></Button>
          <Button className="px-3 py-2"><Link href="/register">Sign up</Link></Button>
        </div>
      </div>
    </header>
  )
}

export default Header