import logo from './logo.svg';
import './App.css';
import './css/common/default.css';
import './css/common/common.css';
import BtMain from './component/BtMain';
import BtHeader from './component/common/Header.js';
import BtFooter from './component/common/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BtHeader /> { /* Header 컴포넌트 사용 */}
      </header>
      <BtMain /> { /* Main 컴포넌트 사용 */}
      <BtFooter />
    </div>
  );
}

export default App;
