/**
 * Army Education Centres (AECs).
 * Paste the full list here. Each entry needs name, location, email, lat and lng.
 * The three entries below are SAMPLE DATA ONLY and must be replaced.
 */
export interface EducationCentre {
  name: string;
  location: string;
  email: string;
  lat: number;
  lng: number;
}

export const educationCentres: EducationCentre[] = [
  // SAMPLE ENTRY
  { name: "Sample AEC Catterick", location: "Catterick Garrison, North Yorkshire", email: "sample.catterick@example.com", lat: 54.3775, lng: -1.7208 },
  // SAMPLE ENTRY
  { name: "Sample AEC Tidworth", location: "Tidworth, Wiltshire", email: "sample.tidworth@example.com", lat: 51.2386, lng: -1.6636 },
  // SAMPLE ENTRY
  { name: "Sample AEC Edinburgh", location: "Edinburgh, Scotland", email: "sample.edinburgh@example.com", lat: 55.9533, lng: -3.1883 },
];
