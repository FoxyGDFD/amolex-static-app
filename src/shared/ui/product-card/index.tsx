import { cn } from '@shared/lib';

import { Button } from '../button';
import Cart from './assets/cart.svg?react';
import Heart from './assets/heart.svg?react';
import Star from './assets/star.svg?react';

// Заменяет Overlay PNG

export type ProductCardProps = {
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
  link: string;
  hasLike?: boolean;
  hasColors?: boolean;
  className?: string;
};

export const ProductCard = ({
  title,
  price,
  rating,
  imageUrl,
  description,
  link,
  className,
  hasLike = true,
  hasColors,
}: ProductCardProps) => {
  return (
    <article
      className={cn(
        'transition-colors duration-350',
        'bg-linear-150 from-zinc-600 hover:from-accent-500 via-30% via-card-stroke to-97% hover:to-accent-700 to-zinc-900',
        'rounded-[26px] relative p-0.75 max-w-100',
        className
      )}>
      <div
        className={cn(
          'transition-colors duration-350',
          'bg-radial-[at_15%_15%] from-zinc-600 hover:from-card-hover via-50% via-card to-80% hover:to-zinc-800 to-zinc-900',
          'max-w-100 max-h-110 rounded-3xl'
        )}>
        <img
          className="object-cover mx-auto object-top max-h-60"
          alt=""
          width={300}
          src={imageUrl}
        />
        {hasLike && (
          <Button className="absolute top-5 right-5 w-11.5 h-11.5">
            <Heart className="transition-colors duration-150 w-full h-full group-hover:fill-icon fill-transparent stroke-2" />
          </Button>
          // <div
          //   className={cn(
          //     'absolute top-5 right-5 w-11.5 h-11.5 rounded-full group',
          //     'grid place-items-center',
          //     'transition-colors duration-150',
          //     'bg-linear-60 from-button to-99% to-button-hovered hover:bg-button-hovered'
          //   )}>
          //   <button
          //     className={cn(
          //       'w-11 h-11 p-2 rounded-full group',
          //       'grid place-items-center',
          //       'transition-colors duration-150',
          //       'bg-button group-hover:bg-button-hovered'
          //     )}>
          //     <Heart className="transition-colors duration-150 w-full h-full group-hover:fill-icon fill-transparent stroke-2" />
          //   </button>
          // </div>
        )}

        <div className="p-4 flex justify-between gap-12">
          <div className="flex flex-col">
            <h2 className="[font-family:'HelveticaNeueCyr-Medium',Helvetica] font-medium text-accent-50 text-2xl">
              {title}
            </h2>
            <p className="[font-family:'HelveticaNeueCyr-Roman',Helvetica] font-normal text-light-300 text-sm leading-none text-ellipsis">
              {description}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                <Star className="w-[26px] h-[26px]" />
                <p className="[font-family:'HelveticaNeueCyr-Roman',Helvetica] font-normal text-[#f7f3ed] text-[27.1px]">
                  {rating.toFixed(1)}
                </p>
              </div>
              <p className="[font-family:'HelveticaNeueCyr-Medium',Helvetica] font-medium text-[#c09e6a] text-[34.6px]">
                {price}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between grow">
            <div className="flex space-x-2">
              {hasColors && (
                <>
                  <div className="bg-[#b3b3b3] w-[25px] h-[25px] rounded-full"></div>
                  <div className="bg-black w-[25px] h-[25px] rounded-full"></div>
                  <div className="bg-[#c09e6a] w-[25px] h-[25px] rounded-full"></div>
                </>
              )}
            </div>
            {/* <div
              className={cn(
                'min-w-25 min-h-25 max-w-25 max-h-25 rounded-full grid place-items-center',
                'transition-colors duration-150',
                'bg-button hover:bg-button-hovered',
                'bg-linear-60 from-button to-99% to-button-hovered hover:bg-button-hovered'
              )}>
              <a
                href={link}
                target="_blank"
                className={cn(
                  'w-24 h-24 rounded-full grid place-items-center',
                  'transition-colors duration-150',
                  'bg-button hover:bg-button-hovered'
                )}
                rel="noreferrer">
                <Cart className="w-12.5 h-12.5" />
              </a>
            </div> */}
            <Button
              as="a"
              href={link}
              target="_blank"
              className="min-w-25 min-h-25 max-w-25 max-h-25 rounded-full grid place-items-center">
              <Cart className="w-12.5 h-12.5" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
