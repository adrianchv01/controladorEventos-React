const History = (props) => {

    if (props.allClicks.length == 0) {
        
        return(
            <div>
                Aun no se realiza el conteo
            </div>
        )
    }

    return (
        <div>
            boton presionado: {props.allClicks.length}
        </div>
    )
}

export default History