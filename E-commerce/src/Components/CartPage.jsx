import React from "react";
import ProductCard from "./ProductCard";
import productsData from "./data"; // Asegúrate de que esta ruta sea correcta

const CartPage = ({ onRemoveItem }) => {
  // Datos simulados para los productos en el carrito
  const cartItems = [
    'product1', // ID del producto en el carrito
    'product2', // Otro producto en el carrito
  ];

  // Mapear cartItems para obtener los productos correspondientes
  const updatedCartItems = cartItems.map(cartItemId =>
    productsData.find(product => product.id === cartItemId)
  ).filter(item => item !== undefined); // Filtrar productos no encontrados

  const total = updatedCartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);

  return (
    <div className="cart-page">
      <h4>Tu Carrito</h4>
      {updatedCartItems.length > 0 ? (
        <div>
          {updatedCartItems.map(item => (
            <div key={item.id} className="cart-item">
              <ProductCard
                productId={item.id}
                productImages={item.images}
                productName={item.name}
                productDescription={item.description}
                productPrice={item.price}
              />
              <button onClick={() => onRemoveItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default CartPage;
