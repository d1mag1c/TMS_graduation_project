import React, {Dispatch, FC, SetStateAction} from 'react';
import {AdvancedSearchBlock, AdvButtonClose, FormBlock, InputBlock, InputButton} from "./style";

import {createSearchParams, useNavigate} from "react-router-dom";
import {useThemeSelector} from "../../../store";
import { GetGenresAndCountries } from '../../../data/getGendersAndCountries';


type AdvancedSearchType = {
    stateAdvSearch: boolean,
    setStateAdvSearch: Dispatch<SetStateAction<boolean>>,
    valueSearch: string,
    handleSubmitValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AdvancedSearch: FC<AdvancedSearchType> = ({stateAdvSearch, setStateAdvSearch, valueSearch, handleSubmitValue}) => {
    const theme = useThemeSelector(state => state.themeReducer)
    const navigate = useNavigate()
    const GenresAndCountries = GetGenresAndCountries()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params = e.currentTarget
        const {value, ratingFrom, ratingTo, yearFrom, yearTo, type, genres, countries} = params

        if (value.value || ratingFrom.value || ratingTo.value || yearFrom.value || yearFrom.value || type.value || genres.value || countries.value) {
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: value.value,
                    ratingFrom: ratingFrom.value || 0,
                    ratingTo: ratingTo.value || 10,
                    yearFrom: yearFrom.value || 1000,
                    yearTo: yearTo.value || 3000,
                    type: type.value,
                    genres: genres.value,
                    countries: countries.value
                })}`

            });
            setStateAdvSearch(false)
        }
    }

    return (
        <AdvancedSearchBlock state={stateAdvSearch} theme={theme}>
            <AdvButtonClose theme={theme} onClick={() => setStateAdvSearch(false)}>&#10006;</AdvButtonClose>

            <FormBlock onSubmit={handleSubmit}>
                <InputBlock>
                    <div>
                        <input type="text" name="value" placeholder="Поиск..." value={valueSearch} onChange={handleSubmitValue}/>
                    </div>
                </InputBlock>
                <InputBlock>
                    <label>Рейтинг:</label>
                    <div>
                        <input type="text" name="ratingFrom" placeholder="от 0"/>
                        <input type="text" name="ratingTo" placeholder="до 10"/>
                    </div>
                </InputBlock>
                <InputBlock>
                    <label>Год выхода:</label>
                    <div>
                        <input type="text" name="yearFrom" placeholder="от 1000"/>
                        <input type="text" name="yearTo" placeholder="до 3000"/>
                    </div>
                </InputBlock>
                <InputBlock>
                    <label>Тип:</label>
                    <select name="type">
                        <option value="ALL">Все</option>
                        <option value="FILM">Фильмы</option>
                        <option value="TV_SERIES">Сериалы</option>
                        <option value="MINI_SERIES">Мини-сериалы</option>
                        <option value="TV_SHOW">ТВ шоу</option>
                    </select>
                </InputBlock>
                <InputBlock>
                    <label>Жанр:</label>
                    <select name="genres">
                        <option value=''>Любой жанр</option>
                        {GenresAndCountries.arrayList?.genres.length &&
                            GenresAndCountries.arrayList.genres.map(e => <option value={e.id}
                                                                                 key={e.genre + e.id}>{e.genre}</option>)}
                    </select>
                </InputBlock>
                <InputBlock>
                    <label>Стана:</label>
                    <select name="countries" defaultValue={''}>
                        <option value=''>Любая страна</option>
                        {GenresAndCountries.arrayList?.countries &&
                            GenresAndCountries.arrayList.countries.map(e => <option value={e.id}
                                                                                    key={e.country + e.id}>{e.country}</option>)}
                    </select>
                </InputBlock>
                <InputButton type="submit" value='Применить фильтр'/>
            </FormBlock>

        </AdvancedSearchBlock>
    );
};

export default AdvancedSearch;