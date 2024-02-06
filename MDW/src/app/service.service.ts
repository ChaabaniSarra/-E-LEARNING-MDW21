import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
course :any[]=[];
Teacher:any[]=[];

  constructor(private HTTP : HttpClient) { }
  private URL='http://127.0.0.1:3000/';

  //Teacher 
  addTeacher(Teacher:any){
    return this.HTTP.post<any>(this.URL+'Teacher/addTeacher', Teacher)
   }

   getAllTeachers(){
    return this.HTTP.get<any>(this.URL + "Teacher/getallT")
   }



  //  ____________________________________________________________________________________________
//course
  addcourse(course:any){
    return this.HTTP.post<any>(this.URL+'Course/addCourse', course)
   }


  //  affichage des coures 
   getAllCourses(){
    return this.HTTP.get<any>(this.URL+"Course/getAllCourses", )
    }


   deletecourse(id:string){

        }
   updatecourse(id: string , data: any ){
   }

}
