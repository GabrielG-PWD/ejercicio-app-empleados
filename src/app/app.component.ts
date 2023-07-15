import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion de empleados';

  empleados:Empleado[] = [
    new Empleado('juan','diaz','ceo', 5000000),
    new Empleado('maria','carreras','analista jefe', 800000),
    new Empleado('francisco','fernandez','programador', 300000),
    new Empleado('celeste','alanis','programador', 300000),
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.datoNombre, this.datoApellido, this.datoCargo, this.datoSalario)
    this.empleados.push(miEmpleado)
  }

  datoNombre: string = "";
  datoApellido: string = "";
  datoCargo: string = "";
  datoSalario: number = 0;

}
