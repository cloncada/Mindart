import { Component, OnInit } from '@angular/core';
import { ListArtistService } from '../../app/services/list-artist.service';
import {MatTableDataSource} from '@angular/material/table';
import {ArtistI} from '../ ../../models/artist.inteface';
import { Location } from '@angular/common';



@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

export class ArtistListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dob', 'number','email', 'actions'];
  dataSource = new MatTableDataSource();


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private artistService: ListArtistService,
    private location: Location) { }

  artistas: any[];

  ngOnInit() {
    this.artistService.getAllArtist().subscribe(res => this.dataSource.data = res);

  }
  onDelete(id: string){
    this.artistService.deleteArtist(id);
  }

  onEdit(element){
    this.artistService.selected =element;

  }

  bttList(){
    this.location.go("/admin-empresas"),
      window.location.reload();
  }



}

