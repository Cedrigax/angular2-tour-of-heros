import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {Hero} from "./hero";
import {HeroService} from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    stylesUrls: ['app/heroes.component.css'],
    directives: [],
    providers: []
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(){
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail',{ id: this.selectedHero.id }]);
    }
}

