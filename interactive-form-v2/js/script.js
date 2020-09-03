//focus on the first text field on load
const name = document.getElementById('name');
name.focus();
//text field that will be revealed when the 'Other' option is selected from 'Job Role'
const other = document.getElementById('other-title');
//Job Role select
const jobRole = document.getElementById('title');

//initially hidden, input field that will show when other is selected
other.style.display= 'none';

//shows the input field when other is selected, and hides it when any other job role is selected
jobRole.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
        other.style.display = 'block';
  } else {
        other.style.display = 'none';
          }
  });
