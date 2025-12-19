import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" style={{ color: "red" }}>
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    );
}

export default function FunctionalErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // optional: reset state, refetch, clear cache
            }}
        >
            {children}
        </ErrorBoundary>
    );
}
