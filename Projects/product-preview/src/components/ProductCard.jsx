import desktopPic from '/images/image-product-desktop.jpg';
import mobilePic from '/images/image-product-mobile.jpg';
import cartLogo from '/images/icon-cart.svg';

function ProductCard() {
  return (
    <div className="product-card">
      {/* Show Picture */}
      <figure className='product-card-picture'>
        <img src={desktopPic} alt="Perfume Picture" />
      </figure>

      {/* Product Details */}
      <div className='product-card-details'>
        {/* Product Data */}
        <div className='product-card-data'> 
          <p className='product-card-name'>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed
            by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        {/* Product Value */}
        <div className='product-card-value'>
          <p className='product-card-discount'>$149.99</p>
          <p className='product-card-normal'>$169.99</p>
        </div>
        {/* Product add to cart */}
        <button className='btn btn-add'>
          <img src={cartLogo} alt='cart logo'/>
          <span>Add to Cart</span>
        </button>
      </div>

    </div>
  )
}

export default ProductCard