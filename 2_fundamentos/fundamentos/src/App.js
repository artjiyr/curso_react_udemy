//COMPONENTES
import TemplateExpressions from './components/TemplateExpressions';
import FirstComponent from './components/FirstComponent';
import Events from './components/Events';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <TemplateExpressions />
        <Events />
      </header>
    </div>
  );
}

export default App;
