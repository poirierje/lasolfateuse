// *********************************************************************************************
// * CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD * 
// * CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD-COMPO CHORD * 
// *********************************************************************************************

var chordCompoTimeoutDelay = 2000;
var chordCompoTimeout;

function chordCompoAdd ( add ) {
	chordCompoTimeoutDelay = chordCompoTimeoutDelay + add;
	$( '#exobar-info' ).html( 'Délai : ' + chordCompoTimeoutDelay.toLocaleString() + ' ms' );
}

function chordCompo () {
	clear ();
	
	clearTimeout( chordCompoTimeout ); // Canceling previous timeout
	
	var chord = getChord();
	
	$( '#mainscreen' ).html( '<div class="chord"><div class="key">' + chord.key + '</div><div class="value">&nbsp;</div></div>' );
	
	$( '#exobar-btn'  ).html( '<a href="#" onclick="chordCompo();" class="eb-entry">J\'en veux encore !</a><a href="#" onclick="chordCompoAdd(250);" class="eb-entry">Ralentir</a><a href="#" onclick="chordCompoAdd(-250);" class="eb-entry">Accélerer</a>' );
	$( '#exobar-info' ).html( 'Délai : ' + chordCompoTimeoutDelay.toLocaleString() + ' ms' );
		
	chordCompoTimeout = setTimeout(
		function () {
			$( '#mainscreen .value' ).html( chord.value );
		},
		chordCompoTimeoutDelay
	);

}

// *********************************************************************************************
// * CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLI * 
// * CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLIDESHOW CHORD-SLI * 
// *********************************************************************************************

var chordSlideshowTimeoutDelay = 2000;
var chordSlideshowSetInterval;

function chordSlideshowAdd ( add ) {
	chordSlideshowTimeoutDelay = chordSlideshowTimeoutDelay + add;
	$( '#exobar-info' ).html( 'Délai : ' + chordSlideshowTimeoutDelay.toLocaleString() + ' ms' );

	clearInterval( chordSlideshowSetInterval );
	chordSlideshowSetInterval = setInterval(
		chordSlideshowAdd,
		chordSlideshowTimeoutDelay
	);
}

function chordSlideshowPause ( ) {
	clearInterval( chordSlideshowSetInterval );
	$( '#exobar-info' ).html( 'Délai : ' + chordCompoTimeoutDelay.toLocaleString() + ' ms (en pause)' );
}

function chordSlideshowPlay ( ) {
	clearInterval( chordSlideshowSetInterval );
	chordSlideshowSetInterval = setInterval(
		chordSlideshowAdd,
		chordSlideshowTimeoutDelay
	);
	$( '#exobar-info' ).html( 'Délai : ' + chordCompoTimeoutDelay.toLocaleString() + ' ms' );
}

function chordSlideshowAdd () {
	$( '#chord-ss' ).children().eq(0).html( $( '#chord-ss' ).children().eq(1).html( ) );
	$( '#chord-ss' ).children().eq(1).html( $( '#chord-ss' ).children().eq(2).html( ) );
	$( '#chord-ss' ).children().eq(2).html( $( '#chord-ss' ).children().eq(3).html( ) );
	$( '#chord-ss' ).children().eq(3).html( $( '#chord-ss' ).children().eq(4).html( ) );
	$( '#chord-ss' ).children().eq(4).html( getChord().key );
}

function chordSlideshow () {
	clear ();
	
	clearInterval( chordSlideshowSetInterval ); // Canceling previous setInterval
	
	$( '#mainscreen' ).html( '<div id="chord-ss">' + 
								'<div class="chord-ss-xs"> &nbsp; &nbsp; &nbsp; </div>' +
								'<div class="chord-ss-sm"> &nbsp; &nbsp; &nbsp; </div>' +
								'<div class="chord-ss-md">' + getChord().key + '</div>' +
								'<div class="chord-ss-sm">' + getChord().key + '</div>' +
								'<div class="chord-ss-xs">' + getChord().key + '</div>' +
							 '</div>');	
	
	$( '#exobar-btn'  ).html( '<a href="#" onclick="chordSlideshowAdd   (250)  ;" class="eb-entry">Ralentir</a>' + 
	                          '<a href="#" onclick="chordSlideshowAdd   (-250) ;" class="eb-entry">Accélerer</a>' + 
	                          '<a href="#" onclick="chordSlideshowPause ()     ;" class="eb-entry"><i class="material-icons">pause</i></a>' + 
	                          '<a href="#" onclick="chordSlideshowPlay  ()     ;" class="eb-entry"><i class="material-icons">play_arrow</i></a>' );
	$( '#exobar-info' ).html( 'Délai : ' + chordCompoTimeoutDelay.toLocaleString() + ' ms' );
		
	chordSlideshowSetInterval = setInterval(
		chordSlideshowAdd,
		chordSlideshowTimeoutDelay
	);

}

