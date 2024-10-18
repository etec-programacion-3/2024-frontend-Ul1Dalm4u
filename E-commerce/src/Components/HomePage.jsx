import React from 'react';
import './HomePage.css';
import ProductCard from './ProductCard'; // Asegúrate de que la ruta sea correcta
import Header from './Header'; // Importamos el Header

const HomePage =   () => {
  // Definir los productos
  const products = [
    {
      id: 'product1',
      images: [
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806615_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806614_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806616_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-milan_23844041_53806647_1000.jpg?c=3"
      ],
      name: 'Ow Be Right Back Sneakers (Milan)',
      description: 'This is a brief description of the product. It includes key details and features.',
      price: '$99.99',
      gender: 'man',
    },
    {
      id: 'product2',
      images: [
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-new-york_23843598_53806364_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-new-york_23843598_53806359_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-new-york_23843598_53806353_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-new-york_23843598_53806390_1000.jpg?c=3"
      ],
      name: 'Ow Be Right Back Sneakers (New York)',
      description: 'This is a brief description of the product. It includes key details and features.',
      price: '$109.99',
      gender: 'woman',
    },
    {
      id: 'product3',
      images: [
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-paris_23843597_53806336_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-paris_23843597_53806313_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-paris_23843597_53806336_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-paris_23843597_53806332_1000.jpg?c=3"
      ],
      name: 'Ow Be Right Back Sneakers (Paris)',
      description: 'This is a brief description of the product. It includes key details and features.',
      price: '$109.99',
      gender: 'woman',
    },
    {
      id: 'product4',
      images: [
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-miami_23844040_53806537_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-miami_23844040_53806542_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-miami_23844040_53806569_1000.jpg?c=3",
        "https://cdn-images.farfetch-contents.com/off-white-ow-be-right-back-sneakers-miami_23844040_53806575_1000.jpg?c=3"
      ],
      name: 'Ow Be Right Back Sneakers (Miami)',
      description: 'This is a brief description of the product. It includes key details and features.',
      price: '$109.99',
      gender: 'man',
    },
    {
      id: 'product5',
      images: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d7791bb19143417bb374c9956da198f8_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_41_detail.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/02e8ab21c951494eb2812d5837db5180_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_02_laydown_hover.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ee7a69f3302400faf90d4add919ca46_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_42_detail.jpg"
      ],
      name: 'Camiseta ',
      description: 'This is a brief description of the product. It includes key details and features.',
      price: '$109.99',
      gender: 'man',
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes('ow be right back sneakers')
  );

  return (
    <div> 
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
