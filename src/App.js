import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import ItemCard from './components/ItemCard'; 
import Navbar from './components/Navbar'; 

import itemsImage from './lists/ImageList';
function App() { 
  return ( 
    <div className='flex flex-col'>
      <div className=' fixed z-[50]'><Navbar /> </div>
      <div><Hero /> </div>
      <div><HomeCard></HomeCard></div>  
      <div>{itemsImage.map((item) => <ItemCard key= {item.id}item = {item}></ItemCard>)}</div>
      
    </div>
  );
}

export default App;
