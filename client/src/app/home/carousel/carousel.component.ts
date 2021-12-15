import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('img1') public img1: ElementRef<HTMLImageElement>;
  @ViewChild('img2') public img2: ElementRef<HTMLImageElement>;
  @ViewChild('img3') public img3: ElementRef<HTMLImageElement>;
  public description = 'Kebabs';
  public param: string = this.description
    .slice(0, this.description.length - 1)
    .toLowerCase();
  constructor() {}

  ngOnInit(): void {
  }
  slideLeft(): void {
    if (this.img1.nativeElement.classList.contains('active')) {
      this.img1.nativeElement.classList.remove('active');
      this.img3.nativeElement.classList.add('active');
      this.description = 'Burgers';
      this.param = this.description
        .slice(0, this.description.length - 1)
        .toLowerCase();
    } else if (this.img2.nativeElement.classList.contains('active')) {
      this.img2.nativeElement.classList.remove('active');
      this.img1.nativeElement.classList.add('active');
      this.description = 'Kebabs';
      this.param = this.description
        .slice(0, this.description.length - 1)
        .toLowerCase();
    } else if (this.img3.nativeElement.classList.contains('active')) {
      this.img3.nativeElement.classList.remove('active');
      this.img2.nativeElement.classList.add('active');
      this.description = 'Tacos';
      this.param = this.description
        .slice(0, this.description.length - 1)
        .toLowerCase();
    }
  }
  slideRight(): void {
    if (this.img1.nativeElement.classList.contains('active')) {
      this.img1.nativeElement.classList.remove('active');
      this.img2.nativeElement.classList.add('active');
      this.description = 'Tacos';
      this.param = this.description
        .slice(0, this.description.length - 1)
        .toLowerCase();
    } else if (this.img2.nativeElement.classList.contains('active')) {
      this.img2.nativeElement.classList.remove('active');
      this.img3.nativeElement.classList.add('active');
      this.description = 'Burgers';
      this.param = this.description
        .slice(0, this.description.length - 1)
        .toLowerCase();
    } else if (this.img3.nativeElement.classList.contains('active')) {
      this.img3.nativeElement.classList.remove('active');
      this.img1.nativeElement.classList.add('active');
      this.description = 'Kebabs';
      this.param = this.description
        .slice(0, this.description.length - 1)
        .toLowerCase();
    }
  }
}
