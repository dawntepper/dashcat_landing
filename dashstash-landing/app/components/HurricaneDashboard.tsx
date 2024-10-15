"use client";

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Alert,
  Button,
} from "react-bootstrap";
import {
  Wind,
  Umbrella,
  Battery,
  Package,
  AlertTriangle,
  MapPin,
  Phone,
} from "lucide-react";

const HurricaneDashboard: React.FC = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Hurricane Preparation Dashboard</h1>

      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header className="bg-danger text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <AlertTriangle className="me-2" />
                Current Alerts
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Alert variant="danger">
                <Alert.Heading>Hurricane Warning</Alert.Heading>
                <p>
                  A hurricane warning is in effect for the following areas:
                  [List of areas]
                </p>
              </Alert>
              <Alert variant="warning">
                <Alert.Heading>Flood Watch</Alert.Heading>
                <p>
                  A flood watch is in effect for the following areas: [List of
                  areas]
                </p>
              </Alert>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Wind className="me-2" />
                Weather Updates
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h3>Hurricane [Name]</h3>
              <p>Current Position: [Latitude, Longitude]</p>
              <p>Maximum Sustained Winds: [Wind speed] mph</p>
              <p>Movement: [Direction] at [Speed] mph</p>
              <p>Pressure: [Pressure] mb</p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-warning">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Umbrella className="me-2" />
                Evacuation Routes
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Route A:</strong> [Description of Route A]
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Route B:</strong> [Description of Route B]
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Route C:</strong> [Description of Route C]
                </ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="mt-3">
                View Interactive Map
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header className="bg-success text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Battery className="me-2" />
                Emergency Supplies
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  Water (1 gallon per person per day)
                </ListGroup.Item>
                <ListGroup.Item>Non-perishable food</ListGroup.Item>
                <ListGroup.Item>Flashlights and extra batteries</ListGroup.Item>
                <ListGroup.Item>First aid kit</ListGroup.Item>
                <ListGroup.Item>
                  Battery-powered or hand-crank radio
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-info text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Package className="me-2" />
                Important Documents
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>ID and driver&apos;s license</ListGroup.Item>
                <ListGroup.Item>Insurance policies</ListGroup.Item>
                <ListGroup.Item>Medical records</ListGroup.Item>
                <ListGroup.Item>Bank account information</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-secondary text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Phone className="me-2" />
                Emergency Contacts
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Local Emergency Management: [Phone Number]
                </ListGroup.Item>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Police Department: [Phone Number]
                </ListGroup.Item>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Fire Department: [Phone Number]
                </ListGroup.Item>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Nearest Hospital: [Phone Number]
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HurricaneDashboard;
