import React, { Component } from "react";
// import items from "./data";
import axios from "axios";
const ProductContext = React.createContext();

//<ProductContext.Provider value={'hello'}

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    currentProduct: null
    // breakfast: false,
    //pets: false
  };

  //getData{

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await axios.get("/api/product");
    let maxPrice = Math.max(...res.data.map(item => item.price));
    let maxSize = Math.max(...res.data.map(item => item.size));
    let featuredProducts = res.data.filter(
      product => product.featured === true
    );

    this.setState({
      products: res.data,
      sortedProducts: res.data,
      maxPrice,
      maxSize,
      price: maxPrice,
      loading: false,
      featuredProducts
    });
  };

  getProduct = async slug => {
    const res = await axios.get(`/api/product/${slug}`);
    this.setState({
      currentProduct: res.data
    });
  };

  removeProduct = async id => {
    await axios.delete(`/api/product/${id}`);
    this.fetchData();
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterProducts
    );
  };

  loadUser = async () => {
    const user = await axios.get("/api/user/load");
    this.setState({ user });
  };

  filterProducts = () => {
    let {
      products,
      type,
      capacity,
      price,
      minSize,
      maxSize
      //breakfast, pets
    } = this.state;

    //All the products
    let tempProducts = [...products];
    //Transform value
    capacity = parseInt(capacity);

    //Filter by type
    if (type !== "all") {
      tempProducts = tempProducts.filter(product => product.type === type);
    }

    //Filter by capacity
    if (capacity !== 1) {
      tempProducts = tempProducts.filter(
        product => product.capacity >= capacity
      );
    }

    //Filter by price
    tempProducts = tempProducts.filter(product => product.price <= price);

    //Filter by Size
    tempProducts = tempProducts.filter(
      product => product.size >= minSize && product.size <= maxSize
    );

    //Filter by breakfast
    // if (breakfast) {
    //   tempProducts = tempProducts.filter(product => product.breakfast === true);
    // }
    //Filter by pets
    // if (pets) {
    //   tempProducts = tempProducts.filter(product => product.pets === true);
    // }

    //Change state
    this.setState({
      sortedProducts: tempProducts
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
          fetchData: this.fetchData,
          removeProduct: this.removeProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {value => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductProvider, ProductConsumer, ProductContext };
