import { Component } from '@angular/core';
import { DashboardInfo } from './components/dashboard-info/dashboard-info';
import { DashboardAnalytics } from './components/dashboard-analytics/dashboard-analytics';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardInfo, DashboardAnalytics],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
