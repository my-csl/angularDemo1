import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
