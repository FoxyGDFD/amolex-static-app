import type { Filter } from '@features/card-filters';
import { cn } from '@shared/lib';
import { ProductCard, type ProductCardProps } from '@shared/ui/product-card';

import bg from './assets/catalog-bg.png';

type CardListProps = {
  list: ProductCardProps[];
  title: string;
  filters?: Filter[];
};

export const CardList = ({ list, title }: CardListProps) => {
  return (
    <section
      className="w-full py-34 overflow-hidden bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="container m-auto space-y-16">
        <h2
          className={
            'font-[Marlino Regular Personal Use] text-8xl text-accent-500'
          }>
          {title}
        </h2>

        <div className={cn('grid grid-cols-3 gap-y-25 gap-x-15')}>
          {list.map((card, index) => (
            <ProductCard
              key={index}
              {...card}
              className={
                Math.floor(index / 3) % 2
                  ? 'justify-self-end'
                  : 'justify-self-start'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
