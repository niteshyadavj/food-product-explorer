import { PropTypes } from "prop-types";

const ProductList = ({ products }) => {
    ProductList.propTypes = {
        products: PropTypes.any,
       
      };
    
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card">
            <img
              src={product.image_url || 'https://via.placeholder.com/150'}
              className="card-img-top"
              alt={product.product_name}
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.product_name}</h5>
              <p className="card-text fs-5">Category: {product.categories_tags?.[0]}</p>
              <p className="card-text fs-5">Nutrition Grade: {product.nutrition_grades || 'N/A'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
