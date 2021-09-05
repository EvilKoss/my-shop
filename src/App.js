import './App.css';
import AppLayout from './components/AppLayout/AppLayout';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Provider } from 'react-redux';
import store from './redux';


function App() {
  const [initialized,setInitialized] = useState(false);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDD5qcWmo-W6tKY7aAg4QmkHyQZ40Gf9fQ",
      authDomain: "pc-store-6e7d3.firebaseapp.com",
      databaseURL: "https://pc-store-6e7d3-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "pc-store-6e7d3",
      storageBucket: "pc-store-6e7d3.appspot.com",
      messagingSenderId: "358051518626",
      appId: "1:358051518626:web:34541f2978bb0c60551ffb",
      measurementId: "G-Q97HTNEE0W"
    };
    firebase.initializeApp(firebaseConfig);
    setInitialized(true);
  },[]);
  if(!initialized){
    return null;
  }
  return (
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  );
}

export default App;
