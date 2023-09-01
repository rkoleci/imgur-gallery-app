interface HomepageProps {
    children: React.ReactNode;
    filters: React.ReactNode;

}
const Homepage = ({ filters, children }: HomepageProps) => {

    return (
        <>
        filtresr {filters}
       
        </>
    )
}

export default Homepage