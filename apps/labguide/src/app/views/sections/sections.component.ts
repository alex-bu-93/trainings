import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators }                               from '@angular/forms';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode }                   from 'ng-zorro-antd/tree';
import { NzButtonComponent }                                                from 'ng-zorro-antd/button';
import { NzModalComponent }                                                 from 'ng-zorro-antd/modal';
import { finalize, map, Observable, tap }                                   from 'rxjs';
import { SectionsService }                                                  from './sections.service';
import { Section }                                                          from './sections.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'labguide-sections',
  templateUrl: 'sections.component.html',
  styles: [`::ng-deep nz-tree-node-title { width: 100% }`]
})
export class SectionsComponent {

  @ViewChild(NzTreeComponent) treeComponent: NzTreeComponent;

  sections$ = this.getSections$();
  section: Section;
  sectionFg = new FormGroup({
    _id: new FormControl(),
    title: new FormControl(null, Validators.required),
    parentId: new FormControl()
  });

  isSubmitSectionModalVisible: boolean;

  expandedKeys: string[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private service: SectionsService
  ) {
  }

  selectSection(node: NzTreeNode) {
    this.section = node?.origin as Section;
    if (!node) return;
    node.isSelected = true;
    const parentNode = node.getParentNode();
    if (parentNode) parentNode.isExpanded = true;
  }

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    const node = data instanceof NzTreeNode ? data : data.node;
    if (node) node.isExpanded = !node.isExpanded;
  }

  getSections$(selectedKey?: string) {
    const expandedKeys = (this.treeComponent?.getExpandedNodeList() || []).map(node => node.key);
    return this.service.getSections$().pipe(
      map(sections => transformToTree(sections, expandedKeys)),
      tap(() => setTimeout(() => {
          this.expandedKeys = expandedKeys;
          this.cdr.markForCheck();
          const treeNode = selectedKey && this.treeComponent.getTreeNodeByKey(selectedKey);
          if (treeNode) this.selectSection(treeNode);
        }, 10)
      ));
  }

  getPostRq$(sectionModal: NzModalComponent): Observable<unknown> | void {
    sectionModal['isLoading'] = true;
    return this.service.postSection$(this.sectionFg.value).pipe(
      tap(id => this.sections$ = this.getSections$(id)),
      tap(() => this.isSubmitSectionModalVisible = false),
      tap(() => this.sectionFg.reset()),
      finalize(() => { sectionModal['isLoading'] = false; this.cdr.markForCheck(); })
    );
  }

  getDeleteRq$(btn: NzButtonComponent, node: NzTreeNode) {
    btn['isLoading'] = true;
    return this.service.deleteSection$(node.origin.key).pipe(
      tap(() => this.sections$ = this.getSections$()),
      finalize(() => { btn['isLoading'] = false; this.cdr.markForCheck(); })
    );
  }
}

function transformToTree(sections: Section[], expandedKeys: string[]) {
  const keyIndexMap: {[key: string]: number} = {};
  const roots = [];
  sections.forEach((section, i) => {
    keyIndexMap[section._id] = i;
    section.key = section._id;
    section.children = [];
    section.isLeaf = true;
    section.expanded = !section.parentId || expandedKeys.includes(section._id);
  });
  sections.forEach(section => {
    if (section.parentId) {
      const parent = sections[keyIndexMap[section.parentId]];
      parent.children.push(section);
      parent.isLeaf = false;
    } else roots.push(section);
  });
  return roots;
}
