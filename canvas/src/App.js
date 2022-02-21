import './App.css';
import React, { useState, useEffect } from 'react';
import {
    canvasobj1,
    canvasobj2,
    canvasobj3,
    canvasobj4,
    canvasobj5,
    canvasobj6,
    final

}
from "./index.js"
class App extends React.Component{

componentDidMount () {
    function vhh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


        return (v * h) / 100;
        



      }
      
      function vww(v) {
    
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  

        return (v * w) / 100;
     


            
    
        

      }



      function vh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  
        return (v * h) / 100;


      }
      
      function vw(v) {
    
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  
        return (v * w) / 100;

    
      }




    const canvas = document.querySelector("#canvasws");
    const save = document.querySelector("#save");
    const save1 = document.querySelector("#save1");
    
    /*save.onclick = function(){
        save1.src = canvas.toDataURL();
    }*/

    const ctx = canvas.getContext("2d");
    if(!(window.matchMedia("(orientation: portrait)").matches)){
        canvas.height= vww(40);
        canvas.width = vww(40);
    }
    else{
        canvas.height= vhh(40);
        canvas.width = vhh(40);
    }


    
    var mouseX;
    var mouseY;
    var cw=canvas.width;
    var ch=canvas.height;

      
    function reOffset(){
        var BB=canvas.getBoundingClientRect();
        offsetX=BB.left;
        offsetY=BB.top;        
    }
    var offsetX,offsetY;
    reOffset();
    window.onscroll=function(e){ reOffset(); }
    window.onresize=function(e){ reOffset(); }
    canvas.onresize=function(e){ reOffset(); }
    
    var shapes=[];

    var moving=false;
    var startX,startY;
    

    var selectedShapeIndex;
    var card=new Image();
    var card2 = new Image();
    var card3 = new Image();
    var card4 = new Image();
    var card5 = new Image();
    var card6 = new Image();

    window.onload=load;



    window.screen.orientation.addEventListener('change', function() {

        if(window.matchMedia("(orientation: landscape)").matches){
            canvas.height= vww(40);
            canvas.width = vww(40);

            console.log("window.matchMedia((orientation: landscape)).matches");
        }
        else if(window.matchMedia("(orientation: portrait)").matches){
            canvas.height= vhh(40);
            canvas.width = vhh(40);


            console.log("window.matchMedia((orientation: portrait)).matches");
        }
  
        

        cw=canvas.width;
        ch=canvas.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        var position =[];


        for (let i = 0; i < shapes.length; i++){
            position.push({x : shapes[i].x, y :  shapes[i].y});
        }


        while(shapes.length > 0){
            shapes.pop();

        }


        if(document.documentElement.clientWidth < 900 && (window.matchMedia("(orientation: portrait)").matches)){
            
            shapes.push( {x:position[0].x, y:position[0].y, width: vh(5), height: vh(5), image:card3} );
            shapes.push( {x:position[1].x, y:position[1].y, width: vh(5), height: vh(5), image:card4} );
            shapes.push( {x:position[2].x, y:position[2].y, width: vh(18), height: vh(10), image:card6} );
            shapes.push( {x:position[3].x, y:position[3].y, width: vh(5), height: vh(5), image:card5} );
            shapes.push( {x:position[4].x, y:position[4].y, width: vh(20), height: vh(20), image:card2} );
            shapes.push( {x:position[5].x, y:position[5].y, width: vh(20), height:vh(20), image:card} );
      
        }else{
        shapes.push( {x:position[0].x, y:position[0].y, width: vw(5), height: vw(5), image:card3} );
        shapes.push( {x:position[1].x, y:position[1].y, width: vw(5), height: vw(5), image:card4} );
        shapes.push( {x:position[2].x, y:position[2].y, width: vw(18), height: vw(10), image:card6} );
        shapes.push( {x:position[3].x, y:position[3].y, width: vw(5), height: vw(5), image:card5} );
        shapes.push( {x:position[4].x, y:position[4].y, width: vw(20), height: vw(20), image:card2} );
        shapes.push( {x:position[5].x, y:position[5].y, width: vw(20), height:vw(20), image:card} );
        }
        drawAll();


    } );

    







    function load(){
        console.log("LOADING");
        console.log(document.documentElement.clientHeight);
        if(document.documentElement.clientWidth < 900 && (window.matchMedia("(orientation: portrait)").matches)){
            shapes.push( {x: 0, y:0, width: vh(5), height: vh(5), image:card3} );
            shapes.push( {x: 0, y:0, width: vh(5), height: vh(5), image:card4} );
            shapes.push( {x:0, y:0, width: vh(18), height: vh(10), image:card6} );
            shapes.push( {x:0, y:0, width: vh(5), height: vh(5), image:card5} );
            shapes.push( {x:0, y:0, width: vh(20), height: vh(20), image:card2} );
            shapes.push( {x:0, y:0, width: vh(20), height:vh(20), image:card} );

      
        }else{
        shapes.push( {x:0, y:0, width: vw(5), height: vw(5), image:card3} );
        shapes.push( {x:0, y:0, width: vw(5), height: vw(5), image:card4} );
        shapes.push( {x:0, y:0, width: vw(18), height: vw(10), image:card6} );
        shapes.push( {x:0, y:0, width: vw(5), height: vw(5), image:card5} );
        shapes.push( {x:0, y:0, width: vw(20), height: vw(20), image:card2} );
        shapes.push( {x:0, y:0, width: vw(20), height:vw(20), image:card} );
        }
        drawAll();
        canvas.onmousedown=handleMouseDown;
        canvas.onmousemove=handleMouseMove;
        canvas.onmouseup=handleMouseUp;
        canvas.onmouseout=handleMouseOut;

        canvas.ontouchstart=handleMouseDown;
        canvas.ontouchmove=handleMouseMove;
        canvas.ontouchend=handleMouseOut;





    };

 

    card.src=canvasobj1;
    card2.src=canvasobj2;
    card3.src=canvasobj3;
    card4.src=canvasobj4;
    card5.src=canvasobj5;
    card6.src=canvasobj6;




    
    

    function isMouseInShape(mx,my,shape){

        if(shape.image){

            var rLeft=shape.x;
            var rRight=shape.x+shape.width;
            var rTop=shape.y;
            var rBott=shape.y+shape.height;

     /*       console.log("rLEFT - "+ rLeft);
            console.log("rRight - " +rRight );
            console.log("rtop - " + rTop);
            console.log("rbott - " + rBott);
            console.log("MX" + mx);
            console.log("MY" + my);


            */

            if( mx>rLeft && mx<rRight && my>rTop && my<rBott){
                console.log("In shape");
                return(true);
            }
        }
        return(false);
    }
    
    function handleMouseDown(e){

        e.preventDefault();
        e.stopPropagation();
        console.log(e.type);
        if(e.type === 'touchstart'){
            startX = parseInt(e.touches[0].clientX - offsetX);
            startY = parseInt(e.touches[0].clientY - offsetY);


        }
        else{
        startX=parseInt(e.clientX-offsetX);
        startY=parseInt(e.clientY-offsetY);


        }

        for(var i=0;i<shapes.length;i++){
            if(isMouseInShape(startX,startY,shapes[i])){
                selectedShapeIndex=i;
                moving=true;
                return;
            }
        }
    }
    
    function handleMouseUp(e){
        if(!moving){return;}
        e.preventDefault();
        e.stopPropagation();

        moving=false;
    }
    
    function handleMouseOut(e){

        if(!moving){return;}
        e.preventDefault();
        e.stopPropagation();
        moving=false;
    }
    
    function handleMouseMove(e){

        if(!moving){return;}
        e.preventDefault();
        e.stopPropagation();
        console.log(e.type);
        if(e.type === 'touchmove'){
            mouseX = parseInt(e.touches[0].clientX - offsetX);
            mouseY = parseInt(e.touches[0].clientY - offsetY);
    

        }
        else{
            mouseX=parseInt(e.clientX-offsetX);
            mouseY=parseInt(e.clientY-offsetY);
                                                 
        }
     


        var dx=mouseX-startX;
        var dy=mouseY-startY;
        var selectedShape=shapes[selectedShapeIndex];
        selectedShape.x+=dx;
        selectedShape.y+=dy;

        drawAll();

        startX=mouseX;
        startY=mouseY;
    }
    

    function drawAll(){
        ctx.clearRect(0,0,cw,ch);
        
        for(var i=0;i<shapes.length;i++){
            var shape=shapes[i];
            if(shape.image){
                ctx.globalCompositeOperation = 'destination-over';
                ctx.drawImage(shape.image,shape.x,shape.y, shape.width, shape.height);
            }
        }
    }




}





render(){
 
 return(
<div className='canvas'>




    <div id = "google" className='worksheets'>

        <div className='ws'>
            <img id="save1"  src ={final} className="wscanvas">

            </img>
            <p></p>
  
        </div>


    </div>

    <div className='worksheet'>
        <canvas id = "canvasws">


        </canvas>


    </div>




    <div className='menubar'>

        <button id="save" className='save'></button>
        {/*<button className='something'></button>
        <button className='print'></button>
        <button className='draw'></button>
        <button className='eye'></button>
        <button className='zoomin'></button>
        <div className="size"><p>100%</p></div>
        <button className='zoomout'></button>

        */}

 




    </div>


</div>
 );

}
}
export default App;