import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PatineteService } from '../patinete.service';

export class Patinete{
  id : number;
  marca: string;
  modelo: string;
  status = "disponivel";
  local: string;

}
@Component({
  selector: 'app-patinete',
  templateUrl: './patinete.component.html',
  styleUrls: ['./patinete.component.css']
})
export class PatineteComponent implements OnInit {
  displayedColumns: string[] = ['id','marca','modelo','status','local','acoes'];
  dataSourcePatinete =  new MatTableDataSource<Patinete>();
  constructor(private service: PatineteService , public dialog: MatDialog) { }
  ngOnInit(): void {
    this.service.getPatinetes().subscribe(patinetes => this.dataSourcePatinete.data = patinetes);
  }
  openNewDialog(): void{
    const dialogRef = this.dialog.open(MngPatineteDialog, {
      width: '750px',
      data: new Patinete()
    });

    dialogRef.afterClosed().subscribe(patinete =>  {
      this.service.adicionar(patinete).subscribe(patineteId =>{
        this.service.getPatinete(patineteId).subscribe(newPatinete =>{
          this.dataSourcePatinete.data = this.dataSourcePatinete.data.concat(newPatinete);
        })
      });
    })
  }
  openEditDialog(patinete: Patinete): void{
    const dialogRef = this.dialog.open(MngPatineteDialog, {
      width: '750px',
      data: patinete  
    });

    dialogRef.afterClosed().subscribe(patinete =>  {
      this.service.editar(patinete).subscribe(patineteId =>{
        this.dataSourcePatinete.data = this.dataSourcePatinete.data.map(oldPatinete =>{
          if(oldPatinete.id == patinete.id) return patinete;
        })
      });
    })
  }
  excluir(patinete: Patinete): void{
    this.service.remover(patinete.id).subscribe(_=>{
      this.dataSourcePatinete.data = this.dataSourcePatinete.data.filter(oldPatinete => oldPatinete.id != patinete.id);
    })
  }

}
@Component({
  selector: './dialog-mng-patinete',
  templateUrl: './dialog-mng-patinete.html'
})
export class MngPatineteDialog{
  constructor(public dialogRef: MatDialogRef<MngPatineteDialog>,@Inject(MAT_DIALOG_DATA) public data:Patinete){}

  onNoClick(): void{
    this.dialogRef.close();
  }
}