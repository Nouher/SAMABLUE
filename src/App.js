import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Banner from "./components/Banner";
import SilosFondPlat from "./pages/SilosFondPlat";
import SilosFondConique from "./pages/SilosFondConique";
import StockageInterieur from "./pages/StockageInterieur";
import Gallery from "./pages/Gallery";
import SilosFerme from "./pages/SilosFerme";
import Accessoires from "./pages/Accessoires";
import Reservoirs from "./pages/Reservoirs";
import Montage from "./pages/Services/Montage";
import BureauEtudes from "./pages/Services/BureauEtudes";
import News from "./pages/News";
import NewsItem from "./pages/NewsItem";
import Newss from "./data/News.json";
import Convoyeurs from "./pages/Manutention/Convoyeurs";
import EquipementDeProcede from "./pages/Manutention/EquipementDeProcede";
import StructuresEnAcier from "./pages/Manutention/StructuresEnAcier";

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="SilosFondPlat" element={<SilosFondPlat />} />
        <Route path="SilosFondConique" element={<SilosFondConique />} />
        <Route path="StockageInterieur" element={<StockageInterieur />} />
        <Route path="SilosFerme" element={<SilosFerme />} />
        <Route path="Accessoires" element={<Accessoires />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Reservoirs" element={<Reservoirs />} />
        {/* Services */}
        <Route path="Montage" element={<Montage />} />
        <Route path="BureauEtudes" element={<BureauEtudes />} />
        {/* Manutention */}
        <Route path="Convoyeurs" element={<Convoyeurs />} />
        <Route path="EquipementDeProcede" element={<EquipementDeProcede />} />
        <Route path="StructuresEnAcier" element={<StructuresEnAcier />} />
        <Route path="Convoyeurs" element={<Convoyeurs />} />
        <Route path="News" element={<News />} />
        {Newss.map((item) => {
          var fullpath = "/" + item.id;
          return <Route path={fullpath} element={<NewsItem object={item} />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
