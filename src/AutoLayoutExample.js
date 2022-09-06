
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import BarChart from './BarChart';
// import LineChart from './LineChart';
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";
import './App.css';

function AutoLayoutExample() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Yearly sales",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "blue",
            ],
          },
        ],
      
      });
      
  return (
    <Container>
      <Row >
        <Col sm={4}>
            <div className="flex-item" style={{ width: 400 }}>
                <div className="flex-item-title">$<b>2402</b><br/>Average yearly sales</div>
        <BarChart chartData={userData} />
      </div></Col>
       
      </Row>
      <Row>
        
        <Col sm={8}> <div className="flex-item" style={{ width: 700 }}>
        <div className="flex-item-title">$<b>14501</b><br/>yearly Goals</div>
        <LineChart chartData={userData} />
      </div></Col>
       
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;