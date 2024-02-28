import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../News-card/NewsCard'

const Newscontent = ({newArray,newresult}) => {
 
  return (
    <Container maxWidth="md">
        <div style={{display:'flex', justifyContent:'space-between',borderRadius:'10px' ,marginTop:'30px',padding:'20px',backgroundColor:'#f44336'}}>
            <p style={{color:'white', alignItems:'center',justifyContent:'center',marginTop:'10px'}}>For the best experience use  <b> Inshorts </b> app on your smartphone </p>
            <div>
                <img height="50px" width="150px" src='https://assets.inshorts.com/website_assets/images/appstore.png' alt=''/>
                <img  height="50px" width="150px" src='https://assets.inshorts.com/website_assets/images/playstore.png'/>
            </div>
        </div>
        <div>

          {newArray.map((newsitem,index)=>{
            return  <NewsCard  newsitem={newsitem}  />
          })}
          
        </div>
    </Container>
  )
}

export default Newscontent