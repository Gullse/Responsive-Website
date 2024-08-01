import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ScrollerModule } from 'primeng/scroller';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-yanmenu',
  standalone: true,
  imports: [ScrollerModule, ButtonModule, PanelMenuModule, SidebarModule, CommonModule],
  templateUrl: './yanmenu.component.html',
  styleUrls: ['./yanmenu.component.css']
})
export class YanmenuComponent implements OnInit {
  items: MenuItem[] = [];
  scrollerHeight: string = '200px'; 
  sidebarVisible: boolean = false; 
  ngOnInit() {
    this.items = [
      this.createMenuItem('Users', 'pi pi-users', [
        this.createMenuItem('New', '', [
          this.createMenuItem('Member'),
          this.createMenuItem('Group')
        ]),
        this.createMenuItem('Search')
      ]),
      this.createMenuItem('Tasks', 'pi pi-server', [
        this.createMenuItem('Add New'),
        this.createMenuItem('Pending'),
        this.createMenuItem('Overdue')
      ]),
      this.createMenuItem('Reports', 'pi pi-chart-line', [
        this.createMenuItem('Sales'),
        this.createMenuItem('Expenses'),
        this.createMenuItem('Profits')
      ]),
      this.createMenuItem('Settings', 'pi pi-cog', [
        this.createMenuItem('General'),
        this.createMenuItem('Account'),
        this.createMenuItem('Privacy')
      ]),
      this.createMenuItem('Help', 'pi pi-question-circle', [
        this.createMenuItem('FAQ'),
        this.createMenuItem('Contact Support')
      ]),
      this.createMenuItem('Profile', 'pi pi-user', [
        this.createMenuItem('View Profile'),
        this.createMenuItem('Edit Profile')
      ]),
      this.createMenuItem('Notifications', 'pi pi-bell', [
        this.createMenuItem('All Notifications'),
        this.createMenuItem('Unread Notifications')
      ]),
      this.createMenuItem('Messages', 'pi pi-envelope', [
        this.createMenuItem('Inbox'),
        this.createMenuItem('Sent'),
        this.createMenuItem('Drafts')
      ]),
      this.createMenuItem('Files', 'pi pi-file', [
        this.createMenuItem('Documents'),
        this.createMenuItem('Images'),
        this.createMenuItem('Videos')
      ]),
      this.createMenuItem('Calendar', 'pi pi-calendar', [
        this.createMenuItem('Today'),
        this.createMenuItem('Upcoming'),
        this.createMenuItem('Past Events')
      ]),
   
    this.createMenuItem('Reports', 'pi pi-chart-line', [
      this.createMenuItem('Sales'),
      this.createMenuItem('Expenses'),
      this.createMenuItem('Profits')
    ]),
      this.createMenuItem('Calendar', 'pi pi-calendar', [
        this.createMenuItem('Today'),
        this.createMenuItem('Upcoming'),
        this.createMenuItem('Past Events')
      ]),
      this.createMenuItem('Settings', 'pi pi-cog', [
        this.createMenuItem('General'),
        this.createMenuItem('Account'),
        this.createMenuItem('Privacy')
      ]),
      this.createMenuItem('Tasks', 'pi pi-server', [
        this.createMenuItem('Add New'),
        this.createMenuItem('Pending'),
        this.createMenuItem('Overdue')
      ]),
      this.createMenuItem('Notifications', 'pi pi-bell', [
        this.createMenuItem('All Notifications'),
        this.createMenuItem('Unread Notifications')
      ]),
      this.createMenuItem('Profile', 'pi pi-user', [
        this.createMenuItem('View Profile'),
        this.createMenuItem('Edit Profile')
      ]),
      this.createMenuItem('Calendar', 'pi pi-calendar', [
        this.createMenuItem('Today'),
        this.createMenuItem('Upcoming'),
        this.createMenuItem('Past Events')
      
      ]),
    ];
    this.setScrollerHeight(); 
  }

  createMenuItem(label: string, icon?: string, items?: MenuItem[]): MenuItem {
    return { key: label.toLowerCase(), label, icon, items };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setScrollerHeight(); 
  }

  setScrollerHeight() {
    if (window.innerWidth >= 1024) { // xl ve üstü ekranlar için
      this.scrollerHeight = '730px';
    } else {
      this.scrollerHeight = '200px';
    }
  }

  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.items.every((menuItem) => menuItem.expanded);
  }
}
