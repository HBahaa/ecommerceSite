import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private translateService: TranslateService){
      this.translateService.setDefaultLang('ar');
      this.translateService.use('ar');  	
  }
}
