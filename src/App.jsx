import Children from './components/Children';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Children />
        <Footer />
      </Container>
    </>
  );
}

export default App;
