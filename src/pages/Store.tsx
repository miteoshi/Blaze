import React from 'react'
import storeItems from '../data/items.json'
import  {Col, Row} from 'react-bootstrap';

import {StoreItem} from '../components/StoreItem';


export function Store() {
  console.log(storeItems)
  return (
    
    <>
      <h1
        style={{ fontFamily: "Merienda", color: "#f7be5c" }}
        className="mb-5 mt-5 fs-3 fst-italic"
      >
        What's on your mind?
      </h1>
      <Row md={2} xs={1} lg={3} className="g-5">
        {storeItems.map((item) => (
          
          <Col key={item.id} className="text-white">
            
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
