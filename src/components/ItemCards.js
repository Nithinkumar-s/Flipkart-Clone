import React from 'react';
const itemsImage = [
    {
        id:1,
        title:'Best of Electronics',
        image: require('../images/electro.png')
    },
    { 
        id:2,
        title:'Beauty, Food, Toys & more',
        image: require('../images/toy.png')
    },
    {
        id:3,
        title:'Home & Kitchen Essentials',
        image: require('../images/furniture.png')
    },
    {
        id:4,
        title:'Fashion Top Deals',
        image: require('../images/fashions.png')
    }
  ]
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const Item = ({ name }) => <li className=' relative'>{name}</li>;

const ItemList = () => {
  const items = data.map((item) => <Item key={item.id} name={item.name} />);
  return <ul>{items}</ul>;
}
const Card = ({title,image})=> {

    <div className='  relative top-[5rem] mx-1 h-[21rem] mb-2 font-regular bg-white-0'>
        {/* category and name */}
        <div className='flex flex-col   w-[16rem] h-full justify-end static'>
            <div className='w-full flex flex-col my-7 justify-between '>
                <i className='text-3xl text-center mb-5 font-medium'>{title}</i>
                <i className='m-auto '><button className='bg-blue-0 text-white-0 rounded w-20 h-10 ' >View All</button></i>
            </div>
            <div className='w-full  bg-blue-0 '>
                <i ><img src={image} alt='' size='100%'></img></i>

            </div>
        </div>

        {/* item,name,price */}
        <div></div>

    </div>

}
const CardList = () =>{
    
    // const items = data.map((item) => <Item key={item.id} name={item.name} />);
    // return <ul>{items}</ul>;
    const cards = itemsImage.map((card) => 
    {
        <Card key={card.id} title={card.title} image={card.image}/>
    });
    const List = () => {
         
          <div>
            {cards.map((item) => {
              return <div key={item}>{item}</div>;
            })}
          </div>
        
      };
      
     
   
} 

export default CardList;