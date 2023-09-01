interface HomepageProps {
    children: React.ReactNode;
    filters: React.ReactNode;

}
const Homepage = ({ filters, children }: HomepageProps) => {

    return (
        <>
        {filters}
        {children}
        </>
    )
}

export default Homepage