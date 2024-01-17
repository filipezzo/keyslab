import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./Layout/Layout";

function App() {
  return (
    <main className="color-primary focus:border- h-screen bg-black antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
