
interface FullScreenViewProps {
    visible: boolean;
    children: React.ReactNode;
}

const FullScreenView = ({ visible, children,   }: FullScreenViewProps) => {
    if (!visible) return null
    
    return (
        <div   className="scale-75 translate-x-4 skew-y-3 md:transform-none fixed top-0 right-0 w-full h-full bg-accent flex justify-center items-center">
            {children}
        </div>
    )
}

export default FullScreenView