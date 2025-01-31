import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { DepotModel } from '../../models/depot.model';
import { HttpService } from '../../sevices/http.service';
import { DepotPipe } from '../../pipes/depot.pipe';
import { SwalService } from '../../sevices/swal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-depots',
  standalone: true,
  imports: [SharedModule, DepotPipe],
  templateUrl: './depots.component.html',
  styleUrl: './depots.component.css',
})
export class DepotsComponent implements OnInit {
  depots: DepotModel[] = [];
  search: string = '';

  @ViewChild('createModalCloseBtn') createModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;

  @ViewChild('updateModalCloseBtn') updateModalCloseBtn:
    | ElementRef<HTMLButtonElement>
    | undefined;

  createModel: DepotModel = new DepotModel();
  updateModel: DepotModel = new DepotModel();
  constructor(private http: HttpService, private swal: SwalService) {}
  ngOnInit(): void {
    this.getAllDepots();
  }

  getAllDepots() {
    this.http.post<DepotModel[]>('Depots/GetAll', {}, (res) => {
      this.depots = res;
    });
  }

  deleteByIdDepo(model: DepotModel) {
    this.swal.callSwal('Depo Sil', `${model.name}`, () => {
      this.http.post<string>('Depots/DeleteById', { id: model.id }, (res) => {
        this.getAllDepots();
        this.swal.callToast(res, 'info');
      });
    });
  }

  createDepot(form: NgForm) {
    if (form.valid) {
      this.http.post<string>('Depots/Create', this.createModel, (res) => {
        this.swal.callToast(res);
        this.createModel = new DepotModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAllDepots();
      });
    }
  }

  getDepot(model: DepotModel) {
    this.updateModel = {...model};
  }

  updateDepot (form: NgForm) {
    if(form.valid){
      this.http.post<string>("Depots/Update", this.updateModel,(res)=> {
        this.swal.callToast(res, "info");
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAllDepots();
      });
    }
  }
}
