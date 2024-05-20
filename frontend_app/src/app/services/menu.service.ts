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
    {title: 'Miembros', url: '/miembros', icono: '/assets/icons/miembros.png'},
    {title: 'Nuevo Miembro', url: '/registromiembros', icono: '/assets/icons/registromiembro.png'},
    {title: 'Nuevo Proyecto', url: '/registroproyectos', icono: '/assets/icons/registroproyectos.png'},
    {title: 'Proyectos', url: '/proyectos', icono: '/assets/icons/proyectos.png'},
    {title: 'Nueva Tarea', url: '/registrotareas', icono: '/assets/icons/proyectos.png'},
    {title: 'Tareas', url: '/tareas', icono: '/assets/icons/proyectos.png'},
    {title: 'Agregar Club', url: '/clubs', icono: '/assets/icons/reunion.png'}
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
