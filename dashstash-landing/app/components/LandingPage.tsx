"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import {
  ArrowRight,
  CheckCircle,
  Layout,
  Share2,
  Zap,
  Wind,
  Umbrella,
  Battery,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HurricaneDashboard from "./HurricaneDashboard";
import DashboardCustomizationDemo from "./DashboardCustomizationDemo";

// Make sure to import Bootstrap CSS in your main layout or _app.js file
// import 'bootstrap/dist/css/bootstrap.min.css'

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="light" expand="lg" className="px-4 px-lg-5">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="DashStash Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="ms-2 fs-4 fw-bold text-primary">DashStash</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
              <Nav.Link href="#ai-layouts">AI Layouts</Nav.Link>
              <Nav.Link href="#customize">Customize</Nav.Link>
              <Nav.Link href="#survey">Survey</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <section className="py-5 bg-primary text-white">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h1 className="display-3 fw-bold mb-3">
                    Your AI-Powered Digital Library
                  </h1>
                  <p className="lead mb-4">
                    Organize, Discover, and Share Your Online World with
                    DashStash
                  </p>
                  <p className="mb-5">
                    Create sleek, customizable layouts for your digital finds
                    using AI-generated suggestions. Never lose track of
                    important information again.
                  </p>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1">
                <Card
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Card.Body className="p-4">
                    <h2 className="h4 mb-4 text-primary">Join the Waitlist</h2>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <div className="text-end">
                        <Button
                          type="submit"
                          variant="primary"
                          className="d-inline-flex align-items-center"
                        >
                          Join Waitlist
                          <ArrowRight className="ms-2" size={16} />
                        </Button>
                      </div>
                    </Form>
                    <p className="small text-muted mt-3 mb-0">
                      Be the first to experience DashStash! We&apos;ll notify
                      you when we launch.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="features" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 text-primary">Key Features</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
              <Col>
                <div className="text-center">
                  <Layout className="mb-3 text-primary" size={48} />
                  <h3 className="h5 mb-2">AI-Powered Layouts</h3>
                  <p>
                    Create personalized, topic-specific layouts with AI
                    assistance.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <Zap className="mb-3 text-warning" size={48} />
                  <h3 className="h5 mb-2">Smart Content Resurfacing</h3>
                  <p>
                    Rediscover relevant saved content when you need it most.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <CheckCircle className="mb-3 text-success" size={48} />
                  <h3 className="h5 mb-2">Advanced Search and Tagging</h3>
                  <p>
                    Quickly find and organize your saved information with
                    powerful search tools.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <Share2 className="mb-3 text-info" size={48} />
                  <h3 className="h5 mb-2">Easy Sharing of Collections</h3>
                  <p>
                    Share your AI-generated layouts and curated content
                    collections with anyone.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="ai-layouts" className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5 text-primary">
              AI-Powered Custom Layouts
            </h2>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <h3 className="h4 mb-3">Create Layouts for Any Scenario</h3>
                <p className="mb-4">
                  Whether you&apos;re preparing for a hurricane, planning a
                  vacation, or organizing research for a project,
                  DashStash&apos;s AI can help you create the perfect layout to
                  keep your information organized and accessible.
                </p>
                <p className="mb-4">
                  Simply describe what you need, and our AI will suggest a
                  tailored layout with relevant sections and tags. Once
                  you&apos;ve customized your layout, you can easily share it
                  with friends, family, or colleagues, making collaboration and
                  information sharing effortless.
                </p>
              </Col>
              <Col lg={6}>
                <Card>
                  <Card.Header className="bg-primary text-white">
                    <h4 className="mb-0">Hurricane Preparation Layout</h4>
                  </Card.Header>
                  <Card.Body>
                    <Row xs={2} className="g-3">
                      <Col>
                        <div className="d-flex align-items-center">
                          <Wind className="text-primary me-2" size={24} />
                          <span>Weather Updates</span>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center">
                          <Umbrella className="text-warning me-2" size={24} />
                          <span>Evacuation Routes</span>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center">
                          <Battery className="text-success me-2" size={24} />
                          <span>Emergency Supplies</span>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center">
                          <Package className="text-info me-2" size={24} />
                          <span>Important Documents</span>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 text-primary">
              Example: Hurricane Preparation Dashboard
            </h2>
            <p className="text-center mb-4">
              See how DashStash can help organize critical information during
              emergencies. This dashboard can be easily shared with friends and
              family who may not have access to social media or local news.
            </p>
            <Card>
              <Card.Body>
                <HurricaneDashboard />
              </Card.Body>
            </Card>
          </Container>
        </section>

        <section id="customize" className="py-5 bg-white">
          <DashboardCustomizationDemo />
        </section>

        <section id="how-it-works" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 text-primary">How It Works</h2>
            <Row xs={1} md={3} className="g-4">
              <Col>
                <div className="text-center">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h3 className="h5 mb-2">Describe Your Needs</h3>
                  <p>
                    Tell our AI what kind of layout you need and what
                    information you want to organize.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <div
                    className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h3 className="h5 mb-2">AI Generates Layout</h3>
                  <p>
                    Our AI creates a custom layout with relevant sections, tags,
                    and organization structure.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="text-center">
                  <div
                    className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h3 className="h5 mb-2">Customize & Use</h3>
                  <p>
                    Refine the AI-generated layout and start organizing your
                    digital content effortlessly.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-primary text-white">
          <Container>
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-3">
                Ready to Transform Your Digital Life?
              </h2>
              <p className="lead mb-5">
                Join the DashStash waitlist and be among the first to experience
                the future of AI-powered digital organization.
              </p>
              <Row className="justify-content-center">
                <Col md={6}>
                  <Form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column flex-sm-row gap-2 mb-2"
                  >
                    <Form.Control
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-grow-1"
                    />
                    <Button
                      type="submit"
                      variant="light"
                      className="px-4 d-inline-flex align-items-center"
                    >
                      Join Waitlist
                      <ArrowRight className="ms-2" size={16} />
                    </Button>
                  </Form>
                  <p className="small text-white-50">
                    Be the first to experience DashStash! We&apos;ll notify you
                    when we launch.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section id="survey" className="py-5 bg-light">
          <Container>
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-3 text-primary">
                Help Shape DashStash
              </h2>
              <p className="lead mb-4">
                We value your input! Take our quick survey and help us create
                the perfect AI-powered digital organization tool for you.
              </p>
              <Button
                href="#"
                variant="primary"
                size="lg"
                className="mb-3 d-inline-flex align-items-center"
              >
                Take Our Quick Survey
                <ArrowRight className="ms-2" size={16} />
              </Button>
              <p className="text-muted">
                Complete the survey for a chance to win early access or a
                premium account!
              </p>
            </div>
          </Container>
        </section>
      </main>
      <footer className="py-4 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col sm={6} className="mb-3 mb-sm-0">
              <p className="mb-0 small">
                © 2024 DashStash. All rights reserved.
              </p>
            </Col>
            <Col sm={6}>
              <nav className="d-flex justify-content-sm-end">
                <Link
                  href="#"
                  className="text-decoration-none small text-white me-3"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-decoration-none small text-white"
                >
                  Privacy
                </Link>
              </nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
