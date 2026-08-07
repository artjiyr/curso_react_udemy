//COMPONENTES
import TemplateExpressions from './components/TemplateExpressions';
import FirstComponent from './components/FirstComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <TemplateExpressions />
      </header>
      <main>
        <FirstComponent />
      </main>
    </div>
  );
}

export default App;
