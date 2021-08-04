import { AuthorizationModule } from './../authorization/authorization.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoDataModule } from './../no-data/no-data.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { MessagesModule } from '../messages/messages.module';


@NgModule({
  imports: [
    CommonModule,
    PoModule,
    MessagesModule,
    NoDataModule,
    ReactiveFormsModule,
    AuthorizationModule,
  ],
  exports: [
    PoModule,
    MessagesModule,
    NoDataModule,
    ReactiveFormsModule,
    AuthorizationModule,
  ],
})
export class SharedModule {}
