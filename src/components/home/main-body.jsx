import './scss/main-body.scss';

const superheroes = ['Homelander', 'A-Train', 'Starlight', 'Black Noir'];

export function MainBody() {
  return (
    <main>
      <section>
        { superheroes.map((hero) => (
          <div className='hero-card'>
            <img src="C:\Repositories\superheroes-showcase\src\images\homelander.jpg" alt="Homelander" />
            <p>{hero}</p>
          </div>
        )) }
      </section>
    </main>
  );
}
