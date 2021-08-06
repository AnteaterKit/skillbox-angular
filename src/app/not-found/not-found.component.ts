import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="error-template">\n' +
    '                <h1>\n' +
    '                    Oops!</h1>\n' +
    '                <h2>\n' +
    '                    404 Not Found</h2>\n' +
    '                <div class="error-details">\n' +
    '                    Sorry, an error has occured, Requested page not found!\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>',
  styleUrls: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
