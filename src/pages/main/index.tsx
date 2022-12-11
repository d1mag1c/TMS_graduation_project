import React, { ReactNode } from 'react';
import {MainBlock} from "./style";

export type MainType = {
    children?: ReactNode
}

const Main = ({children}: MainType) => {
    return (
        <MainBlock>
            {children}
        </MainBlock>
    );
};

export default Main;