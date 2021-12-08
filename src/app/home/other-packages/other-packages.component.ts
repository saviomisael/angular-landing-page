import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OtherPackageService } from '../shared/services/other-package.service';
import { OtherPackage } from '../shared/models/other-package.model';

@Component({
  selector: 'app-other-packages',
  templateUrl: './other-packages.component.html',
  styleUrls: ['./other-packages.component.scss'],
})
export class OtherPackagesComponent implements OnInit {
  packages$!: Observable<OtherPackage[]>;

  constructor(private service: OtherPackageService) {}

  ngOnInit(): void {
    this.packages$ = this.service.getOtherPackages();
  }

  isFirst(array: OtherPackage[], item: OtherPackage) {
    return array.indexOf(item) === 0;
  }
}
