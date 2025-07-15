import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const newsCategories = [
    "Tất cả",
    "Sự kiện",
    "Kiến thức làm đẹp",
    "Thông báo",
    "Đào tạo"
  ];
  
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  
  const allNews = [
    {
      id: "1",
      title: "Sự kiện ra mắt dòng sản phẩm mới của laCabine",
      date: "10/06/2025",
      category: "Sự kiện",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
      excerpt: "LK Distribution tổ chức thành công sự kiện ra mắt dòng sản phẩm mới của laCabine tại Hà Nội với sự tham gia của các chuyên gia da liễu hàng đầu và hơn 200 đại lý, đối tác trong ngành làm đẹp.",
      content: "Đoạn nội dung chi tiết về sự kiện ra mắt..."
    },
    {
      id: "2",
      title: "Hội thảo chia sẻ kiến thức làm đẹp cùng chuyên gia",
      date: "05/06/2025",
      category: "Đào tạo",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
      excerpt: "Các chuyên gia hàng đầu trong ngành làm đẹp đã có buổi chia sẻ về các phương pháp chăm sóc da hiệu quả, xu hướng mới nhất và giải đáp thắc mắc của các đại lý.",
      content: "Đoạn nội dung chi tiết về hội thảo..."
    },
    {
      id: "3",
      title: "LK Distribution mở rộng mạng lưới đại lý miền Nam",
      date: "01/06/2025",
      category: "Thông báo",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/91052d42-10b9-414a-8113-e6513e020aed.jpg",
      excerpt: "Nhằm đáp ứng nhu cầu ngày càng tăng, LK Distribution thông báo mở rộng mạng lưới đại lý tại khu vực miền Nam với chính sách ưu đãi đặc biệt cho các đối tác mới.",
      content: "Đoạn nội dung chi tiết về mở rộng mạng lưới..."
    },
    {
      id: "4",
      title: "Bí quyết chăm sóc da trong mùa hè nóng ẩm",
      date: "25/05/2025",
      category: "Kiến thức làm đẹp",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c4bc7562-2f74-402f-b926-ce49a54ac91c.jpg",
      excerpt: "Mùa hè với thời tiết nóng ẩm đặt ra nhiều thách thức cho việc chăm sóc da. Bài viết này chia sẻ những bí quyết giúp bạn bảo vệ làn da khỏe mạnh trong mùa hè.",
      content: "Đoạn nội dung chi tiết về chăm sóc da mùa hè..."
    },
    {
      id: "5",
      title: "Carelika ra mắt dòng sản phẩm chống lão hóa mới",
      date: "20/05/2025",
      category: "Sự kiện",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/65c1dc07-d77f-44a4-8331-acca27d546a3.jpg",
      excerpt: "Thương hiệu Carelika vừa chính thức ra mắt dòng sản phẩm chống lão hóa mới với công thức độc quyền từ chiết xuất hoa hồng núi Alps và các peptide thế hệ mới.",
      content: "Đoạn nội dung chi tiết về sản phẩm mới..."
    },
    {
      id: "6",
      title: "Khóa đào tạo kỹ thuật viên chăm sóc da chuyên sâu",
      date: "15/05/2025",
      category: "Đào tạo",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/a142e1ec-a8fd-4b07-a326-a46388d62346.jpg",
      excerpt: "LK Distribution tổ chức khóa đào tạo kỹ thuật viên chăm sóc da chuyên sâu với sự hướng dẫn của các chuyên gia từ Châu Âu, giúp nâng cao kỹ năng cho đội ngũ kỹ thuật viên.",
      content: "Đoạn nội dung chi tiết về khóa đào tạo..."
    },
    {
      id: "7",
      title: "Hiểu đúng về nám và cách điều trị hiệu quả",
      date: "10/05/2025",
      category: "Kiến thức làm đẹp",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c570f86c-728e-4b59-9a57-6225dd1fbc96.jpg",
      excerpt: "Nám là vấn đề da phổ biến đặc biệt ở phụ nữ châu Á. Bài viết này giúp bạn hiểu đúng về nguyên nhân, cơ chế hình thành nám và các phương pháp điều trị hiệu quả.",
      content: "Đoạn nội dung chi tiết về nám và cách điều trị..."
    },
    {
      id: "8",
      title: "LK Distribution nhận giải thưởng Doanh nghiệp xuất sắc 2025",
      date: "05/05/2025",
      category: "Thông báo",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c397535c-b675-4a07-87e8-dba88352e4f3.jpg",
      excerpt: "LK Distribution vinh dự nhận giải thưởng Doanh nghiệp xuất sắc trong ngành làm đẹp năm 2025 do sự đóng góp tích cực vào sự phát triển của ngành công nghiệp làm đẹp Việt Nam.",
      content: "Đoạn nội dung chi tiết về giải thưởng..."
    },
    {
      id: "9",
      title: "5 bước chăm sóc da cơ bản bạn cần biết",
      date: "01/05/2025",
      category: "Kiến thức làm đẹp",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/009364e0-6c94-4d3f-9bba-7b6b90faeb1d.jpg",
      excerpt: "Chăm sóc da đúng cách không phải là điều phức tạp. Bài viết này hướng dẫn bạn 5 bước cơ bản nhất để có một làn da khỏe mạnh và rạng rỡ mỗi ngày.",
      content: "Đoạn nội dung chi tiết về các bước chăm sóc da..."
    }
  ];

  // Lọc tin tức theo danh mục và từ khóa tìm kiếm
  const filteredNews = allNews.filter(item => {
    const matchCategory = activeCategory === "Tất cả" || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/8772c90d-cf07-44f3-a8b9-a8c066818a63.jpg" 
          alt="Tin tức & Sự kiện" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin Tức & Sự Kiện</h1>
          <p className="text-xl max-w-2xl px-4">
            Cập nhật những tin tức mới nhất về các sự kiện, hoạt động và thông tin ngành làm đẹp
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
              {newsCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm tin tức..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`}>
                  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                      <p className="text-blue-600 font-medium hover:underline">Đọc thêm</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">Không tìm thấy kết quả</h3>
              <p className="text-gray-600 mb-8">Không có tin tức nào phù hợp với tìm kiếm của bạn</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("Tất cả");
                }}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Xem tất cả tin tức
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Đăng ký nhận tin tức mới nhất</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nhận thông tin cập nhật về sự kiện, tin tức ngành làm đẹp và các chương trình đào tạo mới nhất
          </p>
          <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="flex-1 px-4 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 whitespace-nowrap">
              Đăng ký ngay
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo mật thông tin cá nhân
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;