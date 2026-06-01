import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  MapPin,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const navigate = useNavigate();
  // ================= STATES =================

  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // ================= HERO IMAGES =================

  const heroImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_may25_refresh._CB761742379_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/May26/RSVD/Bergner___IV_3000x1200-1._CB763079678_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/Toyfiesta/toys/Desktop_tall_Hero_3000x1200_pools._CB785376404_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/May26/Desktop_tall_Hero_3000x1200_Books-for-SSC-UPSC--more_rec._CB762894798_.jpg",
  ];

  // ================= PRODUCTS =================

  const products = [
    {
      title: "Appliances for your home | Up to 55% off",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg ",
      ],
    },

    {
      title: "Revamp your home in style",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
      ],
    },

    {
      title: "Starting ₹49 | Deals on home essentials",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_2._SY232_CB567468220_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_3._SY232_CB567468220_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_4._SY232_CB567468220_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_372_1._SY232_CB567468220_.jpg      ",
      ],
    },

    {
      title: "Up to 25% off | Deals on phones",
      images: [
        "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SY200_.jpg",
      ],
    },

    {
      title: "Automotive essentials | Up to 60% off ",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
      ],
    },

    {
      title: "Up to 50% off | Baby care & toys | Amazon Brands",
      images: [
        "https://m.media-amazon.com/images/I/711Rh9MsKvL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/61vERbb2LXL._AC_SY195_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_3_1x._SY116_CB788857785_.jpg",
        "https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_SY195_.jpg",
      ],
    },

    {
      title: "Customers’ Most-Loved Fashion for you",
      images: [
        "https://m.media-amazon.com/images/I/619xMvtqClL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71nW6Xh7QnL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71OAvZWN00L._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81L0Y0-UPGL._AC_SY200_.jpg",
      ],
    },

    {
      title: "Up to 60% off | Best offers on Fashion products",
      images: [
        "https://m.media-amazon.com/images/I/81OxirWitAL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/612FuICrCCL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/81OxirWitAL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/61yp3ndG1JL._AC_SY145_.jpg",
      ],
    },

    {
      title: "Up to 75% off | Curated products | Small Businesses",
      images: [
        "https://m.media-amazon.com/images/I/71MXSFRW87L._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/71HzHSEjFlL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/71leLgzKqDL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/51X0Rj62IvL._AC_SY195_.jpg",
      ],
    },

    {
      title: "Up to 40% off | Upgrade your living spaces",
      images: [
        "https://m.media-amazon.com/images/I/61K0DJSjYVL._AC_SY170_.jpg",
        "https://m.media-amazon.com/images/I/61SYmsogEqL._AC_SY170_.jpg",
        "https://m.media-amazon.com/images/I/51hMxB+icyL._AC_SY170_.jpg",
        "https://m.media-amazon.com/images/I/51bakPA1GLL._AC_SY170_.jpg",
      ],
    },

    {
      title: "Best Sellers in Home & Kitchen",
      images: [
        "https://m.media-amazon.com/images/I/71QED8-OFhL._AC_SY170_.jpg",
        "https://m.media-amazon.com/images/I/61yrR5U17fL._AC_SY170_.jpg",
        "https://m.media-amazon.com/images/I/51gjmiryzGL._AC_SY170_.jpg",
        "https://m.media-amazon.com/images/I/81ABSzqtXUL._AC_SY170_.jpg",
      ],
    },

    {
      title: "Customers’ Most-Loved products",
      images: [
        "https://m.media-amazon.com/images/I/71N56Ypp5XL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/71JtekzufnL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/71hODmbcWIL._AC_SY145_.jpg",
        "https://m.media-amazon.com/images/I/7167VjmgqfL._AC_SY145_.jpg",
      ],
    },
  ];

  // ================= FILTER =================

  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // ================= AUTO SLIDER =================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // ================= CART =================

  const addToCart = (img) => {
    setCartCount((prev) => prev + 1);

    const existing = JSON.parse(localStorage.getItem("amazonCart")) || [];

    existing.push(img);

    localStorage.setItem("amazonCart", JSON.stringify(existing));

    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  // ================= SLIDER =================

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* ================= TOAST ================= */}

      {toast && <div className="toast">Product Added To Cart 🛒</div>}

      {/* ================= NAVBAR ================= */}

      <div className="navbar">
        <div className="nav-logo border">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon"
          />
        </div>

        <div className="nav-location border">
          <MapPin size={20} />

          <div>
            <p className="small">Delivering to Ghaziabad</p>
            <h4>Update location</h4>
          </div>
        </div>

        {/* ================= SEARCH ================= */}

        <div className="nav-search">
          <select>
            <option>All</option>
            <option value="alexa skill">Alexa Skill</option>
            <option value="amazon device">Amazon Device</option>
            <option value="amazon fersh ">Amazon Fresh</option>
            <option value="appliance">Appliance</option>
            <option value="categories under ">Under &#8377;500</option>
            <option value="baby">Baby</option>
            <option value="deal">Deals</option>
            <option value="electrionic">Electroinics</option>
            <option value="apps & games">Apps & Games</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button>
            <Search size={20} />
          </button>
        </div>

        <div className="nav-language border">
          🇮🇳 EN <ChevronDown size={14} />
        </div>

        <div className="nav-account border">
          <p className="small">Hello, sign in</p>

          <h4>
            Account & Lists <ChevronDown size={14} />
          </h4>
        </div>

        <div className="nav-orders border">
          <p className="small">Returns</p>
          <h4>& Orders</h4>
        </div>

        {/* ================= CART ================= */}

        <div className="nav-cart border" onClick={() => navigate("/cart")}>
          <ShoppingCart size={32} />
          <span>{cartCount}</span>
          Cart
        </div>
      </div>

      {/* ================= PANEL ================= */}

      <div className="panel">
        <div className="panel-all">
          <Menu size={18} />
          All
        </div>

        <div className="panel-links">
          <a href="/">Fresh</a>
          <a href="/">MX Player</a>
          <a href="/">Sell</a>
          <a href="/">Bestsellers</a>
          <a href="/">Today's Deals</a>
          <a href="/">Mobiles</a>
          <a href="/">Prime</a>
          <a href="/">Electronics</a>
          <a href="/">Fashion</a>
          <a href="/">Customer Service</a>
          <a href="/">New Releases</a>
        </div>
      </div>
      {/* ================= CART SECTION ================= */}

      {showCart && (
        <div className="cart-page" id="cart-section">
          <div className="cart-header">
            <h1>Shopping Cart</h1>

            <button onClick={() => setShowCart(false)}>Close</button>
          </div>

          {cartItems.length === 0 ? (
            <h2>Your Amazon Cart is Empty</h2>
          ) : (
            <div className="cart-grid">
              {cartItems.map((item, index) => (
                <div className="cart-card" key={index}>
                  <img src={item} alt="" />

                  <button>Proceed to Buy</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {/* ================= HERO ================= */}

      <div className="hero-section">
        <button className="slider-btn left" onClick={prevSlide}>
          <ChevronLeft size={40} />
        </button>

        <button className="slider-btn right" onClick={nextSlide}>
          <ChevronRight size={40} />
        </button>

        <div
          className="hero-slider"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {heroImages.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>

        {/* ================= DOTS ================= */}

        <div className="dots">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={currentSlide === index ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}

      <section className="product-section">
        <div className="grid-4">
          {filteredProducts.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-top">
                <h2>{item.title}</h2>

                <span>See all offers</span>
              </div>

              <div className="product-grid">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => addToCart(img)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="horizontal-category">
        <div className="category-header">
          <h2>Min. 30% off | Curated collections from Small Businesses</h2>

          <span>See more</span>
        </div>

        <div className="horizontal-scroll">
          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/713G7c7zwgL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61-2uRnTjlL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/51lbMRalfML._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61RM1brmEPL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61uIQ4g8+tL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/71DNnS-RdEL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61las8pSVIL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/81UG-jXAxTL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>
        </div>
      </div>

      {/* ================= NEW CATEGORY 2 ================= */}

      <div className="horizontal-category">
        <div className="category-header">
          <h2>
            Min. 30% off | Upgrade your home with products from Small Businesses
          </h2>

          <span>See all</span>
        </div>

        <div className="horizontal-scroll">
          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61FlPyjLoML._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61VzVSbRTDL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/51-3bLu3qbL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/81x0PUHjMnL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61pG+exF5xL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>

          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/815zP9dVBmL._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>
          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61APisiwCJL._AC_SY400_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>
          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/61lEp43Pe9L._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>
          <div className="scroll-card">
            <img
              src="https://m.media-amazon.com/images/I/71+G0e-ww8L._AC_SY200_.jpg"
              alt=""
              onClick={() => addToCart(img)}
            />
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}

      <div
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Back to top
      </div>

      {/* ================= AMAZON FOOTER ================= */}

      <footer className="amazon-footer">
        {/* ================= TOP FOOTER ================= */}

        <div className="footer-top">
          <div className="footer-column">
            <h3>Get to Know Us</h3>

            <a href="/">About Amazon</a>
            <a href="/">Careers</a>
            <a href="/">Press Releases</a>
            <a href="/">Amazon Science</a>
          </div>

          <div className="footer-column">
            <h3>Connect with Us</h3>

            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </div>

          <div className="footer-column">
            <h3>Make Money with Us</h3>

            <a href="/">Sell on Amazon</a>
            <a href="/">Sell under Amazon Accelerator</a>
            <a href="/">Protect and Build Your Brand</a>
            <a href="/">Amazon Global Selling</a>
            <a href="/">Supply to Amazon</a>
            <a href="/">Become an Affiliate</a>
            <a href="/">Fulfilment by Amazon</a>
            <a href="/">Advertise Your Products</a>
            <a href="/">Amazon Pay on Merchants</a>
          </div>

          <div className="footer-column">
            <h3>Let Us Help You</h3>

            <a href="/">Your Account</a>
            <a href="/">Returns Centre</a>
            <a href="/">Recalls and Product Safety Alerts</a>
            <a href="/">100% Purchase Protection</a>
            <a href="/">Amazon App Download</a>
            <a href="/">Help</a>
          </div>
        </div>

        {/* ================= MIDDLE FOOTER ================= */}

        <div className="footer-middle">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
          />

          <button>English</button>

          <button>India</button>
        </div>

        {/* ================= BOTTOM FOOTER ================= */}

        <div className="footer-bottom-grid">
          <div>
            <h4>AbeBooks</h4>
            <p>Books, art</p>
            <p>& collectibles</p>
          </div>

          <div>
            <h4>Amazon Web Services</h4>
            <p>Scalable Cloud</p>
            <p>Computing Services</p>
          </div>

          <div>
            <h4>Audible</h4>
            <p>Download</p>
            <p>Audio Books</p>
          </div>

          <div>
            <h4>IMDb</h4>
            <p>Movies, TV</p>
            <p>& Celebrities</p>
          </div>

          <div>
            <h4>Shopbop</h4>
            <p>Designer</p>
            <p>Fashion Brands</p>
          </div>

          <div>
            <h4>Amazon Business</h4>
            <p>Everything For</p>
            <p>Your Business</p>
          </div>

          <div>
            <h4>Amazon Prime Music</h4>
            <p>100 million songs, ad-free</p>
            <p>Over 15 million podcast episodes</p>
          </div>
        </div>

        {/* ================= LAST FOOTER ================= */}

        <div className="footer-last">
          <div className="footer-links-last">
            <a href="/">Conditions of Use & Sale</a>

            <a href="/">Privacy Notice</a>

            <a href="/">Interest-Based Ads</a>
          </div>

          <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>

      {/* ================= CSS ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#e3e6e6;
        }

        .toast{
          position:fixed;
          top:90px;
          right:20px;
          background:#131921;
          color:white;
          padding:14px 20px;
          border-radius:8px;
          z-index:9999;
          animation:slideIn 0.5s ease;
        }

        @keyframes slideIn{
          from{
            transform:translateX(100%);
            opacity:0;
          }
          to{
            transform:translateX(0);
            opacity:1;
          }
        }

        .navbar{
          width:100%;
          background:#131921;
          color:white;
          display:flex;
          align-items:center;
          justify-content:space-evenly;
          padding:10px;
          gap:10px;
          flex-wrap:wrap;
          position:sticky;
          top:0;
          z-index:1000;
        }

        .border{
          border:1px solid transparent;
          padding:8px;
          cursor:pointer;
          transition:0.3s;
        }

        .border:hover{
          border:1px solid white;
        }

        .nav-logo{
  display:flex;
  align-items:center;
  justify-content:center;
  padding:8px 10px;
}

.nav-logo img{
  width:120px;
  height:40px;
  object-fit:contain;
  filter:brightness(1.2);
}

        .nav-location{
          display:flex;
          align-items:center;
          gap:8px;
        }

        .small{
          font-size:12px;
          color:#ccc;
        }

        .nav-search{
          display:flex;
          flex:1;
          max-width:700px;
          height:45px;
          background:white;
          overflow:hidden;
          border-radius:5px;
        }

        .nav-search select{
          width:60px;
          border:none;
          background:#f3f3f3;
        }

        .nav-search input{
          flex:1;
          border:none;
          padding:10px;
          font-size:16px;
        }

        .nav-search input:focus{
          outline:none;
        }

        .nav-search button{
          width:60px;
          border:none;
          background:#febd69;
          cursor:pointer;
        }

        .nav-language{
          display:flex;
          align-items:center;
          gap:5px;
        }

        .nav-cart{
          display:flex;
          align-items:center;
          gap:5px;
          font-size:18px;
          font-weight:bold;
        }

        .nav-cart span{
          color:#ff9900;
          font-size:22px;
        }

        .panel{
          background:#232f3e;
          color:white;
          display:flex;
          align-items:center;
          gap:20px;
          padding:10px 15px;
          overflow-x:auto;
        }

        .panel-links{
          display:flex;
          gap:20px;
          white-space:nowrap;
        }

        .panel-links a{
          color:white;
          text-decoration:none;
          font-size:14px;
        }

        .panel-links a:hover{
          color:#febd69;
        }

        .hero-section{
          width:100%;
          overflow:hidden;
          position:relative;
        }

        .hero-slider{
          display:flex;
          transition:0.7s ease;
        }

        .hero-slider img{
  width:100%;
  flex-shrink:0;
  height:auto;
  max-height:500px;
  object-fit:contain;
  background:white;
}

        .slider-btn{
          position:absolute;
          top:40%;
          z-index:50;
          background:rgba(255,255,255,0.7);
          border:none;
          padding:10px;
          cursor:pointer;
        }

        .left{
          left:10px;
        }

        .right{
          right:10px;
        }

        .dots{
          position:absolute;
          bottom:20px;
          width:100%;
          display:flex;
          justify-content:center;
          gap:10px;
        }

        .dot{
          width:12px;
          height:12px;
          background:white;
          border-radius:50%;
          opacity:0.5;
          cursor:pointer;
        }

        .dot.active{
          opacity:1;
          background:#febd69;
        }

        .product-section{
          padding:20px;
          margin-top:-180px;
          position:relative;
          z-index:100;
        }

        .grid-4{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .card{
          background:white;
          padding:15px;
          transition:0.3s;
        }

        .card:hover{
          transform:translateY(-6px);
          box-shadow:0 0 15px rgba(0,0,0,0.2);
        }

        .card-top{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:15px;
          gap:10px;
        }

        .card-top h2{
          font-size:19px;
        }

        .card-top span{
          color:#007185;
          font-size:13px;
          cursor:pointer;
          white-space:nowrap;
        }

        .product-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:10px;
        }

        .product-grid img{
          width:100%;
          height:150px;
          object-fit:contain;
          cursor:pointer;
          transition:0.3s;
        }

        .product-grid img:hover{
          transform:scale(1.05);
        }

        .back-top{
          background:#37475a;
          color:white;
          text-align:center;
          padding:15px;
          cursor:pointer;
        }

        .footer{
          background:#232f3e;
          color:white;
          padding:40px 30px;
        }

        .footer-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:30px;
        }

        .footer-grid a{
          display:block;
          color:#ddd;
          text-decoration:none;
          margin-top:10px;
        }

        @media(max-width:1100px){

          .grid-4{
            grid-template-columns:repeat(2,1fr);
          }

          .nav-search{
            order:3;
            width:100%;
          }

        }

        @media(max-width:768px){

          .grid-4{
            grid-template-columns:1fr;
          }

          .hero-slider img{
            height:240px;
          }

          .product-section{
            margin-top:-40px;
          }

          .footer-grid{
            grid-template-columns:1fr;
          }

          .nav-location,
          .nav-language{
            display:none;
          }

        }
          /* ================= HORIZONTAL CATEGORY ================= */

.horizontal-category{
  background:white;
  margin:20px;
  padding:20px;
  border-radius:6px;
}

.category-header{
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:18px;
  flex-wrap:wrap;
}

.category-header h2{
  font-size:22px;
}

.category-header span{
  color:#007185;
  cursor:pointer;
  font-size:14px;
}

.category-header span:hover{
  color:#c7511f;
  text-decoration:underline;
}

.horizontal-scroll{
  display:flex;
  gap:20px;
  overflow-x:auto;
  scroll-behavior:smooth;
  padding-bottom:10px;
}

.horizontal-scroll::-webkit-scrollbar{
  height:8px;
}

.horizontal-scroll::-webkit-scrollbar-thumb{
  background:#ccc;
  border-radius:10px;
}

.scroll-card{
  min-width:220px;
  height:220px;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:0.3s;
  cursor:pointer;
  border-radius:8px;
  overflow:hidden;
}

.scroll-card img{
  width:100%;
  height:100%;
  object-fit:contain;
  transition:0.3s;
}

.scroll-card:hover{
  transform:translateY(-5px);
}

.scroll-card:hover img{
  transform:scale(1.08);
}
 .back-top{
    background:#37475a;
    color:white;
    text-align:center;
    padding:15px;
    cursor:pointer;
    font-size:14px;
    transition:0.3s;
  }

  .back-top:hover{
    background:#485769;
  }

  .amazon-footer{
    width:100%;
    background:#232f3e;
    color:white;
  }

  /* ================= TOP ================= */

  .footer-top{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:40px;
    padding:50px 80px;
    border-bottom:1px solid #3a4553;
  }

  .footer-column h3{
    margin-bottom:18px;
    font-size:18px;
  }

  .footer-column a{
    display:block;
    color:#dddddd;
    text-decoration:none;
    margin-bottom:12px;
    font-size:14px;
  }

  .footer-column a:hover{
    text-decoration:underline;
  }

  /* ================= MIDDLE ================= */

  .footer-middle{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
    padding:30px;
    border-bottom:1px solid #3a4553;
  }

  .footer-middle img{
    width:110px;
    filter:brightness(100);
  }

  .footer-middle button{
    background:transparent;
    color:#ccc;
    border:1px solid #848688;
    padding:10px 18px;
    border-radius:4px;
    cursor:pointer;
  }

  /* ================= BOTTOM GRID ================= */

  .footer-bottom-grid{
    background:#131a22;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:30px;
    padding:40px 80px;
  }

  .footer-bottom-grid div{
    cursor:pointer;
  }

  .footer-bottom-grid h4{
    font-size:14px;
    color:white;
    margin-bottom:4px;
  }

  .footer-bottom-grid p{
    color:#999;
    font-size:13px;
    line-height:1.4;
  }

  .footer-bottom-grid div:hover h4,
  .footer-bottom-grid div:hover p{
    text-decoration:underline;
  }

  /* ================= LAST ================= */

  .footer-last{
    background:#131a22;
    text-align:center;
    padding:20px;
  }

  .footer-links-last{
    display:flex;
    justify-content:center;
    gap:25px;
    margin-bottom:10px;
    flex-wrap:wrap;
  }

  .footer-links-last a{
    color:white;
    text-decoration:none;
    font-size:13px;
  }

  .footer-links-last a:hover{
    text-decoration:underline;
  }

  .footer-last p{
    color:#ddd;
    font-size:13px;
  }

  /* ================= RESPONSIVE ================= */

  @media(max-width:1100px){

    .footer-top{
      grid-template-columns:repeat(2,1fr);
      padding:40px;
    }

    .footer-bottom-grid{
      grid-template-columns:repeat(2,1fr);
      padding:40px;
    }

  }

  @media(max-width:768px){

    .footer-top{
      grid-template-columns:1fr;
      padding:30px;
    }

    .footer-bottom-grid{
      grid-template-columns:1fr;
      padding:30px;
    }

    .footer-middle{
      flex-direction:column;
    }

  }
    /* ================= CART PAGE ================= */

.cart-page{
  background:white;
  min-height:100vh;
  padding:30px;
}

.cart-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}

.cart-header button{
  background:#febd69;
  border:none;
  padding:10px 20px;
  border-radius:6px;
  cursor:pointer;
  font-weight:bold;
}

.cart-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
}

.cart-card{
  background:#f7f7f7;
  padding:20px;
  border-radius:10px;
  text-align:center;
}

.cart-card img{
  width:100%;
  height:220px;
  object-fit:contain;
}

.cart-card button{
  margin-top:15px;
  width:100%;
  padding:10px;
  border:none;
  background:#ffd814;
  border-radius:20px;
  cursor:pointer;
  font-weight:bold;
}

@media(max-width:900px){

  .cart-grid{
    grid-template-columns:repeat(2,1fr);
  }

}

@media(max-width:600px){

  .cart-grid{
    grid-template-columns:1fr;
  }

}
      `}</style>
    </div>
  );
}
