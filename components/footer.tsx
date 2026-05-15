import Link from "next/link";

type Props = {}

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#E2E8F7] border-t border-muted p-8">
      <div className="w-4/5 mx-auto flex items-center justify-between">
        <div>
          <h4 className="font-bold text-primary text-xl">AutoMecho</h4>
          <p>@{year} AutoMecho. Premium Car Rental Services.</p>
        </div>
        <nav className="flex">
          <ul className="flex gap-3 text-muted-foreground text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Fleet Locations</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer