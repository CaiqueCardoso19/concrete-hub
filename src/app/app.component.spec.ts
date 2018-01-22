
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ServiceUtil } from './shared/service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule, HttpModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ ServiceUtil ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should have a search', async() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.search);
  // });

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

