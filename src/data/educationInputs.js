export const inputData = (dirtyFields, errors, index = "") => [
  {
    dirtyField: dirtyFields[`institute${index}`],
    error: errors[`institute${index}`],
    hint: "მინიმუმ 2 ასო",
    id: `institute${index}`,
    label: "სასწავლებელი",
    name: `institute${index}`,
    pattern: /^.{2,}$/,
    placeholder: "სასწავლებელი",
    type: "text",
    required: true,
  },
];

export const requiredFields = [
  "institute",
  "due_dateEdu",
  "descriptionEdu",
  "degree",
];

export const allFields = ["institute"];
