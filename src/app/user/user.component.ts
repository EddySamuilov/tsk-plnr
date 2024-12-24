import { Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Using decorator approach
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  
  // The code below is not using a signal. It's just another way to define output args
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  };

  // Using signals approach
  // avatarSignal = input.required<string>();
  // nameSignal = input.required<string>();


  // imagePathSignalled = computed(() => {
  //   return 'assets/users/' + this.avatarSignal();
  // });

  onSelectUser() {
    this.select.emit(this.user.id)
  }
} 






















// THIS IS AN EXAMPLE TO COME BACK LATER
  // export class UserComponent {
  //   // Using signals
  //   selectedUserSignal = signal(DUMMY_USERS[randomIndex]);
  //   imagePathSignal = computed(() => 'assets/users/' + this.selectedUserSignal().avatar)
  //   // Using template (not signals)
  //   selectedUser = DUMMY_USERS[randomIndex];
  //   get imagePath() {
  //     return 'assets/users/' + this.selectedUser.avatar;
  //   }
  //   imagePathSignalled = computed(() => {
  //     return 'assets/users/' + this.selectedUserSignal().avatar;
  //   }
  
  //   onSelectUser() {
  //     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //     this.selectedUser = DUMMY_USERS[randomIndex];
  
  //     // this.selectedUserSignal.set(DUMMY_USERS[randomIndex]);
  //   }
  // }

