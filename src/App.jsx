import TaskList from "./container/taskList.jsx";
import GreetingStyled from "./pure/greetingStyled.jsx";
function App() {
  return (
    <div className="bg-green-600">
      <header className=" bg-cyan-600 text-2xl justify-center items-center  p-4 gap-2 flex flex-col md:flex-row">
        <div><h1 className="text-2xl text-center text-font-bold">Notitas</h1></div>  
      </header>
      <main> 
        <section>
          <div className=" flex flex-col md:flex-row px-4 py-4 p-4  ">
            <div className="bg-yellow-400  md:w-1/3 sm:w-full p-4 h-full "> 
            </div>
            <div className="bg-fuchsia-400 md:w-2/3 sm:w-full p-4 h-1/2  ">
              <h1>Tareas</h1>
              <TaskList></TaskList>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-cyan-900 ">
        <h4 className="text-white">Creado por: CV</h4>
      </footer>

    </div>

  );
}

export default App;
