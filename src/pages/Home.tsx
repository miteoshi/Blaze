import React from "react";
import { Col,Row } from "react-bootstrap";
import Lottie from "react-lottie";
import plate from "../animations/plate.json";
import foodTable from '../animations/food-table.json'
import { HomeCard } from "../components/HomeCard";

export function Home() {

    const plateAnimation = {
      loop: true,
      autoplay: true,
      animationData: plate,
    };

    const foodTableAnimation = {
      loop: true,
      autoplay: true,
      animationData: foodTable,
    };


  return (
    <div style={{ fontFamily: "Merienda" }}>
      <Row style={{ marginBottom: "50vw" }} md={2} xs={1} lg={2}>
        <Col className="d-flex flex-column" style={{ marginTop: "12.5vw" }}>
          <div>
            <p className="fw-bold fs-2 text-light">
              OFFER SOME{" "}
              <span style={{ color: "#f7be5c", fontSize: 65 }}>PEACE</span> TO
              YOUR
            </p>
            <p
              className="fw-bold align-self-center "
              style={{ color: "#dc3545", fontSize: 65 }}
            >
              HUNGER
            </p>
          </div>
        </Col>

        <Col className="d-flex align-items-center justify-content-center">
          <Lottie options={plateAnimation} height={500} width={400} />
        </Col>
      </Row>

      <p
        className="fs-2 d-flex align-self-center justify-content-center"
        style={{ color: "#f7be5c", marginRight: "25px" }}
      >
        Discover the best food & drinks
      </p>

      <Row
        className="d-flex align-items-center justify-content-center g-5"
        md={2}
        xs={1}
        lg={3}
        
        
      >
        <Col>
          <HomeCard
            {...{
              id: 1,
              url: "/imgs/orderOnline.jpg",
              description: "Stay home and order to your doorstep",
              title:"Order Online"
            }}
          />
        </Col>
        <Col>
          <HomeCard
            {...{
              id: 1,
              url: "/imgs/dineOut.jpg",
              description: "View the city's favourite dining venues",
              title:"Dine Out"
            }}
          />
        </Col>
              <Col>
                <Lottie
                  style={{ marginBottom: "5vw" }}
                  options={foodTableAnimation}
                  height={400}
                  width={"100%"}
                />
              </Col>
      </Row>
    </div>
  );
}
