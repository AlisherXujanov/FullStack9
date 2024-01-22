import Pagination from "../common/Pagination"
import BlogItems from "../../db/blog.json"

function CompanyBlog(props) {
    return (
        <>
            <Pagination
                items={BlogItems}
                itemsPerPage={3}
                layoutName={"BlogLayout"}
            />
        </>
    );
}

export default CompanyBlog;