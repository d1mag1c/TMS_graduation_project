import { PaginateContainer } from "./style";
import ReactPaginate from "react-paginate";
import {useThemeSelector} from "../../store";

export const PaginationBlock = ({ changePage, pageCount }: any) => {

    const theme = useThemeSelector(state => state.themeReducer)

    return (
        <>
            <PaginateContainer theme={theme}>
                {<ReactPaginate
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