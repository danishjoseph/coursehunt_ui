import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  isLoggedIn: any;
  menuItems: any;
  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private authService: LoginService
  ) {
    authService.authSubject.subscribe((res) => {
      this.isLoggedIn = res;
      this.renderMenu();
    });
  }

  ngOnInit(): void {
    this.renderMenu();

    //     this.menuItems = [
    //       {
    //           label:'Explore',
    //           icon:'pi pi-fw pi-file',
    //           items:[
    //               {
    //                   label:'Courses',
    //                   icon:'pi pi-fw pi-plus',
    //                   items:[
    //                   {
    //                       label:'Home',
    //                       icon:'pi pi-fw pi-bookmark',
    //                       routerLink:'home'
    //                   },
    //                   {
    //                       label:'Video',
    //                       icon:'pi pi-fw pi-video'
    //                   },

    //                   ]
    //               },
    //               {
    //                   label:'Delete',
    //                   icon:'pi pi-fw pi-trash'
    //               },
    //               {
    //                   separator:true
    //               },
    //               {
    //                   label:'Export',
    //                   icon:'pi pi-fw pi-external-link'
    //               }
    //           ]
    //       },
    //       // {
    //       //     label:'Edit',
    //       //     icon:'pi pi-fw pi-pencil',
    //       //     items:[
    //       //         {
    //       //             label:'Left',
    //       //             icon:'pi pi-fw pi-align-left'
    //       //         },
    //       //         {
    //       //             label:'Right',
    //       //             icon:'pi pi-fw pi-align-right'
    //       //         },
    //       //         {
    //       //             label:'Center',
    //       //             icon:'pi pi-fw pi-align-center'
    //       //         },
    //       //         {
    //       //             label:'Justify',
    //       //             icon:'pi pi-fw pi-align-justify'
    //       //         },

    //       //     ]
    //       // },
    //       // {
    //       //     label:'Users',
    //       //     icon:'pi pi-fw pi-user',
    //       //     items:[
    //       //         {
    //       //             label:'New',
    //       //             icon:'pi pi-fw pi-user-plus',

    //       //         },
    //       //         {
    //       //             label:'Delete',
    //       //             icon:'pi pi-fw pi-user-minus',

    //       //         },
    //       //         {
    //       //             label:'Search',
    //       //             icon:'pi pi-fw pi-users',
    //       //             items:[
    //       //             {
    //       //                 label:'Filter',
    //       //                 icon:'pi pi-fw pi-filter',
    //       //                 items:[
    //       //                     {
    //       //                         label:'Print',
    //       //                         icon:'pi pi-fw pi-print'
    //       //                     }
    //       //                 ]
    //       //             },
    //       //             {
    //       //                 icon:'pi pi-fw pi-bars',
    //       //                 label:'List'
    //       //             }
    //       //             ]
    //       //         }
    //       //     ]
    //       // },
    //       // {
    //       //     label:'Events',
    //       //     icon:'pi pi-fw pi-calendar',
    //       //     items:[
    //       //         {
    //       //             label:'Edit',
    //       //             icon:'pi pi-fw pi-pencil',
    //       //             items:[
    //       //             {
    //       //                 label:'Save',
    //       //                 icon:'pi pi-fw pi-calendar-plus'
    //       //             },
    //       //             {
    //       //                 label:'Delete',
    //       //                 icon:'pi pi-fw pi-calendar-minus'
    //       //             },

    //       //             ]
    //       //         },
    //       //         {
    //       //             label:'Archieve',
    //       //             icon:'pi pi-fw pi-calendar-times',
    //       //             items:[
    //       //             {
    //       //                 label:'Remove',
    //       //                 icon:'pi pi-fw pi-calendar-minus'
    //       //             }
    //       //             ]
    //       //         }
    //       //     ]
    //       // },
    //       // {
    //       //     label:'Quit',
    //       //     icon:'pi pi-fw pi-power-off'
    //       // }
    //   ];
  }

  renderMenu() {
    if (this.isLoggedIn) {
      this.dashboardService.getMenubar().subscribe((response: any) => {
        let menuItems = response.data;
        menuItems.forEach((element: any) => {
          element.items.forEach((listElement: any) => {
            let elementCop = listElement;
            elementCop.command = () => {
              this.navigateToHome(listElement);
            };
            listElement = elementCop;
          });
        });
        this.menuItems = menuItems;
      });
    }
  }
  navigateToHome(item: any) {
    const navExtras: NavigationExtras = {
      state: {
        categoryId: item._id ? item._id : item.id,
        categoryName: item.label,
        pointer: 'home',
      },
    };
    if (item) {
      this.router.navigate(['loading'], navExtras);
    }
  }
}
