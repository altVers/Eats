import "./styles.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Container } from "./components/Container/Container";
import { Restaraunts } from "./pages/Restaraunts";

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Container>     
          <Restaraunts />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
