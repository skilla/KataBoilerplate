'use strict'

import Styles from 'root/style.css';
import { Calculator } from 'root/Calculator';

let wrapper = window.document.getElementById('wrapper');
let calculator = new Calculator();

wrapper.innerHTML = '2 x 3 = ' + calculator.multiply(2, 3);
