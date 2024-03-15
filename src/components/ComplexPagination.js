import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function ComplexPagination() {
    const { oders, meta } = useLoaderData();
    const { page, pageCount } = meta.pagination;
    const navigate = useNavigate();
    const { search, path } = useLocation();

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set("page", pageNumber);
        navigate(`${path}?${searchParams.toString()}`);
    };

    return <></>;
}

export default ComplexPagination;
