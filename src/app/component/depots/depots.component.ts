import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-depots',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './depots.component.html',
  styleUrl: './depots.component.css'
})
export class DepotsComponent {

}
