import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const banners = [
    {
      id: 1,
      title: "Phân phối mỹ phẩm chính hãng từ Châu Âu",
      description: "Kiến tạo giá trị kinh doanh bền vững trong làm đẹp và chăm sóc sức khỏe",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/63ee2d5f-dbd4-4c83-a072-ef314eb1aad7.jpg",
      link: "/about"
    },
    {
      id: 2,
      title: "Hơn 10 năm kinh nghiệm trong ngành",
      description: "Đồng hành cùng phát triển mạng lưới hơn 220 đại lý trên toàn quốc",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/d6b56064-8345-47ad-b035-3a7e4a080dec.jpg",
      link: "/about"
    },
    {
      id: 3,
      title: "Các thương hiệu độc quyền",
      description: "Mang đến những sản phẩm cao cấp, chất lượng cho thị trường làm đẹp Việt Nam",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/297beaf8-638b-4a7c-b00a-8f157c245d61.jpg",
      link: "/brands"
    }
  ];

  const brands = [
    { name: "Puca Pure & Care", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/8e153a17-8ff7-4b60-8229-c6f786de3706.jpg", path: "/brands/puca" },
    { name: "laCabine", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/1ccddecd-7ee1-48c6-8e13-1ab9e2b35cfc.jpg", path: "/brands/lacabine" },
    { name: "Carelika", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/f2736d1c-2130-4c71-ae86-82d198a1bbec.jpg", path: "/brands/carelika" },
    { name: "Optimum Derma Aciditate", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/e3393952-225f-4e7f-83c4-d0ceffbd79ec.jpg", path: "/brands/optimum" },
  ];

  const treatments = [
    { title: "Phác đồ trị mụn", image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c4bc7562-2f74-402f-b926-ce49a54ac91c.jpg", path: "/treatments/acne" },
    { title: "Phác đồ trị nám, sắc tố", image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c570f86c-728e-4b59-9a57-6225dd1fbc96.jpg", path: "/treatments/pigmentation" },
    { title: "Phác đồ chống lão hóa", image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c8a93e80-212a-4203-968b-02b96026e48b.jpg", path: "/treatments/anti-aging" },
    { title: "Phác đồ phục hồi da yếu nhạy cảm", image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/009364e0-6c94-4d3f-9bba-7b6b90faeb1d.jpg", path: "/treatments/sensitive-skin" },
  ];

  const news = [
    {
      title: "Sự kiện ra mắt dòng sản phẩm mới của laCabine",
      date: "10/06/2025",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
      excerpt: "LK Distribution tổ chức thành công sự kiện ra mắt dòng sản phẩm mới của laCabine tại Hà Nội...",
      path: "/news/1"
    },
    {
      title: "Hội thảo chia sẻ kiến thức làm đẹp cùng chuyên gia",
      date: "05/06/2025",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
      excerpt: "Các chuyên gia hàng đầu trong ngành làm đẹp đã có buổi chia sẻ về các phương pháp chăm sóc da hiệu quả...",
      path: "/news/2"
    },
    {
      title: "LK Distribution mở rộng mạng lưới đại lý miền Nam",
      date: "01/06/2025",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/91052d42-10b9-414a-8113-e6513e020aed.jpg",
      excerpt: "Nhằm đáp ứng nhu cầu ngày càng tăng, LK Distribution thông báo mở rộng mạng lưới đại lý tại khu vực miền Nam...",
      path: "/news/3"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Banner */}
      <section className="relative">
        <Carousel className="w-full" autoplay>
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] w-full">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            <CarouselPrevious className="relative left-0 translate-y-0 bg-green-700 hover:bg-green-800 text-white border-2 border-white shadow-lg" />
            <CarouselNext className="relative right-0 translate-y-0 bg-green-700 hover:bg-green-800 text-white border-2 border-white shadow-lg" />
          </div>
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Về LK Distribution</h2>
              <p className="text-gray-700 mb-6 text-lg">
                LK Distribution là công ty nhập khẩu và phân phối mỹ phẩm chính hãng từ Châu Âu, với hơn 10 năm kinh nghiệm, đã và đang tiếp tục mang đến những sản phẩm chất lượng cao, uy tín hàng đầu cho thị trường làm đẹp Việt Nam.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sứ mệnh</h3>
                <p className="text-gray-700">
                  Đồng hành kiến tạo giá trị kinh doanh bền vững trong làm đẹp và chăm sóc sức khỏe.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Giá trị cốt lõi</h3>
                <p className="text-gray-700">
                  Cân Bằng Lợi Ích - Quyết Liệt Sáng tạo - Đồng hành Hỗ trợ
                </p>
              </div>
              <Link to="/about">
                <Button className="bg-green-700 text-white hover:bg-green-800 flex items-center gap-2">
                  Xem thêm <MoveRight size={16} />
                </Button>
              </Link>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Dịch vụ của chúng tôi</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nhập khẩu & Phân phối độc quyền mỹ phẩm chính hãng</h4>
                      <p className="text-gray-600">Mang đến những sản phẩm chất lượng cao từ Châu Âu</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nhượng quyền kinh doanh mỹ phẩm Châu Âu</h4>
                      <p className="text-gray-600">Hỗ trợ đối tác phát triển kinh doanh bền vững</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Đào tạo chuyển giao</h4>
                      <p className="text-gray-600">Đào tạo chuyên sâu về sản phẩm và kỹ thuật chăm sóc da</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Đồng hành kinh doanh & marketing</h4>
                      <p className="text-gray-600">Hỗ trợ đối tác xây dựng và phát triển thương hiệu</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Các Thương Hiệu Phân Phối Độc Quyền</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi tự hào là nhà phân phối độc quyền của các thương hiệu mỹ phẩm hàng đầu từ Châu Âu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <Link key={index} to={brand.path}>
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                    <Button className="bg-green-700 text-white hover:bg-green-800 mt-2">
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/brands">
              <Button className="bg-green-700 text-white hover:bg-green-800">
                Xem tất cả thương hiệu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Protocols */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Phác Đồ Điều Trị</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những phác đồ điều trị hiệu quả được nghiên cứu và phát triển bởi các chuyên gia hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Link key={index} to={treatment.path}>
                <div className="group relative h-80 overflow-hidden rounded-lg">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{treatment.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/treatments">
              <Button className="bg-green-700 text-white hover:bg-green-800">
                Xem tất cả phác đồ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Tin Tức & Sự Kiện</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cập nhật những tin tức mới nhất về các sự kiện, hoạt động và thông tin ngành làm đẹp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Link key={index} to={item.path}>
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="h-56 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <p className="text-green-700 font-medium flex items-center gap-1">
                      Đọc thêm <MoveRight size={16} />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/news">
              <Button className="bg-green-700 text-white hover:bg-green-800">
                Xem tất cả tin tức
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Đăng Ký Nhận Thông Tin</h2>
            <p className="text-gray-100 mb-8">
              Đăng ký để nhận những thông tin mới nhất về sản phẩm, sự kiện và khuyến mãi đặc biệt
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-1 px-4 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-black text-white hover:bg-gray-800 px-6">
                Đăng ký
              </Button>
            </div>
            <p className="text-sm text-gray-100 mt-4">
              Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo mật thông tin cá nhân
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;