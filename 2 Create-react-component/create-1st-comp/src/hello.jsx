function Hello(){
    // let myName = 'Parnab'
    let fullName = () => {
        return 'Parnab Bagchi'
    }
    return <h3>
        I am {fullName()}.
        </h3>
}
export default Hello;