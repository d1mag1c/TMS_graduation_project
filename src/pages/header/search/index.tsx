import React from 'react';
import IconAdvancedSearch from '../../../components/iconAdvancedSearch';
import { IconSearch } from '../../../components/iconSearch/iconSearch';
import {InputSearch, SearchBlock} from './style';

const Search = () => {
    return (
        <SearchBlock>
            <InputSearch placeholder='Поиск...'/>
            <IconAdvancedSearch/>
            <IconSearch/>
        </SearchBlock>
    );
};

export default Search;