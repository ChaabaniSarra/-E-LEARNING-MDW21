import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css']
})
export class AddResumeComponent {

  
 resume ={
    img:'',
    resumeTitle :'',
  description:'',
  }
  
  constructor(private service:ServiceService) {}
  
   
    ngOnInit(): void {
    }
  
    AddResume(){
      this.service.addResume(this.resume)
      .subscribe(
        (res)=>{
          this.resume={
            img:'',
           resumeTitle :'',
           description:'',
            };
                  alert("Resume Added Successfully");
        // window.location.reload();
      }  ,(err)=>
      console.error(err));
    
    }
}
