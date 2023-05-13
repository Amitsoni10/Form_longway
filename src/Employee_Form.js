import { LitElement, css, html } from 'lit';
import './Address-form.js';
import {repeat} from 'lit/directives/repeat.js';
import { department,designation,emaildata } from './assets/data.js';
import './Address-form.js'


export class EmployeeForm extends LitElement {


  static get properties() {
    return {
      name: { type: String },
      nameError: { type: String },
      empcode:{type:String},
      empcodeError:{type:String},
      emailtype:{type:String},
      email: { type: String },
      emailError: { type: String },
      department:{type:String},
      departmentError:{type:String},
      designation:{type:String},
      designationError:{type:String},
      primarynumber:{type:String},
      primarynumberError:{type:String},
      secondarynumber:{type:String},
      secondarynumberError:{type:String},
      emergencynumber:{type:String},
      emergencynumberError:{type:String},
      zipcode:{type:String},
      zipcodeError:{type:String},
      Employees:{type:Array}
    };
  }



  constructor() {
    super()
    this.name="";
    this.nameError="";
    this.empcode="";
    this.empcodeError="";
    this.emailtype="";
    this.email="";
    this.emailError="";
    this.department="";
    this.departmentError="";
    this.designation="";
    this.designationError="";
    this.primarynumber="";
    this.primarynumberError="";
    this.secondarynumber="";
    this.secondarynumberError="";
    this.emergencynumber="";
    this.emergencynumberError="";
    this.zipcode=""
    this.zipcodeError=""
    this.Employees=[];

  }
  

 
  _submitForm(e) {
  
    e.preventDefault();
  
    // Name Validation
    if (!this.name) {
      this.nameError = 'Please enter your name';
    }else if(this.name.length>40){
      this.nameError = 'Length exceeds 40 character';
    } else {
      this.nameError = '';
    }

     // Employee code Validation 
    if (!this.empcode) {
      this.empcodeError = 'Please enter empcode';
    }else if(this.empcode.length>7){
      this.empcodeError = 'Invalid Empcode';
    }else if(this.empcode.match(/[A-Z]{1}[0-9]{6}/)  ||  this.empcode.match(/[0-9][A-Z]{1}[0-9]{5}/)  || this.empcode.match(/[0-9]{2}[A-Z]{1}[0-9]{4}/) || this.empcode.match(/[0-9]{3}[A-Z]{1}[0-9]{3}/)  || this.empcode.match(/[0-9]{4}[A-Z]{1}[0-9]{2}/) || 
    this.empcode.match(/[0-9]{5}[A-Z]{1}[0-9]/) ||  this.empcode.match(/[0-9]{6}[A-Z]{1}/) ){
      this.empcodeError = '';
    } else {
      this.empcodeError = 'Invalid empcode';
    }


  
    if (!this.email) {
      this.emailError = 'Please enter your email';
    } else {
      this.emailError = '';
    }


    if (!this.zipcode) {
      this.zipcodeError = 'Please enter your zipcode';
    } else {
      this.zipcodeError = '';
    }


    // primary Number Validation
    if (!this.primarynumber) {
      this.primarynumberError = 'Please enter your number';
    }
    else if(this.primarynumber.length>10 || this.primarynumber.length<10  || !this.primarynumber.match(/[0-9]{10}/)){
      this.primarynumberError = 'Invalid Number';
    }
    else if(this.primarynumber.match(/[0-9]{10}/)){
      this.primarynumberError = '';
    } 


    // Secondary Number Validation
    if (!this.secondarynumber) {
      this.secondarynumberError = 'Please enter your number';
    }
    else if(this.secondarynumber.length>10 || this.secondarynumber.length<10  || !this.secondarynumber.match(/[0-9]{10}/)){
      this.secondarynumberError = 'Invalid Number';
    }
    else if(this.secondarynumber.match(/[0-9]{10}/)){
      this.secondarynumberError = '';
    } 


    // Emergency Number Validation
    if (!this.emergencynumber) {
      this.emergencynumberError = 'Please enter your number';
    }
    else if(this.emergencynumber.length>10 || this.emergencynumber.length<10  || !this.emergencynumber.match(/[0-9]{10}/)){
      this.emergencynumberError = 'Invalid Number';
    }
    else if(this.emergencynumber.match(/[0-9]{10}/)){
      this.emergencynumberError = '';
    } 




  
    // Check if there are any error messages
    if (!this.nameError && !this.empcodeError && !this.emailError  && !this.primarynumberError && !this.secondarynumberError && !this.emergencynumberError ){
      // Get the form element and submit it
      
      let Employee = {
        name:this.name,
        email:this.email,
        EmployeeCode:this.empcode,
        department:this.department,
        designation:this.designation,
        Email:{

        },
        contact:{
          primary:this.primarynumber,
          secondary:this.secondarynumber,
          emergency:this.emergencynumber
            }
      }
      this.Employees.push(Employee)
      const form = this.renderRoot.querySelector('form');
      form.reset();
      this.name="";
      this.nameError="";
      this.empcode="";
      this.empcodeError="";
      this.emailtype="";
      this.email="";
      this.emailError="";
      this.department="";
      this.departmentError="";
      this.designation="";
      this.designationError="";
      this.primarynumber="";
      this.primarynumberError="";
      this.secondarynumber="";
      this.secondarynumberError="";
      this.emergencynumber="";
      this.emergencynumberError="";
      alert("form submitted successfully")
      console.log(this.Employees)
      localStorage.setItem("MyEmployeeList", JSON.stringify(this.Employees));

      
    }
  }
checkname(){
  if (!this.name) {
    this.nameError = 'Please enter your name';
  }else if(this.name.length>=4){
    this.nameError = 'Length exceeds 40 character';
  } else {
    this.nameError = '';
  }

}


