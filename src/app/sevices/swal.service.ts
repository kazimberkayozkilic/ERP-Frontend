import { Injectable } from '@angular/core';
import Swal, {
  SweetAlertGrow,
  SweetAlertHideClass,
  SweetAlertIcon,
} from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor() {}

  callToast(title: string, icon: SweetAlertIcon = 'success') {
    Swal.fire({
      title: title,
      text: '',
      timer: 3000,
      showConfirmButton: false,
      toast: true,
      position: "top-right",
      icon: icon,
    });
  }

  callSwal(
    title: string,
    text: string,
    callBack: () => void,
    confirmButtonText: string = 'Sil',
    icon: SweetAlertIcon = 'question'
  ) {
    Swal.fire({
      title: title,
      text: text,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'Vazgeç',
      icon: icon,
    }).then((res) => {
      if (res.isConfirmed) {
        callBack();
      }
    });
  }
}
