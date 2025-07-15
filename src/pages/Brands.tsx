import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Brands = () => {
  const brands = [
    {
      id: "puca",
      name: "Puca Pure & Care",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/8e153a17-8ff7-4b60-8229-c6f786de3706.jpg",
      description: "Thương hiệu chăm sóc da từ Ý với công thức độc quyền kết hợp các thành phần thiên nhiên và công nghệ hiện đại.",
      featured: true
    },
    {
      id: "lacabine",
      name: "laCabine",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/1ccddecd-7ee1-48c6-8e13-1ab9e2b35cfc.jpg",
      description: "Thương hiệu mỹ phẩm cao cấp đến từ Barcelona, Tây Ban Nha, với các dòng sản phẩm chăm sóc da chuyên sâu được bác sĩ da liễu tin dùng.",
      featured: true
    },
    {
      id: "carelika",
      name: "Carelika",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/f2736d1c-2130-4c71-ae86-82d198a1bbec.jpg", 
      description: "Thương hiệu mỹ phẩm đến từ Pháp chuyên về các sản phẩm làm đẹp tự nhiên với chiết xuất thảo dược quý hiếm.",
      featured: true
    },
    {
      id: "optimum",
      name: "Optimum Derma Aciditate",
      logo: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/e3393952-225f-4e7f-83c4-d0ceffbd79ec.jpg",
      description: "Dòng sản phẩm chăm sóc da cao cấp với công thức acid độc quyền, giúp tái tạo da và phục hồi hư tổn hiệu quả.",
      featured: true
    }
  ];

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img 
          src="https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/1ccddecd-7ee1-48c6-8e13-1ab9e2b35cfc.jpg" 
          alt="Thương hiệu" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Thương Hiệu</h1>
          <p className="text-xl max-w-3xl px-4">
            LK Distribution tự hào là nhà phân phối độc quyền của các thương hiệu mỹ phẩm hàng đầu từ Châu Âu
          </p>
        </div>
      </section>

      {/* Brands List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Các Thương Hiệu Đối Tác</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến những sản phẩm chất lượng cao, đạt tiêu chuẩn quốc tế từ các thương hiệu uy tín
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {brands.map((brand) => (
              <div key={brand.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3 p-8 flex items-center justify-center bg-gray-50">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-w-full max-h-40 object-contain"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{brand.name}</h3>
                    <p className="text-gray-600 mb-6">
                      {brand.description}
                    </p>
                    <Link to={`/brands/${brand.id}`}>
                      <Button className="bg-blue-600 text-white hover:bg-blue-700">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Trở thành đại lý của chúng tôi</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hãy liên hệ với LK Distribution ngay hôm nay để bắt đầu hành trình kinh doanh thành công với các thương hiệu mỹ phẩm cao cấp từ Châu Âu
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

export default Brands;