  render() {
    return html`
    <div class="form-container">

    <form @submit="${this._submitForm}">

      <label>
        Name:
        <input type="text" @input=${(e)=>this.name=e.target.value} @keyup=${this.checkname}>
        <p class="error">${this.nameError}</p>
      </label>

      <label>
        Employee Code:
        <input type="text" @input=${(e)=>this.empcode=e.target.value}>
        <p class="error">${this.empcodeError}</p>
      </label>

      <label >Email Type:
      <select name="email" id="email" @input=${(e)=>this.emailtype=e.target.value} >
          ${repeat(
            emaildata,(items)=>
            html`<option >${items.email}</option>`)} 
      </select>
        <p class="error">${this.departmentError}</p>

      </label>

      

      <label>
        Email:
        <input type="email"  @input=${(e)=>this.email=e.target.value}>
        <p class="error">${this.emailError}</p>
      </label>


      <label >Choose a Designation:
      <select name="designation" id="designation" @input=${(e)=>this.designation=e.target.value} >
     
          ${repeat(
            designation,(items)=>
            html`<option >${items.designation}</option>`)} 
      </select>
        <p class="error">${this.departmentError}</p>

      </label><br><br>



      <label >Choose a Department:
      <select name="department" id="department" @input=${(e)=>this.department=e.target.value} >

          ${repeat(
            department,(items)=>
            html`<option >${items.department}</option>`)} 
      </select>
        <p class="error">${this.departmentError}</p>

      </label><br><br>

      <address-form></address-form>

      <label>
        Primary Number:
        <input  @input=${(e)=>this.primarynumber=e.target.value}>
        <p class="error">${this.primarynumberError}</p>
      </label>

      <label>
        Secondary Number:
        <input  @input=${(e)=>this.secondarynumber=e.target.value}>
        <p class="error">${this.secondarynumberError}</p>
      </label>

      <label>
        Emergency Number:
        <input  @input=${(e)=>this.emergencynumber=e.target.value}>
        <p class="error">${this.emergencynumberError}</p>
      </label>



      <button type="submit">Submit</button>
    </form><br><br>

    </div>
    `
  }

  
 

  static get styles() {
    return css`
    .form-container{
      border:1px solid black;
      text-align:center;
      padding:10px;

    
    }
    label {
      display: block;
      margin: 0px 500px;
    }
    input {
      width: 100%;
      padding: 5px;
      margin-top: 5px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    .error {
      font-size:13px;
      color: red;
    }
    `
  }






}

customElements.define('employee-form', EmployeeForm)
