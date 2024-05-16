import { Component } from '@angular/core';
import { HelloworldService } from 'src/app/services/helloworld.service';

@Component({
  selector: 'app-hello2',
  templateUrl: './hello2.component.html',
  styleUrls: ['./hello2.component.css']
})
export class Hello2Component {

  constructor(private hello:HelloworldService){}

  function()
  {
    this.hello.add
  }
}
