
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
     <Header />
     <div className="app-body">
       <SideBar />
       <Feed />
     </div>
    </div>
  );
}

export default App;
