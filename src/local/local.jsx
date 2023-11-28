import CustomLocal from ".";

const LocalStorageCustom = () => {
    const [count, setCount] = CustomLocal("count", 0);
    return (
        <div >
            <h1>{count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
        </div>
    );
};

export default LocalStorageCustom;
