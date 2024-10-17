// error function to serve as a page that shows an error message

export default function Error() {
    return (
        <div className="error-container">
            <h1 className="error-title">Error</h1>
            <p className="error-message">Page not found!</p>
        </div>
    );
}
