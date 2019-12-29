import { Component, Input } from '@angular/core';
import { SubscriptionHandler } from '@shared/subscription-handler';
import { Observable } from 'rxjs';
import { DeepSkill, SkillsService } from '../../skills/state';

@Component({
  selector: 'dfys-skills-sidebar',
  templateUrl: './skills-sidebar.component.html',
  styleUrls: ['./skills-sidebar.component.scss'],
})
export class SkillsSidebarComponent extends SubscriptionHandler {
  @Input() skills$: Observable<DeepSkill[]>;

  constructor(private skillService: SkillsService) {
    super();
  }

  addSkill(name: string) {
    this.skillService.addSkill(name);
  }
}
