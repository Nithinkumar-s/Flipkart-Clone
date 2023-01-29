import React from 'react' 

const itemsImage = [
  {
    title:'Best of Electronics',
    image: require('../images/electro.png')
  },
  {
    title:'Beauty, Food, Toys & more',
    image: require('../images/toy.png')
  },
  {
    title:'Home & Kitchen Essentials',
    image: require('../images/furniture.png')
  },
  {
    title:'Fashion Top Deals',
    image: require('../images/fashions.png')
  }
]
 
const ItemCard = (item) => { 
  console.log(item) 
  return ( 
    <div className='  relative top-[5rem] mx-1 h-[21rem] mb-2 font-regular bg-white-0'>
        {/* category and name */}
        <div className='flex flex-col   w-[16rem] h-full justify-end static'>
            <div className='w-full flex flex-col my-7 justify-between '>
                <i className='text-3xl text-center mb-5 font-medium'>{item.item.title}</i>
                <i className='m-auto '><button className='bg-blue-0 text-white-0 rounded w-20 h-10 ' >View All</button></i>
            </div>
            <div className='w-full  bg-blue-0 '>
                <i ><img src={item.item.image} alt='' size='100%'></img></i>

            </div> 
        </div>

        {/* item,name,price */}
        <div>
        <div ></div>
        </div>

    </div>
     
  )
}

export default ItemCard