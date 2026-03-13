
import { useNavigate } from "react-router-dom"
import './home.css'
function Home(){
  const navigate = useNavigate()
  return(
    <div className="hero">
     <div className="hero-content">
       <h1><a href="/gallery">Kartik Swami Temple</a></h1>
      <p>A sacred temple surrounded by the majestic Himalayas</p>
       < button onClick={() => navigate("/details")}>Explore More</button>
    </div>
          {/* <TempleCarousel/>  */}

    // {/* <img src="download.jfif" alt=" mountain" /> */}
  
     </div>
    
  )
}

export default Home;