function Todoitem2(){
    let todoName = "BUY MILK";
    let todoDate = "20/07/2023";
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-6">{todoName}</div>
                <div class="col-4">{todoDate}</div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Todoitem2;