import '../gtk-3.0/gtk.css';
import './icons/icons.css';

export default { title: 'Titlebar' };

export const titlebar = () => `
<div class="window active" style="display: flex">
  <div class="titlebar">
    <button class="titlebutton button">
      <span class="e-icon-close"></span>
    </button>
    <gtklabel class="title">Hello world!</gtklabel>
    <button class="titlebutton button">
      <span class="e-icon-fullscreen"></span>
    </button>
  </div>
</div>
`;
