import React from 'react';
import './Style/ProductsSlider.css';

const ProductsSlider = ({ products }) => {
    console.log(products[0])
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class='cardItem d-block w-100'>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                        </div>


                    </div>
                    <div class="carousel-item">
                        <div class='cardItem d-block w-100'>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                        </div>
                    </div>
                    <div class="carousel-item" >
                        <div class='cardItem  d-block w-100'>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                            <div>hello there my name is priya</div>
                        </div>
                    </div>
                    {/* <div class="carousel-item">
      box4
    </div>
    <div class="carousel-item">
      box5
    </div> */}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default ProductsSlider;