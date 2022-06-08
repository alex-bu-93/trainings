import { ComponentFixture }        from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ChildComponent }          from './child.component';
import { ChildModule }             from './child.module';

describe('ChildComponent', () => {

  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(() => MockBuilder(ChildComponent, ChildModule));

  beforeEach(() => fixture = MockRender(ChildComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

});

