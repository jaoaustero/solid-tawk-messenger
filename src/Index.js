// Dependency
import { onMount, onCleanup, mergeProps } from 'solid-js';

// Utilities
import { isValidString } from './utils/helper';
import { loadScript } from './utils/widget';

const TawkMessenger = (props) => {
	const merged = mergeProps(
		{
			/**
			 * Default properties
			 */
			propertyId: '',
			widgetId: '',

			/**
			 * Target element
			 */
			embedId: '',

			/**
			 * Custom style
			 */
			customStyle: {},

			/**
			 * Reference
			 */
			ref: () => {},
		},
		props
	);

	onMount(() => {
		load();
	});

	onCleanup(() => {
		delete window.Tawk_API;
		delete window.Tawk_LoadStart;
	});

	const load = () => {
		if (!isValidString(String, merged.propertyId)) {
			console.error("[Tawk-messenger-solid warn]: You didn't specified 'propertyId' property in the plugin.");
			return;
		}

		if (!isValidString(String, merged.widgetId)) {
			console.error("[Tawk-messenger-solid warn]: You didn't specified 'widgetId' property in the plugin.");
			return;
		}

		if (!window || !document) {
			return;
		}

		init();
	};

	const init = () => {
		/**
		 * Set placeholder
		 */
		window.Tawk_API = window.Tawk_API || {};
		window.Tawk_LoadStart = new Date();

		/**
		 * Inject the Tawk script
		 */
		loadScript({
			propertyId: merged.propertyId,
			widgetId: merged.widgetId,
			embedId: merged.embedId
		});
	};

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	const mapCallbacks = {
		onLoad : (callback) => {
			window.addEventListener('tawkLoad', () => {
				callback();
			});
		},

		onStatusChange : (callback) => {
			window.addEventListener('tawkStatusChange', (status) => {
				callback(status.detail);
			});
		},
		
		onBeforeLoad : (callback) => {
			window.addEventListener('tawkBeforeLoad', () => {
				callback();
			});
		},

		onChatMaximized : (callback) => {
			window.addEventListener('tawkChatMaximized', () => {
				callback();
			});
		},

		onChatMinimized : (callback) => {
			window.addEventListener('tawkChatMinimized', () => {
				callback();
			});
		},

		onChatHidden : (callback) => {
			window.addEventListener('tawkChatHidden', () => {
				callback();
			});
		},

		onChatStarted : (callback) => {
			window.addEventListener('tawkChatStarted', () => {
				callback();
			});
		},

		onChatEnded : (callback) => {
			window.addEventListener('tawkChatEnded', () => {
				callback();
			});
		},

		onPrechatSubmit : (callback) => {
			window.addEventListener('tawkPrechatSubmit', (data) => {
				callback(data.detail);
			});
		},

		onOfflineSubmit : (callback) => {
			window.addEventListener('tawkOfflineSubmit', (data) => {
				callback(data.detail);
			});
		},

		onChatMessageVisitor : (callback) => {
			window.addEventListener('tawkChatMessageVisitor', (message) => {
				callback(message.detail);
			});
		},

		onChatMessageAgent : (callback) => {
			window.addEventListener('tawkChatMessageAgent', (message) => {
				callback(message.detail);
			});
		},

		onChatMessageSystem : (callback) => {
			window.addEventListener('tawkChatMessageSystem', (message) => {
				callback(message.detail);
			});
		},

		onAgentJoinChat : (callback) => {
			window.addEventListener('tawkAgentJoinChat', (data) => {
				callback(data.detail);
			});
		},
		
		onAgentLeaveChat : (callback) => {
			window.addEventListener('tawkAgentLeaveChat', (data) => {
				callback(data.detail);
			});
		},

		onChatSatisfaction : (callback) => {
			window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
				callback(satisfaction.detail);
			});
		},

		onVisitorNameChanged : (callback) => {
			window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
				callback(visitorName.detail);
			});
		},

		onFileUpload : (callback) => {
			window.addEventListener('tawkFileUpload', (link) => {
				callback(link.detail);
			});
		},

		onTagsUpdated : (callback) => {
			window.addEventListener('tawkTagsUpdated', (data) => {
				callback(data.detail);
			});
		},

		onUnreadCountChanged : (callback) => {
			window.addEventListener('tawkUnreadCountChanged', (data) => {
				callback(data.detail);
			});
		}
	};

	/**
	 * API for calling an action on the widget
	 */
	const mapActions = {
		maximize: () => window.Tawk_API.maximize(),
		minimize: () => window.Tawk_API.minimize(),
		toggle: () => window.Tawk_API.toggle(),
		popup: () => window.Tawk_API.popup(),
		showWidget: () => window.Tawk_API.showWidget(),
		hideWidget: () => window.Tawk_API.hideWidget(),
		toggleVisibility: () => window.Tawk_API.toggleVisibility(),
		endChat: () => window.Tawk_API.endChat()
	};

	/**
	 * API for setting a data on the widget
	 */
	const mapGetters = {
		getWindowType: () => window.Tawk_API.getWindowType(),
		getStatus: () => window.Tawk_API.getStatus(),
		isChatMaximized: () => window.Tawk_API.isChatMaximized(),
		isChatMinimized: () => window.Tawk_API.isChatMinimized(),
		isChatHidden: () => window.Tawk_API.isChatHidden(),
		isChatOngoing: () => window.Tawk_API.isChatOngoing(),
		isVisitorEngaged: () => window.Tawk_API.isVisitorEngaged(),
		onLoaded: () => window.Tawk_API.onLoaded,
		onBeforeLoaded: () => window.Tawk_API.onBeforeLoaded,
		widgetPosition: () => window.Tawk_API.widgetPosition()
	};

	/**
	 * API for setting a data on the widget
	 */
	const mapSetters = {
		visitor: (data) => (window.Tawk_API.visitor = data),
		setAttributes: (attribute, callback) => window.Tawk_API.setAttributes(attribute, callback),
		addEvent: (event, metadata, callback) => window.Tawk_API.addEvent(event, metadata, callback),
		addTags: (tags, callback) => window.Tawk_API.addTags(tags, callback),
		removeTags: (tags, callback) => window.Tawk_API.removeTags(tags, callback)
	};

	/**
	 * Expose the Tawk API functions
	 */
	merged.ref({
		...mapCallbacks,
		...mapGetters,
		...mapActions,
		...mapSetters
	});

	return null;
};

export default TawkMessenger;
