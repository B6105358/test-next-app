import React from 'react';


const imdSrc = ["https://cdn-icons-png.flaticon.com/512/174/174848.png",
                "https://cdn-icons-png.flaticon.com/512/174/174855.png",
                "https://cdn-icons-png.flaticon.com/512/174/174883.png",
                "https://cdn-icons-png.flaticon.com/512/174/174876.png",]

const imgs = []
for (let i = 0; i < imdSrc.length; i++) {
    imgs.push(<img src={imdSrc[i]}  style = {{
        width: '3%',
        height: '3%',

    }} alt="social media icon" />)
}

const Band = () => {
    return (
        <div style={{ 
            backgroundImage: `url(https://fysprodstore.blob.core.windows.net/images/project/6f0ce40f-1dd4-44a8-ae3a-46986175404f/185-rajadamri-view-park-3.jpg)`,
            width: '100%',
            height: '150px',
            position: 'relative',
        }}>
            <div style={{ 
            position: 'absolute',
            fontFamily: "Arial",
            fontSize: "20px",
            textAlign: "center",
            top: '15%',
            left: '30%',
            color: "white",
        }}>
            <p>
                Listings from every real estane firms in Bangkok and Pattaya.
            </p>
        </div>
        <div style={{ 
            width: '100%',
            display: 'flex',
            columnGap: '35px',
            position: 'absolute',
            justifyContent: 'center',
            transform: 'translateY(160%)',
        }}>
            {imgs}
        </div>
            
        </div>
    )
        
}

export default Band;

