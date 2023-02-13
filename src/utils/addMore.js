export const onAddMoreClick = (
  e,
  index,
  setIndex,
  errors,
  dirtyFields,
  localStorageIndexKey,
  requiredFields,
  setValue,
  trigger,
  setAddMoreChange
) => {
  e.preventDefault();
  if (
    requiredFields.find(
      (fieldName) => dirtyFields[`${fieldName}${index}`] !== true
    )
  ) {
    requiredFields.forEach(async (fieldName) => {
      setValue(
        `${fieldName}${index}`,
        localStorage.getItem(`${fieldName}${index}`),
        {
          shouldDirty: true,
        }
      );
      await trigger(`${fieldName}${index}`, { shouldFocus: true });
    });
    return;
  }

  if (
    requiredFields.every(
      (fieldName) => errors[`${fieldName}${index}`] === undefined
    )
  ) {
    localStorage.setItem(localStorageIndexKey, +index + 1);
    setIndex((index) => +index + 1);
    setAddMoreChange((i) => i + 1);
    return;
  }
};
