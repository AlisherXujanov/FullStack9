import Pagination from "../common/Pagination"
import BlogItems from "../../db/blog.json"


function CompanyBlog(props) {
    let itemsPerPage = 3

    const largeScreen = 1100
    const mediumScreen = 700
    if (window.innerWidth < largeScreen) { itemsPerPage = 2 }
    if (window.innerWidth < mediumScreen) { itemsPerPage = 1 }

    return (
        <>
            <Pagination
                items={BlogItems}
                itemsPerPage={itemsPerPage}
                layoutName={"BlogLayout"}
            />
        </>
    );
}

export default CompanyBlog;