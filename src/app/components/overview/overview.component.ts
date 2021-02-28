import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  items = [
    { text: 'Logga in/ut med sin användare', checked: true },
    { text: 'Updatera sin användare', checked: true },
    { text: 'Ladda upp filer och hämta hem dem.', checked: false },
    { text: 'Se filerna man har under sitt konto.', checked: true },
    { text: 'Enhetstester för skriven kod.', checked: false },
    { text: 'Versionshanterat', checked: true },
    {
      text: 'Avgräsning: Fokus är angular, ingen backend/DB är nödvändigt.',
      checked: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
