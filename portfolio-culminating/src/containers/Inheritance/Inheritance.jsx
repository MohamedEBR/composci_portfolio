import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
const Inheritance = () => {

  const attributeAdding = `
  
  //Ranking.ts
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
  
    //Other code
  }

  //Clubs.ts
  export class Clubs extends Ranking {

    /**
     * Constructor for the Clubs class.
     *
     * @constructor
     * @param rank - The rank of the club.
     * @param prev_rank - The previous rank of the club.
     * @param name - The name of the club.
     * @param league - The league to which the club belongs.
     * @param off - The offensive stat of the club.
     * @param def - The defensive stat of the club.
     * @param spi - The Schedule Performance Index (SPI) of the club.
     *
     * @beta
     */
    public constructor(
        rank: number,
        private prev_rank: number,
        name: string,
        private league: string,
        off: number,
        def: number,
        spi: number,
    ) {
        // Calls the constructor of the parent class (Ranking) with necessary parameters.
        super(rank, name, off, def, spi);
        // Sets the specific attributes 'prev_rank' and 'league' for the club.
        this.prev_rank = prev_rank;
        this.league = league;
    }

    //Other code

  }
    `

const methodOverriding = `
//FileEditor.ts
export class FileEditor {

  // Private attributes
  private filePath: string;
  private team: string;

  //Other code

  public getDataByRank(target: number)  {
    try {
      // Read and parse JSON data
      const data = JSON.parse(fs.readFileSync(this.getFilePath(), 'utf-8'));

      // Find object with the specified rank
      const result = data.find(obj => obj.rank === target);

      // Log the result to the console
      console.log(result);

      // Return the result (object or null)
      return result;
    } catch (error) {
      console.error('Error reading or parsing the JSON file:', error);
      return null;
    }
  }

  //Other code

}

//CSVEditor.ts
export class CSVEditor extends FileEditor {
  
  public constructor(filePath: string, team: string) {
      // Calls the constructor of the base class (FileEditor)
      super(filePath, team);
  }

  public getDataByRank(target: number = 1): void {
    try {
        const results: any[] = [];

        fs.createReadStream(this.getFilePath())
            .pipe(csv.parse())
            .on('data', (data: any) => {
                if (data[0] !== 'rank') {
                    results.push(data);
                }
            })
            .on('end', () => {
                const result = results.find(row => parseInt(row[0]) === target);
                if (result) {
                    console.log(result);
                } else {
                    console.log(\`No row with \${target}\`);
                }
            });
    } catch (error) {
        console.error(\`Error reading CSV file: \${error}\`);
    }
}

//Other code

}
`
  return (
    <div className='app__container' id="inheritance">
    <h2 className='bold-text'>Inheritance</h2>
      <p className='p-text'>
      Inheritance is a mechanism in object-oriented programming where a new class, known as a child class, derives the properties (attributes) and behaviors (methods) of another class, referred to as a parent class or base class.
It enhances code reusability by allowing child class to use and extend the functionalities of the parent class.
      </p>

      <h4 className='bold-text'>Child Classes and Parent Classes</h4>
      <p className='p-text'>Child classes: These inherit attributes and methods from the parent class. They can also have additional unique attributes and methods or override methods from the parent class to provide specialized behavior. <br/> Parent class: The original class from which child classes inherit. It provides common attributes and methods to its child classes.</p>
      

      <h4 className='bold-text'>Attribute Adding in child class</h4>
      <p className='p-text'>child classes can introduce new attributes that are specific to them, extending the class functionality.
These attributes are used to define properties that are relevant only to the child class, making the child class more specific and detailed. <br /> <br/> For example, the 'Ranking' parent class and 'Clubs' child classes. The 'Ranking' parent class started out with the  rank: number,
    name,
    off,
    def,
    spi, attributes. In the child class, 'CLubs', super() is used to call the constructor of the Ranking class to ensure that all the original attributes are initialized. The 'Clubs', has added two attributes being prev_rank and league to differentiate itself from the parent class and provides it's object with unique properties.</p>    
    
    <div className='app__code-block'> 
    
    <CopyBlock
  text={attributeAdding}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(attributeAdding)}
/></div>


<h4 className='bold-text'>Method Overriding</h4>
<p className='p-text'>Method overriding occurs when a child class provides a specific implementation for a method that already exists in the parent class.
The overriding method in the child class has the same name, return type, and parameters as the method in the parent class but implements the functionality differently.</p>     

<p className='p-text'>For example, the 'getDataByRank' method which originally exist in the 'FileEditor' parent class and is overridid in the 'CSVEditior' Child Class. The getDataByRank in the parent class is supposed to get an object based on an input from the json file. Firstly the medthod reads and parses the json file using the getter method this.getFilePath().This method reads the JSON data from the specified file path, parses it, and searches for an object
    with the specified rank. If found, the object is logged to the console; otherwise, null is returned. As you can see, this method only works for json files but not csv files. So in the CSVEditor child class, the method has been overrided to read and parse a csv file instead using different functionality.</p>    
    
    <div className='app__code-block'> 
    
    <CopyBlock
  text={methodOverriding}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(methodOverriding)}
/></div>

    </div>
   
  )
}

export default Inheritance