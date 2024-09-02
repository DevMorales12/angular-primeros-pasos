import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];


  @Output()
  public onDelete:EventEmitter<string>= new EventEmitter();



  onDeleteCharacterById(id? :string):void{
    //Si no viene un id, no hace nada
    if(!id) return;
    //console.log({id});
    this.onDelete.emit(id);
  }


}

