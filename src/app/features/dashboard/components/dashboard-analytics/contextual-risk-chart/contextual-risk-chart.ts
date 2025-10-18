import { Component } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';
import { Badge } from 'primeng/badge';

@Component({
  selector: 'app-contextual-risk-chart',
  imports: [Badge, RoundProgressComponent],
  templateUrl: './contextual-risk-chart.html',
  styleUrl: './contextual-risk-chart.scss',
})
export class ContextualRiskChart {}
