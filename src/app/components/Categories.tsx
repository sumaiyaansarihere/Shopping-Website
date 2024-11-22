import React from 'react';

const Categories = () => {
  return (
    <section id="categories" className="categories-container bg-bique py-16 px-6">
      
      <div className="categories-header text-center mb-12">
        <h1 className="text-5xl font-bold outline-double  text-pink-500 mb-4 animate-fadeInUp">
          Exclusive Categories
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeInUp delay-200">
          Discover our beautifully curated range of abayas and hijabs designed with elegance and modesty in mind.
        </p>
      </div>

      
      <div className="categories-grid grid md:grid-cols-3 gap-8">
        {/* Category 1 */}
        <div className="category-card relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src='/pexels-qalanjos-fashions-online-abaya-store-673551486-29188569.jpg'
            alt="Elegant Abayas"
            className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 className="text-xl font-bold text-pink-500 mb-2">Elegant Abayas</h3>
            <a
              href="/abayas"
              className="text-white px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-all"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Category 2 */}
        <div className="category-card relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="/pexels-eky-rima-nurya-ganda-174710171-15115727.jpg"
            alt="Modest Hijabs"
            className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 className="text-xl font-bold text-pink-500 mb-2">Modest Hijabs</h3>
            <a
              href="/hijabs"
              className="text-white px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-all"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Category 3 */}
        <div className="category-card relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src="/pexels-qalanjos-fashions-online-abaya-store-673551486-17879732.jpg"
            alt="New Arrivals"
            className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <h3 className="text-xl font-bold text-pink-500 mb-2">New Arrivals</h3>
            <a
              href="/new-arrivals"
              className="text-white px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-all"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
