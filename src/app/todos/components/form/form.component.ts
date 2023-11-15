import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('.container');
    const loginForm = this.el.nativeElement.querySelector('.login-form');
    const registerForm = this.el.nativeElement.querySelector('.Register-form');
    const regiBtn = this.el.nativeElement.querySelector('.RegiBtn');
    const loginBtn = this.el.nativeElement.querySelector('.LoginBtn');

    regiBtn.addEventListener('click', () => {
      this.renderer.addClass(registerForm, 'active');
      this.renderer.addClass(loginForm, 'active');
    });

    loginBtn.addEventListener('click', () => {
      this.renderer.removeClass(registerForm, 'active');
      this.renderer.removeClass(loginForm, 'active');
    });
  }
}
