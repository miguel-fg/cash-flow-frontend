import React from "react";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CallToAction from "../components/CallToAction";

//recharts components
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Legend
} from "recharts";

const dummyData = [
    {
      "date": "01/01",
      "balance": 2000,
      "spending": 2400
    },
    {
      "date": "10/01",
      "balance": 3400,
      "spending": 2250
    },
    {
      "date": "18/01",
      "balance": 3600,
      "spending": 2120
    },
    {
      "date": "25/01",
      "balance": 2880,
      "spending": 2300
    },
    {
      "date": "02/02",
      "balance": 3100,
      "spending": 3850
    },
    {
      "date": "08/02",
      "balance": 2700,
      "spending": 3320
    },
    {
      "date": "15/02",
      "balance": 3700,
      "spending": 3000
    },
    {
      "date": "23/02",
      "balance": 2500,
      "spending": 3280
    },
    {
      "date": "03/03",
      "balance": 2900,
      "spending": 2700
    },
    {
      "date": "09/03",
      "balance": 3100,
      "spending": 2500
    },
    {
      "date": "17/03",
      "balance": 3600,
      "spending": 1950
    },
    {
      "date": "24/03",
      "balance": 3700,
      "spending": 1700
    },
    {
      "date": "01/04",
      "balance": 3700,
      "spending": 1250
    },
    {
      "date": "09/04",
      "balance": 4100,
      "spending": 1100
    },
    {
      "date": "17/04",
      "balance": 4300,
      "spending": 950
    },
    {
      "date": "25/04",
      "balance": 4400,
      "spending": 800
    }
  ];

export default function Home() {
    return (
        <Container className="main-container">
            <Row>
                <Col>
                    <h1 className="super-title">
                        Take Control of Your Finances.
                    </h1>
                    <h2 className="under-title">
                        Discover a smarter way to manage your money and achieve
                        your financial goals
                    </h2>
                    <CallToAction name="Get Started" />
                </Col>
                <Col className="show-off-graph">
                    <ResponsiveContainer>
                        <LineChart data={dummyData}>
                            <Line type="monotone" dataKey="balance" stroke="#4d4cac" strokeWidth={3}/>
                            <Line type="monotone" dataKey="spending" stroke="#fe616f" strokeWidth={3}/>
                            <Legend />
                        </LineChart>
                        </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}
