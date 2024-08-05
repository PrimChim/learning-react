const Button = ({ handleClick, label }) => {
    const handlePunch = () => {
        console.log("Next clicked!!!")
    }
    return (
        <>
            <button onClick={handleClick}>{label}</button>
        </>
    )
}

export default Button