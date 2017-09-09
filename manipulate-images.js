$(window).load(function(){

  'use strict';

  function main() {
    // let img1 = $('#img1');
    document.getElementById("img1").onload = function() {
      console.log("I get here")

      let c = document.getElementById("canvas1");
      let ctx = c.getContext("2d");
      let curImg = document.getElementById("img1");
      ctx.drawImage(curImg, 0, 0);
      let imgData = ctx.getImageData(0,0,c.width, c.height)
      console.log(imgData);
    };
    //let img2 =  document.getElementById("img2");
    //let img3 =  document.getElementById("img3");
    //let imgVec = [img1, img2, img3];
    //for (let i = 0; i < imgVec.length; i++) {
      //let canvas = document.getElementById('canvas' + (i + 1));

      //getImageArray(imgVec[i], canvas);
    //}
  }

  function getImageArray(curImg, canvas) {
    // let canvas = document.createElement('canvas');
    curImage.onload = function () {
      let ctx = canvas.getContext('2d');

    }

    let width = 417.11;
    let height = 556.14;
    // canvas.width = width;
    // canvas.height = height;
    // console.log('canvas width', canvas.height);

    var img = new Image;
    img.onload = function(){
      ctx.drawImage(curImg,0,0);
    };
    img.src = 'images/test-1.jpg';
    var imageData = ctx.getImageData(0,0,10,10);
    console.log(imageData);
    // ctx.drawImage(curImg, 0, 0);
    // ctx.height = height;
    // ctx.width = width;
    // console.log(ctx);
    var imgWidth = width;
    var imgHeight = height;
    // let ctx = curImg.getContext("2d");
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height); // x, y, xwidth, yheight
    console.log(imgData);
    transformImage(imgData);
  }

  function transformImage(imgData) {
    let width = imgData.width;
    let height = imgData.height;
  }

  main();
})
