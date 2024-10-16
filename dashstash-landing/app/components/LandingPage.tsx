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
  BookOpen,
  Layout,
  PlusCircle,
  Search,
  Share2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DailyReads from "./DailyReads";
import AIGeneratedBirthdayLayout from "./AIGeneratedBirthdayLayout";

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showAIDemo, setShowAIDemo] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const handleShowAIDemo = () => {
    setShowAIDemo(true);
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
              <Nav.Link href="#example">Example</Nav.Link>
              <Nav.Link href="#how-it-works">How It Works</Nav.Link>
              <Nav.Link href="#ai-demo">AI Demo</Nav.Link>
              <Nav.Link href="#get-started">Get Started</Nav.Link>
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
            <h2 className="text-center mb-5 display-4 fw-bold">Key Features</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {[
                {
                  icon: Layout,
                  title: "AI-Powered Layouts",
                  description:
                    "Create personalized, topic-specific layouts with AI assistance for your digital library.",
                },
                {
                  icon: Zap,
                  title: "Smart Content Organization",
                  description:
                    "Easily categorize and manage your saved content with sections, tags, and powerful search capabilities.",
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Library",
                  description:
                    "Access all your saved resources in one place, with options to sort, filter, and organize your digital collection.",
                },
                {
                  icon: Share2,
                  title: "Easy Sharing of Collections",
                  description:
                    "Share your AI-generated layouts and curated content collections with anyone.",
                },
                {
                  icon: PlusCircle,
                  title: "Quick Content Addition",
                  description:
                    "Add articles, import bookmarks, and expand your digital library with just a few clicks.",
                },
                {
                  icon: Search,
                  title: "Advanced Search",
                  description:
                    "Find exactly what you need with powerful search functionality across your entire content library.",
                },
              ].map((feature, index) => (
                <Col key={index}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body className="d-flex flex-column justify-content-center">
                      <div className="mb-3 d-flex justify-content-center">
                        <feature.icon className="text-primary" size={48} />
                      </div>
                      <Card.Title as="h3" className="h5 mb-2">
                        {feature.title}
                      </Card.Title>
                      <Card.Text>{feature.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="video" className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5 display-4 fw-bold">
              See DashStash in Action
            </h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="DashStash Demo"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="example" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 display-4 fw-bold">
              Example Dashboard: Daily Reads
            </h2>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <DailyReads />
              </Card.Body>
            </Card>
          </Container>
        </section>

        <section id="how-it-works" className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5 display-4 fw-bold">How It Works</h2>
            <Row xs={1} md={3} className="g-4">
              {[
                {
                  number: 1,
                  title: "Describe Your Needs",
                  description:
                    "Tell our AI what kind of layout you need and what information you want to organize.",
                },
                {
                  number: 2,
                  title: "AI Generates Layout",
                  description:
                    "Our AI creates a custom layout with relevant sections, tags, and organization structure.",
                },
                {
                  number: 3,
                  title: "Customize & Use",
                  description:
                    "Refine the AI-generated layout and start organizing your digital content effortlessly.",
                },
              ].map((step, index) => (
                <Col key={index}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <span className="fs-4 fw-bold">{step.number}</span>
                      </div>
                      <Card.Title as="h3" className="h5 mb-2">
                        {step.title}
                      </Card.Title>
                      <Card.Text>{step.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section id="ai-demo" className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-5 display-4 fw-bold">
              AI-Powered Layout Generator Demo
            </h2>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card>
                  <Card.Body className="text-center">
                    <p className="mb-4 fw-bold text-primary">
                      This is a conceptual demo to showcase the potential of
                      AI-generated layouts.
                    </p>
                    <p className="mb-4">
                      The actual AI-generated layouts will be available in the
                      full product.
                    </p>
                    <Button variant="primary" onClick={handleShowAIDemo}>
                      View AI-Generated Layout Demo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {showAIDemo && (
              <Row className="mt-5">
                <Col>
                  <AIGeneratedBirthdayLayout />
                </Col>
              </Row>
            )}
          </Container>
        </section>

        <section id="get-started" className="py-5 bg-primary text-white">
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
