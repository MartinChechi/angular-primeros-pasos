import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    id:uuid(),
    name:'Trunk',
    power:10
  }]

 //onDelete =
@Output()
onDelete:EventEmitter <string>= new EventEmitter(); 

/*  onDeleteCharacter(index:number):void{
  console.log({index});
  this.onDelete.emit(index);
 }
 */


 deleteCharacterById(id?:string):void{
  if(!id)return;
  console.log({id});
  this.onDelete.emit(id);
 }

}
