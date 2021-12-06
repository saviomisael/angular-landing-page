import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OtherPackage } from '../models/other-package.model';

@Injectable()
export class OtherPackageService {
  constructor(private http: HttpClient) {}

  getOtherPackages(): Observable<OtherPackage[]> {
    return this.http.get<OtherPackage[]>('/assets/data/other-packages.json');
  }
}
