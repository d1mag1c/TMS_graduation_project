import { PaginateContainer } from "./style";
import ReactPaginate from "react-paginate";
import {useThemeSelector} from "../../store";

type PaginationType = {
    changePage: (selectedItem: {selected : number}) => void,
    pageCount:  number,
    forcePage: number
}

export const PaginationBlock = ({ changePage, pageCount, forcePage }: PaginationType) => {

    const theme = useThemeSelector(state => state.themeReducer)

    return (
        <>
            <PaginateContainer theme={theme}>
                {<ReactPaginate
                    forcePage={forcePage}
                    className="pagination "
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={changePage}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    previousLabel="<"
                />}
            </PaginateContainer>
        </>
    );
};