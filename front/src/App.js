import { BrowserRouter } from 'react-router-dom';
import Roads from './components/Roads';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Roads />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

