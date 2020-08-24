import React from "react"

import {
  Button,
  Card,
  Typography,
  Layout,
  Menu,
  Row,
  Col,
  Divider,
  Space,
} from "antd"
import "antd/dist/antd.css"
import { v4 } from "uuid"

import greetingBg from "../images/test-greeting.svg"
import pointsBg from "../images/test-points.svg"
import mapBg from "../images/map.svg"

const { Title, Paragraph, Text } = Typography
const { Content, Footer } = Layout
const { SubMenu, Item } = Menu

function Centered({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  )
}

function EscapeButton() {
  const bgColor = {
    color: "white",
    backgroundColor: "#13C2C2",
  }

  return (
    <Button
      type="link"
      block={true}
      href="https://www.google.com/"
      size="large"
      style={bgColor}
    >
      CLICK HERE if you need to leave the site quickly
    </Button>
  )
}

function Navbar() {
  const style = {
    color: "white",
    backgroundColor: "#00474F",
  }

  return (
    <Row>
      <Col span={12}>
        <Row>
          <Col span={6} offset={2}>
            Logo placeholder
          </Col>
          <Col span={10}>
            <Row>
              <Title level={3}>Crime Survivors</Title>
            </Row>
            <Row>Resource Guides</Row>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Centered>
          <Button type="link">
            <Text>Home</Text>
          </Button>
          <Button type="link">
            <Text>Find Your County</Text>
          </Button>
          <Button type="link">
            <Text>General Guides</Text>
          </Button>
          <Button type="link" style={style}>
            Contact Us
          </Button>
        </Centered>
      </Col>
    </Row>
  )
}

function MissionSection() {
  const bgColor = {
    color: "white",
    backgroundColor: "#00474F",
  }
  return (
    <Row>
      <Col span={12}>
        <img
          style={{ marginTop: 0 }}
          src={greetingBg}
          id="test-greeting"
          alt=""
        />
      </Col>
      <Col span={8} offset={1}>
        <Row>
          <Title style={{ color: "#00474F" }}>Our Mission</Title>
        </Row>
        <Row>
          <Paragraph>
            The mission of Crime Survivors is to provide hope and healing to
            victims and survivors of crime through advocacy and the support of
            resources, information, and empowerment. All victims of crime have
            the right and responsibility to survive.
          </Paragraph>
        </Row>
        <Row>
          <Button type="link" style={bgColor}>
            Find your County
          </Button>
        </Row>
      </Col>
      
    </Row>
  )
}

function Points({ points }: { points: string[] }) {
  const style = {
    color: "white",
    backgroundColor: "#002329",
    width: `${100}%`,
  }
  return (
    <Row>
      {points.map(point => (
        <Col span={24 / points.length}>
          <Centered>
            <Card title={point} headStyle={style} bodyStyle={style}>
              Popover content goes here and here and here
            </Card>
          </Centered>
        </Col>
      ))}
    </Row>
  )
}
function GuideSection() {
  return (
    <Layout>
      <Content
        style={{
          background: `url(${pointsBg}) no-repeat center center fixed`,
          backgroundSize: "cover",
          backgroundColor: "#002329",
          opacity: 0.75,
        }}
      >
        
          <Row>
          <Centered>
            <Title style={{ color: "white" }}>Not sure where to start?</Title>
          </Centered>
          </Row>
          <Row>
            <Centered>
            <Title style={{ color: "white" }} level={4}>
              Our General Guides are here to help
            </Title>
            </Centered>
          </Row>
        
        <Points
          points={[
            "Find an Advocate",
            "Obtain Crisis Support",
            "Heal and Recover",
          ]}
        />
        <Points
          points={[
            "Learn about Victim's Rights",
            "Pay for Crime Related Expenses",
          ]}
        />
      </Content>
    </Layout>
  )
}

function DropDown(title: string, menuItems: string[]) {
  if (menuItems.length == 0) {
    return <Item>{title}</Item>
  }
  return (
    <SubMenu title={title}>
      {menuItems.map(item => (
        <Item key={v4()}>{item}</Item>
      ))}
    </SubMenu>
  )
}

function ResourceGuideMenu() {
  const style = {
    color: "#00474F",
  }
  return (
    <Row gutter={16}>
      <Col span={12}>
            <img
          style={{ marginTop: 0 }}
          src={mapBg}
          id="test-map"
          alt=""
        />
      </Col>
      <Col span={12}>
        <Title style={style} level={3}>
          County Resource Guides
        </Title>
        <Paragraph style={style}>
          These guides are filled with resources to help victims become
          survivors. The resources and referrals provided herein can be the
          first step for victims and their families to rebuild their lives.
        </Paragraph>
        <Menu mode="inline">
          {DropDown("Los Angeles", ["Los Angeles", "Los Angeles County"])}
          {DropDown("Orange County", [])}
          {DropDown("San Bernardino", [])}
          {DropDown("Ventura County", [])}
          {DropDown("San Diego", [])}
          {DropDown("Riverside", [])}
        </Menu>
      </Col>
    </Row>
  )
}

export default function LandingPage() {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Content>
        <EscapeButton />
      </Content>
      <Content>
        <Navbar />
        <MissionSection />
        <GuideSection />
        <ResourceGuideMenu />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
