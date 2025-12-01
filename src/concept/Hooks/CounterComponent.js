import useCounter from '../useCounter';

export default function CounterComponent() {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
