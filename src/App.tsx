import { TeamComponent } from "./components/Team";
import { Home } from "./pages/home/home";

function App() {
  const info = {
    id: crypto.randomUUID(),
    name: "Danilo Alves",
    career: "Desenvolvedor",
    xp: 3,
    instagramUrl: "https://www.instagram.com/danilodos9818/",
    background: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    urlImage: "https://i.ibb.co/ft13q0h/1.png",
  };
  return (
    <>
      <TeamComponent {...info} />
    </>
  );
}

export default App;
