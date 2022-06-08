import { ComponentFixture }                                         from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks }                         from 'ng-mocks';
import { NzContentComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import { TestExamplesLayoutComponent }                              from './test-examples-layout.component';
import { TestExamplesLayoutModule }                                 from './test-examples-layout.module';

describe('TestExampleLayoutComponent', () => {

  let fixture: ComponentFixture<TestExamplesLayoutComponent>;

  beforeEach(() => MockBuilder(TestExamplesLayoutComponent, TestExamplesLayoutModule));

  beforeEach(() => fixture = MockRender(TestExamplesLayoutComponent));

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have layout elements', () => {
    expect(ngMocks.find(NzLayoutComponent)).toBeTruthy();
    expect(ngMocks.find(NzHeaderComponent)).toBeTruthy();
    expect(ngMocks.find(NzContentComponent)).toBeTruthy();
  });

  it('should have layout min-height 100vh', () => {
    const layoutComponent = ngMocks.find(NzLayoutComponent);
    const nativeElement = layoutComponent.nativeElement;
    expect(nativeElement.getAttribute('style')).toContain('min-height');
    expect(nativeElement.style.getPropertyValue('min-height')).toEqual('100vh');
  });

  it('should have header and content inside of layout', () => {
    expect(ngMocks.find(ngMocks.find(NzLayoutComponent), NzHeaderComponent)).toBeTruthy();
    expect(ngMocks.find(ngMocks.find(NzLayoutComponent), NzContentComponent)).toBeTruthy();
  });

  it('should have white text in header', () => {
    const nEl = ngMocks.find(NzHeaderComponent).nativeElement;
    expect(nEl.getAttribute('class')).toContain('text-white');
  });

  it('should have container-fluid text in content', () => {
    const nEl = ngMocks.find(NzContentComponent).nativeElement;
    expect(nEl.getAttribute('class')).toContain('container-fluid');
  });
});
