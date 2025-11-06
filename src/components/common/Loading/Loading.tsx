import React from "react";
import "./loading.css";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-white overflow-hidden z-50 fixed top-0 left-0 right-0 bottom-0">
      <div className="flex flex-col items-center animate-scaleFade">
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Rophim Logo"
          className="w-80 h-80"
        />

        {/* Text */}
          <h1 className="hidden lg:block text-3xl font-bold tracking-wide text-center leading-normal text-[#4B4E54] -translate-y-20">
          Xem Phim Miễn Phí Cực Nhanh, Chất <br /> Lượng Cao Và Cập Nhật Liên Tục
        </h1>
      </div>
    </div>
  );
};

export default Loading;
