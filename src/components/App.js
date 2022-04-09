import Header from './sections/header';
import Home from './pages/home';
import Cupcakes from './pages/cupcakes';
import '../styles/styles.scss';

const App = () => {
  return(
    <>
      <Header />
      <Home />
      <Cupcakes />
    </>
  )
}

export default App;