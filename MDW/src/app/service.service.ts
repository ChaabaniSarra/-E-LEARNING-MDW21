import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
course :any[]=[];
Teacher:any[]=[];
Resume:any []=[];
Student:any[]=[];


  constructor(private HTTP : HttpClient) { }
  private URL='http://127.0.0.1:3000/';
// ___________________________________________________________________________________________

  //Teacher 
  addTeacher(Teacher:any){
    return this.HTTP.post<any>(this.URL+'Teacher/addTeacher', Teacher)
   }

   getAllTeachers(){
    return this.HTTP.get<any>(this.URL + "Teacher/getallT")
   }
   getTeacherById( id:string){
     return this.HTTP.get(this.URL+"Teacher/GetByID/"+id);
   
   
   }
   deleteTeacher(id:string){
    return this.HTTP.delete(this.URL+"Teacher//delT/"+id);
   }

   updateTeacher(teacher:any, id: string){
    console.log("update teacher service");
    return this.HTTP.put(this.URL+"Teacher/UpdateT/"+id ,teacher );
   
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
    return  this.HTTP.delete(this.URL+"Course/deleteCourse/" +id );
        }


   updatecourse(id: string , data: any ){
   }

// ______________________________________________________________________________________________
// student

addStudent(Student:any){
  return this.HTTP.post<any>(this.URL+'Student/addStudent', Student)
 }


//  affichage des coures 
 getAllStudents(){
  return this.HTTP.get<any>(this.URL+"Student/getAllStudents", )
  }


 deleteStudent(id:string){
  return  this.HTTP.delete(this.URL+"Student/deleteStudent/" +id );
      }


 updateStudent(id: string , data: any ){
 }
// _______________________________________________________________________________________________
// resume
addResume(Resume:any){

  return this.HTTP.post<any>(this.URL+'Resume/addResume', Resume);
 }


//  affichage des coures 
 getAllResumes(){
  return this.HTTP.get<any>(this.URL+"Resume/getAllResumes" );
  }


 deleteResume(id:string){
  return  this.HTTP.delete(this.URL+"Resume/deleteResume/" +id );
      }


 updateResume(id: string , data: any ){
 }

}
