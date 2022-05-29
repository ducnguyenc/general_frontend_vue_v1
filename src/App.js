import './App.css';
import ListRoute from "./routes/ListRoute"
import PublicMessagesPage from './components/PublicMessagesPage';

function App() {
  return (
    <div className="App">
      <ListRoute />
      <PublicMessagesPage />
    </div>
  );
}

export default App;
