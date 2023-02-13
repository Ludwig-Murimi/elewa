import { Subscription } from 'rxjs';

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Logger } from '@iote/bricks-angular';

import { ActiveChatConnectedStore, ChatsStore } from '@elewa/state/conversations/chats';

import { Chat } from '@elewa/model/conversations/chats';


@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls:  ['./chat-conversation.component.scss']
})
export class ChatConversationComponent implements OnInit, OnChanges
{
  chat: Chat;

  chat$: Subscription;

  isLoading = true;

  constructor(private _activeChat$: ActiveChatConnectedStore,
              private _logger: Logger)
  { }

  ngOnInit()
  {
    if(!this.chat)
    {
      this._activeChat$.get().subscribe((chat) => { if(chat?.id) this.chat = chat;});
    }
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // if(changes['chat'])
    // {
    //   const updatedChat = changes['chat'].currentValue;

    //   if(this.chat$) this.chat$.unsubscribe();
    //   if(updatedChat)
    //   {
    //     this.chat$ = this._chats$.getOne(updatedChat.id).subscribe(chat => this.chat = chat);
    //   }
    //   else{
    //     this.chat = updatedChat;
    //   }
    // }
  }
}