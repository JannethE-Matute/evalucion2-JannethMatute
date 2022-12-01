import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  title = "Listar personas existentes"

  lstPersonas = new Array()
  
  personas:any;

  constructor(private router: Router,
    private personaService: PersonasService) { }

  ngOnInit(): void {
    this.loadPersonas()
  }


  loadPersonas(){
    this.personas = this.personaService.getPersonasFire()
    
    console.log(this.lstPersonas); 
  }

  goNewPersona(){
    console.log("llamando crear persona")
    this.router.navigate(['personas/create'])
  }
}
