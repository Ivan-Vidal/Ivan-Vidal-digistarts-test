import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public loginForm: FormGroup;

  valor;
  valor1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      num: [[], Validators.required],
      number: ['', []],
  })
}



  addOrRemove(e, index = 'false') {
    e.preventDefault();
   

    let numero = this.loginForm.controls.number.value;
    let lista  = this.loginForm.controls.num.value;

  

    console.log(lista);

    let list = lista.filter((elem, i, self) => {
      
      return  i === self.indexOf(elem) 
    
    });

    list = list.sort((a,b)=> a - b)

   console.log(list)
   
    if (index != 'false') {
      list.splice(index, 1);
      this.loginForm.patchValue({ num: list });
    } else {
      if (!numero) return;
      list.push(numero);
      this.loginForm.patchValue({ num: list, number:''});
    }

    list = list.sort((a,b)=> a - b)
}
}
