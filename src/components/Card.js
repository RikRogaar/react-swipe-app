import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function CustomCard({ updateLiked }) {
  const [data, setData] = useState([]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1084);
  };

  const fetchData = () => {
    let num = getRandomNumber();
    fetch(`https://picsum.photos/seed/${num}/1080`)
      .then((response) => response.url)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLike = () => {
    let liked = JSON.parse(localStorage.getItem('liked')) || [];
    liked.push(data);
    localStorage.setItem('liked', JSON.stringify(liked));
    updateLiked();
    fetchData();
  }

  if (data.length !== 0) {
    return (
        <Card css={{ w: "30vh", h: "400px"}}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={data}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row justify="center">
                <Button flat auto rounded color="secondary" css={{ mr: "10px"}} onPress={handleLike}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </Text>
                </Button>

                <Button flat auto rounded color="secondary" onPress={fetchData}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </Text>
                </Button>

              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    )
    }
};