import React from "react";
import { Container, Row, useTheme, Text, Spacer, Grid, Card, Image } from "@nextui-org/react";
import "./agents.css";
import blobRight from "../../img/blob-right.png";
import blobLeft from "../../img/blob-left.png";
import controller from "../../img/Controller.png";
import viper from "../../img/viper.png";
import sentinel from "../../img/Sentinel.png";
import killjoy from "../../img/killjoy.png";
import omen from "../../img/omen.png";
import duelist from "../../img/Duelist.png";
import neon from "../../img/neon.png";

const CardAgent = ({ roleImg, role, name, agent }) => {
  const { theme } = useTheme();

  return (
    <Card isHoverable isPressable css={{ backgroundColor: theme.colors.secondaryLight.value }}>
      <Card.Body css={{ height: 350 }} style={{ backgroundImage: `url(${agent})` }} className="agent-css">
        <Row justify="between">
          <Image width={25} height={25} src={roleImg} objectFit="contain" alt="role agent" className="img-role" />
          <Text
            h5
            size={15}
            weight="bold"
            css={{ mt: 0, textTransform: "uppercase", color: theme.colors.primary.value }}
          >
            {role}
          </Text>
        </Row>
        <Text h4 size={20} color="white" css={{ mt: 0 }}>
          {name}
        </Text>
      </Card.Body>
    </Card>
  );
};

const Agents = () => {
  const { theme } = useTheme();
  return (
    <div className="container-agents" id="discover">
      <div className="container-slide">
        <div className="triangle-left" />
        <div className="triangle-right" />
        <Container lg={8}>
          <Text h2 size="5em" weight="bold">
            LES AGENTS
          </Text>
          <Text size="1rem" weight="semibold">
            Voici un bref aperçu des agents disponible sur{" "}
            <Text span css={{ color: theme.colors.primary.value }}>
              VALORANT
            </Text>
          </Text>
          <img src={blobLeft} className="blob-left-css" alt="blob-left" />
          <img src={blobRight} className="blob-right-css" alt="blob-right" />
          <Spacer y={3} />
          <Grid.Container gap={2} justify="center">
            <Grid xs={6} sm={3}>
              <CardAgent roleImg={controller} role="Contrôleur" name="Viper" agent={viper} />
            </Grid>
            <Grid xs={6} sm={3}>
              <CardAgent roleImg={sentinel} role="Sentinelle" name="Killjoy" agent={killjoy} />
            </Grid>
            <Grid xs={6} sm={3}>
              <CardAgent roleImg={controller} role="Contrôleur" name="Omen" agent={omen} />
            </Grid>
            <Grid xs={6} sm={3}>
              <CardAgent roleImg={duelist} role="Duelliste" name="Neon" agent={neon} />
            </Grid>
          </Grid.Container>
          <Spacer y={5} />
        </Container>
      </div>
    </div>
  );
};

export default Agents;
