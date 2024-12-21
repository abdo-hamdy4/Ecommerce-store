import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";
import './ProductsList.css';

const ProductsList = () => {
  const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

  console.log("products", products);

  return (
    <motion.div
      className="products-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <table className="table">
        <thead className="table-header">
          <tr>
            <th scope="col" className="table-header th">Product</th>
            <th scope="col" className="table-header th">Price</th>
            <th scope="col" className="table-header th">Category</th>
            <th scope="col" className="table-header th">Featured</th>
            <th scope="col" className="table-header th">Actions</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {products?.map((product) => (
            <tr key={product._id} className="table-row">
              <td className="table-cell">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="product-name">{product.name}</div>
                  </div>
                </div>
              </td>
              <td className="table-cell">
                <div className="product-price">${product.price.toFixed(2)}</div>
              </td>
              <td className="table-cell">
                <div className="product-category">{product.category}</div>
              </td>
              <td className="table-cell">
                <button
                  onClick={() => toggleFeaturedProduct(product._id)}
                  className={`featured-button ${product.isFeatured ? "active" : "inactive"}`}
                >
                  <Star className="h-5 w-5" />
                </button>
              </td>
              <td className="table-cell">
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="delete-button"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ProductsList;
