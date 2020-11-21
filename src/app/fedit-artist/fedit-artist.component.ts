import { Component, OnInit } from '@angular/core';
import { ListArtistService } from '../../app/services/list-artist.service';


@Component({
  selector: 'app-fedit-artist',
  templateUrl: './fedit-artist.component.html',
  styleUrls: ['./fedit-artist.component.css']
})
export class FeditArtistComponent implements OnInit {

  constructor(public artistService: ListArtistService) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    this.artistService.editArtist(this.artistService.selected);
  }

}
