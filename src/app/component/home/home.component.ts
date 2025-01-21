import { Component } from '@angular/core';
import { BlankComponent } from '../blank/blank.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlankComponent, SectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
