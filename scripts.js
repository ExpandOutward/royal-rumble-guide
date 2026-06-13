/* Game Console Variables 
 * Used for setGifSize() function 
 * Resolves scaling issue as width is different between system specific gifs
*/
let snes = 0;
let sega = 0;

/* Sound Variables */
let fromBio = 0; 
let soundOn = 1;
let menuMusicOn = 0;
let entranceMusicOn = 0;
let easterEggModeOn = 0;
let snesMenuTheme = document.getElementById("snesMenuTheme");

/* Wrestler Variables 
 * Used when a specific wrestler is selected to display wreslter specific content
 * SNES wrestler display functions end with 1 | Ex: showMacho1()
 * Sega wrestler display functions end with 2 | Ex: showMacho2()
*/
/* SNES */
let snesSavage = 0;
let snesPerfect = 0;
let snesTaker = 0;
let snesHart = 0;
let snesTatanka = 0;
let snesCrush = 0;
let snesFlair = 0;
let snesHBK = 0;
let snesRamon = 0;
let snesYoko = 0;
let snesLuger = 0;
let snesDiBiase = 0;
/* Sega */
let segaSavage = 0;
let segaHart = 0;
let segaHogan = 0;
let segaTaker = 0;
let segaCrush = 0;
let segaDuggan = 0;
let segaLuger = 0;
let segaHBK = 0;
let segaMartel = 0;
let segaShango = 0;
let segaRamon = 0;
let segaIRS = 0;

/* Sound and Music Functions */
/* Settings Menu Toggles */
function enableMenuMusic() {
  document.getElementById("menuMusicOn").disabled = true;
  document.getElementById("menuMusicOff").disabled = false; 
  menuMusicOn = 1;
  snesMenuTheme.play();
}

function disableMenuMusic() {
  document.getElementById("menuMusicOn").disabled = false;
  document.getElementById("menuMusicOff").disabled = true; 
  menuMusicOn = 0;
  snesMenuTheme.pause();
  snesMenuTheme.currentTime = 0;
}

function enableEntranceMusic() {
  document.getElementById("entranceMusicOn").disabled = true;
  document.getElementById("entranceMusicOff").disabled = false; 
  entranceMusicOn = 1;
}

function disableEntranceMusic() {
  document.getElementById("entranceMusicOn").disabled = false;
  document.getElementById("entranceMusicOff").disabled = true; 
  entranceMusicOn = 0;
}

document.getElementById("masterVolume").addEventListener("input", function() {
  var volume = this.value;
  updateVolume(volume);
});

function updateVolume(volume) {
  var audioElements = document.getElementsByTagName('audio');
  for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].volume = volume;
  }
} 

/* In-App Sound Functions */
/* playFromBio() stops all music and starts the menu music only if
   users click a menu item from a wrestler bio with entrance themes
   enabled
 * stopAudio() iterates through all <audio> elements to avoid writing
   specific lines of code for each entrance theme.
*/
function playFromBio() {
  if (fromBio === 1 && entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
  }

  if (fromBio === 1 && entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    snesMenuTheme.play();
  }
  fromBio = 0;
  console.log('Entrance Music: ' + entranceMusicOn + ', Menu Music: ' + menuMusicOn);
}

function stopAudio() {
  var audioElements = document.getElementsByTagName("audio");
  for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].pause();
    audioElements[i].currentTime = 0;
  }
} 

/* Show Gaming System Functions */
/* Sets system specific variable
 * Runs setGifSize() function to resolve scale issue
 * Displays system-specific div and hides  all others
 * Sets all wrestler variables for non-selected system to 0
   to resolve issue where incorrect gif was playing
*/
/* SNES */
function showSNES() {
  if (entranceMusicOn === 1 && fromBio === 1) {
    playFromBio();
  }
  fromBio = 0;
  snes = 1; 
  sega = 0;
  setGifSize();
  document.getElementById("snesCharacters").style.display = "flex";
  document.getElementById("segaCharacters").style.display = "none";
  document.getElementById("snesButton").disabled = true;
  document.getElementById("segaButton").disabled = false;
  document.getElementById("moveGuideButton").disabled = false;
  document.getElementById("matchGuideButton").disabled = false;
  document.getElementById("tipsTricksButton").disabled = false;
  document.getElementById("settingsButton").disabled = false;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "none";
  document.getElementById("matchGuide").style.display = "none";
  document.getElementById("tipsTricks").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("bioContainer").style.display = "none";
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;
}
/* Sega */
function showSega() {
  if (entranceMusicOn === 1 && fromBio === 1) {
    playFromBio();
  }
  fromBio = 0;
  snes = 0;
  sega = 1;
  setGifSize();
  document.getElementById("snesCharacters").style.display = "none";
  document.getElementById("segaCharacters").style.display = "flex";
  document.getElementById("snesButton").disabled = false;
  document.getElementById("segaButton").disabled = true;
  document.getElementById("moveGuideButton").disabled = false;
  document.getElementById("matchGuideButton").disabled = false;
  document.getElementById("tipsTricksButton").disabled = false;
  document.getElementById("settingsButton").disabled = false;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "none";
  document.getElementById("matchGuide").style.display = "none";
  document.getElementById("tipsTricks").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("bioContainer").style.display = "none";
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;
}

