import CallToActionBtn from "../components/CallToActionBtn"

const NotFound: React.FC = () => {
    return (
        <section className="not-found-container">
            <img src="../../icons/404.png" alt="Page not found icon" />
            <p>Sorry... Unable to find the page you are looking for, please try again.</p>
            <CallToActionBtn
                description="Voltar ao Início"
                link='/'
            />
        </section>
    )
}

export default NotFound