import React, { useEffect } from 'react';

function withLogging<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<React.PropsWithChildren<P>> {
  return function WithLogging(props: React.PropsWithChildren<P>) {
    useEffect(() => {
      console.log(`[LOG] ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} mounted`);
      return () => {
        console.log(`[LOG] ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withLogging;

// Usage:
// export default withLogging(MyComponent);
