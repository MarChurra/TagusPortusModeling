import activeStyles from './ActiveStyles'

//App Footer

interface FooterProps {
  isLargeViewPort: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLargeViewPort }) => {

  return (
    <>
      {!isLargeViewPort ? (
        <footer className="app-footer">
          <h3>Marco Churra 2024</h3 >
        </footer >
      ) : <footer className="app-footer">
        <h3>Marco Churra 2024</h3 >
      </footer >
      }
    </>
  )
}

export default Footer