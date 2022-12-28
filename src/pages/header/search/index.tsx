import React, {useState} from 'react';
import IconAdvancedSearch from '../../../components/iconAdvancedSearch';
import {IconSearch} from '../../../components/iconSearch/iconSearch';
import {InputSearch, SearchBlock} from './style';
import {createSearchParams, useNavigate} from "react-router-dom";
import AdvancedSearch from './advancedSearch';

const Search = () => {

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keyword') || ''
    const [value, setValue] = useState(keywordParams)
    const [stateAdvSearch, setstateAdvSearch] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const passSearchParams = () => {
        if (value) {
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: value
                })}`
            });
        }
    }
    const SearchEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && value) {
            e.preventDefault()
            e.stopPropagation()
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: value
                })}`
            });
        }
    }

    const changeStateSearch = () => {
        setstateAdvSearch(state => !state)
    }

    return (
        <>        <SearchBlock>
            <InputSearch placeholder='Поиск...' onChange={handleSubmit} onKeyDown={SearchEnter} value={value}/>
            <IconAdvancedSearch onClick={changeStateSearch}/>
            <IconSearch onClick={passSearchParams}/>
        </SearchBlock>
            <AdvancedSearch stateAdvSearch={stateAdvSearch} setstateAdvSearch={setstateAdvSearch} value={value}/>
        </>

    );
};

export default Search;