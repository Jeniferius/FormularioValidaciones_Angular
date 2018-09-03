import { Routes } from "../../node_modules/@angular/router";
import { RegistroComponent } from "./registro/registro.component";
import { Step1Component } from "./registro/step1/step1.component";
import { Step2Component } from "./registro/step2/step2.component";
import { Step3Component } from "./registro/step3/step3.component";

export const appRoutes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "registro/step1"},
    {
        path: 'registro', component: RegistroComponent, children: [
            { path: 'step1', component: Step1Component },
            { path: 'step2', component: Step2Component },
            { path: 'step3', component: Step3Component }
        ]
    }
];