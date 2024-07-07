import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit = () => this.onSubmit.emit();
  navigate = () => this.onNavigate.emit();
}
