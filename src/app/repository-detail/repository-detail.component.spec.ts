import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { Location } from '@angular/common';

import { RepositoryDetailComponent } from './repository-detail.component';
import { ServiceUtil } from '../shared/service';

describe('RepositoryDetailComponent', () => {
  let component: RepositoryDetailComponent;
  let fixture: ComponentFixture<RepositoryDetailComponent>;7
  const mockParams = {
    snapshot: { data: { name: 'CaiqueCardoso19', repo: 'cordova-plugin-nativecamera' } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryDetailComponent ],
      imports: [ HttpModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ 
        ServiceUtil, 
        {provide: ActivatedRoute, useValue: mockParams},
        Location
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
