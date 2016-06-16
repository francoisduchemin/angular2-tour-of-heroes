import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  
  constructor(
    private router: Router,
    private heroService: HeroService) { 

    }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { 
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

}