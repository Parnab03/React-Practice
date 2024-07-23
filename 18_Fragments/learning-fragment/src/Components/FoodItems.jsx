const FoodItems = () => {
    return (
        <ul className="list-group">
            {FoodItems.map((item) => {
                return (
                    <li key={item} className="list-group-item">
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default FoodItems;