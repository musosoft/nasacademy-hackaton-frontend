import React, { useState, useEffect } from "react";

const HackerNews = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means this useEffect will run once
  useEffect(() => {
    fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=50'
    )
      .then((response) => response.json())
      .then((stories) => {
        Promise.all(
          stories.map((story) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
          )
        )
          .then((resp) => Promise.all(resp.map((r) => r.json())))
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ol className="list-decimal list-inside p-2">
        <div className="flex items-center flex-wrap">
          {items.map((item) => (
            <li key={item.id} className="py-2 text-gray-400">
              <button className="mr-1 focus:outline-none">▲</button>
              <a href={item.url} className="mr-1 text-gray-800">
                {item.title}
              </a>
              (<a href={item.url}>{item.url}</a>)
            </li>
          ))}
        </div>
      </ol>
    );
  }
};

export default HackerNews;
