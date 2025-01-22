import { Component } from '@angular/core';
import { Menus } from '../../../menu';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent {
  menus = Menus;
}
