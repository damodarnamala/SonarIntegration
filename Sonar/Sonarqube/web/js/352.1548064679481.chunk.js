(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1087:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return c});var n=a(705),i=a(810),r=a(658),o=a(17),l=function(e,t){return function(a){return n.j(e,t).then(function(){a(i.h(e,t)),a(Object(r.b)(Object(o.l)("organization.updated")))})}},c=function(e){return function(t){return n.c(e).then(function(){t(i.c(e))})}}},1847:function(e,t,a){"use strict";a.r(t),a.d(t,"OrganizationEdit",function(){return v});var n,i=a(652),r=a.n(i),o=a(591),l=a(607),c=a.n(l),s=a(600),d=a(782),m=a(593),u=a(1087),p=a(17),g=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),v=function(e){function t(t){var a=e.call(this,t)||this;return a.mounted=!1,a.handleAvatarInputChange=function(e){var t=e.target.value;a.setState({avatar:t}),a.changeAvatarImage(t)},a.changeAvatarImage=function(e){a.setState({avatarImage:e})},a.handleSubmit=function(e){e.preventDefault();var t={avatar:a.state.avatar,description:a.state.description,name:a.state.name,url:a.state.url};a.setState({loading:!0}),a.props.updateOrganization(a.props.organization.key,t).then(a.stopLoading,a.stopLoading)},a.stopLoading=function(){a.mounted&&a.setState({loading:!1})},a.state={loading:!1,avatar:t.organization.avatar||"",avatarImage:t.organization.avatar||"",description:t.organization.description||"",name:t.organization.name,url:t.organization.url||""},a.changeAvatarImage=r()(a.changeAvatarImage,500),a}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=Object(p.l)("organization.edit");return o.createElement("div",{className:"page page-limited"},o.createElement(c.a,{title:t}),o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},t)),o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("form",{onSubmit:this.handleSubmit},o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"organization-name"},Object(p.l)("organization.name"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{disabled:this.state.loading,id:"organization-name",maxLength:255,name:"name",onChange:function(t){return e.setState({name:t.target.value})},required:!0,type:"text",value:this.state.name}),o.createElement("div",{className:"modal-field-description"},Object(p.l)("organization.name.description"))),o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"organization-avatar"},Object(p.l)("organization.avatar")),o.createElement("input",{disabled:this.state.loading,id:"organization-avatar",maxLength:256,name:"avatar",onChange:this.handleAvatarInputChange,placeholder:Object(p.l)("onboarding.create_organization.avatar.placeholder"),type:"text",value:this.state.avatar}),o.createElement("div",{className:"modal-field-description"},Object(p.l)("organization.avatar.description")),(this.state.avatarImage||this.state.name)&&o.createElement("div",{className:"spacer-top spacer-bottom"},o.createElement("div",{className:"little-spacer-bottom"},Object(p.l)("organization.avatar.preview"),":"),o.createElement(d.a,{organization:{avatar:this.state.avatarImage||void 0,name:this.state.name||""}}))),o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"organization-description"},Object(p.l)("description")),o.createElement("textarea",{disabled:this.state.loading,id:"organization-description",maxLength:256,name:"description",onChange:function(t){return e.setState({description:t.target.value})},rows:3,value:this.state.description}),o.createElement("div",{className:"modal-field-description"},Object(p.l)("organization.description.description"))),o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"organization-url"},Object(p.l)("organization.url")),o.createElement("input",{disabled:this.state.loading,id:"organization-url",maxLength:256,name:"url",onChange:function(t){return e.setState({url:t.target.value})},type:"text",value:this.state.url}),o.createElement("div",{className:"modal-field-description"},Object(p.l)("organization.url.description"))),o.createElement("div",{className:"modal-field"},o.createElement(m.f,{disabled:this.state.loading},Object(p.l)("save")),this.state.loading&&o.createElement("i",{className:"spinner spacer-left"})))))},t}(o.PureComponent),h={updateOrganization:u.b};t.default=Object(s.connect)(null,h)(v)}}]);
//# sourceMappingURL=352.1548064679481.chunk.js.map