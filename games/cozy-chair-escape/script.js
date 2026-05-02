const pieces = [
  { id: "flame", name: "Flame Tip" },
  { id: "collar", name: "Brass Collar" },
  { id: "stem", name: "Twisted Stem" },
  { id: "dish", name: "Wax Dish" },
  { id: "base", name: "Heavy Base" },
];

const tools = [
  { id: "tiny-key", name: "Tiny Key", icon: "key" },
  { id: "cabinet-key", name: "Cabinet Key", icon: "key" },
  { id: "brass-token", name: "Brass Token", icon: "token" },
];

const rooms = {
  study: {
    title: "The Study",
    className: "room-study",
    exits: [
      {
        id: "hallway-door",
        label: "Go to the hallway",
        className: "door right",
        style: { right: "3%", bottom: "42%" },
        room: "hallway",
        message: "The door sighs open into a narrow hallway.",
      },
    ],
    shapes: [
      "floor",
      "bookcase",
      "painting",
      "desk",
      "chair",
      "rug",
      "fireplace",
    ],
    objects: [
      {
        id: "chair-lock",
        label: "Inspect the chair lock",
        className: "chair",
        style: { left: "42%", bottom: "19%" },
        message:
          "The chair lock is shaped like an old candlestick. It needs all five brass pieces before it will turn.",
        completeMessage:
          "You press the five pieces into place. The lock warms, turns, and the cord slips free.",
        completesGame: true,
      },
      {
        id: "rug",
        label: "Move the rug",
        className: "rug",
        style: { left: "33%", bottom: "5%" },
        piece: "base",
        movable: true,
        movedClass: "moved-rug",
        revealIcon: "piece",
        message:
          "You drag the rug aside and find the heavy base of the candlestick tucked in the floorboards.",
        repeatMessage: "The rug is curled back now. Only dust and a square patch of brighter floor remain.",
      },
      {
        id: "bookcase",
        label: "Search the bookshelf",
        className: "bookcase",
        style: { left: "7%", bottom: "28%" },
        message:
          "The books are mostly mystery novels. One is titled A Practical Guide to Not Being Tied to Furniture.",
      },
      {
        id: "painting",
        label: "Move the painting",
        className: "painting",
        style: { left: "41%", top: "13%" },
        piece: "flame",
        movable: true,
        movedClass: "moved-painting",
        revealIcon: "piece",
        message:
          "The painting swings sideways. Behind it, a tiny brass flame tip glints in a neat envelope.",
        repeatMessage: "The painting hangs slightly crooked, but its secret envelope is empty.",
      },
      {
        id: "desk",
        label: "Open the desk drawer",
        className: "desk",
        style: { right: "13%", bottom: "25%" },
        requiresTool: "tiny-key",
        piece: "collar",
        revealIcon: "piece",
        lockedMessage:
          "The desk drawer is locked. The keyhole is tiny, the sort that would match a little old key.",
        message:
          "The tiny key turns. Inside the drawer, a brass collar ring is tucked under old receipts.",
        repeatMessage: "The desk drawer is open now, and the receipts have nothing else to confess.",
      },
      {
        id: "fireplace",
        label: "Check the fireplace",
        className: "fireplace",
        style: { right: "7%", bottom: "32%" },
        message:
          "The fireplace is warm but safe. Someone left a note: Small pieces make large freedoms.",
      },
    ],
  },
  hallway: {
    title: "The Hallway",
    className: "room-hallway",
    exits: [
      {
        id: "study-door",
        label: "Return to the study",
        className: "door left",
        style: { left: "4%", bottom: "42%" },
        room: "study",
        message: "You step back into the study and the patient old chair.",
      },
      {
        id: "storage-door",
        label: "Go to the storage room",
        className: "door right",
        style: { right: "4%", bottom: "42%" },
        room: "storage",
        message: "The storage room smells like cedar, dust, and possibilities.",
      },
    ],
    shapes: ["floor", "door left", "door right", "plant", "coat-rack", "mirror"],
    objects: [
      {
        id: "plant",
        label: "Move the plant",
        className: "plant",
        style: { left: "24%", bottom: "28%" },
        tool: "tiny-key",
        movable: true,
        movedClass: "moved-plant",
        revealIcon: "key",
        message:
          "You scoot the plant aside. A tiny key was hiding under the pot.",
        repeatMessage: "The plant is off to one side now, looking slightly offended.",
      },
      {
        id: "coat-rack",
        label: "Search the coat rack",
        className: "coat-rack",
        style: { right: "18%", bottom: "28%" },
        tool: "cabinet-key",
        revealIcon: "key",
        message:
          "You pat down the wool coat and find a cabinet key in the pocket.",
        repeatMessage: "The coat pocket is empty now, except for lint and mystery.",
      },
      {
        id: "mirror",
        label: "Inspect the mirror",
        className: "mirror",
        style: { left: "42%", top: "13%" },
        message:
          "In the mirror, you notice the candlestick silhouette has five distinct missing shapes.",
      },
    ],
  },
  storage: {
    title: "The Storage Room",
    className: "room-storage",
    exits: [
      {
        id: "hallway-door",
        label: "Return to the hallway",
        className: "door left",
        style: { left: "4%", bottom: "42%" },
        room: "hallway",
        message: "You return to the hallway with dust on your sleeves.",
      },
    ],
    shapes: ["floor", "door left", "cabinet", "cushion", "boxes", "shelf"],
    objects: [
      {
        id: "cabinet",
        label: "Open the cabinet",
        className: "cabinet",
        style: { left: "11%", bottom: "22%" },
        piece: "stem",
        requiresTool: "cabinet-key",
        revealIcon: "piece",
        lockedMessage:
          "The cabinet handles rattle, but the little brass lock is still shut.",
        message:
          "The cabinet key fits. The door creaks open, and the twisted stem waits inside a teacup.",
        repeatMessage: "The cabinet is open. The teacup is empty now.",
      },
      {
        id: "cushion",
        label: "Move the cushion",
        className: "cushion",
        style: { left: "42%", bottom: "29%" },
        tool: "brass-token",
        movable: true,
        movedClass: "moved-cushion",
        revealIcon: "token",
        message:
          "You lift the cushion and find a small brass token, plus one extremely stale peppermint.",
        repeatMessage: "The cushion is tipped over. The peppermint is still making its case.",
      },
      {
        id: "boxes",
        label: "Move the storage boxes",
        className: "boxes",
        style: { right: "10%", bottom: "22%" },
        piece: "dish",
        requiresTool: "brass-token",
        movable: true,
        movedClass: "moved-boxes",
        revealIcon: "piece",
        lockedMessage:
          "One box has a round token slot on its latch. Something brass and flat would probably open it.",
        message:
          "The brass token clicks into the latch. You slide the boxes apart and uncover the wax dish wrapped in brown paper.",
        repeatMessage: "The boxes have given up their best secret.",
      },
      {
        id: "shelf",
        label: "Check the shelf",
        className: "shelf",
        style: { left: "37%", top: "20%" },
        message:
          "The shelf holds jars of buttons sorted by color. Admirable, but not immediately helpful.",
      },
    ],
  },
};

