"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Nav,
  Tab,
} from "react-bootstrap";
import {
  Sun,
  Cloud,
  Umbrella,
  Trophy,
  Utensils,
  ExternalLink,
  Plus,
  Leaf,
  Activity,
} from "lucide-react";

const DailyDashboard: React.FC = () => {
  const [newLink, setNewLink] = useState<string>("");

  const handleAddLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New link added:", newLink);
    setNewLink("");
  };

  return (
    <Container className="py-5">
      <header className="mb-5">
        <h1 className="display-4 text-primary mb-2">Your Daily Dashboard</h1>
        <p className="lead text-muted">
          Stay informed and organized with DashStash
        </p>
      </header>

      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header>
              <Card.Title as="h2" className="d-flex align-items-center">
                <Sun className="me-2" />
                Weather
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="h4">Washington DC</h3>
                  <p className="text-muted">Partly Cloudy</p>
                </div>
                <div className="display-4">75°F</div>
              </div>
              <Row xs={2} md={4} className="g-3">
                {["Mon", "Tue", "Wed", "Thu"].map((day, index) => (
                  <Col key={day} className="text-center">
                    <p className="fw-bold">{day}</p>
                    {index === 0 && <Cloud className="mx-auto my-2" />}
                    {index === 1 && <Sun className="mx-auto my-2" />}
                    {index === 2 && <Umbrella className="mx-auto my-2" />}
                    {index === 3 && <Sun className="mx-auto my-2" />}
                    <p>{70 + index * 2}°F</p>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <Card.Title as="h2" className="d-flex align-items-center">
                <Trophy className="me-2" />
                Sports
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey="nba">
                <Nav variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="nba">NBA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="nfl">NFL</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mlb">MLB</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="nba">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between mb-2">
                        <span>Lakers vs. Celtics</span>
                        <span className="fw-bold">108 - 114</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Warriors vs. Nets</span>
                        <span className="fw-bold">120 - 112</span>
                      </li>
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="nfl">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between mb-2">
                        <span>Patriots vs. Bills</span>
                        <span className="fw-bold">24 - 21</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>49ers vs. Seahawks</span>
                        <span className="fw-bold">31 - 17</span>
                      </li>
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="mlb">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between mb-2">
                        <span>Yankees vs. Red Sox</span>
                        <span className="fw-bold">5 - 3</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Dodgers vs. Giants</span>
                        <span className="fw-bold">7 - 2</span>
                      </li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title as="h2" className="d-flex align-items-center">
                <Utensils className="me-2" />
                Dinner Ideas
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h3 className="h5">Grilled Salmon with Asparagus</h3>
                  <p className="text-muted">
                    A healthy and delicious meal ready in 30 minutes.
                  </p>
                </li>
                <li className="mb-3">
                  <h3 className="h5">Vegetarian Stir-Fry</h3>
                  <p className="text-muted">
                    Quick and easy veggie-packed dinner.
                  </p>
                </li>
                <li>
                  <h3 className="h5">Slow Cooker Beef Stew</h3>
                  <p className="text-muted">
                    Set it and forget it for a comforting meal.
                  </p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header>
              <Card.Title as="h2">Favorite Links</Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-4">
                {["Hacker News", "GitHub", "Twitter", "Reddit"].map((site) => (
                  <li key={site} className="mb-2">
                    <a
                      href={`https://${site
                        .toLowerCase()
                        .replace(" ", "")}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center text-decoration-none"
                    >
                      <ExternalLink className="me-2" size={16} />
                      {site}
                    </a>
                  </li>
                ))}
              </ul>
              <Form onSubmit={handleAddLink}>
                <Form.Group className="d-flex">
                  <Form.Control
                    type="url"
                    placeholder="Add new link"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="primary" className="ms-2">
                    <Plus size={16} />
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <Card.Title as="h2" className="d-flex align-items-center">
                <Leaf className="me-2" />
                Thanksgiving Ideas
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li>Classic Roast Turkey Recipe</li>
                <li>Cranberry Sauce from Scratch</li>
                <li>Pumpkin Pie with Whipped Cream</li>
                <li>Festive Table Decoration Ideas</li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title as="h2" className="d-flex align-items-center">
                <Activity className="me-2" />
                More Sports
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                <li>NFL Standings</li>
                <li>NBA Schedule</li>
                <li>MLB Off-Season News</li>
                <li>Fantasy Football Tips</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DailyDashboard;
