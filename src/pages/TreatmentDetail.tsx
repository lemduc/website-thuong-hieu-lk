import { useParams, Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TreatmentDetail = () => {
  const { treatmentId } = useParams();
  
  // Dữ liệu phác đồ điều trị theo ID
  const treatmentData = {
    acne: {
      title: "Phác đồ trị mụn",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c4bc7562-2f74-402f-b926-ce49a54ac91c.jpg",
      overview: "Phác đồ trị mụn của LK Distribution được thiết kế để giải quyết mọi vấn đề về mụn từ gốc đến ngọn, với trọng tâm là làm sạch, diệt khuẩn, giảm viêm và ngăn ngừa sẹo. Phác đồ này phù hợp với mọi loại da và độ tuổi, đặc biệt hiệu quả cho người có làn da dầu và nhạy cảm.",
      symptoms: [
        "Mụn đầu đen, mụn đầu trắng",
        "Mụn bọc, mụn mủ",
        "Da dầu, lỗ chân lông to",
        "Viêm đỏ, sưng tấy"
      ],
      protocols: [
        {
          step: 1,
          name: "Làm sạch",
          description: "Sử dụng sữa rửa mặt chuyên biệt cho da mụn để loại bỏ bã nhờn và tạp chất, thông thoáng lỗ chân lông.",
          products: ["Carelika Purifying Cleanser", "Optimum Derma Salicylic Wash"]
        },
        {
          step: 2,
          name: "Toner cân bằng",
          description: "Áp dụng toner không cồn để cân bằng độ pH và làm dịu da.",
          products: ["laCabine Balancing Toner", "Puca Pure Calming Toner"]
        },
        {
          step: 3,
          name: "Điều trị",
          description: "Sử dụng serum đặc trị với thành phần như Salicylic Acid, Benzoyl Peroxide hoặc Niacinamide để tiêu diệt vi khuẩn và giảm viêm.",
          products: ["Optimum Derma Acne Solution", "laCabine Clear Skin Serum"]
        },
        {
          step: 4,
          name: "Dưỡng ẩm",
          description: "Dưỡng ẩm với kem không gây bít tắc lỗ chân lông để giữ ẩm và bảo vệ da.",
          products: ["Puca Oil-Free Hydrator", "Carelika Mattifying Moisturizer"]
        },
        {
          step: 5,
          name: "Chống nắng (buổi sáng)",
          description: "Sử dụng kem chống nắng không dầu, không gây mụn với SPF tối thiểu 30.",
          products: ["laCabine UV Shield SPF50", "Optimum Derma Clear Protect SPF30"]
        }
      ],
      tips: [
        "Không nặn mụn để tránh sẹo và nhiễm trùng",
        "Thay vỏ gối thường xuyên để tránh tích tụ vi khuẩn",
        "Tránh các sản phẩm trang điểm dầy và dễ gây bít tắc",
        "Duy trì chế độ ăn uống lành mạnh, hạn chế đường và thực phẩm nhiều dầu mỡ"
      ],
      results: "Sử dụng phác đồ đều đặn trong 4-8 tuần sẽ thấy kết quả rõ rệt. Da sẽ ít mụn hơn, các vết viêm đỏ giảm, và lỗ chân lông se khít dần. Để duy trì kết quả, nên tiếp tục sử dụng các sản phẩm điều trị định kỳ."
    },
    pigmentation: {
      title: "Phác đồ trị nám, sắc tố",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c570f86c-728e-4b59-9a57-6225dd1fbc96.jpg",
      overview: "Phác đồ trị nám, sắc tố của LK Distribution tập trung vào việc làm sáng da, đều màu và ngăn ngừa hình thành sắc tố mới. Kết hợp các thành phần làm sáng và tái tạo da, phác đồ này giúp cải thiện tông màu da và giảm thiểu đốm nâu, nám, tàn nhang một cách hiệu quả và an toàn.",
      symptoms: [
        "Nám, tàn nhang",
        "Đốm nâu, sạm da",
        "Tối màu vùng quanh mắt, môi",
        "Da không đều màu"
      ],
      protocols: [
        {
          step: 1,
          name: "Làm sạch",
          description: "Sử dụng sữa rửa mặt nhẹ nhàng để loại bỏ tạp chất mà không gây kích ứng hoặc tổn thương da.",
          products: ["Carelika Gentle Cleansing Milk", "Puca Brightening Cleanser"]
        },
        {
          step: 2,
          name: "Tẩy tế bào chết",
          description: "Tẩy da chết nhẹ nhàng 2-3 lần/tuần để loại bỏ tế bào chết chứa sắc tố và thúc đẩy tái tạo da.",
          products: ["Optimum Derma Lactic Acid Exfoliator", "laCabine Enzyme Peeling Powder"]
        },
        {
          step: 3,
          name: "Điều trị",
          description: "Sử dụng serum chứa các thành phần làm sáng như Vitamin C, Alpha Arbutin, Niacinamide hoặc Tranexamic Acid.",
          products: ["laCabine Vitamin C Ultra Glow", "Optimum Derma Brightening Complex"]
        },
        {
          step: 4,
          name: "Dưỡng ẩm",
          description: "Sử dụng kem dưỡng với thành phần làm sáng và chống oxy hóa để nuôi dưỡng và bảo vệ da.",
          products: ["Puca Illuminating Cream", "Carelika Whitening Moisturizer"]
        },
        {
          step: 5,
          name: "Chống nắng (buổi sáng)",
          description: "Sử dụng kem chống nắng phổ rộng SPF50+ để ngăn ngừa sản sinh sắc tố mới.",
          products: ["laCabine Total UV Shield SPF50+", "Optimum Derma Pigment Block SPF50"]
        }
      ],
      tips: [
        "Đeo mũ và kính râm khi ra ngoài để bảo vệ da khỏi tác hại của ánh nắng",
        "Tránh tiếp xúc với ánh nắng mạnh, đặc biệt từ 10h-16h",
        "Không bỏ bước chống nắng, ngay cả khi ở trong nhà",
        "Tránh dùng các sản phẩm chứa cồn và hương liệu có thể kích ứng da"
      ],
      results: "Kết quả ban đầu có thể thấy sau 4-6 tuần với làn da sáng đều hơn. Đối với nám và đốm nâu đậm, cần 8-12 tuần để thấy sự cải thiện đáng kể. Để duy trì kết quả, việc chống nắng và sử dụng các sản phẩm dưỡng da làm sáng là rất quan trọng."
    },
    "anti-aging": {
      title: "Phác đồ chống lão hóa",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/c8a93e80-212a-4203-968b-02b96026e48b.jpg",
      overview: "Phác đồ chống lão hóa của LK Distribution được phát triển để ngăn ngừa và đảo ngược các dấu hiệu lão hóa như nếp nhăn, chảy xệ và kém đàn hồi. Bằng cách kết hợp các thành phần chống lão hóa mạnh mẽ như Retinol, Peptide và Acid Hyaluronic, phác đồ này giúp kích thích sản xuất collagen, tăng cường đàn hồi và làm mờ nếp nhăn.",
      symptoms: [
        "Nếp nhăn, đường chân chim",
        "Da chảy xệ, kém săn chắc",
        "Vùng mắt thâm, bọng mắt",
        "Da kém đàn hồi"
      ],
      protocols: [
        {
          step: 1,
          name: "Làm sạch",
          description: "Sử dụng sữa rửa mặt dịu nhẹ, giàu dưỡng chất để làm sạch mà không làm khô da.",
          products: ["laCabine Anti-aging Cleanser", "Puca Nourishing Cleansing Balm"]
        },
        {
          step: 2,
          name: "Toner",
          description: "Sử dụng toner không cồn với các thành phần dưỡng ẩm và chống oxy hóa.",
          products: ["Carelika Rejuvenating Toner", "Puca Hydrating Essence"]
        },
        {
          step: 3,
          name: "Serum chuyên sâu",
          description: "Áp dụng serum chứa Retinol (buổi tối) hoặc Vitamin C (buổi sáng) để tái tạo da và chống oxy hóa.",
          products: ["laCabine Retinol Night Repair", "Optimum Derma Peptide Complex"]
        },
        {
          step: 4,
          name: "Vùng mắt",
          description: "Sử dụng kem mắt đặc trị để giảm bọng mắt, quầng thâm và nếp nhăn vùng mắt.",
          products: ["laCabine Eye Contour Cream", "Carelika Eye Lifting Concentrate"]
        },
        {
          step: 5,
          name: "Dưỡng ẩm",
          description: "Sử dụng kem dưỡng giàu dưỡng chất, collagen và elastin để tăng cường đàn hồi.",
          products: ["Puca Firming Cream", "Optimum Derma Anti-wrinkle Moisturizer"]
        },
        {
          step: 6,
          name: "Chống nắng (buổi sáng)",
          description: "Sử dụng kem chống nắng phổ rộng để ngăn ngừa lão hóa sớm do ánh nắng.",
          products: ["laCabine Age Defense SPF50", "Carelika UV Protection SPF50+"]
        }
      ],
      tips: [
        "Massage mặt nhẹ nhàng khi thoa kem dưỡng để kích thích lưu thông máu",
        "Ngủ đủ giấc và tránh stress để giảm lão hóa sớm",
        "Bổ sung collagen trong chế độ ăn uống",
        "Tránh tiếp xúc với khói thuốc và ô nhiễm môi trường"
      ],
      results: "Sau 6-8 tuần sử dụng đều đặn, làn da sẽ trở nên mịn màng, căng bóng và rạng rỡ hơn. Các nếp nhăn mờ dần, độ đàn hồi cải thiện rõ rệt. Để duy trì kết quả, nên tiếp tục sử dụng phác đồ và bổ sung các liệu trình đặc biệt 1-2 lần/tuần."
    },
    "sensitive-skin": {
      title: "Phác đồ phục hồi da yếu nhạy cảm",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/009364e0-6c94-4d3f-9bba-7b6b90faeb1d.jpg",
      overview: "Phác đồ phục hồi da yếu nhạy cảm của LK Distribution được thiết kế đặc biệt để làm dịu, phục hồi và bảo vệ làn da nhạy cảm, dễ kích ứng. Với các thành phần lành tính, không gây kích ứng như Ceramide, Centella Asiatica và Panthenol, phác đồ này giúp củng cố hàng rào bảo vệ da, giảm viêm đỏ và phục hồi làn da khỏe mạnh.",
      symptoms: [
        "Da đỏ, ngứa, châm chích",
        "Da bị kích ứng dễ dàng",
        "Da khô, bong tróc",
        "Hàng rào bảo vệ da yếu"
      ],
      protocols: [
        {
          step: 1,
          name: "Làm sạch",
          description: "Sử dụng sữa rửa mặt không chứa xà phòng, không cồn để làm sạch nhẹ nhàng mà không làm tổn thương da.",
          products: ["Puca Gentle Milk Cleanser", "Carelika Sensitive Skin Cleanser"]
        },
        {
          step: 2,
          name: "Làm dịu",
          description: "Sử dụng nước xịt khoáng hoặc toner làm dịu để giảm đỏ và kích ứng.",
          products: ["laCabine Calming Mist", "Optimum Derma Soothing Toner"]
        },
        {
          step: 3,
          name: "Phục hồi",
          description: "Áp dụng serum phục hồi với Ceramide, Peptide hoặc Hyaluronic Acid để tăng cường hàng rào bảo vệ da.",
          products: ["Carelika Barrier Repair Serum", "Puca Recovery Concentrate"]
        },
        {
          step: 4,
          name: "Dưỡng ẩm",
          description: "Sử dụng kem dưỡng ẩm không hương liệu, giàu chất chống viêm và giữ ẩm.",
          products: ["laCabine Sensitive Skin Cream", "Optimum Derma Ceramide Moisturizer"]
        },
        {
          step: 5,
          name: "Chống nắng (buổi sáng)",
          description: "Sử dụng kem chống nắng vật lý (khoáng chất) dành cho da nhạy cảm.",
          products: ["Carelika Mineral Sunscreen SPF30", "Puca Sensitive Skin Sunblock SPF50"]
        }
      ],
      tips: [
        "Tránh các sản phẩm chứa cồn, hương liệu và các chất kích ứng khác",
        "Luôn kiểm tra thành phần sản phẩm trước khi sử dụng",
        "Khi thử sản phẩm mới, luôn test một vùng nhỏ trước",
        "Giữ làn da luôn đủ ẩm, tránh tắm nước quá nóng"
      ],
      results: "Sau 2-4 tuần, da sẽ giảm đáng kể tình trạng đỏ, ngứa và kích ứng. Hàng rào bảo vệ da được củng cố, giúp da ít nhạy cảm hơn với các tác nhân bên ngoài. Tiếp tục sử dụng để duy trì làn da khỏe mạnh và cân bằng."
    },
    "oily-skin": {
      title: "Phác đồ cân bằng da dầu",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/bfe9c83d-d6fb-43f2-8e4e-85d0039d73ae.jpg",
      overview: "Phác đồ cân bằng da dầu của LK Distribution giúp kiểm soát lượng dầu thừa, thu nhỏ lỗ chân lông và cân bằng độ ẩm cho da. Với sự kết hợp của các thành phần như Niacinamide, Zinc PCA và chiết xuất thảo mộc, phác đồ này giúp da dầu trở nên mịn màng, không bóng nhờn mà vẫn đủ ẩm.",
      symptoms: [
        "Da bóng dầu",
        "Lỗ chân lông to",
        "Da dễ bị mụn",
        "Da thiếu nước"
      ],
      protocols: [
        {
          step: 1,
          name: "Làm sạch",
          description: "Sử dụng sữa rửa mặt có khả năng kiểm soát dầu nhưng không làm khô da.",
          products: ["Optimum Derma Balancing Cleanser", "laCabine Oil Control Wash"]
        },
        {
          step: 2,
          name: "Toner cân bằng",
          description: "Sử dụng toner chứa BHA hoặc PHA để loại bỏ dầu thừa và thu nhỏ lỗ chân lông.",
          products: ["Carelika Pore Minimizing Toner", "Puca Balancing Toner"]
        },
        {
          step: 3,
          name: "Serum kiểm soát dầu",
          description: "Áp dụng serum chứa Niacinamide, Zinc hoặc Salicylic Acid để kiểm soát tiết dầu và làm sạch sâu.",
          products: ["laCabine Sebum Control Serum", "Optimum Derma Pore Refining Complex"]
        },
        {
          step: 4,
          name: "Dưỡng ẩm",
          description: "Sử dụng gel hoặc lotion dưỡng ẩm không dầu, không gây bít tắc lỗ chân lông.",
          products: ["Puca Oil-Free Hydrator", "Carelika Mattifying Gel"]
        },
        {
          step: 5,
          name: "Chống nắng (buổi sáng)",
          description: "Sử dụng kem chống nắng dạng gel hoặc fluid, không dầu.",
          products: ["laCabine UV Fluid SPF50", "Optimum Derma Oil-Free Sunscreen SPF30"]
        }
      ],
      tips: [
        "Sử dụng giấy thấm dầu trong ngày thay vì rửa mặt nhiều lần",
        "Tránh các sản phẩm có công thức dầu hoặc quá giàu dưỡng chất",
        "Uống đủ nước để duy trì độ ẩm từ bên trong",
        "Tẩy tế bào chết 1-2 lần/tuần để loại bỏ tế bào chết tích tụ"
      ],
      results: "Sau 4-6 tuần, làn da sẽ giảm đáng kể tình trạng bóng nhờn, lỗ chân lông thu nhỏ và ít xuất hiện mụn hơn. Da sẽ trở nên cân bằng hơn, vừa đủ ẩm mà không bị dầu thừa. Tiếp tục sử dụng để duy trì kết quả tốt."
    },
    "dull-skin": {
      title: "Phác đồ phục hồi da xỉn màu",
      image: "https://pub-cdn.sider.ai/u/U0KAH9O22G7/web-coder/684d1b8d0484c40371caeae4/resource/29150146-5970-40af-9f9a-b43bc663cd1a.jpg",
      overview: "Phác đồ phục hồi da xỉn màu của LK Distribution giúp làm sáng, đều màu và tăng cường sức sống cho làn da mệt mỏi, thiếu sức sống. Với các thành phần tẩy tế bào chết nhẹ nhàng, vitamin và chất chống oxy hóa, phác đồ này giúp loại bỏ tế bào chết, kích thích tái tạo tế bào mới và làm sáng tông màu da.",
      symptoms: [
        "Da xỉn màu, thiếu sức sống",
        "Da không đều màu",
        "Da thiếu sáng",
        "Da mệt mỏi"
      ],
      protocols: [
        {
          step: 1,
          name: "Làm sạch",
          description: "Sử dụng sữa rửa mặt làm sáng da, giàu vitamin để làm sạch và tăng cường sức sống.",
          products: ["Carelika Brightening Cleanser", "laCabine Radiance Foam Wash"]
        },
        {
          step: 2,
          name: "Tẩy tế bào chết",
          description: "Sử dụng tẩy tế bào chết nhẹ nhàng 2-3 lần/tuần để loại bỏ tế bào chết và cải thiện kết cấu da.",
          products: ["Optimum Derma Gentle Exfoliator", "Puca Radiance Scrub"]
        },
        {
          step: 3,
          name: "Serum làm sáng",
          description: "Áp dụng serum chứa Vitamin C, Niacinamide hoặc Alpha Arbutin để làm sáng và đều màu da.",
          products: ["laCabine Vitamin C Glow Serum", "Carelika Radiance Booster"]
        },
        {
          step: 4,
          name: "Dưỡng ẩm",
          description: "Sử dụng kem dưỡng ẩm giàu vitamin và chất chống oxy hóa.",
          products: ["Puca Illuminating Cream", "Optimum Derma Brightening Moisturizer"]
        },
        {
          step: 5,
          name: "Chống nắng (buổi sáng)",
          description: "Sử dụng kem chống nắng để bảo vệ da khỏi tác hại của tia UV.",
          products: ["laCabine UV Shield SPF50", "Carelika Brightening Sunscreen SPF30"]
        }
      ],
      tips: [
        "Massage mặt khi thoa sản phẩm để kích thích lưu thông máu",
        "Tăng cường vitamin C trong chế độ ăn uống",
        "Đắp mặt nạ làm sáng da 1-2 lần/tuần",
        "Đảm bảo ngủ đủ giấc để da có thời gian phục hồi"
      ],
      results: "Sau 3-4 tuần, làn da sẽ trở nên rạng rỡ, tươi tắn hơn với tông màu đều và sáng hơn. Tiếp tục sử dụng phác đồ này kết hợp với lối sống lành mạnh sẽ giúp duy trì làn da khỏe mạnh, tràn đầy sức sống."
    }
  };
  
  // Lấy dữ liệu phác đồ điều trị dựa trên treatmentId
  const treatment = treatmentData[treatmentId as keyof typeof treatmentData];
  
  // Nếu không tìm thấy phác đồ điều trị
  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Không tìm thấy phác đồ điều trị</h1>
        <p className="text-gray-600 mb-8">Phác đồ bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
        <Link to="/treatments">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Quay lại trang Phác đồ điều trị
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
          src={treatment.image} 
          alt={treatment.title} 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{treatment.title}</h1>
          <p className="text-xl max-w-3xl px-4">
            Giải pháp toàn diện và hiệu quả cho làn da của bạn
          </p>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Link to="/treatments" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ChevronLeft size={20} />
            <span>Quay lại tất cả phác đồ</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Tổng quan</h2>
              <p className="text-gray-700 mb-10 leading-relaxed">
                {treatment.overview}
              </p>
              
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Quy trình điều trị</h2>
              <div className="space-y-8 mb-10">
                {treatment.protocols.map((protocol, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                        {protocol.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{protocol.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{protocol.description}</p>
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                      <h4 className="font-semibold text-gray-700 mb-2">Sản phẩm khuyên dùng:</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        {protocol.products.map((product, i) => (
                          <li key={i}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Kết quả mong đợi</h2>
              <p className="text-gray-700 mb-10 leading-relaxed">
                {treatment.results}
              </p>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Triệu chứng phổ biến</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
                  {treatment.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lời khuyên</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8">
                  {treatment.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
                
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Cần tư vấn thêm?</h3>
                  <p className="mb-6">
                    Liên hệ với chúng tôi để nhận tư vấn chuyên sâu về phác đồ điều trị phù hợp với làn da của bạn
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                      Liên hệ ngay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Có thể bạn quan tâm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(treatmentData)
              .filter(([id]) => id !== treatmentId)
              .slice(0, 3)
              .map(([id, item]) => (
                <Link key={id} to={`/treatments/${id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{item.overview.split('.')[0]}.</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;