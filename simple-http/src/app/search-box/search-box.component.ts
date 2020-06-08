import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchResult} from '../you-tube-search/search-result.model';
import {YouTubeSearchService} from '../you-tube-search/you-tube-search.service';
import {fromEvent} from 'rxjs';
import {map, filter, debounceTime, tap, switchAll} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) { }

  ngOnInit(): void {
    console.log('test');
    const obs = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(250),
        tap(() => this.loading.next(true)),
        map((query: string) => this.youtube.search(query)),
        switchAll()
          ). subscribe(
            (results: SearchResult[]) => {
              this.loading.next(false);
              this.results.next(results);
            },
            (err: any) => {
              console.log(err);
              this.loading.next(false);
            },
            () => {
              this.loading.next(false);
            }
          );
  }
}
