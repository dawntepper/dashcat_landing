import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {
  Bookmark,
  Twitter,
  Cloud,
  Trophy,
  Gift,
  GlassWater,
  Salad,
  LayoutList,
  LayoutGrid,
  AlignLeft,
} from "lucide-react";

interface Article {
  title: string;
  source: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
  imageUrl: string;
}

const featuredArticles: Article[] = [
  {
    title:
      "I used Lore Machine's generative AI to turn my story into a comic—and you can too",
    source: "MIT Technology Review",
    description:
      "By pulling together several different generative models into an easy-to-use package controlled with the push of a button, Lore Machine heralds the arrival of one-click AI.",
    date: "10/8/2024",
    tags: ["Technology", "AI", "Comics"],
    url: "https://www.technologyreview.com/2023/10/08/1080800/lore-machine-generative-ai-comic/",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "All-in-one Chrome extension sidebar with 14 productivity apps",
    source: "TechCrunch",
    description:
      "A new Chrome extension brings together 14 productivity apps in one convenient sidebar, accessible with a single click on any tab.",
    date: "10/8/2024",
    tags: ["Technology", "Productivity", "Chrome"],
    url: "https://techcrunch.com/2024/10/08/chrome-extension-sidebar/",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "How to Create a Directory Website in 8 Steps - New 2024 guide",
    source: "Web Design Weekly",
    description:
      "Learn how to create a directory website with our step-by-step guide. From design to launch, we cover everything you need to know to succeed online.",
    date: "10/7/2024",
    tags: ["Web Design", "Tutorials"],
    url: "https://webdesignweekly.com/how-to-create-directory-website/",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Outstanding WordPress Directory Themes for 2024",
    source: "WordPress Tavern",
    description:
      "Discover the top WordPress directory themes that will help you create stunning and functional directory websites in 2024.",
    date: "10/6/2024",
    tags: ["WordPress", "Web Design"],
    url: "https://wptavern.com/directory-themes-2024",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The pros and cons of building niche directory websites",
    source: "Indie Hackers",
    description:
      "An in-depth discussion on the potential benefits and drawbacks of creating and monetizing niche directory websites.",
    date: "10/5/2024",
    tags: ["Entrepreneurship", "Web Development"],
    url: "https://www.indiehackers.com/post/niche-directory-websites",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
];

const holidayContent: Article[] = [
  {
    title: "Festive Cranberry Punch: A Holiday Favorite",
    source: "Holiday Recipes",
    description:
      "A delightful blend of cranberry juice, orange liqueur, and champagne. Perfect for holiday gatherings!",
    date: "12/1/2024",
    tags: ["Recipe", "Drinks"],
    url: "#",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Essential Party Planning Tips for a Stress-Free Holiday",
    source: "Party Planner Pro",
    description:
      "From creating guest lists to setting up self-serve drink stations, these tips will ensure your holiday party is a success.",
    date: "12/2/2024",
    tags: ["Party Planning", "Holidays"],
    url: "#",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Top Tech Gadgets for Your Holiday Gift List",
    source: "Tech Insider",
    description:
      "Discover the must-have tech gadgets that will delight everyone on your gift list this holiday season.",
    date: "12/3/2024",
    tags: ["Gift Guide", "Technology"],
    url: "#",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cozy Home Decor Ideas for the Festive Season",
    source: "Home & Living",
    description:
      "Transform your space into a winter wonderland with these stylish and cozy home decor ideas.",
    date: "12/4/2024",
    tags: ["Home Decor", "Holidays"],
    url: "#",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Vegan Wellington: A Plant-Based Holiday Centerpiece",
    source: "Vegan Delights",
    description:
      "Impress your guests with this stunning and delicious vegan wellington, perfect for your holiday table.",
    date: "12/5/2024",
    tags: ["Recipe", "Vegan"],
    url: "#",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
];

const DailyReadsLayout: React.FC = () => {
  const [currentLayout, setCurrentLayout] = useState("Daily Reads");
  const [viewMode, setViewMode] = useState<"compact" | "card" | "detailed">(
    "detailed"
  );

  const renderArticlesList = (articles: Article[]) => (
    <>
      {articles.map((article, index) => (
        <div key={index} className="mb-5">
          <Row>
            <Col md={4}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                fluid
                rounded
                className="mb-3"
              />
            </Col>
            <Col md={8}>
              <h3>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
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
            </Col>
          </Row>
          {index < articles.length - 1 && <hr className="my-4" />}
        </div>
      ))}
    </>
  );

  const renderArticlesCards = (articles: Article[]) => (
    <Row xs={1} md={2} lg={3} className="g-4">
      {articles.map((article, index) => (
        <Col key={index}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={article.imageUrl}
              alt={article.title}
            />
            <Card.Body>
              <Card.Title>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  {article.title}
                </a>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {article.source} - {article.date}
              </Card.Subtitle>
              <Card.Text>{article.description}</Card.Text>
              <div>
                {article.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} bg="secondary" className="me-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  const renderCompactView = (articles: Article[]) => (
    <ListGroup>
      {articles.map((article, index) => (
        <ListGroup.Item key={index} className="d-flex flex-column">
          <div className="fw-bold">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              {article.title}
            </a>
          </div>
          <small className="text-muted">
            {article.source} - {article.date}
          </small>
          <div className="mt-1">
            {article.tags.slice(0, 2).map((tag, tagIndex) => (
              <Badge key={tagIndex} bg="secondary" className="me-1">
                {tag}
              </Badge>
            ))}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <Container fluid className="py-4">
      <h2
        className="mb-4 text-center fs-1"
        style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
      >
        Example Dashboard: {currentLayout}
      </h2>
      <Row className="mb-4">
        <Col md={6}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-layout">
              {currentLayout} {currentLayout === "Daily Reads" && "(Default)"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                active={currentLayout === "Daily Reads"}
                onClick={() => setCurrentLayout("Daily Reads")}
              >
                Daily Reads (Default)
              </Dropdown.Item>
              <Dropdown.Item
                active={currentLayout === "Holiday Entertaining"}
                onClick={() => setCurrentLayout("Holiday Entertaining")}
              >
                Holiday Entertaining
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={6} className="d-flex justify-content-end align-items-center">
          <ButtonGroup>
            <ToggleButton
              id="view-mode-compact"
              type="radio"
              variant="outline-secondary"
              name="view-mode"
              value="compact"
              checked={viewMode === "compact"}
              onChange={(e) =>
                setViewMode(
                  e.currentTarget.value as "compact" | "card" | "detailed"
                )
              }
              title="Compact View"
            >
              <AlignLeft size={18} />
            </ToggleButton>
            <ToggleButton
              id="view-mode-card"
              type="radio"
              variant="outline-secondary"
              name="view-mode"
              value="card"
              checked={viewMode === "card"}
              onChange={(e) =>
                setViewMode(
                  e.currentTarget.value as "compact" | "card" | "detailed"
                )
              }
              title="Card View"
            >
              <LayoutGrid size={18} />
            </ToggleButton>
            <ToggleButton
              id="view-mode-detailed"
              type="radio"
              variant="outline-secondary"
              name="view-mode"
              value="detailed"
              checked={viewMode === "detailed"}
              onChange={(e) =>
                setViewMode(
                  e.currentTarget.value as "compact" | "card" | "detailed"
                )
              }
              title="Detailed View"
            >
              <LayoutList size={18} />
            </ToggleButton>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {currentLayout === "Daily Reads" &&
            (viewMode === "compact"
              ? renderCompactView(featuredArticles)
              : viewMode === "card"
              ? renderArticlesCards(featuredArticles)
              : renderArticlesList(featuredArticles))}
          {currentLayout === "Holiday Entertaining" &&
            (viewMode === "compact"
              ? renderCompactView(holidayContent)
              : viewMode === "card"
              ? renderArticlesCards(holidayContent)
              : renderArticlesList(holidayContent))}
        </Col>
        <Col md={4}>
          {currentLayout === "Daily Reads" && (
            <>
              <Card className="mb-4">
                <Card.Header className="bg-primary text-white">
                  <Card.Title
                    as="h3"
                    className="mb-0 d-flex align-items-center"
                  >
                    <Bookmark className="me-2" />
                    Sports Columnists
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <a
                        href="https://www.washingtonpost.com/people/sally-jenkins/"
                        className="text-primary"
                      >
                        Sally Jenkins
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a
                        href="https://theathletic.com/author/dianna-russini/"
                        className="text-primary"
                      >
                        Dianna Russini
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a
                        href="https://theathletic.com/author/frank-isola/"
                        className="text-primary"
                      >
                        Frank Isola
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Header className="bg-info text-white">
                  <Card.Title
                    as="h3"
                    className="mb-0 d-flex align-items-center"
                  >
                    <Twitter className="me-2" />
                    Twitter Favorites
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <a
                        href="https://twitter.com/nytimes"
                        className="text-primary"
                      >
                        @nytimes
                      </a>
                      : Breaking news and analysis from the U.S. and around the
                      world.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a
                        href="https://twitter.com/BBCBreaking"
                        className="text-primary"
                      >
                        @BBCBreaking
                      </a>
                      : Breaking news alerts and updates from the BBC.
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <a
                        href="https://twitter.com/TheEconomist"
                        className="text-primary"
                      >
                        @TheEconomist
                      </a>
                      : News and analysis with a global perspective.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Header className="bg-success text-white">
                  <Card.Title
                    as="h3"
                    className="mb-0 d-flex align-items-center"
                  >
                    <Cloud className="me-2" />
                    Weather in DC
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <h4>Today: 72°F, Partly Cloudy</h4>
                  <p>Tomorrow: 75°F, Sunny</p>
                  <p>
                    This Week: Mild temperatures with a chance of rain on
                    Thursday
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="bg-warning">
                  <Card.Title
                    as="h3"
                    className="mb-0 d-flex align-items-center"
                  >
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
            </>
          )}
          {currentLayout === "Holiday Entertaining" && (
            <>
              <Card className="mb-4">
                <Card.Header className="bg-success text-white">
                  <Card.Title
                    as="h3"
                    className="mb-0 d-flex align-items-center"
                  >
                    <Salad className="me-2" />
                    Quick Recipe Ideas
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        5-Minute Cranberry Sauce
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Easy Garlic Mashed Potatoes
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        No-Bake Pumpkin Cheesecake
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Header className="bg-info text-white">
                  <Card.Title
                    as="h3"
                    className="mb-0 d-flex align-items-center"
                  >
                    <GlassWater className="me-2" />
                    Festive Drink Ideas
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Mulled Wine
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Gingerbread Latte
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Hot Buttered Rum
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="bg-warning">
                  <Card.Title
                    as="h3"
                    className="mb-0  d-flex align-items-center"
                  >
                    <Gift className="me-2" />
                    Last-Minute Gift Ideas
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Digital Gift Cards
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Subscription Boxes
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="#" className="text-primary">
                        Handmade Treats
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DailyReadsLayout;
