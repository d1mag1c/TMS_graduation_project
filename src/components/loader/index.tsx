import React from 'react';
import {LoaderBlock} from "./style";
import {useThemeSelector} from "../../store";

const Loader = () => {
    const themeLoader = useThemeSelector(state => state.themeReducer.loader)
    return (
        <LoaderBlock themeLoader={themeLoader}/>
    );
};

export default Loader;