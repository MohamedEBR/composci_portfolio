import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';
import { FileReadingAndWriting, ClassesAndObjects, DocumentationAndUML, Inheritance, SortingAlgorithms, SearchingAlgorithms, Recursion } from './containers';
import Navbar from './components/NavBar/Navbar';
function App() {
  return (
    <div className='app'>
      <FileReadingAndWriting />
      <ClassesAndObjects />
      <Inheritance />
      <DocumentationAndUML />
      <SortingAlgorithms />
      <SearchingAlgorithms />
      <Recursion />
    </div>
  );
}

export default App;
