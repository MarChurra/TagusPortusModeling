const CookiesModal: React.FC<{ manageCookies: (accept: boolean) => void }> = ({ manageCookies }) => {

  return (
    <>
      <div className="cookies-overlay"></div>
      <div className="cookies-modal">
        <h3>Valorizamos a sua privacidade</h3>
        <p>Usamos cookies para melhorar a sua experiência a navegar pelo nosso site.
          Ao clicar em "Aceitar Tudo", consente em utilizar as nossas cookies.
        </p>
        <div className="cookies-consent">
          <button className="reject-btn" onClick={() => manageCookies(false)}>Rejeitar Tudo</button>
          <button className="accept-btn" onClick={() => manageCookies(true)}>Aceitar Tudo</button>
        </div>
      </div>
    </>
  )
}

export default CookiesModal