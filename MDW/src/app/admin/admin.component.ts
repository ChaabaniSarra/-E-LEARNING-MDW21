import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


 Teachers:any[]=[];
  constructor(private service:ServiceService) {}

  ngOnInit(): void {
    this.service.getAllTeachers().subscribe(
      (res) => {
        console.log(res);
        this.Teachers=res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  Delete(id:any){
    this.service.deleteTeacher(id).subscribe(
      res=>{
        console.log(res)
        alert("Deleted Successfully");
        window.location.reload();
      },(err) => {
        console.error(err);
      }
    )
    }

   
}