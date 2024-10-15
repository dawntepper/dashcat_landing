"use client";

import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  Sun,
  Trophy,
  Utensils,
  ExternalLink,
  Leaf,
  Activity,
} from "lucide-react";

interface BlockType {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
}

const initialBlocks: BlockType[] = [
  { id: "weather", title: "Weather", icon: Sun, color: "bg-primary" },
  { id: "sports", title: "Sports", icon: Trophy, color: "bg-success" },
  { id: "dinner", title: "Dinner Ideas", icon: Utensils, color: "bg-warning" },
  {
    id: "links",
    title: "Favorite Links",
    icon: ExternalLink,
    color: "bg-info",
  },
  {
    id: "thanksgiving",
    title: "Thanksgiving Ideas",
    icon: Leaf,
    color: "bg-danger",
  },
  {
    id: "more-sports",
    title: "More Sports",
    icon: Activity,
    color: "bg-secondary",
  },
];

const DashboardCustomizationDemo: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockType[]>(initialBlocks);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newBlocks = Array.from(blocks);
    const [reorderedItem] = newBlocks.splice(result.source.index, 1);
    newBlocks.splice(result.destination.index, 0, reorderedItem);

    setBlocks(newBlocks);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Personalize Your Dashboard</h2>
      <p className="text-center mb-5">
        Drag and drop to customize your daily view. Create a dashboard
        that&apos;s uniquely yours!
      </p>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dashboard-demo" direction="horizontal">
          {(provided) => (
            <Row
              {...provided.droppableProps}
              ref={provided.innerRef}
              xs={2}
              md={3}
              className="g-4"
            >
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <Col
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card className={`${block.color} text-white h-100`}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <block.icon className="mb-2" size={24} />
                            <Card.Title className="mb-0">
                              {block.title}
                            </Card.Title>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </DragDropContext>

      <div className="text-center mt-5">
        <Button variant="primary" size="lg">
          Preview Your Dashboard
        </Button>
      </div>
    </Container>
  );
};

export default DashboardCustomizationDemo;
