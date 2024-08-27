import workImages from '../../workImagesDB.tsx';

const Works: React.FC = () => {

  return (
    <>
      <h2 className="works-heading">Um vislumbre dos nossos projetos</h2>
      <section className="works-grid-display">
        {workImages.map((image, index) => {
          return (
            <div
              key={index}
              className='works-grid-images'>
              <img
                src={image.url}
                alt="The photograph for one of our projects" />
            </div>
          )
        })
        }
      </section>
    </>
  )
}

export default Works