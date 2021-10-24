import React from "react";
import { Layout } from "antd";
import HeadrApp from "./HeaderApp";
import FooterApp from "./FooterApp";
const { Header, Footer, Content } = Layout;

export default function LayoutApp(props) {
  return (
    <Layout>
      <Header>
        <HeadrApp />
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <FooterApp />
      </Footer>
    </Layout>
  );
}
