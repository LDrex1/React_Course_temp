import "./App.css";
import { useState } from "react";
import SignUpForm from "./component/SignUpForm";

function App() {
  const [value, setValue] = useState(10);
  const list = [1, 2, 3, 4, 5];

  return (
    <>
      <SignUpForm />
    </>
  );
}

export default App;
