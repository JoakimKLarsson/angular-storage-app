import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [
    'Logga in/ut med sin användare',
    'Updatera sin användare',
    'Ladda upp filer och hämta hem dem.',
    'Se filerna man har under sitt konto.',
    'Enhetstester för skriven kod.',
    'Versionshanterat',
    'Avgräsning: Fokus är angular, ingen backend/DB är nödvändigt.',
  ];
}
