import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="*"
        element={<Index />}
      />
    </Routes>
  );
}

export default App;
