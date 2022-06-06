import { ComponentFixture }                                         from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks }                         from 'ng-mocks';
import { LabguideLayoutComponent }                                  from './labguide-layout.component';
import { LabguideLayoutModule }                                     from './labguide-layout.module';
import { NzContentComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';

describe('LabguideLayoutComponent', () => {
  let fixture: ComponentFixture<LabguideLayoutComponent>;

  beforeEach(() => MockBuilder(LabguideLayoutComponent, LabguideLayoutModule));

  beforeEach(() => fixture = MockRender(LabguideLayoutComponent));

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
    const nativeElement: HTMLElement = layoutComponent.nativeElement;
    expect(nativeElement.getAttribute('style')).toContain('min-height');
    expect(nativeElement.style['min-height']).toEqual('100vh');
  });

  it('should have header and content inside layout', () => {
    expect(ngMocks.find(ngMocks.find(NzLayoutComponent), NzHeaderComponent)).toBeTruthy();
    expect(ngMocks.find(ngMocks.find(NzLayoutComponent), NzContentComponent)).toBeTruthy();
  });

  it('should have white text in header', () => {
    const nativeElement: HTMLElement = ngMocks.find(NzHeaderComponent).nativeElement;
    expect(nativeElement.getAttribute('class')).toContain('text-white');
  });

  it('should have fluid container in content', () => {
    const nativeElement: HTMLElement = ngMocks.find(NzContentComponent).nativeElement;
    expect(nativeElement.getAttribute('class')).toContain('container-fluid');
  });
});
