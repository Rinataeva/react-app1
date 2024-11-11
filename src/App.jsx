import "./App.css";
import { UserProfile } from "./UserProfile/UserProfile";
import { MyChart } from "./Chart/Chart";

function App() {
  return (
    <div className="app">
      <UserProfile />
      <MyChart />
    </div>
  );
}

export default App;
