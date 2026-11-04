

const Weightdisplay = ( { weight } ) => {

    return(
        <div>
            {weight.map((item, index) => (
                <p key={`${item.date}-${index}`}>
                    Date : {item.date} | Weight : {item.weight}
                </p>
            ))}
        </div>
    )
}

export default Weightdisplay;