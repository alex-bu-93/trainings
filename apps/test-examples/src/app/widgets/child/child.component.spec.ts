import { ComponentFixture }                 from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { finalize, of }                     from 'rxjs';
import { ChildComponent }                   from './child.component';
import { ChildModule }                      from './child.module';

describe('ChildComponent', () => {

  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(() => MockBuilder(ChildComponent, ChildModule));

  beforeEach(() => fixture = MockRender(ChildComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call onSubscribe method on btn click', () => {
    const spy = spyOn(fixture.componentInstance, 'onSubscribe');
    ngMocks.click(ngMocks.find('.subscription-btn'));
    expect(spy).toHaveBeenCalled();
  });

  it('should subscribe to request$ on btn click', (done) => {
    fixture.componentInstance.request$ = of(null).pipe(finalize(() => done()));
    fixture.detectChanges();
    ngMocks.click(ngMocks.find('.subscription-btn'));
  });

  it('should subscribe to request$ on btn click (2)', async () => new Promise<void>((resolve) => {
    fixture.componentInstance.request$ = of(null).pipe(finalize(() => resolve()));
    fixture.detectChanges();
    ngMocks.click(ngMocks.find('.subscription-btn'));
  }));

  it('should call onTapEvent on request$ subscription', (done) => {
    const tapSpy = spyOn(fixture.componentInstance, 'onTapEvent');
    fixture.componentInstance.request$ = of(null).pipe(
      finalize(() => { expect(tapSpy).toHaveBeenCalled(); done() })
    );
    fixture.detectChanges();
    ngMocks.click(ngMocks.find('.subscription-btn'));
  });
});
