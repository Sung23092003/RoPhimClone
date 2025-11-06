import { useEffect, useState } from "react";
import Loading from "./components/common/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //chỉ khi mở lần đầu || refresh trang mới hiện loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-white bg-primary min-h-[20000px] flex items-center justify-center">
      <h1 className="text-3xl font-bold text-white">Trang chủ Rophim</h1>
    </div>
  );
}

export default App;
