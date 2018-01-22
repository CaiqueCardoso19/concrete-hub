import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { ServiceUtil } from '../shared/service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule, HttpModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ ServiceUtil ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
