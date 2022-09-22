import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MarketplaceDetail = () => {
  const { marketplaceId } = useParams();
  const [marketplace, setmarketplace] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/marketplace/${marketplaceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setmarketplace(data));
  }, []);

  return (
    <>
      <h1 className="text-center mt-3">Your Booking details</h1>
      <div className="col d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={marketplace.img} />
          <Card.Body>
            <Card.Title>{marketplace.name}</Card.Title>
            <Card.Text>{marketplace.price}</Card.Text>
            <Link to="/checkout">
              <Button variant="outline-primary">Checkout</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MarketplaceDetail;
