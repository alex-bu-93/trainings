import { ComponentFixture }                 from '@angular/core/testing';
import { RequestWrapperComponent }          from '@trainings/request-wrapper';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { NzTreeComponent }                  from 'ng-zorro-antd/tree';
import { of }                               from 'rxjs';
import { SectionsComponent }                from './sections.component';
import { SectionsModule }                   from './sections.module';
import { SectionsService }                  from './sections.service';
import { Section }                          from './sections.interface';

const FAKE_SECTION: Section = {} as Section;
const FAKE_SECTIONS: Section[] = [FAKE_SECTION];

describe('SectionsComponent', () => {

  let fixture: ComponentFixture<SectionsComponent>;

  beforeEach(() => MockBuilder(SectionsComponent, SectionsModule)
    .mock(SectionsService, {getSections$: () => of(FAKE_SECTIONS)})
  );

  beforeEach(() => {
    fixture = MockRender(SectionsComponent);
    fixture.componentInstance.sectionsRW.data = FAKE_SECTIONS;
    fixture.componentInstance.cdr.markForCheck();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy()
  });

  it('request wrapper should get observable', () => {
    ngMocks.find(RequestWrapperComponent).componentInstance.request$.subscribe(res => expect(res).toEqual(FAKE_SECTIONS));
  });

  it('should have tree', () => {
    expect(ngMocks.find(NzTreeComponent)).toBeTruthy();
  });
});
