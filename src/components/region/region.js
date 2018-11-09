import './region.styl';  
import Api from './region.json'; 
import { ChartDoughnut } from '../../js/chart-doughnut'; 

const $selector = document.querySelector('[data-chart="region"]'); 
 
ChartDoughnut({ api: Api, selector: $selector });