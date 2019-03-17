import 'bootstrap';
import AOS from 'aos';

import '../scss/index.scss';

$(() => {
  AOS.init();
});

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
