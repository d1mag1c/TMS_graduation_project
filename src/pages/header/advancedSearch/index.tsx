import React, {Dispatch, FC, SetStateAction} from 'react';
import {AdvancedSearchBlock, AdvButtonClose, FormBlock, InputBlock, InputButton} from "./style";

import {createSearchParams, useNavigate} from "react-router-dom";
import {useThemeSelector} from "../../../store";
import {GetGenresAndCountries} from '../../../data/getGendersAndCountries';


type AdvancedSearchType = {
    stateAdvSearch: boolean,
    setStateAdvSearch: Dispatch<SetStateAction<boolean>>,
    valueSearch: string,
    handleSubmitValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AdvancedSearch: FC<AdvancedSearchType> = ({
                                                    stateAdvSearch,
                                                    setStateAdvSearch,
                                                    valueSearch,
                                                    handleSubmitValue
                                                }) => {
    const theme = useThemeSelector(state => state.themeReducer)
    const navigate = useNavigate()
    const GenresAndCountries = GetGenresAndCountries()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params = e.currentTarget
        const {value, ratingFrom, ratingTo, yearFrom, yearTo, type, genres, countries, order} = params

        if (value.value || ratingFrom.value || ratingTo.value || yearFrom.value || yearFrom.value || type.value || genres.value || countries.value) {
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: value.value,
                    ratingFrom: ratingFrom.value,
                    ratingTo: ratingTo.value,
                    yearFrom: yearFrom.value,
                    yearTo: yearTo.value,
                    type: type.value,
                    genres: genres.value,
                    countries: countries.value,
                    order: order.value
                })}`

            });
            setStateAdvSearch(false)
        }
    }

    const params = new URLSearchParams(document.location.search);

    return (
        <AdvancedSearchBlock state={stateAdvSearch} theme={theme}>
            <AdvButtonClose theme={theme} onClick={() => setStateAdvSearch(false)}>&#10006;</AdvButtonClose>
                <FormBlock onSubmit={handleSubmit}>
                    <InputBlock>
                        <div>
                            <input type="text" name="value" placeholder="Поиск..." value={valueSearch}
                                   onChange={handleSubmitValue}/>
                        </div>
                    </InputBlock>
                    <InputBlock>
                        <label>Рейтинг:</label>
                        <div>
                            <input type="number" name="ratingFrom" placeholder="от 0" maxLength={2} min='0' max='10'
                                   defaultValue={params.get('ratingFrom') || ''}/>
                            <input type="number" name="ratingTo" placeholder="до 10" maxLength={2} min='2' max='10'
                                   defaultValue={params.get('ratingTo') || ''}/>
                        </div>
                    </InputBlock>
                    <InputBlock>
                        <label>Год выхода:</label>
                        <div>
                            <input type="number" name="yearFrom" placeholder="от 1000" maxLength={4} min='1000'
                                   max='2023'
                                   defaultValue={params.get('yearFrom') || ''}/>
                            <input type="number" name="yearTo" placeholder="до 3000" maxLength={4} min='1800' max='3000'
                                   defaultValue={params.get('yearTo') || ''}/>
                        </div>
                    </InputBlock>
                    <InputBlock>
                        <label>Тип:</label>
                        <select name="type" defaultValue={params.get('type') || ''}>
                            <option value="">Выберите тип</option>
                            <option value="ALL">Все</option>
                            <option value="FILM">Фильмы</option>
                            <option value="TV_SERIES">Сериалы</option>
                            <option value="MINI_SERIES">Мини-сериалы</option>
                            <option value="TV_SHOW">ТВ шоу</option>
                        </select>
                    </InputBlock>
                    <InputBlock>
                        <label>Жанр:</label>
                        <select name="genres" defaultValue={params.get('genres') || ''}>
                            <option value=''>Любой жанр</option>
                            {GenresAndCountries.arrayList?.genres.length &&
                                GenresAndCountries.arrayList.genres.map(e =>
                                    <option value={e.id} key={e.genre + e.id}>{e.genre}</option>)}
                        </select>
                    </InputBlock>
                    <InputBlock>
                        <label>Стана:</label>
                        <select name="countries" defaultValue={params.get('countries') || ''}>
                            <option value=''>Любая страна</option>
                            {GenresAndCountries.arrayList?.countries &&
                                GenresAndCountries.arrayList.countries.map(e =>
                                    <option value={e.id} key={e.country + e.id}>{e.country}</option>)}
                        </select>
                    </InputBlock>
                    <InputBlock>
                        <label>Сортировать по:</label>
                        <select name="order" defaultValue={params.get('order') || ''}>
                            <option value="">Без сортировки</option>
                            <option value="RATING">Рейтингу</option>
                            <option value="NUM_VOTE">Количеству голосов</option>
                            <option value="YEAR">Году</option>
                        </select>
                    </InputBlock>
                    <InputButton type="submit" value='Применить фильтр'/>
                </FormBlock>
        </AdvancedSearchBlock>
    );
};

export default AdvancedSearch;