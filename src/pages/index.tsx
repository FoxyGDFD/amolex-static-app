import { createFileRoute } from '@tanstack/react-router';
import { CardList } from '@widgets/card-list';
import { Hero } from '@widgets/hero';

export const Route = createFileRoute('/')({
  component: Index,
});

const products = [
  {
    title: 'Комод Clivia',
    price: 200,
    rating: 4.9,
    imageUrl: '/clivia.png',
    description:
      'Превратите ваше пространство в оазис комфорта и эстетики с помощью современного кресла, которое гармонично впишется в любой интерьер',
    link: '',
  },
  {
    title: 'Комод Clivia',
    price: 200,
    rating: 4.9,
    imageUrl: '/clivia.png',
    description:
      'Превратите ваше пространство в оазис комфорта и эстетики с помощью современного кресла, которое гармонично впишется в любой интерьер',
    link: '',
  },
  {
    title: 'Комод Clivia',
    price: 200,
    rating: 4.9,
    imageUrl: '/clivia.png',
    description:
      'Превратите ваше пространство в оазис комфорта и эстетики с помощью современного кресла, которое гармонично впишется в любой интерьер',
    link: '',
  },
  {
    title: 'Комод Clivia',
    price: 200,
    rating: 4.9,
    imageUrl: '/clivia.png',
    description:
      'Превратите ваше пространство в оазис комфорта и эстетики с помощью современного кресла, которое гармонично впишется в любой интерьер',
    link: '',
  },
  {
    title: 'Комод Clivia',
    price: 200,
    rating: 4.9,
    imageUrl: '/clivia.png',
    description:
      'Превратите ваше пространство в оазис комфорта и эстетики с помощью современного кресла, которое гармонично впишется в любой интерьер',
    link: '',
  },
  {
    title: 'Комод Clivia',
    price: 200,
    rating: 4.9,
    imageUrl: '/clivia.png',
    description:
      'Превратите ваше пространство в оазис комфорта и эстетики с помощью современного кресла, которое гармонично впишется в любой интерьер',
    link: '',
  },
];

function Index() {
  return (
    <>
      <Hero />
      <CardList title="Каталог" list={products} />;
    </>
  );
}
