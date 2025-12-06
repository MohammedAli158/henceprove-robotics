
import OfferingNav from "@/app/components/OfferingNavbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <OfferingNav/>
      {children}
    </div>
  );
}
