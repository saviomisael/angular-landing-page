import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OtherPackageService } from '../shared/services/other-package.service';
import { fillOtherPackageStars } from '../shared/utils/rxjs-operators';
import { OtherPackage as ViewModel } from '../shared/viewmodels/other-package.viewmodel';

@Component({
  selector: 'app-other-packages',
  templateUrl: './other-packages.component.html',
  styleUrls: ['./other-packages.component.scss'],
})
export class OtherPackagesComponent implements OnInit {
  packages$!: Observable<ViewModel[]>;

  constructor(private service: OtherPackageService) {}

  ngOnInit(): void {
    this.packages$ = this.service.getOtherPackages().pipe(fillOtherPackageStars());
  }

  isFirst(array: ViewModel[], item: ViewModel) {
    return array.indexOf(item) === 0;
  }
}
