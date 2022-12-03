import React,{useState} from "react";
import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";

//css
import "./StoreItem.css";


type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const cartFuntions = useCartContext()
  const quantity = cartFuntions.getItemQuantity(id)

  return (
    <Card style={{ backgroundColor: "rgba(255, 255, 255,0.9)"}}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="150px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="text-dark">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto d-flex justify-content-center align-items-centre">
          {quantity === 0 ? (
            <Button
              variant="outline-dark"
              onClick={() => cartFuntions.increaseCart(id)}
            >
              Add
            </Button>
          ) : (
            <div
              className="mt-auto d-inline-flex flex-direction-row justify-content-center align-items-centre border border-dark rounded"
              style={{ gap: "0.5rem", height:38 }}
            >
              <Button
                variant="outline-light"
                onClick={() => cartFuntions.increaseCart(id)}
              >
                +
              </Button>
              <div style={{width:10 }} className="d-flex align-items-center text-align-center justify-content-center">
                <span className="font-weight-bold text-dark">{quantity}</span>
              </div>
              <Button
                variant="outline-light"
                onClick={() => cartFuntions.decreaseCart(id)}
              >
                -
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
