import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import HeaderNav from "./components/HeaderNav";
import './App.css'



const App = () => {
  return (
    <>
      <HeaderNav/>
      <div className="tasks">
        <h1 className="title-container">Tareas Pendientes: Fernando </h1>
        <TasksList />
      </div>
      
    </>


   /* <Router>
      <Header />
      <main className='container content'>
        <Routes>
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/user-profile' element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </Router>*/
  )
}
export default App
