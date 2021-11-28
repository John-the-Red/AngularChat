import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Post, ChannelService } from '../channel.service';

@Component({
  selector: 'app-Channel',
  templateUrl: './Channel.component.html',
  styleUrls: ['./Channel.component.scss']
})
export class ChannelComponent implements OnInit {
@Input() channel: string="";
  constructor(private channels: ChannelService) { }

  ngOnInit() {
    
  }

}
