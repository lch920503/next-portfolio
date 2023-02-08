import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <main className="md:pt-28 pt-44">{children}</main>
      <Footer />
    </div>
  );
}
