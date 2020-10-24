import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-labelandinput',
  template: `
    <div class="labelinput">
      <mat-form-field appearance="fill">
        <mat-label class="fieldLabel" >{{label}}</mat-label>
        <input matInput [disabled]="disabled">
      </mat-form-field>
    </div>
  `,
  styles: [`

    mat-form-field{
      margin-left: 16px;
      width: 500px;
    }

    mat-form-field.mat-form-field{
      font-size: 20px;
    }


    .fieldLabel{
      height: 30px;
    }
  `]
})
export class LabelandinputComponent {

  @Input() label: string;
  @Input() disabled: boolean;
}
