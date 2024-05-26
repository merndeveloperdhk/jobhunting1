import { Link, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    <h1>Dashboard</h1>
    <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden w-24 p-2 text-2xl"><FiMenu /></label>
    <div className="px-4">
        <Outlet></Outlet>
    </div>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4  w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link >Dashboard Home</Link></li>
      <li><Link  to= "allProducts">All Products</Link></li>
      <li><Link>Add Products</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;