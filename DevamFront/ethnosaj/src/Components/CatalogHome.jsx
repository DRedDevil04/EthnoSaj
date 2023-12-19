import React from 'react'
import l1 from "../assets/l1.png"
import l2 from "../assets/l2.png"
import l3 from "../assets/l3.png"
import l4 from "../assets/l4.png"
import l5 from "../assets/l5.png"
import l6 from "../assets/l6.png"
const CatalogHome = () => {
  return (
    <div style={{
        backgroundColor:"rgb(30,30,30)",
        paddingTop:20,
        paddingBottom:40
    }}>
        <div className='row ' style={{
            color:"#FFC300",
            fontSize:40,
            marginBottom:30,
            marginTop:20
        }}>
            <div className='text-center' style={{
                fontFamily:'palatino',
                
            }}>Categories</div>
            
        </div>
    <div className='row'>
        <div className='col'>
            <img src={l1} style={{
                height:300,
                width:300,
                margin:10,
                marginLeft:100
            }} />
        </div>
        <div className='col'>
            <img src={l2} style={{
                height:300,
                width:300,
                margin:10,
                marginLeft:60
            }} />
        </div>
        <div className='col'>
            <a href='https://www.github.com/DRedDevil04'>
            <img  src={l3} style={{
                height:300,
                width:300,
                margin:10
            }} />
            </a>
        </div>


    </div>
     <div className='row'>

     <div className='col'>
            <img src={l4} style={{
                height:300,
                width:300,
                margin:10,
                marginLeft:100
            }} />
        </div>
        <div className='col'>
            <img src={l5} style={{
                height:300,
                width:300,
                margin:10,
                marginLeft:60
            }} />
        </div>
        <div className='col'>
            <img src={l6} style={{
                height:300,
                width:300,
                margin:10
            }} />
        </div>
     </div>
     </div>
  )
}

export default CatalogHome