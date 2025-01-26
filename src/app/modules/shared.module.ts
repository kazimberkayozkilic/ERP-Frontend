import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../component/section/section.component';
import { BlankComponent } from '../component/blank/blank.component';
import { FormsModule } from '@angular/forms';
import { FormValidateDirective } from 'form-validate-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlankComponent,
    SectionComponent,
    FormsModule,
    FormValidateDirective,
  ],
  exports: [
    CommonModule,
    BlankComponent,
    SectionComponent,
    FormsModule,
    FormValidateDirective,
  ],
})
export class SharedModule {}