/* Show Menu Items Functions 
 * Sets all but selected element to display = none
 * Sets system selection buttons to disabled = false
*/
/* Move Guide*/
function showMoveGuide() {
  if (entranceMusicOn === 1 && fromBio === 1) {
    playFromBio();
  }
  document.getElementById("snesCharacters").style.display = "none";
  document.getElementById("segaCharacters").style.display = "none";
  document.getElementById("snesButton").disabled = false;
  document.getElementById("segaButton").disabled = false;
  document.getElementById("moveGuideButton").disabled = true;
  document.getElementById("matchGuideButton").disabled = false;
  document.getElementById("tipsTricksButton").disabled = false;
  document.getElementById("settingsButton").disabled = false;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "block";
  document.getElementById("matchGuide").style.display = "none";
  document.getElementById("tipsTricks").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("bioContainer").style.display = "none";
}
/* Match Guide */
function showMatchGuide() {
  if (entranceMusicOn === 1 && fromBio === 1) {
    playFromBio();
  }
  document.getElementById("snesCharacters").style.display = "none";
  document.getElementById("segaCharacters").style.display = "none";
  document.getElementById("snesButton").disabled = false;
  document.getElementById("segaButton").disabled = false;
  document.getElementById("moveGuideButton").disabled = false;
  document.getElementById("matchGuideButton").disabled = true;
  document.getElementById("tipsTricksButton").disabled = false;
  document.getElementById("settingsButton").disabled = false;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "none";
  document.getElementById("matchGuide").style.display = "flex";
  document.getElementById("tipsTricks").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("bioContainer").style.display = "none";
}
/* Tips and Tricks */
function showTipsTricks() {
  if (entranceMusicOn === 1 && fromBio === 1) {
    playFromBio();
  }
  document.getElementById("snesCharacters").style.display = "none";
  document.getElementById("segaCharacters").style.display = "none";
  document.getElementById("snesButton").disabled = false;
  document.getElementById("segaButton").disabled = false;
  document.getElementById("moveGuideButton").disabled = false;
  document.getElementById("matchGuideButton").disabled = false;
  document.getElementById("tipsTricksButton").disabled = true;
  document.getElementById("settingsButton").disabled = false;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "none";
  document.getElementById("matchGuide").style.display = "none";
  document.getElementById("tipsTricks").style.display = "flex";
  document.getElementById("settings").style.display = "none";
  document.getElementById("bioContainer").style.display = "none";
}
/* Settings */
function showSettings() {
  if (entranceMusicOn === 1 && fromBio === 1) {
    playFromBio();
  }
  document.getElementById("snesCharacters").style.display = "none";
  document.getElementById("segaCharacters").style.display = "none";
  document.getElementById("snesButton").disabled = false;
  document.getElementById("segaButton").disabled = false;
  document.getElementById("moveGuideButton").disabled = false;
  document.getElementById("matchGuideButton").disabled = false;
  document.getElementById("tipsTricksButton").disabled = false;
  document.getElementById("settingsButton").disabled = true;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "none";
  document.getElementById("matchGuide").style.display = "none";
  document.getElementById("tipsTricks").style.display = "none";
  document.getElementById("settings").style.display = "block";
  document.getElementById("bioContainer").style.display = "none";
}

function displayWrestler() {  
  document.getElementById("snesCharacters").style.display = "none";
  document.getElementById("segaCharacters").style.display = "none";
  document.getElementById("snesButton").disabled = false;
  document.getElementById("segaButton").disabled = false;
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
  document.getElementById("moveGuide").style.display = "none";
  document.getElementById("matchGuide").style.display = "none";
  document.getElementById("tipsTricks").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("bioContainer").style.display = "block";
}

/* Functions for Settings Menu */

