import { Component, OnInit } from '@angular/core';
import { ListCompanyService } from '../../app/services/list-company.service';

@Component({
  selector: 'app-fedit-company',
  templateUrl: './fedit-company.component.html',
  styleUrls: ['./fedit-company.component.css']
})
export class FeditCompanyComponent implements OnInit {

  constructor(public companyService: ListCompanyService) { }

  ngOnInit(): void {
  }
  onSaveForm(){
    this.companyService.editCompany(this.companyService.selected);
  }

}
