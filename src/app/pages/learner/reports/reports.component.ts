import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Ag Grid Modules
import { AgGridModule, AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgChartsAngularModule, AgChartsAngular } from 'ag-charts-angular';

import { AgColumnSeriesOptions, AgChartOptions } from 'ag-charts-community';

// Services
import { AgGridService } from 'src/app/services/ag-grid.service';

// Interfaces
import { TraineeReport } from 'projects/interfaces/src/lib/trainee-report';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, AgGridModule, AgChartsAngularModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  // public options: AgChartOptions;
  // public options: AgChartOptions;
  
  @ViewChild(AgChartsAngular)
  public agChart!: AgChartsAngular;
 
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'exercise'},
    { field: 'type'},
    { field: 'time'},
    { field: 'hints'},
    { field: 'tries'},
    { field: 'evaluation'}
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<TraineeReport[]>;
  public chart1Data!: any;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
     private aggridService: AgGridService
  ) {
    console.log('ChildComponent==>constructor');
    // this.options = {
    //   data: this.aggridService.getChart1(),
    //   title: {
    //     text: 'Beverage Expenses',
    //   },
    //   subtitle: {
    //     text: 'per quarter',
    //   },
    //   footnote: {
    //     text: 'Based on a sample size of 200 respondents',
    //   },
    //   series
    // };
  }

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.aggridService.getTraineeReport();
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}

function buildSeries(name: string): AgColumnSeriesOptions {
  return {
    type: 'column',
    xKey: 'beverage',
    // yKey: name.toLowerCase(),
    yName: name,
    fillOpacity: 0.5,
  };
}

const series = [
  buildSeries('Q4'),
  buildSeries('Q3'),
  buildSeries('Q2'),
  buildSeries('Q1'),
];