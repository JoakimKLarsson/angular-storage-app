import { SafeResourceUrl } from '@angular/platform-browser';

export interface User {
  username: string;
}

export interface AppFile {
  name: string;
  lastModifiedDate: number;
  size: number;
  type: string;
  url: SafeResourceUrl;
}

export interface Section {
  name: string;
  updated: Date;
}
