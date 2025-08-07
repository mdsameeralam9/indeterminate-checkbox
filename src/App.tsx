import { useState } from "react";
import './App.css';
import NestedCheckBox from './pages/NestedCheckBox';
import { nestedCheckboxData } from "./data/checkboxData";
import type { NestedCheckBoxData } from './data/types';
import { addInputStatus } from "./util";

const App = () => {
  const [state, setState] = useState<NestedCheckBoxData[]>(addInputStatus([...nestedCheckboxData]))

  console.log(state)

  return (
    <div className="content" style={{padding: '2rem'}}>
      <h1 style={{textAlign: "center"}}>Nested CheckBox with Indeterminate</h1>
      <NestedCheckBox data={state} />
    </div>
  );
};

export default App;
