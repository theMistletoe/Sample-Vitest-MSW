export const AlertButton = () => {

    const handleClick = () => {
        alert("Hi!");
    };

    return (
        <button onClick={handleClick}>Alert</button>
    );
};