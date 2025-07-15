import { useParams, Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const BrandDetail = () => {
  const { brandId } = useParams();
  
  // Dữ liệu thương hiệu theo ID
  const brandData = {
    lacabine: {
      name: "laCabine",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/1ccddecd-7ee1-48c6-8e13-1ab9e2b35cfc.jpg",
      banner: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/63ee2d5f-dbd4-4c83-a072-ef314eb1aad7.jpg",
      description: "Thương hiệu mỹ phẩm cao cấp đến từ Barcelona, Tây Ban Nha, với hơn 20 năm kinh nghiệm trong lĩnh vực chăm sóc da. laCabine được phát triển bởi các bác sĩ da liễu và nhà khoa học hàng đầu, mang đến những sản phẩm có hiệu quả vượt trội, an toàn và thân thiện với mọi loại da.",
      story: "laCabine ra đời vào năm 2000 tại Barcelona, Tây Ban Nha với sứ mệnh mang đến giải pháp chăm sóc da chuyên nghiệp tại nhà. Bằng sự kết hợp giữa khoa học tiên tiến và thành phần tự nhiên, laCabine đã nhanh chóng trở thành thương hiệu được tin dùng bởi các bác sĩ da liễu và trung tâm spa cao cấp trên toàn thế giới.",
      products: [
        { 
          name: "Ampoules SOS Anti-Wrinkle Filler", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/63ee2d5f-dbd4-4c83-a072-ef314eb1aad7.jpg",
          description: "Serum chống lão hóa với công thức chứa collagen và peptide, giúp làm đầy nếp nhăn và cải thiện đàn hồi da."
        },
        { 
          name: "Pure Hyaluronic Acid", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/d6b56064-8345-47ad-b035-3a7e4a080dec.jpg",
          description: "Serum cấp ẩm chuyên sâu với Hyaluronic Acid nguyên chất, giúp da căng mọng và ngăn ngừa lão hóa."
        },
        { 
          name: "Vitamin C Ultra Glow", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/297beaf8-638b-4a7c-b00a-8f157c245d61.jpg",
          description: "Serum làm sáng da với 10% Vitamin C tinh khiết, giúp làm mờ thâm nám và cải thiện tông màu da."
        },
        { 
          name: "Retinol Night Repair", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c4bc7562-2f74-402f-b926-ce49a54ac91c.jpg",
          description: "Kem dưỡng ban đêm với Retinol, giúp tái tạo da và giảm thiểu các dấu hiệu lão hóa trong khi bạn ngủ."
        },
      ]
    },
    puca: {
      name: "Puca Pure & Care",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/8e153a17-8ff7-4b60-8229-c6f786de3706.jpg",
      banner: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/d6b56064-8345-47ad-b035-3a7e4a080dec.jpg",
      description: "Puca Pure & Care là thương hiệu mỹ phẩm cao cấp đến từ Ý, nổi tiếng với các sản phẩm kết hợp giữa khoa học hiện đại và tinh túy từ thiên nhiên. Puca chú trọng vào việc phát triển các sản phẩm an toàn, hiệu quả và thân thiện với môi trường.",
      story: "Puca Pure & Care được thành lập vào năm 2010 tại Milan, Ý bởi tiến sĩ Alessandro Puccini - một nhà hóa mỹ phẩm với hơn 30 năm kinh nghiệm. Ông tin rằng vẻ đẹp đích thực đến từ sự cân bằng giữa khoa học và thiên nhiên. Triết lý này đã dẫn dắt Puca trở thành thương hiệu được yêu thích tại nhiều quốc gia trên thế giới.",
      products: [
        { 
          name: "Pure Botanical Cleansing Gel", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c570f86c-728e-4b59-9a57-6225dd1fbc96.jpg",
          description: "Gel rửa mặt với chiết xuất thực vật, làm sạch sâu nhưng vẫn duy trì độ ẩm tự nhiên cho da."
        },
        { 
          name: "Radiance Peptide Serum", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c8a93e80-212a-4203-968b-02b96026e48b.jpg",
          description: "Serum chứa peptide và các thành phần làm sáng da, giúp cải thiện kết cấu và tăng cường độ rạng rỡ."
        },
        { 
          name: "Mediterranean Olive Moisturizer", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/009364e0-6c94-4d3f-9bba-7b6b90faeb1d.jpg",
          description: "Kem dưỡng ẩm với dầu olive hữu cơ từ Địa Trung Hải, giàu chất chống oxy hóa và dưỡng chất."
        },
        { 
          name: "Alpine Thermal Water Mist", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
          description: "Xịt khoáng với nước suối từ dãy Alps, giúp làm dịu, cấp ẩm và bảo vệ da khỏi tác động môi trường."
        },
      ]
    },
    carelika: {
      name: "Carelika",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/f2736d1c-2130-4c71-ae86-82d198a1bbec.jpg",
      banner: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/297beaf8-638b-4a7c-b00a-8f157c245d61.jpg",
      description: "Carelika là thương hiệu mỹ phẩm cao cấp đến từ Pháp, chuyên về các sản phẩm chăm sóc da dựa trên chiết xuất thảo dược quý hiếm. Carelika kết hợp giữa nghiên cứu khoa học và phương pháp điều chế truyền thống để tạo ra các sản phẩm hiệu quả và an toàn.",
      story: "Carelika được thành lập vào năm 2005 bởi Marie Laurent - một dược sĩ với niềm đam mê với thảo dược. Sau nhiều năm nghiên cứu tại các khu rừng nhiệt đới và vùng núi xa xôi, bà đã phát hiện ra những thành phần thảo dược quý hiếm với khả năng làm đẹp tuyệt vời. Carelika ra đời với sứ mệnh kết hợp những tinh túy từ thiên nhiên với công nghệ hiện đại để tạo ra những sản phẩm chăm sóc da độc đáo.",
      products: [
        { 
          name: "Rare Herbs Purifying Mask", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
          description: "Mặt nạ thanh lọc với chiết xuất thảo mộc quý hiếm, làm sạch sâu và se khít lỗ chân lông."
        },
        { 
          name: "Rainforest Elixir Serum", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/91052d42-10b9-414a-8113-e6513e020aed.jpg",
          description: "Serum với chiết xuất từ các loài thực vật rừng mưa nhiệt đới, giàu chất chống oxy hóa và dưỡng chất."
        },
        { 
          name: "Alpine Rose Regenerating Cream", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/65c1dc07-d77f-44a4-8331-acca27d546a3.jpg",
          description: "Kem tái tạo với chiết xuất hoa hồng núi Alps, giúp phục hồi và trẻ hóa làn da."
        },
        { 
          name: "Lavender Fields Night Treatment", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/a142e1ec-a8fd-4b07-a326-a46388d62346.jpg",
          description: "Kem đêm với tinh dầu lavender hữu cơ từ Provence, giúp làm dịu và phục hồi da trong khi ngủ."
        },
      ]
    },
    optimum: {
      name: "Optimum Derma Aciditate",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/e3393952-225f-4e7f-83c4-d0ceffbd79ec.jpg",
      banner: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c4bc7562-2f74-402f-b926-ce49a54ac91c.jpg",
      description: "Optimum Derma Aciditate là thương hiệu mỹ phẩm lâm sàng chuyên về các sản phẩm điều trị da dựa trên các loại acid. Được phát triển bởi các bác sĩ da liễu hàng đầu từ Đức, các sản phẩm của Optimum Derma Aciditate mang lại hiệu quả cao trong việc giải quyết các vấn đề về da nhờ công thức acid độc đáo.",
      story: "Optimum Derma Aciditate được thành lập vào năm 2015 bởi TS. Klaus Schmidt - một bác sĩ da liễu nổi tiếng tại Đức với hơn 25 năm kinh nghiệm trong lĩnh vực trị liệu da. Ông nhận thấy rằng các acid khi được sử dụng đúng cách sẽ mang lại hiệu quả tuyệt vời trong việc điều trị nhiều vấn đề về da. Từ đó, Optimum Derma Aciditate ra đời với sứ mệnh mang các phương pháp điều trị da lâm sàng vào các sản phẩm chăm sóc tại nhà.",
      products: [
        { 
          name: "Glycolic Acid Resurfacing Peel", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c397535c-b675-4a07-87e8-dba88352e4f3.jpg",
          description: "Peel da chuyên sâu với Glycolic Acid, giúp tẩy tế bào chết và cải thiện kết cấu da."
        },
        { 
          name: "Salicylic Acid Acne Solution", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/322b7469-f0cf-4776-9130-9e38eac4e4f9.jpg",
          description: "Dung dịch điều trị mụn với Salicylic Acid, làm thông thoáng lỗ chân lông và giảm viêm."
        },
        { 
          name: "Lactic Acid Gentle Exfoliator", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/fb538183-9f7a-469b-911b-c8f6e6291af2.jpg",
          description: "Tẩy tế bào chết nhẹ nhàng với Lactic Acid, phù hợp cho da nhạy cảm."
        },
        { 
          name: "Mandelic Acid Brightening Serum", 
          image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/b185ffa3-55f8-430d-874c-86576aedd907.jpg",
          description: "Serum làm sáng da với Mandelic Acid, giúp đều màu da và làm mờ thâm nám."
        },
      ]
    }
  };
  
  // Lấy dữ liệu thương hiệu dựa trên brandId
  const brand = brandData[brandId as keyof typeof brandData];
  
  // Nếu không tìm thấy thương hiệu
  if (!brand) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Không tìm thấy thương hiệu</h1>
        <p className="text-gray-600 mb-8">Thương hiệu bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <Link to="/brands">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Quay lại trang Thương hiệu
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img 
          src={brand.banner} 
          alt={brand.name} 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="h-20 mx-auto mb-4 object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold">{brand.name}</h1>
          </div>
        </div>
      </section>

      {/* Brand Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Link to="/brands" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ChevronLeft size={20} />
            <span>Quay lại tất cả thương hiệu</span>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Về {brand.name}</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {brand.description}
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Câu chuyện thương hiệu</h3>
              <p className="text-gray-700 leading-relaxed">
                {brand.story}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-80 object-contain"
              />
            </div>
          </div>
          
          {/* Products */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Sản phẩm tiêu biểu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brand.products.map((product, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Quan tâm đến các sản phẩm của {brand.name}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về sản phẩm và cách phân phối
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-6 py-3">
              Liên hệ ngay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandDetail;