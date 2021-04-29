
const todos = [
    { name: 'task1', key: 1, status: 'overdue' },
    { name: 'task2', key: 2, status: 'overdue' },
    { name: 'task3', key: 3, status: 'done' },
    { name: 'task4', key: 4, status: 'active' },
    { name: 'task5', key: 5, status: 'active' },
    { name: 'task6', key: 6, status: 'active' },
    { name: 'task7', key: 7, status: 'active' }
  ];
  
  const parent = document.querySelector('body > div > div:nth-child(4) > ul');
  
  parent.innerHTML = '';
  
  
  todos.forEach(element =>{
    parent.innerHTML += `<li ${element.key}>
                              ${element.name}
                         </li>`;
                         console.log(element);
  })
  
  //  for (let i = 0; i < todos.length; i++){
  //      let todo = todos[i];
  //      parent.innerHTML += `<li ${todo.key}>
  //                              ${todo.name}
  //                          </li>`;
  //                          console.log(todo);
  //  };
   
  
  
  const rowBar = document.querySelector('span');
  rowBar.innerText = `${todos.length} items left`;
  
  const rowBarColor = document.querySelector('span');
  rowBarColor.style.backgroundColor = 'blue';
  
  const titleH = document.querySelector('h1');
  titleH.innerText = 'Hello world';
  titleH.style.color = 'red';
  
  
  