interface HomepageProps {
    children: React.ReactNode;
    filters: React.ReactNode;
}
const Homepage = ({ filters, children }: HomepageProps) => {

    return (
        <>
            <header className="sticky top-0 w-full z-10 bg-accent shadow-md px-4">
                <div className="container mx-auto py-4 ">
                    {filters}
                </div>
            </header>
            <div className="w-screen h-screen flex items-center justify-center px-4">
                <div className="mx-auto max-w-[1280px]"> 
                    {children}
                </div>
            </div>
           
        </>
    )
}

export default Homepage