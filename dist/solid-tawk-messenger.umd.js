(function(n,a){typeof exports=="object"&&typeof module!="undefined"?module.exports=a(require("solid-js")):typeof define=="function"&&define.amd?define(["solid-js"],a):(n=typeof globalThis!="undefined"?globalThis:n||self,n["solid-tawk-messenger"]=a(n.solidJs))})(this,function(n){"use strict";const a=(w,t)=>!t||t.length===0?!1:t!=null&&t.constructor===w,g=({propertyId:w="",widgetId:t="",embedId:o=""})=>{if(o.length){if(!document.getElementById(o)){const r=document.createElement("div");r.id=o,document.body.appendChild(r)}Tawk_API.embedded=o}const i=document.createElement("script");i.async=!0,i.src=`https://embed.tawk.to/${w}/${t}`,i.charset="UTF-8",i.setAttribute("crossorigin","*");const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(i,s)};return w=>{const t=n.mergeProps({propertyId:"",widgetId:"",embedId:"",customStyle:{},ref:()=>{},onLoad:()=>{},onStatusChange:()=>{},onBeforeLoad:()=>{},onChatMaximized:()=>{},onChatMinimized:()=>{},onChatHidden:()=>{},onChatStarted:()=>{},onChatEnded:()=>{},onPrechatSubmit:()=>{},onOfflineSubmit:()=>{},onChatMessageVisitor:()=>{},onChatMessageAgent:()=>{},onChatMessageSystem:()=>{},onAgentJoinChat:()=>{},onAgentLeaveChat:()=>{},onChatSatisfaction:()=>{},onVisitorNameChanged:()=>{},onFileUpload:()=>{},onTagsUpdated:()=>{},onUnreadCountChanged:()=>{}},w);n.onMount(()=>{o()}),n.onCleanup(()=>{delete window.Tawk_API,delete window.Tawk_LoadStart});const o=()=>{if(!a(String,t.propertyId)){console.error("[Tawk-messenger-solid warn]: You didn't specified 'propertyId' property in the plugin.");return}if(!a(String,t.widgetId)){console.error("[Tawk-messenger-solid warn]: You didn't specified 'widgetId' property in the plugin.");return}!window||!document||i()},i=()=>{window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date,g({propertyId:t.propertyId,widgetId:t.widgetId,embedId:t.embedId}),s()},s=()=>{window.addEventListener("tawkLoad",()=>{t.onLoad()}),window.addEventListener("tawkStatusChange",e=>{t.onStatusChange(e.detail)}),window.addEventListener("tawkBeforeLoad",()=>{t.onBeforeLoad()}),window.addEventListener("tawkChatMaximized",()=>{t.onChatMaximized()}),window.addEventListener("tawkChatMinimized",()=>{t.onChatMinimized()}),window.addEventListener("tawkChatHidden",()=>{t.onChatHidden()}),window.addEventListener("tawkChatStarted",()=>{t.onChatStarted()}),window.addEventListener("tawkChatEnded",()=>{t.onChatEnded()}),window.addEventListener("tawkPrechatSubmit",e=>{t.onPrechatSubmit(e.detail)}),window.addEventListener("tawkOfflineSubmit",e=>{t.onOfflineSubmit(e.detail)}),window.addEventListener("tawkChatMessageVisitor",e=>{t.onChatMessageVisitor(e.detail)}),window.addEventListener("tawkChatMessageAgent",e=>{t.onChatMessageAgent(e.detail)}),window.addEventListener("tawkChatMessageSystem",e=>{t.onChatMessageSystem(e.detail)}),window.addEventListener("tawkAgentJoinChat",e=>{t.onAgentJoinChat(e.detail)}),window.addEventListener("tawkAgentLeaveChat",e=>{t.onAgentLeaveChat(e.detail)}),window.addEventListener("tawkChatSatisfaction",e=>{t.onChatSatisfaction(e.detail)}),window.addEventListener("tawkVisitorNameChanged",e=>{t.onVisitorNameChanged(e.detail)}),window.addEventListener("tawkFileUpload",e=>{t.onFileUpload(e.detail)}),window.addEventListener("tawkTagsUpdated",e=>{t.onTagsUpdated(e.detail)}),window.addEventListener("tawkUnreadCountChanged",e=>{t.onUnreadCountChanged(e.detail)})},r={maximize:()=>window.Tawk_API.maximize(),minimize:()=>window.Tawk_API.minimize(),toggle:()=>window.Tawk_API.toggle(),popup:()=>window.Tawk_API.popup(),showWidget:()=>window.Tawk_API.showWidget(),hideWidget:()=>window.Tawk_API.hideWidget(),toggleVisibility:()=>window.Tawk_API.toggleVisibility(),endChat:()=>window.Tawk_API.endChat()},h={getWindowType:()=>window.Tawk_API.getWindowType(),getStatus:()=>window.Tawk_API.getStatus(),isChatMaximized:()=>window.Tawk_API.isChatMaximized(),isChatMinimized:()=>window.Tawk_API.isChatMinimized(),isChatHidden:()=>window.Tawk_API.isChatHidden(),isChatOngoing:()=>window.Tawk_API.isChatOngoing(),isVisitorEngaged:()=>window.Tawk_API.isVisitorEngaged(),onLoaded:()=>window.Tawk_API.onLoaded,onBeforeLoaded:()=>window.Tawk_API.onBeforeLoaded,widgetPosition:()=>window.Tawk_API.widgetPosition()},m={visitor:e=>window.Tawk_API.visitor=e,setAttributes:(e,d)=>window.Tawk_API.setAttributes(e,d),addEvent:(e,d,C)=>window.Tawk_API.addEvent(e,d,C),addTags:(e,d)=>window.Tawk_API.addTags(e,d),removeTags:(e,d)=>window.Tawk_API.removeTags(e,d)};return t.ref({...h,...r,...m}),null}});
