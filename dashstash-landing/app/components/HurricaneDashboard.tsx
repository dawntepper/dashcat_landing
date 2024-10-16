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
  Twitter,
  Radio,
  Cloud,
  Droplet,
  ThermometerSun,
} from "lucide-react";

const HurricaneDashboard: React.FC = () => {
  return (
    <Container fluid className="py-5">
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
                  Coastal regions of Florida, Georgia, and South Carolina.
                </p>
              </Alert>
              <Alert variant="warning">
                <Alert.Heading>Flood Watch</Alert.Heading>
                <p>
                  A flood watch is in effect for the following areas: All
                  counties within 100 miles of the coastline.
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
              <h3>Hurricane Zephyr</h3>
              <p>Current Position: 25.7°N 80.2°W</p>
              <p>Maximum Sustained Winds: 120 mph</p>
              <p>Movement: NNW at 14 mph</p>
              <p>Pressure: 950 mb</p>
              <Button variant="primary" className="mt-3">
                View Detailed Forecast
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-warning">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Umbrella className="me-2" />
                Evacuation Information
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <h4>Mandatory Evacuation Zones</h4>
              <ListGroup className="mb-3">
                <ListGroup.Item>
                  Zone A: Coastal areas and low-lying regions
                </ListGroup.Item>
                <ListGroup.Item>
                  Zone B: Areas prone to storm surge
                </ListGroup.Item>
                <ListGroup.Item>
                  Zone C: Mobile homes and vulnerable structures
                </ListGroup.Item>
              </ListGroup>
              <h4>Evacuation Routes</h4>
              <ListGroup>
                <ListGroup.Item>
                  Route A: I-95 North to inland shelters
                </ListGroup.Item>
                <ListGroup.Item>Route B: I-75 North to Georgia</ListGroup.Item>
                <ListGroup.Item>
                  Route C: Florida&apos;s Turnpike to central Florida
                </ListGroup.Item>
              </ListGroup>
              <Button variant="warning" className="mt-3">
                View Interactive Evacuation Map
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header className="bg-info text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Twitter className="me-2" />
                Official Updates
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <strong>@NHC_Atlantic:</strong> Hurricane Zephyr intensifies
                  to Category 3. Residents in affected areas should finalize
                  preparations.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>@FEMA:</strong> Emergency response teams are being
                  deployed to potential impact zones. Stay tuned for further
                  instructions.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>@RedCross:</strong> Shelters are opening across the
                  region. Visit our website for locations and what to bring.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Header className="bg-success text-white">
                  <Card.Title
                    as="h2"
                    className="mb-0 d-flex align-items-center"
                  >
                    <Battery className="me-2" />
                    Emergency Supplies
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Water (1 gallon per person per day)
                    </ListGroup.Item>
                    <ListGroup.Item>Non-perishable food</ListGroup.Item>
                    <ListGroup.Item>
                      Flashlights and extra batteries
                    </ListGroup.Item>
                    <ListGroup.Item>First aid kit</ListGroup.Item>
                    <ListGroup.Item>
                      Battery-powered or hand-crank radio
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Header className="bg-secondary text-white">
                  <Card.Title
                    as="h2"
                    className="mb-0 d-flex align-items-center"
                  >
                    <Package className="me-2" />
                    Important Documents
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      ID and driver&apos;s license
                    </ListGroup.Item>
                    <ListGroup.Item>Insurance policies</ListGroup.Item>
                    <ListGroup.Item>Medical records</ListGroup.Item>
                    <ListGroup.Item>Bank account information</ListGroup.Item>
                    <ListGroup.Item>Emergency contact list</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="mb-4">
            <Card.Header className="bg-primary text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Phone className="me-2" />
                Emergency Contacts
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Local Emergency Management: 1-800-555-0123
                </ListGroup.Item>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Police Department: 911 or 1-800-555-0124
                </ListGroup.Item>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Fire Department: 911 or 1-800-555-0125
                </ListGroup.Item>
                <ListGroup.Item>
                  <MapPin className="me-2" />
                  Nearest Hospital: 1-800-555-0126
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-info text-white">
              <Card.Title as="h2" className="mb-0 d-flex align-items-center">
                <Radio className="me-2" />
                Stay Informed
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <Cloud className="me-2" />
                  National Hurricane Center: www.nhc.noaa.gov
                </ListGroup.Item>
                <ListGroup.Item>
                  <Droplet className="me-2" />
                  Local Weather Service: www.weather.gov
                </ListGroup.Item>
                <ListGroup.Item>
                  <ThermometerSun className="me-2" />
                  Emergency Alert System: Tune to local radio/TV
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
