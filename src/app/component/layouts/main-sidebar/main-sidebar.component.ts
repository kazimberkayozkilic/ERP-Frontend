import { Component } from '@angular/core';
import { Menus } from '../../../menu';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuPipe } from '../../../pipes/menu.pipe';
import { AuthServiceService } from '../../../sevices/auth-service.service';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, MenuPipe],
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent {
  search: string ="";
  menus = Menus;
  constructor(
    public auth: AuthServiceService
  ) {
  }
}
