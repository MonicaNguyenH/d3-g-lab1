function App() {

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">1</span>
              </button>
            </div>
          </div>

          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All Products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
        </header>
        <main>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Asics_Gel-Cumulus_22.jpg/640px-Asics_Gel-Cumulus_22.jpg" alt="shoes" />
            <p className="pr-name">Awesome shoe</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg/640px-Shirt%2C_men%27s_%28AM_2015.44.1-1%29.jpg" alt="shirt" />
            <p className="pr-name">Stylist shirt</p>
            <p className="pr-price">$25</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Windbreaker_Jacket%2C_Hood_Outside.jpg/640px-Windbreaker_Jacket%2C_Hood_Outside.jpg" alt="jacket" />
            <p className="pr-name">Windbreaker</p>
            <p className="pr-price">$45</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeans.jpg/640px-Jeans.jpg" alt="jeans" />
            <p className="pr-name">New jeans</p>
            <p className="pr-price">$30</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/IPhone_13_Pro_with_Airpods_Max.jpg/640px-IPhone_13_Pro_with_Airpods_Max.jpg" alt="iphone" />
            <p className="pr-name">Iphone 13</p>
            <p className="pr-price">$999</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ElectricBlender.jpg/640px-ElectricBlender.jpg" alt="blender" />
            <p className="pr-name">Awesome blender</p>
            <p className="pr-price">$35</p>
          </div>

        </main>
      </section>
      <footer>
        <h3>Who we are</h3>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Sell with Us</a></li>
        </ul>

        <h3>Our Policies</h3>
        <ul>
          <li><a href="">Return policies</a></li>
          <li><a href="">Shipping policies</a></li>
          <li><a href="">Terms of service</a></li>
        </ul>

        <h3>Our products</h3>
        <ul>
          <li><a href="">Home Page</a></li>
          <li><a href="">Search</a></li>
          <li><a href="">Catalog</a></li>
        </ul>

      </footer>
    </div>
  )
}

export default App
