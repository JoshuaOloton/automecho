import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <>
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </>;
}
