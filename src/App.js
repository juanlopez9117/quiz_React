import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/layout/Main';
import Header from './components/helpers/Header';
import Footer from './components/helpers/Footer';

function App() {
  return (
    <section className='app'>
        <Header/>
        <Main/>
        <Footer/>

    </section>
  );
}

export default App;
