import { Component, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AppFile, AppFolder } from 'src/app/shared';
import { SelectionModel } from '@angular/cdk/collections';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class FileUploadComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = [
    'select',
    'name',
    'lastModifiedDate',
    'size',
    'type',
    'more',
  ];
  expandedElement: AppFile | undefined;
  selection = new SelectionModel<AppFile>(true, []);
  @ViewChild(MatSort) sort: MatSort | null;

  constructor(private sanitizer: DomSanitizer) {
    this.sort = null;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          const myFileAsElement = {
            name: file.name,
            lastModifiedDate: file.lastModified,
            size: file.size,
            type: file.type,
            url: this.sanitizer.bypassSecurityTrustResourceUrl(
              window.URL.createObjectURL(
                new Blob([file], { type: 'application/octet-stream' })
              )
            ),
          };
          const data = this.dataSource.data;
          data.push(myFileAsElement);
          this.dataSource.data = data;
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: AppFile): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.name + 1
    }`;
  }
}

const ELEMENT_DATA: AppFile[] = [
  {
    name: 'Christian.jpg',
    size: 1.0079,
    type: 'dummy',
    lastModifiedDate: 20210101,
    url:
      'https://media.cdn.teamtailor.com/images/s3/teamtailor-production/user_picture_1200_crop-v4/image_uploads/c97db6a2-dcac-4e41-92c7-2e6c4a68cb82/original.jpg',
  },
];
