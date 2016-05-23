/**
 * Created by Jeremy on 2016-05-22.
 */

import {Injectable} from '@angular/core';
import {HEROES} from './mock-heros';

@Injectable()

export class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id:Number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}