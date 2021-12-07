import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [],
})
export class LayoutComponent implements OnInit {
  headerFooter: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.headerFooter = event.url !== '/login';
      }
    });
  }
}
