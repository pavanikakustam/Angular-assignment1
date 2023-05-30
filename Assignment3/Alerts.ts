// Alert popup
alert('This is an alert message.');

// Confirm popup
const result = confirm('Are you sure you want to delete?');
if (result) {
  console.log('Delete operation confirmed.');
} else {
  console.log('Delete operation canceled.');
}

// Prompt popup
const Name = prompt('Please enter your name:');
if (Name) {
  console.log('Hello, ' + Name + '!');
} else {
  console.log('No name entered.');
}