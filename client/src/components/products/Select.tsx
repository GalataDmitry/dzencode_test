import {setFilterType} from "../../toolkit/reducers/mainReducer"
import {useProducts} from "../../componentsHooks/componentsHooks"

const Select = () => {

    const {
        dispatch,
        filterTypes,
        filterType
    } = useProducts()

    return <select className="form-select form-select-sm w-25 mt-3">
        <option value={filterType} onClick={() => dispatch(setFilterType(''))}>
            Select product type
        </option>
        {filterTypes.map(type => (
            <option key={type}
                    onClick={() => dispatch(setFilterType(type))}>
                {type}
            </option>
        ))}
    </select>
}

export default Select