import { getFormFields } from './elements.js';
import { getSettings } from './settings.js';

const { avatarPreview, avatarField } = getFormFields();
const { IMAGE_TYPES } = getSettings();

avatarField.addEventListener('change', () => {
  const file = avatarField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = IMAGE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});
