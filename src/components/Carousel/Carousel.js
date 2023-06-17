import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import One from "../../assets/1.webp"
import Two from "../../assets/2.webp"
import Three from "../../assets/3.webp"
import Four from "../../assets/4.webp"

function Carousel() {
    return (
        <div>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={One} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={Two} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={Three} alt="slide 3" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={Four} alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    )
}

export default Carousel
