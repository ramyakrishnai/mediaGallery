import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
image: any;
  constructor(private cd:ChangeDetectorRef,
    private router:Router) { }
  images = [{image :"../../assets/images/beach.jpg", title: "Beach"},
  {image :"../../assets/images/tiger.jfif", title: "Tiger"},
  {image :"../../assets/images/bench.jfif", title: "Bench"},
  {image :"../../assets/images/bicycle.jpg", title: "Bicycle"},
  {image :"../../assets/images/bike.jpg", title: "Bike"},
  {image :"../../assets/images/flowers.jfif", title: "Flowers"},
  {image :"../../assets/images/house.jpg", title: "House"},
  {image :"../../assets/images/nature.jfif", title: "Nature"},
  {image :"../../assets/images/natureRocks.jfif", title: "Nature Rocks"},
  {image :"../../assets/images/puppy.jfif", title: "Puppy"},
  {image :"../../assets/images/roadgreen.jpg", title: "Trees"},
  {image :"../../assets/images/robo.jpeg", title: "Robo"},
  {image :"../../assets/images/robot-2697683_960_720.webp", title: "Robot"},
  
 
]
  ngOnInit(): void {
  }
  viewImage(image){
    this.image = image;
    this.cd.detectChanges();
  }
  closeImage(){
    this.image = undefined;
    this.cd.detectChanges();
  }
 
}
