import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, doc, onSnapshot, query } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new User();
  allUsers: any[] = [];

  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog) {
    // get fs database
    this.subUsers();
  }

  subUsers() {
    const q = query(this.getUsersColRef());
    onSnapshot(q, (querySnapshot) => {
      this.allUsers = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        userData['id'] = doc.id;
        this.allUsers.push(userData);
      });
    });
  }

  getUsersColRef() {
    return collection(this.firestore, "users");
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
    });
  }
}