// *********************************************************************************************
// * INTERVALS-MACRO INTERVALS-MACRO INTERVALS-MACRO INTERVALS-MACRO INTERVALS-MACRO INTERVALS * 
// * INTERVALS-MACRO INTERVALS-MACRO INTERVALS-MACRO INTERVALS-MACRO INTERVALS-MACRO INTERVALS * 
// *********************************************************************************************

var intervalsMacroTimeoutDelay = 2000;
var intervalsMacroTimeout;

function intervalsMacroMult ( mult ) {
	intervalsMacroTimeoutDelay = intervalsMacroTimeoutDelay * mult;
	$( '#exobar-info' ).html( 'Délai : ' + intervalsMacroTimeoutDelay.toLocaleString() + ' ms' );
}

function notesViaIntervalMacro () {
	clear ();
	
	clearTimeout( intervalsMacroTimeout ); // Canceling previous timeout
	
	var noteIndex = getRandomInt( 7 ) + 7;
	var note      = notes[ noteIndex ];
	
	var intervalMacro = getIntervalMacro();

	var sens = getRandomInt(2); /* 0 = descendant, 1 = montant */
	
	$( '#mainscreen' ).html( '<div class="chord"><div class="key">' + note + '</div><div class="subkey">' + intervalMacro.key + ' ' + (sens == 0 ? 'descendante' : 'montante' ) + '</div><div class="value">&nbsp;</div></div>' );
	
	$( '#exobar-btn'  ).html( '<a href="#" onclick="notesViaIntervalMacro();" class="eb-entry">J\'en veux encore !</a><a href="#" onclick="intervalsMacroMult(2);" class="eb-entry">Ralentir</a><a href="#" onclick="intervalsMacroMult(0.5);" class="eb-entry">Accélerer</a>' );
	$( '#exobar-info' ).html( 'Délai : ' + intervalsMacroTimeoutDelay.toLocaleString() + ' ms' );
		
	intervalsMacroTimeout = setTimeout(
		function () {
			var note2 = notes [ noteIndex + intervalMacro.value * (sens == 0 ? -1 : 1 ) ];
			$( '#mainscreen .value' ).html( note2 );
		},
		intervalsMacroTimeoutDelay
	);

}

// *********************************************************************************************
// * LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTU * 
// * LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTURE-CLE LECTU * 
// *********************************************************************************************

var hard = 0; /* 0 = facile, 1 = difficile */ 

var scrollLoopMax  = 50;  
var scrollLoop     = scrollLoopMax;  
var scrollLoopStep = 1;  

var lectureCleIntervalDelay = 1000 / scrollLoopMax;
var lectureCleInterval;

var nbNotes = 20;

var notePositions = [];

var stepType = 0; /* Montée par intervalle. 0 = au hasard. */
var stepNum = 0;  /* Durée de la montée par intervalle, en nombre de notes restantes. */

var zone = "Toutes";

function lectureCleMult ( mult ) {
	lectureCleIntervalDelay = lectureCleIntervalDelay * mult;
	lectureCleDisplayInfos ();

	clearInterval( lectureCleInterval );
	lectureCleInterval = setInterval(
		lectureCleStep,
		lectureCleIntervalDelay
	);
}

function lectureCleDiff ( ) {
	if (hard == 0) {
		hard = 1;
		$( '#exobar-btn a:nth-of-type(3)' ).html( 'Plus facile !');
		$( '#exobar-btn a.zone' ).hide();
	} else {
		hard = 0;
		$( '#exobar-btn a:nth-of-type(3)' ).html( 'Plus dur !');
		$( '#exobar-btn a.zone' ).show();
	}
	lectureCleDisplayInfos ();
}

function lectureCleZoneHautSOL ( ) { zone = "Haut du SOL"; lectureCleDisplayInfos (); }
function lectureCleZoneBasSOL  ( ) { zone = "Bas du SOL" ; lectureCleDisplayInfos (); }
function lectureCleZoneHautFA  ( ) { zone = "Haut du FA" ; lectureCleDisplayInfos (); }
function lectureCleZoneBasFA   ( ) { zone = "Bas du FA"  ; lectureCleDisplayInfos (); }
function lectureCleZoneToutes  ( ) { zone = "Toutes"     ; lectureCleDisplayInfos (); }

