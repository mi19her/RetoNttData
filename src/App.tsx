import './App.css'
import { UserProvider } from './context/UserContext';
import ListPage from './pages/ListPage';

const App = () => {
  return (
    <UserProvider>
      <ListPage />
    </UserProvider>
  )
}

export default App
