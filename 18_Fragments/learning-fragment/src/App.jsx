import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    let foodItems = [];
    // let foodItems = ["Dal", "Vegiii", "Roti", "Salad", "Milk"];

    // if (foodItems.length === 0) {
    //     return <h1>No Items Found</h1>;
    // }
    return (
        <>
            <h1>Healthy Food</h1>
            {foodItems.length === 0 ? <h3>No Items Found</h3> : null}
            <ul className="list-group">
                {foodItems.map((item) => {
                    return (
                        <li key={item} className="list-group-item">
                            {item}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default App;
