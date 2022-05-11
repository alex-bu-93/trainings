import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

export interface Section extends NzTreeNodeOptions{
  _id?: string;
  title: string;
  parentId: string;
}
