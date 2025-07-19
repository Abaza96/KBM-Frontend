import React, { Component, type ReactNode } from "react";

type ErrorBoundaryProps = {
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

function withErrorBoundary<P extends React.PropsWithChildren<object>>(
  WrappedComponent: React.ComponentType<P>,
  fallback: ReactNode = <div>Something went wrong.</div>
) {
  return class ErrorBoundary extends Component<
    P & ErrorBoundaryProps,
    ErrorBoundaryState
  > {
    state: ErrorBoundaryState = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
      console.error("[ERROR]", error, info);
    }

    render() {
      // Spread props except 'fallback' if present
      const { fallback: fallbackProp, ...rest } = this.props as ErrorBoundaryProps & P;
      if (this.state.hasError) {
        return fallbackProp || fallback;
      }
      return <WrappedComponent {...(rest as P)} />;
    }
  };
}

export default withErrorBoundary;
