import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const About = () => {
  const executives = [
    {
      name: "Bùi Thanh Loan",
      position: "Founder LK Distribution",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/65c1dc07-d77f-44a4-8331-acca27d546a3.jpg",
      description: "Với hơn 15 năm kinh nghiệm trong ngành làm đẹp, bà Loan đã xây dựng LK Distribution từ những ngày đầu tiên và phát triển công ty thành một trong những nhà phân phối mỹ phẩm cao cấp uy tín hàng đầu tại Việt Nam."
    },
    {
      name: "Đỗ Văn Diệu",
      position: "Giám đốc vận hành LK Distribution",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/a142e1ec-a8fd-4b07-a326-a46388d62346.jpg",
      description: "Ông Diệu chịu trách nhiệm quản lý hoạt động vận hành hàng ngày của công ty, đảm bảo hiệu quả trong các quy trình phân phối và cung ứng sản phẩm tới mạng lưới đại lý trên toàn quốc."
    },
    {
      name: "Trần Thị Hương Giang",
      position: "Giám đốc chiến lược Distribution",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c397535c-b675-4a07-87e8-dba88352e4f3.jpg",
      description: "Bà Giang là người vạch ra chiến lược phát triển dài hạn cho công ty, xác định cơ hội thị trường và xây dựng kế hoạch phát triển bền vững cho LK Distribution trên thị trường mỹ phẩm Việt Nam."
    }
  ];

  const advisors = [
    {
      name: "Thảo Phạm",
      position: "Chuyên gia da liễu",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/322b7469-f0cf-4776-9130-9e38eac4e4f9.jpg"
    },
    {
      name: "Hải Yến",
      position: "Bác sĩ da liễu",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/fb538183-9f7a-469b-911b-c8f6e6291af2.jpg"
    },
    {
      name: "Nhi Thảo",
      position: "Chuyên gia thẩm mỹ",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/b185ffa3-55f8-430d-874c-86576aedd907.jpg"
    },
    {
      name: "Nguyễn Minh Hằng",
      position: "Bác sĩ thẩm mỹ",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/4c6ccd9c-4b6d-429f-a69f-3d2b7b99369a.jpg"
    },
    {
      name: "Bác sỹ Điềm",
      position: "Cố vấn y khoa",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/f19faba8-1da5-4b77-9120-f2d0749d87cd.jpg"
    }
  ];

  const partners = [
    { name: "Spa Luxury", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/8b3e4db0-c041-469e-9d41-746dad8b798a.jpg" },
    { name: "Beauty Center", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/9ff093d9-f0b3-4580-b927-bd88c24ce20a.jpg" },
    { name: "Derma Clinic", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/2872722d-d090-4341-a050-fdd0c3465b29.jpg" },
    { name: "Cosmetic House", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/88cb452d-238f-49d0-9e77-8b9051d2c274.jpg" },
    { name: "Skin Care", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/f2d473fb-6902-4599-9bac-622f3f5ce39e.jpg" },
    { name: "Beauty Shop", logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/09f0cb0b-a38b-4700-ac1e-1e968d6b816b.jpg" },
  ];

  const franchiseSteps = [
    {
      title: "Xác định nhu cầu",
      duration: "1-2 ngày",
      description: "Khách hàng liên hệ và cung cấp yêu cầu cụ thể về sản phẩm mỹ phẩm muốn phân phối độc quyền.",
      icon: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/86aa35fd-11ff-4aa3-a2b9-99aa929608f9.jpg"
    },
    {
      title: "Thẩm định năng lực đối tác",
      duration: "2-3 ngày",
      description: "Kiểm tra năng lực và tiềm lực phân phối của khách hàng để đảm bảo hợp tác hiệu quả.",
      icon: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/e13b6dfd-a5d3-4888-b74b-c7f8f9f92283.jpg"
    },
    {
      title: "Tư vấn & tìm kiếm nhãn hàng",
      duration: "3-5 ngày",
      description: "Chúng tôi lựa chọn và giới thiệu nhãn hàng phù hợp theo yêu cầu và phương án phân phối.",
      icon: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/16934980-dfc4-45b6-83e6-20aeb03fd4d4.jpg"
    },
    {
      title: "Thử nghiệm sản phẩm",
      duration: "7-14 ngày",
      description: "Cung cấp mẫu sản phẩm để khách hàng trải nghiệm, đánh giá về chất lượng và thị trường.",
      icon: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/2518d148-e43d-43e4-8723-050a4e662b1a.jpg"
    },
    {
      title: "Thống nhất điều khoản & ký hợp đồng",
      duration: "3-5 ngày",
      description: "Đàm phán và ký kết hợp đồng nhượng quyền với các điều khoản rõ ràng, cam kết quyền lợi hai bên.",
      icon: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/023825e2-69f5-44d7-a4f2-8352204803b1.jpg"
    },
    {
      title: "Hỗ trợ đào tạo & khởi động",
      duration: "tùy theo thỏa thuận",
      description: "Hướng dẫn kỹ thuật bán hàng, quản lý phân phối, marketing hỗ trợ ban đầu để khởi đầu thuận lợi.",
      icon: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/53814500-7d91-49ad-b355-aa27f2dac401.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/97b01497-e709-486d-b672-f42eea13dbc5.jpg" 
          alt="LK Distribution" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Về LK Distribution</h1>
          <p className="text-xl max-w-3xl px-4">
            Nhà phân phối độc quyền mỹ phẩm chính hãng Châu Âu tại Việt Nam
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Tầm nhìn & Sứ mệnh</h2>
              <p className="text-lg text-gray-700 mb-6">
                Cung cấp các sản phẩm chăm sóc sắc đẹp cấp tiến, an toàn và hiệu quả cao trên thế giới, được lựa chọn kỹ lưỡng để đáp ứng nhu cầu làm đẹp ngày càng cao của người Việt, góp phần nâng tầm tiêu chuẩn và định hình xu hướng làm đẹp trong nước.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Giá trị cốt lõi</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CHẤT LƯỢNG</h4>
                    <p className="text-gray-600">
                      Cam kết mang đến những sản phẩm chất lượng cao, có nguồn gốc rõ ràng, hiệu quả và an toàn cho người sử dụng.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">TỐC ĐỘ</h4>
                    <p className="text-gray-600">
                      Nhanh chóng nắm bắt xu hướng thị trường, đổi mới liên tục để mang đến những sản phẩm tốt nhất cho khách hàng.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ĐỒNG HÀNH</h4>
                    <p className="text-gray-600">
                      Luôn đồng hành, hỗ trợ đối tác phát triển kinh doanh bền vững, cùng nhau tạo nên giá trị cho ngành làm đẹp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/e0bc9e10-3518-4b07-b781-205e3561e26d.jpg" 
                alt="LK Distribution Showroom" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Đội ngũ lãnh đạo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đội ngũ nhân sự tận tâm với nhiều năm kinh nghiệm trong ngành làm đẹp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                  <p className="text-blue-600 mb-4">{exec.position}</p>
                  <p className="text-gray-600">
                    {exec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Advisors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Cố vấn chuyên môn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đội ngũ cố vấn chuyên môn là các bác sỹ, chuyên gia da liễu dày dặn kinh nghiệm lâm sàng và nghiên cứu chuyên môn chính quy, luôn đồng hành, hỗ trợ và chia sẻ kiến thức giá trị cho các đại lý liên tục nâng tầm trị liệu.
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {advisors.map((advisor, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src={advisor.image} 
                        alt={advisor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                    <p className="text-blue-600 text-sm">{advisor.position}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Distribution Policy */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Chính sách phân phối</h2>
              <p className="text-lg mb-6">
                LK Distribution tìm kiếm đối tác có chung khát vọng xây dựng cộng đồng làm đẹp uy tín, nơi chất lượng sản phẩm và sự tin tưởng được đặt lên hàng đầu.
              </p>
              <p className="text-lg mb-6">
                Chúng ta cùng nhau tạo dựng thị trường minh bạch, mang đến sản phẩm hiệu quả, lan tỏa giá trị thật. Hãy kết nối với LK Distribution để kiến tạo tương lai ngành làm đẹp đích thực.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Sản phẩm chất lượng cao với nguồn gốc rõ ràng</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Chính sách giá cả cạnh tranh, bảo vệ quyền lợi đại lý</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Đào tạo chuyên sâu về sản phẩm và kỹ thuật chăm sóc da</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Hỗ trợ marketing và phát triển thương hiệu</p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/34981a8e-cc7c-4da8-b2fb-1ced40cc13a1.jpg" 
                alt="Distribution Partnership" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Mạng lưới phân phối</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LK có mạng lưới phân phối toàn quốc với 220 đại lý, spa, thẩm mỹ viện. Chúng tôi tập trung vào kênh chuyên gia (bác sĩ da liễu, phòng khám) và xây dựng thương hiệu, hỗ trợ điểm bán để cùng phát triển bền vững.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Quy trình nhượng quyền</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quy trình nhượng quyền minh bạch, đơn giản và hiệu quả giúp đối tác dễ dàng bắt đầu kinh doanh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-blue-600">{step.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng trở thành đối tác của chúng tôi?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hãy liên hệ với LK Distribution ngay hôm nay để bắt đầu hành trình kinh doanh thành công với các thương hiệu mỹ phẩm cao cấp từ Châu Âu
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Liên hệ ngay
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
