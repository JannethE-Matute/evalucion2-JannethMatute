import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/personas';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-crear-personas',
  templateUrl: './crear-personas.component.html',
  styleUrls: ['./crear-personas.component.css']
})
export class CrearPersonasComponent implements OnInit{

  title="Crear Personas"
  persona:Persona = new Persona()
  cont=1;
  codigo=0;
  constructor(private router:Router,
    private personaService: PersonasService) {
    
    let params=this.router.getCurrentNavigation()?.extras.queryParams
    if(params){
      this.persona=new Persona();
      this.persona.uid=params['uid'];
      this.persona.cedula=params['cedula'];
      this.persona.nombre=params['nombre'];
      this.persona.fecha_nacimiento=params['fecha_nacimiento'];
      this.persona.fecha_nacimiento=params['fecha_nacimiento'];
      this.persona.num_carga_familiar=params['fecha_nacimiento'];
      this.codigo=params['codigo'];
      //this.product=params['product'];

    }
    

   }

  ngOnInit(): void {
  }

  goListPersonas(){
    
    console.log("listado");
    this.router.navigate(['personas/list']);


  }

  guardar(){
    
      if (this.codigo==0) {
        console.log(this.persona);
   
        this.personaService.addPersonaFire(this.persona);
        this.persona=new Persona();
        
      }else{
        
      this.codigo=0;
      }
      this.router.navigate(['personas/list']);

      }

  }

