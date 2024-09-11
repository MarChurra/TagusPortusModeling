import { useState } from 'react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'
import api from '../../api-key.json'
import LoadingComponent from '../components/LoadingComponent'

const Contacts: React.FC = () => {
  //Declare API Key 
  const apiKey = api.key

  //Form States
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    mobileNumber: '',
    userEmail: '',
    userRequest: ''
  })

  const { fName, lName, mobileNumber, userEmail, userRequest } = formData

  const [submitMessage, setUserMessage] = useState<string>('')
  const [loadingRequest, setLoadingRequest] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  //Add logic and time out for the sucess or fail notificaiton
  const notification = (message: string, type: 'success' | 'fail'): void => {
    if (type === 'success') {
      setUserMessage(message)
    }
    else if (type === 'fail') {
      setUserMessage(message)
    }
    setTimeout(() => {
      setUserMessage('');
    }, 2000);
  }

  //Logic for the submission
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    if (!emailRegex.test(userEmail)) {
      notification('Por favor introduza um endereço de e-mail válido', 'fail')
      return
    }

    try {
      setLoadingRequest(true)

      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          fName,
          lName,
          userEmail,
          userRequest
        })
      })

      const result = await response.json()


      //Sends the request to the "server" for processing and clears the content in the form
      if (response.ok) {
        notification(result.message, 'success')

        setFormData({
          fName: '',
          lName: '',
          mobileNumber: '',
          userEmail: '',
          userRequest: ''
        })

        setLoadingRequest(false)
      }
      //Sends the user a message of failure and maintain the content of the form, for correction
      else {
        notification('Erro ao enviar o e-mail', 'fail')
        setLoadingRequest(false)
      }
    }
    catch (error) {
      notification('Erro ao enviar o e-mail.', 'fail');
    }
  }

  console.log(formData)

  return (
    <>
      <section className="contacts-container">
        <h2>Entre em contacto connosco!</h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form">

          <input
            type="text"
            name="fName"
            value={fName}
            placeholder="Primeiro nome"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lName"
            value={lName}
            placeholder="Apelido"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="mobileNumber"
            value={mobileNumber}
            placeholder="Contacto Telefónico"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="userEmail"
            value={userEmail}
            placeholder="E-mail"
            onChange={handleChange}
            required
          />
          <textarea
            name="userRequest"
            value={userRequest}
            placeholder="Escreva aqui o seu pedido"
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar Pedido</button>
          {loadingRequest ? <LoadingComponent /> : submitMessage ? <div className="contacts-notification"> < p > {submitMessage}</p> </div> : null}

        </form >
        <section className="location-info">
          <APIProvider apiKey={apiKey}>
            <Map
              mapId={'f7e5242eb4e737a'}
              defaultZoom={15}
              defaultCenter={{ lat: 38.6765229251886, lng: -9.164671861177789 }}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              className="map-container"
            >
              <AdvancedMarker position={{ lat: 38.6765229251886, lng: -9.164671861177789 }} />
            </Map>
          </APIProvider>
          <address>
            Av. Dom Nuno Álvares Pereira
            <br />
            2800-181 Almada
          </address>
        </section>
      </section >
    </>
  )
}

export default Contacts