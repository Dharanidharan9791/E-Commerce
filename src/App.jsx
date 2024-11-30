import './App.css';
import LandingPage from './pages/LandinPage';
import Index from './Components/layouts/Index';

function App() {
  return (
    <div className='app px-4 py-4'>
      <Index>
        <LandingPage/>
      </Index>
    </div>

  );
}

export default App;
