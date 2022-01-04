import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//TODO: Import Pages (Routes)
import Homepage from "routes/Homepage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
