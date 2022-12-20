import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule, MaterialBricksModule } from '@iote/bricks-angular';

import { JumpBlockComponent } from './components/jump-block/jump-block.component';
import { MultiLangModule } from '@ngfi/multi-lang';

@NgModule({
  imports: [
    CommonModule,
    MultiLangModule,
    MaterialDesignModule,
    FlexLayoutModule,
    MaterialBricksModule,

    FormsModule,
    ReactiveFormsModule,

    // ConvsMgrBlockOptionsModule
  ],

  declarations: [JumpBlockComponent],

  exports: [JumpBlockComponent],
})
export class ConvsMgrJumpBlockModule {}