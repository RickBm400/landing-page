export default function Intro() {
  return (
    <>
      <div
        id="intro_container"
        className="py-[2rem] px-[1rem] overflow-y-auto h-full"
      >
        <section className="flex flex-col">
          <span className="font-bold">B/QUILLA, COLOMBIA 2024.</span>
          <span className="text-[4rem] leading-[4.3rem] mt-[1rem] mb-[1rem]">
            Let's take programming to next level.
          </span>
          <div className="text-[17px] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            placeat nobis culpa hic tempora cumque et omnis voluptates nisi!
            Voluptatibus ab omnis harum quidem quam culpa laboriosam dolor
            aperiam hic.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            placeat nobis culpa hic tempora cumque et omnis voluptates nisi!
            Voluptatibus ab omnis harum quidem quam culpa laboriosam dolor
            aperiam hic.
          </div>
        </section>
        <div style={{ maxHeight: '100px', paddingTop: '2rem' }}>
          <img
            style={{ height: '300px' }}
            src="https://st2.depositphotos.com/1793519/50734/i/450/depositphotos_507343692-stock-photo-render-abstract-pink-blue-neon.jpg"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
