//index page for next js
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import Link from 'next/link';
import { Column } from 'rc-table';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/scss/app.module.scss';
import { Menu, Input, Dropdown, message } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { margin, style } from '@mui/system';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import LoopCard from '../components/card.jsx';
import Band from '../components/band.jsx';


const { SubMenu } = Menu;
let e: any;

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const slideImages = [
  {
    url: 'https://www.scholarship.in.th/wp-content/uploads/2017/12/1-59.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.scholarship.in.th/wp-content/uploads/2017/12/1-59.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.scholarship.in.th/wp-content/uploads/2017/12/1-59.jpg',
    caption: 'Slide 3'
  },
];

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);






function IndexPage() {
  return (
    <div className="container">
      <Header style={{
        backgroundColor: '#fff',
        padding: '0px',
        margin: '0px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Arial',
        display: 'flex',
        alignItems: 'stretch',
        listStyle: 'none',
      }}>
        <div style={{
          //set line center
          height: '30px',
          width: '100%',
          backgroundColor: '#05014a',
          padding: '20px',
          paddingRight: '21%',
          textAlign: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#fff',
          fontFamily: 'Arial',
          display: 'flex',
          alignItems: 'center',
          columnGap: '30px',
          justifyContent: 'flex-end',
        }}>
          <p>
            info@gmail.com
          </p>
          <p>
            +91-1234567890
          </p>
          <div>
            <Link href="/about">
              <a>TH |</a>
            </Link>
            <Link href="/about">
              <a> EN |</a>
            </Link>
            <Link href="/about">
              <a> CN</a>
            </Link>
          </div>
        </div>







      </Header>
      <div className="main and siderbar">
        <div style={{
          backgroundColor: '#fff',
          alignItems: 'center',
          margin: '0px',
          columnGap: '30px',
          justifyContent: 'space-evenly',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          <img src="https://fysprodstore.blob.core.windows.net/images/agency/9865db2e-f2b8-49c7-8b40-48babc087967/toplogo.jpg" style={{
            width: '7%',
            height: '7%',
          }}></img>
          <nav style={{
            display: 'flex',
            justifyItems: 'around',
            alignItems: 'center',
            margin: '0px',
            padding: '0px',
            height: '100px',
            fontSize: '8px',
            fontWeight: 'bold',
            color: '#000',
            fontFamily: 'Arial',
            columnGap: '20px',
            justifyContent: 'space-evenly',
            paddingRight: '40px',
          }}>
            <Button variant="text" className={styles.slide}>
              <Link href="/">
                <a className={styles.forntNav}>BUY<i> </i>
                  <FontAwesomeIcon icon={faAngleDown} /></a>
              </Link>
            </Button>
            <Button variant="text">
              <Link href="/">
                <a className={styles.forntNav}>RENT<i> </i>
                  <FontAwesomeIcon icon={faAngleDown} /></a>
              </Link>
            </Button>
            <Button variant="text">
              <Link href="/">
                <a className={styles.forntNav}>LIST YOUR SPACE
                </a>
              </Link>
            </Button>
            <Button variant="text">
              <Link href="/">
                <a className={styles.forntNav}>EXPENSE CULCULATION</a>
              </Link>
            </Button>
            <Button variant="text">
              <Link href="/">
                <a className={styles.forntNav}>NEWS & ARTICLES</a>
              </Link></Button>
            <Button variant="text">
              <Link href="/">
                <a className={styles.forntNav}>ABOUT US</a>
              </Link></Button>
            <Button variant="text">
              <Link href="/">
                <a className={styles.forntNav}>THB<i> </i>
                  <FontAwesomeIcon icon={faAngleDown} /></a>
              </Link>
            </Button>
          </nav>
        </div>
        <div className="main-content">
          <div className="styles.main-content-header">

          </div>

          <div className="main-content-Banner" style={{
            position: 'relative'
          }}>
            <div>
              <img src="https://freedesignfile.com/upload/2016/12/Apartment-design-renderings-HD-picture-12.jpg" style={{
                //steach image to center
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                height: '350px',
                zIndex: '1',
              }}>

              </img>
              <p style={{
                position: 'absolute',
                //set to center
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#fff',
                fontFamily: 'Arial',
              }}>Find your space</p>
            </div>

          </div>

          <div className="main-content-search" style={{
            backgroundColor: '#fff',
            height: '500px',
            marginTop: '30px',
            marginRight: '15%',
            marginLeft: '15%',
            position: 'relative',
            
          }}>

            <div className="search" style={{
              paddingTop: '20px',
              backgroundColor: '#05014a',
              width: '100%',
              height: '230px',
            }}>
              <div style={{
                display: 'flex',
                justifyItems: 'space-around',
                justifyContent: 'space-evenly',
                color: 'white',
                fontWeight: 'bold',

              }}>
                <i>iqwe</i>
                <i>iqwe</i>
                <i>iqwe</i>
                <i>iqwe</i>

              </div>
              <br />
              <Input placeholder="Search" style={{
                display: 'flex',
                justifyItems: 'space-around',
                width: '90%',
                height: '30px',
                padding: '20px',
                fontSize: '16px',
                color: '#000',
                alignItems: 'center',
                fontFamily: 'Arial',
                border: '5px',
                borderColor: 'black',
                borderRadius: '30px',
                marginLeft: '5%',
              }}></Input>
              <br />
              <div style={{
                display: 'flex',
                justifyItems: 'space-around',
                paddingTop: '20px',
                marginLeft: '5%',
                marginRight: '5%',
                justifyContent: 'space-evenly',
              }}>
                <Dropdown overlay={menu} overlayStyle={{
                  width: '150px',
                }}>
                  <Button className={styles.buttonSearch}>
                    Button <DownOutlined />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu} overlayStyle={{
                  width: '150px',
                }}>
                  <Button className={styles.buttonSearch}>
                    Button <DownOutlined />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu} overlayStyle={{
                  width: '150px',
                }}>
                  <Button className={styles.buttonSearch}>
                    Button <DownOutlined />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu} overlayStyle={{
                  width: '150px',
                  background: 'white',
                  border: 'black 10px',
                  borderRadius: '30px',
                }}>
                  <Button className={styles.buttonSearch}>
                    Button <DownOutlined />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu} overlayStyle={{
                  width: '150px',
                  color: 'white',
                  border: 'black 10px',
                  borderRadius: '30px',
                }}>
                  <Button className={styles.buttonSearch}>
                    Button <DownOutlined />
                  </Button>
                </Dropdown>
                <Button style={{
                  backgroundColor: 'gold',
                  color: 'white',
                  border: 'black 10px',
                  borderRadius: '30px',
                  width: '150px',
                }}>Search</Button>
              </div>


            </div>
            <div style={{
              paddingTop: '0px',
              backgroundColor: '#fff',
              rowGap: '20px',
              height: '300px',
              width: '100%',
              paddingLeft: '9%',
              paddingRight: '9%',
              position: 'absolute',
              top: '50%',


            }}>
              <Slide style = {{
                width: '100%',
                height: '300px',
              }}>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div style={{ 'backgroundImage': `url(${slideImage.url})`,
                    height: '300px', }}>
                      <span>{slideImage.caption}</span>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>






          </div>
          <br/>
          <div className="styles.main-content-body" style = {{
            backgroundColor: '#BFC0C1',
            height: '1000px',
            marginTop: '50px',
            marginRight: '15%',
            marginLeft: '15%',
            position: 'relative',
            

          }}>
            <div className = 'styles.position-highlight' style = {{
              paddingTop: '20px',
              justifyContent: 'center',
              color:'black',
              fontSize: '30px',
              fontWeight: 'regular',
              textAlign: 'center',
            }}>
                HIGHLIGHT PROPERTIES
            </div>
            <div style = {{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'space-between',
              alignContent: 'space-between',
              justifyItems: 'space-between',
            }}>
            <LoopCard></LoopCard>
            </div>
            
            
            </div>
            <div>
              <Band></Band>

            </div>








        </div>

      </div>
    </div>
  );
}

export default IndexPage
