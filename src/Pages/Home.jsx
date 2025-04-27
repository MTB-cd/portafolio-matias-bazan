import Footer from "../Components/Footer"
import Header from "../Components/Header"
import MainHome from "../Components/MainHome"
import imagen from "../assets/yo.png"



const Home = () => {
    const alumno = {
        nombre: "Matias",
        apellido: "Bazan",
        edad: 26,
        imagen: imagen,
        lenguajes: ["js", "c#","python", "java"]
    }


  return (
   
    <div>
       <Header/>
       <br />
       <MainHome alumno={alumno}/>
       <br />
       <Footer/> 
    </div>
  )
}

export default Home