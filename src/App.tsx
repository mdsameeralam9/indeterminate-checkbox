import { useState } from "react";
import './App.css';
import NestedCheckBox from './pages/NestedCheckBox';
import { nestedCheckboxData } from "./data/checkboxData";
import type { NestedCheckBoxData } from './data/types';

const App = () => {
  const [state, setState] = useState<NestedCheckBoxData[]>([...nestedCheckboxData])

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <NestedCheckBox data={state} />
    </div>
  );
};

export default App;
