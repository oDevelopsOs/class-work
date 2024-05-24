import React from "react";
import videoHeader from "../../video/header_video.mp4";
import { Container, Row, Image, Button, useTheme, Text, Spacer } from "@nextui-org/react";
import "./header.css";
import bigLogo from "../../img/big-logo.png";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="container-header">
      <video className="video" autoPlay muted loop>
        <source src={videoHeader} type="video/mp4" />
      </video>
      <Container fluid justify="center" className="container-css">
        <Row align="center" className="row-direction">
          <Text h1>Découvrez le jeu</Text>
          <Image height={100} src={bigLogo} objectFit="contain" alt="role agent" className="img-role" />
          <Text h2>
            grâce au tutoriel de{" "}
            <Text span css={{ color: theme.colors.primary.value }}>
              Oppoxa
            </Text>
          </Text>
          <Spacer y={1} />
          <a href="#discover">
            <Button>Découvrir</Button>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
