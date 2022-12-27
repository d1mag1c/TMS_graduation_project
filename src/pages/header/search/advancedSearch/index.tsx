import React, {Dispatch, FC, SetStateAction, useRef} from 'react';
import {AdvancedSearchBlock, AdvButtonClose,FormBlock,InputBlock, InputButton} from "./style";
import {useThemeSelector} from "../../../../store";
import {text} from "stream/consumers";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

type AdvancedSearchType = {
    stateAdvSearch: boolean,
    setstateAdvSearch: Dispatch<SetStateAction<boolean>>,
    value: string
}

const AdvancedSearch: FC<AdvancedSearchType> = ({stateAdvSearch, setstateAdvSearch, value}) => {
    const theme = useThemeSelector(state => state.themeReducer)
    const navigate = useNavigate()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params = e.currentTarget
        const {ratingFrom, ratingTo, yearFrom, yearTo} = params

        if(value || ratingFrom.value || ratingTo.value || yearFrom.value || yearFrom.value) {
            navigate({
                pathname: "films",
                search: `?${createSearchParams({
                    keyword: value,
                    ratingFrom: ratingFrom.value || 0,
                    ratingTo: ratingTo.value || 10,
                    yearFrom: yearFrom.value || 1000,
                    yearTo: yearTo.value || 3000
                })}`

            });
            setstateAdvSearch(false)
        }
    }

    return (
        <AdvancedSearchBlock state={stateAdvSearch} theme={theme}>
            <AdvButtonClose theme={theme} onClick={() => setstateAdvSearch(false)}>&#10006;</AdvButtonClose>

                <FormBlock onSubmit={handleSubmit}>
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
                    <InputButton type="submit" value='Применить фильтр'/>
                </FormBlock>

        </AdvancedSearchBlock>
    );
};

export default AdvancedSearch;