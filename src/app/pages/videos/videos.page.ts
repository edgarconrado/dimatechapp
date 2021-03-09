import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  title: string = history.state.name;

  constructor() { }

  ngOnInit() {
  }

  openFacebook() {
    window.open('https://www.facebook.com/Dimatech-105177517639131', "_system");
  }

  openYoutube(){
    window.open('https://www.youtube.com/channel/UCGeIwdaUU9xyTQ4rk8yRIBA',"_system");
  }

}
