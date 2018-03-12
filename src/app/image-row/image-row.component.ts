import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.css']
})

export class ImageRowComponent implements OnInit {
selectedRow:Number = -1;
selectedCol:Number = -1;
  
  
  constructor() { }
  displayArray=[
    [0, 2, 4, 6, 8],
    [1, 3, 5, 7]
  ];
  
  bigImageIndex=2; 
  resetDone = true; 
  
  imagesDisplay = [
      "assets/images/1.jpg",
      "assets/images/2.jpg",
      "assets/images/3.jpg",
      "assets/images/4.jpg",
      "assets/images/5.jpg",
      "assets/images/6.jpg",
      "assets/images/7.jpg",
      "assets/images/8.jpg",
      "assets/images/9.jpg"
  ];
  
  
  imagesDisplay1 = [ 
      "assets/BackgroundImages/1.jpg",
      "assets/BackgroundImages/2.jpg",
      "assets/BackgroundImages/3.jpg",
      "assets/BackgroundImages/4.jpg",
      "assets/BackgroundImages/5.jpg",
      "assets/BackgroundImages/6.jpg",
      "assets/BackgroundImages/7.jpg",
      "assets/BackgroundImages/8.jpg",
      "assets/BackgroundImages/9.jpg"
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
