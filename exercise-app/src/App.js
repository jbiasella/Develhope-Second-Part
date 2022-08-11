import './App.css';
import Hello from './Components/Hello';
import { LanguageContext } from './Components/LanguageContext';
import { LanguageSwitch } from './Components/SwitchLanguage';
function App() {
  return (
    <>
        <LanguageContext.Provider value={this.state.language}>
        <LanguageSwitch/>
        <Hello />
        </LanguageContext.Provider>


    </>
  );
}

export default App;
