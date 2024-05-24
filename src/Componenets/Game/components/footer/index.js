import React from "react";
import { Container, Row, Tooltip, Button, useTheme, Image } from "@nextui-org/react";
import "./footer.css";
import logo from "../../img/logo.svg";

const Footer = () => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <footer>
      <Container
        css={{ backgroundColor: theme.colors.background.value, display: "flex" }}
        className="container-footer"
        fluid
      >
        <Row justify="space-between" align="center">
          <Image height={50} src={logo} objectFit="contain" alt="logo" className="logo-css" />
          <Tooltip content={"C'est un jeu de bot"} rounded color="primary">
            <Button auto flat color="error">
              En savoir plus
            </Button>
          </Tooltip>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
