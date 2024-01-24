import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const FileReadingAndWriting = () => {
  const fileReading = ` fs.readFile(this.getFilePath(), 'utf8', (err, data) => { 
    // Handle any errors that might occur during file reading 
    if (err) { 
      console.error('Error reading JSON file:', err); 
      reject(err); 
      return;
    }`

  const fileWriting = ` // Writes the CSV file into the chosen file name
  fs.writeFile(\`../data/\${fileName}.csv\`, csvData, 'utf8', function(err) {
    if (err) {
      console.log('Some error occurred - file either not saved or corrupted file saved.');
    } else {
      console.log('It\'s saved!');
    }
  }` 

  return (
    <div id="file" className='app__container'>
    <h2 className='bold-text'>File Reading And Writing</h2>
      <p className='p-text'>
      File reading and writing is a way to dynamically edit, create, and manage files within your workspace. But before you can create, read, or write a file, you first need to open it to initiate a connection between the programmer and the file. Then you have to declare what file mode you want to use. There are three common modes being read, write and append Each mode has different behaviors. In typescript, opening a file can be done through the fs (filesave) node-js library which can be done with typing fs.(mode) along with dot notation mode. Like example1, instead of using ‘r’ for read, we use readFile which reads the inputted file and returns its data which can be used for several instances such as creating multiple objects.
      </p>

      <h4 className='bold-text'>File Reading</h4>
      <p className='p-text'>File Reading can be used to read and fetch the data to be used in many different ways which allows you to dynamically use the data from logging it, all the way to creating an object for each data set. We can see this below as we stored the data in the variable data, we managed to create multiple objects of the Ranking class which made a boring task of creating multiple objects an easy and innovative task.</p>

     
      <div className="app__code-block">
    <CopyBlock
  text={fileReading}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(fileReading)}
/>
    </div>

<h4 className='bold-text'>File Writing</h4>
      <p className='p-text'>File Writing when you choose a file and write to it and if the file doesn’t exist a file will be created with that name. By writing you are essentially adding data to said file, whether it is plain text to a .txt file or data to a .json file. It is an efficient way to dynamically create and add information to files. However, file writing is dissimilar to File Appending. In file writing you are writing information to either an existing or non existent file without regard to the file’s contents. In File Appending, you are simply adding data to an existing file and are unable to create one. In this example, we start out with fs to open the file and then select the mode, that being .writeFile. We then select the file we want to create (filename) and write the csvData contents within it. After the code is complete, the console will log the complete message being that ‘It’s saved”
</p>

 
    <div className="app__code-block">
    <CopyBlock
  text={fileWriting}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(fileWriting)}
/>
    </div>

    </div>  )
}

export default FileReadingAndWriting;