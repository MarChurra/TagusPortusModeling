import servicesData from '../../fakedata.tsx'

//Mapping from the fake database the services currently available
const Services: React.FC = () => {

  return (
    <>
      <h2 className='services-heading'> Consulte as nossas soluções</h2>
      <section className='services-container'>
        {servicesData.map(({ title, imgUrl, description, price }, index) => {

          return (
            <article className='services-options' key={index}>

              <img src={imgUrl} alt={title} />

              <section className='services-info'>

                <h3>{title}</h3>

                <p className='services-price'>
                  Preço: A partir de {price}€
                </p>

                <p className='services-desc'>
                  {description}
                </p>

              </section>
            </article>
          )
        })}
      </section>

    </>
  )
}

export default Services