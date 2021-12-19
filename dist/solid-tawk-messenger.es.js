var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const $PROXY = Symbol("solid-proxy");
let runEffects = runQueue;
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
let Transition = null;
let Pending = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE);
  c.user = true;
  Effects && Effects.push(c);
}
function batch(fn) {
  if (Pending)
    return fn();
  let result;
  const q = Pending = [];
  try {
    result = fn();
  } finally {
    Pending = null;
  }
  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];
      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal(data, pending);
      }
    }
  }, false);
  return result;
}
function untrack(fn) {
  let result;
  result = fn();
  return result;
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null)
    ;
  else if (Owner.cleanups === null)
    Owner.cleanups = [fn];
  else
    Owner.cleanups.push(fn);
  return fn;
}
function writeSignal(node, value, isComp) {
  if (node.comparator) {
    if (node.comparator(node.value, value))
      return value;
  }
  if (Pending) {
    if (node.pending === NOTPENDING)
      Pending.push(node);
    node.pending = value;
    return value;
  }
  let TransitionRunning = false;
  node.value = value;
  if (node.observers && node.observers.length) {
    runUpdates(() => {
      for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (TransitionRunning && Transition.disposed.has(o))
          ;
        if (o.pure)
          Updates.push(o);
        else
          Effects.push(o);
        if (o.observers && (TransitionRunning && !o.tState || !TransitionRunning && !o.state))
          markUpstream(o);
        if (TransitionRunning)
          ;
        else
          o.state = STALE;
      }
      if (Updates.length > 1e6) {
        Updates = [];
        if (false)
          ;
        throw new Error();
      }
    }, false);
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn)
    return;
  cleanNode(node);
  const owner = Owner, time = ExecCount;
  Owner = node;
  runComputation(node, node.value, time);
  Owner = owner;
}
function runComputation(node, value, time) {
  let nextValue;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    handleError(err);
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal(node, nextValue);
    } else
      node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null,
    pure
  };
  if (Owner === null)
    ;
  else if (Owner !== UNOWNED) {
    {
      if (!Owner.owned)
        Owner.owned = [c];
      else
        Owner.owned.push(c);
    }
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition;
  if (node.state !== STALE)
    return node.state = 0;
  if (node.suspense && untrack(node.suspense.inFallback))
    return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (node.state || runningTransition)
      ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (node.state === STALE || runningTransition) {
      updateComputation(node);
    } else if (node.state === PENDING || runningTransition) {
      const updates = Updates;
      Updates = null;
      lookDownstream(node);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates)
    return fn();
  let wait = false;
  if (!init)
    Updates = [];
  if (Effects)
    wait = true;
  else
    Effects = [];
  ExecCount++;
  try {
    fn();
  } catch (err) {
    handleError(err);
  } finally {
    completeUpdates(wait);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    runQueue(Updates);
    Updates = null;
  }
  if (wait)
    return;
  if (Effects.length)
    batch(() => {
      runEffects(Effects);
      Effects = null;
    });
  else {
    Effects = null;
  }
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++)
    runTop(queue[i]);
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user)
      runTop(e);
    else
      queue[userLength++] = e;
  }
  const resume = queue.length;
  for (i = 0; i < userLength; i++)
    runTop(queue[i]);
  for (i = resume; i < queue.length; i++)
    runTop(queue[i]);
}
function lookDownstream(node) {
  node.state = 0;
  const runningTransition = Transition;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (source.state === STALE || runningTransition)
        runTop(source);
      else if (source.state === PENDING || runningTransition)
        lookDownstream(source);
    }
  }
}
function markUpstream(node) {
  const runningTransition = Transition;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state || runningTransition) {
      o.state = PENDING;
      if (o.pure)
        Updates.push(o);
      else
        Effects.push(o);
      o.observers && markUpstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.owned) {
    for (i = 0; i < node.owned.length; i++)
      cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++)
      node.cleanups[i]();
    node.cleanups = null;
  }
  node.state = 0;
  node.context = null;
}
function handleError(err) {
  throw err;
}
function trueFn() {
  return true;
}
const propTraps = {
  get(_, property, receiver) {
    if (property === $PROXY)
      return receiver;
    return _.get(property);
  },
  has(_, property) {
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_, property) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_) {
    return _.keys();
  }
};
function resolveSource(s) {
  return typeof s === "function" ? s() : s;
}
function mergeProps(...sources) {
  return new Proxy({
    get(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        const v = resolveSource(sources[i])[property];
        if (v !== void 0)
          return v;
      }
    },
    has(property) {
      for (let i = sources.length - 1; i >= 0; i--) {
        if (property in resolveSource(sources[i]))
          return true;
      }
      return false;
    },
    keys() {
      const keys = [];
      for (let i = 0; i < sources.length; i++)
        keys.push(...Object.keys(resolveSource(sources[i])));
      return [...new Set(keys)];
    }
  }, propTraps);
}
const isValidString = (type, value) => {
  if (!value || value.length === 0) {
    return false;
  }
  return value !== null && value !== void 0 && value.constructor === type;
};
const loadScript = ({ propertyId, widgetId }) => {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://embed.talk.lv/${propertyId}/${widgetId}`;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);
};
const TawkMessenger = (props) => {
  const merged = mergeProps({
    propertyId: "",
    widgetId: "",
    customStyle: {},
    onLoad: () => {
    },
    onStatusChange: () => {
    },
    onBeforeLoad: () => {
    },
    onChatMaximized: () => {
    },
    onChatMinimized: () => {
    },
    onChatHidden: () => {
    },
    onChatStarted: () => {
    },
    onChatEnded: () => {
    },
    onPrechatSubmit: () => {
    },
    onOfflineSubmit: () => {
    },
    onChatMessageVisitor: () => {
    },
    onChatMessageAgent: () => {
    },
    onChatMessageSystem: () => {
    },
    onAgentJoinChat: () => {
    },
    onAgentLeaveChat: () => {
    },
    onChatSatisfaction: () => {
    },
    onVisitorNameChanged: () => {
    },
    onFileUpload: () => {
    },
    onTagsUpdated: () => {
    }
  }, props);
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
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    loadScript({
      propertyId: merged.propertyId,
      widgetId: merged.widgetId
    });
    mapCallbacks();
  };
  const mapCallbacks = () => {
    window.addEventListener("tawkLoad", () => {
      merged.onLoad();
    });
    window.addEventListener("tawkStatusChange", (status) => {
      merged.onStatusChange(status.detail);
    });
    window.addEventListener("tawkBeforeLoad", () => {
      merged.onBeforeLoad();
    });
    window.addEventListener("tawkChatMaximized", () => {
      merged.onChatMaximized();
    });
    window.addEventListener("tawkChatMinimized", () => {
      merged.onChatMinimized();
    });
    window.addEventListener("tawkChatHidden", () => {
      merged.onChatHidden();
    });
    window.addEventListener("tawkChatStarted", () => {
      merged.onChatStarted();
    });
    window.addEventListener("tawkChatEnded", () => {
      merged.onChatEnded();
    });
    window.addEventListener("tawkPrechatSubmit", (data) => {
      merged.onPrechatSubmit(data.detail);
    });
    window.addEventListener("tawkOfflineSubmit", (data) => {
      merged.onOfflineSubmit(data.detail);
    });
    window.addEventListener("tawkChatMessageVisitor", (message) => {
      merged.onChatMessageVisitor(message.detail);
    });
    window.addEventListener("tawkChatMessageAgent", (message) => {
      merged.onChatMessageAgent(message.detail);
    });
    window.addEventListener("tawkChatMessageSystem", (message) => {
      merged.onChatMessageSystem(message.detail);
    });
    window.addEventListener("tawkAgentJoinChat", (data) => {
      merged.onAgentJoinChat(data.detail);
    });
    window.addEventListener("tawkAgentLeaveChat", (data) => {
      merged.onAgentLeaveChat(data.detail);
    });
    window.addEventListener("tawkChatSatisfaction", (satisfaction) => {
      merged.onChatSatisfaction(satisfaction.detail);
    });
    window.addEventListener("tawkVisitorNameChanged", (visitorName) => {
      merged.onVisitorNameChanged(visitorName.detail);
    });
    window.addEventListener("tawkFileUpload", (link) => {
      merged.onFileUpload(link.detail);
    });
    window.addEventListener("tawkTagsUpdated", (data) => {
      merged.onTagsUpdated(data.detail);
    });
  };
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
  const mapGetters = {
    getWindowType: () => window.Tawk_API.getWindowType(),
    getStatus: () => window.Tawk_API.getStatus(),
    isChatMaximized: () => window.Tawk_API.isChatMaximized(),
    isChatMinimized: () => window.Tawk_API.isChatMinimized(),
    isChatHidden: () => window.Tawk_API.isChatHidden(),
    isChatOngoing: () => window.Tawk_API.isChatOngoing(),
    isVisitorEngaged: () => window.Tawk_API.isVisitorEngaged(),
    onLoaded: () => window.Tawk_API.onLoaded
  };
  const mapSetters = {
    visitor: (data) => window.Tawk_API.visitor = data,
    setAttributes: (attribute, callback) => window.Tawk_API.setAttributes(attribute, callback),
    addEvent: (event, metadata, callback) => window.Tawk_API.addEvent(event, metadata, callback),
    addTags: (tags, callback) => window.Tawk_API.addTags(tags, callback),
    removeTags: (tags, callback) => window.Tawk_API.removeTags(tags, callback)
  };
  merged.ref(__spreadValues(__spreadValues(__spreadValues({}, mapGetters), mapActions), mapSetters));
  return null;
};
export { TawkMessenger as default };
