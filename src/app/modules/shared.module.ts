import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../component/section/section.component';
import { BlankComponent } from '../component/blank/blank.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlankComponent,
    SectionComponent,
    FormsModule
  ]
})
export class SharedModule { }
