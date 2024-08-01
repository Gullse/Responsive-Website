import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanmenuComponent } from './yanmenu.component';

describe('YanmenuComponent', () => {
  let component: YanmenuComponent;
  let fixture: ComponentFixture<YanmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YanmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
