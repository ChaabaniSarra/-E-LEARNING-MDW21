import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent {
Teachers:any[]=[];
constructor(private service:ServiceService) {}
ngOnInit() {
  
//  Update()

}
}
