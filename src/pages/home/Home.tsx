import React from "react";
import "./Home.scss";
import TodoList from "../../components/todo/TodoList";
import ChartBox from "../../components/chartBox/ChartBox";
import Welcome from "../../components/welcome/Welcome";
import FeedList from "../../components/feed/FeedList";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Welcome />
      </div>
      <div className="box box2">
        <TodoList />
      </div>
      <div className="box box3">
        <FeedList />
      </div>
      <div className="box box4">
        <ChartBox />
      </div>
    </div>
  );
};

export default Home;
