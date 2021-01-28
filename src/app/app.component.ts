import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  count:number;
  // departments=["computer","physics"];
  public dHeader = [{ departments: 'computer' }, { departments: 'physics'}, { departments: 'chemistry' }];
  
  public Details: object = [];  
   
  SearchId(departments:any) {  
    let obj = this.elements.filter(m => m.departments == this.headElements);  
    this.Details = obj;  
    return this.Details;  
    }  
       
  constructor(){
    this.getDetails();
  }
  
  getDetails() {  
          
    return this.dHeader;  
 }

 public headElements:any=
  ['name', 'Age', 'Email ', 'departments'];
  
public elements :any= [
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics"],
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"],
    },
    {
      name: "Employee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"],
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"],
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics"],
    },
    {
      name: "Employee seven",
      age: 100,
      email: "tom@gmail.com",
      departments: ["MSC"],
    },
  ];


ngOnInit(){
 this.count=Object.keys(this.elements).length;
  console.log(Object.keys(this.elements).length);
}

}