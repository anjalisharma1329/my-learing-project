import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Angular component
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { UserlistComponent } from './userlist/userlist.component';
import { IfelseComponent } from './ifelse/ifelse.component';

const routes: Routes = [

	{path:'login', component: LoginComponent},
	{path:'pipes', component: PipesComponent},
	{path:'userlist', component: UserlistComponent},
	{path:'ifelse', component: IfelseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
