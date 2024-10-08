import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// internal
import { IProduct } from "../../types/product-d-t";
import { calculateDiscountedPrice } from "../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { add_to_wishlist } from "../../redux/features/wishlist";
import { add_cart_product } from "../../redux/features/cart";


const ProductItem = ({ product }: { product: IProduct }) => {
  const [isWishlistActive,setIsWishlistActive] = useState(false);
  const [isCartActive,setIsCartActive] = useState(false);
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { cart_products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  // handle add wishlist
  const handleAddWishlist = (item: IProduct) => {
    dispatch(add_to_wishlist(item));
  };
  // handle add cart
  const handleAddCart = (item: IProduct) => {
    dispatch(add_cart_product(item));
  };

  useEffect(() => {
    if(wishlist.length){
      setIsWishlistActive(wishlist.some((p) => p.id === product.id))
    }
    if(cart_products.length){
      setIsCartActive(cart_products.some((p) => p.id === product.id))
    }
  },[cart_products, product.id, wishlist])

  return (
    <div className="product-block-one mb-60 md-mb-40">
      <div className="img-holder style-two">
        <NavLink
          to={`/shop-details/${product.id}`}
          className="d-flex align-items-center justify-content-center h-100"
        >
          <img
            src={product.img}
            alt="product-img"
            className="lazy-img product-img tran4s w-100"
          />             
        </NavLink>
        <button
          onClick={() => handleAddWishlist(product)}
          type="button"
          className={`cart-icon ${isWishlistActive ? "active" : ""}`}
        >
          <i className="bi bi-suit-heart"></i>
        </button>
        {!isCartActive && (
          <button
            onClick={() => handleAddCart(product)}
            type="button"
            className={`cart-button ${isCartActive ? "active" : ""}`}
          >
            Add to cart
          </button>
        )}
        {isCartActive && (
          <NavLink to="/cart" className="cart-button active">
            View cart
          </NavLink>
        )}
      </div>
      <div className="product-meta">
        <div className="d-lg-flex align-items-center justify-content-between">
          <NavLink to={`/shop-details/${product.id}`} className="product-title">
            {product.title}
          </NavLink>
          <ul className="style-none d-flex rating">
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star"></i>
            </li>
          </ul>
        </div>
        <div className="price">
          ${calculateDiscountedPrice(product.price, product.discount)}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
