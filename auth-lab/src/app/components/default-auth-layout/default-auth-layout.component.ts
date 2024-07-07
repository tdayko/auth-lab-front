import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-auth-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-auth-layout.component.html',
})
export class DefaultAuthLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
