import { BrowserRouter } from 'react-router'
import { NavBar } from './features/navigattion/NavBar'
import MainRoutes from './features/routing/Routes'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <MainRoutes />
      <NavBar />
    </BrowserRouter>
    
  );
}

export default App
