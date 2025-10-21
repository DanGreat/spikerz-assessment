import { Component, computed, signal } from '@angular/core';
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
  allAssets = signal<IAsset[]>([
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', status: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', status: 'Critical' },
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', status: 'High' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', status: 'High' },
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', status: 'Medium' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', status: 'Medium' },
  ]);

  first = signal<number>(0);
  rows = signal<number>(2);

  pagedAssets = computed(() => {
    const start = this.first();
    const end = start + this.rows();
    return this.allAssets().slice(start, end);
  });

  onPageChange(event: PaginatorState) {
    this.first.set(event.first ?? 0);
    this.rows.set(event.rows ?? 2);
  }
}
