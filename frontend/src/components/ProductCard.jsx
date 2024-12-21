import React from "react";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import "./ProductCard.css"; // استيراد ملف الـ CSS
import { useUserStore } from "../stores/useUserStore";

const ProductCard = ({ product, user: propUser, addToCart }) => {
  const { user: storeUser } = useUserStore();
    const handleAddToCart = () => {
        if (!user) {
            toast.error("Please login to add products to cart", { id: "login" });
            return;
        } else {
            // add to cart
            addToCart(product);
        }
    };

  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img className="product-card-image" src={product.image} alt="product image" />
        <div className="product-card-overlay" />
      </div>

      <div className="product-card-body">
        <h5 className="product-card-title">{product.name}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="product-card-price">${product.price}</span>
          </p>
        </div>
        <button
          className="product-card-button"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} className="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
