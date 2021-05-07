import './App.css';
import React from "react";
import { Controller, Scene} from 'react-scrollmagic';
import {Parallax} from "react-parallax";






const image="https://images.pexels.com/photos/3826670/pexels-photo-3826670.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const image1="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const image3="https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const image2="https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const image4="https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";


function App() {
  
  return (
    
    <div>
    <div className="bcg-parallax">
        <div className="bcg">
        </div>
        <div className="content-wraper">
          <h1>Section with Normal Effect</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div> 
    
      <Parallax bgImage={image1} strength="500" renderLayer={percentage => (
            <div
                style={{
                    position: "absolute",
                    background: `rgba(255, 125, 0, )`,
                    bottom:0,
                    left:`30%`,
                    top:percentage*700-percentage*400,
                    opacity:percentage*1,
                    width: `40%`,
                    height: percentage * 500,
                }}
            >  <h1 style={{textAlign:`center`}}>Section with Parallax Effect</h1>
            <p style={{textAlign:`center` ,fontSize:`20px`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> )}  >
        <div className="img">
          Html inside parallax
        </div>

      </Parallax>
      <Controller>
      <Scene duration="1000" loglevel="100" triggerElement=".abc">
      <Parallax  bgImage={image} strength="100" renderLayer={percentage => (
            <div
                style={{
                    position: "absolute",
                    background: `rgba(255, 125, 0, )`,
                    bottom:0,
                    left:`30%`,
                    top:percentage*700-percentage*400,
                    opacity:percentage*1,
                    width: `40%`,
                    height: percentage * 500,
                }}
            >
               <h1 className="abc" style={{textAlign:`center`}}>Section with Parallax Effect</h1>
                <p style={{textAlign:`center` ,fontSize:`20px`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            </div> )}>
        <div className="img">
          Html inside parallax
        </div>

      </Parallax>
      </Scene>
    </Controller> 
      <Parallax bgImage={image2} strength="500" renderLayer={percentage => (
            <div
                style={{
                    position: "absolute",
                    background: `rgba(255, 125, 0, )`,
                    bottom:0,
                    left:`30%`,
                    top:percentage*700-percentage*400,
                    opacity:percentage*1,
                    width: `40%`,
                    height: percentage * 500,
                }}
            >  <h1 style={{textAlign:`center`}}>Section with Parallax Effect</h1>
            <p style={{textAlign:`center` ,fontSize:`20px`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> )} >
        <div className="img">
          Html inside parallax
        </div>

      </Parallax>
      
      <Parallax bgImage={image3} strength="500"  renderLayer={percentage => (
            <div
                style={{
                    position: "absolute",
                    background: `rgba(255, 125, 0, )`,
                    bottom:0,
                    left:`30%`,
                    top:percentage*700-percentage*400,
                    opacity:percentage*1,
                    width: `40%`,
                    height: percentage * 500,
                }}
            >  <h1 style={{textAlign:`center`}}>Section with Parallax Effect</h1>
            <p style={{textAlign:`center` ,fontSize:`20px`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> )}>
        <div className="img">
          Html inside parallax
        </div>

      </Parallax>
      <Parallax bgImage={image4} strength="500" renderLayer={percentage => (
            <div
                style={{
                    position: "absolute",
                    background: `rgba(255, 125, 0, )`,
                    left:`30%`,
                    bottom:0,
                    top:percentage*700-percentage*400,
                    opacity:percentage*1,
                    width: `40%`,
                    height: percentage * 500,
                }}
            >  <h1 style={{textAlign:`center`}}>Section with Parallax Effect</h1>
            <p style={{textAlign:`center` ,fontSize:`20px`}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div> )} >
        <div className="img">
          Html inside parallax
        </div>

      </Parallax>
      
      </div>
  );
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>

export default App;
