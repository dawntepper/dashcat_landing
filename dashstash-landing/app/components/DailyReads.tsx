import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import { Bookmark, Twitter, Cloud, Trophy } from "lucide-react";

interface Article {
  title: string;
  source: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
}

const featuredArticles: Article[] = [
  {
    title:
      "I used Lore Machine's generative AI to turn my story into a comic—and you can too",
    source: "MIT Technology Review",
    description:
      "By pulling together several different generative models into an easy-to-use package controlled with the push of a button, Lore Machine heralds the arrival of one-click AI.",
    date: "10/8/2024",
    tags: ["Twitter", "SaaS", "loremachine", "generative", "into", "used"],
    url: "https://www.technologyreview.com/2023/10/08/1080800/lore-machine-generative-ai-comic/",
  },
  {
    title:
      "All-in-one Chrome extension sidebar with 14 productivity apps, available in one click on any tab",
    source: "acquire.com",
    description: "No description available",
    date: "10/8/2024",
    tags: ["Twitter", "SaaS", "one", "all", "chrome", "extension", "sidebar"],
    url: "https://acquire.com/chrome-extension-sidebar/",
  },
  {
    title:
      "Directory | Directories: How to Create a Directory Website in 8 Steps - New 2024 guide",
    source: "eDirectory Blog",
    description:
      "Learn how to create a directory website with our step-by-step guide. From design to launch, we cover everything you need to know to succeed online.",
    date: "10/8/2024",
    tags: ["Twitter", "SaaS", "directory", "how", "create", "website", "step"],
    url: "https://www.edirectory.com/blog/how-to-create-a-directory-website/",
  },
  {
    title: "GeoDirectory Demo – Outstanding WordPress Directory Themes",
    source: "ayecode.io",
    description: "Outstanding WordPress Directory Themes",
    date: "10/8/2024",
    tags: [
      "Twitter",
      "SaaS",
      "outstanding",
      "wordpress",
      "directory",
      "themes",
      "geodirectory",
    ],
    url: "https://ayecode.io/geodirectory-demo/",
  },
  {
    title:
      "I am addicted to building directory websites. Can I monetize them or should I stop?",
    source: "reddit.com",
    description: "You've been blocked by network security.",
    date: "10/8/2024",
    tags: [
      "Twitter",
      "SaaS",
      "addicted",
      "building",
      "directory",
      "websites",
      "can",
    ],
    url: "https://www.reddit.com/r/Entrepreneur/comments/your_post_id/",
  },
];

const DailyReadsLayout: React.FC = () => {
  return (
    <Container fluid className="py-4">
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className="mb-0">Daily Reads</h1>
        </Col>
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-layout">
              Choose Layout
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item active>Daily Reads (Default)</Dropdown.Item>
              <Dropdown.Item>Hurricane Prep</Dropdown.Item>
              <Dropdown.Item>Holiday Entertaining</Dropdown.Item>
              <Dropdown.Item>Fantasy Football</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Bookmark className="me-2" />
                Favorite Columnists
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4>New York Times</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item>David Brooks</ListGroup.Item>
                    <ListGroup.Item>Ezra Klein</ListGroup.Item>
                    <ListGroup.Item>Paul Krugman</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h4>Washington Post</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Fareed Zakaria</ListGroup.Item>
                    <ListGroup.Item>Catherine Rampell</ListGroup.Item>
                    <ListGroup.Item>David Ignatius</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <h2 className="mb-3">Headlines</h2>
          {featuredArticles.map((article, index) => (
            <React.Fragment key={index}>
              <div className="mb-3">
                <h3>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-muted mb-2">
                  {article.source} - {article.date}
                </p>
                <p>{article.description}</p>
                <div>
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} bg="secondary" className="me-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {index < featuredArticles.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="bg-info text-white">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Twitter className="me-2" />
                Twitter Favorites
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  @nytimes: Breaking news and analysis from the U.S. and around
                  the world.
                </ListGroup.Item>
                <ListGroup.Item>
                  @BBCBreaking: Breaking news alerts and updates from the BBC.
                </ListGroup.Item>
                <ListGroup.Item>
                  @TheEconomist: News and analysis with a global perspective.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="bg-success text-white">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Cloud className="me-2" />
                Weather in DC
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h4>Today: 72°F, Partly Cloudy</h4>
              <p>Tomorrow: 75°F, Sunny</p>
              <p>
                This Week: Mild temperatures with a chance of rain on Thursday
              </p>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="bg-warning">
              <Card.Title as="h3" className="mb-0 d-flex align-items-center">
                <Trophy className="me-2" />
                NFL Scores
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Patriots 24 - 21 Bills</ListGroup.Item>
                <ListGroup.Item>Packers 31 - 28 Vikings</ListGroup.Item>
                <ListGroup.Item>49ers 27 - 24 Rams</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DailyReadsLayout;
