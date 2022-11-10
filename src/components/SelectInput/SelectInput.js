const SelectInput = (props) => {
    return (
        <select>
            {
                props.informacoes.map(informacao => 
                <option>{informacao}</option>)
            }
        </select>
    )
}

export default SelectInput;