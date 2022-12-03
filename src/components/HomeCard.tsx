import React from "react";
import { Button, Card } from "react-bootstrap";

type HomeCardProps = {
  id: number;
  url: string;
  description: string;
  title: string;
};

export function HomeCard({ id, url, description, title }: HomeCardProps) {
  return (
    <Card style={{ backgroundColor: "rgba(0, 0, 0,0.2)", width: 400 }}>
      <Card.Img
        variant="top"
        src={url}
        height="150px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <span style={{ fontSize: "22px", color: "rgba(255,255,255,0.9)" }}>
            {title}
          </span>
        </Card.Title>
        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
          {description}
        </span>
      </Card.Body>
    </Card>
  );
}
