import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Switch1Page } from './switch1.page';

describe('Switch1Page', () => {
  let component: Switch1Page;
  let fixture: ComponentFixture<Switch1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Switch1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Switch1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
