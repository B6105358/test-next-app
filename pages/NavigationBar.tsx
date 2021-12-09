import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import Link from 'next/link';

//navigation bar yellow backgroud color and set menu on center => buy , rent , list your space ,expenses calculation ,new& article , about us , THB
//style for navigation bar set gridcolumns 1fr 5fr 1fr and 1 gridrow
const stylesNavigationBar = {
    backgroundColor: '#F5F5F5',
    gridColumn: '1/6',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton = {
    backgroundColor: '#F5F5F5',
    gridColumn: '1/2',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton2 = {
    backgroundColor: '#F5F5F5',
    gridColumn: '2/3',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton3 = {
    backgroundColor: '#F5F5F5',
    gridColumn: '3/4',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton4 = {
    backgroundColor: '#F5F5F5',
    gridColumn: '4/5',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton5 = {
    backgroundColor: '#F5F5F5',
    gridColumn: '5/6',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton6 = {
    backgroundColor: '#F5F5F5',
    gridColumn: '6/7',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}

// style for button
const stylesButton7 = {
    backgroundColor: '#F5F5F5',
    gridColumn: '7/8',
    gridRow: '1/2',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '0.5rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}



const Navbar = () => {
    return (
        <div>
            <Head>
                <title>Navigation Bar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={stylesNavigationBar}>
                <div style={stylesButton}>
                    <Link href="/home">
                        <Button>Buy</Button>
                    </Link>
                </div>
                <div style={stylesButton2}>
                    <Link href="/home">
                        <Button>Rent</Button>
                    </Link>
                </div>
                <div style={stylesButton3}>
                    <Link href="/home">
                        <Button>List Your Space</Button>
                    </Link>
                </div>
                <div style={stylesButton4}>
                    <Link href="/home">
                        <Button>Expenses Calculation</Button>
                    </Link>
                </div>
                <div style={stylesButton5}>
                    <Link href="/home">
                        <Button>New & Article</Button>
                    </Link>
                </div>
                <div style={stylesButton6}>
                    <Link href="/home">
                        <Button>About Us</Button>
                    </Link>
                </div>
                <div style={stylesButton7}>
                    <Link href="/home">
                        <Button>THB</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default Navbar

