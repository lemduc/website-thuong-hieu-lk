import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/cbec3a7f-a667-48d4-b49b-3fb2ce23bb2f.jpg" 
          alt="Liên hệ" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-xl max-w-2xl px-4">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Gửi tin nhắn cho chúng tôi</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nhập địa chỉ email của bạn"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập chủ đề"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-6 text-lg">
                    Gửi tin nhắn
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Thông tin liên hệ</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Điện thoại</h3>
                      <p className="text-gray-700">+84 948 373 838</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">lkcorporation.vn@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Địa chỉ</h3>
                      <p className="text-gray-700">
                        Số 12, ngõ 900, thôn Vực, Xã Thanh Liệt, Huyện Thanh Trì, Thành phố Hà Nội, Việt Nam
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Giờ làm việc</h3>
                      <p className="text-gray-700">
                        8h30-17h30 Từ thứ 2- thứ 7 hàng tuần
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Kết nối với chúng tôi</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2962013680726!2d105.8233888760614!3d20.980659390249445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac5d6ec1b8cf%3A0x5d7b850e046519!2zVGhhbmggTGnhu4d0LCBUaGFuaCBUcsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1718235465889!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LK Distribution Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Câu hỏi thường gặp</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những câu hỏi thường gặp về dịch vụ của chúng tôi
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Làm thế nào để trở thành đại lý của LK Distribution?</h3>
                <p className="text-gray-700">
                  Để trở thành đại lý của LK Distribution, bạn có thể liên hệ với chúng tôi qua số điện thoại hoặc email. Đội ngũ của chúng tôi sẽ tư vấn và hỗ trợ bạn trong quá trình đăng ký và cung cấp thông tin chi tiết về quy trình hợp tác.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">LK Distribution có cung cấp đào tạo cho đại lý không?</h3>
                <p className="text-gray-700">
                  Có, chúng tôi cung cấp chương trình đào tạo toàn diện cho tất cả các đại lý của mình. Chương trình bao gồm kiến thức về sản phẩm, kỹ thuật chăm sóc da, và chiến lược kinh doanh để giúp bạn thành công trong việc phân phối các sản phẩm của chúng tôi.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">LK Distribution có chính sách bảo hành sản phẩm không?</h3>
                <p className="text-gray-700">
                  Tất cả sản phẩm được phân phối bởi LK Distribution đều có chính sách bảo hành rõ ràng. Chúng tôi cam kết về chất lượng sản phẩm và sẵn sàng hỗ trợ đổi trả trong trường hợp sản phẩm bị lỗi do nhà sản xuất.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tôi có thể mua sản phẩm với số lượng nhỏ không?</h3>
                <p className="text-gray-700">
                  LK Distribution chủ yếu làm việc với các đại lý và nhà phân phối theo mô hình bán buôn. Tuy nhiên, chúng tôi cũng có các chính sách linh hoạt dành cho các đối tác mới. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết về số lượng đặt hàng tối thiểu.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/faq">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Xem tất cả câu hỏi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
