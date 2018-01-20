import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { debug } from 'util';
import { SecurekeyDeleteComponent } from './securekey-delete/securekey-delete.component';
import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { MzModalService, MzToastService } from 'ng2-materialize/dist';
import { PaginatePipe, PaginationService, PaginationControlsDirective } from 'ngx-pagination';

import { SecureKeyModel, SecureKeyListModel, SecureKeyFilterModel } from './models/securekey.model';
import { SecurekeyService } from './securekey.service';
import { SecurekeyDetailsComponent } from './securekey-details/securekey-details.component';
import { SecurekeyCreateEditComponent } from './securekey-create-edit/securekey-create-edit.component';
import { HelperMessage } from './../../../shared/class/helper-message';
import { Enumerations } from './../../../shared/enumerators/enumerations';
import { FilterException } from '../../../shared/decorators/filter-exception';
import { Exception } from '../../../shared/class/exception-validation';
import { FormBuilder } from '@angular/forms';
import { KeyValue } from '../../../shared/class/key-value';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';


@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit, OnDestroy {

  private lstSecureKeys: Array<SecureKeyListModel> = new Array<any>();
  private filterModel = this.fb.group(new SecureKeyFilterModel(this.fb));

  // Model Paginator
  private pageIndex = 1;
  private pageSize = 10;
  private totalItems = 0;
  private loading = false;

  constructor(
    private svcSecureKey: SecurekeyService,
    private modalService: MzModalService,
    private toastService: MzToastService,
    private helperMessage: HelperMessage,
    private fb: FormBuilder,
    private pg: PaginationService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  protected pageChange(event) {
    this.pageIndex = event;
    this.loadData(false);
  }

  private loadData(hasPreloader: boolean = true) {
    if (hasPreloader === false) {
      this.loading = true;
    }

    const params = this.filterModel.value;
    params.PageIndex = this.pageIndex;
    params.PageSize = this.pageSize;

    this.svcSecureKey
      .getSecureKeys(params, hasPreloader)
      .do(res => this.loading = false)
      .subscribe(
      (data: any) => {
        this.totalItems = data.TotalItems;
        this.lstSecureKeys = data.Data;

        if (!data || this.totalItems <= 0) {
          return this.helperMessage.showMessage(Enumerations.eTypeMessage.INFO,
            ['Nenhum registro foi encontrado.']);
        }
      });
  }

  private view(item: SecureKeyListModel) {

    this.svcSecureKey.getSecureKey(item.KeyID).subscribe((data: SecureKeyModel) => {
      console.log(data);
      this.modalService.open(SecurekeyDetailsComponent, { model: data });
    });
  }

  private edit(item: SecureKeyListModel) {
    const key = this.svcSecureKey.getSecureKey(item.KeyID);
    const list = this.svcSecureKey.getTypeKeys();

    Observable.forkJoin([key, list]).subscribe(results => {
      this.modalService.open(SecurekeyCreateEditComponent, {
        model: results[0],
        listTypeKeys: results[1]
      });
    });
  }

  private delete(item: SecureKeyListModel) {
    this.modalService.open(SecurekeyDeleteComponent, { model: item });
  }

  private create() {
    this.svcSecureKey.getTypeKeys().subscribe((data: any) => {
      this.modalService.open(SecurekeyCreateEditComponent, { model: null, listTypeKeys: data });
    });
  }
}
