import { Component, OnInit, Input } from '@angular/core';
import { ChannelService, Post } from '../channel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Named-channel',
  templateUrl: './Named-channel.component.html',
  styleUrls: ['./Named-channel.component.scss']
})
export class NamedChannelComponent implements OnInit {

  @Input() data:Post[] =[];
  

  constructor(private channel: ChannelService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.channel.getAllMessages(params['username']).subscribe(data => {
        console.log("Data info", data)
        this.data = data;
      });
    });
  }

}
