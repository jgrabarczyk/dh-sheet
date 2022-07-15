export enum BasicAptitudes {
  CHARISMA = 'Charyzma',
  DEFENCE = 'Defensywa',
  ERUDITION = 'Erudycja',
  FINESE = 'Finezja',
  OFFENCE = 'Ofensywa',
  GENERAL = 'Ogólna',
  ADAPTATION = 'Przystosowanie',
  LEADERSHIP = 'Przywództwo',
  PSIONIC = 'Psionika',
  TECHNIQUE = 'Technika',
}

export enum AttributeAptitudes {
  WEAPON_SKILL = 'Walka Wręcz',
  BALISTIC_SKILL = 'Umiejętnosci strzeleckie',
  STRENGTH = 'Siła',
  TOUGHNESS = 'Wytrzymałość',
  AGILITY = 'Zręczność',
  INTELIGENCE = 'Inteligencja',
  PERCEPTION = 'Percepcja',
  WILL_POWER = 'Siła woli',
  FELLOWSHIP = 'Ogłada',
  INFLUENCE = 'Wpływ',
}

export type Aptitudes = BasicAptitudes | AttributeAptitudes;
