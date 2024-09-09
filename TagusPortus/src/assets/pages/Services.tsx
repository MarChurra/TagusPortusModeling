import { useNavigate, useLocation } from 'react-router-dom'
import servicesData from '../../fakedata.tsx'
import CallToActionBtn from '../components/CallToActionBtn.tsx'

//Mapping from the fake database the services currently available
const Services: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentFilter = searchParams.get('filter') || ''


  //Handles the user selection and parses it to the url 
  const handleUserFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userSelectedOption = event.target.value
    navigate(`/services?filter=${userSelectedOption}`)
  }

  //Filter based on price 
  const filteredServices = currentFilter === 'small-project'
    ? servicesData.filter(service => service.price < 10000)
    : currentFilter === 'big-project'
      ? servicesData.filter(service => service.price >= 10000)
      : servicesData

  return (
    <>
      <section className='services-container'>
        <select
          name="filter-services"
          value={currentFilter}
          onChange={handleUserFilter}
          className='services-filter'
        >
          <option value="">Escolha o que quer ver</option>
          <option value="small-project">Projetos Pequenos</option>
          <option value="big-project">Projetos Grandes</option>
        </select>

        <div className='services-grid'>
          {filteredServices.map(({ title, imgUrl, description, price }, index) => (
            <article className='services-options' key={index}>
              <img src={imgUrl} alt={title} />
              <section className='services-info'>
                <h3>{title}</h3>
                <p className='services-price'>
                  Preço: A partir de {price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
                </p>
                <p className='services-desc'>
                  {description}
                </p>
              </section>
            </article>
          ))}
        </div>
      </section>

      <CallToActionBtn
        description="Entrar em Contacto"
        link='/contacts'
      />
    </>
  )
}

export default Services