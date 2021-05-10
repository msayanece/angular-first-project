import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, AfterContentInit,
                                    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private logger: LogService) {
    logger.log('constructor');
   }

  ngOnInit(): void {
    this.logger.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    this.logger.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logger.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logger.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logger.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logger.log('ngOnDestroy');
  }

}
