import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Galeria() {


  return (

    <div className="relative min-h-screen">
      {/* Div do background com imagem + desfoque */}
  
      <div 
        className="fixed inset-0 -z-10 bg-[url('/mewtwo.png')] bg-cover bg-center"
      >
        {/* Overlay com desfoque (blur) */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-500/50"></div>
      </div>

      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">Um mundo realmente vivo</h1>
          <p className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">Repleto de vilarejos e quests a serem descobertas!</p>
        </div>
      </section>

        {/* Carrossel Swiper */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          <SwiperSlide>
            <img src="/Pousada1.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Pousada2.png" alt="Slide 2" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/GigantTree.png" alt="Slide 3" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/VilageImage1.png" alt="Slide 4" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/VilageImage2.png" alt="Slide 5" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/VilageImage3.png" alt="Slide 6" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/VilageImage4.png" alt="Slide 7" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/VilageImage5.png" alt="Slide 8" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        </Swiper>

        <section className=" ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda">Um lugar repleto de desafios</h1>
          <p className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">Seguindo a progressão do pokémon fire-red, para avançar você terá que enfrentar vários ginásios!</p>
        </div>
      </section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio do Broock</p>
            <img src="/Ginasio1.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio da Misty</p>
            <img src="/Ginasio2.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio do Lt Surge</p>
            <img src="/Ginasio3.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio da Erika</p>
            <img src="/Ginasio4.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Torre da Equipe Rocket</p>
            <img src="/Ginasio5.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio da Sabrina</p>
            <img src="/Ginasio6.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio do Koga</p>
            <img src="/Ginasio7.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio do Blaine</p>
            <img src="/Ginasio8.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <p className="font-mono text-center mb-2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white texto-com-borda texto-com-borda">Ginásio do Giovanni</p>
            <img src="/Ginasio1.png" alt="Slide 1" className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        </Swiper>

      </div>
          
        <div className=" box py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className=" mb-4 text-4xl font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white texto-com-borda texto-com-borda ">Agora é com você!!</h1>
          <p className="mb-8 text-lg font-mono text-gray-900 lg:text-xl sm:px-16 lg:px-48 dark:text-white text-shadow-lg/55">Mergulhe em um mundo onde blocos infinitos se encontram com criaturas lendárias! Descubra, capture e batalhe com Pokémon em uma jornada épica pelo universo de Cobblemon!</p>
        </div>
    

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {/*Imagem 1*/}
        <div>
          <img class=" box h-auto max-w-full rounded-lg " src="Galeria1.png" alt=""/>
        </div>
            {/*Imagem 2*/}
        <div>
          <img class=" box h-auto max-w-full rounded-lg" src="Galeria2.png" alt=""/>
        </div>
            {/*Imagem 3*/}
        <div>
          <img class=" box h-auto max-w-full rounded-lg" src="Galeria3.png" alt=""/>
        </div>
            {/*Imagem 4*/}
        <div>
          <img class=" box h-auto max-w-full rounded-lg" src="Galeria4.png" alt=""/>
        </div>
            {/*Imagem 5*/}
        <div>
          <img class=" box h-auto max-w-full rounded-lg" src="Galeria5.png" alt=""/>
        </div>
            {/*Imagem 6*/}
        <div>
         <img class=" box h-auto max-w-full rounded-lg" src="Galeria6.png" alt=""/>
        </div>
            {/*Imagem 7*/}
        <div>
          <img class=" box h-auto max-w-full rounded-lg" src="Galeria7.png" alt=""/>
        </div>
            {/*Imagem 8*/}
        <div>
          <img class="box h-auto max-w-full rounded-lg" src="Galeria8.png" alt=""/>
        </div>
            {/*Imagem 9*/}
        <div>
          <img class="box h-auto max-w-full rounded-lg" src="Galeria9.png" alt=""/>
        </div>
      </div>
    </div>
    
  );

  

}

{/*
            <figcaption class="flex items-center justify-center mt-2 space-x-3 rtl:space-x-reverse">
                <img class="w-26 h-26 rounded-full" src="/gengar-icon.png" alt="profile picture"/>
                <p className="font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white texto-com-borda texto-com-borda">|</p>
                <img class="w-26 h-26 rounded-full" src="/Tintin.png" alt="profile picture"/>
              <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-white dark:divide-white">

                <cite class="ps-3 text-sm font-mono text-gray-500 dark:text-white">Construtores</cite>

              </div>
            </figcaption>
            */}