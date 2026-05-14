export interface FretboardPosition {
  string: number;
  fret: number;
  isRoot?: boolean;
}

export interface ScalePattern {
  name: string;
  positions: FretboardPosition[];
}

export const SCALE_PATTERNS: Record<string, ScalePattern[]> = {
  'Minor Pentatonic': [
    {
      name: 'Position 1 (E Shape)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 5 }, { string: 3, fret: 7 },
        { string: 2, fret: 5 }, { string: 2, fret: 8 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 8 }
      ]
    },
    {
      name: 'Position 2 (D Shape)',
      positions: [
        { string: 6, fret: 8, isRoot: true }, { string: 6, fret: 10 },
        { string: 5, fret: 7 }, { string: 5, fret: 10 },
        { string: 4, fret: 7 }, { string: 4, fret: 10, isRoot: true },
        { string: 3, fret: 7 }, { string: 3, fret: 9 },
        { string: 2, fret: 8 }, { string: 2, fret: 10 },
        { string: 1, fret: 8, isRoot: true }, { string: 1, fret: 10 }
      ]
    },
    {
       name: 'Position 5 (G Shape)',
       positions: [
         { string: 6, fret: 3 }, { string: 6, fret: 5, isRoot: true },
         { string: 5, fret: 3 }, { string: 5, fret: 5 },
         { string: 4, fret: 2 }, { string: 4, fret: 5 },
         { string: 3, fret: 2 }, { string: 3, fret: 5, isRoot: true },
         { string: 2, fret: 3 }, { string: 2, fret: 5 },
         { string: 1, fret: 3 }, { string: 1, fret: 5, isRoot: true }
       ]
    }
  ],
  'Aeolian Mode (Natural Minor)': [
    {
      name: 'Shape 1 (E String Root)',
      positions: [
         { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
         { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
         { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true },
         { string: 3, fret: 4 }, { string: 3, fret: 5 }, { string: 3, fret: 7 },
         { string: 2, fret: 5 }, { string: 2, fret: 6 }, { string: 2, fret: 8 },
         { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 8 }
      ]
    }
  ],
  'Phrygian Dominant': [
    {
      name: 'Standard (Metal Classic)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 6 }, { string: 6, fret: 9 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true }, { string: 4, fret: 8 },
        { string: 3, fret: 6 }, { string: 3, fret: 7 }, { string: 3, fret: 9 },
        { string: 2, fret: 5 }, { string: 2, fret: 6 }, { string: 2, fret: 9 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 6 }, { string: 1, fret: 9 }
      ]
    }
  ],
  'Locrian Mode': [
    {
      name: 'Shape A',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 6 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 6 }, { string: 5, fret: 8 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 4 }, { string: 3, fret: 5 }, { string: 3, fret: 7 },
        { string: 2, fret: 4 }, { string: 2, fret: 5 }, { string: 2, fret: 6 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 6 }, { string: 1, fret: 8 }
      ]
    }
  ],
  'Aeolian': [
    {
      name: 'Aeolian Mode',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 4 }, { string: 3, fret: 5 }, { string: 3, fret: 7 },
        { string: 2, fret: 5 }, { string: 2, fret: 6 }, { string: 2, fret: 8 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 8 }
      ]
    }
  ],
  'Phrygian': [
    {
      name: 'Shape 1 (E String Root)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 6 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 5 }, { string: 3, fret: 7 },
        { string: 2, fret: 5 }, { string: 2, fret: 6 }, { string: 2, fret: 8 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 6 }, { string: 1, fret: 8 }
      ]
    }
  ],
  'Major Pentatonic': [
    {
      name: 'Position 1 (Major Shape)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 },
        { string: 5, fret: 4 }, { string: 5, fret: 7 },
        { string: 4, fret: 4 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 4 }, { string: 3, fret: 6 },
        { string: 2, fret: 5 }, { string: 2, fret: 7 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }
      ]
    }
  ],
  'Natural Minor': [
    {
      name: 'Aeolian / Natural Minor',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 4 }, { string: 3, fret: 5 }, { string: 3, fret: 7 },
        { string: 2, fret: 5 }, { string: 2, fret: 6 }, { string: 2, fret: 8 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 8 }
      ]
    }
  ],
  'Minor Scales': [
    {
      name: 'Natural Minor (Aeolian)',
      positions: [
         { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
         { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
         { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true }
      ]
    },
    {
      name: 'Harmonic Minor',
      positions: [
         { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
         { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
         { string: 4, fret: 6 }, { string: 4, fret: 7, isRoot: true }
      ]
    }
  ],
  'Major Scale': [
    {
      name: 'Shape 1 (E pattern)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 9 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 9 },
        { string: 4, fret: 6 }, { string: 4, fret: 7, isRoot: true }, { string: 4, fret: 9 },
        { string: 3, fret: 6 }, { string: 3, fret: 7 }, { string: 3, fret: 9 },
        { string: 2, fret: 7 }, { string: 2, fret: 9 }, { string: 2, fret: 10 },
        { string: 1, fret: 7 }, { string: 1, fret: 9 }, { string: 1, fret: 10 }
      ]
    }
  ],
  'Ionian Mode': [
     {
      name: 'Ionian (Major)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 9 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 9 },
        { string: 4, fret: 6 }, { string: 4, fret: 7, isRoot: true }
      ]
    }
  ],
  'Melodic Minor': [
    {
      name: 'Shape 1',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 9 },
        { string: 4, fret: 6 }, { string: 4, fret: 7, isRoot: true },
        { string: 3, fret: 4 }, { string: 3, fret: 5 }, { string: 3, fret: 7 },
        { string: 2, fret: 5 }, { string: 2, fret: 7 }, { string: 2, fret: 9 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 8 }
      ]
    }
  ],
  'Harmonic Minor': [
    {
       name: 'Position 1 (E String Root)',
       positions: [
         { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
         { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 },
         { string: 4, fret: 6 }, { string: 4, fret: 7, isRoot: true },
         { string: 3, fret: 4 }, { string: 3, fret: 5 }, { string: 3, fret: 7 },
         { string: 2, fret: 5 }, { string: 2, fret: 6 }, { string: 2, fret: 9 },
         { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 8 }
       ]
    },
    {
      name: 'Position 4 (D String Root)',
      positions: [
        { string: 6, fret: 12 }, { string: 6, fret: 13 },
        { string: 5, fret: 11 }, { string: 5, fret: 12, isRoot: true }, { string: 5, fret: 14 },
        { string: 4, fret: 12 }, { string: 4, fret: 14 }, { string: 4, fret: 15 },
        { string: 3, fret: 13 }, { string: 3, fret: 14, isRoot: true },
        { string: 2, fret: 12 }, { string: 2, fret: 13 }, { string: 2, fret: 15 },
        { string: 1, fret: 12, isRoot: true }, { string: 1, fret: 13 }
      ]
    }
  ],
  'Diminished Scale': [
    {
      name: 'Half-Whole (Pos 1)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 6 }, { string: 6, fret: 8 }, { string: 6, fret: 9 },
        { string: 5, fret: 5 }, { string: 5, fret: 6 }, { string: 5, fret: 8 }, { string: 5, fret: 9 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true }, { string: 4, fret: 8 },
        { string: 3, fret: 5 }, { string: 3, fret: 6 }, { string: 3, fret: 8 }, { string: 3, fret: 9 },
        { string: 2, fret: 5 }, { string: 2, fret: 7 }, { string: 2, fret: 8 }, { string: 2, fret: 10, isRoot: true },
        { string: 1, fret: 8 }, { string: 1, fret: 9 }, { string: 1, fret: 11 }, { string: 1, fret: 12 }
      ]
    },
    {
      name: 'Whole-Half (Pos 1)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 }, { string: 6, fret: 10 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 8 }, { string: 5, fret: 10 }
      ]
    }
  ],
  'Mixolydian': [
    {
      name: 'Shape 1 (E String Root)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 9 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 9 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true }, { string: 4, fret: 9 },
        { string: 3, fret: 6 }, { string: 3, fret: 7 }, { string: 3, fret: 9 },
        { string: 2, fret: 5 }, { string: 2, fret: 7 }, { string: 2, fret: 8 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 9 }
      ]
    },
    {
      name: 'Shape 2 (A String Root)',
      positions: [
        { string: 5, fret: 12, isRoot: true }, { string: 5, fret: 14 }, { string: 5, fret: 16 },
        { string: 4, fret: 12 }, { string: 4, fret: 14 }, { string: 4, fret: 16 },
        { string: 3, fret: 12 }, { string: 3, fret: 14, isRoot: true }
      ]
    }
  ],
  'Dorian': [
    {
      name: 'Shape 1 (E String Root)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 7 }, { string: 5, fret: 9 },
        { string: 4, fret: 5 }, { string: 4, fret: 7, isRoot: true }, { string: 4, fret: 9 },
        { string: 3, fret: 5 }, { string: 3, fret: 7 }, { string: 3, fret: 9 },
        { string: 2, fret: 5 }, { string: 2, fret: 7 }, { string: 2, fret: 8 },
        { string: 1, fret: 5, isRoot: true }, { string: 1, fret: 7 }, { string: 1, fret: 8 }
      ]
    },
    {
      name: 'Shape 2 (A String Root)',
      positions: [
        { string: 5, fret: 12, isRoot: true }, { string: 5, fret: 14 }, { string: 5, fret: 15 },
        { string: 4, fret: 12 }, { string: 4, fret: 14 }, { string: 4, fret: 16 },
        { string: 3, fret: 12 }, { string: 3, fret: 14, isRoot: true }
      ]
    }
  ],
  'Lydian': [
    {
      name: 'Shape 1 (E String Root)',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 7 }, { string: 6, fret: 9 },
        { string: 5, fret: 6 }, { string: 5, fret: 7 }, { string: 5, fret: 9 },
        { string: 4, fret: 6 }, { string: 4, fret: 7, isRoot: true }, { string: 4, fret: 9 },
        { string: 3, fret: 6 }, { string: 3, fret: 8 }, { string: 3, fret: 9 },
        { string: 2, fret: 7 }, { string: 2, fret: 9 }, { string: 2, fret: 10 },
        { string: 1, fret: 7 }, { string: 1, fret: 9 }, { string: 1, fret: 10, isRoot: true }
      ]
    },
    {
      name: 'Shape 2 (A String Root)',
      positions: [
        { string: 5, fret: 12, isRoot: true }, { string: 5, fret: 14 }, { string: 5, fret: 16 },
        { string: 4, fret: 13 }, { string: 4, fret: 14 }, { string: 4, fret: 16 },
        { string: 3, fret: 13 }, { string: 3, fret: 14, isRoot: true }
      ]
    }
  ],
  'Chromatic': [
    {
      name: '12-Tone Row',
      positions: [
        { string: 6, fret: 5, isRoot: true }, { string: 6, fret: 6 }, { string: 6, fret: 7 }, { string: 6, fret: 8 },
        { string: 5, fret: 5 }, { string: 5, fret: 6 }, { string: 5, fret: 7 }, { string: 5, fret: 8 }
      ]
    }
  ],
  'Tritone usage': [
    {
      name: 'Devil\'s Interval',
      positions: [
        { string: 6, fret: 5, isRoot: true },
        { string: 5, fret: 6 }
      ]
    }
  ]
};
