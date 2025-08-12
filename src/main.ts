// Inserting your audios here:
// Note: the first index in each slot is the id, they arn`t automised yet, Please check tha they are unique
console.log("Loading file...");

const sounds: [string, string][] = [
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


if (sounds.length < 2 || !sounds[0]) {
    throw new Error("Not enough sounds to play the game! Please add at least 2 sounds.");
}


// Edit the strings to change the ouput text 
const Language = {
    Buttons: "Guess",
    Found: "Found",
    TitleStart: "Let`s Play",
    TitleFalse: "Falsch!",
    TitleFound: "Richtig!",
    TitleSelected: "erstes",
    GuessedAll: "Alle erraten!"
}

const AudioId = {
    Name:'Audio',         // Not used yet
    CloneName:'c',        // Tag the duplicates 
}


class Selected {
    static isSelected: boolean = false;     // One Button selected
    static Element: any                     // The Selected Element, to change the atributes
    static SongId: any                      // Id of the selected Song (Pair)
}

const pairsAmount = sounds.length;
var Found = 0;                                          // Amount of the found pairs
var Pairs = [];

var isSameButton = false;                               // Is the same button pressed twice
const HeaderInfo = document.getElementById("output");  // Header Element

var CurrentSongId = sounds[0][0];
var MusicPlay = false;

class color {   // Could also be a const tbh
    static readonly NotGuessed: string = "rgb(130, 37, 37)"              // Red
    static readonly DefaultHeader: string = "rgb(108, 117, 126)"         // White ~ Grey
    static readonly Correct: string = "rgb(55, 120, 55)"                 // Green 
}

