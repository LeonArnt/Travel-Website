import { useState, useEffect } from "react";

function useData(url) {
  const [locations, setLocations] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLocations(data);
        setIsPending(false);
        setErrorMsg(null);
        console.log(data);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setIsPending(false);
      });
  }, []);

  return { locations, isPending, errorMsg };
}

export default useData;
