type CounterProp = {
    count: number;
}
function CounterContainer({count} : CounterProp) {
    return <p data-testid="count">{count}</p>
    
}

export default CounterContainer;