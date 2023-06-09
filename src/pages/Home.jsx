import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Requests from "../components/Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Upcoming" fetchURL={Requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={Requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={Requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={Requests.requestTopRated} />
    </div>
  );
};

export default Home;
