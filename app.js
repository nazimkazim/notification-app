const container = document.querySelector(".container");
const numberDiv = document.querySelector(".numberDiv");
const markReadBtn = document.querySelector(".mark-read-btn");

markReadBtn.textContent = "mark as read";

const messenger = [
  {
    img: "/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    read: false,
  },
  {
    img: "./images/avatar-angela-gray.webp",
    name: "Angela Gray",
    read: false,
  },
  {
    img: "./images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    read: false,
  },
  {
    img: "./images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    read: false,
  },
  {
    img: "./images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    read: false,
  },
  {
    img: "./images/avatar-nathan-peterson.webp",
    name: "Nathan Neterson",
    read: false,
  },
  {
    img: "./images/avatar-anna-kim.webp",
    name: "Anna Kim",
    read: false,
  },
];

numberDiv.textContent = messenger.length;

markReadBtn.addEventListener("click", () => {
  readBtnClick();
});

function messengerCase(obj) {
  container.innerHTML = "";
  for (let i = 0; i < obj.length; i++) {
    const person = obj[i];
    let clx = person.read ? "personCase personCase_read" : "personCase";
    container.innerHTML += `
        <div class='${clx}' onclick = "readCase(${i})" >
        <img src="${person.img}">
        <p>${person.name} followed you</p>
        </div> `;
  }
}

function readBtnClick() {
  const allUnread = messenger.some((msg) => msg.read === false);

  // filter all objects where all messages are read
  const allReadFiltered = messenger.filter((msg) => msg.read === true).length;

  if (allReadFiltered === messenger.length) {
    for (let index = 0; index < messenger.length; index++) {
      messenger[index].read = false;
    }
    messengerCase(messenger);
    numberDiv.textContent = messenger.length
  }

  if (allUnread) {
    for (let index = 0; index < messenger.length; index++) {
      messenger[index].read = true;
    }
    messengerCase(messenger);
  }
  // some method
  const someRead = messenger.some((msg) => msg.read === true);
  if (someRead) {
    for (let index = 0; index < messenger.length; index++) {
      messenger[index].read = true;
    }
    messengerCase(messenger);
    numberDiv.textContent = 0;
  }
}

function readCase(index) {
  messenger[index].read = !messenger[index].read;
  const filterdMessages = messenger.filter((msg) => msg.read === false);
  numberDiv.textContent = filterdMessages.length;
  messengerCase(messenger);
}

messengerCase(messenger);
