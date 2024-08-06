const Animal = () => {
    const animals = ['tiger', 'sheep', 'goat', 'dog']
    return (
        <>
            <h1>Animals : </h1>
            <ol>
                {animals.map((animal) => { return (<li key={animal}>{animal}</li>) })}
            </ol>
        </>
    )
}

export default Animal