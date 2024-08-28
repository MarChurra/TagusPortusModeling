import { useEffect, useState } from 'react'
import workImages from '../../workImagesDB.tsx';

const Works: React.FC = () => {

  //States to handle if an image is expanded, when clicked, or not and which one
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  const handleImageExpansion = (imageUrl: string) => {
    setExpandedImage(imageUrl)
  };

  const closeExpandedView = () => {
    setExpandedImage(null)
  };

  //Store the class names in an array to distribute them randomly
  const classNamesForGallery: string[] = [
    "small-image",
    "medium-image",
    "large-image"
  ]

  //Logic to obtain a random number, to attribute a random index of the className arrays to each image
  const randomIndexForGalleryImages = (): number => {
    return Math.floor(Math.random() * classNamesForGallery.length)
  }

  return (
    <>
      <h2 className="works-heading">Um vislumbre dos nossos projetos</h2>
      <section className="works-grid-display">
        {workImages.map((image, index) => {
          return (
            <div
              key={index}
              className={`works-grid-images ${classNamesForGallery[randomIndexForGalleryImages()]}`} >
              <img
                src={image.url}
                alt="The photograph for one of our projects"
                onClick={() => handleImageExpansion(image.url)} />
            </div>
          )
        })
        }
      </section>

      {expandedImage ? (
        <div className="expanded-image-container" onClick={closeExpandedView}>
          <img
            src={expandedImage}
            alt="Expanded view of the photograph"
            className="expanded-image"
          />
        </div>
      )
        :
        null
      }
    </>
  )
}

export default Works