const state = {
  room: "study",
  found: new Set(),
  tools: new Set(),
  moved: new Set(),
  inspected: new Set(),
  won: false,
};

const scene = document.querySelector("#scene");
const roomTitle = document.querySelector("#room-title");
const messageBox = document.querySelector("#message-box");
const inventorySlots = document.querySelector("#inventory-slots");
const silhouetteList = document.querySelector("#silhouette-list");
const winScreen = document.querySelector("#win-screen");
const resetButton = document.querySelector("#reset-button");
const playAgainButton = document.querySelector("#play-again");

function createElement(tag, className, style = {}) {
  const element = document.createElement(tag);
  element.className = className;
  Object.assign(element.style, style);
  return element;
}

function pieceIcon() {
  return createElement("span", "piece-icon");
}

function setMessage(message) {
  messageBox.textContent = message;
}

function renderSlots() {
  silhouetteList.innerHTML = "";
  inventorySlots.innerHTML = "";

  pieces.forEach((piece) => {
    const found = state.found.has(piece.id);

    const silhouette = createElement("div", `piece-slot${found ? " found" : ""}`);
    silhouette.setAttribute("title", piece.name);
    silhouette.setAttribute("aria-label", `${piece.name} ${found ? "found" : "missing"}`);
    silhouette.append(pieceIcon());
    silhouetteList.append(silhouette);

    const inventoryPiece = createElement("div", `inventory-piece${found ? "" : " empty"}`);
    inventoryPiece.setAttribute("aria-label", found ? piece.name : "Empty inventory slot");
    inventoryPiece.append(pieceIcon());
    inventorySlots.append(inventoryPiece);
  });

  tools.forEach((tool) => {
    const found = state.tools.has(tool.id);
    const inventoryTool = createElement("div", `inventory-piece tool-slot${found ? "" : " empty"}`);
    inventoryTool.setAttribute("aria-label", found ? tool.name : "Hidden room object");
    inventoryTool.append(toolIcon(tool.icon));
    inventorySlots.append(inventoryTool);
  });
}