function lectureClePause ( ) {
	clearInterval( lectureCleInterval );
	lectureCleDisplayInfos (' (en pause)');
}

function lectureClePlay ( ) {
	clearInterval( lectureCleInterval );
	lectureCleInterval = setInterval(
		lectureCleStep,
		lectureCleIntervalDelay
	);
	lectureCleDisplayInfos ();
}

/**
 * Clé de la portée 
 */ 
function newCleNum() {
	if (zone.endsWith("SOL"))
		return 1;                                                       
	else if (zone.endsWith("FA"))
		return 2;                                                       
	else
		return getRandomInt(2) + 1;                                                       
}

/**
 * Ligne de démarrage 
 */ 
function newLineNum() {
	var height, offs;
	if (hard == 0) {
		if ( zone == "Toutes"        ) { height =  7; offs = 6; };
		if ( zone.startsWith("Haut") ) { height = 13; offs = 5; };
		if ( zone.startsWith("Bas")  ) { height = 13; offs = 12; };
		return getRandomInt( $( '#mainscreen .portee:nth-child(1) .line').length - height ) + offs;  
	}
	else {
		return getRandomInt( $( '#mainscreen .portee:nth-child(1) .line').length - 0 ) + 2;  
	}
}

function lectureCleStep() {
	
	$( '#mainscreen .portee .line .note' ).remove ( );

	scrollLoop = scrollLoop + scrollLoopStep;
	if ( scrollLoop >= scrollLoopMax ) {
	
		// Supprime la dernière note si l'on est au maximum de notes.
		if ( notePositions.length == nbNotes ) 
			notePositions.shift();
			
		// Ajout d'une nouvelle note.
		var cleNum;
		var lineNum;
		var lastNote = notePositions[ notePositions.length - 1 ]; // May be undefined if empty array
		if ( (notePositions.length == 0) || (stepNum == 0) || (lastNote.line + stepType > ( (hard==0) ? 14 : 18 )) || (lastNote.line + stepType < ( (hard==0) ? 5 : 1 )) ) {

			// On enclenche une nouvelle section si la précédente est terminée, ou que l'on est hors de portée.
			stepType = getRandomInt((hard==0)?3:4);                                             // Intervalle de la montée. 0 = note au hasard. 
			if ( getRandomInt(2) == 1 ) stepType = 0 - stepType;                                // On monte chérie ? Ou on descend ?
			stepNum = getRandomInt((hard==0)?6:4) + 1;                                          // Nombre de pas.

			cleNum  = newCleNum();
			lineNum = newLineNum();
		} else {
			// On poursuit la section en cours
			if (stepType == 0) {
				if (hard == 0)                                                                      // Ligne de démarrage.
					cleNum = lastNote.cle;
				else {
					cleNum  = newCleNum();
				}
				lineNum = newLineNum();
			} else {
				cleNum  = lastNote.cle;
				lineNum = lastNote.line + stepType;
			}
			stepNum--;
		}
		
		notePositions.push( { cle:cleNum, line:lineNum, left:95 } );

		scrollLoop = 0;
	}
	
	// Décalage (scrolling) des notes.
	notePositions.forEach ( function (element) {
		element.left = element.left - (90 / (nbNotes+1) / scrollLoopMax);
	});	
	
	notePositions.forEach ( function (element, index, array) {
//		$( '#mainscreen .portee:nth-child(' + element.cle + ') .line:nth-child(' + element.line + ')' ).append ( '<div class="note' + ((array.length-index)==11?' middle':'') + '" style="left:' + element.left + '%">&#119128;</div>' );
		$( '#mainscreen .portee:nth-child(' + element.cle + ') .line:nth-child(' + element.line + ')' ).append ( '<div class="note' + ((array.length-index)==11?' middle':'') + '" style="left:' + element.left + '%">●</div>' );
	});	

	/* $( '#exobar-info' ).html( 'stepType='+stepType+' stepNum='+stepNum+' lineNum='+lineNum+' cle='+cleNum); */
}

