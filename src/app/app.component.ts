import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getValue1 (i){
  console.warn(i.target.value)
  }
  getValue2 (i){
  console.warn(i)
  }
  }
