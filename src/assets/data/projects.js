import { v4 as uuidv4 } from 'uuid';
import Freak from '../images/freak-app.jpg';
import AddictX from '../images/addictx-app.jpg';
import NetworkFoster from '../images/networkFoster.jpg';
import VCanvas from '../images/virtualCanvas.jpg';
import SVisualiazer from '../images/sorting-visualizer.jpg';
import RPortfolio from '../images/portfolio.jpg';
import Webgenix from '../images/webgenix.jpg';
import ChatApp from '../images/chatApp.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Freak - Your AI Fitness Assistant App',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: Freak,
  },
  {
    id: uuidv4(),
    name: 'AddictX - Online Addiction Recovery App',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: AddictX,
  },
  {
    id: uuidv4(),
    name: 'Sorting Visualizer',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: SVisualiazer,
  },
  {
    id: uuidv4(),
    name: 'NetworkFoster - Students Networking Platform',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: NetworkFoster,
  },
  {
    id: uuidv4(),
    name: 'Virtual Canvas',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: VCanvas,
  },
  {
    id: uuidv4(),
    name: 'React Portfolio Website',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: RPortfolio,
  },
  {
    id: uuidv4(),
    name: 'Encrypted Chap Application',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ChatApp,
  },
  {
    id: uuidv4(),
    name: 'Webgenix-Learning Site',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: Webgenix,
  },
];

export default projects;
