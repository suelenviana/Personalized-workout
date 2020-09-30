import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoTreinoPage } from './novo-treino.page';

describe('NovoTreinoPage', () => {
  let component: NovoTreinoPage;
  let fixture: ComponentFixture<NovoTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoTreinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
