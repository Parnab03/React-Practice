import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";

function App() {
    // let foodItems = [];
    let foodItems = ["Dal", "Vegiii", "Roti", "Salad", "Milk"];

    // if (foodItems.length === 0) {
    //     return <h1>No Items Found</h1>;
    // }
    return (
        <>
            <h1>Healthy Food</h1>
            {foodItems.length === 0 ? <h3>No Items Found</h3> : null}
            <FoodItems foodItems={foodItems}></FoodItems>
        </>
    );
}

export default App;
