import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
import { Ranking, FileEditor, FileEditorInheritance } from '../../assets';

const DocumentationAndUML = () => {

  const documentation = `
  /** 
 * Creates objects that carry the attributes of each club or country within the JSON Files.
 * Implements the Statistics interface for type-checking.
 *
 * @beta
 * @class
 * @export
 */
export class Ranking implements Statistics {

  // Private Attribute rank
  private rank: number;
  // Private Attribute name
  private name: string;
  // Private Attribute off
  private off: number;
  // Private Attribute def
  private def: number;
  // Private Attribute spi
  private spi: number;
  // Private Attribute avgOff
  private avgOff: number | null = null;
  // Private Attribute avgDef
  private avgDef: number | null = null;
  // Private Attribute avgSpi
  private avgSpi: number | null = null;

  /**  
   * Constructor for the Ranking class.
   *
   * @constructor
   * @param rank - The rank of the country/club.
   * @param name - The name of the country/club.
   * @param off - The offensive stat of the country/club.
   * @param def - The defensive stat of the country/club.
   * @param spi - The Schedule Performance Index (SPI) of the country/club.
   *
   * @beta
   */
  public constructor(
    rank: number,
    name: string,
    off: number,
    def: number,
    spi: number,
  ) {
    this.rank = rank;
    this.name = name;
    this.off = off;
    this.def = def;
    this.spi = spi;
  }

 /**
   * Returns the private attribute rank.
   * 
   * @returns {number} - The rank of the country/club.
   *
   * @beta
   */
  public getRank(): number {
    return this.rank;
  }
  //Other code

}

/** 
 * Creates JSON Objects and stores them in an array.
 *
 * @returns {Promise<any[]>} - A promise that resolves with an array of JSON objects (Clubs or Countries).
 *
 * @beta
 */
public getJSONData(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    // Initialize an array to store ranking objects
    const rankings: any[] = [];

    // Read the JSON file
    fs.readFile(this.getFilePath(), 'utf8', (err, data) => {
      // Handle any errors that might occur during file reading
      if (err) {
        console.error('Error reading JSON file:', err);
        reject(err);
        return;
      }
      
      try {
        // Parse the JSON data
        const jsonRankings = JSON.parse(data);

        // Create Ranking objects from JSON data
        for (const i in jsonRankings) {
          const objectData = jsonRankings[i];

          let object: any;
          if (this.getTeam() == 'club') {
            object = new Clubs(
              objectData.rank,
              objectData.prev_rank,
              objectData.name,
              objectData.league,
              objectData.off,
              objectData.def,
              objectData.spi,
            );
          } else {
            object = new Countries(
              objectData.rank,
              objectData.name,
              objectData.confed,
              objectData.off,
              objectData.def,
              objectData.spi,
            );
          }

          // Stores the objects in the rankings array
          rankings.push(object);
        }
        resolve(rankings);
      } catch (jsonErr) {
        // Handle errors that might occur during JSON parsing
        console.error('Error parsing JSON:', jsonErr);
        reject(jsonErr);
      }
    });
  });
}


  `
  return (
    
    <div className='app__container' id="uml">
       <h2 className='bold-text'>Documentaion and UML Diagrams</h2>
      <p className='p-text'>
      Documentation is an important part of programming in terms of understanding and communicating the program. It is basically comments that explain the functionality of the program and how it works. It helps viewers or co-workers easily understand the program rather than having to understand line by line. When in a team setting, documentation is important to increase efficiency within the workplace and reduce time wasted trying to understand the code. The documentation should be clear and concise to clearly communicate the functionality.  A good thing to note is that every coding language has its own unique documentation. A good example of documentation would be the Ranking class as it explains its functionality and the getJsonData method in the FileEditor Class.
      The Ranking class' attributes, methods are documented based on their purpose and functionality. The same goes to the getJsonData() method in the FileEditor class. Its purpose being to create multiple json object to store them in an array. The method's parameter and return value are also documented to ensure that the user know the data type and what to input and what to expect as a return value. 
      </p>

      <div className='app__code-block'> 
    
    <CopyBlock
  text={documentation}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(documentation)}
/></div>

<h4 className='bold-text'>UML Diagrams</h4>
<p className='p-text'>are diagrams that are used to represent classes along with their attributes, methods, and their properties. They are important for program planning. They make the planning section of a project much easier and organized which increases efficiency. It is a better alternative than planning classes on a text editor or while you are in production. For Classes, they are represented by a rectangle that is divided into three sections:
</p>

<ul>
  <li>Top Section Class Name</li>
  <li>Middle Section for Attributes</li>
  <ul> 
    <li>
    Attributes are represented by their and their visibility indicator, name along with their data types
    </li>
    </ul>
  <li>Bottom for Methods</li>
  <ul><li>Methods represented with their  their visibility indicator( + for public, - for private) , namer,parameters in parenthesis and a return type
</li></ul>
</ul>
<img src={FileEditor} alt="File Editor"/>
<h5 className='bold-text'>UML Diagrams with inheritance</h5>
<p className='p-text'>Draw a solid line with a hollow arrowhead pointing from the child class to the parent class.
The arrowhead points towards the parent class, indicating the direction of inheritance. The contents of the attribute section(middle) and the method section should include an added attribute or method, but not one from the original parent class unless you are overriding a method. When you override a method, you want to add it to your bootom section of ypur child class to indicate that the method exisiting in teh parent class is overidden in the child class.
I have two seperate examples to represent both attributes and methods.
</p>

<p className='p-text'>The Ranking parent class and the Countries and Clubs children classes. The Ranking parent class contains the attributes name, rank, off, def, spi and contains getters and setters methods. The Clubs and Countries children classes inherit these methods from the Ranking class s=using the hollow arrow which is attached to the Rankings parent class. Since they already inherit the original methods and attributes of the parent class, they shouldn't be included in the children class, unless there is method overriding. For the Clubs child class, the attributes prev_rank and league attribute as well as their getter methods have been added while the Countries child class has an added confed attribute as well as its getter method.
</p>

<img src={Ranking} alt="Ranking"/>

<p className='p-text'>An example of method overriding is in the CSVEditor child class when it overrid the getJsonData() methods in the FileEditor() Parent class. 
</p>
<img src={FileEditorInheritance} alt="File Editor Inheritance" />
</div>
  )
}

export default DocumentationAndUML