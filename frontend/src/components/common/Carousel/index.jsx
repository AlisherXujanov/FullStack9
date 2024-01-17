import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent(props) {
    const imgStyle = {
        filter: props.blurred ? "grayscale(100%) brightness(0.5)" : "none"
    }

    return (
        <div className="carousel-c-wrapper">
            <div className="carousel-c-children">
                {props.children}
            </div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
            >
                {
                    props.images.map((img, index) => {
                        return (
                            <div key={index}>
                                <img 
                                    style={imgStyle}
                                    src={img} 
                                    width={"100%"} 
                                    height={650} 
                                    alt="Slide" 
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default CarouselComponent;