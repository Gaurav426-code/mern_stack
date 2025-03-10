import React from 'react';
import { Container, Row, Col, Card, Table, ProgressBar, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
const barData = [
  { name: 'JAN', CHN: 40, USA: 30, UK: 20 },
  { name: 'FEB', CHN: 30, USA: 20, UK: 50 },
  { name: 'MAR', CHN: 20, USA: 40, UK: 30 },
  { name: 'APR', CHN: 50, USA: 30, UK: 40 },
  { name: 'MAY', CHN: 40, USA: 50, UK: 30 },
  { name: 'JUN', CHN: 60, USA: 20, UK: 40 },
];

const pieData = [
  { name: 'Search Engines', value: 30 },
  { name: 'Direct Click', value: 30 },
  { name: 'Bookmarks Click', value: 40 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF6384'];

const Sidebar = () => (
  <div className="bg-dark text-white p-3" style={{ height: '120vh' }}>
    <h4>Dashboard</h4>
    <Nav className="flex-column">
      <Nav.Link href="#" className="text-white"> Admin</Nav.Link>
      <Nav.Link href="#" className="text-white">Page Layouts</Nav.Link>
      <Nav.Link href="#" className="text-white">Charts</Nav.Link>
      <Nav.Link href="#" className="text-white">Tables</Nav.Link>
    </Nav>
  </div>
);

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10}>
          <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
            <Container>
              <Navbar.Brand href="#">Admin</Navbar.Brand>
              <Form className="d-flex ms-auto">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <FaSearch className="mt-2" />
              </Form>
              <Nav>
                <Nav.Link href="#"><FaUserCircle size={24} /> Gaurav</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Weekly Sales</Card.Title>
                  <h3>$15,000</h3>
                  <ProgressBar now={60} label="60%" variant="danger" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Weekly Orders</Card.Title>
                  <h3>45,6334</h3>
                  <ProgressBar now={10} label="10%" variant="info" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Visitors Online</Card.Title>
                  <h3>95,5741</h3>
                  <ProgressBar now={5} label="5%" variant="success" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Visit And Sales Statistics</Card.Title>
                  <BarChart width={600} height={300} data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="CHN" fill="#8884d8" />
                    <Bar dataKey="USA" fill="#82ca9d" />
                    <Bar dataKey="UK" fill="#FF6384" />
                  </BarChart>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>Traffic Sources</Card.Title>
                  <PieChart width={300} height={300}>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Recent Tickets</Card.Title>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Assignee</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Last Update</th>
                        <th>Tracking ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Gaurav</td>
                        <td>Fund is not received</td>
                        <td>DONE</td>
                        <td>Dec 5, 2017</td>
                        <td>WD-12345</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
