import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';
import { Home, FileReadingAndWriting, ClassesAndObjects, DocumentationAndUML, Inheritance, SortingAlgorithms, SearchingAlgorithms, Recursion } from './containers';
import { NavBar } from './components';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <div className='app'>
        
        <FileReadingAndWriting />
        <ClassesAndObjects />
        <Inheritance />
        <DocumentationAndUML />
        <SortingAlgorithms />
        <SearchingAlgorithms />
        <Recursion />
      </div>
    </>
  );
}

export default App;