/* Show SNES Wrestler Bio Functions */
/* Macho Man Randy Savage (SNES)*/
function showMacho1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 1;
  snesHennig = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesMachoTheme = document.getElementById("snesMachoTheme");
    snesMachoTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesMachoTheme = document.getElementById("snesMachoTheme");
    snesMachoTheme.play();
  }

  document.getElementById("name").innerHTML = '"Macho Man" Randy Savage';
  document.getElementById("photo").src = "images/snes/macho.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Sarasota, Florida</p>" +
  "<p><strong>Height:</strong> 6'2 </p>" +
  "<p><strong>Weight:</strong> 245 lbs </p>" +
  "<p><strong>Signature Move:</strong> Flying Elbow Smash </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Flying Elbow Smash</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: On Top Rope" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/snesSavage.png";

  console.log("snesSavage: " + snesSavage + "segaSavage: " + segaSavage + 
  " | snes: " + snes + " sega: " + sega);
}

/* Mr. Perfect (SNES) */
function showPerfect1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 1;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesPerfectTheme = document.getElementById("snesPerfectTheme");
    snesPerfectTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesPerfectTheme = document.getElementById("snesPerfectTheme");
    snesPerfectTheme.play();
  }

  document.getElementById("name").innerHTML = "Mr. Perfect";
  document.getElementById("photo").src = "images/snes/perfect.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Minnesota</p>" +
  "<p><strong>Height:</strong> 6'4 </p>" +
  "<p><strong>Weight:</strong> 257 lbs </p>" +
  "<p><strong>Signature Move:</strong> Perfect-plex </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Perfect-plex</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /> " +
  "rapidly </p>" +
  "<p><strong>Player Condition</strong>: In A Lock Up" +
  "<p><strong>Opponent Condition</strong>: In A Lock Up";

  document.getElementById("sigGif").src = "images/gifs/snesPerfect.png";
}

/* The Undertaker (SNES) */
function showTaker1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 1;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesTakerTheme = document.getElementById("snesTakerTheme");
    snesTakerTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesTakerTheme = document.getElementById("snesTakerTheme");
    snesTakerTheme.play();
  }

  document.getElementById("name").innerHTML = "The Undertaker";
  document.getElementById("photo").src = "images/snes/taker.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Death Valley </p>" +
  "<p><strong>Height:</strong> 6'10 1/2 </p>" +
  "<p><strong>Weight:</strong> 328 lbs </p>" +
  "<p><strong>Signature Move:</strong> Tombstone </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Tombstone</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /> " +
  "rapidly </p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In A Lock Up";

  document.getElementById("sigGif").src = "images/gifs/snesTaker.png";
}

/* Bret "Hitman" Hart (SNES) */
function showHart1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 1;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesHartTheme = document.getElementById("snesHartTheme");
    snesHartTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesHartTheme = document.getElementById("snesHartTheme");
    snesHartTheme.play();
  }

  document.getElementById("name").innerHTML = 'Bret "Hitman" Hart';
  document.getElementById("photo").src = "images/snes/hitman.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Calgary, Alberta, Canada</p>" +
  "<p><strong>Height:</strong> 6'0 </p>" +
  "<p><strong>Weight:</strong> 234 lbs </p>" +
  "<p><strong>Signature Move:</strong> Sharp-shooter </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Sharp-shooter</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing Near Feet" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/snesHitman.png";
}

/* Tatanka (SNES) */
function showTatanka1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 1;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesTatankaTheme = document.getElementById("snesTatankaTheme");
    snesTatankaTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesTatankaTheme = document.getElementById("snesTatankaTheme");
    snesTatankaTheme.play();
  }

  document.getElementById("name").innerHTML = "Tatanka";
  document.getElementById("photo").src = "images/snes/tatanka.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Pembroke, North Carolina </p>" +
  "<p><strong>Height:</strong> 5'11 </p>" +
  "<p><strong>Weight:</strong> 255 lbs </p>" +
  "<p><strong>Signature Move:</strong> Reverse Slam </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Reverse Slam</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing" +
  "<p><strong>Opponent Condition</strong>: Running Toward Player";

  document.getElementById("sigGif").src = "images/gifs/snesTatanka.png";
}

