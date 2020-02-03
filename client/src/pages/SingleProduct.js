import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";
import StyledHero from "../components/StyledHero";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import DeleteImageBtn from "../components/DeleteImageBtn";

export default class extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      user: null,
      editing: false,
      product: {
        _id: "",
        name: "",
        description: "",
        capacity: 0,
        size: 0,
        price: 0,
        // extras,
        // breakfast,
        // pets,
        image1: null,
        image2: null,
        image3: null
      }
    };
  }

  loadProduct = async () => {
    const { getProduct } = this.context;
    await getProduct(this.state.slug);
    this.setState({
      product: this.context.currentProduct
    });
  };

  componentDidMount() {
    const loadUser = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await axios.get("/api/user/load");
        this.setState({
          user: res.data
        });
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
    this.loadProduct();
  }

  removeCurrentProduct = () => {
    const { removeProduct } = this.context;
    removeProduct(this.state.product._id);
    this.props.history.push("/products");
  };
  editCurrentProduct = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      product: {
        ...this.state.product,
        [name]: value
      }
    });
  };

  finishEditing = e => {
    e.preventDefault();
    // send request
    axios.put("/api/product", this.state.product);
    this.setState({
      editing: false
    });
  };

  static contextType = ProductContext;
  //componentDidMount(){}
  render() {
    const { user, editing } = this.state;

    if (!this.state.product) {
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
      _id,
      name,
      description,
      capacity,
      size,
      price,
      // extras,
      // breakfast,
      // pets,
      image1,
      image2,
      image3
    } = this.state.product;

    return (
      <>
        <StyledHero img={this.state.defaultBcg}>
          <Banner title={`${name} `}>
            <Link to="/products" className="btn-primary">
              Back to Products
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {image1 && (
              <div className="product-image-container">
                <img
                  src={`data:${image1.mimeType};base64,${new Buffer(
                    image1.data
                  ).toString("base64")}`}
                  alt="image1"
                />
                {editing ? (
                  <DeleteImageBtn
                    id={_id}
                    imageNumber={"image1"}
                    loadProduct={this.loadProduct}
                  />
                ) : null}
              </div>
            )}
            {image2 && (
              <div className="product-image-container">
                <img
                  src={`data:${image2.mimeType};base64,${new Buffer(
                    image2.data
                  ).toString("base64")}`}
                  alt="image1"
                />
                {editing ? (
                  <DeleteImageBtn
                    id={_id}
                    imageNumber={"image2"}
                    loadProduct={this.loadProduct}
                  />
                ) : null}
              </div>
            )}
            {image3 && (
              <div className="product-image-container">
                <img
                  src={`data:${image3.mimeType};base64,${new Buffer(
                    image3.data
                  ).toString("base64")}`}
                  alt="image1"
                />
                {editing ? (
                  <DeleteImageBtn
                    id={_id}
                    imageNumber={"image3"}
                    loadProduct={this.loadProduct}
                  />
                ) : null}
              </div>
            )}
          </div>

          <form onSubmit={this.finishEditing}>
            <div className="single-room-info">
              <article className="desc">
                <h3>Details</h3>
                {editing ? (
                  <textarea
                    className="form-control"
                    onChange={this.handleChange}
                    value={description}
                  />
                ) : (
                  <p>{description}</p>
                )}
              </article>
              <article className="info">
                <h3>Info</h3>
                <h6>
                  price : ${" "}
                  {editing ? (
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={this.handleChange}
                    />
                  ) : (
                    price
                  )}
                </h6>
                <h6>
                  Diameter :{" "}
                  {editing ? (
                    <input
                      type="number"
                      name="size"
                      value={size}
                      onChange={this.handleChange}
                    />
                  ) : (
                    size
                  )}
                  CM.
                </h6>
                <h6>
                  count:{" "}
                  {editing ? (
                    <input
                      type="number"
                      name="capacity"
                      value={capacity}
                      onChange={this.handleChange}
                    />
                  ) : (
                    capacity
                  )}{" "}
                  {capacity > 1 ? "pcs" : "pc"}
                </h6>
              </article>
              {editing ? (
                <>
                  <button type="submit">Submit</button>
                  <button type="button" onClick={this.editCurrentProduct}>
                    Cancel
                  </button>
                </>
              ) : null}
              {user ? (
                <div>
                  <button
                    className="addBtn"
                    type="button"
                    onClick={this.removeCurrentProduct}
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>

                  <button
                    className="editBtn"
                    onClick={this.editCurrentProduct}
                    type="button"
                  >
                    <i className="fas fa-pen"> </i>
                  </button>
                </div>
              ) : null}
            </div>
          </form>
        </section>
      </>
    );
  }
}
