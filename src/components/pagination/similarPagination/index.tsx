import ReactPaginate from "react-paginate";
import { useThemeSelector } from "../../../store";
import { PaginateContainer } from "./style";

type PaginationType = {
    changePage: (selectedItem: {selected : number}) => void,
}

export const SimilarPagination = ({ changePage}: PaginationType) => {

    const theme = useThemeSelector(state => state.themeReducer)

    return (
        <>
            <PaginateContainer theme={theme}>
                {<ReactPaginate

                    className="pagination_similar"
                    nextLabel=">"
                    onPageChange={changePage}
                    pageCount={0}
                    previousLabel="<"
                />}
            </PaginateContainer>
        </>
    );
};