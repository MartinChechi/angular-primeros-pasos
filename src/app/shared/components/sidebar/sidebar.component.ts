import { Component } from '@angular/core';
import { GifsModule } from 'src/app/gifs/gifs.module';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService :GifsService){}
  
  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag:string){
    this.gifsService.searchTag(tag);
    //console.log({newTag});
}
}
