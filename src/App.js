import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ManageGraphForm from './components/ManageGraphForm';
import GraphListing from './components/GraphListing';
import ViewGraph from './components/ViewGraph';
import GraphApp from './GraphApp';
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/login-page" element={<LoginPage />} />
        
        {/* Route to manage graphs */}
        <Route path="/manage-graph" element={<ManageGraphForm />} />
        
        {/* Route for graph listing */}
        <Route path="/graph-listing" element={<GraphListing />} />
        
        {/* Route for viewing graph details with dynamic :id */}
        <Route path="/view-graph/:id" element={<ViewGraph />} />

        {/* <Route path="/graphs" element={<GraphApp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
