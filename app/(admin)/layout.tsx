import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function AdminLayout({
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
