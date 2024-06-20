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
    {title: 'Nuevo Proyecto', url: '/registroproyectos', icono: '/assets/icons/proyectos.png'},
    {title: 'Proyectos', url: '/proyectos', icono: '/assets/icons/proyectos.png'},
    {title: 'Nueva Tarea', url: '/registrotareas', icono: '/assets/icons/registroproyectos.png'},
    {title: 'Tareas', url: '/tareas', icono: '/assets/icons/registroproyectos.png'},
    {title: 'Agregar Club', url: '/clubs', icono: '/assets/icons/reunion.png'},
    {title: 'Clubs', url: '/clubs-list', icono: '/assets/icons/reunion.png'},
    {title: 'Eventos', url: '/eventos', icono: '/assets/icons/reunion.png'},
    {title: 'Agregar Eventos', url: '/events', icono: '/assets/icons/reunion.png'},
    {title: 'Agregrar Universidades', url: '/university', icono: '/assets/icons/reunion.png'},
    {title: 'Universidades', url: '/university-list', icono: '/assets/icons/reunion.png'}
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
