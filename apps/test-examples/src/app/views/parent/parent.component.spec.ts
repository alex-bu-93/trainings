import { ComponentFixture }        from '@angular/core/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ParentComponent }         from './parent.component';
import { ParentModule }            from './parent.module';

describe('ParentComponent', () => {

  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(() => MockBuilder(ParentComponent, ParentModule));

  beforeEach(() => fixture = MockRender(ParentComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

});
