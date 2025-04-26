const tip = document.getElementById('tip');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');

const moodTips = {
  happy: "You're feeling great! Set some ambitious goals! 🎯",
  sad: "It's okay to take it easy today. Pick gentle tasks. 💙",
  angry: "Channel your energy into productive tasks. 💥",
  calm: "Perfect mood for deep work! Focus and flow. 🧘‍♂️"
};

function changeMood() {
  const mood = document.getElementById('mood-select').value;
  
  if (moodTips[mood]) {
    tip.textContent = moodTips[mood];
    updateBackground(mood);
  } else {
    tip.textContent = '';
    document.body.style.background = 'var(--main-bg)';
  }
}

function updateBackground(mood) {
  const backgrounds = {
    happy: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    sad: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    angry: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
    calm: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
  };
  document.body.style.background = backgrounds[mood] || 'var(--main-bg)';
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;
  li.addEventListener('click', function() {
    this.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
}