/* Crush (SNES) */
function showCrush1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 1;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesCrushTheme = document.getElementById("snesCrushTheme");
    snesCrushTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesCrushTheme = document.getElementById("snesCrushTheme");
    snesCrushTheme.play();
  }

  document.getElementById("name").innerHTML = "Crush";
  document.getElementById("photo").src = "images/snes/crush.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Kona Coast, Hawaii </p>" +
  "<p><strong>Height:</strong> 6'8 </p>" +
  "<p><strong>Weight:</strong> 315 lbs </p>" +
  "<p><strong>Signature Move:</strong> Cranium Crunch </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Cranium Crunch</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing Behind Opponent" +
  "<p><strong>Opponent Condition</strong>: Dazed";

  document.getElementById("sigGif").src = "images/gifs/snesCrush.png";
}

/* "Nature Boy" Ric Flair (SNES) */
function showFlair1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 1;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesFlairTheme = document.getElementById("snesFlairTheme");
    snesFlairTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesFlairTheme = document.getElementById("snesFlairTheme");
    snesFlairTheme.play();
  }

  document.getElementById("name").innerHTML = '"Nature Boy" Ric Flair';
  document.getElementById("photo").src = "images/snes/natureboy.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Charlotte, North Carolina </p>" +
  "<p><strong>Height:</strong> 5'11 </p>" +
  "<p><strong>Weight:</strong> 239 lbs </p>" +
  "<p><strong>Signature Move:</strong> Figure-4 leglock </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Figure-4 leglock</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing Near Feet" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/snesFlair.png";
}

/* Shawn Micahels (SNES) */
function showHBK1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 1;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesHBKTheme = document.getElementById("snesHBKTheme");
    snesHBKTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesHBKTheme = document.getElementById("snesHBKTheme");
    snesHBKTheme.play();
  }

  document.getElementById("name").innerHTML = "Shawn Michaels";
  document.getElementById("photo").src = "images/snes/hbk.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> San Antonio, Texas </p>" +
  "<p><strong>Height:</strong> 6'0 </p>" +
  "<p><strong>Weight:</strong> 234 lbs </p>" +
  "<p><strong>Signature Move:</strong> Back suplex </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Back suplex</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing Behind Opponent" +
  "<p><strong>Opponent Condition</strong>: Dazed";

  document.getElementById("sigGif").src = "images/gifs/snesHBK.png";
}

/* Razor Ramon (SNES) */
function showRazor1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 1;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesRamonTheme = document.getElementById("snesRamonTheme");
    snesRamonTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesRamonTheme = document.getElementById("snesRamonTheme");
    snesRamonTheme.play();
  }

  document.getElementById("name").innerHTML = "Razor Ramon";
  document.getElementById("photo").src = "images/snes/badguy.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Miami, Florida </p>" +
  "<p><strong>Height:</strong> 6'7 </p>" +
  "<p><strong>Weight:</strong> 287 lbs </p>" +
  "<p><strong>Signature Move:</strong> Razor's edge </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Razor's edge</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /> " +
  "rapidly </p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In A Lock Up";

  document.getElementById("sigGif").src = "images/gifs/snesRazor.png";
}

/* Yokozuna (SNES) */
function showYoko1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 1;
  snesLuger = 0;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesYokoTheme = document.getElementById("snesYokoTheme");
    snesYokoTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesYokoTheme = document.getElementById("snesYokoTheme");
    snesYokoTheme.play();
  }

  document.getElementById("name").innerHTML = "Yokozuna";
  document.getElementById("photo").src = "images/snes/yokozuna.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Polynesia </p>" +
  "<p><strong>Height:</strong> 6'5 </p>" +
  "<p><strong>Weight:</strong> 505 lbs </p>" +
  "<p><strong>Signature Move:</strong> Banzai drop </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Banzai drop</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing Near Upper Turnbuckle" +
  "<p><strong>Opponent Condition</strong>: On Ground Near Turnbuckle";

  document.getElementById("sigGif").src = "images/gifs/snesYoko.png";
}

/* "The Narcissist" Lex Luger */
function showLuger1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 1;
  snesDiBiase = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesLugerTheme = document.getElementById("snesLugerTheme");
    snesLugerTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesLugerTheme = document.getElementById("snesLugerTheme");
    snesLugerTheme.play();
  }

  document.getElementById("name").innerHTML = '"The Narcissist" Lex Luger';
  document.getElementById("photo").src = "images/snes/luger.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Atlanta, Georgia </p>" +
  "<p><strong>Height:</strong> 6'6 </p>" +
  "<p><strong>Weight:</strong> 275 lbs </p>" +
  "<p><strong>Signature Move:</strong> Running rorearm </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Running forearm</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Running Toward Opponent" +
  "<p><strong>Opponent Condition</strong>: Running Toward Player";

  document.getElementById("sigGif").src = "images/gifs/snesLuger.png";
}

