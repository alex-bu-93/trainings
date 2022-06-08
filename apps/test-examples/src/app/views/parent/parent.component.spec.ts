import { ComponentFixture }                 from '@angular/core/testing';
import { of }                               from 'rxjs';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ParentComponent }                  from './parent.component';
import { ParentModule }                     from './parent.module';
import { ParentService }                    from './parent.service';
import { ChildComponent }                   from '../../widgets/child';

const FAKE_VALUE = 1111111111111;

describe('ParentComponent', () => {

  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(() => MockBuilder(ParentComponent, ParentModule)
    .mock(ParentService, {getRequest$: () => of(FAKE_VALUE)})
  );

  beforeEach(() => fixture = MockRender(ParentComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should pass request$ to child', () => {
    ngMocks.findInstance(ChildComponent).request$.subscribe(res => {
      expect(res).toEqual(FAKE_VALUE);
    });
  });

  it('should catch child emitted value in setEmittedEvent function', () => {
    const spy = spyOn(fixture.componentInstance, 'setEmittedEvent');
    ngMocks.findInstance(ChildComponent).emittedEvent.emit(FAKE_VALUE);
    expect(spy).toHaveBeenCalledWith(FAKE_VALUE);
  });

  it('should display child emitted value in template', () => {
    ngMocks.findInstance(ChildComponent).emittedEvent.emit(FAKE_VALUE);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.toString()).toContain(FAKE_VALUE.toString());
  });
});
