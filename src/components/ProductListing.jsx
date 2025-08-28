import { useEffect, useState } from "react";
import axios from "axios";

const ProductListing = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProduct(data.products));
  }, []);

    return (
      <>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold mb-2">{prod.title}</h5>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {prod.description}
                  </p>

                  <a
                    href="#"
                    className="inline-block bg-blue-200 text-white text-sm px-4 py-2 rounded"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default ProductListing;
