import{S as se,i as le,s as ae,k as c,a as g,l as f,m as h,c as y,h as u,n as r,b as S,B as n,A as O,q as k,r as B,C as re,G,v as ne,w as ie,x as oe,f as ue,t as ce,y as fe}from"../../../chunks/index-9306cc1d.js";function ee(p){let e,o,t,s,l,i,m,d,a,_,b,C,v,T,D,R,I,j,w,L,N,W,A,H,X,q,x,z,J;return{c(){e=c("form"),o=c("div"),t=c("input"),s=g(),l=c("label"),i=k("Email"),m=g(),d=c("div"),a=c("input"),_=g(),b=c("label"),C=k("Name"),v=g(),T=c("div"),D=c("input"),R=g(),I=c("label"),j=k("Business type"),w=g(),L=c("div"),N=c("textarea"),W=g(),A=c("label"),H=k("Message"),X=g(),q=c("button"),x=k("Submit"),this.h()},l(P){e=f(P,"FORM",{class:!0});var E=h(e);o=f(E,"DIV",{class:!0});var V=h(o);t=f(V,"INPUT",{id:!0,name:!0,placeholder:!0,class:!0}),s=y(V),l=f(V,"LABEL",{for:!0,id:!0,class:!0});var K=h(l);i=B(K,"Email"),K.forEach(u),V.forEach(u),m=y(E),d=f(E,"DIV",{class:!0});var M=h(d);a=f(M,"INPUT",{id:!0,name:!0,placeholder:!0,class:!0}),_=y(M),b=f(M,"LABEL",{for:!0,class:!0});var Q=h(b);C=B(Q,"Name"),Q.forEach(u),M.forEach(u),v=y(E),T=f(E,"DIV",{class:!0});var U=h(T);D=f(U,"INPUT",{placeholder:!0,class:!0}),R=y(U),I=f(U,"LABEL",{for:!0,id:!0,class:!0});var Y=h(I);j=B(Y,"Business type"),Y.forEach(u),U.forEach(u),w=y(E),L=f(E,"DIV",{class:!0});var F=h(L);N=f(F,"TEXTAREA",{placeholder:!0,class:!0}),h(N).forEach(u),W=y(F),A=f(F,"LABEL",{for:!0,id:!0,class:!0});var Z=h(A);H=B(Z,"Message"),Z.forEach(u),F.forEach(u),X=y(E),q=f(E,"BUTTON",{class:!0});var $=h(q);x=B($,"Submit"),$.forEach(u),E.forEach(u),this.h()},h(){r(t,"id","email"),r(t,"name","email"),r(t,"placeholder","Email"),t.required=!0,r(t,"class","svelte-u0vspo"),r(l,"for","email"),r(l,"id","email"),r(l,"class","svelte-u0vspo"),r(o,"class","svelte-u0vspo"),r(a,"id","name"),r(a,"name","name"),r(a,"placeholder","Name"),a.required=!0,r(a,"class","svelte-u0vspo"),r(b,"for","name"),r(b,"class","svelte-u0vspo"),r(d,"class","svelte-u0vspo"),r(D,"placeholder","Business type"),r(D,"class","svelte-u0vspo"),r(I,"for","type"),r(I,"id","type"),r(I,"class","svelte-u0vspo"),r(T,"class","svelte-u0vspo"),r(N,"placeholder","Message"),N.required=!0,r(N,"class","svelte-u0vspo"),r(A,"for","text"),r(A,"id","text"),r(A,"class","svelte-u0vspo"),r(L,"class","svelte-u0vspo"),r(q,"class","svelte-u0vspo"),r(e,"class","svelte-u0vspo")},m(P,E){S(P,e,E),n(e,o),n(o,t),p[6](t),n(o,s),n(o,l),n(l,i),n(e,m),n(e,d),n(d,a),p[7](a),n(d,_),n(d,b),n(b,C),n(e,v),n(e,T),n(T,D),p[8](D),n(T,R),n(T,I),n(I,j),n(e,w),n(e,L),n(L,N),p[9](N),n(L,W),n(L,A),n(A,H),n(e,X),n(e,q),n(q,x),z||(J=re(e,"submit",p[5]),z=!0)},p:O,d(P){P&&u(e),p[6](null),p[7](null),p[8](null),p[9](null),z=!1,J()}}}function te(p){let e,o,t,s;return{c(){e=c("div"),o=k(`Thanks for reaching out.
            `),t=c("br"),s=k(`
            We'll get back to you as soon as possible!`),this.h()},l(l){e=f(l,"DIV",{class:!0});var i=h(e);o=B(i,`Thanks for reaching out.
            `),t=f(i,"BR",{}),s=B(i,`
            We'll get back to you as soon as possible!`),i.forEach(u),this.h()},h(){r(e,"class","thanks svelte-u0vspo")},m(l,i){S(l,e,i),n(e,o),n(e,t),n(e,s)},d(l){l&&u(e)}}}function pe(p){let e,o,t=!p[4]&&ee(p),s=p[4]&&te();return{c(){e=c("section"),t&&t.c(),o=g(),s&&s.c(),this.h()},l(l){e=f(l,"SECTION",{class:!0});var i=h(e);t&&t.l(i),o=y(i),s&&s.l(i),i.forEach(u),this.h()},h(){r(e,"class","svelte-u0vspo")},m(l,i){S(l,e,i),t&&t.m(e,null),n(e,o),s&&s.m(e,null)},p(l,[i]){l[4]?t&&(t.d(1),t=null):t?t.p(l,i):(t=ee(l),t.c(),t.m(e,o)),l[4]?s||(s=te(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:O,o:O,d(l){l&&u(e),t&&t.d(),s&&s.d()}}}function ve(p,e,o){let t,s,l,i,m=!1;function d(v){v.preventDefault(),o(4,m=!0)}function a(v){G[v?"unshift":"push"](()=>{t=v,o(0,t)})}function _(v){G[v?"unshift":"push"](()=>{s=v,o(1,s)})}function b(v){G[v?"unshift":"push"](()=>{l=v,o(2,l)})}function C(v){G[v?"unshift":"push"](()=>{i=v,o(3,i)})}return[t,s,l,i,m,d,a,_,b,C]}class de extends se{constructor(e){super(),le(this,e,ve,pe,ae,{})}}function he(p){let e,o,t,s,l,i,m,d;return m=new de({}),{c(){e=c("h1"),o=k("Get in touch."),t=g(),s=c("p"),l=k("(virtual coffee is on us)"),i=g(),ne(m.$$.fragment),this.h()},l(a){e=f(a,"H1",{class:!0});var _=h(e);o=B(_,"Get in touch."),_.forEach(u),t=y(a),s=f(a,"P",{class:!0});var b=h(s);l=B(b,"(virtual coffee is on us)"),b.forEach(u),i=y(a),ie(m.$$.fragment,a),this.h()},h(){r(e,"class","svelte-j903hk"),r(s,"class","svelte-j903hk")},m(a,_){S(a,e,_),n(e,o),S(a,t,_),S(a,s,_),n(s,l),S(a,i,_),oe(m,a,_),d=!0},p:O,i(a){d||(ue(m.$$.fragment,a),d=!0)},o(a){ce(m.$$.fragment,a),d=!1},d(a){a&&u(e),a&&u(t),a&&u(s),a&&u(i),fe(m,a)}}}class _e extends se{constructor(e){super(),le(this,e,null,he,ae,{})}}export{_e as default};
