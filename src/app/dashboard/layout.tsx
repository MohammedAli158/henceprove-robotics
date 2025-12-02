import VerticalNav from "../components/VerticalNav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <VerticalNav/>
      {children}
    </div>
  );
}
