function AddTodo() {
    return (
        <div class="container text-center">
            <div class="row kg-row">
                <div class="col-6">
                    <input type="text" placeholder="Enter todo here" />
                </div>
                <div class="col-4">
                    <input type="date" name="" id="" />
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success kg-btn">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AddTodo;
