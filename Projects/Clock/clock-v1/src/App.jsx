import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import ClockTime from "./Components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <center>
            <ClockHeading />
            <ClockSlogan />
            <ClockTime />
        </center>
    );
}

export default App;
