
import '../gtk-3.0/gtk.css';

export default { title: 'Slider' };

export const checkButton = () => '<input type="checkbox"><span class="check"></span></input>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};