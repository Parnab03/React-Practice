let ClockTime = () => {
    let time = new Date();
    return <p className="lead">Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;
};
export default ClockTime;
