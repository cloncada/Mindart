import { Component, OnInit } from '@angular/core';
import { ArtistServiceService } from '../../app/services/artist-service.service';
import {MatTableDataSource} from '@angular/material/table';
export interface Artist {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Artist[] = [

];
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

export class ArtistListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'number','email', 'actions'];
  dataSource: MatTableDataSource<Artist>;

  constructor(private service: ArtistServiceService) { }
  artists: any[];
  ngOnInit(): void {
    this.service.getArtists("http://localhost:8080/Artist").subscribe((res: any) => {
     
      this.artists = JSON.parse(JSON.stringify(res));
      this.dataSource = new MatTableDataSource(this.artists);
    console.log(this.artists);

    });
  }


}

