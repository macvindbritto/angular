import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-row1',
  templateUrl: './image-row.component1.html',
  styleUrls: ['./image-row.component.css']
})


export class ImageRowComponent1 implements OnInit {
selectedRow:Number = -1;
selectedCol:Number = -1;
  
  
  constructor() { }
  displayArray=[
    [0, 2, 4, 6, 8],
    [1, 3, 5, 7]
  ];
  
  bigImageIndex=2; 
  resetDone = true; 
  
 
  
   imagesDisplay3 = [
      "assets/images/10.jpg",
      "assets/images/11.jpg",
      "assets/images/12.jpg",
      "assets/images/13.jpg",
      "assets/images/14.jpg",
      "assets/images/15.jpg",
      "assets/images/16.jpg",
      "assets/images/17.jpg",
      "assets/images/18.jpg"
  ];
  
  imagesDisplay2 = [ 
      "assets/BackgroundImages/10.jpg",
      "assets/BackgroundImages/11.jpg",
      "assets/BackgroundImages/12.jpg",
      "assets/BackgroundImages/13.jpg",
      "assets/BackgroundImages/14.jpg",
      "assets/BackgroundImages/15.jpg",
      "assets/BackgroundImages/16.jpg",
      "assets/BackgroundImages/17.jpg",
      "assets/BackgroundImages/18.jpg"
  ];

  ngOnInit() {
  }
  
  mouseInEvent(imgNumber: number, ia: number, ja: number){
    this.selectedRow = ia;
    this.selectedCol = ja;

    if(!this.resetDone){
      return;
    }
    this.resetDone = false;
    let topRow = [];
    let bottomRow = [];
    for(let i = 0; i < 9;){
      if(imgNumber == i){
        topRow.push(i++);
      } else if(imgNumber - i ==1){
        topRow.push(i++);
        if(i < 9){
          topRow.push(i++);
          bottomRow.push(i++);  
        }
      } else{
        topRow.push(i++);
        bottomRow.push(i++);  
      }
      
    }
    this.bigImageIndex = imgNumber;
    this.displayArray = [topRow, bottomRow];
  }

   mouseOutEvent(){
     this.resetDone = true;
   }
}
