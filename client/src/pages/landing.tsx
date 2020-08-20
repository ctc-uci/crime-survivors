import React from "react";

import {
    Button,
    Typography, 
    Layout} 
from "antd";

const { Title, Text } = Typography;
const {Header, Content, Footer} = Layout;


function EscapeButton() {
    const style = {
        backgroundColor: '#13C2C2'
    }

    return (
        <Button href="https://www.google.com/" style={style}>
            <Text>CLICK HERE if you need to leave the site quickly</Text>
        </Button>
    )
}

function Navbar() {

}

function MissionSection() {
    
}

function GuideSection() {
    
}

function ResourceGuideMenu() {
    
}



export default function LandingPage () {

    return (
        <Layout>
            <Header><EscapeButton/></Header>
            <Content> </Content>
            <Content> </Content>
            <Content> </Content>
            <Footer> </Footer>
        </Layout>
    );
}