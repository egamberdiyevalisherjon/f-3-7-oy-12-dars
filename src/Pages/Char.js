import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Char = ({ match }) => {
  let id = match.params.id;

  const [char, setChar] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const getChar = async () => {
      let res = await fetch(`https://breakingbadapi.com/api/characters/${id}`);
      let data = await res.json();
      setChar(data[0]);
      let resForSimilars = await fetch(
        `https://breakingbadapi.com/api/characters?category=${data[0].category}`
      );
      let dataForSimilar = await resForSimilars.json();

      setSimilar(dataForSimilar);
    };

    getChar();
  }, [id]);

  return (
    char && (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src={char.img} width="100%" height="500" alt="" />
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <h2 className="d-inline">Name: </h2>
                  {char.name}
                </li>
                <li>
                  <h2 className="d-inline">Birthday: </h2>
                  {char.birthday}
                </li>
                <li>
                  <h2 className="d-inline">Occupation: </h2>
                  {char.occupation.join(", ")}
                </li>
                <li>
                  <h2 className="d-inline">Status: </h2>
                  {char.status}
                </li>
                <li>
                  <h2 className="d-inline">Nickname: </h2>
                  {char.nickname}
                </li>
                <li>
                  <h2 className="d-inline">Appearance: </h2>
                  {char.appearance.join(", ")}
                </li>
                <li>
                  <h2 className="d-inline">Portrayed: </h2>
                  {char.portrayed}
                </li>
                <li>
                  <h2 className="d-inline">Category: </h2>
                  {char.category}
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            {similar.map((charec) => {
              return (
                <div key={charec.char_id} className="col-md-4">
                  <Card image={charec.img} id={charec.char_id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Char;
