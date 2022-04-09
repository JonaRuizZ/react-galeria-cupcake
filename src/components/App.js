//import components
import Header from './sections/header';
import Home from './pages/home';
import Cupcakes from './pages/cupcakes';
import AboutUs from './pages/aboutUs';

//import react router
import { Routes, Route} from "react-router-dom";

//import styles
import '../styles/styles.scss';

const App = () => {
  return(
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App;