// Inserting your audios here:
// Note: the first index in each slot is the id, they arn`t automised yet, Please check tha they are unique
var sounds = [
    ['audio1', 'audio\\hamburgLandL.mp3'],
    ['audio2', 'audio\\Hobbit.mp3'],
    ['audio3', 'audio\\JugendwortWyyyyldddd.mp3'],
    ['audio4', 'audio\\memeFast.mp3'],
    ['audio5', 'audio\\wombats.mp3'],
    ['audio6', 'audio\\PinkPanther.mp3'],
    ['audio7', 'audio\\RickNeverGonna.mp3'],
    ['audio8', 'audio\\pianooo.mp3'],
    ['audio9', 'audio\\Jugendwort.mp3'],
    ['audio10', 'audio\\Amogo.mp3'],
    ['audio11', 'audio\\Madddin.mp3'],
    ['audio12', 'audio\\Pioano2.mp3'],
    ['audio13', 'audio\\HobbitWar.mp3'],
    ['audio13', 'audio\\ShoppyRonaldo.mp3'],
];
// Edit the strings to change the ouput text 
var Language = {
    Buttons: "Guess",
    Found: "Found",
    TitleStart: "Let`s Play",
    TitleFalse: "Falsch!",
    TitleFound: "Richtig!",
    TitleSelected: "erstes",
    GuessedAll: "Alle erraten!"
};
var AudioIdName = 'Audio'; // Not used yet
var AudioIdCloneName = 'c'; // Tag the duplicates 
var Selected = /** @class */ (function () {
    function Selected() {
    }
    return Selected;
}());
var pairsAmount = sounds.length;
var Found = 0; // Amount of the found pairs
var Pairs = [];
var selcted = false; // One Button is selected
var SelectedElement; // The Selected Element, to change the atributes
var SelectedSongId; // Id of the selected Song (Pair)
var isSameButton = false; // Is the same button pressed twice
var HeaderInfo = document.getElementById("output"); // Header Element
var CurrentSongId = sounds[0][0];
var MusicPlay = false;
var color = /** @class */ (function () {
    function color() {
    }
    color.NotGuessed = "rgb(130, 37, 37)"; // Red
    color.DefaultHeader = "rgb(108, 117, 126)"; // White ~ Grey
    color.Correct = "rgb(55, 120, 55)"; // Green 
    return color;
}());
