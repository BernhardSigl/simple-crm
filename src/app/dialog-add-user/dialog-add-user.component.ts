import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';

import { FormsModule } from '@angular/forms';

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
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'

})
export class DialogAddUserComponent {
  user = new User();
  currentDate: Date = new Date();
  birthDate!: Date;

  saveUser() {
    this.birthDate = this.currentDate;
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user', this.user);
  }
}
