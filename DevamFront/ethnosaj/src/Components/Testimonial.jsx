import Carousel from 'react-bootstrap/Carousel';
import starboy from "../assets/starboy.jpeg"
import p2 from "../assets/p_3.png"
import p3 from "../assets/p_12.png"
import React from 'react';
function Testimonial() {
  return (
    <div>
    <div className='row'>
      <div className='text-center' style={{
        paddingTop:60,
        fontFamily:"palantino",
        fontSize:50,
        color:"#FFC300"
      }}>Testimonials</div>
    </div>
    <div className='row'>
      <div className='col-3'></div>
    <div className="col-xl-6" style={{
      margin:10,
      border:"2px solid #FFC300",
      borderRadius:50
    }}>
      <div style={{
        margin:50
      }}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <div className='row'>
        <div class="text-center" style={{
          alignItems:'center'
        }}>
            <img src={starboy} class="rounded-circle " style={{
              height:70,
              width:70,
              marginLeft:"45%"
            }}/>
        </div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"white",
              fontSize:30,
              padding:10
            }}>Devam Desai</div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"#D87C07",
              fontSize:30,
              paddingBottom:15
            }}>Ahmedabad</div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"#FFC300",
              fontSize:20
            }}>
            I am a loyal customer of Ethnosaj because of their unbeatable service. Renting ethnic wear has never been this convenient. The range of options is diverse, and the outfits are always in excellent condition. The team is responsive and helpful. A must-try for anyone who loves ethnic fashion!
            </div>
        </div>
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
        <div class="text-center" style={{
          alignItems:'center'
        }}>
            <img src={starboy} class="rounded-circle " style={{
              height:70,
              width:70,
              marginLeft:"45%"
            }}/>
        </div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"white",
              fontSize:30,
              padding:10
            }}>Devam Desai</div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"#D87C07",
              fontSize:30,
              paddingBottom:15
            }}>Ahmedabad</div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"#FFC300",
              fontSize:20
            }}>
            I am a loyal customer of Ethnosaj because of their unbeatable service. Renting ethnic wear has never been this convenient. The range of options is diverse, and the outfits are always in excellent condition. The team is responsive and helpful. A must-try for anyone who loves ethnic fashion!
            </div>
        </div>
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
        <div class="text-center" style={{
          alignItems:'center'
        }}>
            <img src={starboy} class="rounded-circle " style={{
              height:70,
              width:70,
              marginLeft:"45%"
            }}/>
        </div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"white",
              fontSize:30,
              padding:10
            }}>Devam Desai</div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"#D87C07",
              fontSize:30,
              paddingBottom:15
            }}>Ahmedabad</div>
        </div>
        <div className='row'>
            <div className='text-center' style={{
              color:"#FFC300",
              fontSize:20
            }}>
            I am a loyal customer of Ethnosaj because of their unbeatable service. Renting ethnic wear has never been this convenient. The range of options is diverse, and the outfits are always in excellent condition. The team is responsive and helpful. A must-try for anyone who loves ethnic fashion!
            </div>
        </div>
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    <div className='col-3'>{"    "}</div>
    </div>
    </div>
  );
}

export default Testimonial;