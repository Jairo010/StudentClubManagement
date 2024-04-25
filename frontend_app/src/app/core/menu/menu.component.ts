import { Component, EventEmitter, Output } from '@angular/core';
import { IMenu, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() onToggleExpanded:EventEmitter<boolean> = new EventEmitter<boolean>

  listMenu:IMenu[]
  expanded=true
  constructor(private menuService:MenuService){
    this.listMenu = menuService.getMenu()
  }

  toggleExpanded(){
    this.expanded = !this.expanded
    this.onToggleExpanded.emit(this.expanded)
  }
}
