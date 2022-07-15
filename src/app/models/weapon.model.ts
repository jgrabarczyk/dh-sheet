import { Rarity as Craftsmanship } from './rarity.enum';

export interface WeaponDto {
  name: string;
  damage: string;
  damageType: DamageType;
  class: WeaponClass[];
  attributes: WeaponAttributes[];
  weight: string;
  penetration: number;
  description: string;
  craftsmanship: Craftsmanship;
  range?: string;
  rateOfFire?: RateOfFire;
  clip?: number;
  reload?: string;
}

export interface RateOfFire {
  single?: number;
  burst?: number;
  fullAuto?: number;
}
export enum DamageType {
  BOLT = 'boltowa',
  LASER = 'laserowa',
  FIRE = 'ogniowa',
  GUNFIRE = 'palna',
  PLASMA = 'plasmowa',
  THERMAL = 'termiczna',
  EGZOTIC = 'egzotyczna',
  NOT_ADVANCED = 'niezawawansowana',
  LAUNCHER = 'wyrzutnie',
}

export enum WeaponClass {
  MELEE = 'broń biała',
  THROW = 'rzucana',
  PISTOL = 'pistolet',
  BASIC = 'podstawowa',
  HEAVY = 'ciężka',
}

export type WeaponAttributes =
  | 'elastyczna'
  | 'porażająca'
  | 'energetyczna'
  | 'wyważona'
  | 'nieporęczna'
  | 'niewyważona'
  | 'druzgocąca'
  | 'ostra'
  | 'psioniczna'
  | `prymitywna ${number}`
  | `ogłuszająca ${number}`;

const x: WeaponAttributes = 'prymitywna 10';
