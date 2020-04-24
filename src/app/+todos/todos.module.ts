import { NgModule } from '@angular/core';

import { TodosContainerComponent } from './todos-container.component';

@NgModule({
  declarations: [
    TodosContainerComponent
  ],
  exports: [TodosContainerComponent]
})
export class TodosModule { }
