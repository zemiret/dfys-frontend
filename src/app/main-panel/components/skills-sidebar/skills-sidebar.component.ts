import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { Observable } from 'rxjs';
import { DeepSkill } from '../../skills/state';

interface SkillNode {
  name: string;
  link: string;
  children: SkillNode[];
}

interface SkillFlatNode {
  name: string;
  link: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'dfys-skills-sidebar',
  templateUrl: './skills-sidebar.component.html',
  styleUrls: ['./skills-sidebar.component.scss'],
})
export class SkillsSidebarComponent extends SubscriptionHandler
  implements OnInit {
  @Input() skills$: Observable<DeepSkill[]>;

  constructor() {
    super();
  }

  treeControl = new FlatTreeControl<SkillFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: SkillFlatNode) => node.expandable;

  ngOnInit() {
    this.loadTreeData();
  }

  private transformer(node: SkillNode, level: number): SkillFlatNode {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link: node.link,
      level,
    };
  }

  private loadTreeData(): void {
    this.addSubscription(
      this.skills$.subscribe(deepSkills => {
        this.dataSource.data = deepSkills.map(skill => ({
          name: skill.name,
          link: `skills/${skill.id}`,
          children: skill.categories.map(cat => ({
            name: cat.name,
            link: `skills/${skill.id}`, // TODO: Extend this to filter by categories$
            children: [],
          })),
        }));
      })
    );
  }
}