function toolIcon(type) {
  return createElement("span", `tool-icon ${type}`);
}

function addShape(className) {
  scene.append(createElement("div", `shape ${className}`));
}

function shouldShowShape(className, room) {
  return !room.objects.some((object) => {
    const baseClass = object.className.split(" ")[0];
    return state.moved.has(object.id) && baseClass === className;
  });
}

function addReveal(object) {
  if (!state.moved.has(object.id) || (!object.piece && !object.tool)) {
    return;
  }

  const reveal = createElement("div", `hidden-find ${object.revealIcon || "piece"}`, object.style);
  reveal.setAttribute("aria-hidden", "true");
  scene.append(reveal);
}

function addHotspot(object) {
  const moved = state.moved.has(object.id);
  const classes = ["hotspot", object.className];

  if (moved && object.movedClass) {
    classes.push(object.movedClass);
  }

  if (object.requiresTool && !state.tools.has(object.requiresTool)) {
    classes.push("locked");
  }

  const button = createElement("button", classes.join(" "), object.style);
  button.type = "button";
  button.textContent = object.label;
  button.setAttribute("aria-label", object.label);
  button.addEventListener("click", () => handleObject(object));
  scene.append(button);
}

function addExit(exit) {
  const button = createElement("button", `hotspot ${exit.className}`, exit.style);
  button.type = "button";
  button.textContent = exit.label;
  button.setAttribute("aria-label", exit.label);
  button.addEventListener("click", () => {
    state.room = exit.room;
    renderRoom();
    setMessage(exit.message);
  });
  scene.append(button);
}

function handleObject(object) {
  if (object.completesGame) {
    if (state.found.size === pieces.length) {
      state.won = true;
      setMessage(object.completeMessage);
      winScreen.classList.add("show");
      winScreen.setAttribute("aria-hidden", "false");
      return;
    }

    const remaining = pieces.length - state.found.size;
    setMessage(`${object.message} ${remaining} piece${remaining === 1 ? "" : "s"} still missing.`);
    return;
  }

  if (object.movable && !state.moved.has(object.id)) {
    state.moved.add(object.id);
    renderRoom();
  }

  if (object.requiresTool && !state.tools.has(object.requiresTool)) {
    setMessage(object.lockedMessage);
    return;
  }

  if (object.tool && !state.tools.has(object.tool)) {
    state.tools.add(object.tool);
    state.inspected.add(object.id);
    renderSlots();
    setMessage(object.message);
    return;
  }

  if (object.tool && state.tools.has(object.tool)) {
    setMessage(object.repeatMessage);
    return;
  }

  if (object.piece && !state.found.has(object.piece)) {
    state.found.add(object.piece);
    state.inspected.add(object.id);
    renderSlots();
    setMessage(object.message);

    if (state.found.size === pieces.length) {
      setMessage(`${object.message} The candlestick lock in the study is ready now.`);
    }
    return;
  }

  if (object.piece && state.found.has(object.piece)) {
    setMessage(object.repeatMessage);
    return;
  }

  state.inspected.add(object.id);
  setMessage(object.message);
}

function renderRoom() {
  const room = rooms[state.room];
  roomTitle.textContent = room.title;
  scene.className = `scene ${room.className}`;
  scene.innerHTML = "";

  room.shapes.filter((shape) => shouldShowShape(shape, room)).forEach(addShape);
  room.objects.forEach(addReveal);
  room.exits.forEach(addExit);
  room.objects.forEach(addHotspot);
}

function resetGame() {
  state.room = "study";
  state.found.clear();
  state.tools.clear();
  state.moved.clear();
  state.inspected.clear();
  state.won = false;
  winScreen.classList.remove("show");
  winScreen.setAttribute("aria-hidden", "true");
  renderSlots();
  renderRoom();
  setMessage(
    "You wake in a soft armchair with a velvet cord around your wrists. The old candlestick on the lock is missing five little brass pieces."
  );
}

resetButton.addEventListener("click", resetGame);
playAgainButton.addEventListener("click", resetGame);

renderSlots();
renderRoom();
