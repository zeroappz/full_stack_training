import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  constructor(private toastMsg: ToastrService) {
  }
  showSuccess(message: string, title: string) {
    this.toastMsg.success(message, title);
  }

  showInfo() {
    this.toastMsg.info('Hello world!', 'Toaster Show Information Title');
  }

  showWarning() {
    this.toastMsg.warning('Hello world!', 'Toaster Warning Title');
  }

  showError() {
    this.toastMsg.error('Hello world!', 'Toaster Error Title');
  }
}
