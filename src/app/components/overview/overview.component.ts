import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  items = [
    'Logga in/ut med sin användare',
    'Updatera sin användare',
    'Ladda upp filer och hämta hem dem.',
    'Se filerna man har under sitt konto.',
    'Enhetstester för skriven kod.',
    'Versionshanterat',
    'Avgräsning: Fokus är angular, ingen backend/DB är nödvändigt.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
