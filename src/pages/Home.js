import React from "react";

const Home = () => (
  <ol className="list-decimal list-inside p-2">
    <div className="flex items-center group">
      <li className="py-2 text-gray-400">
        <button className="mr-1 focus:outline-none">▲</button>
        <span className="text-gray-800">{/*title*/}</span>
        <a href="/">{/*link*/}</a>
      </li>
    </div>
  </ol>
);

export default Home;
