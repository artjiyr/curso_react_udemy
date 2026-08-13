const Events = () => {
    const handleMyEvent = (e) => {
        console.log("Ativou a tela de pop-up");
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Ativou o segundo pop-up")}>Clique aqui também!</button>
            </div>
        </div>
    )
}

export default Events;