import { Component, signal } from '@angular/core';
import { Divider } from 'primeng/divider';
import { ITechnique } from '../../../../core/models/techniques';
import { TechniqueCard } from '../../../../shared/components/technique-card/technique-card';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-dashboard-info',
  imports: [Divider, TechniqueCard, Icon],
  templateUrl: './dashboard-info.html',
  styleUrl: './dashboard-info.scss',
})
export class DashboardInfo {
  techniques = signal<ITechnique[]>([
    {
      label: 'Lorem P',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.',
    },
    {
      label: 'Lorem S',
      description: `Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus.
         Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus
          sagittis dictum sed sed. Sed venenatis sed urna quam.
      `,
    },
    {
      label: 'Lorem T',
      description:
        'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
    },
  ]);
}
