import {useCallback, useState} from 'react';
import Button from "../Button";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {setSearchErrorAC} from "../../state/app-reducer";

const SearchInput = ({onSearch}) => {
    const dispatch = useDispatch();
    const searchError = useSelector(state => state.app.searchError);
    const [value, setValue] = useState("");

    const onSearchChange = useCallback((e) => {
        setValue(e.target.value);
        if (searchError) {
            dispatch(setSearchErrorAC(''));
        }
    }, [dispatch, searchError]);
    const onSubmit = useCallback(() => onSearch(value), [value, onSearch]);

    return (
        <div className="SearchInput">
            <input value={value} onChange={onSearchChange}/>
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    );
};

export default SearchInput;
