import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Talent } from 'src/app/classes/talent';

@Component({
  selector: 'dhcs-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
})
export class TalentComponent {
  @Input() talent!: Talent;
  captionControl!: FormControl;
  rulePageControl!: FormControl;
  form!: FormGroup;
  edit = true;

  ngOnInit() {
    this.captionControl = new FormControl(this.talent.caption);
    this.rulePageControl = new FormControl(this.talent.rulePage);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  save() {
    this.toggleEdit();
    this.talent.caption = this.captionControl.value;
    this.talent.rulePage = this.rulePageControl.value;
  }

  cancel() {
    this.toggleEdit();
    this.captionControl.setValue(this.talent.caption);
    this.rulePageControl.setValue(this.talent.rulePage);
  }
}
