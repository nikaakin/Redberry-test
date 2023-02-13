export const inputData = (dirtyFields, errors, index = "") => [
  {
    dirtyField: dirtyFields[`position${index}`],
    error: errors[`position${index}`],
    hint: "მინიმუმ 2 ასო",
    id: `position${index}`,
    label: "თანამდებობა",
    name: `position${index}`,
    pattern: /^.{2,}$/,
    placeholder: "დეველოპერი, დიზაინერი, ა.შ.",
    type: "text",
    required: true,
  },
  {
    dirtyField: dirtyFields[`employer${index}`],
    error: errors[`employer${index}`],
    hint: "მინიმუმ 2 ასო",
    id: `employer${index}`,
    label: "დამსაქმებელი",
    name: `employer${index}`,
    pattern: /^.{2,}$/,
    placeholder: "დამსაქმებელი",
    type: "text",
    required: true,
  },
];

export const requiredFields = [
  "employer",
  "position",
  "due_date",
  "start_date",
  "description",
];

export const allFields = [
  "employer",
  "position",
  "due_date",
  "start_date",
  "description",
];
