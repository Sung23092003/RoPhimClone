import React, { useEffect, useState } from "react";
import { Search, User, Monitor, Menu } from "lucide-react"; // Import Menu icon
import Button from "../../common/Button/Button";
import NavMenu from "./NavMenu/NavMenu";
import "./Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-20 transition-all duration-300 ${scrolled ? "header--scrolled" : ""
        }`}
    >
      <div className="header-inner mx-auto flex items-center justify-between px-4 sm:px-8 text-white py-3">
        <div className="flex items-center gap-6">
          <Menu className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity xxl:hidden" />
          <a href="/">
            <img
              src="/logo.svg"
              alt="Rophim Logo"
              className="w-[120px] sm:w-[140px] md:w-[160px] cursor-pointer hover:opacity-90 transition-opacity"
            />
          </a>

          <div className="relative w-80 hidden xxl:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm phim, diễn viên"
              className="bg-white/10 text-white w-[100%] placeholder-gray-400 rounded-md px-10 py-2 outline-none focus:bg-white/20 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center hidden xxl:flex">
          <NavMenu />
        </div>


        <div className="flex items-center gap-8">
          <Search className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity xxl:hidden" />
          <div className="hidden xxl:flex items-center gap-8">
            <div className="flex items-center gap-2 pr-4 border-r border-white/40">
              <Monitor className="w-6 h-6 text-yellow-400" />
              <div className="text-right leading-tight">
                <p className="text-sm text-gray-400">Tải ứng dụng</p>
                <p className="flex font-semibold text-white">RoPhim</p>
              </div>
            </div>

            <Button
              variant="primary"
              shape="pill"
              icon={<User className="w-5 h-5" />}
            >
              Thành viên
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;