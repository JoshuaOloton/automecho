import AdminSidebar from "@/components/admin-sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <>
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1">
        <Header />
        {children}
      </main>
    </div>
    <Footer />
  </>;
}
