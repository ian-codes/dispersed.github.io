import{S as R,i as F,s as M,k as g,a as W,q as $,l as p,m as y,h as m,c as q,r as b,n as w,b as V,B as f,u as J,A as L,F as te,f as A,g as ne,d as ie,t as H,v as se,w as le,x as ae,y as oe}from"../../../chunks/index-9306cc1d.js";function Q(c,e,s){const t=c.slice();return t[1]=e[s],t[3]=s,t}function X(c){let e,s;return{c(){e=g("span"),s=$("\u2605"),this.h()},l(t){e=p(t,"SPAN",{class:!0});var l=y(e);s=b(l,"\u2605"),l.forEach(m),this.h()},h(){w(e,"class","svelte-nf9o5y")},m(t,l){V(t,e,l),f(e,s)},p:L,d(t){t&&m(e)}}}function ce(c){let e,s,t,l,o,n=c[0].text+"",a,h,r,d,k,S=c[0].name+"",j,T,x,C=c[0].company+"",B,z,E,P,I={length:c[0].stars},v=[];for(let i=0;i<I.length;i+=1)v[i]=X(Q(c,I,i));return{c(){e=g("li"),s=g("div");for(let i=0;i<v.length;i+=1)v[i].c();t=W(),l=g("div"),o=$('"'),a=$(n),h=$('"'),r=W(),d=g("div"),k=g("span"),j=$(S),T=W(),x=g("span"),B=$(C),z=W(),E=g("div"),P=g("div"),this.h()},l(i){e=p(i,"LI",{class:!0});var _=y(e);s=p(_,"DIV",{class:!0});var u=y(s);for(let G=0;G<v.length;G+=1)v[G].l(u);u.forEach(m),t=q(_),l=p(_,"DIV",{class:!0});var D=y(l);o=b(D,'"'),a=b(D,n),h=b(D,'"'),D.forEach(m),r=q(_),d=p(_,"DIV",{class:!0});var N=y(d);k=p(N,"SPAN",{class:!0});var O=y(k);j=b(O,S),O.forEach(m),T=q(N),x=p(N,"SPAN",{class:!0});var U=y(x);B=b(U,C),U.forEach(m),N.forEach(m),z=q(_),E=p(_,"DIV",{class:!0});var K=y(E);P=p(K,"DIV",{class:!0});var re=y(P);re.forEach(m),K.forEach(m),_.forEach(m),this.h()},h(){w(s,"class","stars svelte-nf9o5y"),w(l,"class","text svelte-nf9o5y"),w(k,"class","name svelte-nf9o5y"),w(x,"class","company"),w(d,"class","author svelte-nf9o5y"),w(P,"class","img svelte-nf9o5y"),w(E,"class","imgWrapper svelte-nf9o5y"),w(e,"class","card svelte-nf9o5y")},m(i,_){V(i,e,_),f(e,s);for(let u=0;u<v.length;u+=1)v[u].m(s,null);f(e,t),f(e,l),f(l,o),f(l,a),f(l,h),f(e,r),f(e,d),f(d,k),f(k,j),f(d,T),f(d,x),f(x,B),f(e,z),f(e,E),f(E,P)},p(i,[_]){if(_&1){I={length:i[0].stars};let u;for(u=0;u<I.length;u+=1){const D=Q(i,I,u);v[u]?v[u].p(D,_):(v[u]=X(),v[u].c(),v[u].m(s,null))}for(;u<v.length;u+=1)v[u].d(1);v.length=I.length}_&1&&n!==(n=i[0].text+"")&&J(a,n),_&1&&S!==(S=i[0].name+"")&&J(j,S),_&1&&C!==(C=i[0].company+"")&&J(B,C)},i:L,o:L,d(i){i&&m(e),te(v,i)}}}function he(c,e,s){let{review:t}=e;return c.$$set=l=>{"review"in l&&s(0,t=l.review)},[t]}class ue extends R{constructor(e){super(),F(this,e,he,ce,M,{review:0})}}const Y=[{stars:5,text:"Working with Dispersed Agency completely turned around the projectory of our business. We were hardly getting any clients or Google reviews for years. Within 2 months of working together we've become the top-rated business in our niche on Google. Business has never been going as great as now. We're truly grateful for the team at Dispersed.",name:"Jesse Thompson",company:"Capital Vehicles Inc.",img:"jesse"},{stars:5,text:"Simply amazing service. My team and I are completely baffled by how the folks at Dispersed managed to boost us to the top of our industry within mere weeks. I'd recommend any business owners who are serious about growing to work with Dispersed. Well, everyone except for our competitors!",name:"John Desmond",company:"Solar Priority LLC",img:"john"},{stars:5,text:"To preface: I don't usually write reviews. But honestly, I was just so excited to see our business starting to flourish after working with Dispersed Agency. Working with them was like striking a huge pot of gold after searching aimlessly for solutions.",name:"Simon Laferriere",company:"Calc Protocols Co.",img:"simon"}];function Z(c,e,s){const t=c.slice();return t[0]=e[s],t}function ee(c){let e,s;return e=new ue({props:{review:c[0]}}),{c(){se(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,l){ae(e,t,l),s=!0},p:L,i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){oe(e,t)}}}function fe(c){let e,s,t,l=Y,o=[];for(let a=0;a<l.length;a+=1)o[a]=ee(Z(c,l,a));const n=a=>H(o[a],1,1,()=>{o[a]=null});return{c(){e=g("section"),s=g("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=p(a,"SECTION",{class:!0});var h=y(e);s=p(h,"UL",{class:!0});var r=y(s);for(let d=0;d<o.length;d+=1)o[d].l(r);r.forEach(m),h.forEach(m),this.h()},h(){w(s,"class","svelte-q0c6mc"),w(e,"class","svelte-q0c6mc")},m(a,h){V(a,e,h),f(e,s);for(let r=0;r<o.length;r+=1)o[r].m(s,null);t=!0},p(a,[h]){if(h&0){l=Y;let r;for(r=0;r<l.length;r+=1){const d=Z(a,l,r);o[r]?(o[r].p(d,h),A(o[r],1)):(o[r]=ee(d),o[r].c(),A(o[r],1),o[r].m(s,null))}for(ne(),r=l.length;r<o.length;r+=1)n(r);ie()}},i(a){if(!t){for(let h=0;h<l.length;h+=1)A(o[h]);t=!0}},o(a){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)H(o[h]);t=!1},d(a){a&&m(e),te(o,a)}}}class me extends R{constructor(e){super(),F(this,e,null,fe,M,{})}}function ve(c){let e,s,t,l,o;return l=new me({}),{c(){e=g("h2"),s=$("Here's what our clients have to say about us."),t=W(),se(l.$$.fragment),this.h()},l(n){e=p(n,"H2",{class:!0});var a=y(e);s=b(a,"Here's what our clients have to say about us."),a.forEach(m),t=q(n),le(l.$$.fragment,n),this.h()},h(){w(e,"class","svelte-1r9q9qz")},m(n,a){V(n,e,a),f(e,s),V(n,t,a),ae(l,n,a),o=!0},p:L,i(n){o||(A(l.$$.fragment,n),o=!0)},o(n){H(l.$$.fragment,n),o=!1},d(n){n&&m(e),n&&m(t),oe(l,n)}}}class de extends R{constructor(e){super(),F(this,e,null,ve,M,{})}}export{de as default};
