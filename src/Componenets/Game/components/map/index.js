import React, { useState } from "react";
import { Container, Row, Button, Col, Text, Image, Modal, Spacer } from "@nextui-org/react";

import "./map.css";

import sage from "../../img/sage.png";
import power from "../../img/sage-power.png";

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="background-map">
      <Container lg={8}>
        <Row>
          <Col className="col-left">
            <Image
              css={{ objectPosition: "top" }}
              objectFit="cover"
              height={600}
              width="100%"
              alt="img-sage"
              src={sage}
            />
            <Image className="power" objectFit="contain" height={200} width="100%" alt="img-power" src={power} />
          </Col>
          <Col className="col-right">
            <Text h2 size="5rem" weight="bold">
              LES CARTES
            </Text>
            <Text size="1rem" weight="semibold">
              Découvrez dans cette section <br />
              les incroyables cartes de <br />
            </Text>
            <Text size="1rem" weight="bold" color="primary">
              VALORANT
            </Text>
            <Spacer y={1} />
            <Button onClick={toggleModal}>Découvrir</Button>
          </Col>
        </Row>
      </Container>
      <Modal closeButton width="600px" blur aria-labelledby="modal-title" open={isModalOpen} onClose={toggleModal}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Bienvenue à{" "}
            <Text b size={18}>
              Icebox
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="auto"
            height="400px"
            src="https://www.youtube.com/embed/EB4vFzY3MWc?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Map;
