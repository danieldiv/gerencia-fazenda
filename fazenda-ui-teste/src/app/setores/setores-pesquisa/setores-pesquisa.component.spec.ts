import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresPesquisaComponent } from './setores-pesquisa.component';

describe('SetoresPesquisaComponent', () => {
  let component: SetoresPesquisaComponent;
  let fixture: ComponentFixture<SetoresPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoresPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoresPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
