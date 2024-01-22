import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"
import Blog4 from "../../assets/images/img2.png"
import Blog5 from "../../assets/images/img3.png"

function BlogLayout(props) {
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]

    let imgIndex = null
    if (props.item.id < images.length) {
        imgIndex = props.item.id
    } else {
        imgIndex = props.item.id % images.length
    }

    return (
        <div className={"blog-" + props.item.id}>
            <img 
                src={images[imgIndex]} 
                alt={"Blog-" + props.item.id}
                className={"blog-" + props.item.id + "-img"}
            />
            <h1>{props.item.title}</h1>
            
            <button className="warning-btn">
                Подробнее
            </button>
        </div>
    );
}

export default BlogLayout;