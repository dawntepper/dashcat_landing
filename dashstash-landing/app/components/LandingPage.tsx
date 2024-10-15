"use client";

import { useState } from "react";
import { Form, Button, Navbar, Nav, Container } from "react-bootstrap";
import { ArrowRight, CheckCircle, Layout, Share2, Zap } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="white" expand="lg" className="px-4 px-lg-6 py-3">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            {/* <Image
              src="/placeholder.svg?height=32&width=32"
              alt="DashStash Logo"
              width={32}
              height={32}
              className="rounded"
            /> */}
            <span className="ms-2 fs-4 fw-bold text-dark">DashStash</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="text-primary">
                Features
              </Nav.Link>
              <Nav.Link href="#how-it-works" className="text-primary">
                How It Works
              </Nav.Link>
              <Nav.Link href="#survey" className="text-primary">
                Survey
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <section className="py-5 py-md-7 bg-gradient-primary-to-secondary">
          <div className="container px-4 px-md-6">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-3 text-white">
                DashStash: Your Personalized Digital Library
              </h1>
              <p className="lead mb-4 text-white">
                Organize, Discover, and Share Your Online World
              </p>
              <p className="mb-5 text-white">
                DashStash is the all-in-one platform for saving, organizing, and
                rediscovering your favorite online content. Create stunning,
                customizable layouts for your digital finds and never lose track
                of important information again.
              </p>
              <div className="mx-auto" style={{ maxWidth: "400px" }}>
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
                    variant="primary"
                    className="px-4 d-inline-flex align-items-center"
                  >
                    Join Waitlist
                    <ArrowRight className="ms-2" size={28} />
                  </Button>
                </Form>
                <p className="small text-white">
                  Be the first to experience DashStash! We&apos;ll notify you
                  when we launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-5 bg-white">
          <div className="container px-4 px-md-6">
            <h2 className="text-center mb-5">Key Features</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <Layout className="mb-3 text-primary" size={48} />
                  </div>
                  <h3 className="h5 mb-2">Customizable Visual Layouts</h3>
                  <p>
                    Create personalized, topic-specific layouts for your saved
                    content.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <Zap className="mb-3 text-warning" size={48} />
                  </div>
                  <h3 className="h5 mb-2">AI-Powered Content Resurfacing</h3>
                  <p>
                    Rediscover relevant saved content when you need it most.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <CheckCircle className="mb-3 text-success" size={48} />
                  </div>
                  <h3 className="h5 mb-2">Advanced Search and Tagging</h3>
                  <p>
                    Quickly find and organize your saved information with
                    powerful search tools.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <Share2 className="mb-3 text-info" size={48} />
                  </div>
                  <h3 className="h5 mb-2">
                    Easy Sharing of Curated Collections
                  </h3>
                  <p>
                    Share your customized layouts and content collections
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-5 bg-light">
          <div className="container px-4 px-md-6">
            <h2 className="text-center mb-5">How It Works</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="text-center">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <span className="fs-4 fw-bold">1</span>
                  </div>
                  <h3 className="h5 mb-2">Save</h3>
                  <p>
                    Use our browser extension or web app to save content from
                    anywhere on the web.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <div
                    className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <span className="fs-4 fw-bold">2</span>
                  </div>
                  <h3 className="h5 mb-2">Organize</h3>
                  <p>
                    Create custom layouts, add tags, and categorize your saved
                    content for easy retrieval.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <div
                    className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <span className="fs-4 fw-bold">3</span>
                  </div>
                  <h3 className="h5 mb-2">Discover & Share</h3>
                  <p>
                    Use AI-powered search to find relevant content and share
                    your curated collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-4 px-md-6">
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-3">
                Ready to Transform Your Digital Life?
              </h2>
              <p className="lead mb-5">
                Join the DashStash waitlist and be among the first to experience
                the future of digital organization.
              </p>
              <div className="mx-auto" style={{ maxWidth: "400px" }}>
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
                    variant="primary"
                    className="px-4 d-inline-flex align-items-center"
                  >
                    Join Waitlist
                    <ArrowRight className="ms-2" size={28} />
                  </Button>
                </Form>
                <p className="small">
                  Be the first to experience DashStash! We&apos;ll notify you
                  when we launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="survey" className="py-5 bg-light">
          <div className="container px-4 px-md-6">
            <div className="text-center">
              <h2 className="display-5 fw-bold mb-3">Help Shape DashStash</h2>
              <p className="lead mb-4">
                We value your input! Take our quick survey and help us create
                the perfect digital organization tool for you.
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
          </div>
        </section>
      </main>
      <footer className="py-4 bg-dark text-white">
        <div className="container px-4 px-md-6">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <p className="mb-2 mb-sm-0 small">
              © 2024 DashStash. All rights reserved.
            </p>
            <nav>
              <Link
                className="text-decoration-none small text-white me-3"
                href="#"
              >
                Terms of Service
              </Link>
              <Link className="text-decoration-none small text-white" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
