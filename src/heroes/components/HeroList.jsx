import { useMemo } from 'react';
import {getHeroesByPublisher} from '../helpers';
import { HeroCard } from './';

export const HeroList = ({publiser}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publiser), [publiser]);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(hero => (
                <HeroCard
                    key={hero.id}
                    {...hero}
                />
            ))
        }
    </div>
  )
}
