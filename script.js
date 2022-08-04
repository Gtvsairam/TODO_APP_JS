const plus = document.querySelector(".plusmain");
var popupOne = document.querySelector('#popup');
var mainblur = document.querySelector('#blur');
var mainpage = document.querySelector('#main');
var flexContainer = document.querySelector('#parent');
var secondPage = document.querySelector('#secondpage');

//// main function for all the roots
plus.addEventListener('click', function () {
  ///////creating popup@1//------------------
  const popupShow = document.createElement('div');
  popupShow.className = "popupShow"
  const newTest = document.createElement('div');
  newTest.className = "newtext";
  const spanText = document.createElement('span');
  spanText.classList.add('Add');
  spanText.innerText = "Add New List";

  const inputText1 = document.createElement('input');
  inputText1.className = "inputText1";
  inputText1.type = "text";
  inputText1.placeholder = "Add New List";

  const brTag = document.createElement('br')
  brTag.className = "brtag";

  const addButton = document.createElement('button');
  addButton.classList = "addbutton";
  addButton.innerText = "Add";

  const closeButton = document.createElement('button');
  closeButton.className = "closebutton";
  closeButton.innerText = "Close";
  //--------  close button1  delete popup//----------
  closeButton.addEventListener('click', function () {
    popupShow.style.visibility = "hidden";
    mainblur.style.filter = "blur(0px)";
  })

  ///appending parent to child//////
  popupOne.appendChild(popupShow);
  popupShow.appendChild(newTest);
  newTest.appendChild(spanText);
  popupShow.appendChild(inputText1);
  popupShow.appendChild(brTag);
  popupShow.appendChild(addButton);
  popupShow.appendChild(closeButton);

  console.log(popupOne);

  popupShow.style.visibility = "visible";
  mainblur.style.filter = "blur(15px)";
  secondPage.style.filter = "blur(15px)";

  ///----Add button@1 adiing Items function-------//

  addButton.addEventListener('click', function () {
    const taskOne = document.createElement('div');
    taskOne.className = "boxstyle";
    const tripValue = document.createElement('h3');
    tripValue.className = 'headtext';
    taskOne.innerHTML = '<hr>';
    const plusButton = document.createElement('div');
    plusButton.className = "plus";
    plusButton.innerHTML = '<i class="fa fa-plus-circle" ></i>';

    const trashButton = document.createElement('div')
    trashButton.className = "delete";
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

    ////---- apending taskone to parent------//////
    flexContainer.appendChild(taskOne);
    taskOne.appendChild(tripValue);
    taskOne.appendChild(plusButton);
    taskOne.appendChild(trashButton);
    taskOne.insertAdjacentElement('afterbegin', tripValue);
    //-----input value shows the tripvalue--------------
    tripValue.innerText = inputText1.value;

    mainblur.style.filter = "blur(0px)";
    const a1 = document.querySelector('.a1');
    a1.style.visibility = "hidden";
    popupShow.style.display = "none";
    //Delete button remove the whole card//
    trashButton.addEventListener('click', function () {
      taskOne.remove();
      mainblur.style.visibility = "visible";
      secondPage.style.visibility = "hidden";
    })
    
    secondPage.style.filter = "blur(0px)";

    /////////// @2nd - page function////////////////////////

    tripValue.addEventListener("click", function () {
      taskOne.querySelector("#tripBox");
      plus.style.visibility = "visible";
      const heading1 = document.querySelector('.heading1')
      heading1.innerText = inputText1.value;

      const backIcon = document.querySelector('.backicon');
      mainblur.style.visibility = "hidden";
      secondPage.style.visibility = "visible";
      secondPage.style.filter = "blur(0px)";
      flexContainer.style.visibility = "hidden";
      ///-------apend child to secondpage--------------//
      secondPage.appendChild(heading1);
      secondPage.appendChild(taskOne);
      ////////-----Back Icon function----------------/////
      backIcon.addEventListener('click', function () {
        // secondPage.style.filter = "blur(15px)";
        flexContainer.appendChild(taskOne);
        mainblur.style.visibility = "visible";
        flexContainer.style.visibility = "visible";
        secondPage.style.visibility = "hidden";
      });
      trashButton.addEventListener('click', function(){
        flexContainer.appendChild(taskOne);
        taskOne.remove();
        mainblur.style.visibility = "visible";
        flexContainer.style.visibility = "visible";
        secondPage.style.visibility = "hidden";
      })
      
      //-----------------------------------------------
    });
    //////////// PlusButton Function////////////

    plusButton.addEventListener('click', function () {
      mainblur.style.filter = "blur(15px)";
      secondPage.style.filter = "blur(15px)";

      mainblur.classList.add('mainblur');
      //-------creating popup@2-------------//
      const popupShow1 = document.createElement('div');
      popupShow1.className = "popupShow"
      const newTest1 = document.createElement('div');
      newTest1.className = "newtext";
      const spanText1 = document.createElement('span');
      spanText1.classList.add('Add');
      spanText1.innerText = "Add New Item";

      const inputText2 = document.createElement('input');
      inputText2.className = "inputText1";
      inputText2.type = "text";
      inputText2.placeholder = "Add New Item";

      const brTag1 = document.createElement('br')
      brTag1.className = "brtag";

      const addButton1 = document.createElement('button');
      addButton1.classList = "addbutton";
      addButton1.innerText = "Add";

      const closeButton1 = document.createElement('button');
      closeButton1.className = "closebutton";
      closeButton1.innerText = "Close";

      closeButton1.addEventListener('click', function () {
        popupShow1.style.visibility = "hidden";
        mainblur.style.filter = "blur(0px)";
      })

      ///appending parent to child//////
      popupOne.appendChild(popupShow1);
      popupShow1.appendChild(newTest1);
      newTest1.appendChild(spanText1);
      popupShow1.appendChild(inputText2);
      popupShow1.appendChild(brTag1);
      popupShow1.appendChild(addButton1);
      popupShow1.appendChild(closeButton1);

      console.log(popupOne);

      ///////Add Button@2  addings items list function///////

      addButton1.addEventListener('click', function () {

        popupShow1.style.display = "none";
        mainblur.style.filter = "blur(0px)";
        secondPage.style.filter = "blur(0px)";

        const list = document.createElement('ul');
        list.className = "list";
        const li = document.createElement('li');
        const markDone = document.createElement('button');
        markDone.className = "bt3";
        markDone.innerText = "Mark Done";
        ///////appending taskone to list/////
        taskOne.appendChild(list);
        list.appendChild(li);
        list.appendChild(markDone);
        console.log(taskOne);
        /////inputText@2 value shows in li
        li.innerText = inputText2.value;
        /// Markdone remove li
        markDone.addEventListener('click', function () {
          li.style.textDecoration = "line-through";
          li.style.color = "red";
          list.removeChild(markDone);
        })
      })
    })
  })
});
;
//------------------------------------------------////////////////////
