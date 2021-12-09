import React from 'react';
import { Card, Avatar } from 'antd';
import { faDollarSign, faFileAlt, faMapMarker,faCube, faBed, faBath, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { Meta } = Card;
const Number = ['one', 'two', 'tree', 'four', 'five', 'six'];

const item = []
for (const number of Number) {
    item.push(
        <Card
            style={{
                width: '100%',
                height: '400px',
                position: 'relative',
            }}
            cover={<img alt="example" src="https://bit.ly/3xZjCd6" />}

        >

            <div style={{
                width: '101%',
                height: '40px',
                backgroundColor: '#000052',
                display: 'flex',
                position: 'absolute',
                top: '160px',
                left: '-1px',
                justifyContent: 'space-around',
                justifyItems: 'center',
                paddingTop: '5px',
                fontSize: '13px',
            }}>
                <p style={{
                    color: '#fff',
                    paddingTop: '5px',
                }}> <FontAwesomeIcon icon={faDollarSign} />  BUY </p>
                <p style={{
                    color: '#fff',
                    paddingTop: '5px',
                }}> <FontAwesomeIcon icon={faFileAlt} />  RENT </p>

            </div>
            <Meta
            />
            <div style={{
                width: '90%',
                display: 'flex',
                fontSize: '16px',
                fontWeight: 'bold',
                position: 'absolute',
                bottom: '140px',
                left: '25px',
                justifyContent: 'space-between',
                justifyItems: 'center',
            }}>
                
                <p>{number}</p>
                
                
            </div>

            <div style={{
                width: '80%',
                display: 'flex',
                position: 'absolute',
                fontSize: '13px',
                bottom: '110px',
                left: '25px',
            }}> 
                <p><FontAwesomeIcon icon={faMapMarker} /> Phrom Prong, Bangkok</p>
            </div>
            <div style={{
                width: '85%',
                display: 'flex',
                position: 'absolute',
                bottom: '70px',
                fontSize: '13px',
                left: '25px',
                justifyContent: 'space-between',
                justifyItems: 'center',
            }}>
                <p><FontAwesomeIcon icon={faCube} />  50 Sq.m </p>
                <p><FontAwesomeIcon icon={faBed} /> 2 Bedroom</p>
                <p><FontAwesomeIcon icon={faBath} /> 2 Bath</p>
            </div>
            <div style={{
                width: '90%',
                display: 'flex',
                position: 'absolute',
                bottom: '65px',
                borderTop: '1px solid black',
                left: '15px',
            }}>
            </div>
            <div style={{
                width: '90%',
                display: 'flex',
                fontSize: '15px',
                fontWeight: 'bold',
                position: 'absolute',
                bottom: '15px',
                left: '25px',
                justifyContent: 'space-between',
                justifyItems: 'center',
            }}>
                
                <p>THB 19,025,000</p>
                <div style = {{
                    display: 'flex',
                    width: '34px',
                    height: '34px',
                    backgroundColor: '#000052',
                    color: 'white',
                    fontSize: '14px',
                    border: '5px solid black',
                    borderRadius: '50%',
                    justifyContent: 'center',
                }}>
                <p ><FontAwesomeIcon icon={faEnvelopeOpenText} /></p>
                </div>
                
                
            </div>


        </Card>
    )

}

const LoopCard = (props) => {
    return (
        <div style={{
            display: 'grid',
            width: '100%',

            gridTemplateColumns: 'repeat(3, 1fr)',
            rowGap: '50px',
            columnGap: '30px',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            alignContent: 'space-between',
            justifyItems: 'space-between',
            paddingTop: '40px',
        }}>
            {item}
            <br />
        </div>
    )

}


export default LoopCard;
