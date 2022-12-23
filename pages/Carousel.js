import Image from 'next/image'
import masjidImage from '../public/pexels-orest-sv-1821687.jpg'
import donationImage from '../public/wizdan-zacky-fauzan-VfC8sXV51jo-unsplash.jpg'
import Script from 'next/script'

export default function Carousel(){
    return(
        <section aria-label='Carousel' id="Home">
          <div className='carousel' data-carousel>
            <button className='carousel-button prev' data-carousel-button="prev">&#x21da;</button>
            <button className='carousel-button next' data-carousel-button="next">&#x21db;</button>
            <ul id='dataSlides' data-slides>
              <li className='slide' data-active>
                <Image src={masjidImage} alt="Masjid Image" fill className='' />
                <div className='absolute top-40 left-20 z-30'>
                <h1 className='text-9xl textShadow text-green-900 font-extrabold'>Masjid in Southwest Edmonton</h1>
                </div>
              </li>
              <li className='slide'>
                <Image src={donationImage} alt="Donation Image" />
                <div className='absolute top-1/2 left-20 z-30'>
                <h1 className='text-7xl lg:text-9xl md:text-8xl textShadow text-orange-100 font-extrabold'>Donate generously</h1>
                </div>
              </li>
              <li className='slide'>
                <Image src={donationImage} alt="Test Image" />
                <div className='absolute top-1/2 left-20 z-30'>
                <h1 className='text-7xl lg:text-9xl md:text-8xl textShadow text-gray-900 font-extrabold'>Test Message</h1>
                </div>
              </li>
            </ul>
          </div>

          <Script>
        {`
        const buttons = document.querySelectorAll("[data-carousel-button]")
        var buttonClicked = null
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            buttonClicked = true
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            moveSlide(offset)
            setTimeout(()=>{
              buttonClicked = null
              autoSlide()
            }, 4000)
          })
        })

        const slides = document.getElementById("dataSlides")

        function autoSlide(){
          console.log('autoSlide')  
          if(buttonClicked)
            return        
          
          buttonClicked = null
          moveSlide(1)
          setTimeout(()=>{
            autoSlide()
          }, 2000)
        }

        function moveSlide(offset){          
          
          
          const activeSlide = slides.querySelector("[data-active]")
          let newIndex = [...slides.children].indexOf(activeSlide) + offset
          if(newIndex < 0) newIndex = slides.children.length - 1
          if(newIndex >= slides.children.length) newIndex = 0

          slides.children[newIndex].dataset.active = true
          delete activeSlide.dataset.active
        }

        setTimeout(()=>{
          autoSlide()
        }, 2000)

        `}
      </Script>      

        </section> 

        
    )
}