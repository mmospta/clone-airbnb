import React, { useEffect } from "react";
import classes from "./Home.module.css";
import {
  MenuRounded,
  AccountCircleRounded,
  LanguageRounded,
} from "@mui/icons-material";

const Home = () => {
  // fetch('http://localhost:8000/blogs', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(blog)
  // }).then(() => {
  //     console.log('new blog added');
  //     setIsPending(false);
  //     // history.go(-1);
  //     history.push('/');
  // })

  useEffect(() => {
    fetch("http://localhost:4001/citycard")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <div>
      <Header />
      <Baner />

      <div className={classes.CardTrip}>
        <p>Inspiration for your next trip</p>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

const Header = () => {
  return (
    <div className={classes.Header}>
      <img
        src="https://www.himmapanavillas.com/wp-content/uploads/2020/09/AirBnB-logo.png"
        alt=""
      />
      <div>
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>

      <div>
        <p>Become a Host</p>
        <LanguageRounded />
        <div className={classes.Profile}>
          <MenuRounded />
          <AccountCircleRounded />
        </div>
      </div>
    </div>
  );
};

const Baner = () => {
  return (
    <div className={classes.FlexibleSection}>
      <div>
        <p>Not sure where to go? Perfect.</p>
        <button>I'm flexible</button>
      </div>
      <img src="https://picsum.photos/seed/picsum/900/600" alt="" />
    </div>
  );
};
