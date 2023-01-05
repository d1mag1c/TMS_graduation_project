import React, { FC } from 'react';
import {BorderIcon1, BorderIcon2, IconBlock} from "./style";

type IconAdvancedSearchType = {
    onClick: () => void
}

const IconAdvancedSearch:FC<IconAdvancedSearchType> = ({onClick}) => {
    return (
        <IconBlock onClick={onClick}>
            <BorderIcon1/>
            <BorderIcon2/>
        </IconBlock>
    );
};

export default IconAdvancedSearch;