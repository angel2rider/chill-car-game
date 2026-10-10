var U=Object.defineProperty;var A=(a,e,t)=>e in a?U(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>(A(a,typeof e!="symbol"?e+"":e,t),t);import{s as L,n as b,o as z,q as B,b as x}from"../chunks/scheduler.047e28a5.js";import{S as F,i as P,g as _,s as T,h as w,j as C,f as y,c as N,F as j,k as u,l as S,a as K,x as g}from"../chunks/index.fb0243fe.js";import{an as G,ak as I,ap as O,c_ as H,c$ as Z,d0 as q,aq as V,b9 as W,O as X,cV as J,az as Q,I as m,aD as Y,d1 as E,d2 as $,b8 as ee}from"../chunks/normals.f63d4883.js";import{v as te,t as ae,a as re,b as ne,c as oe,d as se,e as ie}from"../chunks/tree_04.6b3d8a5d.js";const le="summer",k=.4,p=[ne,oe,se,ie];let M,D;M=new G({map:I(ae,16),alphaTest:k,side:O}),M.onBeforeCompile=a=>{},D=new H({normalMap:I(re,16,void 0,V),alphaTest:k,side:O}),D.onBeforeCompile=a=>(a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCenterNormal; varying vec2 vMapUv; varying vec3 vCameraUp;`),a.vertexShader=a.vertexShader.replace("#include <normal_vertex>",`#include <normal_vertex>
vMapUv = uv;
`+te),a.fragmentShader=a.fragmentShader.replace("#include <packing>",`#include <packing>
varying vec3 vCenterNormal;
varying vec3 vCameraUp;
varying vec2 vMapUv;
`),a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_begin>",Z),a.fragmentShader=a.fragmentShader.replace("#include <normal_fragment_maps>",q+`
                float ddot = dot(normalize(-vCenterNormal), normalize(normal));

                float centerDownDot = dot(normalize(-vCenterNormal), vec3(0.0, -1.0, 0.0));


                //// Idea 0 - try to copy what the trees do

                // USE FOR WINTER

                // float centerUpDot = dot(vCenterNormal, vec3(0.0, 1.0, 0.0));
                // float upDot = dot(normal, vec3(0.0, 1.0, 0.0));

                // // Get the "flat" normal for the current light-relative normal so we can blend to that as needed
                // // NOTE: This max 0.6 value isn't mathematically correct but looks like a closer match by eye. Should be 0.5.
                // vec3 flatNormal = mix( normal, vec3(0.0, -1.0, 0.0), 0.6 * max(0.0, upDot) );

                // // Blend into flat normal if the center dot is facing away from the light?
                // normal = mix(flatNormal, normal, min(1.0, max(0.0, centerUpDot * -1.0)));


                //// Idea 0b

                // Scale the factor by the dot of the vcenternormal with up
                // less if up, more if down
                // float centerNormalFactor = 1.0 - (centerUpDot + 1.0) / 2.0;
                // centerNormalFactor = max(0.0, centerNormalFactor - 0.25);
                // centerNormalFactor *= 1.33;

                // USE FOR OTHERS?

                float centerUpDot = dot(-vCenterNormal, vec3(0.0, 1.0, 0.0));

                if(vMapUv.y > 0.25) {

                    float centerNormalFactor = min(1.0, max(0.0, -centerUpDot + 0.2));
                    normal += vCenterNormal * -centerNormalFactor;

                    // Tiny adjustments made empirically..
                    // 0.1 good for summer
                    // normal.y -= 0.1;
                    // AUTUMN
                    normal.y -= 0.05;

                    normal = normalize(normal);


                } else {
                    // Darken trunk normals to account for shadows maybe?
                    if(normal.y > 0.0) {
                        normal.y /= 8.0;
                    }
                    normal = normalize(normal);
                }


                //// Idea 1 - only works for top-down lighting sadly. Works with tangents.
                // normal = mix(normal, -vCenterNormal, max(0.0, (centerDownDot - ddot) / 1.0));


                //// Idea 2
                // normal = mix(normal, -vCenterNormal, min(1.0, (1.0 - (ddot+1.0) / 2.0) / 2.0));


                //// Idea 3
                // if(ddot < 0.0) {
                //     normal = -vCenterNormal;
                // }

            `),a);const d=256,f=16;let R=le+"_imposters_0";const de=5.35,he=100,ce=12.3;class me{constructor(){l(this,"scene");l(this,"camera");l(this,"container");l(this,"texMode",0);l(this,"shadowMode",!1);l(this,"variants",[]);l(this,"curVariant",0);l(this,"liveVariant",null);l(this,"rotationIndex",0);this.scene=new W,this.container=new X,this.camera=new J(68,1,.1,1e3),this.camera.zoom=ce,this.camera.position.y=de,this.camera.position.z=he,this.scene.add(this.camera),this.scene.add(this.container);let e=new Q;m.addListener("KeyZ",()=>this.previewImg()),m.addListener("KeyX",()=>this.saveImg()),m.addListener("KeyS",()=>this.setShadowMode(!this.shadowMode)),m.addListener("KeyD",()=>this.setTexture((this.texMode+1)%2)),m.addListener("KeyV",()=>this.setVariant((this.curVariant+1)%p.length)),m.addListener("KeyR",()=>this.nextRotation());for(let t of p){let r={mesh:null};e.load(t,n=>{console.log("Loaded"),r.mesh=new Y(n.children[0].geometry,M),this.variants.push(r),this.container.add(r.mesh),r.mesh.visible=!1,this.setVariant(0),this.render()})}}previewImg(){this.outCanvasDOM.width=f*d,this.outCanvasDOM.height=d*p.length,this.makeTextureArray(this.texMode,"",!1)}saveImg(){this.shadowMode||(this.outCanvasDOM.width=f*d,this.outCanvasDOM.height=d*p.length,this.makeTextureArray(0,R+"_d"),this.makeTextureArray(1,R+"_n"))}makeTextureArray(e,t,r=!0){this.setTexture(e);for(let n=0;n<f;n++){this.container.rotation.y=-(Math.PI*2*(n/f)+1/(f*2));let h=this.variants.length-1;for(let s=0;s<this.variants.length;s++)this.setVariant(s),this.render(),this.outCanvasDOM.getContext("2d").drawImage(this.canvasDOM,d*n,d*(h-s),d,d)}r&&this.downloadOutCanvas(t)}downloadOutCanvas(e){let t=this.outCanvasDOM.toDataURL("image/webp",1),r=document.createElement("a");r.href=t,r.download=e+".webp",document.body.appendChild(r),r.click()}setTexture(e){if(this.texMode=e,this.texMode==0){E.enabled=!0,this.renderer.outputColorSpace=$;for(let t=0;t<p.length;t++){let r=this.variants[t];r.mesh.material=M}this.renderer.setClearColor(16777215,0)}else{E.enabled=!1,this.renderer.outputColorSpace=V;for(let t=0;t<p.length;t++){let r=this.variants[t];r.mesh.material=D}this.renderer.setClearColor(8291327,1)}this.render()}setVariant(e){this.curVariant=e,this.liveVariant&&(this.liveVariant.mesh.visible=!1),this.liveVariant=this.variants[this.curVariant],this.liveVariant.mesh.visible=!0,this.render()}setShadowMode(e){}nextRotation(){this.rotationIndex=(this.rotationIndex+1)%f,this.container.rotation.y=Math.PI*2*(this.rotationIndex/f),this.render()}onMount(e,t,r){this.canvasDOM=e,this.outCanvasDOM=t,this.renderer=new ee({antialias:!0,canvas:e,alpha:!0,context:e.getContext("webgl2",{preserveDrawingBuffer:!0}),preserveDrawingBuffer:!0}),this.renderer.setClearColor(16777215,0),this.renderer.setPixelRatio(Math.min(1,window.devicePixelRatio)),window.addEventListener("resize",this.resize.bind(this)),this.resize(),m.init(window,e),this.hasInit=!0,this.render()}destroy(){m.destroy()}resize(){let e=d,t=d;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render()}render(){this.renderer.render(this.scene,this.camera)}}function ve(a){let e,t,r,n,h=`R - cycle rotation <br/>
        V - cycle variant <br/>
        D - cycle texture (normal/diffuse) <br/>
        S - toggle shadow mode <br/>
        X - download spritesheets <br/>
        Z - preview current without download`,s,o;return{c(){e=_("div"),t=_("canvas"),r=T(),n=_("div"),n.innerHTML=h,s=T(),o=_("canvas"),this.h()},l(v){e=w(v,"DIV",{style:!0});var i=C(e);t=w(i,"CANVAS",{id:!0,class:!0}),C(t).forEach(y),r=N(i),n=w(i,"DIV",{class:!0,"data-svelte-h":!0}),j(n)!=="svelte-10h863p"&&(n.innerHTML=h),s=N(i),o=w(i,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),C(o).forEach(y),i.forEach(y),this.h()},h(){u(t,"id","preview"),u(t,"class","svelte-1k02kbe"),u(n,"class","keys svelte-1k02kbe"),u(o,"id","out"),u(o,"width","2048"),u(o,"height","512"),u(o,"class","svelte-1k02kbe"),S(e,"position","absolute"),S(e,"width","100vw"),S(e,"height","100dvh")},m(v,i){K(v,e,i),g(e,t),a[3](t),g(e,r),g(e,n),g(e,s),g(e,o),a[4](o),a[5](e)},p:b,i:b,o:b,d(v){v&&y(e),a[3](null),a[4](null),a[5](null)}}}function ue(a,e,t){let r,n,h;const s=new me;z(()=>{s.onMount(r,n,h)}),B(()=>{s.destroy()});function o(c){x[c?"unshift":"push"](()=>{r=c,t(0,r)})}function v(c){x[c?"unshift":"push"](()=>{n=c,t(1,n)})}function i(c){x[c?"unshift":"push"](()=>{h=c,t(2,h)})}return[r,n,h,o,v,i]}class ye extends F{constructor(e){super(),P(this,e,ue,ve,L,{})}}export{ye as component};
