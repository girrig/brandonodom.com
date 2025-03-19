import BottomBar from "@/components/BottomBar";
import NavBar from "@/components/NavBar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavBar />
      <main className="flex-1 bg-gray-50">{children}</main>
      <BottomBar />
    </>
  );
}
