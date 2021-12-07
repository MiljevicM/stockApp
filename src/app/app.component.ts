import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockapp';

  constructor(private router: Router, private _titleService: Title) {}

  ngOnInit() {
  
    this.changeTitle();
    
  }
  
  changeTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        let data = event.snapshot.data;
        if (data["title"]) {
          this._titleService.setTitle("Digit - " + data["title"]);
        } else {
          this._titleService.setTitle("Digit");
        }
      }
    });
  }

}

