import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    async function getChars() {
      let res = await fetch("https://breakingbadapi.com/api/characters");
      let data = await res.json();
      setChars(data);
    }

    getChars();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {chars.map((char) => {
            return (
              <div key={char.id} className="col-md-4">
                <Card image={char.img} id={char.char_id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
