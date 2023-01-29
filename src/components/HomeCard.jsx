import React,{useState} from 'react'; 
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa"; 

const HomeCard = () => { 
     

    
    const cards = [
        {url :require('../images/asus.png')},
        {url :require('../images/card1.png')},
        {url :require('../images/asus2.png')},
        {url :require('../images/op.png')},
        {url :require('../images/card6.png')},
        {url :require('../images/card7.png')}
    ]
    const [currentIndex,setCurrentIndex] = useState(0);
    
    const prevSlide = () =>{
        let isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? cards.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () =>{
        let isFirstIndex = currentIndex === cards.length - 1 
        const newIndex = isFirstIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setCurrentIndex((prevIndex) =>
              prevIndex === cards.length - 1 ? 0 : prevIndex + 1
            ),
          4000
        );
    
        return () => {
          resetTimeout();
        };
      }, [currentIndex]);

  return (
    <div className='relative bg-white-0 top-[5rem] mx-1 my-2 h-[20rem] group w-full '>
        <div style={{backgroundImage: `url(${cards[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500 relative'></div>
        <div className='text-white-0 hidden group-hover:block'>
            <div className='absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 p-2 cursor-pointer'>
                <FaArrowAltCircleLeft size={40} onClick={prevSlide}></FaArrowAltCircleLeft></div>
            <div className='absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 p-2 cursor-pointer'> 
            <FaArrowAltCircleRight size={40} onClick={nextSlide}></FaArrowAltCircleRight></div> 
        </div> 
    </div>
  )
}

export default HomeCard