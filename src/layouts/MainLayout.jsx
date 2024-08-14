import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-152px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
