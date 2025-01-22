import { Component } from '@angular/core';
import { Menus } from '../../../menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent {
  menus = Menus;
}
