import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-album',
  templateUrl: './details-album.component.html',
  styleUrls: ['./details-album.component.css']
})
export class DetailsAlbumComponent implements OnInit {

  constructor() { }

  albumPhotoSrc="./assets/images/dubioza-kolektiv.jpg";
  albumTitle= "Happy Machine";
  performer= "Dubioza Kolektiv";
  year = 2016;
  noSongs =10;
  fullLength ="35 min, 6 sec";
  ngOnInit(): void {
  }

}
