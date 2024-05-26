import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="my-4 min-h-screen">
        <Outlet></Outlet>
        <Toaster></Toaster>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
