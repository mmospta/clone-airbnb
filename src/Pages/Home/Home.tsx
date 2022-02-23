import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import expImg1 from "../../assets/pexels-francesco.jpg";
import expImg2 from "../../assets/pexels-jeremy.jpg";

import {
  MenuRounded,
  AccountCircleRounded,
  LanguageRounded,
} from "@mui/icons-material";

type CardTripData = {
  city: string;
  distance: number;
  image: string;
};

const Home = () => {
  const [cardsTrip, setCardsTrip] = useState<CardTripData[]>([]);

  useEffect(() => {
    fetch("http://localhost:4001/citycard")
      .then((res) => res.json())
      .then((result) => {
        setCardsTrip(result as CardTripData[]);
      });
  }, []);

  useEffect(() => {
    console.log(cardsTrip);
  }, [cardsTrip]);

  return (
    <div>
      <Header />
      <Baner />
      <CardTrip cardsTrip={cardsTrip} />
      <CardExperience />
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
        <h1>Not sure where to go? Perfect.</h1>
        <button>I'm flexible</button>
      </div>
      <img src="https://picsum.photos/seed/picsum/900/600" alt="" />
    </div>
  );
};

const CardTrip = ({ cardsTrip }: { cardsTrip: CardTripData[] }) => {
  return (
    <div className={classes.CardTrip}>
      <h2>Inspiration for your next trip</h2>
      <div>
        {cardsTrip.map((card) => (
          <div>
            <img src={card.image} alt="" />
            <h3>{card.city}</h3>
            <p>{card.distance} kiloetres away</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CardExperience = () => {
  return (
    <div className={classes.CardExperience}>
      <h2>Discover Airbnb Experiences</h2>
      <div>
        <div>
          <div>
            <h1>Things to do</h1>
            <h1>on your trip</h1>
            <button>Experiences</button>
          </div>
          <img src={expImg1} alt="" />
        </div>
        <div>
          <div>
            <h1>Things to do</h1>
            <h1>on your trip</h1>
            <button>Experiences</button>
          </div>
          <img src={expImg2} alt="" />
        </div>
      </div>
    </div>
  );
};
