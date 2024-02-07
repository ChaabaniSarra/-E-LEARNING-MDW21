import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-all-resume',
  templateUrl: './all-resume.component.html',
  styleUrls: ['./all-resume.component.css']
})
export class AllResumeComponent {
  resumes :any;
  constructor(private service:ServiceService) {}
  
   
    ngOnInit(): void {
      this.service.getAllResumes().subscribe(
        (res) => {
          console.log(res);
          this.resumes=res ;
        },
        (err) => {
          console.log(err);
        });
  
    }
  Delete(id:any){
  this.service.deleteResume(id).subscribe(
    res=>{
      console.log(res)
      alert("Deleted Successfully");
      window.location.reload();
    },(err) => {
      console.log(err);
    }
  )
  }
   
}
