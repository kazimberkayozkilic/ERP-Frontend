import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private swal: SwalService) {}

  errorHandler(err: HttpErrorResponse) {
    console.log('403 Hata Yanıtı:', err.error);

    if (err.status === 403) {
      if (Array.isArray(err.error?.errorMessages)) {
        let errorMessage = '';
        for (const e of err.error.errorMessages) {
          errorMessage += e + '\n';
        }
        this.swal.callToast(errorMessage, 'error');
      } else {
        this.swal.callToast('E-mail ve Şifre Giriniz.', 'error');
      }
    } else if (err.status === 500) {
      const errorMessage = Array.isArray(err.error?.errorMessages)
        ? err.error.errorMessages[0]
        : 'Sunucu hatası oluştu.';
      this.swal.callToast(errorMessage, 'error');
    } else {
      this.swal.callToast('Beklenmeyen bir hata oluştu.', 'error');
    }
  }
}
