import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverController.dismiss()
  }

  github(){
    window.open('https://github.com/derysudrajat','_blank');
    this.popoverController.dismiss()
  }

  medium(){
    window.open('https://medium.com/@dery.io','_blank');
    this.popoverController.dismiss()
  }

  instagram(){
    window.open('https://instagram.com/derysudrajat','_blank');
    this.popoverController.dismiss()
  }

}
