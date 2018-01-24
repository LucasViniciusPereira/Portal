import { trigger, animate, style, group, animateChild, query, stagger, transition, state, keyframes } from '@angular/animations';
import { useAnimation } from '@angular/animations';
import { bounce, fadeIn, fadeOut } from 'ng-animate';

export const routerAnimation = trigger('routerTransition',
  [
    transition(':leave', useAnimation(fadeOut, { params: { timing: 1 } })),
    transition(':enter', useAnimation(fadeIn, { params: { timing: 1 } }))
  ]
);

// export const routerAnimation = trigger('routerTransition',
//   [
//     transition('* <=> *', [
//       query(':enter', stagger('300ms', [
//         animate('1s ease-in', keyframes([
//           style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
//           style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
//           style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
//         ]))]),
//         { optional: true }),
//       query(':leave', stagger('300ms', [
//         animate('1s ease-in', keyframes([
//           style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
//           style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
//           style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
//         ]))]),
//         { optional: true }),
//     ]
//     )]);
