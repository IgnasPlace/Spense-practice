import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SecureMoneySection from "./components/SecureMoneySection";
import Supporters from "./components/Supporters";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="max-w-screen">
      <Header />
      <MainSection />
      <Supporters />
      <SecureMoneySection />
      <TextEditor />
      <Footer />
    </div>
  );
}

export default App;
