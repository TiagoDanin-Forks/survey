import './job.styl';
import Api from './job.json';
import { ChartDoughnut } from '../../js/chart';

const $selector = document.querySelector('[data-chart="job"]');

ChartDoughnut({ api: Api, selector: $selector, quantity: 1005 });
