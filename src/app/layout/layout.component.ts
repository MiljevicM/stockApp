import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  visibility: boolean = false;
   ngOnInit() {
      this.router.events.pipe(filter(events => events instanceof NavigationEnd), map(evt => this.activatedRoute), map(route => {
         while (route.firstChild) {
            route = route.firstChild;
         }
         return route;
      })).pipe(filter(route => route.outlet === 'primary'), mergeMap(route => route.data)).subscribe(x => x.header === true ? this.visibility = true : this.visibility = false)
}

}
