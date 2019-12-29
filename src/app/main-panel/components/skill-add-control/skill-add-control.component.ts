import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SkillsService } from '@app/main-panel/skills/state';

@Component({
  selector: 'dfys-skill-add-control',
  templateUrl: './skill-add-control.component.html',
  styleUrls: ['./skill-add-control.component.scss'],
})
export class SkillAddControlComponent implements OnInit {
  skillForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private skillService: SkillsService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.skillForm.valid) {
      this.skillService.addSkill(this.skillForm.value.name);
      this.skillForm.reset();
    }
  }
}
