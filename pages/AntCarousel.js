import { Carousel } from "antd"
import Image from "next/image"
import alfaruqExteriorImage from '../public/HeroBanner.AlFaruq.Home.png'
import masjidImage from '../public/pexels-orest-sv-1821687.jpg'
import donationImage from '../public/wizdan-zacky-fauzan-VfC8sXV51jo-unsplash.jpg'
import Script from 'next/script'

export default function AntCarousel(){
    return <>
    <section aria-label='Carousel' id="Home">
        <div className='carousel bg-yellow-500' data-carousel>
            <Carousel autoplay draggable >
                <div>
                    <Image className="carouselImage" src={alfaruqExteriorImage} alt="Masjid Image" />
                </div>
                <div>
                    <Image className="carouselImage" src={donationImage} alt="Donation Image" />
                </div>
            </Carousel>
        </div>
    </section>
    </>
}
