

const Weightdisplay = ( { weight } ) => {

    return(
        <div>
            {weight.map((item) => (
                <p key={item.weight}>Weight : {item.weight}</p>
            ))}
        </div>
    )
}

export default Weightdisplay;