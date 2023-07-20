import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent {

  constructor(private router:Router){

  }
  homeButton(){
    this.router.navigate(['/home']);
  }

  aboutButton(){
    this.router.navigate(['/about']);
  }

  educationButton(){
    this.router.navigate(['/education']);
  }

  expButton(){
    this.router.navigate(['/experience']);
  }

  projectButton(){
    this.router.navigate(['/project']);
  }


}
