import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {

  portfolio: object[] = [
    {
      company: "Tata Chemicals",
      quantity: 220,
      sharePrice: 822,
      value: 180840,
      allocation: 12.0
    },
    {
      company: "Reliance PP",
      quantity: 100,
      sharePrice: 1523,
      value: 152280,
      allocation: 10.1
    },
    {
      company: "HDFC Ltd",
      quantity: 50,
      sharePrice: 2722,
      value: 136100,
      allocation: 9.0
    },
    {
      company: "Muthoot Fin",
      quantity: 90,
      sharePrice: 1455,
      value: 130950,
      allocation: 8.7
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
