import { ComponentFixture }        from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent }            from './app.component';
import { AppModule }               from './app.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => MockBuilder(AppComponent, AppModule));

  beforeEach(() => fixture = MockRender(AppComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
