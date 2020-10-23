import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labelandtextarea',
  template: `
    <div class="labelinput">
      <mat-form-field appearance="fill">
        <mat-label class="textareaLabel" >{{label}}</mat-label>
        <textarea matInput></textarea>
      </mat-form-field>
    </div>
  `,
  styles: [`
    mat-form-field{
      padding: 0 16px;
      width: 500px;
    }

    mat-form-field.mat-form-field{
      font-size: 18px;
    }

    textarea{
      min-height: 80px;
    }

    .textareaLabel{
      height: 90px;
    }
  `]
})
export class LabelandtextareaComponent{

  @Input() label: string;

}
