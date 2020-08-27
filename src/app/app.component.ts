import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   title = 'angular-tracking';

   constructor(
      private router: Router,
      private gtmService: GoogleTagManagerService
   ) {
   }

   ngOnInit() {

      // Sends pageview event to GTM datalayer
      this.router.events.forEach(item => {
         if (item instanceof NavigationEnd) {
            const gtmTag = {
               event: 'pageview',
               pagePath: item.url
            };
            this.gtmService.pushTag(gtmTag);
         }
      });

   }
}
