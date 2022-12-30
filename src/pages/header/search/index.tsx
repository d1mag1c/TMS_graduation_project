import React, {Dispatch, FC, SetStateAction} from 'react';
import IconAdvancedSearch from '../../../components/iconAdvancedSearch';
import {IconSearch} from '../../../components/iconSearch/iconSearch';
import {InputSearch, SearchBlock} from './style';
import {createSearchParams, useNavigate} from "react-router-dom";

type SearchType = {
    setstateAdvSearch: Dispatch<SetStateAction<boolean>>,
    handleSubmitValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    valueSearch: string
}


const Search:FC<SearchType> = ({setstateAdvSearch, handleSubmitValue, valueSearch}) => {

    const navigate = useNavigate()


    const passSearchParams = () => {
        if (valueSearch) {
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: valueSearch
                })}`
            });
        }
    }
    const SearchEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && valueSearch) {
            e.preventDefault()
            e.stopPropagation()
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: valueSearch
                })}`
            });
        }
    }



    return (
        <>
            <SearchBlock>
                <InputSearch placeholder='Поиск...' onChange={handleSubmitValue} onKeyDown={SearchEnter} value={valueSearch}/>
                <IconAdvancedSearch onClick={() => setstateAdvSearch(true)}/>
                <IconSearch onClick={passSearchParams}/>
            </SearchBlock>

        </>

    );
};

export default Search;