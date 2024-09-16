import React, { useState } from 'react';
import styled from 'styled-components';

const ManageGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ManageGraphForm = () => {
    const [graphs, setGraphs] = useState([{ type: '', description: '' }]);

    const handleAddRow = () => {
        setGraphs([...graphs, { type: '', description: '' }]);
    };

    const handleInputChange = (index, field, value) => {
        const newGraphs = [...graphs];
        newGraphs[index][field] = value;
        setGraphs(newGraphs);
    };

    const handleSubmit = () => {
        console.log(graphs);
    };

    return (
        <ManageGraphContainer>
            <FormContainer>
                <h2>Manage Graphs</h2>
                {graphs.map((graph, index) => (
                    <InputRow key={index}>
                        <Input
                            type="text"
                            placeholder="Graph Type"
                            value={graph.type}
                            onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Description"
                            value={graph.description}
                            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                        />
                    </InputRow>
                ))}
                <div style={{display:'flex', alignItems:"center", justifyContent:"center"}}>
                    <Button  onClick={handleAddRow}>Add Row</Button>
                    <Button style={{marginLeft:"10px"}} onClick={handleSubmit}>Submit</Button>
                </div>
            </FormContainer>
        </ManageGraphContainer>
    );
};

export default ManageGraphForm;
