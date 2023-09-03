import { useSelector } from 'react-redux'
import HomepageLayout from './ui/pages/home/HomepageLayout'

function App() {
  const s = useSelector(s => s)
  console.log(111, s)

  return (
    <HomepageLayout />
  )
}
 

export default App