/* "Million Dollar Man" Ted DiBiase (SNES) */
function showDiBiase1() {
  fromBio = 1;
  snes = 1;
  sega = 0;
  snesSavage = 0;
  snesPerfect = 0;
  snesTaker = 0;
  snesHart = 0;
  snesTatanka = 0;
  snesCrush = 0;
  snesFlair = 0;
  snesHBK = 0;
  snesRamon = 0;
  snesYoko = 0;
  snesLuger = 0;
  snesDiBiase = 1;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var snesDiBiaseTheme = document.getElementById("snesDiBiaseTheme");
    snesDiBiaseTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var snesDiBiaseTheme = document.getElementById("snesDiBiaseTheme");
    snesDiBiaseTheme.play();
  }

  document.getElementById("name").innerHTML = '"Million Dollar Man" Ted DiBiase';
  document.getElementById("photo").src = "images/snes/dibiase.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Seasonal Residences </p>" +
  "<p><strong>Height:</strong> 6'3 </p>" +
  "<p><strong>Weight:</strong> 256 lbs </p>" +
  "<p><strong>Signature Move:</strong> Million dollar dream </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Million dollar dream</strong>: Press " + 
  "<img src='images/buttons/snes-r.png' class='buttonImg' /></p>" +
  "<p><strong>Player Condition</strong>: Standing Behind Opponent" +
  "<p><strong>Opponent Condition</strong>: Dazed";

  document.getElementById("sigGif").src = "images/gifs/snesDiBiase.png";
}

/* Sega Character Functions */
/* "Macho Man" Randy Savage (Sega) */
function showMacho2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 1;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaMachoTheme = document.getElementById("segaMachoTheme");
    segaMachoTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaMachoTheme = document.getElementById("segaMachoTheme");
    segaMachoTheme.play();
  }

  document.getElementById("name").innerHTML = '"Macho Man" Randy Savage';
  document.getElementById("photo").src = "images/sega/savage.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Sarasota, Florida</p>" +
  "<p><strong>Height:</strong> 6'2 </p>" +
  "<p><strong>Weight:</strong> 245 lbs </p>" +
  "<p><strong>Signature Move:</strong> Flying Elbow Smash </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Flying Elbow Smash:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: On Top Rope" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/segaMacho.png";
  
  console.log("snesSavage: " + snesSavage + "segaSavage: " + segaSavage + 
  " | snes: " + snes + " sega: " + sega);
}

/* Bret "Hitman" Hart (Sega) */
function showHart2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 1;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaHartTheme = document.getElementById("segaHartTheme");
    segaHartTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaHartTheme = document.getElementById("segaHartTheme");
    segaHartTheme.play();
  }

  document.getElementById("name").innerHTML = 'Bret "Hitman" Hart';
  document.getElementById("photo").src = "images/sega/hart.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Calgary, Alberta, Canada</p>" +
  "<p><strong>Height:</strong> 6'0 </p>" +
  "<p><strong>Weight:</strong> 234 lbs </p>" +
  "<p><strong>Signature Move:</strong> Sharp-Shooter </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Sharp-Shooter: </strong>Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: Standing Near Feet" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/segaHart.png";
}

/* Hulk Hogan (Sega) */
function showHogan2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 1;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaHoganTheme = document.getElementById("segaHoganTheme");
    segaHoganTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();

    var segaHoganTheme = document.getElementById("segaHoganTheme");
    segaHoganTheme.play();
  }

  document.getElementById("name").innerHTML = "Hulk Hogan";
  document.getElementById("photo").src = "images/sega/hogan.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Venice Beach, California</p>" +
  "<p><strong>Height:</strong> 6'8 </p>" +
  "<p><strong>Weight:</strong> 275 lbs </p>" +
  "<p><strong>Signature Move:</strong> Legdrop off the ropes </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Legdrop off the ropes:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: Standing Near Head" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/segaHogan.png";
}

/* The Undertaker (Sega) */
function showTaker2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 1;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaTakerTheme = document.getElementById("segaTakerTheme");
    segaTakerTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaTakerTheme = document.getElementById("segaTakerTheme");
    segaTakerTheme.play();
  }

  document.getElementById("name").innerHTML = "The Undertaker";
  document.getElementById("photo").src = "images/sega/taker.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Death Valley </p>" +
  "<p><strong>Height:</strong> 6'10 1/2 </p>" +
  "<p><strong>Weight:</strong> 328 lbs </p>" +
  "<p><strong>Signature Move:</strong> Tombstone </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Tombstone:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  " rapidly</p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In a Lock Up";

  document.getElementById("sigGif").src = "images/gifs/segaTaker.png";
}

