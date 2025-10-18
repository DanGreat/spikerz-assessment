import { Component, signal } from '@angular/core';
import { Paginator, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { IAsset } from '../../../../../core/models/asset';
import { Icon } from '../../../../../shared/components/icon/icon';
import { StatusBadge } from '../../../../../shared/components/status-badge/status-badge';

@Component({
  selector: 'app-contextual-risk-table',
  imports: [Paginator, TableModule, Icon, StatusBadge],
  templateUrl: './contextual-risk-table.html',
  styleUrl: './contextual-risk-table.scss',
})
export class ContextualRiskTable {
  assests = signal<IAsset[]>([
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', status: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', status: 'Critical' },
  ]);

  first = signal<number>(0);
  rows = signal<number>(2);

  onPageChange(event: PaginatorState) {
    this.first.set(event.first ?? 0);
    this.rows.set(event.rows ?? 2);
  }
}
