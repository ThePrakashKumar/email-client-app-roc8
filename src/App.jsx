import { useSelector } from "react-redux";
import EmailList from "./features/emailList/EmailList";
import Filter from "./features/filter/Filter";
import EmailBody from "./features/emailBody/EmailBody";
import "./App.css";

function App() {
  const { viewMode } = useSelector((state) => state.emailList);

  return (
    <div className="App">
      <Filter />
      <div style={{ display: viewMode && "flex" }}>
        <EmailList />
        <EmailBody />
      </div>
    </div>
  );
}

export default App;
