import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',

})
export class AlertService {

  showAlert(type: SweetAlertIcon, title: string, body: string, confirmButtonText: string = 'ok') {
    Swal.fire({
      title,
      text: body,
      icon: type,
      confirmButtonText
    });
  }

  showConfirmation(title: string, body: string, callback: () => any, success?: { title: string; message: string }, cancelCallback?: () => any) {
    Swal.fire({
      title: title,
      text: body,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'confirm',
      cancelButtonText: 'cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
      else {
        cancelCallback && cancelCallback();
      }
    });
  }

  showToast(type: SweetAlertIcon, title: string, position: SweetAlertPosition = 'top-end') {
    const Toast = Swal.mixin({
      toast: true,
      position: position,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      showCloseButton: true,

      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: type,
      title
    });
  }

}

export type SweetAlertPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'center-start'
  | 'center-end'
  | 'center-left'
  | 'center-right'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'bottom-left'
  | 'bottom-right'