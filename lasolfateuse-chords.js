var notes = [ 'DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI', 'DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI', 'DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI' ];

var intervalsMacro = [
	{ key : 'seconde' , value : 1 },
	{ key : 'tierce'  , value : 2 },
	{ key : 'quarte'  , value : 3 },
	{ key : 'quinte'  , value : 4 },
	{ key : 'sixte'   , value : 5 },
	{ key : 'septième', value : 6 }
];

var chords = [
	{ key : 'Cb!m7' , value : 'DOb!  - MIbb!  - SOLb! - SIbb! '	},
	{ key : 'Cm7'   , value : 'DO    - MIb!   - SOL   - SIb!  '	},
	{ key : 'C#!m7' , value : 'DO#!  - MI     - SOL#! - SI   '	},
	
	{ key : 'Db!m7' , value : 'REb!  - FAb!   - LAb!  - DOb!  '	},
	{ key : 'Dm7'   , value : 'RE    - FA     - LA    - DO   '	},
	{ key : 'D#!m7' , value : 'RE#!  - FA#!   - LA#!  - DO#!  '	},

	{ key : 'Eb!m7' , value : 'MIb!  - SOLb!  - SIb!  - REb!  '	},
	{ key : 'Em7'   , value : 'MI    - SOL    - SI    - RE   '	},
	{ key : 'E#!m7' , value : 'MI#!  - SOL#!  - SI#!  - RE#!  '	},
	
	{ key : 'Fb!m7' , value : 'FAb!  - LAbb!  - DOb!  - MIbb! '	},
	{ key : 'Fm7'   , value : 'FA    - LAb!   - DO    - MIb!  '	},
	{ key : 'F#!m7' , value : 'FA#!  - LA     - DO#!  - MI   '	},
	
	{ key : 'Gb!m7' , value : 'SOLb! - SIbb!  - REb!  - FAb!  '	},
	{ key : 'Gm7'   , value : 'SOL   - SIb!   - RE    - FA   '	},
	{ key : 'G#!m7' , value : 'SOL#! - SI     - RE#!  - FA#!  '	},
	
	{ key : 'Ab!m7' , value : 'LAb!  - DOb!   - MIb!  - SOLb! '	},
	{ key : 'Am7'   , value : 'LA    - DO     - MI    - SOL  '	},
	{ key : 'A#!m7' , value : 'LA#!  - DO#!   - MI#!  - SOL#! '	},
	
	{ key : 'Bb!m7' , value : 'SIb!  - REb!   - FA    - LAb!  '	},
	{ key : 'Bm7'   , value : 'SI    - RE     - FA#!  - LA   '	},
	{ key : 'B#!m7' , value : 'SI#!  - RE#!   - FAx!  - LA#!  '	},

	
	
	{ key : 'Cb!7'  , value : 'DOb!  - MIb!   - SOLb! - SIbb! '	},
	{ key : 'C7'    , value : 'DO    - MI     - SOL   - SIb! '	},
	{ key : 'C#!7'  , value : 'DO#!  - MI#!   - SOL#! - SI '	},
	
	{ key : 'Db!7'  , value : 'REb!  - FA     - LAb!  - DOb!  '	},
	{ key : 'D7'    , value : 'RE    - FA#!   - LA    - DO  '	},
	{ key : 'D#!7'  , value : 'RE#!  - FAx!   - LA#!  - DO#!  '	},
	
	{ key : 'Eb!7'  , value : 'MIb!  - SOL    - SIb!  - REb!  '	},
	{ key : 'E7'    , value : 'MI    - SOL#!  - SI    - RE  '	},
	{ key : 'E#!7'  , value : 'MI#!  - SOLx!  - SI#!  - RE#!  '	},
	
	{ key : 'Fb!7'  , value : 'FAb!  - LAb!   - DOb!  - MIbb! '	},
	{ key : 'F7'    , value : 'FA    - LA     - DO    - MIb! '	},
	{ key : 'F#!7'  , value : 'FA#!  - LA#!   - DO#!  - MI '	},
	
	{ key : 'Gb!7'  , value : 'SOLb! - SIb!   - REb!  - FAb!  '	},
	{ key : 'G7'    , value : 'SOL   - SI     - RE    - FA  '	},
	{ key : 'G#!7'  , value : 'SOL#! - SI#!   - RE#!  - FA#!  '	},
	
	{ key : 'Ab!7'  , value : 'LAb!  - DO     - MIb!  - SOLb! '	},
	{ key : 'A7'    , value : 'LA    - DO#!   - MI    - SOL '	},
	{ key : 'A#!7'  , value : 'LA#!  - DOx!   - MI#!  - SOL#! '	},
	
	{ key : 'Bb!7'  , value : 'SIb!  - RE     - FA    - LAb!  '	},
	{ key : 'B7'    , value : 'SI    - RE#!   - FA#!  - LA  '	},
	{ key : 'B#!7'  , value : 'SI#!  - REx!   - FAx!  - LA#!  '	},
	
	
	
	{ key : 'Cb!M7' , value : 'DOb!  - MIb!   - SOLb! - SIb!  '	},
	{ key : 'CM7'   , value : 'DO    - MI     - SOL   - SI  '	},
	{ key : 'C#!M7' , value : 'DO#!  - MI#!   - SOL#! - SI#!  '	},
	
	{ key : 'Db!M7' , value : 'REb!  - FA     - LAb!  - DO '	},
	{ key : 'DM7'   , value : 'RE    - FA#!   - LA    - DO#! '	},
	{ key : 'D#!M7' , value : 'RE#!  - FAx!   - LA#!  - DOx! '	},
	
	{ key : 'Eb!M7' , value : 'MIb!  - SOL    - SIb!  - RE '	},
	{ key : 'EM7'   , value : 'MI    - SOL#!  - SI    - RE#! '	},
	{ key : 'E#!M7' , value : 'MI#!  - SOLx!  - SI#!  - REx! '	},
	
	{ key : 'Fb!M7' , value : 'FAb!  - LAb!   - DOb!  - MIb!  '	},
	{ key : 'FM7'   , value : 'FA    - LA     - DO    - MI  '	},
	{ key : 'F#!M7' , value : 'FA#!  - LA#!   - DO#!  - MI#!  '	},
	
	{ key : 'Gb!M7' , value : 'SOLb! - SIb!   - REb!  - FA '	},
	{ key : 'GM7'   , value : 'SOL   - SI     - RE    - FA#! '	},
	{ key : 'G#!M7' , value : 'SOL#! - SI#!   - RE#!  - FAx! '	},
	
	{ key : 'Ab!M7' , value : 'LAb!  - DO     - MIb!  - SOL'	},
	{ key : 'AM7'   , value : 'LA    - DO#!   - MI    - SOL#!'	},
	{ key : 'A#!M7' , value : 'LA#!  - DOx!   - MI#!  - SOLx!'	},
	
	{ key : 'Bb!M7' , value : 'SIb!  - RE     - FA    - LA '	},
	{ key : 'BM7'   , value : 'SI    - RE#!   - FA#!  - LA#! '	},
	{ key : 'B#!M7' , value : 'SI#!  - REx!   - FAx!  - LAx! '	}
];

chords.forEach(
	function ( elem, index ) {
		elem.key = elem.key.split('bb!').join('&#x1d12b;');
		elem.key = elem.key.split('b!' ).join('&#x266d;' );
		elem.key = elem.key.split('x!' ).join('&#x1d12a;');
		elem.key = elem.key.split('#!' ).join('&#x266f;' );
		
		elem.value = elem.value.split('bb!').join('&#x1d12b;');
		elem.value = elem.value.split('b!' ).join('&#x266d;' );
		elem.value = elem.value.split('x!' ).join('&#x1d12a;');
		elem.value = elem.value.split('#!' ).join('&#x266f;' );
	}
)

