import ArrowDown from './assets/arrow-down.svg?react';
import bg from '/hero-bg.png';

export const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-screen relative overflow-hidden bg-cover bg-no-repeat bg-center">
      {/* Фоновое изображение можно добавить через bg-[url('...')] */}
      <div className="container h-full mx-auto flex items-center">
        <div className="max-w-2xl p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-accent-50 mb-4 font-[Marlino Regular Personal Use]">
            О БРЕНДЕ
          </h1>

          <h3 className="text-lg md:text-xl text-accent-200 mb-8 leading-relaxed font-[HelveticaNeueCyr]">
            Мы премиальный мебельный бренд, ориентированный на доступность
            высокого качества. Мы предлагаем дизайнерские решения, сочетающие
            эстетику, комфорт и функциональность, делая стандарты премиум-класса
            доступными для широкой аудитории без потери уровня исполнения.
          </h3>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-8">
        <p className="text-center text-accent-50 font-[HelveticaNeueCyr] font-light text-5xl">
          Создайте уют с нашей мебелью!
        </p>
        <button className="transition-colors duration-150 w-full sm:w-auto rounded-2xl px-10 py-2 bg-accent-700 hover:bg-accent-500 border-t-3 border-accent-500 text-accent-50 text-4xl font-light font-[HelveticaNeueCyr] shadow-2xl shadow-accent-200/30">
          Заказать
        </button>
        <ArrowDown className="animate-bounce" />
      </div>
    </section>
  );
};
