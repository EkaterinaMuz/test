import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { ChangeEventHandler } from "react";
import { searchValue, setSearchValue } from "../store/SearchSlice";

type onSearch = ChangeEventHandler<HTMLInputElement>

export const useSearch = (): [string, onSearch] => {

	const dispatch: AppDispatch = useDispatch();
    const value = useSelector(searchValue);

    const handleChange: onSearch = (e) => {
        dispatch(setSearchValue(e.target.value))
    };

    return [value, handleChange];
};