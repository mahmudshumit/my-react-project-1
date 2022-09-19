import React from 'react';

import card1 from '../../../images/hero.jpg';
import card2 from '../../../images/1.jpg';
import card3 from '../../../images/card-3.jpg';
import card4 from '../../../images/card-4.jpg';
import card5 from '../../../images/card-5.jpg';
import card6 from '../../../images/img-07.jpg';
import Category from '../Category/Category';

const categories =[


    {id:1,name:'Space',image:card4},
    {id:2,name:'Magic-Cartoon',image:card5},
    {id:3,name:'Sports',image:card6},
    {id:4,name:'Art',image:card1},
    {id:5,name:'MetaVerse',image:card2},
    {id:6,name:'Anime',image:card3},
    
];


const Categories = () => {
    return (
        <div id='categories'  className='container'>
            <h1 className='text-center mt-5 mb-5'>Our Category</h1>
            <div className='row'>
                  {
                    categories.map(category=><Category
                    key={category.id}
                    category={category}
                    
                    >

                    </Category>)
                  }
            </div>
        </div>
    );
}

export default Categories;
