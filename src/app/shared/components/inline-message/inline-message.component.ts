import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inline-message.component',
  imports: [],
  template: `
    <p>
      inline-message.component works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineMessageComponent {

}
