import { Component, OnInit } from '@angular/core';
import { Post, ChannelService } from '../channel.service';

@Component({
  selector: 'app-Landing',
  templateUrl: './Landing.component.html',
  styleUrls: ['./Landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: string[] =[];

  posts: string[] = [];

  constructor(private channels: ChannelService) { }

  ngOnInit() {
    this.channels.getAllChannelNames().subscribe(data => {
      console.log("inside landing component", data);
      this.posts = data;
    })
  }

}
