import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GraphListContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const GraphCard = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

const GraphListing = () => {
  const [graphs, setGraphs] = useState([
    { id: 1, date: '2024-09-13', price: 120 },
    { id: 2, date: '2024-09-14', price: 150 },
  ]);

  const handleDelete = (id) => {
    setGraphs(graphs.filter((graph) => graph.id !== id));
  };

  return (
    <GraphListContainer>
      <h2>Graph Listings</h2>
      {graphs.map((graph) => (
        <GraphCard key={graph.id}>
          <p>Date: {graph.date}, Price: {graph.price}</p>
          <div>
            <Link to={`/view-graph/${graph.id}`}>
              <Button>View</Button>
            </Link>
            <DeleteButton onClick={() => handleDelete(graph.id)}>Delete</DeleteButton>
          </div>
        </GraphCard>
      ))}
    </GraphListContainer>
  );
};

export default GraphListing;
