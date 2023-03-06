import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'check-internet';
status = "check-status";
  connection = true;

  constructor(){}

  ngOnInit(): void {
    window.addEventListener("focus",(event)=>{
      let online = navigator.onLine;

      if(online == true)
        {
          this.status = "user is online";
        }
        else{
          this.status = "user is offline";
        }
    })

  }




}

