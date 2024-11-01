// src/Components/HomePage.jsx

import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta
import Header from './Header'; // Importamos el Header
import axios from 'axios'; // Importa Axios

const HomePage = () => {
    const [products, setProducts] = useState([]); // Estado para los productos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://192.168.42.15:3000/products'); // Ajusta la URL según sea necesario
                setProducts(response.data); // Guarda los productos en el estado
                setError(null); // Limpia el error si la solicitud fue exitosa
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Error al cargar los productos"); // Manejo de error
            } finally {
                setLoading(false); // Cambia el estado de carga
            }
        };
        
        fetchProducts(); // Llama a la función para obtener los productos
    }, []); // Este efecto solo se ejecuta una vez al montar el componente

    // Filtra los productos que contienen "Ow Be Right Back Sneakers"
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes('air')
    );

    if (loading) {
        return <p>Cargando productos...</p>; // Mensaje de carga
    }

    if (error) {
        return <p>{error}</p>; // Mensaje de error
    }

    return (
        <div>
            <Header /> {/* Asegúrate de que el Header esté bien importado */}
            <main className='cuerpo'>
                <img src="https://www.off---white.com/BWStaticContent/53000/26bc1ecf-9fb1-4bb4-a7af-f246bec08945_off-white-brb-batch-1-57.jpg" alt="Be Right Back" />
                <p className='brb'>"BE RIGHT BACK"</p>
                <p className='text_cuerpo'>
                    "BE RIGHT BACK", the new sneaker that encourages you to "BE WELL" by leaning into life’s gray areas—the everyday moments that get you from where you’ve been to where you’re going. As sequel and complement to the iconic "OUT OF OFFICE" sneaker designed by Virgil Abloh in 2020, the "BRB" is all about making you time so you can be your best self. Positioned at the intersection of sport and style, it features iconic Off-White™ codes, including a brand-new take on the signature Arrow for a sense of velocity.
                </p>

                {/* Aquí se renderizan las tarjetas de productos filtrados */}
                <div className="product-cards">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            productImages={product.images}
                            productName={product.name}
                            productDescription={product.description}
                            productPrice={product.price}
                        />
                    ))}
                </div>
                
                <div className="gender_selection">
                    <a href="/products?gender=man">
                        <div className="gender_item">
                            <p>HOMBRE</p>
                            <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/60b579fe-c7b0-4baf-ad70-76fc30d5155f___c7585bf6ce77983e2ee8998a2325e0e8.jpg" alt="Hombre" />
                        </div>
                    </a>
                    <a href="/products?gender=woman">
                        <div className="gender_item">
                            <p>MUJER</p>
                            <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/4896be05-fecc-4c38-a589-98f1c280b15f___ad1c34ec624f56b2d45af4a8c466d1a8.jpg" alt="Mujer" />
                        </div>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
