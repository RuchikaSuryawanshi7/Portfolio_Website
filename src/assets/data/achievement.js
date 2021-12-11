import { v4 as uuidv4 } from 'uuid';
import HackHarvard from '../images/hackharvard.jpg';
import SmartHack from '../images/smart-hack.jpg';
import DataGrind from '../images/dat-grindWinner.jpg';
import Devfest from '../images/devfest.jpg';
import Stem from '../images/Vodafone-stem.jpg';
import GoogleSolutionChallenge from '../images/gsc.png';
import Scholarship from '../images/girlscript.jpg';
import HapeAI from '../images/shapeAI.jpg';
import WAppreciation from '../images/womenTechNetwork.jpg';

const achivement = [
  {
    id: uuidv4(),
    name: 'Google Solution Challenge 2021',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: GoogleSolutionChallenge,
  },
  {
    id: uuidv4(),
    name: 'HackHarvard Winner',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: HackHarvard,
  },
  {
    id: uuidv4(),
    name: 'Smart Hack Stage I Winner',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: SmartHack,
  },
  {
    id: uuidv4(),
    name: 'Data Grind hackathon Winner',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: DataGrind,
  },
  {
    id: uuidv4(),
    name: 'Devfest Flutter Quiz Winner',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Devfest,
  },
  {
    id: uuidv4(),
    name: 'Best Website Winner',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Stem,
  },
  {
    id: uuidv4(),
    name: 'GirlScript Scholarship',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Scholarship,
  },
  {
    id: uuidv4(),
    name: 'Letter of Appreciation',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: WAppreciation,
  },
  {
    id: uuidv4(),
    name: 'Letter of Appreciation',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: HapeAI,
  },
];

export default achivement;
