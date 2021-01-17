import { animate, query, style, transition, trigger } from '@angular/animations'

const routeAnimationStyleStart = { opacity: 0, transform: 'scale(.95)' }
const routeAnimationStyleEnd = { opacity: 1, transform: 'scale(1)' }

export const routeAnimation = trigger('routeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style(routeAnimationStyleStart)],
      { optional: true },
    ),
    query(
      ':leave',
      [
        style(routeAnimationStyleEnd),
        animate('.25s', style(routeAnimationStyleStart)),
      ],
      { optional: true },
    ),
    query(
      ':enter',
      [
        style(routeAnimationStyleStart),
        animate('.25s', style(routeAnimationStyleEnd)),
      ],
      { optional: true },
    ),
  ]),
])
