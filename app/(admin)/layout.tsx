import AdminSidebar from "@/components/admin-sidebar";
import Footer from "@/components/footer";
import AdminHeader from "@/components/admin-header";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <>
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1">
        <AdminHeader />
        {children}
      </main>
    </div>
    <Footer />
  </>;
}
