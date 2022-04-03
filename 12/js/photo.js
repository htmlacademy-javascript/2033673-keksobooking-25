import { getFormFields } from './elements.js';
import { getSettings } from './settings.js';

const { photoContainer, photoField } = getFormFields();
const { IMAGE_TYPES } = getSettings();

photoField.addEventListener('change', () => {
  const file = photoField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = IMAGE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const photoPreview = document.createElement('img');
    photoPreview.src = URL.createObjectURL(file);
    photoPreview.classList.add('ad-form__photo--preview');
    photoContainer.append(photoPreview);
  }
});
