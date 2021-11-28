import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';


export interface Post{
    username: string,
    message: string,
    id: string,
    created_on: Date,
    updated_on: Date
}

@Injectable({
    providedIn: 'root'
    
})
export class ChannelService{
    private url = "http://73.19.65.35:3500/api/channel"

    constructor(private http: HttpClient){ }

    getAllChannelNames(): Observable<string[]>{
        console.log("get all channel names fired")
        return this.http.get<string[]>(`${this.url}`);
    }
    getAllMessages(channelName: string): Observable<any>{
        console.log("get all messages of channel: " + channelName + " fired");
        return this.http.get<any>(`${this.url}/${channelName}`);
    }
    createNewMessage(channelName: Post): Observable<Post> {
        console.log("added new message fired");
        return this.http.post<Post>(`${this.url}`,channelName);
    }
    patchMessage(channelName: Post): Observable<Post>{
        console.log("update channel message fired");
        return this.http.patch<Post>(`${this.url}`, channelName)
    }
    deleteMessage(channelName: string): Observable<Post>{
        console.log("channel deleted fired");
        return this.http.delete<Post>(`${this.url}/${channelName}`);
    }
}