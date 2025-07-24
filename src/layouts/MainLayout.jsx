import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Header></Header>

      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
