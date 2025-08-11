import './App.css';
import NestedCheckBox from './pages/NestedCheckBox';

const App = () => {
  return (
    <div className="content" style={{padding: '2rem'}}>
      <h1 style={{textAlign: "center"}}>Nested CheckBox with Indeterminate</h1>
      <NestedCheckBox />
    </div>
  );
};

export default App;
