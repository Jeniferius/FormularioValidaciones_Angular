import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '../../../../node_modules/@angular/forms';
import { NgRedux } from '../../../../node_modules/@angular-redux/store';
import { IAppState } from '../../store';
import { Router } from '../../../../node_modules/@angular/router';
import { REGISTRO_STEP2, REGISTRO_STEP1 } from '../../actions';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  formulario: FormGroup;
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      calle: new FormControl('', [Validators.required]),
      num: new FormControl('', [Validators.required]),
      piso: new FormControl('', [Validators.required]),
      letra: new FormControl('', [Validators.required]),
      cpostal: new FormControl('', [Validators.required])
    })
  }

  enviarStep2() {
    // console.log(this.formulario.value);
    this.ngRedux.dispatch({
      type: REGISTRO_STEP1,
      data: this.formulario.value
    })

    this.router.navigate(["/registro", "step3"])
  }

}
