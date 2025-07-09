import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer } from "@/widgets/layout"; 
import routes from "@/routes";
import "./i18n";

function App() {
  return (
    <div className="bg-black text-white w-full shadow z-50">
      
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>

      
      <div className="flex-grow pt-16"> 
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