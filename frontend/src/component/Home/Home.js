import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";




const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());

    
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner" id="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Find Amazing Products Below</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <section class="pt-12">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

          

          {/*  <!-- Heading -->*/}
            <h2 class="mb-4 homeHeading">Best Picks 2023</h2>

          {/*  <!-- Subheading -->*/}
            <p class="mb-10 text-gray-500">
              Best product, discounted price and the large latest variety of product 
            </p>

          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-5 col-lg-4 d-flex flex-column">

          {/*  <!-- Card -->*/}
            <div class="cardsec1 mb-7 text-white " >

            {/*  <!-- Background -->*/}
              <div class="card-bg">
                <div class=" card-bg-img bg-cover" ></div>
              </div>

            {/*  <!-- Body -->*/}
              <div class="card-body my-auto text-center cardstyle">

              {/*  <!-- Heading -->*/}
                <h4 class="mb-0">Bags Collection</h4>

              {/*  <!-- Link -->*/}
                <a class="btn btn-link stretched-link text-reset" href="#banner">
                  Shop Now <i class="fe fe-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>
          <div class="col-12 col-md-7 col-lg-8 d-flex flex-column">

          {/*  <!-- Card -->*/}
            <div class="cardsec2 mb-7 text-body" >

            {/*  <!-- Background -->*/}
              <div class="card-bg">
                <div class="card-bg-img bg-cover" ></div>
              </div>

            {/*  <!-- Body -->*/}
              <div class="card-body my-auto px-md-10 text-center text-md-start cardstyle1">

              {/*  <!-- Circle -->*/}
                <div class="card-circle card-circle-lg card-circle-end">
                  <strong>save</strong>
                  <span class="fs-4 fw-bold">30%</span>
                </div>

              {/*  <!-- Heading -->*/}
                <h4 class="mb-0">Printed men’s Shirts</h4>

              {/*  <!-- Link -->*/}
                <a class="btn btn-link stretched-link px-0 text-reset" href="#banner">
                  Shop Now <i class="fe fe-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>
          <div class="col-12 col-md-7 col-lg-8 d-flex flex-column">

          {/*  <!-- Card -->*/}
            <div class="cardsec3 mb-7 mb-md-0 text-body" >

            {/*  <!-- Background -->*/}
              <div class="card-bg">
                <div class="card-bg-img bg-cover" ></div>
              </div>

            {/*  <!-- Body -->*/}
              <div class="card-body my-auto px-md-10 text-center text-md-start cardstyle1">

              {/*  <!-- Heading -->*/}
                <h4 class="mb-0">Basic women’s Dresses</h4>

              {/*  <!-- Link -->*/}
                <a class="btn btn-link stretched-link px-0 text-reset" href="#banner">
                  Shop Now <i class="fe fe-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>
          <div class="col-12 col-md-5 col-lg-4 d-flex flex-column">

          {/*  <!-- Card -->*/}
            <div class="cardsec4 text-white" >

            {/*  <!-- Background -->*/}
              <div class="card-bg">
                <div class="card-bg-img bg-cover" ></div>
              </div>

            {/*  <!-- Body -->*/}
              <div class="card-body my-auto text-center cardstyle">

              {/*  <!-- Heading -->*/}
                <h4 class="mb-0">Sweatshirts</h4>

              {/*  <!-- Link -->*/}
                <a class="btn btn-link stretched-link text-reset" href="#banner">
                  Shop Now <i class="fe fe-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>


          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>

          <section>
      <div class="row gx-0 d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">

        {/* <!-- Item --> */}
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover1" >
          <div class="card bg-dark-5 bg-hover text-white text-center" >
            <div class="card-body mt-auto mb-n11 py-8">

            {/*  <!-- Heading --> */}
              <h1 class="mb-0 fw-bolder">
                Women
              </h1>

            </div>
            <div class="card-body mt-auto py-8">

             {/* <!-- Button --> */}
              <a class="btn btn-white stretched-link" href="#banner">
                Shop Women <i class="fe fe-arrow-right ms-2"></i>

              </a>

            </div>
          </div>
        </div>

      {/*  <!-- Card --> */}
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover2" >
          <div class="card bg-dark-5 bg-hover text-white text-center" >
            <div class="card-body mt-auto mb-n11 py-8">

            {/*  <!-- Heading --> */}
              <h1 class="mb-0 fw-bolder">
                Men
              </h1>

            </div>
            <div class="card-body mt-auto py-8">

            {/*  <!-- Button --> */}
              <a class="btn btn-white stretched-link" href="#banner">
                Shop Men <i class="fe fe-arrow-right ms-2"></i>
              </a>

            </div>
          </div>
        </div>

      {/*  <!-- Card --> */}
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover3" >
          <div class="card bg-dark-5 bg-hover text-white text-center" >
            <div class="card-body mt-auto mb-n11 py-8">

            {/*  <!-- Heading --> */}
              <h1 class="mb-0 fw-bolder">
                Kids
              </h1>

            </div>
            <div class="card-body mt-auto py-8">

            {/*  <!-- Button --> */}
              <a class="btn btn-white stretched-link" href="#banner">
                Shop Kids <i class="fe fe-arrow-right ms-2"></i>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>

          <section class="py-12 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">

            {/*<!-- Heading --> */}
            <h2 class="mb-3 homeHeading">New Launch</h2>

            {/*<!-- Subheading --> */}
            <p class="mb-10 fs-lg text-gray-500">
              New and Exciting Brnads Here
            </p>

          </div>
        </div>
        <div class="row mx-n1 mb-10">
          <div class="col-6 col-sm-4 col-md px-1">

             {/*<!-- Card --> */}
            <div class="card1 mb-2">

              {/*<!-- Image --> */}
              <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-16.jpg" alt="..." class="card-img" ></img>

              {/*<!-- Overlay --> */}
              <a class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="#banner">
                <p class="my-0 fs-xxs text-center text-white">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 248 <i class="fa fa-comments" aria-hidden="true"></i> 7
                </p>
              </a>

            </div>

          </div>
          <div class="col-6 col-sm-4 col-md px-1">

            {/*<!-- Card --> */}
            <div class="card1 mb-2">

              {/*<!-- Image --> */}
              <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-17.jpg" alt="..." class="card-img" />

              {/*<!-- Overlay --> */}
              <a class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="#banner">
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 248 <i class="fa fa-comments" aria-hidden="true"></i> 7
                </p>
              </a>

            </div>

          </div>
          <div class="col-6 col-sm-4 col-md px-1">

            {/*<!-- Card --> */}
            <div class="card1 mb-2">

              {/*<!-- Image --> */}
              <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-18.jpg" alt="..." class="card-img" />

              {/*<!-- Overlay --> */}
              <a class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="#banner">
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 248 <i class="fa fa-comments" aria-hidden="true"></i> 7
                </p>
              </a>

            </div>

          </div>
          <div class="col-6 col-sm-4 col-md px-1">

            {/*<!-- Card --> */}
            <div class="card1 mb-2">

              {/*<!-- Image --> */}
              <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-19.jpg" alt="..." class="card-img"/>

              {/*<!-- Overlay --> */}
              <a class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="#banner">
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 248 <i class="fa fa-comments" aria-hidden="true"></i> 7
                </p>
              </a>

            </div>

          </div>
          <div class="col-6 col-sm-4 col-md px-1">

            {/*<!-- Card --> */}
            <div class="card1">

              {/*<!-- Image --> */}
              <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-20.jpg" alt="..." class="card-img"/>

              {/*<!-- Overlay --> */}
              <a class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="#banner">
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 248 <i class="fa fa-comments" aria-hidden="true"></i> 7
                </p>
              </a>

            </div>

          </div>
          <div class="col-6 col-sm-4 col-md px-1">

            {/*<!-- Card --> */}
            <div class="card1">

              {/*<!-- Image --> */}
              <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-21.jpg" alt="..." class="card-img"/>

              {/*<!-- Overlay --> */}
              <a class="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="#banner">
              <p class="my-0 fs-xxs text-center text-white">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 248 <i class="fa fa-comments" aria-hidden="true"></i> 7
                </p>
              </a>

            </div>

          </div>
        </div>
        <div class="row">
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/mango.svg" alt="..." class="img-fluid mb-7 mb-md-0"/>

          </div>
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/zara.svg" alt="..." class="img-fluid mb-7 mb-md-0"/>

          </div>
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/reebok.svg" alt="..." class="img-fluid mb-7 mb-md-0"/>

          </div>
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/asos.svg" alt="..." class="img-fluid mb-7 mb-md-0"/>

          </div>
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/stradivarius.svg" alt="..." class="img-fluid mb-6 mb-sm-0"/>

          </div>
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/adidas.svg" alt="..." class="img-fluid mb-6 mb-sm-0"/>

          </div>
          <div class="col-4 col-sm-3 col-md text-center">

            {/*<!-- Brand --> */}
            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/gray-350/bershka.svg" alt="..." class="img-fluid"/>

          </div>
        </div>
      </div>
    </section>
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
