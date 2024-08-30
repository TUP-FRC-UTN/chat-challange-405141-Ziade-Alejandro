import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { ConversationComponent } from '../conversation/conversation.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MessageComponent,ConversationComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  messages: String[] = []

  onNewMessages(NewMessage: string) {
    this.messages.push(NewMessage)
  }
}
