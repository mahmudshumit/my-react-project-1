import React from 'react';

const Category = ({category}) => {

    const {name,img}=category;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 col-lg-4 d-flex align-items-stretch'>
            <div className="card " style={{ width: "46rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a  className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
}

export default Category;
