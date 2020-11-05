import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Switch2Page } from './switch2.page';

describe('Switch2Page', () => {
  let component: Switch2Page;
  let fixture: ComponentFixture<Switch2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Switch2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Switch2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
