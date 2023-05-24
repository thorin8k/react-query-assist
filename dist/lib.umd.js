!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types"),require("escape-string-regexp"),require("@emotion/styled"),require("@emotion/react"),require("styled-system"),require("react/jsx-runtime"),require("@emotion/css"),require("react-textarea-autosize")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","escape-string-regexp","@emotion/styled","@emotion/react","styled-system","react/jsx-runtime","@emotion/css","react-textarea-autosize"],t):t((e||self).reactQueryAssist2={},e.react,e.propTypes,e.escapeStringRegexp,e.styled,e.react,e.styledSystem,e.jsxRuntime,e.css,e.reactTextareaAutosize)}(this,function(e,t,n,o,r,i,s,a,l,u){function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p,c,h,f,g,b,v,y,m,x,w,C=/*#__PURE__*/d(t),k=/*#__PURE__*/d(n),S=/*#__PURE__*/d(o),j=/*#__PURE__*/d(r),A=/*#__PURE__*/d(u);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}function K(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,P(e,t)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return t||(t=e.slice(0)),e.raw=t,e}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function D(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(e,t){return new RegExp(S.default(e||""),"i").test(t||"")}function T(e){void 0===e&&(e={});var t=e.partial?"*":"+";return new RegExp("(?!^|\\(|\\s)*([-]+)?([\\w.$]+)"+(e.partial?"?":"")+":"+(e.partial?"?":"")+'(?!:)([><=]*)(?:(")(.'+t+'?)(\\*)?"|([^\\s()*"]'+t+"))"+(e.partial?"?":"")+"(\\*)?(?!\\s|\\)|$)*","g")}function _(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=[]);var o=Array.isArray(e)?e:T({partial:!0}).exec(e);if(!o||!o.length)return{};var r={fullToken:o[0],attributeName:o[2],attributeNameValid:!1,attributeValue:o[5]||o[7],attributeValueValid:!1,prepended:o[1]||"",operator:o[3],negated:o[0].indexOf("-")>-1,quoted:Boolean(o[4]),wildcard:Boolean(o[6]||o[8])};if(t){var i=t.find(function(e){for(var t,o,i=!1,s=D(n);!(t=s()).done;)if(o=r.attributeName,new RegExp("^"+S.default(e[t.value]||"")+"$","i").test(o||"")){i=!0;break}return i});i&&(r.attributeNameValid=!0,r.attributeValueValid=!0,Array.isArray(i.enumerations)&&(r.attributeValueValid=i.enumerations.findIndex(function(e){return I(r.attributeValue,e)})>-1))}return r}var R=i.keyframes(p||(p=F(["\n  0% {\n    opacity: 0;\n    transform: perspective(50em) rotateX(-30deg);\n  }\n  100% {\n    opacity: 1;\n    transform: perspective(50em) rotateX(0deg);\n  }\n"]))),H=j.default("aside")(c||(c=F(["\n    display: inline-block;\n    position: absolute;\n    z-index: 10;\n    transform-origin: 50% 0;\n    animation: "," ease-in-out 250ms;\n    transition: top 100ms, left 100ms;\n\n    ","\n    ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),R,s.top,s.left,s.color,s.boxShadow,s.borders,s.borderColor,s.borderRadius,s.space,s.width,s.minWidth,s.fontSize,s.fontWeight,s.fontFamily,s.lineHeight,s.letterSpacing);H.defaultProps={bg:"#555555",boxShadow:"0 4px 10px rgba(0, 0, 0, .25)",color:"#FFFFFF",minWidth:"280px"};var L=j.default("section")(h||(h=F(["\n    padding: 15px;\n    text-align: ",";\n    :not(:last-child) {\n        border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n    }\n"])),function(e){return e.center?"center":"inherit"}),N=j.default("ul")(f||(f=F(["\n    list-style-type: none;\n    line-height: 20px;\n    margin: 10px 0;\n    overflow: auto;\n    padding-inline-start: 0;\n\n    ","\n    ","\n  ","\n  ","\n"])),s.space,s.color,s.borders,s.maxHeight);N.defaultProps={maxHeight:"200px"};var q=j.default("li")(g||(g=F(["\n    cursor: pointer;\n    border: 1px solid transparent;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    ","\n    ","\n\n  ","\n  ","\n  ","\n"])),s.space,s.maxWidth,function(e){return e.active&&s.color},function(e){return e.active&&s.borders},function(e){return e.active&&s.borderColor});q.defaultProps={bg:"#FFFFFF",color:"#000000",p:"3px 15px",maxWidth:"320px"};var z=j.default(L)(b||(b=F(["\n    padding: 15px 0;\n"]))),B=j.default("div")(v||(v=F(["\n    display: inline-block;\n    background: ",";\n    font-weight: 500;\n    line-height: 18px;\n    padding: 5px 10px;\n    cursor: pointer;\n    &:hover {\n        background: rgba(255, 255, 255, 0.1);\n    }\n"])),function(e){return e.active?"rgba(255, 255, 255, 0.2)":"none"}),W=j.default(B)(y||(y=F(["\n    display: block;\n    margin-bottom: 5px;\n"]))),X=j.default("div")(m||(m=F(["\n    display: inline-block;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 2px;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 18px;\n    min-width: 20px;\n    text-align: center;\n    vertical-align: middle;\n    padding: 2px 5px;\n    margin-right: 5px;\n"]))),Y=j.default(X)(x||(x=F(["\n    background: none;\n    border: 1px solid ",";\n    color: ",";\n    font-size: 8px;\n    padding: 0;\n    width: ",";\n    height: 18px;\n"])),function(e){return e.theme.color},function(e){return e.theme.color},function(e){return e.long?"36px":"18px"}),$=j.default("div")(w||(w=F(["\n    display: inline-block;\n    opacity: 0.5;\n    &:not(:last-child) {\n        margin-right: 15px;\n    }\n"]))),M=/*#__PURE__*/function(e){function t(t){var n;return(n=e.call(this,t)||this).onKeyDown=n.onKeyDown.bind(V(n)),n.handleEnterKey=n.handleEnterKey.bind(V(n)),n.handleEscKey=n.handleEscKey.bind(V(n)),n.handleArrowKeys=n.handleArrowKeys.bind(V(n)),n.adjustListScroll=n.adjustListScroll.bind(V(n)),n.getAttribute=n.getAttribute.bind(V(n)),n.getSuggestions=n.getSuggestions.bind(V(n)),n.getSuggestionAddons=n.getSuggestionAddons.bind(V(n)),n.filterSuggestions=n.filterSuggestions.bind(V(n)),n.acceptSuggestion=n.acceptSuggestion.bind(V(n)),n.getOperators=n.getOperators.bind(V(n)),n.setOperator=n.setOperator.bind(V(n)),n.state={suggestions:[],highlightedIdx:0,selectedIdx:null,prepended:"",operator:"",negated:!1},n}K(t,e);var n=t.prototype;return n.componentDidMount=function(){this.filterSuggestions(this.props.value),this.props.keyboardHelpers&&document.addEventListener("keydown",this.onKeyDown,!1)},n.componentWillUnmount=function(){this.props.keyboardHelpers&&document.removeEventListener("keydown",this.onKeyDown,!1)},n.componentWillReceiveProps=function(e){this.props.value!==e.value&&this.filterSuggestions(e.value)},n.componentDidUpdate=function(){0===this.state.suggestions.length&&this.props.onClose()},n.onKeyDown=function(e){switch(e.keyCode){case 9:case 13:this.handleEnterKey(e);break;case 27:this.handleEscKey(e);break;case 38:case 40:this.handleArrowKeys(e,e.keyCode)}},n.handleEnterKey=function(e){e.preventDefault(),this.acceptSuggestion()},n.handleEscKey=function(e){e.preventDefault(),this.props.onClose(!0)},n.handleArrowKeys=function(e,t){e.preventDefault();var n=this.state.highlightedIdx,o=40===t,r=this.state.suggestions.length-1,i=null!==n?o?n+1:n-1:o?0:r;this.setState({highlightedIdx:o?i<=r?i:0:i>=0?i:r},this.adjustListScroll)},n.adjustListScroll=function(){var e=this._selected,t=e.offsetTop,n=e.clientHeight,o=this._list,r=n,i=o.clientHeight-n,s=t-o.scrollTop;s>i?this._list.scrollTop+=n+(s-i):s<r&&(this._list.scrollTop=t-n+(s-r))},n.getAttribute=function(e){if(null!==e&&e>-1)return this.props.attributes[e]},n.getSuggestions=function(e){var t=this.props,n=t.nameKey;return e?e.enumerations||[]:t.attributes.map(function(e){return e[n]})},n.getSuggestionAddons=function(e,t){var n=[];return e&&(t.wildcard||e.enumerations||!t.attributeValue||"string"!==e.type||n.push('"'+t.attributeValue+'"'),t.attributeValue&&"string"===e.type&&(t.quoted&&!e.enumerations?n.push('"'+t.attributeValue+'*"'):n.push("*"+t.attributeValue+"*",t.attributeValue+"*","*"+t.attributeValue))),n},n.filterSuggestions=function(e){var t=this.props,n=t.nameKey,o=t.attributes,r=_(e),i=r.attributeName&&e.indexOf(":")>-1?o.findIndex(function(e){return e[n]===r.attributeName}):-1,s=this.getAttribute(i),a=this.getSuggestions(s),l=i>-1?r.attributeValue:r.attributeName,u=a.filter(function(e){return I(l,e)}).concat(this.getSuggestionAddons(s,r));this.setState({selectedIdx:i,prepended:r.prepended,operator:r.operator,negated:r.negated,suggestions:u,highlightedIdx:0})},n.acceptSuggestion=function(){var e=this.props,t=e.nameKey,n=e.onSelect,o=this.state,r=o.suggestions,i=o.highlightedIdx,s=o.selectedIdx,a=o.prepended,l=o.operator,u=this.getAttribute(s),d=r[i];n(""+a+(u?u[t]+":"+l+d:d),-1===s?":":"")},n.getOperators=function(){var e=[],t=this.getAttribute(this.state.selectedIdx);if(t)switch(t.type){case"int":case"float":e.push({name:"GT",char:">",active:">"===this.state.operator}),e.push({name:"LT",char:"<",active:"<"===this.state.operator}),e.push({name:"GTE",char:">=",active:">="===this.state.operator}),e.push({name:"LTE",char:"<=",active:"<="===this.state.operator})}return e},n.setOperator=function(e){var t=this.props.value,n=this.state,o=n.operator;if("-"===e){var r=t.replace(/^-?(.*)/,(n.negated?"":"-")+"$1");this.props.onSelect(r)}else{var i=_(t);i.operator=o===e?"":e,this.props.onSelect(function(e){var t=e||{},n=t.prepended,o=t.attributeName,r=t.attributeValue,i=t.operator;return""+(void 0===n?"":n)+(void 0===o?"":o)+":"+(void 0===i?"":i)+(void 0===r?"":r)}(i))}},n.render=function(){var e=this,t=this.props.footerComponent;/*#__PURE__*/return a.jsxs(H,O({left:this.props.offsetX||0,top:this.props.offsetY||0},this.props.dropdownProps,{children:[/*#__PURE__*/a.jsx(N,O({},this.props.listProps,{ref:function(t){return e._list=t},children:this.state.suggestions.map(function(t,n){var o=e.state.highlightedIdx===n;/*#__PURE__*/return a.jsx(q,O({active:o,onClick:e.acceptSuggestion,onMouseOver:function(){return e.setState({highlightedIdx:n})},ref:o?function(t){return e._selected=t}:void 0},e.props.selectorProps,{children:t}),n)})})),/*#__PURE__*/a.jsxs(z,{children:[/*#__PURE__*/a.jsxs(W,{active:this.state.negated,onClick:function(){return e.setOperator("-")},children:[/*#__PURE__*/a.jsx(X,{children:"-"}),this.props.translations&&this.props.translations.negate?this.props.translations.negate:"NEGATE"]}),this.getOperators().map(function(t,n){/*#__PURE__*/return a.jsxs(B,{active:t.active,onClick:function(){return e.setOperator(t.char)},children:[/*#__PURE__*/a.jsx(X,{children:t.char}),t.name]},n)})]}),this.props.keyboardHelpers&&/*#__PURE__*/a.jsxs(L,{center:!0,children:[/*#__PURE__*/a.jsxs($,{children:[/*#__PURE__*/a.jsx(Y,{children:"▲"}),/*#__PURE__*/a.jsx(Y,{children:"▼"}),this.props.translations&&this.props.translations.navigate?this.props.translations.navigate:"to navigate"]}),/*#__PURE__*/a.jsxs($,{children:[/*#__PURE__*/a.jsx(Y,{long:!0,children:"↵"}),this.props.translations&&this.props.translations.select?this.props.translations.select:"to select"]})]}),/*#__PURE__*/a.jsx(t,{})]}))},t}(t.PureComponent);M.propTypes={value:k.default.string,nameKey:k.default.string,attributes:k.default.array,onSelect:k.default.func,onClose:k.default.func,offsetX:k.default.number,offsetY:k.default.number,keyboardHelpers:k.default.bool,footerComponent:k.default.func,dropdownProps:k.default.object,selectorProps:k.default.object,listProps:k.default.object,translations:k.default.object},M.defaultProps={value:"",nameKey:"name",onSelect:function(){},onClose:function(){},keyboardHelpers:!0,footerComponent:function(){return null}};var U,G,Q,J,Z,ee,te,ne=/*#__PURE__*/function(e){function t(t){var n;return(n=e.call(this,t)||this).wrapperRef=/*#__PURE__*/C.default.createRef(),n.handleClickOutside=n.handleClickOutside.bind(V(n)),n}K(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside)},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.props.notify&&this.props.notify()},n.render=function(){/*#__PURE__*/return a.jsx("div",{ref:this.wrapperRef,children:this.props.children})},t}(t.Component),oe=j.default("div")(U||(U=F(["\n    position: relative;\n    width: 100%;\n"]))),re=j.default("div")(G||(G=F(["\n    position: relative;\n    ","\n    ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),s.space,s.width,s.borders,s.borderColor,s.borderRadius,s.boxShadow,s.color,s.fontSize,s.fontWeight,s.fontFamily,s.lineHeight,s.letterSpacing,s.textAlign);re.defaultProps={bg:"#FFFFFF",color:"#505050",border:"1px solid rgba(0, 0, 0, .1)",fontFamily:"monospace"};var ie=A.default,se=s.style({prop:"placeholderColor",cssProperty:"color",key:"colors"}),ae=j.default(ie)(Q||(Q=F(["\n    display: block;\n    background: none;\n    border: none;\n    outline: none;\n    resize: none;\n    font: inherit;\n    width: 100%;\n    padding: 0;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    /* we only want overlay text visible */\n    /* need to do this so caret still shows up */\n    color: inherit;\n    -webkit-text-fill-color: transparent;\n    ::placeholder {\n        ","\n        -webkit-text-fill-color: initial;\n    }\n"])),se);ae.defaultProps={lineHeight:"1.1rem",placeholderColor:"#D7D7D7"};var le=j.default("div")(J||(J=F(["\n    display: block;\n    background: none;\n    border: none;\n    outline: none;\n    resize: none;\n    font: inherit;\n    max-width: 100%;\n    padding: 0;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    padding: inherit;\n\n    ","\n\n    /* reversed from Input above */\n  -webkit-text-fill-color: initial;\n"])),function(e){return e.collapsed&&l.css(Z||(Z=F(["\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        "])))}),ue=j.default("span")(ee||(ee=F(["\n    font: inherit;\n"]))),de=s.style({prop:"tokenColor",cssProperty:"color",key:"colors"}),pe=j.default(ue)(te||(te=F(["\n    position: relative;\n    cursor: pointer;\n    font-weight: 500;\n\n    ","\n"])),de);pe.defaultProps={tokenColor:"#2384FF"};var ce=/*#__PURE__*/function(e){function t(t){var n;return(n=e.call(this,t)||this).onFocus=n.onFocus.bind(V(n)),n.onBlur=n.onBlur.bind(V(n)),n.onKeyDown=n.onKeyDown.bind(V(n)),n.onChange=n.onChange.bind(V(n)),n.onAutosuggest=n.onAutosuggest.bind(V(n)),n.onSelectValue=n.onSelectValue.bind(V(n)),n.handleEnterKey=n.handleEnterKey.bind(V(n)),n.shouldAutosuggest=n.shouldAutosuggest.bind(V(n)),n.onClose=n.onClose.bind(V(n)),n.extract=n.extract.bind(V(n)),n.getCurrentChunk=n.getCurrentChunk.bind(V(n)),n.buildOverlay=n.buildOverlay.bind(V(n)),n.state={focused:!1,value:t.defaultValue,attributes:t.data,overlayComponents:[],dropdownClosed:!1,dropdownOpen:!1,dropdownValue:null,dropdownX:null,dropdownY:null},n}K(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({overlayComponents:this.buildOverlay(this.state.value)})},n.componentDidUpdate=function(e,t){var n=this.state,o=n.value,r=n.attributes;o!==t.value&&this.props.onChange(o),o===t.value&&r.length===t.attributes.length||this.setState({overlayComponents:this.buildOverlay(o)},this.onAutosuggest)},n.componentWillReceiveProps=function(e){var t={};void 0!==e.defaultValue&&(t.value=e.defaultValue),e.data&&(t.attributes=e.data),this.setState(t)},n.onFocus=function(e){this.setState({focused:!0},this.onAutosuggest)},n.onBlur=function(e){this.setState({focused:!1})},n.onKeyDown=function(e){13===e.keyCode&&this.handleEnterKey(e),37!==e.keyCode&&39!==e.keyCode||this.onClose()},n.onChange=function(e){this.setState({value:e.target.value})},n.onAutosuggest=function(){var e=this._marker,t=e.offsetLeft,n=e.offsetTop,o=this.getCurrentChunk(this.state.value).chunk,r=this.shouldAutosuggest(o);this.setState(r?{dropdownClosed:!1,dropdownOpen:!0,dropdownValue:o,dropdownX:t,dropdownY:n+25}:{dropdownOpen:!1})},n.onSelectValue=function(e,t){var n=this;void 0===t&&(t="");var o=this.state.value,r=this.getCurrentChunk(o),i=r.index,s=r.indexEnd,a=o.slice(0,i),l=o.slice(s),u=i+e.length+t.length;this.setState({value:""+a+e+t+l,dropdownClosed:":"!==t},function(){n._input.focus(),n._input.setSelectionRange(u,u)})},n.handleEnterKey=function(e){var t=document.activeElement===this._input;e.shiftKey||!t||this.state.dropdownOpen||(e.preventDefault(),this.props.onSubmit(this.state.value))},n.shouldAutosuggest=function(e){var t=this._input.selectionStart,n=this.state,o=n.value,r=n.focused,i=!o.charAt(t)||/[)\s]/.test(o.charAt(t)),s=i&&/[\s-(]/.test(o.charAt(t-1)),a=i&&/[^)\s]/.test(o.charAt(t-1));return r&&(!o||s||a&&!this.state.dropdownClosed)},n.onClose=function(e){this.setState({dropdownOpen:!1,dropdownClosed:e||!1})},n.extract=function(e){return function(e,t,n){for(var o,r=[],i=T();null!==(o=i.exec(e));){if(t){var s=_(o,t,n);if(!s.attributeNameValid||!s.attributeValueValid)continue}r.push([o.index,i.lastIndex])}return r}(e,this.state.attributes,this.props.nameKeyIncludes)},n.getCurrentChunk=function(e){for(var t,n=this._input.selectionStart,o=this.extract(e),r=e.substring(0,n),i=r.match(/[^\s]*$/),s=i?r.lastIndexOf(i[i.length-1]):-1,a=s,l=D(o.reverse());!(t=l()).done;){var u=t.value,d=u[0],p=u[1];if(n>p&&s<d){a=p;break}if(n>d&&n<=p){a=d;break}if(s>d&&s<p){a=p;break}}var c=e.substring(a,n);return{index:a,indexEnd:a+c.length,chunk:c}},n.buildTokens=function(e,t){var n=this,o=[],r=this.extract(e),i=0;return r.reduce(function(t,r){return o.push(e.substring(t[1],r[0])),o.push(/*#__PURE__*/a.jsx(pe,{tokenColor:n.props.inputProps.tokenColor,children:e.substring(r[0],r[1])},"token-"+r[0])),i=r[1],r},[null,0]),o.push(e.substring(i)),o.filter(Boolean)},n.buildOverlay=function(e){var t=this,n=this.getCurrentChunk(e).index,o=this.buildTokens(e.substring(0,n)),r=this.buildTokens(e.substring(n)||" ",n);return[o,/*#__PURE__*/a.jsx(ue,{style:{outline:this.props.debug?"1px solid red":"none"},ref:function(e){return t._marker=e},children:r},"after-"+n)]},n.render=function(){var e=this,t=this.props,n=t.nameKey,o=t.inputProps,r=t.placeholder,i=t.keyboardHelpers,s=t.footerComponent,l=t.dropdownProps,u=t.selectorProps,d=t.listProps,p=t.alwaysLeft,c=t.translations,h=this.state,f=h.value,g=h.attributes,b=h.dropdownOpen,v=h.dropdownValue,y=h.dropdownX,m=h.dropdownY,x=!this.state.focused&&t.collapseOnBlur;/*#__PURE__*/return a.jsx(ne,{notify:this.onClose,children:/*#__PURE__*/a.jsxs(oe,{className:t.className,children:[/*#__PURE__*/a.jsxs(re,O({},o,{onClick:function(){return e._input.focus()},children:[/*#__PURE__*/a.jsx(le,{collapsed:x,children:h.overlayComponents}),/*#__PURE__*/a.jsx(ae,{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:o.autoFocus,maxRows:x?1:void 0,placeholder:r,placeholderColor:o.placeholderColor,value:f,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onChange:this.onChange,ref:function(t){return e._input=t}})]})),b&&/*#__PURE__*/a.jsx(M,{keyboardHelpers:i,footerComponent:s,attributes:g,value:v,nameKey:n,onSelect:this.onSelectValue,onClose:this.onClose,offsetX:p?0:y,offsetY:m,dropdownProps:l,selectorProps:u,listProps:d,translations:c})]})})},t}(t.Component);ce.propTypes={debug:k.default.bool,data:k.default.array,nameKey:k.default.string,nameKeyIncludes:k.default.array,defaultValue:k.default.string,placeholder:k.default.string,onChange:k.default.func,onSubmit:k.default.func,keyboardHelpers:k.default.bool,collapseOnBlur:k.default.bool,footerComponent:k.default.func,inputProps:k.default.object,dropdownProps:k.default.object,selectorProps:k.default.object,listProps:k.default.object,alwaysLeft:k.default.bool,translations:k.default.object},ce.defaultProps={data:[],nameKey:"name",nameKeyIncludes:["name"],defaultValue:"",onChange:function(){},onSubmit:function(){},placeholder:"Search",inputProps:{},dropdownProps:{},selectorProps:{},listProps:{}},e.QueryAssist=ce});
//# sourceMappingURL=lib.umd.js.map
