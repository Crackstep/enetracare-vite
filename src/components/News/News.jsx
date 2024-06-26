import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';

// Caching function
const cache = (fn) => {
  const results = new Map();
  return async (...args) => {
    const key = JSON.stringify(args);
    if (results.has(key)) {
      return results.get(key);
    }
    const result = await fn(...args);
    results.set(key, result);
    return result;
  };
};

// Cached version of the API call
const fetchNews = async () => {
  const response = await axios.get("https://enetracare-scrapper-server.vercel.app");
  return response.data;
};

const cachedFetchNews = cache(fetchNews);

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    setIsLoading(true);
    const news = await cachedFetchNews();
    setData(news);
    setIsLoading(false);
  }

  if (isLoading) return <Loader />;

  return (
    <div className="mx-[7%] px-4 py-8 min-h-screen">
      <div className='text-[#017F84] text-4xl lg:text-7xl font-semibold mb-10 text-center'>News Section</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data &&
          data.map((article, index) => (
            <div key={index} className={`bg-white rounded-lg ${!article.title ? "hidden" : ""} shadow-md overflow-hidden`}>
              <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-2xl font-bold text-black mb-2">{article.title}</p>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    <span className="font-semibold">Author:</span> {article.author} |{' '}
                    <span className="font-semibold">Date:</span> {article.date}
                  </p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
