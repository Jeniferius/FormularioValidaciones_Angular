import { Component, OnInit } from '@angular/core';
import { NgRedux } from '../../../../node_modules/@angular-redux/store';
import { IAppState } from '../../store';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  registro: any;
  constructor(private ngRedux: NgRedux<IAppState>) { 
    this.registro = this.ngRedux.getState().registro;
  }

  ngOnInit() {
    
  }

}
