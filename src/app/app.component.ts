import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjsproject';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public onClick(valeur: string): void {
    this.router.navigateByUrl(`/${valeur}`);
  }
}
