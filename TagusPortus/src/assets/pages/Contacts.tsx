import { useState } from 'react'


const Contacts: React.FC = () => {

  //Declare API Key 


  //Form States
  const [fName, setFName] = useState<string>('')
  const [lName, setLName] = useState<string>('')
  const [mobileNumber, setMobileNumber] = useState<string>('')
  const [userEmail, setUserEmail] = useState<string>('')
  const [submitMessage, setUserMessage] = useState<string>('')
  const [userRequest, setUserRequest] = useState<string>('')

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  //Add logic and time out for the sucess or fail notificaiton
  const notification = (message: string, type: 'sucess' | 'fail'): void => {
    if (type === 'sucess') {
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

      if (response.ok) {
        notification(result.message, 'sucess')
      } else {
        notification('Erro ao enviar o e-mail', 'fail')
      }
    }
    catch (error) {
      notification('Erro ao enviar o e-mail.', 'fail');
    }
  }


  return (
    <>
      <section className="contacts-container">
        <h2>Entre em contacto connosco!</h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form">

          <input
            type="text"
            value={fName}
            placeholder='Introduza o seu primeiro nome'
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            type="text"
            value={lName}
            placeholder='Introduza o seu nome apelido'
            onChange={(e) => setLName(e.target.value)}
            required
          />
          <input
            type="number"
            value={mobileNumber}
            placeholder='Introduza o seu contacto telefónico'
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="email"
            value={userEmail}
            placeholder='Introduza o seu endereço de email'
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <textarea
            name="request"
            id="request"
            placeholder='Escreve aqui o seu pedido'
            onChange={(e) => setUserRequest(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar Pedido</button>
          <div className="message">{submitMessage ? <p>{submitMessage}</p> : null}</div>
        </form>

        <div className="location-info"></div>
      </section>
    </>
  )
}

export default Contacts