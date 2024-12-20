import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return(
    <>
      <meta name="description" content="website for the diner Little Lemon"/>
      <meta name="og:description" content="website for the diner Little Lemon"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:image" content=""/>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
