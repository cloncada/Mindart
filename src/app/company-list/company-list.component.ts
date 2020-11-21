import { Component, OnInit } from '@angular/core';
import { ListCompanyService } from '../../app/services/list-company.service';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyI} from '../ ../../models/companies.interface';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'nit','number', 'password', 'actions'];
  dataSource = new MatTableDataSource();


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private companyService: ListCompanyService) { }
  company: any[];
  ngOnInit() {
    this.companyService.getAllCompany().subscribe(res => this.dataSource.data = res);

  }
  onDelete(id: string){
    this.companyService.deleteCompany(id);
  }
  onEdit(element){
    this.companyService.selected=element;

  }



}

