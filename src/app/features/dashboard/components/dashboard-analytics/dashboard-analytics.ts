import { Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { Icon } from '../../../../shared/components/icon/icon';
import { ContextualRiskChart } from './contextual-risk-chart/contextual-risk-chart';
import { ContextualRiskTable } from './contextual-risk-table/contextual-risk-table';
import { Timeline } from './timeline/timeline';

@Component({
  selector: 'app-dashboard-analytics',
  imports: [Divider, Icon, Timeline, ContextualRiskTable, ContextualRiskChart],
  templateUrl: './dashboard-analytics.html',
  styleUrl: './dashboard-analytics.scss',
})
export class DashboardAnalytics {}
