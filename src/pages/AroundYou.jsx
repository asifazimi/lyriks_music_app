/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_TNinGex8iRp5pdCL7HPLanVr4IoYB`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  console.log(country);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default AroundYou;
