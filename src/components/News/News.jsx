import React from 'react';
import Loader from '../Loader/Loader';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_BACKEND_URL}/news`, fetcher);
  if (error) return <div className="mx-[7%] px-4 py-8 min-h-screen">failed to load</div>
 
  return (
    <div className="mx-[7%] px-4 py-8 min-h-screen">
      <div className='text-[#017F84] text-4xl lg:text-7xl font-semibold mb-10 text-center'>News Section</div>
      {
        !isLoading && data?.data.length &&
        (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              data.data.map((article, index) => (
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
              ))
            }
          </div>
        )
      }
          {isLoading && <Loader/>}
    </div>
  );
}

export default App;
