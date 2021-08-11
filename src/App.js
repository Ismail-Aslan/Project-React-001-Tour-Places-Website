import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

function App() {


  const places = [
    {
      placeN: "South Island, New Zealand",
      placeI: "https://travel.usnews.com/dims4/USNEWS/a798492/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/edited_south_island_nz_getty_irma_ferreira_445x280_dxgXWlc.jpg",
      placeT: "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers."
    },
    {
      placeN: "Paris",
      placeI: "https://travel.usnews.com/dims4/USNEWS/c5a8f6d/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-532590277_2ZNe4ra.jpg",
      placeT: "The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe."
    },
    {
      placeN: "Bora Bora",
      placeI: "https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/borabora_445x280_dtTOVY1.jpg",
      placeT: "What this small French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts."
    },
    {
      placeN: "Maui",
      placeI: "https://travel.usnews.com/dims4/USNEWS/070489a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/GettyImages-117211856_TeGITRy.jpg",
      placeT: "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on the Hawaiian island's honey- or black-colored beaches, you'll find that Maui is unlike any other tropical destination."
    },
    {
      placeN: "Tahiti",
      placeI: "https://travel.usnews.com/dims4/USNEWS/a600cb2/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/tahiti_main_getty_samantha_t_photography_edited_445x280_v43QKbF.jpg",
      placeT: "Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow. "
    },
    {
      placeN: "London",
      placeI: "https://travel.usnews.com/dims4/USNEWS/0e6734a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/482151882_HjS9rWb.jpg",
      placeT: "London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. "
    },
    {
      placeN: "Rome",
      placeI: "https://travel.usnews.com/dims4/USNEWS/981979e/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_cropped_rome_445x280_f0qQD4i.jpg",
      placeT: "When you visit the Eternal City, prepare to cross a few must-see attractions – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list."
    },
    {
      placeN: "Phuket",
      placeI: "https://travel.usnews.com/dims4/USNEWS/4ef5ab1/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_image_2017_getty_resized_445x280_lr3LLEU.jpg",
      placeT: "Located in southern Thailand, Phuket offers something for everyone, especially budget-minded travelers. Activities like spa treatments and boat tours come with low price tags, as do accommodations."
    },
    {
      placeN: "Maldives",
      placeI: "https://travel.usnews.com/dims4/USNEWS/00e9466/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-520025941_5j9mOtt.jpg",
      placeT: "It is not cheap or easy to reach, but this isolated paradise between the Arabian and Laccadive seas is the personification of a dreamy tropical vacation."
    },
    {
      placeN: "Machu Picchu",
      placeI: "https://travel.usnews.com/dims4/USNEWS/4b9c8c1/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/main_mp_image_445x280_7oXslPi.jpg",
      placeT: 'A visit to the "Lost City of the Incas" is not for the faint of heart, but it is often described as a life-changing experience (once you acclimate to the altitude).'
    },
    {
      placeN: "Niagara Falls",
      placeI: "https://travel.usnews.com/dims4/USNEWS/e929997/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/niagara_falls_getty_main_resized_445x280_YGLqknI.jpg",
      placeT: "A spectacular cluster of three waterfalls, Niagara Falls is a must-see if you want a glimpse of some of North America's best natural sites."
    },
    {
      placeN: "Cappadocia",
      placeI: "https://www.planetware.com/photos-large/TR/turkey-hot-air-ballooning-over-uchisar-village-cappadocia.jpg",
      placeT: "Cliff ridges and hill crests are home to rippling panoramas of wave-like rock or wacky-shaped pinnacles that have been formed by millennia of wind and water action."
    }
  ]

  return (
    <div className="App">
      <Navbar/>
      <Header/>

      {places.map(x =>( <Card placeName={x.placeN} placeImgSrc={x.placeI} placeText={x.placeT}></Card>)
        
      )}
      

    </div>
  );
}

export default App;
