const SELECTOR_MAXIMIZE_ICON = '[data-lte-icon="maximize"]';
const SELECTOR_MINIMIZE_ICON = '[data-lte-icon="minimize"]';
const EVENT_MAXIMIZED = 'fullscreen.maximized';
const EVENT_MINIMIZED = 'fullscreen.minimized';

class FullScreen {
    private _element: HTMLElement;
    private _config: any;

    constructor(element: HTMLElement, config: any) {
        this._element = element;
        this._config = config;
    }

    inFullScreen() {
        const event = new Event(EVENT_MAXIMIZED);
        const iconMaximize = document.querySelector(SELECTOR_MAXIMIZE_ICON) as HTMLElement;
        const iconMinimize = document.querySelector(SELECTOR_MINIMIZE_ICON) as HTMLElement;

        document.documentElement.requestFullscreen();
        if (iconMaximize) {
            iconMaximize.style.display = 'none';
        }
        if (iconMinimize) {
            iconMinimize.style.display = 'block';
        }
        this._element.dispatchEvent(event);
    }

    outFullscreen() {
        const event = new Event(EVENT_MINIMIZED);
        const iconMaximize = document.querySelector(SELECTOR_MAXIMIZE_ICON) as HTMLElement;
        const iconMinimize = document.querySelector(SELECTOR_MINIMIZE_ICON) as HTMLElement;

        document.exitFullscreen();
        if (iconMaximize) {
            iconMaximize.style.display = 'block';
        }
        if (iconMinimize) {
            iconMinimize.style.display = 'none';
        }
        this._element.dispatchEvent(event);
    }

    toggleFullScreen() {
        if (document.fullscreenEnabled) {
            if (document.fullscreenElement) {
                this.outFullscreen();
            } else {
                this.inFullScreen();
            }
        }
    }
}

export default FullScreen;
