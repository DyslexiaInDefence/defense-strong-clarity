// Update this date whenever the centre details below are re-confirmed.
export const AEC_LAST_CONFIRMED = "28 September 2026";

export interface ArmyEducationCentre {
  name: string;
  location: string;
  email: string;
  lat: number;
  lng: number;
}

export const armyEducationCentres: ArmyEducationCentre[] = [
  { name: "Catterick AEC (Gp 3)", location: "Catterick, North Yorkshire", email: "ETSN-3AEC-0Mailbox@mod.gov.uk", lat: 54.3767, lng: -1.647 },
  { name: "York AEC (Gp 3)", location: "York", email: "ETSN-3AEC-York-0Mailbox@mod.gov.uk", lat: 53.96, lng: -1.0873 },
  { name: "Tidworth AEC (Gp 10)", location: "Tidworth, Wiltshire", email: "ETSS-10AECGp-Tidworth-0Mailbox@mod.gov.uk", lat: 51.24, lng: -1.68 },
  { name: "Larkhill AEC (Gp 12)", location: "Larkhill, Wiltshire", email: "ETSS-12AEC-0Mailbox@mod.gov.uk", lat: 51.198, lng: -1.813 },
  { name: "Colchester AEC (Gp 18)", location: "Colchester, Essex", email: "ETSS-18AECGp-Col-0Mailbox@mod.gov.uk", lat: 51.886, lng: 0.903 },
  { name: "North Luffenham AEC (Gp 18)", location: "North Luffenham, Rutland", email: "ETSS-18AECGp-NLuff-0Mailbox@mod.gov.uk", lat: 52.63, lng: -0.546 },
  { name: "Wattisham AEC (Gp 18)", location: "Wattisham, Suffolk", email: "ETSS-18AECGp-Watt-0Mailbox@mod.gov.uk", lat: 52.123, lng: 0.955 },
  { name: "Bramcote AEC (Gp 20)", location: "Bramcote, Nottinghamshire", email: "ETSN-20AEC-Bramcote-0Mailbox@mod.gov.uk", lat: 52.921, lng: -1.235 },
  { name: "Chepstow AEC (Gp 20)", location: "Chepstow, Monmouthshire", email: "ETSN-20AEC-Chepstow-0Mailbox@mod.gov.uk", lat: 51.642, lng: -2.677 },
  { name: "Edinburgh AEC (Gp 27)", location: "Edinburgh", email: "ETSN-27AEC-0Mailbox@mod.gov.uk", lat: 55.9533, lng: -3.1883 },
  { name: "Leuchars AEC (Gp 27)", location: "Leuchars, Fife", email: "ETSN-27AEC-0Mailbox@mod.gov.uk", lat: 56.373, lng: -2.893 },
  { name: "Chatham AEC (Gp 30)", location: "Chatham, Kent", email: "ETSS-30AECGp-Chatham-0Mailbox@mod.gov.uk", lat: 51.381, lng: 0.523 },
  { name: "Windsor AEC (Gp 30)", location: "Windsor, Berkshire", email: "ETSS-30AECGp-Windsor-0Mailbox@mod.gov.uk", lat: 51.484, lng: -0.604 },
  { name: "Woolwich AEC (Gp 30)", location: "Woolwich, London", email: "ETSS-30AECGp-Woolwich-0Mailbox@mod.gov.uk", lat: 51.49, lng: 0.065 },
  { name: "Preston AEC (Gp 32)", location: "Preston, Lancashire", email: "ETSN-32AECGp-0Mailbox@mod.gov.uk", lat: 53.763, lng: -2.703 },
  { name: "Lisburn AEC (Gp 32)", location: "Lisburn, Northern Ireland", email: "ETSN-32AECGp-0Mailbox@mod.gov.uk", lat: 54.51, lng: -6.058 },
  { name: "Aldershot AEC (Gp 77)", location: "Aldershot, Hampshire", email: "ETSS-77AECGp-Aldershot-0Mailbox@mod.gov.uk", lat: 51.248, lng: -0.762 },
  { name: "Bicester AEC (Gp 77)", location: "Bicester, Oxfordshire", email: "ETSS-77AECGp-Bicester-0Mailbox@mod.gov.uk", lat: 51.902, lng: -1.15 },
];

// Overseas centre: listed in text only, never plotted on the map.
export const OVERSEAS_AEC = {
  name: "AEC Group 55 (British Forces Cyprus)",
  email: "BFC-JETS-55AEC-RstlmntGpMailbox@mod.gov.uk",
};
