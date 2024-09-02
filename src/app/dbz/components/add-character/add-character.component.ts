import { Component, EventEmitter, Output, ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})



export class AddCharacterComponent {

  // Creamos un evento de tipo caracter para conectar el caracter con
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

    public character:Character = {
      name: '',
      power: 0
    }

    emitCharacter():void{
      //Coloca un breakpoint en este punto
      //debugger;
      //console.log('-> add Character');
      //console.log(this.character);

      if(this.character.name.length === 0) return;

      this.onNewCharacter.emit(this.character);

      this.character ={name : '', power : 0};
    }



}
