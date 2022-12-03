import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";



import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const cartFuntions = useCartContext();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center p-2 rounded"
    >
      <img
        className="rounded"
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="d-flex align-items-center">
          <p style={{ margin: 0, padding: 0 }} className="text-white">
            {item.name}
          </p>
          {quantity > 1 ? (
            <span className="text-light" style={{ fontSize: "0.65rem" }}>
              &nbsp; x{quantity}
            </span>
          ) : null}
        </div>
        <div className="text-light" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>
        <p style={{ margin: 0, padding: 0 }} className="text-white">
          {formatCurrency(item.price * quantity)}
        </p>
      </div>
      <Button
        variant="dark"
        size="sm"
        onClick={() => cartFuntions.removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
