import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Landing/Landing.component';
import { NamedChannelComponent } from './Named-channel/Named-channel.component';
const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'posts/:username', component:NamedChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
