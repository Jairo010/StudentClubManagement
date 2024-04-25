import { Injectable } from '@angular/core';
export interface IMenu{
  title:String,
  url:string,
  icono:string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  listMenu: IMenu[] = [
    {title: 'Miembros', url: '/miembros', icono: ''},
    {title: 'Proyectos', url: '/registroproyectos', icono: ''}
]

  constructor() { }
  getMenu():IMenu[]{
    return[...this.listMenu]
  }
  getMenuByUrl(url: string):IMenu{
    return this.listMenu.find(
      (menu) =>menu.url.toLowerCase() === url.toLowerCase() 
    ) as IMenu
  }
}
