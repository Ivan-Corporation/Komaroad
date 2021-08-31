import { Layout, Menu} from 'antd';
import '../Styles/App.css';
import "antd/dist/antd.css";
import Section from './Section';


const { Header, Content, Footer } = Layout;

export default function Main() {
  return (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
       
      </Menu>
    </Header>

    <Content style={{ padding: '0 50px', margin: '16px 0' }}>      
      
      <Section/>

    </Content>
    <Footer style={{ textAlign: 'center' }}>Komaroad ©{new Date().getFullYear()}</Footer>
  </Layout>
  )
}