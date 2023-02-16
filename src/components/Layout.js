import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-primary min-h-screen justify-between">
      <Header />
      <main className="md:pt-28 pt-44">{children}</main>
      <Footer />
    </div>
  );
}
