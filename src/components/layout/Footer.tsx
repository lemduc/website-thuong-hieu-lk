import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">LK Distribution</h2>
            <p className="mb-6 text-gray-100">
              Nhà phân phối độc quyền mỹ phẩm chính hãng Châu Âu với hơn 10 năm kinh nghiệm trong ngành làm đẹp
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-green-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-green-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-green-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Về LK
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Thương hiệu
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Phác đồ điều trị
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Tin tức sự kiện
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Q&A
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Thông tin liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-4 text-gray-200 flex-shrink-0 mt-1" />
                <p className="text-gray-100">+84 948 373 838</p>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-4 text-gray-200 flex-shrink-0 mt-1" />
                <p className="text-gray-100">lkcorporation.vn@gmail.com</p>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-4 text-gray-200 flex-shrink-0 mt-1" />
                <p className="text-gray-100">
                  Số 12, ngõ 900, thôn Vực, Xã Thanh Liệt, Huyện Thanh Trì, Thành phố Hà Nội, Việt Nam
                </p>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-4 text-gray-200 flex-shrink-0 mt-1" />
                <p className="text-gray-100">8h30-17h30 Từ thứ 2- thứ 7 hàng tuần</p>
              </li>
            </ul>
          </div>
          
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Thông tin doanh nghiệp</h3>
            <div className="space-y-4 text-gray-100">
              <p>Công ty Cổ phần phân phối và XNK LK Việt Nam</p>
              <p>Mã số thuế: 0107045684</p>
              <p>
                <span className="block text-sm text-gray-200 mt-6 mb-2">Chứng nhận kinh doanh</span>
                Được cấp phép bởi Sở Kế hoạch và Đầu tư Thành phố Hà Nội
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 mb-4 md:mb-0">
              &copy; {currentYear} LK Distribution. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-200 hover:text-white transition-colors duration-300">
                Điều khoản sử dụng
              </Link>
              <Link to="/privacy" className="text-gray-200 hover:text-white transition-colors duration-300">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;