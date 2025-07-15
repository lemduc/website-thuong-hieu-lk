import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

type FAQCategory = {
  id: string;
  name: string;
  questions: FAQItem[];
};

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const faqCategories: FAQCategory[] = [
    {
      id: "general",
      name: "Thông tin chung",
      questions: [
        {
          question: "LK Distribution là công ty gì?",
          answer: "LK Distribution là công ty nhập khẩu và phân phối mỹ phẩm chính hãng từ Châu Âu, với hơn 10 năm kinh nghiệm, đã và đang tiếp tục mang đến những sản phẩm chất lượng cao, uy tín hàng đầu cho thị trường làm đẹp Việt Nam."
        },
        {
          question: "LK Distribution phân phối những thương hiệu nào?",
          answer: "LK Distribution hiện đang phân phối độc quyền các thương hiệu mỹ phẩm cao cấp từ Châu Âu bao gồm: laCabine, Puca Pure & Care, Carelika, và Optimum Derma Aciditate. Mỗi thương hiệu đều có những ưu điểm và công dụng riêng biệt trong việc chăm sóc da."
        },
        {
          question: "Các sản phẩm của LK Distribution có giấy phép lưu hành tại Việt Nam không?",
          answer: "Tất cả các sản phẩm do LK Distribution phân phối đều có đầy đủ giấy phép lưu hành tại thị trường Việt Nam. Chúng tôi cam kết tuân thủ các quy định pháp luật về nhập khẩu và phân phối mỹ phẩm, đảm bảo sản phẩm đến tay người tiêu dùng là hàng chính hãng, có nguồn gốc xuất xứ rõ ràng."
        },
        {
          question: "Sản phẩm của LK Distribution có phù hợp với làn da người Việt Nam không?",
          answer: "Các sản phẩm do LK Distribution phân phối đều được nghiên cứu kỹ lưỡng và lựa chọn phù hợp với làn da người Việt Nam. Chúng tôi có đội ngũ chuyên gia da liễu tư vấn để đảm bảo các sản phẩm an toàn và hiệu quả cho người dùng trong nước."
        }
      ]
    },
    {
      id: "dealer",
      name: "Đại lý & Nhượng quyền",
      questions: [
        {
          question: "Làm thế nào để trở thành đại lý của LK Distribution?",
          answer: "Để trở thành đại lý của LK Distribution, bạn có thể liên hệ với chúng tôi qua số điện thoại hoặc email. Đội ngũ của chúng tôi sẽ tư vấn và hỗ trợ bạn trong quá trình đăng ký và cung cấp thông tin chi tiết về quy trình hợp tác."
        },
        {
          question: "Có yêu cầu đầu tư tối thiểu để trở thành đại lý không?",
          answer: "Chúng tôi có các gói đầu tư đa dạng phù hợp với nhiều quy mô kinh doanh khác nhau. Mức đầu tư tối thiểu sẽ phụ thuộc vào loại hình đại lý, vị trí kinh doanh và các thương hiệu bạn muốn phân phối. Vui lòng liên hệ trực tiếp để nhận tư vấn chi tiết về mức đầu tư phù hợp."
        },
        {
          question: "LK Distribution có chính sách hỗ trợ đại lý như thế nào?",
          answer: "LK Distribution cung cấp nhiều hỗ trợ cho đại lý bao gồm: đào tạo sản phẩm và kỹ thuật chăm sóc da, tài liệu marketing, hỗ trợ truyền thông và quảng cáo, tư vấn thiết kế không gian kinh doanh, và đồng hành trong các hoạt động xúc tiến bán hàng. Chúng tôi cam kết đồng hành cùng đại lý để xây dựng kinh doanh bền vững."
        },
        {
          question: "Thời gian ký hợp đồng đại lý là bao lâu?",
          answer: "Thời gian hợp đồng đại lý thông thường là 1-2 năm và có thể gia hạn dựa trên kết quả hợp tác. Chúng tôi linh hoạt trong việc thiết lập các điều khoản hợp đồng để đảm bảo lợi ích tốt nhất cho cả hai bên."
        }
      ]
    },
    {
      id: "products",
      name: "Sản phẩm",
      questions: [
        {
          question: "Sản phẩm của LK Distribution có thành phần gì đặc biệt?",
          answer: "Các sản phẩm do LK Distribution phân phối đều chứa các thành phần hoạt tính cao cấp từ Châu Âu như: Retinol, Acid Hyaluronic, Vitamin C, Niacinamide, chiết xuất thực vật và nhiều thành phần đột phá khác. Mỗi thương hiệu có công thức riêng biệt, được nghiên cứu và phát triển bởi các chuyên gia hàng đầu trong ngành công nghiệp mỹ phẩm."
        },
        {
          question: "Sản phẩm có an toàn cho mọi loại da không?",
          answer: "Các dòng sản phẩm của chúng tôi được thiết kế cho các loại da khác nhau. Một số sản phẩm phù hợp với mọi loại da, trong khi một số khác được phát triển đặc biệt cho da nhạy cảm, da dầu, da khô hoặc da hỗn hợp. Chúng tôi khuyến nghị khách hàng tham khảo ý kiến chuyên gia hoặc tư vấn từ đại lý để chọn sản phẩm phù hợp nhất với làn da của mình."
        },
        {
          question: "Các sản phẩm có được kiểm nghiệm lâm sàng không?",
          answer: "Tất cả các sản phẩm do LK Distribution phân phối đều đã trải qua quá trình kiểm nghiệm lâm sàng nghiêm ngặt tại các phòng thí nghiệm ở Châu Âu trước khi được đưa vào thị trường. Các sản phẩm đều đạt tiêu chuẩn an toàn và hiệu quả theo quy định của EU và được cấp phép lưu hành tại Việt Nam."
        },
        {
          question: "Làm thế nào để phân biệt sản phẩm chính hãng do LK Distribution phân phối?",
          answer: "Các sản phẩm chính hãng do LK Distribution phân phối đều có tem chống hàng giả, mã QR truy xuất nguồn gốc và được bán qua hệ thống đại lý chính thức của chúng tôi. Khách hàng có thể kiểm tra tính xác thực của sản phẩm thông qua website hoặc hotline của công ty."
        }
      ]
    },
    {
      id: "usage",
      name: "Sử dụng sản phẩm",
      questions: [
        {
          question: "Làm thế nào để sử dụng sản phẩm hiệu quả nhất?",
          answer: "Để đạt hiệu quả tốt nhất, nên sử dụng sản phẩm theo phác đồ và hướng dẫn cụ thể cho từng loại sản phẩm. Các bước cơ bản thường bao gồm: làm sạch, toner, serum, kem dưỡng và kem chống nắng (vào buổi sáng). Tần suất sử dụng tùy thuộc vào từng sản phẩm, thông thường là 1-2 lần mỗi ngày."
        },
        {
          question: "Có thể kết hợp các sản phẩm khác nhau không?",
          answer: "Có thể kết hợp các sản phẩm trong cùng một thương hiệu hoặc giữa các thương hiệu khác nhau, tuy nhiên cần lưu ý về sự tương thích giữa các thành phần hoạt tính. Ví dụ, một số thành phần như Retinol và Vitamin C thường không nên sử dụng cùng lúc. Chúng tôi khuyến nghị tham khảo ý kiến chuyên gia hoặc tuân theo phác đồ điều trị được đề xuất."
        },
        {
          question: "Thời gian sử dụng bao lâu thì thấy hiệu quả?",
          answer: "Thời gian để thấy hiệu quả phụ thuộc vào loại sản phẩm và tình trạng da. Thông thường, các sản phẩm dưỡng ẩm có thể mang lại cảm giác tức thì, trong khi các sản phẩm điều trị chuyên sâu như serum trị nám, chống lão hóa có thể mất từ 4-12 tuần để thấy kết quả rõ rệt. Kiên trì sử dụng theo hướng dẫn là chìa khóa để đạt được hiệu quả tối ưu."
        },
        {
          question: "Nếu gặp kích ứng khi sử dụng sản phẩm thì phải làm gì?",
          answer: "Nếu gặp kích ứng như đỏ, ngứa, rát khi sử dụng sản phẩm, bạn nên ngừng sử dụng ngay lập tức và rửa sạch với nước. Trong trường hợp kích ứng nghiêm trọng hoặc kéo dài, nên tham khảo ý kiến bác sĩ da liễu. Bạn cũng có thể liên hệ với đại lý hoặc hotline của LK Distribution để được tư vấn và hỗ trợ."
        }
      ]
    },
    {
      id: "policy",
      name: "Chính sách & Bảo hành",
      questions: [
        {
          question: "Chính sách bảo hành sản phẩm của LK Distribution như thế nào?",
          answer: "LK Distribution áp dụng chính sách bảo hành cho các sản phẩm bị lỗi do nhà sản xuất. Khách hàng có thể đổi sản phẩm mới hoặc hoàn tiền trong vòng 30 ngày kể từ ngày mua nếu sản phẩm có vấn đề về chất lượng, với điều kiện sản phẩm còn nguyên vẹn và có hóa đơn mua hàng."
        },
        {
          question: "Làm thế nào để kiểm tra tính xác thực của sản phẩm?",
          answer: "Khách hàng có thể kiểm tra tính xác thực của sản phẩm thông qua mã QR trên bao bì hoặc tem chống hàng giả. Khi quét mã, khách hàng sẽ được chuyển đến trang web xác thực sản phẩm với thông tin chi tiết về lô sản xuất, hạn sử dụng và đặc điểm nhận dạng của sản phẩm chính hãng."
        },
        {
          question: "LK Distribution có chính sách hoàn tiền không?",
          answer: "LK Distribution áp dụng chính sách hoàn tiền trong vòng 14 ngày đối với sản phẩm bị lỗi do nhà sản xuất hoặc không đúng với mô tả. Sản phẩm hoàn trả phải còn nguyên bao bì, chưa qua sử dụng và có đầy đủ hóa đơn mua hàng. Các trường hợp đặc biệt sẽ được xem xét riêng."
        },
        {
          question: "Có thể đổi sản phẩm nếu không phù hợp với da không?",
          answer: "Chúng tôi khuyến khích khách hàng tham khảo ý kiến chuyên gia trước khi mua sản phẩm để đảm bảo sự phù hợp. Trong trường hợp đặc biệt khi sản phẩm gây kích ứng nghiêm trọng (có xác nhận của bác sĩ da liễu), chúng tôi sẽ xem xét việc đổi sang sản phẩm khác phù hợp hơn trong vòng 7 ngày kể từ ngày mua."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.find(category => category.id === activeCategory)?.questions || [];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/8772c90d-cf07-44f3-a8b9-a8c066818a63.jpg" 
          alt="Câu hỏi thường gặp" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Câu hỏi thường gặp</h1>
          <p className="text-xl max-w-2xl px-4">
            Giải đáp những thắc mắc của bạn về LK Distribution và các sản phẩm
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Danh mục</h3>
                <ul className="space-y-2">
                  {faqCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                          activeCategory === category.id
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ List */}
            <div className="md:w-3/4">
              <div className="bg-white">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {faqCategories.find(cat => cat.id === activeCategory)?.name || "Câu hỏi thường gặp"}
                </h2>

                <div className="space-y-6">
                  {filteredFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bạn vẫn còn thắc mắc?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, đừng ngần ngại liên hệ với chúng tôi. Đội ngũ hỗ trợ của LK Distribution luôn sẵn sàng giúp đỡ bạn.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              Liên hệ ngay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