function lectureCleDisplayInfos ( str ) {
	$( '#exobar-info' ).html( ((hard == 0) ? 'Mode :&emsp;🌺 facile' : 'Mode :&emsp;💀 difficile') /* + ' - Délai : ' + lectureCleIntervalDelay.toLocaleString() + ' ms' */ + "<br>Zone :&emsp;" + zone + (str ? str : '') );
}

function lectureCle () {
	clear ();
	addPortee( "g-clef", 8 );
	addPortee( "f-clef", 8 );
	
	$( '#exobar-btn'  ).html( '<a href="#" onclick="lectureCleMult        (1.33) ;" class="eb-entry     ">Ralentir</a>' + 
	                          '<a href="#" onclick="lectureCleMult        (0.66) ;" class="eb-entry     ">Accélerer</a>' + 
	                          '<a href="#" onclick="lectureCleDiff        (this) ;" class="eb-entry     ">Plus dur !</a>' + 
	                          '<a href="#" onclick="lectureCleZoneHautSOL (this) ;" class="eb-entry zone">Haut<br>du SOL</a>' + 
	                          '<a href="#" onclick="lectureCleZoneBasSOL  (this) ;" class="eb-entry zone">Bas<br>du SOL</a>' + 
	                          '<a href="#" onclick="lectureCleZoneHautFA  (this) ;" class="eb-entry zone">Haut<br>du FA</a>' + 
	                          '<a href="#" onclick="lectureCleZoneBasFA   (this) ;" class="eb-entry zone">Bas<br>du FA</a>' + 
	                          '<a href="#" onclick="lectureCleZoneToutes  (this) ;" class="eb-entry zone">Toutes<br>zones</a>' + 
	                          '<a href="#" onclick="lectureClePause       ()     ;" class="eb-entry     "><i class="material-icons">pause</i></a>' + 
	                          '<a href="#" onclick="lectureClePlay        ()     ;" class="eb-entry     "><i class="material-icons">play_arrow</i></a>' );
	lectureCleDisplayInfos ();
	lectureCleInterval = setInterval(
		lectureCleStep,
		lectureCleIntervalDelay
	);

}

// *********************************************************************************************
// * A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS *
// * A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS A-PROPOS *
// *********************************************************************************************

function aPropos () {
	window.location.replace("./lasolfateuse-a-propos.html");
}

// *********************************************************************************************
// * UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS * 
// * UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS UTILS * 
// *********************************************************************************************

function clear () {
	$( '#mainscreen'  ).empty( );
	$( '#exobar-btn'  ).empty( );
	$( '#exobar-info' ).empty( );
	notePositions.length = 0;
	clearInterval( chordSlideshowSetInterval );
	clearInterval(        lectureCleInterval );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getIntervalMacro ( ) {
	return intervalsMacro [ getRandomInt( intervalsMacro.length ) ];
}

function getChord ( ) {
	return chords [ getRandomInt( chords.length ) ];
}

function addPortee ( clef, line ) {
	
	var str = '<div class="portee">';
	
	for (var i = 0; i < 18; i++) {
		str = str + '<div class="line">';
		if (i == line)
			str = str + '<img src="' + clef + '.svg" class="' + clef + '"/>';
		str = str + '</div>';
	}
	str = str + '</div>';
	
	$( '#mainscreen' ).append( str );
}

// *********************************************************************************************
// * GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST *
// * GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST GAME-LIST *
// *********************************************************************************************

var gameDescList = [
	{ label : 'Composition d\'accord'                   , method : 'chordCompo'	           , subclass : ''    },
	{ label : 'Suite d\'accords'                        , method : 'chordSlideshow'        , subclass : ''    },
	{ label : 'Trouver les notes par intervalles macro' , method : 'notesViaIntervalMacro' , subclass : ''    },
	{ label : 'Lecture clés de SOL et FA'               , method : 'lectureCle'            , subclass : ''    },
	{ label : 'L\'interview...'                         , method : 'aPropos'               , subclass : ''    }
];

gameDescList.forEach(
	function ( elem, index ) {
		$( '#toolbar' ).append( '<a href="#" onclick="' + elem.method + '()" class="tb-entry ' + elem.subclass + '">&nbsp;' + elem.label + '&nbsp;</a>' );
	}
)

$(function() {                       //run when the DOM is ready
	$(".tb-entry").click(function() {  //use a class, since your ID gets mangled
		$(".tb-entry").removeClass("active");
		$(this).addClass("active");      //add the class to the clicked element
		$(this).addClass("active");      //add the class to the clicked element
	});
});
