import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Patineteweb';
  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogLoginComponent);
  }
}
