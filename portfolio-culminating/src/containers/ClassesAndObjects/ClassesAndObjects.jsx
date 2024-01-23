import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const ClassesAndObjects = () => {
  const attributes = `
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
    }`

    const methods = `
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
    <>
    <h2 className='bold-text'>Classes And Objects</h2>
      <p className='p-text'>
      Classes are a major key point in Object-Oriented-programming that uses attribute infused instances(objects) along with methods which organize the code to increase efficiency and boost functionality.
      </p>

      <h4 className='bold-text'>Public/ Private Access</h4>
      <p className='p-text'>Use access modifiers like public and private to control how other parts of the code interact with the class. Public members are accessible from outside the class, while private members are only accessible within the class.</p>
      <h4 className='bold-text'>Attributes</h4>
      <p className='p-text'>Attributes are properties instilled within each instance of a class in order to classify each object to represent their characteristics. Attributes are specific to each object instance and they are usually initialized in a constructor. A constructor is a method that Initializes an object by inserting its attributes as parameters. </p>
      <br/>
      <p className='p-text'>A good example of attributes within a class is the world soccer ranking. Every team is an object of the Ranking, each having different attributes like names, rank, and stats. In terms of clubs,Manchester City is ranked 1, offense is n, and defense is x while Liverpool is ranked n. Both Objects have different names and stats according to their attributes
</p>

     
<CopyBlock
  text={attributes}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(attributes)}
/>

<h4 className='bold-text'>Methods</h4>
      <p className='p-text'>
Methods in object-oriented programming are functions defined within a class that describe the behaviors and actions that an object created from the class can perform. They operate on the data (attributes) contained within the class and can be used for a wide range of actions – from modifying the object's internal state(setters) to providing a response based on that state(getters). Methods can also be designed to perform operations relevant to the class's purpose without necessarily interacting with its attributes. In essence, methods define what an object can do, and they are a critical part of encapsulating functionality within a class. A good example of methods would be in the File editor class. The method used is the getJSONData() which creates multiple objects of teh Ranking class based on the data set provided. Each data set is an object instance of the File Editor class, so each outcome is different from the other objects.
</p>

<CopyBlock
  text={methods}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(methods)}
/>
</>
  )
}

export default ClassesAndObjects