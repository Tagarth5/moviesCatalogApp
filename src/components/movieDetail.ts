import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'movieDetail',
  templateUrl: 'movieDetail.html'
})
export class MovieDetailPage {

  myColor: string = 'danger';
  myColor2: string = 'primary';
  
  @Input()
  details: any;

  @Output()
  deleteClicked= new EventEmitter();

  @Output()
  updateClicked= new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

  }

  ionViewDidEnter(){
    console.log(this.details);
  }

  deleteButtonClicked(){
    this.deleteClicked.emit(this.details.id);
  }

  updateButtonClicked(){
    this.updateClicked.emit(this.details);
    console.log(this.details);
  }
}
