import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = ProductContext;
  //componentDidMount(){}
  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);
    if (!product) {
      return (
        <div className="error">
          <h3>No Such product could be found...</h3>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      // extras,
      // breakfast,
      // pets,
      images
    } = product;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} product`}>
            <Link to="/products" className="btn-primary">
              Back to Products
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>Diameter : {size}IN.</h6>
              <h6>
                count: {capacity > 1 ? `${capacity} pcs` : `${capacity} pc`}
              </h6>
            </article>
          </div>
        </section>
      </>
    );
  }
}
