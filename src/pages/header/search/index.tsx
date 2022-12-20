import React, {useState} from 'react';
import IconAdvancedSearch from '../../../components/iconAdvancedSearch';
import {IconSearch} from '../../../components/iconSearch/iconSearch';
import {InputSearch, SearchBlock} from './style';
import {useNavigate} from "react-router-dom";

const Search = () => {

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keyword') || ''
    const [value, setValue] = useState(keywordParams)
    const navigate = useNavigate()

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const passSearchParams = () => {
      if(value) {
          navigate({
              pathname: '/films',
              search: `?keyword=${value}`,
          }, {state: {value}});
      }
    }
    const SearchEnter = (e: React.KeyboardEvent<HTMLInputElement>):void =>{
        if(e.key === 'Enter' && value){
            e.preventDefault()
            e.stopPropagation()
            navigate({
                pathname: '/films',
                search: `?keyword=${value}`,
            }, {state : {value}});
        }
    }

    return (
        <SearchBlock>
            <InputSearch placeholder='Поиск...' onChange={handleSubmit} onKeyDown={SearchEnter} value={value}/>
            <IconAdvancedSearch/>
            <IconSearch onClick={passSearchParams}/>
        </SearchBlock>
    );
};

export default Search;