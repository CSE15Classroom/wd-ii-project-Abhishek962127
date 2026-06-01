import React, { useEffect, useState } from "react";

export default function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const items =
      JSON.parse(localStorage.getItem("amazonCart")) || [];

    setCartItems(items);

  }, []);

  return (

    <div className="cart-page">

      <div className="cart-navbar">

        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />

        <h2>Shopping Cart</h2>

      </div>

      <div className="cart-container">

        <div className="cart-left">

          <h1>
            Your Shopping Cart
          </h1>

          {cartItems.length === 0 ? (

            <h2>Your cart is empty</h2>

          ) : (

            cartItems.map((item, index) => (

              <div className="cart-item" key={index}>

                <img
                  src={item}
                  alt=""
                />

                <div className="cart-details">

                  <h3>Amazon Product</h3>

                  <p>In stock</p>

                  <h2>₹9,999</h2>

                  <button>
                    Proceed to Buy
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

        <div className="cart-right">

          <h2>
            Subtotal ({cartItems.length} items)
          </h2>

          <h1>
            ₹{cartItems.length * 9999}
          </h1>

          <button>
            Proceed to Checkout
          </button>

        </div>

      </div>

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
        }

        body{
          background:#eaeded;
        }

        .cart-navbar{
          background:#131921;
          color:white;
          padding:15px 30px;
          display:flex;
          align-items:center;
          gap:30px;
        }

        .cart-navbar img{
          width:120px;
        }

        .cart-container{
          display:flex;
          gap:20px;
          padding:30px;
        }

        .cart-left{
          flex:3;
          background:white;
          padding:25px;
        }

        .cart-item{
          display:flex;
          gap:25px;
          border-top:1px solid #ddd;
          padding:25px 0;
        }

        .cart-item img{
          width:180px;
          height:180px;
          object-fit:contain;
        }

        .cart-details{
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        .cart-details p{
          color:green;
          font-weight:bold;
        }

        .cart-details button{
          width:180px;
          padding:10px;
          border:none;
          border-radius:20px;
          background:#ffd814;
          cursor:pointer;
        }

        .cart-right{
          flex:1;
          background:white;
          padding:25px;
          height:fit-content;
        }

        .cart-right h1{
          margin:15px 0;
        }

        .cart-right button{
          width:100%;
          padding:12px;
          border:none;
          border-radius:25px;
          background:#ffd814;
          cursor:pointer;
          font-size:16px;
        }

        @media(max-width:900px){

          .cart-container{
            flex-direction:column;
          }

          .cart-item{
            flex-direction:column;
            align-items:center;
            text-align:center;
          }

        }

      `}</style>

    </div>

  );

}