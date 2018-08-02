import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-basket-popup',
  templateUrl: './basket-popup.component.html',
  styleUrls: ['./basket-popup.component.css']
})
export class BasketPopupComponent implements OnInit {
  scrollOn = false;
  startToFixed = 630;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition, this.scrollOn);
    this.scrollOn = scrollPosition >= this.startToFixed ? true : false;

  }

  getBastketPosition() {
    return this.scrollOn ? 'fixed' : 'absolute';
  }
  getBastketTop() {
    return this.scrollOn ? 40 : 630;
  }


}
