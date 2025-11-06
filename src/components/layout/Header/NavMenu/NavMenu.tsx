import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./NavMenu.css";

const menuItems = [
    {
        label: "Phim Lẻ",
        link: "/phim-le",
    },
    {
        label: "Phim Bộ",
        link: "/phim-bo",
    },
    {
        label: "Thể loại",
        link: "#",
        subMenu: [
            { label: "Anime", link: "/the-loai/anime.TKMmgF" },
            { label: "Bí Ẩn", link: "/the-loai/bi-an.T6q81e" },
            { label: "Chiến Tranh", link: "/the-loai/chien-tranh.Pr7kIn" },
            { label: "Chiếu Rạp", link: "/the-loai/chieu-rap.3679nF" },
            { label: "Chuyển Thể", link: "/the-loai/chuyen-the.wSzjQd" },
            { label: "Chính Kịch", link: "/the-loai/chinh-kich.1gOywM" },
            { label: "Chính Luận", link: "/the-loai/chinh-luan.IusvEH" },
            { label: "Chính Trị", link: "/the-loai/chinh-tri.eF8pjq" },
            { label: "Chương Trình Truyền Hình", link: "/the-loai/chuong-trinh-truyen-hinh.UY5DvH" },
            { label: "Concert Film", link: "/the-loai/concert-film.rtsXM0" },
            { label: "Cung Đấu", link: "/the-loai/cung-dau.w4NxOV" },
            { label: "Cuối Tuần", link: "/the-loai/cuoi-tuan.4FLGnx" },
            { label: "Cách Mạng", link: "/the-loai/cach-mang.kXl4k8" },
            { label: "Cổ Trang", link: "/the-loai/co-trang.OGqPaU" },
            { label: "Cổ Tích", link: "/the-loai/co-tich.qEmD7r" },
            { label: "Cổ Điển", link: "/the-loai/co-dien.MKSFtq" },
            { label: "DC", link: "/the-loai/dc.GNUW6k" },
            { label: "Disney", link: "/the-loai/disney.MCencW" },
            { label: "Gay Cấn", link: "/the-loai/gay-can.3PP9q7" },
            { label: "Gia Đình", link: "/the-loai/gia-dinh.8VSWst" },
            { label: "Giáng Sinh", link: "/the-loai/giang-sinh.9Pue1r" },
            { label: "Giả Tưởng", link: "/the-loai/gia-tuong.zUEian" },
            { label: "Hoàng Cung", link: "/the-loai/hoang-cung.12JqxG" },
            { label: "Hoạt Hình", link: "/the-loai/hoat-hinh.ZERgfX" },
            { label: "Hài", link: "/the-loai/hai.W8Dn2a" },
            { label: "Hành Động", link: "/the-loai/hanh-dong.2xCjTG" },
            { label: "Hình Sự", link: "/the-loai/hinh-su.IN1LmJ" },
            { label: "Học Đường", link: "/the-loai/hoc-duong.n7N6C6" },
            { label: "Khoa Học", link: "/the-loai/khoa-hoc.Rqm5ON" },
            { label: "Kinh Dị", link: "/the-loai/kinh-di.43tNdP" },
            { label: "Kinh Điển", link: "/the-loai/kinh-dien.ky4BgF" },
            { label: "Kịch Nói", link: "/the-loai/kich-noi.ifyky8" },
            { label: "Kỳ Ảo", link: "/the-loai/ky-ao.gVRG25" },
            { label: "LGBT+", link: "/the-loai/lgbt.J1tgRB" },
            { label: "Live Action", link: "/the-loai/live-action.2yxWKe" },
            { label: "Lãng Mạn", link: "/the-loai/lang-man.tvr5v7" },
            { label: "Lịch Sử", link: "/the-loai/lich-su.oWQlWU" },
            { label: "Marvel", link: "/the-loai/marvel.QriAOn" },
            { label: "Miền Viễn Tây", link: "/the-loai/mien-vien-tay.5J36Eg" },
            { label: "Nghề Nghiệp", link: "/the-loai/nghe-nghiep.noqlEF" },
            { label: "Người Mẫu", link: "/the-loai/nguoi-mau.xUdGau" },
            { label: "Nhạc Kịch", link: "/the-loai/nhac-kich.QyBY48" },
            { label: "Phiêu Lưu", link: "/the-loai/phieu-luu.wca3Bp" },
            { label: "Phép Thuật", link: "/the-loai/phep-thuat.m62MH1" },
            { label: "Siêu Anh Hùng", link: "/the-loai/sieu-anh-hung.OW2M9i" },
            { label: "Thiếu Nhi", link: "/the-loai/thieu-nhi.TVBHfX" },
            { label: "Thần Thoại", link: "/the-loai/than-thoai.ntFmAk" },
            { label: "Thể Thao", link: "/the-loai/the-thao.v6YIEt" },
            { label: "Truyền Hình Thực Tế", link: "/the-loai/truyen-hinh-thuc-te.PwWb5h" },
            { label: "Tuổi Trẻ", link: "/the-loai/tuoi-tre.iu6SWz" },
            { label: "Tài Liệu", link: "/the-loai/tai-lieu.8r9bCI" },
            { label: "Tâm Lý", link: "/the-loai/tam-ly.epV6Ny" },
            { label: "Tình Cảm", link: "/the-loai/tinh-cam.4RxsoY" },
            { label: "Tập Luyện", link: "/the-loai/tap-luyen.qHXC9f" },
            { label: "Viễn Tưởng", link: "/the-loai/vien-tuong.wN4Ysm" },
            { label: "Võ Thuật", link: "/the-loai/vo-thuat.s68Tsc" },
            { label: "Xuyên Không", link: "/the-loai/xuyen-khong.ujD7Uu" },
            { label: "Đau Thương", link: "/the-loai/dau-thuong.xY58yG" },
            { label: "Đời Thường", link: "/the-loai/doi-thuong.Lnhyb0" },
            { label: "Ẩm Thực", link: "/the-loai/am-thuc.nYHmnx" },
        ],
    },
    {
        label: "Quốc gia",
        link: "#",
        subMenu: [
            { label: "Anh", link: "/quoc-gia/anh.IJFlDx" },
            { label: "Canada", link: "/quoc-gia/canada.Bgcgfm" },
            { label: "Hàn Quốc", link: "/quoc-gia/han-quoc.fflHXZ" },
            { label: "Hồng Kông", link: "/quoc-gia/hong-kong.BTrE0k" },
            { label: "Mỹ", link: "/quoc-gia/my.w1rcIP" },
            { label: "Nhật Bản", link: "/quoc-gia/nhat-ban.vPmCDj" },
            { label: "Pháp", link: "/quoc-gia/phap.Sxo1JM" },
            { label: "Thái Lan", link: "/quoc-gia/thai-lan.rU0n7z" },
            { label: "Trung Quốc", link: "/quoc-gia/trung-quoc.r4spp3" },
            { label: "Úc", link: "/quoc-gia/uc.eIHaxE" },
            { label: "Đài Loan", link: "/quoc-gia/dai-loan.s5PnA4" },
            { label: "Đức", link: "/quoc-gia/duc.fJ7X7d" },
        ],
    },
    {
        label: "Xem Chung",
        link: "/xem-chung",
    },
    {
        label: "Thêm",
        link: "#",
        subMenu: [
            { label: "Lịch chiếu", link: "/lich-chieu" },
            { label: "Chủ đề", link: "/chu-de" },
            { label: "Diễn viên", link: "/dien-vien" },
        ],
    },
    {
        label: "Rổ Bóng",
        link: "https://robong.net",
        external: true,
        extraClass: "new",
    },
];
const NavMenu: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const chunkArray = (arr: any[], size: number) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const toggleMenu = (label: string) => {
        setActiveMenu((prev) => (prev === label ? null : label));
    };

    return (
        <nav className="flex items-center gap-8 text-sm font-light text-white relative">
            {menuItems.map((item, idx) => (
                <div key={idx} className="relative">
                    <button
                        onClick={() => toggleMenu(item.label)}
                        className="flex items-center gap-1 hover:text-[#ffd875] transition-colors relative"
                    >
                        {item.extraClass === "new" && <span className="new mr-1"></span>}
                        {item.label}

                        {item.subMenu && (
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${activeMenu === item.label ? "rotate-180" : ""
                                    }`}
                            />
                        )}
                    </button>

                    {/* Submenu */}
                    {item.subMenu && activeMenu === item.label && (
                        <div className="absolute left-0 top-[140%] bg-[#151821]/80 backdrop-blur-md text-white py-5 pl-6 rounded-2xl shadow-xl z-20 flex gap-8 animate-fadeIn">
                            {chunkArray(item.subMenu, 15).map((col, colIdx) => (
                                <div key={colIdx} className="flex flex-col min-w-[160px]">
                                    {col.map((sub, i) => (
                                        <a
                                            key={i}
                                            href={sub.link}
                                            className="hover:text-[#ffd875] transition-colors text-sm py-2"
                                        >
                                            {sub.label}
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

        </nav>
    );
};

export default NavMenu;