import loadingGif from '/gifs/loading.gif';

function LoadingComponent() {
    return (
        <section className="loader-container">
            <img src={loadingGif} alt="Loading..." className="loader" />
        </section>
    );
}

export default LoadingComponent;