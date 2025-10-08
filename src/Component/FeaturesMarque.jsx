// import { Bed, MapPin, Sofa } from 'lucide-react'
// import React from 'react'

// const Features = [
//     {icon: <Sofa size={20}/>, text: "Beautiful interior" },
//     {icon: <Bed size={20}/>, text: "Comfortable beds" },
//     { icon: <MapPin size={20}/>,  text: "Great Location" },
//     { icon: <Star size/>, text: "Beautiful and Walkable" },
// ]

// const FeaturesMarque = () => {
//   return (
//     <div>
//         <div>
//             {Features.concat(Features).map((item, i) => (
//                 <span
//                   key={i}
//                   className='flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-lg bg-white shadow-sm'
//                 >
//                     {item.icon} {item.text}

//                 </span>
//             ))}
//         </div>
//         <div> 
//             {Features.concat(Features).map((item, i) => (
//                 <span
//                   key={i}
//                   className='flex items-center gap-2 border border-gray-300 py-6 px-3 rounded-full text-lg bg-white shadow-sm'
//                 >
//                     {item.icon} {item.text}
//                 </span>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default FeaturesMarque


import { useState } from "react";
import NewsCard from "../components/NewsCard";
import Marquee from "react-fast-marquee";
import { newsData } from "../data/newsData";

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[var(--secondary-color)] py-6">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Marquee Section */}
        <div className="bg-white border border-gray-300 flex items-center mb-10">
          <div className="bg-red-700 text-white px-4 py-2 font-semibold">
            Recent News
          </div>
          <div className="flex-1 overflow-hidden">
            <Marquee pauseOnHover={true} gradient={false} speed={100}>
              {newsData.slice(0, 3).map((news) => (
                <div key={news.id} className="px-6 flex items-center space-x-2">
                  <span className="text-red-600">✔</span>
                  <span className="text-red-600 font-medium">{news.title}</span>
                  <span className="text-gray-500 text-sm">({news.date})</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* News Grid */}
        <div className="min-h-screen mt-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            News
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {currentItems.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                description={news.description}
                date={news.date}
                image={news.image}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 border"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        <div className="h-[2px] bg-white mt-12"></div>
      </div>
    </div>
  );
}