import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import BarcodeSearchBar from "./BarcodeSearchBar";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [barcode, setBarcode] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (barcode) {
      fetchProductByBarcode();
    } else {
      fetchProducts();
    }
  }, [searchTerm, category, sortOption, barcode]);

  const fetchProducts = async () => {
    setLoading(true);
    let url = `https://world.openfoodfacts.org/search.json?page_size=20`;

    if (searchTerm) {
      url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=true`;
    }

    if (category) {
      url = `https://world.openfoodfacts.org/category/${category}.json`;
    }

    const response = await fetch(url);
    const data = await response.json();
    let productsData = data.products;

    // Sorting logic
    if (sortOption === "name-asc") {
      productsData.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (sortOption === "name-desc") {
      productsData.sort((a, b) => b.product_name.localeCompare(a.product_name));
    } else if (sortOption === "nutri-score-asc") {
      productsData.sort((a, b) =>
        a.nutrition_grades?.localeCompare(b.nutrition_grades)
      );
    } else if (sortOption === "nutri-score-desc") {
      productsData.sort((a, b) =>
        b.nutrition_grades?.localeCompare(a.nutrition_grades)
      );
    }

    setProducts(productsData);
    setLoading(false);
  };

  const fetchProductByBarcode = async () => {
    setLoading(true);
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.product) {
        setProducts([data.product]);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching product by barcode:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Food Product Explorer</h1>

      <SearchBar onSearch={setSearchTerm} />

      <BarcodeSearchBar onBarcodeSearch={setBarcode} />

      <FilterBar setCategory={setCategory} setSortOption={setSortOption} />

      {loading ? <p>Loading...</p> : <ProductList products={products} />}
    </div>
  );
};

export default HomePage;
