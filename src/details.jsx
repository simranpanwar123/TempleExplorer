import './details.css'

function Details(){
  return(
    <>
    <div className="details">
      <h3> Kartik Swami Temple – Uttarakhand </h3>


      <h4><a href="https://www.google.com/maps/@30.385805,79.0987185,17.01z?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D">📍 Location</a></h4>
      <div className="images">
      <img 
          src="location.avif" 
          alt="Kartik Swami Temple Location"
          className="location-img"
       /><br/>
       <img 
          src="loc.jpg"
          alt="Kartik Swami Temple Location"
          className="location-img"
       />
       <img 
          src="sun.jfif"
          alt="Kartik Swami Temple Location"
          className="location-img"
       />
       </div>

      <ul>
        <li><b>State:</b> Uttarakhand, India</li>
        <li><b>District:</b> Rudraprayag</li>
        <li><b>Nearest Village:</b> Kanakchauri</li>
        <li><b>Altitude:</b> Around 3,048 meters (10,000 feet) above sea level</li>
      </ul>

      <p>The temple stands on a narrow ridge, making it one of the most scenic temples in the region.</p>



      <h4>🚶 How to Reach Kartik Swami Temple</h4>

      <ol>
        <li>Travel to<b>Rudraprayag </b>  in Uttarakhand</li>
        <li>From Rudraprayag, drive about <b>38–40 km to Kanakchauri village.</b></li>
        <li>From Kanakchauri, visitors must complete a <b>3 km trekking trail</b> to reach the temple.</li>
      </ol>

      <p>The trek usually takes around 1.5 to 2 hours and is considered moderate and suitable for most travelers.</p>


      <h4>🏔 Himalayan Views</h4>
      <div className="images">

        <div className="card">
       <img src="him.jpg" className="location-img" 
         alt="Himalayan Peaks View from Kartik Swami Temple" 
        /> 
        <h2>Chaukhamba</h2>
        </div>


        <div className="card">
        <img src="Nanda.jpg" alt="mountain" className="location-img" />
        <h2>Nanda Devi</h2>
        </div>

        <div className="card">
        <img src="tri.jpg" alt="mountain"className="location-img" />
        <h2>Trishul</h2>
        </div>
        
        </div>
      <h6>From the temple peak, visitors can enjoy stunning views of several famous Himalayan peaks, including:</h6>

    <ul>
      <li>Nanda Devi</li>
      <li>Chaukhamba</li>
      <li>Neelkanth</li>
      <li>Trishul</li>
      <li>Kedarnath mountain ranges</li>
    </ul>

    <p>Sunrise and sunset views from this temple are especially breathtaking.</p>


    
    <h4>📖 Mythological Significance</h4>

    <p>According to Hindu mythology, Lord Shiva once asked his sons <b>Kartikeya and Ganesha </b>to circle the universe. Whoever returned first would receive special recognition.</p>

    <ul>
      <li>Kartikeya set off to travel the universe.</li>
      <li>Ganesha simply circled his parents, saying that parents are the entire universe.</li>
    </ul>

    <p>When Kartikeya returned and learned about this, he felt disappointed and is believed to have sacrificed his body parts, which are symbolically worshipped at Kartik Swami Temple.</p>
    


    <h4>📅 Best Time to Visit</h4>

    <h6>The best months to visit the temple are:</h6>

    <ul>
      <li><b>March to June (Spring & Summer)</b></li>
      <li><b>September to November (Autumn)</b></li>
    </ul>

    <p>The monsoon season (July–August) is usually avoided due to slippery trekking paths.</p>
    <p>
      The best months to visit Kartik Swami Temple are March to June
      and September to November when the weather is pleasant and
      Himalayan views are clear.
      </p>
    
    </div>
    </>
  )
}

export default Details;