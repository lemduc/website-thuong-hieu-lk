import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
      </p>
      <Link to="/">
        <Button className="bg-black text-white hover:bg-gray-800">
          Quay lại trang chủ
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
