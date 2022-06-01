import './App.css';
import ListRoute from "./routes/ListRoute"
import PublicMessagesPage from './components/PublicMessagesPage';
import UserProviderContext, { UserContext } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProviderContext>
        <ListRoute />
      </UserProviderContext>
    </div>
  );
}

export default App;
