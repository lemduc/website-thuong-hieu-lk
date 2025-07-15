import { useParams, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

const NewsDetail = () => {
  const { newsId } = useParams();
  
  // Dữ liệu tin tức chi tiết
  const newsData = {
    "1": {
      title: "Sự kiện ra mắt dòng sản phẩm mới của laCabine",
      date: "10/06/2025",
      author: "Admin LK",
      category: "Sự kiện",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
      content: [
        "LK Distribution đã tổ chức thành công sự kiện ra mắt dòng sản phẩm mới của thương hiệu laCabine tại khách sạn JW Marriott Hà Nội vào ngày 10/06/2025. Sự kiện có sự tham gia của hơn 200 đại lý, đối tác trong ngành làm đẹp cùng các chuyên gia da liễu hàng đầu.",
        "Dòng sản phẩm mới của laCabine - Advanced Peptide Complex - được giới thiệu tại sự kiện là kết quả của hơn 5 năm nghiên cứu và phát triển. Với công thức chứa 5 loại peptide thế hệ mới kết hợp cùng Hyaluronic Acid đa phân tử và chiết xuất từ tảo biển sâu, dòng sản phẩm này hứa hẹn mang lại hiệu quả vượt trội trong việc chống lão hóa, làm săn chắc da và cải thiện độ đàn hồi.",
        "Trong buổi ra mắt, Tiến sĩ Maria Rodriguez - Giám đốc nghiên cứu và phát triển của laCabine đã có bài thuyết trình chi tiết về công nghệ độc quyền PeptiScience™ được ứng dụng trong dòng sản phẩm mới. Bà cũng chia sẻ các kết quả nghiên cứu lâm sàng cho thấy 87% người dùng thấy da săn chắc hơn và 92% nhận thấy nếp nhăn giảm đáng kể sau 8 tuần sử dụng.",
        "Bà Bùi Thanh Loan - Founder của LK Distribution phát biểu: \"Chúng tôi rất tự hào được tiếp tục là đối tác phân phối độc quyền của laCabine tại Việt Nam. Dòng sản phẩm Advanced Peptide Complex là một bước tiến quan trọng trong việc mang công nghệ chăm sóc da tiên tiến từ Châu Âu đến với người tiêu dùng Việt Nam. Chúng tôi tin rằng đây sẽ là dòng sản phẩm thành công, đáp ứng nhu cầu ngày càng cao của khách hàng về các giải pháp chống lão hóa hiệu quả.\"",
        "Trong khuôn khổ sự kiện, các đại lý còn được tham gia workshop thực hành về quy trình sử dụng sản phẩm và các kỹ thuật massage đặc biệt để tối ưu hóa hiệu quả của dòng sản phẩm mới. Đồng thời, LK Distribution cũng công bố chương trình hỗ trợ đặc biệt dành cho các đại lý trong giai đoạn giới thiệu sản phẩm ra thị trường.",
        "Dòng sản phẩm Advanced Peptide Complex của laCabine sẽ chính thức có mặt tại các đại lý ủy quyền của LK Distribution trên toàn quốc từ ngày 15/06/2025, bao gồm 4 sản phẩm: Serum đậm đặc, Kem dưỡng ban ngày, Kem dưỡng ban đêm và Kem mắt."
      ],
      gallery: [
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/63ee2d5f-dbd4-4c83-a072-ef314eb1aad7.jpg",
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/d6b56064-8345-47ad-b035-3a7e4a080dec.jpg"
      ],
      tags: ["laCabine", "ra mắt sản phẩm", "chống lão hóa", "peptide"]
    },
    "2": {
      title: "Hội thảo chia sẻ kiến thức làm đẹp cùng chuyên gia",
      date: "05/06/2025",
      author: "Ban biên tập",
      category: "Đào tạo",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
      content: [
        "Ngày 05/06/2025, LK Distribution đã tổ chức thành công hội thảo chia sẻ kiến thức làm đẹp với chủ đề \"Xu hướng chăm sóc da 2025 - Từ khoa học đến thực tiễn\" tại Trung tâm Hội nghị Quốc gia, Hà Nội. Sự kiện quy tụ hơn 300 chuyên gia, bác sĩ da liễu và đại diện các đại lý trên toàn quốc.",
        "Hội thảo có sự tham gia của các diễn giả nổi tiếng trong ngành làm đẹp, bao gồm TS. Nguyễn Văn A - Chuyên gia da liễu hàng đầu Việt Nam, TS. Sophie Bernard - Chuyên gia nghiên cứu từ Viện Da liễu Paris và ThS. Trần Thị B - Giám đốc đào tạo của LK Distribution.",
        "Các chủ đề chính được thảo luận trong hội thảo bao gồm: Công nghệ mới trong điều trị nám và tăng sắc tố, Giải pháp toàn diện cho da nhạy cảm, và Xu hướng chống lão hóa không xâm lấn. Các diễn giả đã chia sẻ những kiến thức chuyên sâu, kết quả nghiên cứu mới nhất và đặc biệt là các phương pháp ứng dụng thực tế trong điều trị da.",
        "TS. Sophie Bernard đã có bài thuyết trình đặc biệt về \"Vai trò của hàng rào bảo vệ da trong các vấn đề da phổ biến\", nhấn mạnh tầm quan trọng của việc duy trì và phục hồi hàng rào bảo vệ da trong các liệu trình điều trị. Bà cũng giới thiệu công nghệ mới nhất từ châu Âu trong việc tăng cường hàng rào bảo vệ da, mang lại hiệu quả điều trị bền vững.",
        "Phần hỏi đáp sau mỗi bài thuyết trình đã thu hút sự tham gia tích cực của các đại biểu. Nhiều câu hỏi chuyên sâu về quy trình điều trị, kết hợp sản phẩm và xử lý các tình huống đặc biệt đã được các chuyên gia giải đáp chi tiết.",
        "Bên cạnh các bài thuyết trình, hội thảo còn tổ chức các workshop thực hành cho các kỹ thuật viên và chuyên gia tại các đại lý. Các workshop này tập trung vào kỹ thuật chẩn đoán da, phương pháp massage nâng cao và cách kết hợp các sản phẩm để tối ưu hóa hiệu quả điều trị.",
        "Kết thúc hội thảo, LK Distribution đã trao chứng nhận tham dự cho tất cả các đại biểu và công bố lịch đào tạo chuyên sâu cho nửa cuối năm 2025. Đồng thời, công ty cũng giới thiệu sách hướng dẫn mới \"Cẩm nang chăm sóc da chuyên nghiệp\" được biên soạn bởi đội ngũ chuyên gia của LK Distribution, sẽ được phát hành vào tháng 7/2025."
      ],
      gallery: [
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/322b7469-f0cf-4776-9130-9e38eac4e4f9.jpg",
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/fb538183-9f7a-469b-911b-c8f6e6291af2.jpg"
      ],
      tags: ["hội thảo", "đào tạo", "chuyên gia da liễu", "xu hướng làm đẹp"]
    },
    "3": {
      title: "LK Distribution mở rộng mạng lưới đại lý miền Nam",
      date: "01/06/2025",
      author: "Phòng Marketing",
      category: "Thông báo",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/91052d42-10b9-414a-8113-e6513e020aed.jpg",
      content: [
        "LK Distribution chính thức thông báo kế hoạch mở rộng mạng lưới đại lý tại khu vực miền Nam Việt Nam trong quý 3 năm 2025. Đây là một phần trong chiến lược phát triển thị trường toàn quốc của công ty, nhằm đáp ứng nhu cầu ngày càng tăng về các sản phẩm chăm sóc da cao cấp từ châu Âu.",
        "Theo bà Đỗ Thị C, Giám đốc phát triển thị trường của LK Distribution: \"Thị trường miền Nam đang phát triển rất nhanh với nhu cầu cao về các sản phẩm chăm sóc da chất lượng cao và dịch vụ chuyên nghiệp. Chúng tôi nhận thấy đây là thời điểm lý tưởng để mở rộng mạng lưới đại lý, đưa các thương hiệu độc quyền của chúng tôi đến gần hơn với khách hàng tại khu vực này.\"",
        "Kế hoạch mở rộng bao gồm việc tuyển chọn 30 đại lý mới tại các thành phố lớn như TP.HCM, Cần Thơ, Nha Trang và Đà Nẵng. Các đại lý mới sẽ được hưởng chính sách ưu đãi đặc biệt, bao gồm: Hỗ trợ đầu tư ban đầu, chương trình đào tạo chuyên sâu, và các chính sách marketing hỗ trợ.",
        "LK Distribution sẽ tổ chức chuỗi hội thảo giới thiệu cơ hội hợp tác tại TP.HCM vào các ngày 15, 16, 17/06/2025 tại Khách sạn Rex. Tại đây, các đối tác tiềm năng sẽ được tìm hiểu chi tiết về các thương hiệu độc quyền, chính sách hợp tác và các chương trình hỗ trợ đại lý.",
        "Bên cạnh việc tuyển chọn đại lý mới, LK Distribution cũng sẽ nâng cấp văn phòng đại diện tại TP.HCM thành Trung tâm Phân phối miền Nam với diện tích hơn 500m², bao gồm kho hàng, trung tâm đào tạo và showroom trưng bày sản phẩm. Trung tâm mới dự kiến đi vào hoạt động từ tháng 8/2025, giúp rút ngắn thời gian giao hàng và tăng cường hỗ trợ kỹ thuật cho các đại lý tại khu vực miền Nam.",
        "\"Chúng tôi không chỉ tìm kiếm đối tác kinh doanh mà còn muốn xây dựng một cộng đồng các chuyên gia làm đẹp tại miền Nam, cùng nhau nâng cao chất lượng dịch vụ và mang đến những giải pháp chăm sóc da tốt nhất cho người tiêu dùng Việt Nam,\" bà Đỗ Thị C chia sẻ thêm.",
        "Các đối tác quan tâm có thể đăng ký tham dự hội thảo hoặc tìm hiểu thêm thông tin chi tiết về chương trình mở rộng đại lý miền Nam thông qua website chính thức của LK Distribution hoặc liên hệ trực tiếp với phòng Phát triển Thị trường."
      ],
      gallery: [
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/91052d42-10b9-414a-8113-e6513e020aed.jpg",
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/e0bc9e10-3518-4b07-b781-205e3561e26d.jpg",
        "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/34981a8e-cc7c-4da8-b2fb-1ced40cc13a1.jpg"
      ],
      tags: ["mở rộng đại lý", "miền Nam", "cơ hội hợp tác", "phát triển thị trường"]
    }
  };
  
  // Lấy dữ liệu tin tức dựa trên newsId
  const news = newsData[newsId as keyof typeof newsData];
  
  // Nếu không tìm thấy tin tức
  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Không tìm thấy tin tức</h1>
        <p className="text-gray-600 mb-8">Tin tức bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <Link to="/news">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Quay lại trang Tin tức
          </Button>
        </Link>
      </div>
    );
  }

  // Lấy danh sách tin tức liên quan (loại trừ tin hiện tại)
  const relatedNews = Object.entries(newsData)
    .filter(([id]) => id !== newsId)
    .map(([id, item]) => ({ id, ...item }))
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{news.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>{news.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
              <ChevronLeft size={20} />
              <span>Quay lại trang Tin tức</span>
            </Link>
            
            {/* Content */}
            <div className="bg-white rounded-lg">
              <div className="prose prose-lg max-w-none mb-10">
                {news.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Image Gallery */}
              {news.gallery && news.gallery.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Hình ảnh sự kiện</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {news.gallery.map((image, index) => (
                      <div key={index} className="aspect-video overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${news.title} - Hình ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tags */}
              {news.tags && news.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-10">
                  <span className="font-semibold text-gray-700">Tags:</span>
                  {news.tags.map((tag, index) => (
                    <Link key={index} to={`/news?tag=${tag}`}>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              
              {/* Share */}
              <div className="border-t border-gray-200 pt-6 mb-10">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-700 flex items-center">
                    <Share2 size={18} className="mr-2" /> Chia sẻ:
                  </span>
                  <div className="flex gap-2">
                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors duration-200">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors duration-200">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related News */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Tin tức liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`}>
                  <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                      <p className="text-blue-600 font-medium hover:underline">Đọc thêm</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;