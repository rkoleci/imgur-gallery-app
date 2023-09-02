interface HomepageProps {
    children: React.ReactNode;
    filters: React.ReactNode;

}
const Homepage = ({ filters, children }: HomepageProps) => {

    return (
        <>
         <header className="fixed top-0 w-full bg-white shadow-md">
        <div className="container mx-auto py-4">
        {filters}
        </div>
    </header>
       
          {children}
        </>
    )
}

export default Homepage