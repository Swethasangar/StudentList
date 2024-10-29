import Stulist from "./Components/Studentli";
import Favlist from "./Components/Favouriteli";
import Slistcontext from "./Components/Context";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Slistcontext>
      <BrowserRouter>
        <nav className="flex gap-20 ml-4">
          <Link to={"/"} className="underline">
            List of Students
          </Link>
          <Link to={"/fav"} className="underline">
            Favourite Students
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Stulist />}></Route>
          <Route path="/fav" element={<Favlist />}></Route>
        </Routes>
      </BrowserRouter>
    </Slistcontext>
  );
}

export default App;
