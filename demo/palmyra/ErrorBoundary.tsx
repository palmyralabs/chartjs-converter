import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    errorMessage?: string;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            console.log(this.props);
            const msg = this.props.errorMessage || 'An error Occured';
            return <div>{msg}<br/><br/></div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;