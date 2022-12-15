import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function LikedCard({ img, id, updateLiked }) {
  const handleDelete = () => {
    updateLiked();
    let liked = JSON.parse(localStorage.getItem('liked')) || [];
    liked = liked.filter((item, index) => index !== id);
    localStorage.setItem('liked', JSON.stringify(liked));
  }

  return (
        <Card css={{ w: "30vh", h: "400px"}}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={img}
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
                <Button flat auto rounded color="secondary" css={{ mr: "10px"}} onPress={handleDelete}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    <FontAwesomeIcon icon={faTrash}/>
                  </Text>
                </Button>

              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    )
}