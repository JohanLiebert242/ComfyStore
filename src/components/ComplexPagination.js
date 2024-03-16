import { useLoaderData, useNavigate, useLocation } from "react-router-dom";

function ComplexPagination() {
    const { meta } = useLoaderData();
    const { page, pageCount } = meta.pagination;

    console.log(meta.pagination);

    const { search, pathname } = useLocation();
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set("page", pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    if (pageCount < 2) return null;

    const addPageButton = ({ pageNumber, activeClass }) => {
        return (
            <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`btn btn-xs sm:btn-md border-none join-item 
                ${activeClass ? "bg-base-300 border-base-300" : ""}`}
            >
                {pageNumber}
            </button>
        );
    };

    const renderPageButtons = () => {
        const pageButtons = [];

        //First button
        pageButtons.push(
            addPageButton({ pageNumber: 1, activeClass: page === 1 })
        );

        //Dot
        if (page > 2) {
            pageButtons.push(
                <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
                    ...
                </button>
            );
        }

        //Current page
        if (page !== 1 && page !== pageCount) {
            pageButtons.push(
                addPageButton({ pageNumber: page, activeClass: true })
            );
        }

        if (page < pageCount - 1) {
            pageButtons.push(
                <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
                    ...
                </button>
            );
        }

        //Last button
        pageButtons.push(
            addPageButton({
                pageNumber: pageCount,
                activeClass: page === pageCount,
            })
        );

        return pageButtons;
    };

    return (
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button
                    className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        let prev = page - 1;
                        if (prev < 1) prev = pageCount;
                        handlePageChange(prev);
                    }}
                >
                    Prev
                </button>
                {renderPageButtons()}
                <button
                    className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        let next = page + 1;
                        if (next > pageCount) next = 1;
                        handlePageChange(next);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ComplexPagination;
