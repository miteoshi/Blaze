import React from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import Lottie from "react-lottie";
import cooking from "../animations/cooking.json";
import "./MyCart.css";
type MyCart = {
  isOpen: Boolean;
};

export function MyCart({ isOpen }: MyCart) {
  const cartFuntions = useCartContext();

  const totalHelper = (): String => {
    const totalPrice = formatCurrency(
      cartFuntions.cartItems.reduce((total, curr) => {
        const item = storeItems.find((x) => x.id === curr.id);
        return total + (item?.price || 0) * curr.quantity;
      }, 0)
    );
    return totalPrice;
  };

  const emptyCartAnimation = {
    loop: true,
    autoplay: true,
    animationData: cooking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Offcanvas show={isOpen} onHide={cartFuntions.closeCart} placement="end">
      {/* <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header> */}

      <Offcanvas.Body style={{ marginTop: "2rem" }}>
        {cartFuntions.cartItems.length != 0 ? (
          <Stack>
            <Stack
              gap={3}
              style={{ backgroundColor: "rgba(198, 198, 198, 0.3)" }}
              className="d-flex align-items-center p-2 rounded"
            >
              {cartFuntions.cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
            <div
              className="d-flex justify-content-between p-2 rounded"
              style={{
                marginInline: 4,
                marginTop: "1rem",
                backgroundColor: "rgba(198, 198, 198, 0.3 )",
              }}
            >
              <div className="fw-bold fs-6 ">To Pay</div>
              <div className="fw-bold fs-6 ">{totalHelper()}</div>
            </div>
          </Stack>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Lottie options={emptyCartAnimation} height={300} width={300} />
            <p className="fw-bold fs-4">
              Good <span style={{ color: "#f7be5c" }}>Food</span> Is Always
              <span style={{ color: "#f7be5c" }}> Cooking</span>
            </p>
            <p className="text-mute fw-light">
              Your cart is empty. Add something from the menu
            </p>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
