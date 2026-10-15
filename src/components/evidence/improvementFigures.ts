export const defenceBars = [
  { label: "Say dyslexia is fully accommodated: 6%", percent: 6, neutral: true },
  { label: "Say adjustments depend on leadership discretion: 68%", percent: 68, neutral: false },
  { label: "Have felt excluded at a training event at least once: 46%", percent: 46, neutral: false },
  { label: "Not sure JSP 822 and ACSO 3226 exist: 51%", percent: 51, neutral: false },
  { label: "Would not know how to help a colleague: 18%", percent: 18, neutral: false },
];

export const diagnosisSegments = [
  { label: "Diagnosed after leaving: 48%", percent: 48, colour: "bg-ribbon-yellow" },
  { label: "Diagnosed during service: 27%", percent: 27, colour: "bg-ribbon-blue" },
  { label: "Diagnosed before joining: 25%", percent: 25, colour: "bg-ribbon-green" },
];

export const journeyStages = [
  { label: "School", stats: [
    { value: 1, suffix: " in 5", explanation: "pupils with dyslexia reach grade 5 in GCSE English and maths" },
    { text: "More than half", explanation: "with no recorded special educational needs" },
    { value: 78, suffix: "%", explanation: "say people assume they aren't clever" },
    { value: 65, suffix: "%", explanation: "hide their dyslexia" },
  ] },
  { label: "Diagnosis", stats: [
    { value: 43, suffix: "%", explanation: "of children in households under £30,000 are formally diagnosed" },
    { value: 90, suffix: "%", explanation: "in households of £100,000 or more" },
  ] },
  { label: "Work", stats: [
    { value: 81, suffix: "%", explanation: "find job adverts hard to read" },
    { value: 87, suffix: "%", explanation: "find applications hard" },
    { value: 77, suffix: "%", explanation: "worry that telling an employer will cost them the job" },
  ] },
];