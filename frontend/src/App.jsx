import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>Login page goes here</div>} />
        <Route path="/signup" element={<div>Signup page goes here</div>} />
        <Route path="/applications" element={<div>Applications page goes here</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;