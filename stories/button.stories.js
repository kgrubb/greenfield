
import '../gtk-3.0/gtk.css';

export default { title: 'Slider' };

export const withText = () => '<button class="switch"></button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};