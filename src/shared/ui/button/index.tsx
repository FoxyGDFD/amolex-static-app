import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import { cn } from '@shared/lib';

type As = 'a' | 'button';

type AsProp<C extends As> = {
  as?: C;
};

type PolymorphicPropsWithoutRef<
  C extends As,
  P = object,
> = PropsWithChildren<P> & AsProp<C> & ComponentPropsWithoutRef<C>;

export type PolymorphProps<
  C extends ElementType,
  Props = object,
> = PolymorphicPropsWithoutRef<C, Props> & {
  ref?: ComponentPropsWithRef<C>['ref'];
};

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref'];

export const Button = <T extends As>({
  as,
  children,
  className,
  ...props
}: PolymorphProps<T>) => {
  const PolymorphElement = as ?? ('button' as ElementType);

  return (
    <div
      className={cn(
        'group p-0.5 rounded-full',
        'grid place-items-center',
        'transition-colors duration-150',
        'bg-linear-60 from-button to-99% to-button-hovered hover:bg-button-hovered',
        className
      )}>
      <PolymorphElement
        className={cn(
          'w-full h-full rounded-full group p-2',
          'grid place-items-center',
          'transition-colors duration-150',
          'bg-button group-hover:bg-button-hovered text-white'
        )}
        {...props}>
        {children}
      </PolymorphElement>
    </div>
  );
};
