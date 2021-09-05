import React, { useState, useMemo } from "react";
import styles from "./AdminView.module.css";
import * as api from "../../api";

export default function AdminView(props) {
  console.log(props);

  const [isLoading, setIsLoading] = useState(false);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const isDisabled = useMemo(() => {
    const arr = [category, description, name, price, url];
    return (
      arr.find((el) => {
        return el === "";
      }) !== undefined
    );
  }, [category, description, name, price, url]);

  const addNewProduct = async () => {
    try {
      setIsLoading(true);
      const response = await api.createProduct(
        category,
        description,
        name,
        url,
        price,
      );
      setCategory("");
      setDescription("");
      setName("");
      setPrice("");
      setUrl("");
      setIsLoading(false);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <div>введите категорию</div>
      <input
        className={styles.input}
        type="text"
        value={category}
        onChange={(newValue) => {
          setCategory(newValue.target.value);
        }}
      />

      <div>введите описание</div>
      <textarea
        className={styles.textarea}
        value={description}
        onChange={(newValue) => {
          setDescription(newValue.target.value);
        }}
      ></textarea>

      <div>введите название</div>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(newValue) => {
          setName(newValue.target.value);
        }}
      />

      <div>введите цену</div>
      <input
        className={styles.input}
        type="number"
        value={price}
        onChange={(newValue) => {
          setPrice(newValue.target.value);
        }}
      />

      <div>введите urlImg</div>
      <input
        className={styles.input}
        type="text"
        value={url}
        onChange={(newValue) => {
          setUrl(newValue.target.value);
        }}
      />

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <button
            disabled={isDisabled}
            className={styles.submit}
            onClick={addNewProduct}
          >
            Add Product
          </button>
        </div>
      )}
    </div>
  );
}
