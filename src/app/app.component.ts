import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinic-management-system';
  someValue:string='';
  someValues:Array<string> = new Array<string>();
  callSomeLogic(){
    this.someValues.push(this.someValue);
    this.someValue='';
  }
}
