import { useState } from "react";
import { PropTypes } from "prop-types";

const BarcodeSearchBar = ({ onBarcodeSearch }) => {
  
  BarcodeSearchBar.propTypes = {
    onBarcodeSearch: PropTypes.any,
  };

  const [barcode, setBarcode] = useState("");

  const handleBarcodeSearch = (e) => {
    e.preventDefault();
    if (barcode.trim() !== "") {
      onBarcodeSearch(barcode);
    }
  };

  return (
    <form onSubmit={handleBarcodeSearch} className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by barcode"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
      />
      <button className="btn btn-secondary mt-2" type="submit">
        Search by Barcode
      </button>
    </form>
  );
};

export default BarcodeSearchBar;
