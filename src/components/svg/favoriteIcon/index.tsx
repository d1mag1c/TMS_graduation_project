import React, {FC} from 'react';
import {FavoriteHook} from '../../../hooks/favoriteHook';
import {IconWrapper} from './style';
import {FavoriteIcon} from "./favoriteIcon";

type IconType = {
    id: number
}

export const FavoriteIconComponent: FC<IconType> = ({id}) => {

    const toggleIcon = FavoriteHook(id)
    return (
        <IconWrapper onClick={toggleIcon.addId}>
            <FavoriteIcon state={toggleIcon.stateId}></FavoriteIcon>
        </IconWrapper>
    );
};