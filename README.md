# Angular GTM tracking

Based on Angular Google Tag Manager Service https://www.npmjs.com/package/angular-google-tag-manager

# Pageviews

In app.components.ts I included the GoogleTagManagerService and implemented OnInit from angular core. Then injected the GoogleTagManagerService in the constructor. Then checked the routes in the ngOnInit() method and send a pageview event together with the pagePath to the GTM datalayer each time a route changes.

In GTM dashboard I check whether a custom pageview event in datalayer exists and then fire a Google Analytics and Facebook tag with the pagePath variable as a pageview.

```
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
```

# Events

In mealplan.component.html I added a js-gtm-click class and data-context attribute so I can check for a click in GTM dashboard. When I click event occurs, I check the class and data-context attribute of the element. If the data-context for example is "start-btn" I fire a Google Analytics tag and Facebook tag with a custom add to cart event.

`<a routerLink="/start" routerLinkActive="active" class="btn js-gtm-click" data-context="start-btn">Start meal plan</a>`

# E-commerce / Purchase tracking
