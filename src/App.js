import { ContextProvider } from "./Context/MainContext";
import { Container } from "./Components/Container";

function App() {
  return (
    <ContextProvider>
      <Container></Container>
    </ContextProvider>
  );
}
export default App;