/* Crush (Sega) */
function showCrush2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 1;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaCrushTheme = document.getElementById("segaCrushTheme");
    segaCrushTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaCrushTheme = document.getElementById("segaCrushTheme");
    segaCrushTheme.play();
  }

  document.getElementById("name").innerHTML = "Crush";
  document.getElementById("photo").src = "images/sega/crush.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Kona Coast, Hawaii </p>" +
  "<p><strong>Height:</strong> 6'8 </p>" +
  "<p><strong>Weight:</strong> 315 lbs </p>" +
  "<p><strong>Signature Move:</strong> Cranium crunch </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Cranium crunch:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: Standing Behind Opponent" +
  "<p><strong>Opponent Condition</strong>: Dazed";

  document.getElementById("sigGif").src = "images/gifs/segaCrush.png";
}

/* "Hacksaw" Jim Duggan (Sega) */
function showDuggan2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 1;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaDugganTheme = document.getElementById("segaDugganTheme");
    segaDugganTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaDugganTheme = document.getElementById("segaDugganTheme");
    segaDugganTheme.play();
  }

  document.getElementById("name").innerHTML = "Jim duggan";
  document.getElementById("photo").src = "images/sega/hacksaw.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Glens Falls, New York </p>" +
  "<p><strong>Height:</strong> 6'4 </p>" +
  "<p><strong>Weight:</strong> 280 lbs </p>" +
  "<p><strong>Signature Move:</strong> Charging clothesline </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Charging clothesline:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: 1/2 Ring From Opponent" +
  "<p><strong>Opponent Condition</strong>: Dazed";

  document.getElementById("sigGif").src = "images/gifs/segaDuggan.png";
}

/* "The Narcissist" Lex Luger (Sega) */
function showLuger2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 1;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaLugerTheme = document.getElementById("segaLugerTheme");
    segaLugerTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaLugerTheme = document.getElementById("segaLugerTheme");
    segaLugerTheme.play();
  }

  document.getElementById("name").innerHTML = "Lex Luger";
  document.getElementById("photo").src = "images/sega/luger.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Atlanta, Georgia </p>" +
  "<p><strong>Height:</strong> 6'6 </p>" +
  "<p><strong>Weight:</strong> 275 lbs </p>" +
  "<p><strong>Signature Move:</strong> Running forearm </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Runnign forearm:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'>" +
  " rapidly</p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In a Lock Up" +
  "<p><em>(Must be near the center of the ring)</em></p>";

  document.getElementById("sigGif").src = "images/gifs/segaLuger.png";
}

/* Shawn Michaels (Sega) */
function showHBK2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 1;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaHBKTheme = document.getElementById("segaHBKTheme");
    segaHBKTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaHBKTheme = document.getElementById("segaHBKTheme");
    segaHBKTheme.play();
  }

  document.getElementById("name").innerHTML = "Shawn Michaels";
  document.getElementById("photo").src = "images/sega/hbk.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> San Antonio, Texas </p>" +
  "<p><strong>Height:</strong> 6'0 </p>" +
  "<p><strong>Weight:</strong> 234 lbs </p>" +
  "<p><strong>Signature Move:</strong> Back Suplex </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Back suplex:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: Standing Behind Opponent" +
  "<p><strong>Opponent Condition</strong>: Dazed";

  document.getElementById("sigGif").src = "images/gifs/segaHBK.png";
}

/* "The Model" Rick Martel (Sega) */
function showMartel2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 1;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaMartelTheme = document.getElementById("segaMartelTheme");
    segaMartelTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaMartelTheme = document.getElementById("segaMartelTheme");
    segaMartelTheme.play();
  }

  document.getElementById("name").innerHTML = '"The Model" Rick Martel';
  document.getElementById("photo").src = "images/sega/martel.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Cocoa Beach, Florida </p>" +
  "<p><strong>Height:</strong> 6'2 </p>" +
  "<p><strong>Weight:</strong> 234 lbs </p>" +
  "<p><strong>Signature Move:</strong> Boston crab </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Boston crab:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'</p>" +
  "<p><strong>Player Condition</strong>: Standing Near Feet" +
  "<p><strong>Opponent Condition</strong>: Down on Mat";

  document.getElementById("sigGif").src = "images/gifs/segaMartel.png";
}

