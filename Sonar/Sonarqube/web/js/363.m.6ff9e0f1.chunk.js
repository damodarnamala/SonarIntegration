(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1671:function(e,t,a){"use strict";a.r(t);var n=a(352),o=a(368),c=a.n(o),r=a(362),i=a(358),s=a(369),l=a.n(s),m=a(542),d=a(593),u=a(0);function p({organization:e}){const t=e.actions,a=void 0===t?{}:t;return n.createElement("div",{className:"account-project-card clearfix"},n.createElement("aside",{className:"account-project-side note"},n.createElement("strong",null,Object(u.l)("organization.key"),":")," ",e.key),n.createElement("h3",{className:"account-project-name"},n.createElement(m.a,{organization:e}),n.createElement(d.a,{className:"spacer-left text-middle",organization:e},e.name),a.admin&&n.createElement("span",{className:"outline-badge spacer-left"},Object(u.l)("admin"))),!!e.description&&n.createElement("div",{className:"markdown spacer-top"},e.description),!!e.url&&n.createElement("div",{className:"markdown spacer-top"},n.createElement("a",{href:e.url,rel:"nofollow",title:e.url},e.url)))}function g({organizations:e}){return 0===e.length?n.createElement("div",null,Object(u.l)("my_account.organizations.no_results")):n.createElement("ul",{className:"account-projects-list"},l()(e,e=>e.name.toLocaleLowerCase()).map(e=>n.createElement("li",{key:e.key},n.createElement(p,{organization:e}))))}var E=a(704),h=a(364);const b={fetchIfAnyoneCanCreateOrganizations:E.a};t.default=Object(r.connect)(e=>{const t=Object(h.getGlobalSettingValue)(e,"sonar.organizations.anyoneCanCreate");return{anyoneCanCreate:Boolean(t&&"true"===t.value),canAdmin:Object(h.getAppState)(e).canAdmin,organizations:Object(h.getMyOrganizations)(e)}},b)(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})})}componentDidMount(){this.mounted=!0,this.props.fetchIfAnyoneCanCreateOrganizations().then(this.stopLoading,this.stopLoading)}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.anyoneCanCreate,t=!this.state.loading&&(e||this.props.canAdmin);return n.createElement("div",{className:"account-body account-container"},n.createElement(c.a,{title:Object(u.l)("my_account.organizations")}),n.createElement("div",{className:"boxed-group"},t&&n.createElement("div",{className:"clearfix"},n.createElement("div",{className:"boxed-group-actions"},n.createElement(i.Link,{className:"button",to:"/create-organization"},Object(u.l)("create")))),n.createElement("div",{className:"boxed-group-inner"},this.state.loading?n.createElement("i",{className:"spinner"}):n.createElement(g,{organizations:this.props.organizations}))))}})}}]);
//# sourceMappingURL=363.m.6ff9e0f1.chunk.js.map