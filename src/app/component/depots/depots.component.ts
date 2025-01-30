import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { DepotModel } from '../../models/depot.model';
import { HttpService } from '../../sevices/http.service';
import { DepotPipe } from '../../pipes/depot.pipe';
import { SwalService } from '../../sevices/swal.service';

@Component({
  selector: 'app-depots',
  standalone: true,
  imports: [SharedModule, DepotPipe],
  templateUrl: './depots.component.html',
  styleUrl: './depots.component.css'
})
export class DepotsComponent implements OnInit {
  depots: DepotModel[] = [];
  search: string = '';

  constructor(private http: HttpService, private swal: SwalService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllDepots() {
    this.http.post<DepotModel[]>('Depots/GetAll', {}, (res) => {
      this.depots = res;
    });
  }

  deleteByIdDepo(model: DepotModel){
      this.swal.callSwal("Depo Sil", `${model.name}`,() => {
        this.http.post<string>("Depots/DeleteById", {id:model.id}, (res)=>{
          this.getAllDepots();
          this.swal.callToast(res, "info");
        })
      });
    }

}
