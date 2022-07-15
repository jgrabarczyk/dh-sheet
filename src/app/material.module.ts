import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';

const materialModules = [
  FormsModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatIconModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatSelectModule,
  MatCheckboxModule,
  CdkStepperModule,
  MatStepperModule,
  MatRadioModule,
  MatSnackBarModule,
  MatCardModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatTooltipModule,
];

export const DISPLAY_DATE_FORMAT = 'd/MM/yyyy';
export const DATE_FORMAT = 'YYYY-MM-DD';

const MAT_DATE_INPUT_FORMAT = 'D/MM/YYYY';
const MAT_DATE_FORMAT: MatDateFormats = {
  parse: {
    dateInput: MAT_DATE_INPUT_FORMAT,
  },
  display: {
    dateInput: MAT_DATE_INPUT_FORMAT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const polishRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) {
    return `0 do ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} z ${length}`;
};

export function getPolishPaginatorIntl(): MatPaginatorIntl {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'wierszy na stronę:';
  paginatorIntl.nextPageLabel = 'Następna strona';
  paginatorIntl.lastPageLabel = 'Ostatnia strona';
  paginatorIntl.firstPageLabel = 'Pierwsza strona';
  paginatorIntl.previousPageLabel = 'Poprzednia strona';
  paginatorIntl.getRangeLabel = polishRangeLabel;

  return paginatorIntl;
}

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [...materialModules],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMAT },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'pl' },
    { provide: MatPaginatorIntl, useValue: getPolishPaginatorIntl() },
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] }
  ],
})
export class MaterialModule {}
