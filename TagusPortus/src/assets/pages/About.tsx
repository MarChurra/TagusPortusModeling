
const About: React.FC = () => {

  return (
    <>

      <section className="about-info-heading">
        <p><strong>Fundada em 2024</strong> sob a parceria de um grupo de entusiastas de design e arquitetura,
          a Tagus Portus procura enriquecer a paisagem urbanística da baia sul do rio Tejo e de tornar em realidade o lar ideal para os seus habitantes,
          através da construção de imóveis modernos, elegantes e eficientes.
          <br />
          <br />
          <strong> O nosso principal objetivo é e sempre será tornar a sua casa de sonho numa realidade.</strong>
        </p>
      </section>

      <section className="about-container">
        <h2>Conheça a nossa equipa</h2>
        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/b-man1.png'
              alt="Image of the founder">
            </img>
            <h3>António C</h3>
          </div>
          <p>Fundador da empresa, com doutoramento em arquitetura e
            uma grande paixão pelo design de interiores.
            <br />
            Decidiu fundar a empresa como um meio de ajudar a revitalizar e
            modernizar a paisagem urbanística da Margem Sul do Tejo, nomeadamente na sua terra natal de Almada.</p>
        </section>

        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/bs-woman1.png'
              alt="Image of the cofounder">
            </img>
            <h3>Catarina C</h3>
          </div>
          <p>Co-fundadora da empresa, apaixonada por tudo o que é design e arte. A Catarina serve como o segundo pilar da empresa,
            que procura constantemente assegurar um forte grau de qualidade e fidelidade ao projeto, em relação ao esboço original, em todos os nossos trabalhos.</p>
        </section>

        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/bs-man2.png'
              alt="Image of an employee">
            </img>
            <h3>Tiago A</h3>
          </div>
          <p>O nosso gestor de contactos e a primeira interação com os nossos fiéis clientes.
            <br />
            O Tiago assegura que os sonhos que lhe são passados são bem interpretados, para que os possamos trazer à vida.</p>
        </section>

        <section className="about-info-row">
          <div className="about-info-row-id">
            <img
              src='/icons/bs-woman2.png'
              alt="Image of an employee">
            </img>
            <h3>Inês P</h3>
          </div>
          <p>Uma das nossas talentosas designers, que é responsável por trazer à vida, em desenho,
            as ideias e sonhos dos nossos clientes, com o maior grau de fidelidade possível.</p>
        </section>

      </section>
    </>
  )
}

export default About