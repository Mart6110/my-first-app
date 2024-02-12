import { Routes } from '@angular/router';
import { FrederikComponent } from './components/frederik/frederik.component';
import { ShapeComponent } from './components/shape/shape.component';

export const routes: Routes = [
    { path: 'frederik', component: FrederikComponent },
    { path: 'shape', component: ShapeComponent }
];
