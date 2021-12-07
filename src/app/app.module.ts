import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelService } from './channel.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './Channel/Channel.component';
import { LandingComponent } from './Landing/Landing.component';
import { NamedChannelComponent } from './Named-channel/Named-channel.component';
import { ChannelEditComponent } from './Channel-Edit/Channel-Edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent,
      ChannelComponent,
      LandingComponent,
      NamedChannelComponent,
      ChannelEditComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
