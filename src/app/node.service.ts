import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  constructor() {}

  // Simüle edilmiş veri
  getFiles(): Promise<any[]> {
    return Promise.resolve([
      { label: 'Documents', data: 'Documents Folder', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder' },
      { label: 'Work', data: 'Work Folder', expandedIcon: 'pi pi-folder-open', collapsedIcon: 'pi pi-folder' }
    ]);
  }
}