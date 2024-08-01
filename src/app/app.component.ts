import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YanmenuComponent } from "./yanmenu/yanmenu.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { MenubarComponent } from "./menubar/menubar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YanmenuComponent, CommonModule, FormsModule, MegaMenuModule, MenubarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  

  export class AppComponent {

  }