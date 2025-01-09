import React, { useState } from 'react';

function Text() {
  // State to manage the visibility of the men's clothing category
  const [showMensClothing, setShowMensClothing] = useState(false);

  // Toggle visibility when the button is clicked
  const handleButtonClick = () => {
    setShowMensClothing(!showMensClothing);
  };

  return (
    <div className="App">
      <h1>Welcome to Our Clothing Store</h1>
      
      {/* Button to toggle Men's Clothing category */}
      <button onClick={handleButtonClick}>
    Show Mens Clothing
      </button>

      {/* Display Men's Clothing category if showMensClothing is true */}
      {showMensClothing && (
        <div className="mens-clothing-category">
          <h2>Men's Clothing</h2>
          <ul>
            <li>Shirts</li>
            <li>T-shirts</li>
            <li>Pants</li>
            <li>Jackets</li>
            <li>Shorts</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Text;
