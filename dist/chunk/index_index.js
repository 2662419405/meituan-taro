(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"84":function(e,n,t){},"90":function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(1),i=t(87),c=t(88),u=t(6),l=t(89),a=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}();function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var p,f=function(e){function Index(){var e,n,t;!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n=t=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r))),t.config={"navigationBarTitleText":""},t.state={"current":0},t.handleClick=function(e){t.setState({"current":e})},_possibleConstructorReturn(t,n)}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["a"].Component),a(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"componentDidNotFound","value":function componentDidNotFound(){}},{"key":"render","value":function render(){return o.j.createElement(i.a,null,o.j.createElement(l.a,{"fixed":!0,"tabList":[{"title":"外卖","iconType":"iconfont iconeliaomo-copy"},{"title":"搜素","iconType":"iconfont iconzhinanzhen"},{"title":"订单","iconType":"iconfont iconicon-"},{"title":"我的","iconType":"iconfont iconwodedangxuan"}],"onClick":this.handleClick.bind(this),"current":this.state.current}))}}]),Index}(),s=(t(84),function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}());function index_possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var d=Object(u.b)("counterStore")(p=Object(u.c)(p=function(e){function Index(){var e,n,t;!function index_classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return n=t=index_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r))),t.config={"navigationBarTitleText":"首页"},t.increment=function(){t.props.counterStore.increment()},t.decrement=function(){t.props.counterStore.decrement()},t.incrementAsync=function(){t.props.counterStore.incrementAsync()},index_possibleConstructorReturn(t,n)}return function index_inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r["a"].Component),s(Index,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentWillReact","value":function componentWillReact(){console.log("componentWillReact")}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.props.counterStore.counter;return o.j.createElement(i.a,{"className":"index"},o.j.createElement(c.a,null,e),o.j.createElement(f,null))}}]),Index}())||p)||p;n.default=d}}]);