import { Link } from "react-router";

const Treatments = () => {
  const treatments = [
    {
      id: "acne",
      title: "Phác đồ trị mụn",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c4bc7562-2f74-402f-b926-ce49a54ac91c.jpg",
      shortDesc: "Giải pháp toàn diện cho các loại mụn từ mụn trứng cá, mụn bọc đến mụn viêm nặng.",
      symptoms: ["Mụn đầu đen, mụn đầu trắng", "Mụn bọc, mụn mủ", "Da dầu, lỗ chân lông to", "Viêm đỏ, sưng tấy"]
    },
    {
      id: "pigmentation",
      title: "Phác đồ trị nám, sắc tố",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c570f86c-728e-4b59-9a57-6225dd1fbc96.jpg",
      shortDesc: "Điều trị các vấn đề về sắc tố da như nám, tàn nhang, đốm nâu và tối màu.",
      symptoms: ["Nám, tàn nhang", "Đốm nâu, sạm da", "Tối màu vùng quanh mắt, môi", "Da không đều màu"]
    },
    {
      id: "anti-aging",
      title: "Phác đồ chống lão hóa",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c8a93e80-212a-4203-968b-02b96026e48b.jpg",
      shortDesc: "Ngăn ngừa và cải thiện các dấu hiệu lão hóa như nếp nhăn, chảy xệ và kém đàn hồi.",
      symptoms: ["Nếp nhăn, đường chân chim", "Da chảy xệ, kém săn chắc", "Vùng mắt thâm, bọng mắt", "Da kém đàn hồi"]
    },
    {
      id: "sensitive-skin",
      title: "Phác đồ phục hồi da yếu nhạy cảm",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/009364e0-6c94-4d3f-9bba-7b6b90faeb1d.jpg",
      shortDesc: "Phục hồi và bảo vệ da nhạy cảm, dễ kích ứng và bị tổn thương do môi trường.",
      symptoms: ["Da đỏ, ngứa, châm chích", "Da bị kích ứng dễ dàng", "Da khô, bong tróc", "Hàng rào bảo vệ da yếu"]
    },
    {
      id: "oily-skin",
      title: "Phác đồ cân bằng da dầu",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
      shortDesc: "Kiểm soát lượng dầu thừa, se khít lỗ chân lông và cân bằng độ ẩm cho da dầu.",
      symptoms: ["Da bóng dầu", "Lỗ chân lông to", "Da dễ bị mụn", "Da thiếu nước"]
    },
    {
      id: "dull-skin",
      title: "Phác đồ phục hồi da xỉn màu",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
      shortDesc: "Làm sáng và cải thiện tông màu da xỉn, thiếu sức sống do stress và môi trường.",
      symptoms: ["Da xỉn màu, thiếu sức sống", "Da không đều màu", "Da thiếu sáng", "Da mệt mỏi"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/cbec3a7f-a667-48d4-b49b-3fb2ce23bb2f.jpg" 
          alt="Phác đồ điều trị" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Phác Đồ Điều Trị</h1>
          <p className="text-xl max-w-3xl px-4">
            Giải pháp chuyên sâu cho các vấn đề về da, được nghiên cứu và phát triển bởi các chuyên gia hàng đầu
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Chăm sóc da theo phác đồ chuyên nghiệp</h2>
            <p className="text-lg text-gray-700 mb-4">
              Các phác đồ điều trị của LK Distribution được phát triển dựa trên nghiên cứu khoa học và kinh nghiệm lâm sàng của các chuyên gia da liễu hàng đầu. Mỗi phác đồ là một giải pháp toàn diện, bao gồm các sản phẩm hiệu quả cao và quy trình áp dụng phù hợp.
            </p>
            <p className="text-lg text-gray-700">
              Chúng tôi cung cấp các phác đồ điều trị an toàn, hiệu quả và đáp ứng nhu cầu của mọi loại da.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Protocols */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">Các phác đồ điều trị</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <Link key={treatment.id} to={`/treatments/${treatment.id}`}>
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{treatment.title}</h3>
                    <p className="text-gray-600 mb-4">{treatment.shortDesc}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Triệu chứng phổ biến:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {treatment.symptoms.map((symptom, i) => (
                          <li key={i}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                      Xem chi tiết
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Không chắc chắn về tình trạng da của bạn?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Liên hệ với chúng tôi để nhận tư vấn từ các chuyên gia và tìm phác đồ điều trị phù hợp nhất với làn da của bạn
          </p>
          <Link to="/contact" className="inline-block bg-white text-gray-900 font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Nhận tư vấn miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Treatments;