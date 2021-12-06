import { map, pipe } from 'rxjs';
import { OtherPackage } from '../models/other-package.model';
import { fillStars } from './fill-stars';

export function fillOtherPackageStars() {
  return pipe(
    map((packages) => {
      const items = packages as OtherPackage[];

      return items.map((x) => ({
        ...x,
        stars: fillStars(x['stars_rating_count'], '/assets/images/star-rating.svg'),
      }));
    }),
  );
}
