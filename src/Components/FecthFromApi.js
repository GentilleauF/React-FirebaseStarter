import { useEffect, useState } from "react";

const FecthFromApi = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((reponse) => reponse.json())
      .then((data) => setMyData(data.results))
      .catch((e) => e.message);
  }, [url]);
  return <div>{myData && myData.map((elem) => <p key={elem.name} > {elem.name}</p>)}</div>;
};

export default FecthFromApi;
