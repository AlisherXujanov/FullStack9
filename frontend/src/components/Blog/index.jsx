import "./style.scss"
import Heading from "../common/Heading"
import Blog1 from "../../assets/images/blog-1.png"
import Blog2 from "../../assets/images/blog-2.png"
import Blog3 from "../../assets/images/blog-3.png"
import Blog4 from "../../assets/images/img2.png"
import Blog5 from "../../assets/images/img3.png"
import BlogItems from '../../db/blog.json'
import { Link } from 'react-router-dom'

function Blog(props) {
    const images = [Blog1, Blog2, Blog3, Blog4, Blog5]

    function getImgIndex(id) {
        let imgIndex = null
        if (id < images.length) { imgIndex = id }
        else { imgIndex = id % images.length }
        return imgIndex
    }

    return (
        <div id="blog-wrapper">
            <div style={{ padding: "0 0 20px 20px" }}>
                <Heading size={2} >Blog</Heading>
            </div>

            {
                BlogItems.map((item, index) => {
                    return (
                        <div className="content" key={index}>
                            <div className="left">
                                <img src={images[getImgIndex(item.id)]}
                                    alt="Blog" width={"100%"} height={300} />
                            </div>
                            <div className="right">
                                <h4>Менеджемент / {item.title.split(" ").slice(0, 3).join(" ")}</h4>
                                <h2>{item.title}</h2>
                                <h4 className="author">
                                    <span className="name">{item.author},  </span>
                                    <span className="date">{item.date}</span>
                                </h4>
                                <p className="subtitle-1">
                                    {item.subtitle1}
                                </p>
                                <Link to={"/blog/details/" +item.id}>
                                    <button className="warning-btn">
                                        Подробнее
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Blog;