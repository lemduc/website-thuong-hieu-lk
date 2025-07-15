import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
