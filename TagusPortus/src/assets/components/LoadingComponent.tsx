import loadingGif from '/gifs/loading.gif';

//Animated loading component for when a certain component is still loading

const LoadingComponent: React.FC = () => {
    return (
        <section className="loader-container">
            <img src={loadingGif} alt="Loading..." className="loader" />
        </section>
    );
}

export default LoadingComponent