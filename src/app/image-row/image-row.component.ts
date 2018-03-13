import {Component, OnInit, Input} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';



@Component({
  selector: 'app-image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.css'],
  animations: []
})

export class ImageRowComponent implements OnInit {
  selectedRow: Number = -1;
  selectedCol: Number = -1;

  constructor() {}
  displayGrid1 = [
    [0, 2, 4, 6, 8],
    [1, 3, 5, 7]
  ];
  displayGrid2 = [
    [0, 2, 4, 6, 8],
    [1, 3, 5, 7]
  ];


  bigImageIndex1 = 2;
  bigImageIndex2 = 6;
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

  mouseInEvent(imgNumber: number, a: number) {
  if (!this.resetDone) {
      return;
    }
    this.resetDone = false;
    let topRow = [];
    let bottomRow = [];
    for (let i = 0; i < 9;) {
      if (imgNumber == i) {
        topRow.push(i++);
      } else if (imgNumber - i == 1) {
        topRow.push(i++);
        if (i < 9) {
          topRow.push(i++);
          bottomRow.push(i++);
        }
      } else {
        topRow.push(i++);
        bottomRow.push(i++);
      }

    }
    if (a == 1) {
      this.bigImageIndex1 = imgNumber;
      this.displayGrid1 = [topRow, bottomRow];
    }
    else {
      this.bigImageIndex2 = imgNumber;
      this.displayGrid2 = [topRow, bottomRow];
    }
  }
  mouseOutEvent() {
    this.resetDone = true;
  }
  
}
