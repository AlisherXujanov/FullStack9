// npm i react-paginate
import { useState } from 'react';
import ReactPaginate from 'react-paginate';


function Items({ currentItems, layout }) {
    return (
        <div className='current-items'>
            {
                currentItems && currentItems.map((item, index) => {
                    return (
                        <div key={index}>
                            {layout(item)}
                        </div>
                    )
                })
            }
        </div>
    )
}

// REQUIRES: items, itemsPerPage, itemLayout
function PaginatedItems(props) {
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + props.itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = props.items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.items.length / props.itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * props.itemsPerPage) % props.items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} layout={props.itemLayout} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;