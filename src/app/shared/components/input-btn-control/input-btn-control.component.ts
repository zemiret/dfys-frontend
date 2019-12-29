import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dfys-input-btn-control',
  templateUrl: './input-btn-control.component.html',
  styleUrls: ['./input-btn-control.component.scss'],
})
export class InputBtnControlComponent implements OnInit {
  @Input() value = '';
  @Input() placeholder = '';
  @Output() formSubmit = new EventEmitter<string>();

  formControl = this.fb.group({
    value: [this.value, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  handleSubmit() {
    if (this.formControl.valid) {
      this.formSubmit.emit(this.formControl.value.value);
      this.formControl.reset();
    }
  }
}
