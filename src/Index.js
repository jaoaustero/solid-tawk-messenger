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

			/**
			 * Callbacks
			 */
			onLoad: () => {},
			onStatusChange: () => {},
			onBeforeLoad: () => {},
			onChatMaximized: () => {},
			onChatMinimized: () => {},
			onChatHidden: () => {},
			onChatStarted: () => {},
			onChatEnded: () => {},
			onPrechatSubmit: () => {},
			onOfflineSubmit: () => {},
			onChatMessageVisitor: () => {},
			onChatMessageAgent: () => {},
			onChatMessageSystem: () => {},
			onAgentJoinChat: () => {},
			onAgentLeaveChat: () => {},
			onChatSatisfaction: () => {},
			onVisitorNameChanged: () => {},
			onFileUpload: () => {},
			onTagsUpdated: () => {},
			onUnreadCountChanged: () => {}
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

		mapCallbacks();
	};

	/**
	 * API for listening an event emitting
	 * inside of the widget
	 */
	const mapCallbacks = () => {
		window.addEventListener('tawkLoad', () => {
			merged.onLoad();
		});

		window.addEventListener('tawkStatusChange', (status) => {
			merged.onStatusChange(status.detail);
		});

		window.addEventListener('tawkBeforeLoad', () => {
			merged.onBeforeLoad();
		});

		window.addEventListener('tawkChatMaximized', () => {
			merged.onChatMaximized();
		});

		window.addEventListener('tawkChatMinimized', () => {
			merged.onChatMinimized();
		});

		window.addEventListener('tawkChatHidden', () => {
			merged.onChatHidden();
		});

		window.addEventListener('tawkChatStarted', () => {
			merged.onChatStarted();
		});

		window.addEventListener('tawkChatEnded', () => {
			merged.onChatEnded();
		});

		window.addEventListener('tawkPrechatSubmit', (data) => {
			merged.onPrechatSubmit(data.detail);
		});

		window.addEventListener('tawkOfflineSubmit', (data) => {
			merged.onOfflineSubmit(data.detail);
		});

		window.addEventListener('tawkChatMessageVisitor', (message) => {
			merged.onChatMessageVisitor(message.detail);
		});

		window.addEventListener('tawkChatMessageAgent', (message) => {
			merged.onChatMessageAgent(message.detail);
		});

		window.addEventListener('tawkChatMessageSystem', (message) => {
			merged.onChatMessageSystem(message.detail);
		});

		window.addEventListener('tawkAgentJoinChat', (data) => {
			merged.onAgentJoinChat(data.detail);
		});

		window.addEventListener('tawkAgentLeaveChat', (data) => {
			merged.onAgentLeaveChat(data.detail);
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
			merged.onChatSatisfaction(satisfaction.detail);
		});

		window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
			merged.onVisitorNameChanged(visitorName.detail);
		});

		window.addEventListener('tawkFileUpload', (link) => {
			merged.onFileUpload(link.detail);
		});

		window.addEventListener('tawkTagsUpdated', (data) => {
			merged.onTagsUpdated(data.detail);
		});

		window.addEventListener('tawkUnreadCountChanged', (data) => {
			merged.onUnreadCountChanged(data.detail);
		});
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
		...mapGetters,
		...mapActions,
		...mapSetters
	});

	return null;
};

export default TawkMessenger;
