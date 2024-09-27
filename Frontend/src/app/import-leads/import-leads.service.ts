import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportLeadsService {

  private indiaMartUrl = 'http://localhost:8080/api/leads/fetch?platform=IndiaMART';

  constructor(private http: HttpClient) {}

  importFromIndiaMart(): Observable<any> {
    return this.http.get<any>(this.indiaMartUrl);
  }
}
