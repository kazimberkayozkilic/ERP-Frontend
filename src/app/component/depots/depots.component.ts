import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { DepotModel } from '../../models/depot.model';
import { HttpService } from '../../sevices/http.service';
import { DepotPipe } from '../../pipes/depot.pipe';

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

  constructor(private http: HttpService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllDepots() {
    this.http.post<DepotModel[]>('Depots/GetAll', {}, (res) => {
      this.depots = res;
    });
  }

}
