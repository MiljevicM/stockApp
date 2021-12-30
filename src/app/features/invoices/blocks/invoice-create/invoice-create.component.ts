import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styles: [
  ]
})
export class InvoiceCreateComponent implements OnInit {

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
    if (event.target.className === '_modal') {
      this.close.emit();
    }
  }

}
