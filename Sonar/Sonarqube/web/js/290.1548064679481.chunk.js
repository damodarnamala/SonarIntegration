(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1091:function(e,n){e.exports="Projects assigned to a profile will always be analyzed with it for that language, regardless of which profile is the default. Quality Profile administrators may assign projects to a profile. Project administrators may also choose a non-default profile for each language.\n"},1893:function(e,n,t){"use strict";t.r(n);var o=t(591),r=t(607),i=t.n(r),l=t(621),a=t(17);function c(){return o.createElement("header",{className:"page-header"},o.createElement("div",{className:"page-title display-flex-center"},o.createElement("h1",null,Object(a.l)("project_quality_profiles.page")),o.createElement(l.a,{className:"spacer-left",doc:Promise.resolve().then(t.t.bind(null,1091,7))})),o.createElement("div",{className:"page-description"},Object(a.l)("project_quality_profiles.page.description")))}var s,u=t(817),p=t.n(u),d=t(666),f=t.n(d),h=t(612),b=(s=function(e,n){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}s(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),m=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={loading:!1},n.stopLoading=function(){n.mounted&&n.setState({loading:!1})},n.handleChange=function(e){n.props.profile.key!==e.value&&(n.setState({loading:!0}),n.props.onChangeProfile(n.props.profile.key,e.value).then(n.stopLoading,n.stopLoading))},n.renderProfileName=function(e){return e.isDefault?o.createElement("span",null,o.createElement("strong",null,Object(a.l)("default")),": ",e.label):o.createElement("span",null,e.label)},n}return b(n,e),n.prototype.componentDidMount=function(){this.mounted=!0},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.renderProfileSelect=function(){var e=this.props,n=e.profile,t=e.possibleProfiles.map(function(e){return{value:e.key,label:e.name,isDefault:e.isDefault}});return o.createElement(h.c,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderProfileName,options:t,style:{width:300},value:n.key,valueRenderer:this.renderProfileName})},n.prototype.render=function(){var e=this.props.profile;return o.createElement("tr",{"data-key":e.language},o.createElement("td",{className:"thin nowrap"},e.languageName),o.createElement("td",{className:"thin nowrap"},this.renderProfileSelect()),o.createElement("td",null,this.state.loading&&o.createElement("i",{className:"spinner"})))},n}(o.PureComponent);function g(e){var n=f()(e.allProfiles,"language"),t=p()(e.profiles,"languageName").map(function(t){return o.createElement(m,{key:t.language,onChangeProfile:e.onChangeProfile,possibleProfiles:n[t.language],profile:t})});return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{className:"thin nowrap"},Object(a.l)("language")),o.createElement("th",{className:"thin nowrap"},Object(a.l)("quality_profile")),o.createElement("th",null," "))),o.createElement("tbody",null,t)))}var v=t(632),y=t(614),S=t(750),x=t(794),w=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),O=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={loading:!0},n.handleChangeProfile=function(e,t){var o=n.props.component,r=n.state,i=r.allProfiles,l=r.profiles,c=i&&i.find(function(e){return e.key===t});return(c&&c.isDefault?Object(v.m)(e,o.key):Object(v.d)(t,o.key)).then(function(){if(n.mounted&&l&&c){var t=l.filter(function(n){return n.key!==e}).concat([c]);n.setState({profiles:t}),Object(S.a)(Object(a.m)("project_quality_profile.successfully_updated",c.languageName))}})},n}return w(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchProfiles():Object(x.a)()},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.checkPermissions=function(){var e=this.props.component.configuration;return!!(e&&e.showQualityProfiles)},n.prototype.fetchProfiles=function(){var e=this,n=this.props.component,t=n.key,o=n.organization;Promise.all([Object(v.y)({organization:o}).then(function(e){return e.profiles}),Object(v.y)({organization:o,project:t}).then(function(e){return e.profiles})]).then(function(n){var t=n[0],o=n[1];e.mounted&&e.setState({loading:!1,allProfiles:t,profiles:o})},function(){e.mounted&&e.setState({loading:!1})})},n.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,n=e.allProfiles,t=e.loading,r=e.profiles;return o.createElement("div",{className:"page page-limited"},o.createElement(y.a,{suggestions:"project_quality_profiles"}),o.createElement(i.a,{title:Object(a.l)("project_quality_profiles.page")}),o.createElement(c,null),t?o.createElement("i",{className:"spinner"}):n&&r&&o.createElement(g,{allProfiles:n,onChangeProfile:this.handleChangeProfile,profiles:r}))},n}(o.PureComponent);n.default=O},610:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t(591),r=t(592),i=t(601),l=t(656),a=t(598);t(622);function c(e){var n=e.children,t=void 0===n?o.createElement(l.a,{fill:a.gray71,size:12}):n,c=e.tagName,s=void 0===c?"div":c;return o.createElement(s,{className:r("help-tooltip",e.className)},o.createElement(i.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},o.createElement("span",{className:"display-inline-flex-center"},t)))}},612:function(e,n,t){"use strict";t.d(n,"c",function(){return b}),t.d(n,"b",function(){return m}),t.d(n,"a",function(){return g});var o=t(591),r=t(598),i=t(634),l=t(593),a=t(606),c=(t(628),function(){return(c=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)}),s=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&(t[o[r]]=e[o[r]])}return t},u=t.e(356).then(t.bind(null,682)),p=Object(a.a)(function(){return u}),d=Object(a.a)(function(){return u.then(function(e){return{default:e.Creatable}})}),f=Object(a.a)(function(){return u.then(function(e){return{default:e.Async}})});function h(){return o.createElement(l.b,{className:"button-tiny spacer-left text-middle",color:r.gray60},o.createElement(i.a,{size:12}))}function b(e){var n=e.innerRef,t=s(e,["innerRef"]),r=p,i=!!t.clearable&&Boolean(t.value);return o.createElement(r,c({},t,{clearRenderer:h,clearable:i,ref:n}))}function m(e){var n=d;return o.createElement(n,c({},e,{clearRenderer:h}))}function g(e){return o.createElement(f,c({},e))}},614:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o,r=t(591),i=t(641),l=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)});function a(e){var n=e.suggestions;return r.createElement(i.a.Consumer,null,function(e){var t=e.addSuggestions,o=e.removeSuggestions;return r.createElement(c,{addSuggestions:t,removeSuggestions:o,suggestions:n})})}var c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return l(n,e),n.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},n.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},n.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},n.prototype.render=function(){return null},n}(r.PureComponent)},621:function(e,n,t){"use strict";var o,r=t(591),i=t(610),l=t(606),a=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),c=Object(l.a)(function(){return Promise.all([t.e(8),t.e(10)]).then(t.bind(null,702))}),s=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={open:!1},n.close=function(){n.setState({open:!1})},n}return a(n,e),n.prototype.componentDidMount=function(){var e=this;this.props.doc.then(function(n){var t=n.default;e.setState({content:t})},function(){}),document.addEventListener("scroll",this.close,!0)},n.prototype.componentWillUnmount=function(){document.removeEventListener("scroll",this.close,!0)},n.prototype.render=function(){return this.state.content?r.createElement(i.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null},n}(r.PureComponent);n.a=s},622:function(e,n,t){var o=t(623);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(596)(o,r);o.locals&&(e.exports=o.locals)},623:function(e,n,t){(e.exports=t(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.help-tooltip {\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n}\n\n.help-toolip-link {\n  display: block;\n  width: 12px;\n  height: 12px;\n  border: none;\n}\n",""])},628:function(e,n,t){var o=t(629);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(596)(o,r);o.locals&&(e.exports=o.locals)},629:function(e,n,t){(e.exports=t(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.Select {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: left;\n}\n\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  box-sizing: border-box;\n}\n\n.Select.is-disabled > .Select-control {\n  background-color: #ebebeb !important;\n  border-color: #ddd !important;\n}\n\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none !important;\n}\n\n.Select.is-disabled .Select-arrow-zone {\n  cursor: not-allowed !important;\n  pointer-events: none !important;\n}\n\n.Select.is-disabled .Select-placeholder,\n.Select.is-disabled .Select-value {\n  color: #bbb !important;\n}\n\n.Select-control {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 24px;\n  line-height: 22px;\n  border: 1px solid #cdcdcd;\n  border-collapse: separate;\n  border-radius: 2px;\n  background-color: #fff;\n  color: #444;\n  cursor: default;\n  outline: none;\n  overflow: hidden;\n}\n\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n}\n\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #4b9fd5;\n}\n\n.Select-placeholder {\n  color: #777;\n}\n\n.Select-placeholder,\n:not(.Select--multi) > .Select-control .Select-value {\n  bottom: 0;\n  left: 0;\n  line-height: 23px;\n  padding-left: 8px;\n  padding-right: 24px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select-value [class^='icon-'] {\n  padding-top: 5px;\n}\n\n.Select-value svg,\n.Select-value img {\n  padding-top: 4px;\n}\n\n.Select-value .outline-badge,\n.Select-option .outline-badge {\n  height: 20px;\n  line-height: 19px;\n  margin-top: 1px;\n}\n\n.Select-option svg,\n.Select-option img,\n.Select-option [class^='icon-'] {\n  padding-top: 2px;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value .Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  .Select-value-label {\n  color: #444;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:hover,\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n\n.Select-input {\n  vertical-align: top;\n  height: 22px;\n  padding-left: 8px;\n  padding-right: 8px;\n  outline: none;\n}\n\n.Select-input > input {\n  background: none transparent;\n  border: 0 none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 12px;\n  height: 22px;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n}\n\n.is-focused .Select-input > input {\n  cursor: text;\n}\n\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n\n.Select-loading {\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #444;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n\n.Select-clear-zone {\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  padding-right: 4px;\n}\n\n.Select-clear-zone:hover .Select-clear {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMSwyMCw1Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+ICAgIDwvZz48L3N2Zz4=);\n}\n\n.Select-clear {\n  display: block;\n  width: 9px;\n  height: 9px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDE1MywxNTMsMTUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4gICAgPC9nPjwvc3ZnPg==);\n  background-size: 9px 9px;\n  text-indent: -9999px;\n}\n\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 20px;\n  padding-right: 5px;\n}\n\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 4px 4px 2px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 7500;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.Select-menu {\n  max-height: 198px;\n  padding: 5px 0;\n  overflow-y: auto;\n}\n\n.Select-option {\n  display: block;\n  line-height: 20px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  color: #444;\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.Select-option:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n\n.Select-option.is-focused {\n  background-color: #f3f3f3;\n}\n\n.Select-option.is-disabled {\n  font-weight: 600;\n  cursor: default;\n}\n\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n\n.Select--multi .Select-value {\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #444;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 1px 4px 1px 1px;\n  vertical-align: top;\n}\n\n.Select-value-label {\n  font-size: 12px;\n}\n\n.is-searchable.is-open .Select-value-label {\n  opacity: 0.5;\n}\n\n.Select-big .Select-control {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.Select-big .Select-placeholder {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.Select-big .Select-value-label {\n  display: inline-block;\n  margin-top: 7px;\n  line-height: 16px;\n}\n\n.Select-big .Select-option {\n  padding: 7px 8px;\n  line-height: 16px;\n}\n\n.Select-big img,\n.Select-big svg {\n  padding-top: 0;\n}\n\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.Select--multi .Select-value-label {\n  display: inline-block;\n  max-width: 200px;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px;\n}\n\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n\n.Select--multi .Select-value-icon:active {\n  background-color: rgba(0, 126, 255, 0.24);\n}\n\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #444;\n}\n\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n\n.Select-aria-only {\n  display: none;\n}\n\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n",""])},632:function(e,n,t){"use strict";t.d(n,"y",function(){return s}),t.d(n,"s",function(){return u}),t.d(n,"j",function(){return p}),t.d(n,"w",function(){return d}),t.d(n,"r",function(){return f}),t.d(n,"q",function(){return h}),t.d(n,"A",function(){return b}),t.d(n,"v",function(){return m}),t.d(n,"i",function(){return g}),t.d(n,"l",function(){return v}),t.d(n,"g",function(){return y}),t.d(n,"o",function(){return S}),t.d(n,"n",function(){return x}),t.d(n,"p",function(){return w}),t.d(n,"h",function(){return O}),t.d(n,"d",function(){return j}),t.d(n,"m",function(){return N}),t.d(n,"z",function(){return M}),t.d(n,"x",function(){return E}),t.d(n,"c",function(){return I}),t.d(n,"u",function(){return P}),t.d(n,"b",function(){return k}),t.d(n,"t",function(){return z}),t.d(n,"e",function(){return L}),t.d(n,"f",function(){return A}),t.d(n,"a",function(){return T}),t.d(n,"k",function(){return _});var o=t(633),r=t.n(o),i=t(712),l=t(30),a=t(609),c=function(){return(c=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function s(e){return Object(l.getJSON)("/api/qualityprofiles/search",e).catch(a.a)}function u(e){return Object(l.getJSON)("/api/qualityprofiles/show",e)}function p(e){return Object(l.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(l.checkStatus).then(l.parseJSON).catch(a.a)}function d(e){return Object(l.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(l.checkStatus).then(l.parseJSON).catch(a.a)}function f(e){return Object(l.getJSON)("/api/qualityprofiles/projects",e).catch(a.a)}function h(e){return Object(l.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(a.a)}function b(e){return Object(l.post)("/api/qualityprofiles/set_default",{profileKey:e})}function m(e,n){return Object(l.post)("/api/qualityprofiles/rename",{key:e,name:n}).catch(a.a)}function g(e,n){return Object(l.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:n}).catch(a.a)}function v(e){return Object(l.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(a.a)}function y(e,n){return Object(l.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:n}).catch(a.a)}function S(){return Object(l.getJSON)("/api/qualityprofiles/importers").then(function(e){return e.importers},a.a)}function x(){return Object(l.getJSON)("/api/qualityprofiles/exporters").then(function(e){return e.exporters})}function w(e){return Object(l.getJSON)("/api/qualityprofiles/changelog",e)}function O(e,n){return Object(l.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:n})}function j(e,n){return Object(l.post)("/api/qualityprofiles/add_project",{key:e,project:n}).catch(a.a)}function N(e,n){return Object(l.post)("/api/qualityprofiles/remove_project",{key:e,project:n}).catch(a.a)}function M(e){return Object(l.getJSON)("/api/qualityprofiles/search_users",e).catch(a.a)}function E(e){return Object(l.getJSON)("/api/qualityprofiles/search_groups",e).catch(a.a)}function I(e){return Object(l.post)("/api/qualityprofiles/add_user",e).catch(a.a)}function P(e){return Object(l.post)("/api/qualityprofiles/remove_user",e).catch(a.a)}function k(e){return Object(l.post)("/api/qualityprofiles/add_group",e).catch(a.a)}function z(e){return Object(l.post)("/api/qualityprofiles/remove_group",e).catch(a.a)}function L(e){return Object(l.postJSON)("/api/qualityprofiles/activate_rules",e)}function A(e){return Object(l.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function T(e){var n=e.params&&r()(e.params,function(e,n){return n+"="+Object(i.a)(e)}).join(";");return Object(l.post)("/api/qualityprofiles/activate_rule",c({},e,{params:n})).catch(a.a)}function _(e){return Object(l.post)("/api/qualityprofiles/deactivate_rule",e).catch(a.a)}},633:function(e,n,t){var o=t(150),r=t(89),i=t(689),l=t(47);e.exports=function(e,n){return(l(e)?o:i)(e,r(n,3))}},666:function(e,n,t){var o=t(151),r=t(687),i=Object.prototype.hasOwnProperty,l=r(function(e,n,t){i.call(e,t)?e[t].push(n):o(e,t,[n])});e.exports=l},712:function(e,n,t){"use strict";function o(e){return'"'+e.replace(/"/g,'\\"')+'"'}t.d(n,"a",function(){return o})},750:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var o=t(667),r=t(658);function i(e){Object(o.default)().dispatch(r.b(e))}},794:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(667),r=t(694),i=t(765);function l(){var e=Object(o.default)(),n=Object(r.a)(),t=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(i.c)()),n.replace({pathname:"/sessions/new",query:{return_to:t}})}},817:function(e,n,t){var o=t(940),r=t(47);e.exports=function(e,n,t,i){return null==e?[]:(r(n)||(n=null==n?[]:[n]),r(t=i?void 0:t)||(t=null==t?[]:[t]),o(e,n,t))}}}]);
//# sourceMappingURL=290.1548064679481.chunk.js.map