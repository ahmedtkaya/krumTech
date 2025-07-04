import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer } from "@/widgets/layout"; // Footer'ı import ediyoruz
import routes from "@/routes";

function App() {
  return (
    <div className="bg-black text-white w-full shadow z-50">
      {/* Navbar */}
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>

      {/* Ana İçerik - Bu kısım büyüyebilir */}
      <div className="flex-grow pt-16"> {/* Navbar yüksekliği kadar padding ekledik */}
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;