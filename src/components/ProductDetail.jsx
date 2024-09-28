import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`);
      const data = await response.json();
      setProduct(data.product);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    product ? (
      <div className="container">
        <h1>{product.product_name}</h1>
        <img className='img-fluid' style={{ width: '200px', height: '400px', objectFit: 'contain' }}  src={product.image_url} alt={product.product_name} />
        <p className='fs-4'>Ingredients: {product.ingredients_text}</p>
        <p className='fs-3'>Nutrition Grade: {product.nutrition_grades}</p>
        <p className='fs-3'>Energy: {product.nutriments.energy_100g} kJ</p>
      </div>
    ) : (
      <p>No product found.</p>
    )
  );
};

export default ProductDetail;
