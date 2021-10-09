import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevisalinkComponent } from './component/revisalink/revisalink.component';
import { SubirimagenComponent } from './component/subirimagen/subirimagen.component';

const routes: Routes = [
    {path:'SubirImagen',component:SubirimagenComponent},
    {path:'RevisaImagen/:imagen',component:RevisalinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
