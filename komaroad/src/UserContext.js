import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import axios from "axios";
import { onSnapshot, doc } from "firebase/firestore";

const User = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [achievements, setAchievements] = useState([]);



  // achievements
  // useEffect(() => {
  //   if (user) {
  //     const coinRef = doc(db, "achievements", user?.uid);
  //     var unsubscribe = onSnapshot(coinRef, (achievement) => {
  //       if (achievement.exists()) {
  //         console.log(achievement.data().achievements);
  //         setAchievements(achievement.data().achievements);
  //       } else {
  //         console.log("No Items in Watchlist");
  //       }
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, [user]);


  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);




//   const fetchCoins = async () => {
//     setLoading(true);
//     const { data } = await axios.get(CoinList(currency));

//     setCoins(data);
//     setLoading(false);
//   };



  return (
    <User.Provider
      value={{
        user,
        loading,
        achievements,
      }}
    >
      {children}
    </User.Provider>
  );
};

export default UserContext;

export const UserState = () => {
  return useContext(User);
};
