"use client";

import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  Newspaper,
  Trophy,
  Utensils,
  Leaf,
  Activity,
  Edit2,
  Trash2,
} from "lucide-react";

interface BlockType {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string[];
  width: number;
}

const initialBlocks: BlockType[] = [
  {
    id: "thanksgiving",
    title: "Thanksgiving Recipes",
    icon: Utensils,
    content: [
      "Classic Roast Turkey with Herb Butter",
      "Grandma's Famous Stuffing",
      "Creamy Mashed Potatoes",
      "Homemade Cranberry Sauce",
      "Pumpkin Pie with Whipped Cream",
    ],
    width: 12,
  },
  {
    id: "news",
    title: "Latest News",
    icon: Newspaper,
    content: [
      "Global Climate Summit Reaches New Accord",
      "Tech Giant Unveils Revolutionary AI Assistant",
      "Stock Market Hits Record High Amid Economic Optimism",
      "Scientists Discover Potential Cure for Common Cold",
    ],
    width: 6,
  },
  {
    id: "sports",
    title: "Sports Updates",
    icon: Trophy,
    content: [
      "Lakers Clinch Playoff Spot with Overtime Win",
      "Underdog Team Shocks Favorites in World Cup Qualifier",
      "Local High School Athlete Breaks State Record",
    ],
    width: 6,
  },
  {
    id: "events",
    title: "Upcoming Events",
    icon: Leaf,
    content: [
      "Community Farmers' Market - This Weekend",
      "Annual Charity Run for Children's Hospital - Nov 15",
      "Town Hall Meeting on New Green Initiative - Nov 20",
    ],
    width: 6,
  },
  {
    id: "health",
    title: "Health & Wellness Tips",
    icon: Activity,
    content: [
      "5 Easy Yoga Poses for Better Sleep",
      "The Benefits of a Plant-Based Diet",
      "Mindfulness Meditation: A Beginner's Guide",
    ],
    width: 6,
  },
];

const DashboardCustomizationDemo: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockType[]>(initialBlocks);
  const [layout, setLayout] = useState<string>("Daily");

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newBlocks = Array.from(blocks);
    const [reorderedItem] = newBlocks.splice(result.source.index, 1);
    newBlocks.splice(result.destination.index, 0, reorderedItem);

    setBlocks(newBlocks);
  };

  return (
    <Container fluid className="py-5">
      <h1 className="mb-4">Your Personal Dashboard</h1>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Form.Select
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          style={{ width: "auto" }}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </Form.Select>
        <Button variant="info">Notes</Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard-demo">
          {(provided) => (
            <Row {...provided.droppableProps} ref={provided.innerRef}>
              <Col lg={8}>
                {blocks
                  .filter((block) => block.id === "news")
                  .map((block, index) => (
                    <Draggable
                      key={block.id}
                      draggableId={block.id}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-4"
                        >
                          <Card.Header className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <block.icon className="me-2" size={20} />
                              <Card.Title className="mb-0">
                                {block.title}
                              </Card.Title>
                            </div>
                            <div>
                              <Button variant="link" className="p-0 me-2">
                                <Edit2 size={16} />
                              </Button>
                              <Button
                                variant="link"
                                className="p-0 text-danger"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            {block.content.map((item, i) => (
                              <Card key={i} className="mb-3">
                                <Card.Body>
                                  <Card.Title>{item}</Card.Title>
                                  <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                  </Card.Text>
                                  <Button variant="link" className="p-0">
                                    Read more
                                  </Button>
                                </Card.Body>
                              </Card>
                            ))}
                          </Card.Body>
                        </Card>
                      )}
                    </Draggable>
                  ))}
              </Col>
              <Col lg={4}>
                <Row>
                  {blocks
                    .filter((block) => block.id !== "news")
                    .map((block, index) => (
                      <Col key={block.id} xs={block.width}>
                        <Draggable draggableId={block.id} index={index + 1}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-4"
                            >
                              <Card.Header className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <block.icon className="me-2" size={20} />
                                  <Card.Title className="mb-0">
                                    {block.title}
                                  </Card.Title>
                                </div>
                                <div>
                                  <Button variant="link" className="p-0 me-2">
                                    <Edit2 size={16} />
                                  </Button>
                                  <Button
                                    variant="link"
                                    className="p-0 text-danger"
                                  >
                                    <Trash2 size={16} />
                                  </Button>
                                </div>
                              </Card.Header>
                              <Card.Body>
                                <ul className="list-unstyled mb-0">
                                  {block.content.map((item, i) => (
                                    <li key={i} className="mb-2">
                                      <a
                                        href="#"
                                        className="text-decoration-none"
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </Card.Body>
                            </Card>
                          )}
                        </Draggable>
                      </Col>
                    ))}
                </Row>
              </Col>
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>

      <div className="text-center mt-5">
        <Button variant="primary" size="lg">
          Save Dashboard Layout
        </Button>
      </div>
    </Container>
  );
};

export default DashboardCustomizationDemo;
