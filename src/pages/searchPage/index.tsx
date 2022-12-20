import React from 'react';
import {GetSearchCards} from "../../data/getSearchCards";
import Card from "../../components/cards";
import {WrapperCards} from "../main/home/style";
import {useLocation} from "react-router-dom";


const SearchPage = () => {
    const locationStateValue = (useLocation().state.value).toLowerCase().trim()
    // const params = new URLSearchParams(document.location.search);
    // const keywordParams = params.get('keyword')
    //
    // const [param, setParam] = useState(keywordParams)
    //
    // useEffect(() => {
    //     setParam(keywordParams)
    // }, [locationStateValue])

    const searchCards = GetSearchCards(locationStateValue)

    console.log(locationStateValue)
    return (
        <WrapperCards>
            {searchCards && searchCards.cards?.items.map(e => <Card props={e} key={e.kinopoiskId}/>)}
        </WrapperCards>
    );
};

export default SearchPage;