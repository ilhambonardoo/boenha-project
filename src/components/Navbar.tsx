import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-14 w-full bg-amber-50 backdrop-blur-2xl fixed z-10">
        <div className="flex justify-between p-4 items-center">
          <div className="ml-6">Logo</div>
          <div className="flex gap-5 text-[16px] mr-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/our-bussiness"}>Our Bussiness</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/gallery"}>Gallery</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
