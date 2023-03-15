import { Routes, Route, Link } from "react-router-dom";
import { SkillProvider } from "./Context/SkillContext";
import { Home } from "./component/Home";
import { SkillIndex } from "./component/skills/SkillIndex";
import { SkillCreate } from "./component/skills/SkillCreate";
import { SkillEdit } from "./component/skills/SkillEdit";
import { ProductIndex } from "./component/product/ProductIndex";
// import { Categories } from "./component/product/Categories";
import { ProductCreate } from "./component/product/ProductCreate";
import { ProductEdit } from "./component/product/ProductEdit";
import { PelangganIndex } from "./component/pelanggan/PelangganIndex";
import { PelangganCreate } from "./component/pelanggan/pelangganCreate";
import { PelangganEdit } from "./component/pelanggan/pelangganEdit";
import { CartIndex } from "./component/cart/cartIndex";


function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 text-white rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 text-white rounded-md">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 text-white rounded-md">
                <Link to="/product">Product</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 text-white rounded-md">
                <Link to="/pelanggan">Pelanggan</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 text-white rounded-md">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/skills" element={<SkillIndex/>}/>
              <Route path="/skills/:id/edit" element={<SkillEdit/>}/>
              <Route path="/product" element={<ProductIndex/>}/>
              <Route path="/product/:id/edit" element={<ProductEdit/>}/>
              <Route path="/pelanggan" element={<PelangganIndex/>}/>
              <Route path="/skills/create" element={<SkillCreate/>}/>
              <Route path="/product/create" element={<ProductCreate/>}/>
              <Route path="/pelanggan/create" element={<PelangganCreate/>}/>
              <Route path="/pelanggan/:id/edit" element={<PelangganEdit/>}/>
              <Route path="/cart" element={<CartIndex/>}/>

            </Routes>
            
          
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