/* Papa Shango (Sega) */
function showShango2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 1;
  segaRamon = 0;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaShangoTheme = document.getElementById("segaShangoTheme");
    segaShangoTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaShangoTheme = document.getElementById("segaShangoTheme");
    segaShangoTheme.play();
  }

  document.getElementById("name").innerHTML = "Papa Shango";
  document.getElementById("photo").src = "images/sega/shango.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Parts unknown </p>" +
  "<p><strong>Height:</strong> 6'5 </p>" +
  "<p><strong>Weight:</strong> 330 lbs </p>" +
  "<p><strong>Signature Move:</strong> Shoulder breaker </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Shoulder breaker:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'>" +
  " rapidly</p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In a Lock Up";

  document.getElementById("sigGif").src = "images/gifs/segaShango.png";
}

/* "The Bad Guy" Razor Ramon (Sega) */
function showRazor2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 1;
  segaIRS = 0;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaRamonTheme = document.getElementById("segaRamonTheme");
    segaRamonTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaRamonTheme = document.getElementById("segaRamonTheme");
    segaRamonTheme.play();
  }

  document.getElementById("name").innerHTML = "Razor Ramon";
  document.getElementById("photo").src = "images/sega/razor.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Miami, Florida </p>" +
  "<p><strong>Height:</strong> 6'7 </p>" +
  "<p><strong>Weight:</strong> 287 lbs </p>" +
  "<p><strong>Signature Move:</strong> Razor's edge </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Razor's edge:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'>" +
  " rapidly</p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In a Lock Up";

  document.getElementById("sigGif").src = "images/gifs/segaRazor.png";
}

/* IRS (Sega) */
function showIRS2() {
  fromBio = 1;
  snes = 0;
  sega = 1;
  segaSavage = 0;
  segaHart = 0;
  segaHogan = 0;
  segaTaker = 0;
  segaCrush = 0;
  segaDuggan = 0;
  segaLuger = 0;
  segaHBK = 0;
  segaMartel = 0;
  segaShango = 0;
  segaRamon = 0;
  segaIRS = 1;

  if (entranceMusicOn === 1 && menuMusicOn === 0) {
    stopAudio();
    menuMusicOn = 0;
    var segaIRSTheme = document.getElementById("segaIRSTheme");
    segaIRSTheme.play();
  }

  if (entranceMusicOn === 1 && menuMusicOn === 1) {
    stopAudio();
    var segaIRSTheme = document.getElementById("segaIRSTheme");
    segaIRSTheme.play();
  }

  document.getElementById("name").innerHTML = "IRS";
  document.getElementById("photo").src = "images/sega/irs.png";

  displayWrestler();

  document.getElementById("stats").innerHTML = 
  "<p><strong>From:</strong> Washington, DC </p>" +
  "<p><strong>Height:</strong> 6'2 </p>" +
  "<p><strong>Weight:</strong> 256 lbs </p>" +
  "<p><strong>Signature Move:</strong> Write-off </p>";

  document.getElementById("signature").innerHTML = 
  "<p><strong>Write-off:</strong> Press " +
  "<img src='images/buttons/gen3-a.png' class='buttonImg'>"+
  "<img src='images/buttons/gen3-b.png' class='buttonImg'>" +
  " or " +
  "<img src='images/buttons/gen6-z.png' class='buttonImg'>" +
  " rapidly</p>" +
  "<p><strong>Player Condition</strong>: In a Lock Up" +
  "<p><strong>Opponent Condition</strong>: In a Lock Up";
  "<p><em>(Must be near the center of the ring)</em></p>";

  document.getElementById("sigGif").src = "images/gifs/segaIRS.png";
}

/* Gif Play and Stop Functions */
function setGifSize() {
  let gifSize = document.getElementById("sigGif");
  if (snes == 1) {
    gifSize.style.width = "200px";
  }
  if (sega == 1) {
    gifSize.style.width = "266px";
  }
}

/* Functions to assign Signature Move GIFs / PNGs */
/* System already determined by variable assignments and setGifSize() 
   which is run when a system is selected */
