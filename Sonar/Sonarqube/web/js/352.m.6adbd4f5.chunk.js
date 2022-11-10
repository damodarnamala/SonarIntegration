(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1609:function(e,t,a){"use strict";a.r(t),a.d(t,"OrganizationEdit",function(){return g});var n=a(415),i=a.n(n),r=a(352),s=a(368),o=a.n(s),l=a(362),c=a(542),d=a(354),m=a(844),h=a(0);class g extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleAvatarInputChange=(e=>{const t=e.target.value;this.setState({avatar:t}),this.changeAvatarImage(t)}),this.changeAvatarImage=(e=>{this.setState({avatarImage:e})}),this.handleSubmit=(e=>{e.preventDefault();const t={avatar:this.state.avatar,description:this.state.description,name:this.state.name,url:this.state.url};this.setState({loading:!0}),this.props.updateOrganization(this.props.organization.key,t).then(this.stopLoading,this.stopLoading)}),this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.state={loading:!1,avatar:e.organization.avatar||"",avatarImage:e.organization.avatar||"",description:e.organization.description||"",name:e.organization.name,url:e.organization.url||""},this.changeAvatarImage=i()(this.changeAvatarImage,500)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=Object(h.l)("organization.edit");return r.createElement("div",{className:"page page-limited"},r.createElement(o.a,{title:e}),r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},e)),r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("form",{onSubmit:this.handleSubmit},r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"organization-name"},Object(h.l)("organization.name"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{disabled:this.state.loading,id:"organization-name",maxLength:255,name:"name",onChange:e=>this.setState({name:e.target.value}),required:!0,type:"text",value:this.state.name}),r.createElement("div",{className:"modal-field-description"},Object(h.l)("organization.name.description"))),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"organization-avatar"},Object(h.l)("organization.avatar")),r.createElement("input",{disabled:this.state.loading,id:"organization-avatar",maxLength:256,name:"avatar",onChange:this.handleAvatarInputChange,placeholder:Object(h.l)("onboarding.create_organization.avatar.placeholder"),type:"text",value:this.state.avatar}),r.createElement("div",{className:"modal-field-description"},Object(h.l)("organization.avatar.description")),(this.state.avatarImage||this.state.name)&&r.createElement("div",{className:"spacer-top spacer-bottom"},r.createElement("div",{className:"little-spacer-bottom"},Object(h.l)("organization.avatar.preview"),":"),r.createElement(c.a,{organization:{avatar:this.state.avatarImage||void 0,name:this.state.name||""}}))),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"organization-description"},Object(h.l)("description")),r.createElement("textarea",{disabled:this.state.loading,id:"organization-description",maxLength:256,name:"description",onChange:e=>this.setState({description:e.target.value}),rows:3,value:this.state.description}),r.createElement("div",{className:"modal-field-description"},Object(h.l)("organization.description.description"))),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"organization-url"},Object(h.l)("organization.url")),r.createElement("input",{disabled:this.state.loading,id:"organization-url",maxLength:256,name:"url",onChange:e=>this.setState({url:e.target.value}),type:"text",value:this.state.url}),r.createElement("div",{className:"modal-field-description"},Object(h.l)("organization.url.description"))),r.createElement("div",{className:"modal-field"},r.createElement(d.f,{disabled:this.state.loading},Object(h.l)("save")),this.state.loading&&r.createElement("i",{className:"spinner spacer-left"})))))}}const p={updateOrganization:m.b};t.default=Object(l.connect)(null,p)(g)},844:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return l});var n=a(466),i=a(570),r=a(418),s=a(0);const o=(e,t)=>a=>n.j(e,t).then(()=>{a(i.h(e,t)),a(Object(r.b)(Object(s.l)("organization.updated")))}),l=e=>t=>n.c(e).then(()=>{t(i.c(e))})}}]);
//# sourceMappingURL=352.m.6adbd4f5.chunk.js.map