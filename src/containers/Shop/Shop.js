import React, { useState, useMemo, useEffect } from "react";
import styles from "./Shop.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import  firebase  from "firebase";


import SideBar from "../../components/SideBar/SideBar";

function Shop() {
  const [categoryInUse, setСategoryInUse] = useState("");
  const [products, setProducts] = useState([]);


  const categories = useMemo(() => {
    const nonUniqueCategories = products.map((el) => {
      return el.category;
    });
    const categories = [];
    nonUniqueCategories.forEach((el) => {
      if (
        categories.find((element) => {
          return element === el;
        }) === undefined
      ) {
        categories.push(el);
      }
    });
    return categories;
    //return [...new Set(nonUnqueCategories)]; //сет убирает дубликаты, можно вместо фаинда
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (categoryInUse !== "") {
      const filteredProduct = products.filter((el) => {
        return el.category === categoryInUse;
      });
      return filteredProduct;
    } else {
      return products;
    }
  }, [products, categoryInUse]);

  useEffect(() => {
    const database = firebase.database();
    database.ref().child("products").get().then(snapeshot => {
      if (snapeshot.exists()){
        const keys = Object.keys(snapeshot.val());
        const newProducts = keys.map(key => {
          const product = snapeshot.val()[key];
          product.price = parseInt(product.price, 10);
          product.id = key;
          return product;
        });
        console.log("snapshot :",snapeshot.val());
        setProducts(newProducts);
      } else {
        console.log("no data");
      }
    } )
    console.log("database :",database)
  }, []);

  const handleAmountChanged = (a, index) => {
    const newProducts = [...products];
    const newAmo = {
      ...newProducts[index],
      amount: newProducts[index].amount + a,
    };
    newProducts[index] = newAmo;
    console.log(newAmo);
    setProducts(newProducts);
  };

  const handleCategorySelected = (category) => {
    setСategoryInUse(category);
  };

  return (
    <div className={styles.container}>
      <div>
        <SideBar
          className={styles.sidebar}
          categories={categories}
          onCategorySelected={handleCategorySelected}
        />
      </div>
      <div className={styles.productsContainer}>
        {filteredProducts.map((element, index) => {
          return (
            <div key={element.id} className={styles.product}>
              <img alt={element.name} src={element.urlImg} />
              <div>{element.name}</div>
              <div>
                {element.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                грн
              </div>
              <div>{element.description}</div>
              <div>
                {element.amount > 0 ? (
                  <div>
                    <button onClick={() => handleAmountChanged(1, index)}>
                      +
                    </button>
                    {element.amount}
                    <button onClick={() => handleAmountChanged(-1, index)}>
                      -
                    </button>
                  </div>
                ) : (
                  <button onClick={() => handleAmountChanged(1, index)}>
                    Buy
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShopProducts: (products) => dispatch(actions.setShopProducts(products))
  }
}

export default Shop;
