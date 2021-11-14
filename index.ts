import React from 'react';
import ReactDOM from 'react-dom';

//@ts-ignore
import reactToWebComponent from 'react-to-webcomponent';

import { EVENTS } from '/src/constants/events';
import { DEBOT_INTERFACE_ID } from '/src/constants/debot';
import StandaloneBrowser from '/src/StandaloneBrowser';
import StandaloneDebot from '/src/StandaloneDebot';
import EventBus, { IEventBus } from '/src/EventBus';
import { decodeString, TDecodeString } from '/src/helpers/decodeString';
import encodeString, { TEncodeString } from '/src/helpers/encodeString';

import './src/styles/index.scss';

window.customElements.define("standalone-browser", reactToWebComponent(StandaloneBrowser, React, ReactDOM) as any);
window.customElements.define("standalone-debot", reactToWebComponent(StandaloneDebot, React, ReactDOM) as any);

declare global {
    interface Window {
		DEBOT_EMBEDDING: {
			EVENT_BUS: IEventBus,
			EVENTS: typeof EVENTS;
			DEBOT_INTERFACE_ID: typeof DEBOT_INTERFACE_ID;
			encodeString: TEncodeString;
			decodeString: TDecodeString;
		}
	}
}

window.DEBOT_EMBEDDING = {
	EVENT_BUS: EventBus,
	EVENTS,
	DEBOT_INTERFACE_ID,
	encodeString,
	decodeString,
}

export { EventBus, EVENTS, DEBOT_INTERFACE_ID, decodeString, encodeString };