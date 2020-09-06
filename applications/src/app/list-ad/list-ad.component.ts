import { Component, OnInit } from '@angular/core';
import Application from "../interfaces/interface_ad";
import applicationMock from "../mock.api";

@Component({
  selector: 'app-list-ad',
  templateUrl: './list-ad.component.html',
  styleUrls: ['./list-ad.component.sass']
})
export class ListAdComponent implements OnInit {

  aplication: Application[] = applicationMock;

  constructor() { }

  ngOnInit(): void {
  }

}
