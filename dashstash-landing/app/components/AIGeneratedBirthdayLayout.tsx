import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import { Cake, Gift, Palette, UtensilsCrossed } from "lucide-react";

interface Article {
  title: string;
  source: string;
  description: string;
  url: string;
  tags: string[];
}

const birthdayArticles: Article[] = [
  {
    title: "10 Easy DIY Decorations for a 5-Year-Old's Birthday Party",
    source: "Crafty Parent",
    description:
      "Create a magical atmosphere with these simple, colorful decorations that your child will love.",
    url: "#",
    tags: ["DIY", "Decorations", "Kids Party"],
  },
  {
    title: "Healthy and Fun Birthday Snacks for Kids",
    source: "Nutrition for Little Ones",
    description:
      "Delicious and nutritious party food ideas that both kids and parents will approve of.",
    url: "#",
    tags: ["Food", "Healthy", "Kids"],
  },
  {
    title: "Top 10 Gifts for 5-Year-Old Boys in 2024",
    source: "Toy Trends",
    description:
      "The most popular and educational toys that 5-year-old boys are asking for this year.",
    url: "#",
    tags: ["Gifts", "Toys", "Boys"],
  },
  {
    title: "Exciting Party Games for 5-Year-Olds",
    source: "Fun for Kids",
    description:
      "Keep the little ones entertained with these age-appropriate party games and activities.",
    url: "#",
    tags: ["Games", "Activities", "Kids Party"],
  },
];

const AIGeneratedBirthdayLayout: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">AI-Generated Birthday Party Planner</h2>
      <p className="text-center mb-5">
        Based on your request for planning a 5-year-old boy&apos;s birthday
        party, here&apos;s a curated layout with relevant articles and ideas.
      </p>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Cake className="me-2" />
                Birthday Party Ideas
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {birthdayArticles.map((article, index) => (
                  <ListGroup.Item key={index} className="border-bottom py-3">
                    <h4>
                      <a href={article.url} className="text-decoration-none">
                        {article.title}
                      </a>
                    </h4>
                    <p className="text-muted mb-2">{article.source}</p>
                    <p>{article.description}</p>
                    <div>
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} bg="secondary" className="me-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="bg-success text-white">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <UtensilsCrossed className="me-2" />
                Quick Food Ideas
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Fruit Skewers with Yogurt Dip</ListGroup.Item>
                <ListGroup.Item>
                  Mini Pizzas with Veggie Toppings
                </ListGroup.Item>
                <ListGroup.Item>
                  Colorful Veggie Cups with Hummus
                </ListGroup.Item>
                <ListGroup.Item>Banana Sushi Rolls</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-info text-white">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Palette className="me-2" />
                Theme Ideas
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Superhero Adventure</ListGroup.Item>
                <ListGroup.Item>Dinosaur Discovery</ListGroup.Item>
                <ListGroup.Item>Space Exploration</ListGroup.Item>
                <ListGroup.Item>Under the Sea</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-warning">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Gift className="me-2" />
                Gift Ideas
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>LEGO Duplo Sets</ListGroup.Item>
                <ListGroup.Item>Interactive Learning Tablets</ListGroup.Item>
                <ListGroup.Item>Outdoor Play Equipment</ListGroup.Item>
                <ListGroup.Item>Art and Craft Supplies</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AIGeneratedBirthdayLayout;
