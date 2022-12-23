import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ContestDetails from "./ContestDetails";

const baseURL = "https://kontests.net/api/v1/all";

function Contests() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://kontests.net/api/v1/all",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const codechef = data.filter(function (con) {
    return con.site == "CodeChef";
  });
  const codeforces = data.filter(function (con) {
    return con.site == "CodeForces";
  });

  return (
    <div>
      {!data && <h1>Loading...</h1>}
      {data && (
        <div className="bg-dark">
          <h1 className="text-center bg-black rounded-lg width-full text-white text-2xl border-2 border-white">
            CodeChef
          </h1>
          {codechef.map((contest) => (
            <ContestDetails
              site={contest.site}
              name={contest.name}
              start={contest.start_time}
              end={contest.end_time}
              status={contest.status}
              url={contest.url}
            />
          ))}
          <h1 className="text-center bg-black rounded-lg width-full text-white text-2xl mt-8 border-2 border-white">
            CodeForces
          </h1>
          {codeforces.map((contest) => (
            <ContestDetails
              site={contest.site}
              name={contest.name}
              start={contest.start_time}
              end={contest.end_time}
              status={contest.status}
              url={contest.url}
            />
          ))}
          <h1 className="text-center bg-black rounded-lg width-full text-white text-2xl mt-8 border-2 border-white">
            All Contests
          </h1>
          {data.map((contest) => (
            <ContestDetails
              site={contest.site}
              name={contest.name}
              start={contest.start_time}
              end={contest.end_time}
              status={contest.status}
              url={contest.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Contests;
