export const firstPart = (dirtyFields, errors) => [
  {
    dirtyField: dirtyFields.name,
    error: errors.name,
    hint: "მინიმუმ 2 ასო, ქართული ასოები",
    id: "name",
    label: "სახელი",
    name: "name",
    pattern: /^[ა-ჰ]{2,}$/,
    placeholder: "სახელი",
    type: "text",
    required: true,
  },
  {
    dirtyField: dirtyFields.surname,
    error: errors.surname,
    hint: "მინიმუმ 2 ასო, ქართული ასოები",
    id: "surname",
    label: "გვარი",
    name: "surname",
    pattern: /^[ა-ჰ]{2,}$/,
    placeholder: "გვარი",
    type: "text",
    required: true,
  },
];

export const secondsPart = (dirtyFields, errors) => [
  {
    dirtyField: dirtyFields.email,
    error: errors.email,
    hint: "უნდა მთავრდებოდეს @redberry.ge-ით",
    id: "email",
    label: "ელ.ფოსტა",
    name: "email",
    pattern: /^[a-zA-Z0-9.]+@redberry.ge$/,
    placeholder: "example123@redberry.ge",
    type: "email",
    required: true,
  },
];

export const requiredFields = ["phone_number", "email", "surname", "name"];

export const allFields = [
  "phone_number",
  "email",
  "surname",
  "name",
  "about_me",
  "image",
];
