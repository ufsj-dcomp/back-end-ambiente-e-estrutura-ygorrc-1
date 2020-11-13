import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogLogin{
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent{

  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    })
  }

}
@Component({
  selector: 'dialog-login.component',
  templateUrl: 'dialog-login.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogLogin) {}
}
