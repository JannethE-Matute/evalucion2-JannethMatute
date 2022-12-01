import { Injectable } from '@angular/core';
import { Persona } from '../domain/personas';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  lstPersonas = new Array();

  personas: any

  private personasCollection: AngularFirestoreCollection<Persona>;
  constructor(private afs: AngularFirestore) { 
    this.personasCollection = afs.collection<Persona>('personas');
  }
  addPersona(persona: Persona){
    this.lstPersonas.push(persona);
  }

  getPersonas(){
    return this.lstPersonas;
  }

  addPersonaFire(persona: Persona){
    const id = this.afs.createId();
    persona.uid = id;
    this.personasCollection.doc(id).set(Object.assign({},persona));
  }

  getPersonasFire(){
    return this.personasCollection.valueChanges();
  }

}
