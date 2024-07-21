import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    let foodItems = ['Dal','Vegiii','Roti','Salad','Milk']
    return (
        // Fragment
        <> 
            <h1>Healthy Food</h1>
            <ul className="list-group">
                {foodItems.map((item) => {
                    return <li key={item} className="list-group-item">{item}</li>
                })}
            </ul>
        </>
    );
}

export default App;
