import React, { useState, useMemo } from "react";
import firebase from "firebase/app";
import styles from "./AuthView.module.css";
import "firebase/auth";

const AuthView = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const isDisabled = useMemo(() => {
    const arr = [name, password];
    return (
      arr.find((el) => {
        return el === "";
      }) !== undefined
    );
  }, [name, password]);

  return (
    <div className={styles.container}>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <div>enter name</div>
      <input
        value={name}
        onChange={(newValue) => {
          setName(newValue.target.value);
        }}
      ></input>
      <div>enter password</div>
      <input
        value={password}
        onChange={(newValue) => {
          setPassword(newValue.target.value);
        }}
      ></input>
      <br />
      <button
        disabled={isDisabled}
        onClick={() => {
          if (isLogin) {
            firebase
              .auth()
              .signInWithEmailAndPassword(name, password)
              .then((userCredential) => {
                console.log("create user", userCredential);
              })
              .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);
              });
          }
          else {
            firebase
            .auth()
            .createUserWithEmailAndPassword(name, password)
            .then((userCredential) => {
              console.log("create user", userCredential);
            })
            .catch((error) => {
              var errorMessage = error.message;
              alert(errorMessage);
            });
          }}}
      >
        Send
      </button>
      <br />
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Нажмите для регистрации" : "Нажмите для входа"}
      </button>
    </div>
  );
};

export default AuthView;
