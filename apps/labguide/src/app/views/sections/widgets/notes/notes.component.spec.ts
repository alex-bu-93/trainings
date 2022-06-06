import { ComponentFixture, TestBed }        from '@angular/core/testing';
import { RequestWrapperComponent }          from '@trainings/request-wrapper';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { of }                               from 'rxjs';
import { NotesComponent }                   from './notes.component';
import { NotesModule }                      from './notes.module';
import { Note }                             from './notes.interface';
import { NotesService }                     from './notes.service';
import { Section }                          from '../../sections.interface';

const FAKE_SECTION = {title: 'fakeTitle'} as Section;
const FAKE_NOTES: Note[] = [{} as Note];

describe('NotesComponent', () => {
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(() => MockBuilder(NotesComponent, NotesModule)
    .mock(NotesService, {getNotes$: () => of(FAKE_NOTES)})
  );

  beforeEach(() => {
    fixture = MockRender(NotesComponent);
    if (document.activeElement) document.activeElement['blur']();
    fixture.componentInstance.section = FAKE_SECTION;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(ngMocks.find(RequestWrapperComponent).componentInstance).toBeTruthy()
  });

  it('should have section title', () => {
    fixture.componentInstance.section = FAKE_SECTION as Section;
    fixture.detectChanges();
    expect(ngMocks.find('p').nativeElement.innerHTML).toContain(FAKE_SECTION.title);
  });

  it('should set inner section and update notes$ request', () => {
    const spy = jest.spyOn(TestBed.inject(NotesService), 'getNotes$');
    fixture.componentInstance.section = {...FAKE_SECTION};
    fixture.detectChanges();
    expect(fixture.componentInstance.section).toEqual(FAKE_SECTION);
    expect(spy).toHaveBeenCalledWith(FAKE_SECTION);
  });

  it('should focus textarea and mark formGroup touched on just single click', () => {
    ngMocks.click(ngMocks.find('button[type="submit"]'));
    fixture.detectChanges();
    expect(ngMocks.find('textarea').nativeElement).toBe(document.activeElement);
    expect(fixture.componentInstance.noteFg.touched).toBe(true);
  });
});
