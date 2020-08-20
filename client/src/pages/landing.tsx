import React from "react";

import {
    Button,
    Card,
    Typography, 
    Layout,
    Menu,
    Row,
    Col,
    Divider
} from "antd";
import "antd/dist/antd.css"

// import greeting from "../images/test-greeting.svg";

const { Title, Paragraph, Text } = Typography;
const {Header, Content, Footer} = Layout;


function EscapeButton() {
    const style = {
        color: "white",
        backgroundColor: "#13C2C2",
    }

    return (
        <Button href="https://www.google.com/" style={style}>
            <Text>CLICK HERE if you need to leave the site quickly</Text>
        </Button>
    )
}

function Navbar() {
    const style = {
        color: "white",
        backgroundColor: "#00474F",
    }

    return (
        //use space here
        <Menu mode="horizontal">
            <Menu.Item > 
                Home
            </Menu.Item>
            <Menu.Item > 
                Find Your County
            </Menu.Item>
            <Menu.Item > 
                General Guides
            </Menu.Item>
            <Button style={style}>
                Contact Us
            </Button>
        </Menu>
    )
}

function MissionSection() {
    return (
        <Row>
            <Col span={12}>
                {/* <img src={greeting} id="blue2" alt="" />     */}
            </Col>
            <Col span={12}>
                <Layout>
                    <Content>
                        <Title>Our Mission</Title>
                    </Content>
                    <Content>
                        The mission of Crime Survivors is to provide hope and healing to victims and 
                        survivors of crime through advocacy and the support of resources, information, 
                        and empowerment. All victims of crime have the right and responsibility to survive.
                    </Content>
                    <Content>
                        <Button>
                            Find your County
                        </Button>
                    </Content>
                </Layout>
            </Col>
        </Row>
    )
}


function Points({point}: {point: string}) {
    const style = {
        color: "white",
    }
    return (
        <Card title={point} extra={<a href="#">More</a>} style={{ width: 300 }}>
            <Text>Popover content goes here and here and here</Text>
        </Card>
    )
} 
function GuideSection() {

    return (
        <Layout>
            <Content>
                <Title>Not sure where to start?</Title>
                <Title level={3}>Our General Guides are here to help with that</Title>
                {["Find an Advocate", "Obtain Crisis Support", "Heal and Recover"].map(point => <Points point={point}/>)}
                {["Learn about Victim's Rights", "Pay for Crime Related Expensesr"].map(point => <Points point={point}/>)}
            </Content>
        </Layout>
    )
}

function ResourceGuideMenu() {
    
    return (
        <Row>
            <Col span={12}>
            </Col>
            <Col span={12}>
                <Title level={3}>County Resource Guides</Title>
                <Paragraph>
                    These guides are filled with resources to help victims become survivors. 
                    The resources and referrals provided herein can be the first step for victims 
                    and their families to rebuild their lives.
                </Paragraph>
            </Col>
        </Row>
    )
}



export default function LandingPage () {

    return (
        <Layout>
            <Header><EscapeButton/></Header>
            <Content>
                <Navbar/>
                <MissionSection/>
                <GuideSection/>
                <ResourceGuideMenu/>
            </Content>
            <Footer> </Footer>
        </Layout>
    );
}