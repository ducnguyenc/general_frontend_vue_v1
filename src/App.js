import './App.css';
import ListRoute from "./routes/ListRoute"
import UserProviderContext from './context/UserContext';

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
