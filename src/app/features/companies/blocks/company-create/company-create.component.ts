import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styles: [
  ]
})
export class CompanyCreateComponent implements OnInit {

  @Output() close = new EventEmitter(); 
  @Input() podatakOdRoditelja!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.podatakOdRoditelja)
  }

  cancelModal(){
    this.close.emit();
  }

  clickedOutside(event: any) {
    if (event.target.className === '_modal _modal--columns') {
      this.close.emit();
    }
  }
  
}
