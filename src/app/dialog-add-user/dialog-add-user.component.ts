import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'

})
export class DialogAddUserComponent {
  user = new User();
  currentDate: Date = new Date();
  birthDate!: Date;
  loading = false;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  // #1:
  async saveUser() {
    this.loading = true;
    this.birthDate = this.currentDate;
    this.user.birthDate = this.birthDate.getTime();

    // addDoc variant:
    await addDoc(this.getUsersColRef(), this.user.toJSON()).then((result: any) => {
      console.log("Document written with ID: ", result);
      this.loading = false;
      this.dialogRef.close();
    });
  }

  getUsersColRef() {
    return collection(this.firestore, "users");
  }
}
