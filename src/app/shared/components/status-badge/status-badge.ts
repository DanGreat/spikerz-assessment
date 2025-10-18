import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  status = input.required<'Critical' | 'High' | 'Medium' | 'Low'>();

  getBadgeClasses = computed<string>(() => {
    switch (this.status()) {
      case 'Critical':
        return 'bg-[var(--p-red-100)] text-red-800';
      case 'High':
        return 'bg-[var(--p-orange-100)] text-orange-800';
      case 'Medium':
        return 'bg-[var(--p-yellow-100)] text-yellow-800';
      case 'Low':
        return 'bg-[var(--p-green-100)] text-green-800';
      default:
        return '';
    }
  });
}
