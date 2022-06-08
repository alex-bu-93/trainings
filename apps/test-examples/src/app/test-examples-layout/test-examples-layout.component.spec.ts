import { ComponentFixture }            from '@angular/core/testing';
import { MockBuilder, MockRender }     from 'ng-mocks';
import { TestExamplesLayoutComponent } from './test-examples-layout.component';
import { TestExamplesLayoutModule }    from './test-examples-layout.module';

describe('TestExampleLayoutComponent', () => {

  let fixture: ComponentFixture<TestExamplesLayoutComponent>;

  beforeEach(() => MockBuilder(TestExamplesLayoutComponent, TestExamplesLayoutModule));

  beforeEach(() => fixture = MockRender(TestExamplesLayoutComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

});
