import MitteLängsdruckKraft from "./page/MitteLängsdruckKraft";
import Header from "./components/Header";
import { MathJaxContext } from "better-react-mathjax";

function App() {
  return (
    <MathJaxContext>
      <Header />
      <MitteLängsdruckKraft />
    </MathJaxContext>
  );
}

export default App;
