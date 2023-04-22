import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-accessible-themes extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'themes_jupyterlab:pitayasmoothie',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension themes pitayasmoothie is activated!');
    const style = '@themes_jupyterlab/pitayasmoothie/index.css';

    manager.register({
      name: 'Pitaya Smoothie',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