function playSig() {
  document.getElementById("sigPlay").disabled = true;
  document.getElementById("sigStop").disabled = false;
/* Macho Man Randy Savage (Both)*/
  if (snesSavage == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesSavage.gif";
  }
  if (segaSavage == 1) {
    document.getElementById("sigGif").src ="images/gifs/segaMacho.gif";
  }
/* Mr Perfect (SNES)*/
  if (snesPerfect == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesPerfect.gif";
  }
/* The Undertaker (Both)*/
  if (snesTaker == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesTaker.gif";
  }
  if (segaTaker == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaTaker.gif";
  }
/* Hulk Hogan (Sega)*/
if (segaHogan == 1) {
  document.getElementById("sigGif").src = "images/gifs/segaHogan.gif";
}
/* Bret "Hitman" Hart (Both)*/
  if (snesHart == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesHitman.gif";
  }
  if (segaHart == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaHart.gif";
  }
/* Tatanka (Snes)*/ 
  if (snesTatanka == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesTatanka.gif";
  }
/* Crush (Both)*/
  if (snesCrush == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesCrush.gif";
  }
  if (segaCrush == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaCrush.gif";
  }
/* "Nature Boy" Ric Flair (SNES) */
  if (snesFlair == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesFlair.gif";
  }
/* "Hacksaw" Jim Duggan (Sega)*/
if (segaDuggan == 1) {
  document.getElementById("sigGif").src = "images/gifs/segaDuggan.gif";
}
/* Shawn Michaels (Both)*/
  if (snesHBK == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesHBK.gif";
  }
  if (segaHBK == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaHBK.gif";
  }
/* Razor Ramon (Both) */
  if (snesRamon == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesRazor.gif";
  }
  if (segaRamon == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaRazor.gif";
  }
/* Yokozuna (SNES) */
  if (snesYoko == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesYoko.gif";
  }
/* Lex Luger (Both) */
  if (snesLuger == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesLuger.gif";
  }
  if (segaLuger == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaLuger.gif";
  }
/* "Million Dollar Man" Ted DiBiase (SNES) */
  if (snesDiBiase == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesDiBiase.gif";
  }
/* "The Model" Rick Martel (sega) */
  if (segaMartel == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaMartel.gif";
  }
/* Papa Shango (sega) */
  if (segaShango == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaShango.gif";
  }
/* IRS (sega) */
if (segaIRS == 1) {
  document.getElementById("sigGif").src = "images/gifs/segaIRS.gif";
}
}

function stopSig() {
  document.getElementById("sigPlay").disabled = false;
  document.getElementById("sigStop").disabled = true;
/* Macho Man Randy Savage (both)*/
  if (snesSavage == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesSavage.png";
  }
  if (segaSavage == 1) {
    document.getElementById("sigGif").src ="images/gifs/segaMacho.png";
  }
/* Mr Perfect (SNES) */
  if (snesPerfect == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesPerfect.png";
  }
/* The Undertaker (both) */
  if (snesTaker == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesTaker.png";
  }
  if (segaTaker == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaTaker.png";
  }
/* Bret "Hitman" Hart (both) */
  if (snesHart == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesHitman.png";
  }
  if (segaHart == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaHart.png";
  }
/* Hulk Hogan (Sega) */
  if (segaHogan == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaHogan.png";
  }
/* Tatanka (SNES) */
  if (snesTatanka == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesTatanka.png";
  }
/* "Hacksaw" Jim Duggan (Sega)*/
if (segaDuggan == 1) {
  document.getElementById("sigGif").src = "images/gifs/segaDuggan.png";
}
/* Crush (both) */
  if (snesCrush == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesCrush.png";
  }
  if (segaCrush == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaCrush.png";
  }
/* "Nature Boy" Ric Flair (SNES) */
  if (snesFlair == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesFlair.png";
  }
/* Shawn Michaels (both) */
  if (snesHBK == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesHBK.png";
  }
  if (segaHBK == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaHBK.png";
  }
/* Razor Ramon (both) */
  if (snesRamon == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesRazor.png";
  }
  if (segaRamon == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaRazor.png";
  }
/* Yokozuna (SNES) */
  if (snesYoko == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesYoko.png";
  }
/* Lex Luger (both) */
  if (snesLuger == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesLuger.png";
  }
  if (segaLuger == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaLuger.png";
  }
/* "Million Dollar Man" Ted DiBiase (SNES) */
  if (snesDiBiase == 1) {
    document.getElementById("sigGif").src = "images/gifs/snesDiBiase.png";
  }
/* "The Model" Rick Martel (sega) */
  if (segaMartel == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaMartel.png";
  }
/* Papa Shango (sega) */
  if (segaShango == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaShango.png";
  }
/* IRS (Sega) */
  if (segaIRS == 1) {
    document.getElementById("sigGif").src = "images/gifs/segaIRS.png";
  }
}