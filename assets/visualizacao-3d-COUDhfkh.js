const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFLoader-CRlTVoOg.js","assets/three.module-DK_4hUQZ.js","assets/BufferGeometryUtils-BlnylQjw.js","assets/OrbitControls-CxS8RELF.js","assets/RoomEnvironment-BHlJ0LTD.js"])))=>i.map(i=>d[i]);
import{c as ct,r as K,f as oi,A as Ot,j as I,K as ri,_ as nt}from"./index-B1JsFZoB.js";import{prepararAcabamento as Ft}from"./acabamento-modelo-DVl7iJWO.js";import{NoColorSpace as ni,Mesh as it,OrthographicCamera as li,BufferGeometry as ci,Float32BufferAttribute as kt,ShaderMaterial as ge,UniformsUtils as ze,Vector2 as re,WebGLRenderTarget as ke,HalfFloatType as Be,NoBlending as Ae,Clock as hi,Color as at,Vector3 as ae,Matrix4 as yt,DataTexture as Qt,RepeatWrapping as St,MeshNormalMaterial as Yt,AddEquation as pt,ZeroFactor as mt,DstAlphaFactor as Bt,DstColorFactor as jt,CustomBlending as ui,DepthTexture as qt,DepthStencilFormat as fi,UnsignedInt248Type as di,NearestFilter as bt,RGBAFormat as pi,UnsignedByteType as mi,RawShaderMaterial as vi,ColorManagement as gi,SRGBTransfer as xi,LinearToneMapping as Mi,ReinhardToneMapping as yi,CineonToneMapping as Si,ACESFilmicToneMapping as bi,AgXToneMapping as _i,NeutralToneMapping as wi,CustomToneMapping as Ti,AdditiveBlending as Pi,MeshBasicMaterial as Ci,Scene as Di,UnsignedIntType as Ei,BoxGeometry as Zt,Group as Gt,MeshStandardMaterial as Ht,CylinderGeometry as Ri}from"./three.module-DK_4hUQZ.js";import{c as Ai,E as zi,M as Ui}from"./montagem-D7XUvB4j.js";import"./BufferGeometryUtils-BlnylQjw.js";const Ni=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ii=ct("camera",Ni);const Li=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Vi=ct("message-circle",Li);const Oi=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Fi=ct("moon",Oi);const ki=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],Bi=ct("scan",ki);const ji=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Gi=ct("sun",ji);function Hi(h,e,t=.12){return h.length!==3||!h.every(Number.isFinite)?!1:!e.some(s=>s.min.length!==3||s.max.length!==3||![...s.min,...s.max].every(Number.isFinite)?!1:h.every((o,a)=>o>=s.min[a]-t&&o<=s.max[a]+t))}function Wi(h,e,t,s){if(!h.length||!(t>0))return;const o=(n,u)=>{if(n.x<u.x0||n.x>u.x1||n.y<u.y0||n.y>u.y1)return!1;if(!u.poligono?.length)return!0;let f=!1;for(let P=0,C=u.poligono.length-1;P<u.poligono.length;C=P++){const[U,O]=u.poligono[P],[E,R]=u.poligono[C];O>n.y!=R>n.y&&n.x<(E-U)*(n.y-O)/(R-O)+U&&(f=!f)}return f},a=h.map(n=>({a:n,n:e.filter(u=>u.lugares>0&&o(u,n)).length}));a.sort((n,u)=>u.n-n.n||(u.a.x1-u.a.x0)*(u.a.y1-u.a.y0)-(n.a.x1-n.a.x0)*(n.a.y1-n.a.y0));const i=a[0].a,r=e.filter(n=>n.lugares>0&&o(n,i)),p=r.length?{x:r.reduce((n,u)=>n+u.x,0)/r.length,y:r.reduce((n,u)=>n+u.y,0)/r.length}:{x:(i.x0+i.x1)/2,y:(i.y0+i.y1)/2},l=s?.b64?Uint8Array.from(atob(s.b64),n=>n.charCodeAt(0)):void 0,d=n=>{if(!o(n,i))return!1;if(!s||!l)return!0;const u=Math.floor(n.x/s.passo),f=Math.floor(n.y/s.passo);if(u<0||f<0||u>=s.w||f>=s.h)return!1;const P=f*s.w+u;return!!(l[P>>3]&1<<(P&7))},m=(n,u)=>Math.hypot(n.x-u.x,n.y-u.y)/t,y=n=>e.some(u=>{if(u.apoio_id||u.altura!==void 0&&u.altura<.08)return!1;const f=u.rotacao*Math.PI/180,P=(n.x-u.x)/t,C=(n.y-u.y)/t,U=P*Math.cos(f)+C*Math.sin(f),O=-P*Math.sin(f)+C*Math.cos(f),E=u.lugares>1?.12:.18,R=Math.max(u.largura,u.footprint_m||0)/2+E,T=Math.max(u.profundidade,u.footprint_m||0)/2+E;return Math.abs(U)<R&&Math.abs(O)<T}),v=r.filter(n=>n.lugares===1),M=v.reduce((n,u)=>({x:n.x+Math.sin(u.rotacao*Math.PI/180),y:n.y-Math.cos(u.rotacao*Math.PI/180)}),{x:0,y:0}),g=Math.hypot(M.x,M.y),D=[],w=Math.max(.35,Math.max(i.x1-i.x0,i.y1-i.y0)/t/32)*t;for(let n=i.y0+.5*t;n<i.y1-.4*t;n+=w)for(let u=i.x0+.5*t;u<i.x1-.4*t;u+=w){const f={x:u,y:n};if(!d(f)||y(f))continue;let P=!0;for(let T=0;T<8;T++)if(!d({x:u+Math.cos(T*Math.PI/4)*.4*t,y:n+Math.sin(T*Math.PI/4)*.4*t})){P=!1;break}if(!P)continue;const C=m(f,p);if(C<1.5)continue;let U=0;for(const T of r.length?r:[p]){let L=!0;const Q=Math.ceil(m(f,T)/.4);for(let _=1;_<Q;_++)if(!d({x:u+(T.x-u)*_/Q,y:n+(T.y-n)*_/Q})){L=!1;break}L&&U++}const O=Math.max(3,Math.min(10,Math.max(i.x1-i.x0,i.y1-i.y0)/t*.36)),E=g>v.length*.8&&v.length>3?((p.x-u)*M.x+(p.y-n)*M.y)/(C*t*g)*8:0,R=U/Math.max(1,r.length)*20-Math.abs(C-O)*.5+(n-i.y0)/(i.y1-i.y0)*.5+E;D.push({pos:f,alvo:p,score:R})}return D.sort((n,u)=>u.score-n.score),D[0]}function Qi(h,e){const t=/canto.*lagoa/i.test(e),s=new Set;h.traverse(o=>{const a=o;if(a.isMesh)for(const i of Array.isArray(a.material)?a.material:[a.material]){if(!i.isMeshStandardMaterial||s.has(i))continue;s.add(i);const r=i.name,p=/wood|madeira|deck|parquet/i.test(r)||t&&/^material_(30|42|25)(_|$)/.test(r),l=/stone|brick|tijolo/i.test(r)||t&&/^material_(31|40)$/.test(r),d=/plaster|concrete/i.test(r)||t&&/^material_(19|27)(_|$)/.test(r);p&&(i.metalness=0,i.roughness=.72,i.envMapIntensity=.45),(l||d)&&(i.metalness=0,i.roughness=.94,i.envMapIntensity=.2),i.map&&!i.normalMap&&!i.bumpMap&&(p||l)&&(i.bumpMap=i.map.clone(),i.bumpMap.colorSpace=ni,i.bumpMap.needsUpdate=!0,i.bumpScale=l?.018:.004),t&&/^material_27(_|$)/.test(r)&&i.color.set("#e4dfd5"),i.needsUpdate=!0}})}function Yi(h,e){return`Olá! Aqui está a montagem do seu evento${e?` no ${e}`:""}: ${h}. A foto vai em anexo. Me diga o que achou e o que gostaria de ajustar. 😊`}function qi(h){return"https://wa.me/?text="+encodeURIComponent(h)}function Zi(h,e,t,s,o,a,i,r){const p=new h.Group;p.name="Iluminação de apresentação";const l=[],d=a.x1-a.x0,m=a.z1-a.z0,y=Math.max(1,Math.min(5,Math.ceil(d/4.5))),v=Math.max(1,Math.min(6,Math.ceil(m/4.5))),M=i+Math.max(2.6,Math.min(3.4,r-i-.15)),g={x:Math.floor((y-1)/2),z:Math.floor((v-1)/2)};for(let n=0;n<v;n++)for(let u=0;u<y;u++){const f=new h.SpotLight(16768181,0,0,Math.PI*.47,1,1.6);f.position.set(a.x0+(u+.5)*d/y,M,a.z0+(n+.5)*m/v),f.target.position.set(f.position.x,i,f.position.z),f.castShadow=u===g.x&&n===g.z,f.castShadow&&(f.shadow.mapSize.set(2048,2048),f.shadow.bias=-2e-4,f.shadow.normalBias=.03,f.shadow.radius=6),p.add(f,f.target),l.push(f)}e.add(p);const D=1/Math.sqrt(l.length),w=n=>{e.traverse(u=>{const f=u;if(f.isMesh)for(const P of Array.isArray(f.material)?f.material:[f.material]){const C=P;C?.userData?.emissivoLayouts&&(C.emissiveIntensity=n?4:.35,C.needsUpdate=!0)}})};return{aplicar(n,u){const f=n==="noite";e.background=new h.Color(f?"#0b1322":"#dfe9ed"),e.environmentIntensity=f?.1:.55,t.toneMappingExposure=f?.7:.95,o.intensity=f?.09:.5,o.color.set(f?"#7f92c4":"#fff6e8"),s.intensity=f?.05:1.7,s.color.set(f?"#8fb0ff":"#fff4df"),s.castShadow=!f,l.forEach(P=>{P.intensity=(f?150:40)*D*u,P.color.set(f?"#ffc98a":"#ffe4c2")}),w(f),t.shadowMap.needsUpdate=!0},dispose(){l.forEach(n=>n.dispose()),e.remove(p)}}}const Ze={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class $e{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $i=new li(-1,1,1,-1,0,1);class Xi extends ci{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const Ki=new Xi;class wt{constructor(e){this._mesh=new it(Ki,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$i)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ji extends $e{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ge?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ze.clone(e.uniforms),this.material=new ge({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wt(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wt extends $e{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const o=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let i,r;this.inverse?(i=0,r=1):(i=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,i,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}}class ea extends $e{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ta{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new re);this._width=s.width,this._height=s.height,t=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Be}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ji(Ze),this.copyPass.material.blending=Ae,this.clock=new hi}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let o=0,a=this.passes.length;o<a;o++){const i=this.passes[o];if(i.enabled!==!1){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),i.needsSwap){if(s){const r=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Wt!==void 0&&(i instanceof Wt?s=!0:i instanceof ea&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(s,o),this.renderTarget2.setSize(s,o);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(s,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ia extends $e{constructor(e,t,s=null,o=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=o,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new at}render(e,t,s){const o=e.autoClear;e.autoClear=!1;let a,i;this.overrideMaterial!==null&&(i=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=i),e.autoClear=o}}const vt={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new yt},cameraProjectionMatrixInverse:{value:new yt},cameraWorldMatrix:{value:new yt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new ae(-1,-1,-1)},sceneBoxMax:{value:new ae(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},gt={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Rt={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function aa(h=5){const e=Math.floor(h)%2===0?Math.floor(h)+1:Math.floor(h),t=sa(e),s=t.length,o=new Uint8Array(s*4);for(let i=0;i<s;++i){const r=t[i],p=2*Math.PI*r/s,l=new ae(Math.cos(p),Math.sin(p),0).normalize();o[i*4]=(l.x*.5+.5)*255,o[i*4+1]=(l.y*.5+.5)*255,o[i*4+2]=127,o[i*4+3]=255}const a=new Qt(o,e,e);return a.wrapS=St,a.wrapT=St,a.needsUpdate=!0,a}function sa(h){const e=Math.floor(h)%2===0?Math.floor(h)+1:Math.floor(h),t=e*e,s=Array(t).fill(0);let o=Math.floor(e/2),a=e-1;for(let i=1;i<=t;){if(o===-1&&a===e?(a=e-2,o=0):(a===e&&(a=0),o<0&&(o=e-1)),s[o*e+a]!==0){a-=2,o++;continue}else s[o*e+a]=i++;a++,o--}return s}const xt={defines:{SAMPLES:16,SAMPLE_VECTORS:$t(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new yt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function $t(h,e,t){const s=oa(h,e,t);let o="vec3[SAMPLES](";for(let a=0;a<h;a++){const i=s[a];o+=`vec3(${i.x}, ${i.y}, ${i.z})${a<h-1?",":")"}`}return o}function oa(h,e,t){const s=[];for(let o=0;o<h;o++){const a=2*Math.PI*e*o/h,i=Math.pow(o/(h-1),t);s.push(new ae(Math.cos(a),Math.sin(a),i))}return s}class ra{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let s,o,a;const i=.5*(Math.sqrt(3)-1),r=(e+t)*i,p=Math.floor(e+r),l=Math.floor(t+r),d=(3-Math.sqrt(3))/6,m=(p+l)*d,y=p-m,v=l-m,M=e-y,g=t-v;let D,w;M>g?(D=1,w=0):(D=0,w=1);const n=M-D+d,u=g-w+d,f=M-1+2*d,P=g-1+2*d,C=p&255,U=l&255,O=this.perm[C+this.perm[U]]%12,E=this.perm[C+D+this.perm[U+w]]%12,R=this.perm[C+1+this.perm[U+1]]%12;let T=.5-M*M-g*g;T<0?s=0:(T*=T,s=T*T*this._dot(this.grad3[O],M,g));let L=.5-n*n-u*u;L<0?o=0:(L*=L,o=L*L*this._dot(this.grad3[E],n,u));let Q=.5-f*f-P*P;return Q<0?a=0:(Q*=Q,a=Q*Q*this._dot(this.grad3[R],f,P)),70*(s+o+a)}noise3d(e,t,s){let o,a,i,r;const l=(e+t+s)*.3333333333333333,d=Math.floor(e+l),m=Math.floor(t+l),y=Math.floor(s+l),v=1/6,M=(d+m+y)*v,g=d-M,D=m-M,w=y-M,n=e-g,u=t-D,f=s-w;let P,C,U,O,E,R;n>=u?u>=f?(P=1,C=0,U=0,O=1,E=1,R=0):n>=f?(P=1,C=0,U=0,O=1,E=0,R=1):(P=0,C=0,U=1,O=1,E=0,R=1):u<f?(P=0,C=0,U=1,O=0,E=1,R=1):n<f?(P=0,C=1,U=0,O=0,E=1,R=1):(P=0,C=1,U=0,O=1,E=1,R=0);const T=n-P+v,L=u-C+v,Q=f-U+v,_=n-O+2*v,F=u-E+2*v,Ue=f-R+2*v,je=n-1+3*v,b=u-1+3*v,Y=f-1+3*v,_e=d&255,we=m&255,Te=y&255,Z=this.perm[_e+this.perm[we+this.perm[Te]]]%12,$=this.perm[_e+P+this.perm[we+C+this.perm[Te+U]]]%12,N=this.perm[_e+O+this.perm[we+E+this.perm[Te+R]]]%12,Ge=this.perm[_e+1+this.perm[we+1+this.perm[Te+1]]]%12;let fe=.6-n*n-u*u-f*f;fe<0?o=0:(fe*=fe,o=fe*fe*this._dot3(this.grad3[Z],n,u,f));let de=.6-T*T-L*L-Q*Q;de<0?a=0:(de*=de,a=de*de*this._dot3(this.grad3[$],T,L,Q));let k=.6-_*_-F*F-Ue*Ue;k<0?i=0:(k*=k,i=k*k*this._dot3(this.grad3[N],_,F,Ue));let pe=.6-je*je-b*b-Y*Y;return pe<0?r=0:(pe*=pe,r=pe*pe*this._dot3(this.grad3[Ge],je,b,Y)),32*(o+a+i+r)}noise4d(e,t,s,o){const a=this.grad4,i=this.simplex,r=this.perm,p=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let d,m,y,v,M;const g=(e+t+s+o)*p,D=Math.floor(e+g),w=Math.floor(t+g),n=Math.floor(s+g),u=Math.floor(o+g),f=(D+w+n+u)*l,P=D-f,C=w-f,U=n-f,O=u-f,E=e-P,R=t-C,T=s-U,L=o-O,Q=E>R?32:0,_=E>T?16:0,F=R>T?8:0,Ue=E>L?4:0,je=R>L?2:0,b=T>L?1:0,Y=Q+_+F+Ue+je+b,_e=i[Y][0]>=3?1:0,we=i[Y][1]>=3?1:0,Te=i[Y][2]>=3?1:0,Z=i[Y][3]>=3?1:0,$=i[Y][0]>=2?1:0,N=i[Y][1]>=2?1:0,Ge=i[Y][2]>=2?1:0,fe=i[Y][3]>=2?1:0,de=i[Y][0]>=1?1:0,k=i[Y][1]>=1?1:0,pe=i[Y][2]>=1?1:0,H=i[Y][3]>=1?1:0,Pe=E-_e+l,z=R-we+l,Ne=T-Te+l,B=L-Z+l,te=E-$+2*l,ee=R-N+2*l,He=T-Ge+2*l,xe=L-fe+2*l,X=E-de+3*l,Me=R-k+3*l,Ce=T-pe+3*l,Xe=L-H+3*l,Ke=E-1+4*l,We=R-1+4*l,De=T-1+4*l,J=L-1+4*l,ie=D&255,Ie=w&255,se=n&255,Le=u&255,Ve=r[ie+r[Ie+r[se+r[Le]]]]%32,V=r[ie+_e+r[Ie+we+r[se+Te+r[Le+Z]]]]%32,q=r[ie+$+r[Ie+N+r[se+Ge+r[Le+fe]]]]%32,Tt=r[ie+de+r[Ie+k+r[se+pe+r[Le+H]]]]%32,Pt=r[ie+1+r[Ie+1+r[se+1+r[Le+1]]]]%32;let Qe=.6-E*E-R*R-T*T-L*L;Qe<0?d=0:(Qe*=Qe,d=Qe*Qe*this._dot4(a[Ve],E,R,T,L));let Ye=.6-Pe*Pe-z*z-Ne*Ne-B*B;Ye<0?m=0:(Ye*=Ye,m=Ye*Ye*this._dot4(a[V],Pe,z,Ne,B));let Oe=.6-te*te-ee*ee-He*He-xe*xe;Oe<0?y=0:(Oe*=Oe,y=Oe*Oe*this._dot4(a[q],te,ee,He,xe));let ne=.6-X*X-Me*Me-Ce*Ce-Xe*Xe;ne<0?v=0:(ne*=ne,v=ne*ne*this._dot4(a[Tt],X,Me,Ce,Xe));let le=.6-Ke*Ke-We*We-De*De-J*J;return le<0?M=0:(le*=le,M=le*le*this._dot4(a[Pt],Ke,We,De,J)),27*(d+m+y+v+M)}_dot(e,t,s){return e[0]*t+e[1]*s}_dot3(e,t,s,o){return e[0]*t+e[1]*s+e[2]*o}_dot4(e,t,s,o,a){return e[0]*t+e[1]*s+e[2]*o+e[3]*a}}class be extends $e{constructor(e,t,s=512,o=512,a,i,r){super(),this.width=s,this.height=o,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=aa(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ke(this.width,this.height,{type:Be}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ge({defines:Object.assign({},vt.defines),uniforms:ze.clone(vt.uniforms),vertexShader:vt.vertexShader,fragmentShader:vt.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Yt,this.normalMaterial.blending=Ae,this.pdMaterial=new ge({defines:Object.assign({},xt.defines),uniforms:ze.clone(xt.uniforms),vertexShader:xt.vertexShader,fragmentShader:xt.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ge({defines:Object.assign({},gt.defines),uniforms:ze.clone(gt.uniforms),vertexShader:gt.vertexShader,fragmentShader:gt.fragmentShader,blending:Ae}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ge({uniforms:ze.clone(Ze.uniforms),vertexShader:Ze.vertexShader,fragmentShader:Ze.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:jt,blendDst:mt,blendEquation:pt,blendSrcAlpha:Bt,blendDstAlpha:mt,blendEquationAlpha:pt}),this.blendMaterial=new ge({uniforms:ze.clone(Rt.uniforms),vertexShader:Rt.vertexShader,fragmentShader:Rt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ui,blendSrc:jt,blendDst:mt,blendEquation:pt,blendSrcAlpha:Bt,blendDstAlpha:mt,blendEquationAlpha:pt}),this._fsQuad=new wt(null),this._originalClearColor=new at,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),i!==void 0&&this.updateGtaoMaterial(i),r!==void 0&&this.updatePdMaterial(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new qt,this.depthTexture.format=fi,this.depthTexture.type=di,this.normalRenderTarget=new ke(this.width,this.height,{minFilter:bt,magFilter:bt,type:Be,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const s=this.normalTexture?1:0,o=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=s,this.gtaoMaterial.defines.DEPTH_SWIZZLING=o,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=s,this.pdMaterial.defines.DEPTH_SWIZZLING=o,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=$t(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,s){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case be.OUTPUT.Off:break;case be.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=s.texture,this.copyMaterial.blending=Ae,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case be.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ae,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case be.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ae,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case be.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case be.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ae,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case be.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=s.texture,this.copyMaterial.blending=Ae,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,s,o,a){e.getClearColor(this._originalClearColor);const i=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,o!=null&&(e.setClearColor(o),e.setClearAlpha(a||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=r,e.setClearColor(this._originalClearColor),e.setClearAlpha(i)}_renderOverride(e,t,s,o,a){e.getClearColor(this._originalClearColor);const i=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(s),e.autoClear=!1,o=t.clearColor||o,a=t.clearAlpha||a,o!=null&&(e.setClearColor(o),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this._originalClearColor),e.setClearAlpha(i)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(s){(s.isPoints||s.isLine||s.isLine2)&&s.visible&&(s.visible=!1,t.push(s))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new ra,s=e*e*4,o=new Uint8Array(s);for(let i=0;i<e;i++)for(let r=0;r<e;r++){const p=i,l=r;o[(i*e+r)*4]=(t.noise(p,l)*.5+.5)*255,o[(i*e+r)*4+1]=(t.noise(p+e,l)*.5+.5)*255,o[(i*e+r)*4+2]=(t.noise(p,l+e)*.5+.5)*255,o[(i*e+r)*4+3]=(t.noise(p+e,l+e)*.5+.5)*255}const a=new Qt(o,e,e,pi,mi);return a.wrapS=St,a.wrapT=St,a.needsUpdate=!0,a}}be.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Mt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class na extends $e{constructor(){super(),this.isOutputPass=!0,this.uniforms=ze.clone(Mt.uniforms),this.material=new vi({name:Mt.name,uniforms:this.uniforms,vertexShader:Mt.vertexShader,fragmentShader:Mt.fragmentShader}),this._fsQuad=new wt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gi.getTransfer(this._outputColorSpace)===xi&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mi?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yi?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Si?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_i?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wi?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ti&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const la={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class st extends $e{constructor(e,t=1,s,o){super(),this.strength=t,this.radius=s,this.threshold=o,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new at(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),i=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(a,i,{type:Be}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const m=new ke(a,i,{type:Be});m.texture.name="UnrealBloomPass.h"+d,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const y=new ke(a,i,{type:Be});y.texture.name="UnrealBloomPass.v"+d,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),a=Math.round(a/2),i=Math.round(i/2)}const r=la;this.highPassUniforms=ze.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];a=Math.round(this.resolution.x/2),i=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new re(1/a,1/i),a=Math.round(a/2),i=Math.round(i/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new ae(1,1,1),new ae(1,1,1),new ae(1,1,1),new ae(1,1,1),new ae(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ze.clone(Ze.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:Ze.vertexShader,fragmentShader:Ze.fragmentShader,premultipliedAlpha:!0,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new at,this._oldClearAlpha=1,this._basic=new Ci,this._fsQuad=new wt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),o=Math.round(t/2);this.renderTargetBright.setSize(s,o);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(s,o),this.renderTargetsVertical[a].setSize(s,o),this.separableBlurMaterials[a].uniforms.invSize.value=new re(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2)}render(e,t,s,o,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const i=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[p].uniforms.direction.value=st.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=st.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=i}_getSeparableBlurMaterial(e){const t=[],s=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(s*s))/s);return new ge({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ge({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}st.BlurDirectionX=new re(1,0);st.BlurDirectionY=new re(0,1);function ca(h,e,t){const s=new Di,o=new qt(1,1,Ei),a=new ke(1,1,{type:Be,depthTexture:o,minFilter:bt,magFilter:bt}),i=new ta(h,new ke(1,1,{type:Be,samples:4})),r=new be(e,t,1,1);r.setGBuffer(o,a.texture),r.updateGtaoMaterial({radius:.22,distanceExponent:1.2,thickness:.45,scale:1,samples:24}),r.blendIntensity=.32;const p=new st(new re(1,1),.35,.3,2.2);p.enabled=!1,i.addPass(new ia(e,t)),i.addPass(r),i.addPass(p),i.addPass(new na);const l=[];return e.updateMatrixWorld(!0),e.traverse(d=>{const m=d;if(!m.isMesh)return;const y=Array.isArray(m.material)?m.material:[m.material],v=y.map(g=>new Yt({side:g.side,clippingPlanes:g.clippingPlanes,toneMapped:!1})),M=new it(m.geometry,Array.isArray(m.material)?v:v[0]);M.matrixAutoUpdate=!1,M.matrix.copy(m.matrixWorld),s.add(M),l.push({source:m,mesh:M,materials:y})}),{resize(d,m){const y=Math.min(h.getPixelRatio(),1.5);i.setPixelRatio(y),i.setSize(d,m),a.setSize(Math.round(d*y),Math.round(m*y)),p.setSize(Math.round(d*y),Math.round(m*y))},noite(d){p.enabled=d},render(){for(const{source:v,mesh:M,materials:g}of l){let D=!0;for(let n=v;n;n=n.parent)if(!n.visible){D=!1;break}M.visible=D,(Array.isArray(M.material)?M.material:[M.material]).forEach((n,u)=>{const f=g[u];n.visible=f.visible&&!f.userData.vidroLayouts&&(!f.transparent||f.opacity>.98)&&f.alphaTest===0,n.clippingPlanes!==f.clippingPlanes&&(n.clippingPlanes=f.clippingPlanes,n.needsUpdate=!0)})}const d=h.getRenderTarget(),m=h.getClearColor(new at),y=h.getClearAlpha();h.setRenderTarget(a),h.setClearColor(0,0),h.clear(),h.render(s,t),h.setRenderTarget(d),h.setClearColor(m,y),i.render()},dispose(){for(const{mesh:d}of l)for(const m of Array.isArray(d.material)?d.material:[d.material])m.dispose();for(const d of i.passes)d.dispose();i.dispose(),a.dispose()}}}const lt=new ae;function ue(h,e,t,s,o,a){const i=2*Math.PI*o/4,r=Math.max(a-2*o,0),p=Math.PI/4;lt.copy(e),lt[s]=0,lt.normalize();const l=.5*i/(i+r),d=1-lt.angleTo(h)/p;return Math.sign(lt[t])===1?d*l:r/(i+r)+l+l*(1-d)}class _t extends Zt{constructor(e=1,t=1,s=1,o=2,a=.1){const i=o*2+1;if(a=Math.min(e/2,t/2,s/2,a),super(1,1,1,i,i,i),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:s,segments:o,radius:a},i===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const p=new ae,l=new ae,d=new ae(e,t,s).divideScalar(2).subScalar(a),m=this.attributes.position.array,y=this.attributes.normal.array,v=this.attributes.uv.array,M=m.length/6,g=new ae,D=.5/i;for(let w=0,n=0;w<m.length;w+=3,n+=2)switch(p.fromArray(m,w),l.copy(p),l.x-=Math.sign(l.x)*D,l.y-=Math.sign(l.y)*D,l.z-=Math.sign(l.z)*D,l.normalize(),m[w+0]=d.x*Math.sign(p.x)+l.x*a,m[w+1]=d.y*Math.sign(p.y)+l.y*a,m[w+2]=d.z*Math.sign(p.z)+l.z*a,y[w+0]=l.x,y[w+1]=l.y,y[w+2]=l.z,Math.floor(w/M)){case 0:g.set(1,0,0),v[n+0]=ue(g,l,"z","y",a,s),v[n+1]=1-ue(g,l,"y","z",a,t);break;case 1:g.set(-1,0,0),v[n+0]=1-ue(g,l,"z","y",a,s),v[n+1]=1-ue(g,l,"y","z",a,t);break;case 2:g.set(0,1,0),v[n+0]=1-ue(g,l,"x","z",a,e),v[n+1]=ue(g,l,"z","x",a,s);break;case 3:g.set(0,-1,0),v[n+0]=1-ue(g,l,"x","z",a,e),v[n+1]=1-ue(g,l,"z","x",a,s);break;case 4:g.set(0,0,1),v[n+0]=1-ue(g,l,"x","y",a,e),v[n+1]=1-ue(g,l,"y","x",a,t);break;case 5:g.set(0,0,-1),v[n+0]=ue(g,l,"x","y",a,e),v[n+1]=1-ue(g,l,"y","x",a,t);break}}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.segments,e.radius)}}function ha(h){const e=new Gt,{largura:t,profundidade:s,altura:o}=h,a=new Ht({color:h.cor,roughness:.8}),i=new Ht({color:"#816144",roughness:.65}),r=(l,d,m,y,v,M,g=a)=>{const D=new it(new _t(y,v,M,2,Math.min(.025,y/5,v/5,M/5)),g);return D.position.set(l,d,m),e.add(D),D},p=(l,d,m=t,y=s)=>{if(h.forma!=="elipse")return r(0,l,0,m,d,y);const v=new it(new Ri(.5,.5,d,48),a);return v.scale.set(m,1,y),v.position.y=l,e.add(v),v};if(h.personalizado?.tipo==="mesa"||h.personalizado?.tipo==="volume"&&h.nome==="Mesa de centro"){const l=Math.min(.06,o*.12),d=Math.min(.07,t*.08,s*.08);p(o-l/2,l);for(const m of[-1,1])for(const y of[-1,1])r(m*t*.28,(o-l)/2,y*s*.28,d,o-l,d,i);for(const{x:m,z:y,a:v}of Ai(h)){const M=new Gt;M.position.set(m,0,y),M.rotation.y=v;for(const[g,D,w,n,u]of[[.43,0,.42,.08,.42],[.65,.19,.42,.42,.06]]){const f=new it(new _t(w,n,u,2,.018),i);f.position.set(0,g,D),M.add(f)}for(const g of[-.16,.16])for(const D of[-.16,.16]){const w=new it(new Zt(.04,.4,.04),i);w.position.set(g,.2,D),M.add(w)}e.add(M)}}else if(h.personalizado?.tipo==="sofa"){r(0,o*.3,0,t,o*.3,s),r(0,o*.7,-s*.41,t,o*.6,s*.18);for(const d of[-1,1])r(d*t*.45,o*.52,0,t*.1,o*.44,s);const l=Math.max(1,Math.min(5,Math.round(t/.7)));for(let d=0;d<l;d++)r((d-(l-1)/2)*t*.8/l,o*.49,s*.055,t*.8/l-.01,o*.13,s*.69);for(const d of[-1,1])for(const m of[-1,1])r(d*t*.39,o*.075,m*s*.32,t*.035,o*.15,s*.07,i)}else h.personalizado?.tipo==="balcao"?(r(0,o*.47,0,t*.95,o*.94,s*.92),p(o*.97,o*.06)):p(o/2,o);return e}function xa({projeto:h,pisoAtual:e=0,foco:t,apresentacao:s=!1}){const o=K.useRef(null),[a,i]=K.useState("Carregando a maquete…"),r=t?"detalhe":s?"pessoa":"geral",[p,l]=K.useState(r),[d,m]=K.useState(!1),[y,v]=K.useState(!0),M=K.useRef(()=>{}),[g,D]=K.useState(t||""),w=K.useRef(()=>{}),[n,u]=K.useState("dia"),[f,P]=K.useState(1),C=K.useRef(()=>{}),U=K.useRef({periodo:n,intensidade:f});U.current={periodo:n,intensidade:f};const O=K.useRef(()=>{}),E=K.useRef(h.nome);E.current=h.nome;const R=oi(h)==="simulacao",T=K.useRef("");T.current=R?Ot:"PRÉVIA — sem validação operacional";const L=h.espaco_nome||h.maquete_snapshot.nome||"",Q=K.useRef(L);return Q.current=L,K.useEffect(()=>{const _=o.current;if(!_)return;let F=!1,Ue;async function je(){i("Carregando a maquete…"),m(!1);const[b,{GLTFLoader:Y},{OrbitControls:_e},{MeshoptDecoder:we},{RoomEnvironment:Te}]=await Promise.all([nt(()=>import("./three.module-DK_4hUQZ.js"),[]),nt(()=>import("./GLTFLoader-CRlTVoOg.js"),__vite__mapDeps([0,1,2])),nt(()=>import("./OrbitControls-CxS8RELF.js"),__vite__mapDeps([3,1])),nt(()=>import("./meshopt_decoder.module-BkEQAzru.js"),[]),nt(()=>import("./RoomEnvironment-BHlJ0LTD.js"),__vite__mapDeps([4,1]))]);if(F)return;const Z=new b.Scene;Z.background=new b.Color("#e8ede6");const $=new b.PerspectiveCamera(50,1,.04,2e3),N=new b.WebGLRenderer({antialias:!0,preserveDrawingBuffer:!0});N.setPixelRatio(Math.min(devicePixelRatio,2)),N.outputColorSpace=b.SRGBColorSpace,N.localClippingEnabled=!0,N.toneMapping=b.ACESFilmicToneMapping,N.toneMappingExposure=1,N.shadowMap.enabled=!0,N.shadowMap.type=b.PCFSoftShadowMap;const Ge=new b.PMREMGenerator(N),fe=new Te,de=Ge.fromScene(fe,.04);Z.environment=de.texture,Z.environmentIntensity=.7,fe.dispose(),Ge.dispose(),_.appendChild(N.domElement);const k=new _e($,N.domElement);k.enableDamping=!0,k.minDistance=.5,k.maxPolarAngle=Math.PI/2-.02;const pe=new b.HemisphereLight(16775923,9213837,.42);Z.add(pe);const H=new b.DirectionalLight(16774373,2.1);H.position.set(10,30,10),Z.add(H);const Pe=new Y;Pe.setMeshoptDecoder(we);const z=h.maquete_snapshot,Ne=z.glb?.cal??{px0:0,py0:0,x0:0,z0:0},B=z.pxm,te=(c,S)=>[Ne.x0+(c-Ne.px0)/B,Ne.z0+(S-Ne.py0)/B],ee=z.pisos?.[e]??z,He=ee.planta??z.planta,xe=ee.recorte??He.recorte??{x:0,y:0,w:He.w,h:He.h},X=ee.pisoY??ee.areas?.[0]?.pisoY??z.glb?.pisoY??0,Me=ee.corteY??X+2.8,Ce=new b.Plane(new b.Vector3(0,-1,0),Me),Xe=new Set,Ke=new Set,We=[];let De=[],J=!0,ie;const Ie=()=>ie?ie.render():N.render(Z,$),se=new b.Group;Z.add(se);const Le=c=>{Ft(c,N.capabilities.getMaxAnisotropy()),Qi(c,h.espaco_nome||z.nome||""),c.traverse(S=>{const x=S;if(x.isMesh){x.receiveShadow=!0,x.castShadow=(Array.isArray(x.material)?x.material:[x.material]).some(A=>(!A.transparent||A.opacity>.95)&&!A.userData.vidroLayouts);for(const A of Array.isArray(x.material)?x.material:[x.material]){if(/^fachada\s*-/i.test(A?.name??"")){A.clippingPlanes=[],A.needsUpdate=!0;continue}Xe.add(A),A.clippingPlanes=[Ce],A.clipShadows=!0,A.needsUpdate=!0}}})};w.current=c=>{Xe.forEach(S=>{S.clippingPlanes=c?[Ce,...De]:[],S.needsUpdate=!0}),Ke.forEach(S=>{S.clippingPlanes=c?De:[],S.clipShadows=!0,S.needsUpdate=!0}),v(c),J=!0};const Ve=ee.areas??z.areas??[],V=Ve.length?{x0:Math.min(...Ve.map(c=>c.x0))-B*.65,x1:Math.max(...Ve.map(c=>c.x1))+B*.65,y0:Math.min(...Ve.map(c=>c.y0))-B*.65,y1:Math.max(...Ve.map(c=>c.y1))+B*.65}:{x0:xe.x,x1:xe.x+xe.w,y0:xe.y,y1:xe.y+xe.h};for(const c of h.pecas.filter(S=>S.piso===e)){const S=Math.max(c.largura,c.profundidade,c.footprint_m||0)*B/2;V.x0=Math.min(V.x0,c.x-S),V.x1=Math.max(V.x1,c.x+S),V.y0=Math.min(V.y0,c.y-S),V.y1=Math.max(V.y1,c.y+S)}const q={...V};for(const c of z.pisos??[]){if(c===ee)continue;const S=c.pisoY??c.areas?.[0]?.pisoY??z.glb?.pisoY??0;if(!(Math.abs(S-X)>.5))for(const x of c.areas??[]){const A=B*3;x.x0>V.x1+A||x.x1<V.x0-A||x.y0>V.y1+A||x.y1<V.y0-A||(q.x0=Math.min(q.x0,x.x0-B*.65),q.x1=Math.max(q.x1,x.x1+B*.65),q.y0=Math.min(q.y0,x.y0-B*.65),q.y1=Math.max(q.y1,x.y1+B*.65))}}const[Tt,Pt]=te(q.x0,q.y0),[Qe,Ye]=te(q.x1,q.y1),Oe=[new b.Plane(new b.Vector3(1,0,0),-Tt),new b.Plane(new b.Vector3(-1,0,0),Qe),new b.Plane(new b.Vector3(0,0,1),-Pt),new b.Plane(new b.Vector3(0,0,-1),Ye)],ne=(V.x1-V.x0)/B,le=(V.y1-V.y0)/B,[ht,ut]=te((V.x0+V.x1)/2,(V.y0+V.y1)/2),ft=ee.areas?.[0]??z.areas?.[0]??V,[Xt,Kt]=te(ft.x0,ft.y0),[Jt,ei]=te(ft.x1,ft.y1),At=Zi(b,Z,N,H,pe,{x0:Xt,x1:Jt,z0:Kt,z1:ei},X,Me);C.current=(c,S)=>{At.aplicar(c,S),ie?.noite(c==="noite"),J=!0},C.current(U.current.periodo,U.current.intensidade),H.position.set(ht-ne*.35,X+Math.max(ne,le),ut+le*.25),H.target.position.set(ht,X,ut),Z.add(H.target),H.castShadow=!0,H.shadow.mapSize.set(2048,2048);const ti=(q.x1-q.x0)/B,ii=(q.y1-q.y0)/B,qe=Math.max(ne,le,ti,ii)*.8;Object.assign(H.shadow.camera,{left:-qe,right:qe,top:qe,bottom:-qe,near:.1,far:qe*5}),H.shadow.bias=-2e-4,H.shadow.normalBias=0,M.current=(c,S=t)=>{l(c),De=c==="geral"||c==="superior"?Oe:[],Ce.constant=c==="geral"||c==="superior"?Math.min(Me,X+.85):Me;const x=h.pecas.find(j=>j.id===S);D(c==="detalhe"&&x?x.id:"");const A=b.MathUtils.degToRad($.fov),ce=$.aspect,he=c==="superior"?Math.PI/2-.001:.93,me=le>ne*1.15&&ce>1.15,rt=me?le:ne,Ee=me?ne:le,oe=rt/2,ve=Ee/2*Math.sin(he)+1.4,et=(Math.max(oe/(Math.tan(A/2)*ce),ve/Math.tan(A/2))+Ee/2*Math.cos(he))*1.06;if(k.target.set(ht,X+.5,ut),$.position.set(ht+(me?et*Math.cos(he):0),X+.5+et*Math.sin(he),ut+(me?0:et*Math.cos(he))),c==="pessoa"){const j=Wi(Ve,h.pecas.filter(G=>G.piso===e),B,ee.mascara??z.mascara);if(j){const[G,Se]=te(j.pos.x,j.pos.y),[Dt,tt]=te(j.alvo.x,j.alvo.y);$.position.set(G,X+1.65,Se),k.target.set(Dt,X+1.25,tt)}else c="geral",De=Oe,Ce.constant=Math.min(Me,X+.85),l("geral");const W=z.camera?.internas?.find(G=>G.piso===e&&G.olho?.length===3&&G.alvo?.length===3&&[...G.olho,...G.alvo].every(Number.isFinite));W&&Hi(W.olho,We.map(({grupo:G})=>{G.updateWorldMatrix(!0,!0);const Se=new b.Box3().setFromObject(G);return{min:Se.min.toArray(),max:Se.max.toArray()}}))&&($.position.set(W.olho[0],W.olho[1],W.olho[2]),k.target.set(W.alvo[0],W.alvo[1],W.alvo[2]),c="pessoa",l("pessoa"),De=[],Ce.constant=Me)}if(c==="externa"&&se.children.length){se.updateWorldMatrix(!0,!0);const j=new b.Box3().setFromObject(se),Re=j.getCenter(new b.Vector3),W=z.camera?.externa,G=new b.Vector3(.65,.5,.8);if(W?.olho?.length===3&&W.alvo?.length===3&&[...W.olho,...W.alvo].every(Number.isFinite)){const Fe=new b.Vector3().fromArray(W.olho).sub(new b.Vector3().fromArray(W.alvo));Fe.lengthSq()>1e-6&&Fe.x*Fe.x+Fe.z*Fe.z>1e-6&&G.copy(Fe)}G.normalize();const Se=new b.Vector3().crossVectors(new b.Vector3(0,1,0),G).normalize(),Dt=new b.Vector3().crossVectors(G,Se).normalize();let tt=1;for(const Fe of[j.min.x,j.max.x])for(const ai of[j.min.y,j.max.y])for(const si of[j.min.z,j.max.z]){const Et=new b.Vector3(Fe,ai,si).sub(Re),Vt=Et.dot(G);tt=Math.max(tt,Vt+Math.abs(Et.dot(Se))/(Math.tan(A/2)*ce),Vt+Math.abs(Et.dot(Dt))/Math.tan(A/2))}tt*=1.12,k.target.copy(Re),$.position.copy(Re).add(G.multiplyScalar(tt))}if(c==="detalhe"&&x){const[j,Re]=te(x.x,x.y),W=Math.max(x.largura,x.profundidade,x.altura,1.2)*2,Se=(z.pisos?.[x.piso]?.pisoY??z.pisos?.[x.piso]?.areas?.[0]?.pisoY??z.glb?.pisoY??0)+(x.altura_base??0)+x.altura/2;$.position.set(j+W*.65,Se+W*.45,Re+W*.65),k.target.set(j,Se,Re)}const ye=k.target,dt=c==="detalhe"?4.5:qe;H.target.position.copy(ye),H.position.set(ye.x-12,ye.y+24,ye.z+12),Object.assign(H.shadow.camera,{left:-dt,right:dt,top:dt,bottom:-dt,far:Math.max(100,qe*5)}),H.shadow.camera.updateProjectionMatrix(),H.shadow.bias=c==="externa"?-.001:-2e-4,N.shadowMap.needsUpdate=!0;for(const{grupo:j,altura:Re}of We)j.visible=c==="externa"||Re<=X+.15;w.current(c!=="pessoa"&&c!=="externa"),k.update(),J=!0},O.current=()=>{Ie(),ua(N.domElement,{nome:E.current,salao:Q.current,piso:ee.nome||"",periodo:U.current.periodo,aviso:T.current}).toBlob(S=>{if(!S)return;const x=URL.createObjectURL(S),A=document.createElement("a");A.href=x,A.download=((T.current.startsWith("SIMULAÇÃO")?"SIMULACAO - ":"PREVIA - ")+E.current+" - "+(ee.nome||"salão")+" - "+U.current.periodo).replace(/[^\p{L}\d _-]/gu,"")+".png",A.click(),setTimeout(()=>URL.revokeObjectURL(x),1e3)},"image/png")};const ot=c=>c.traverse(S=>{const x=S;x.geometry&&x.geometry.dispose();const A=Array.isArray(x.material)?x.material:[x.material];for(const ce of A)if(ce){for(const he of Object.values(ce))he instanceof b.Texture&&he.dispose();ce.dispose()}});let zt=0;const Ut=()=>{F||(zt=requestAnimationFrame(Ut),k.update(),J&&(Ie(),J=!1))};k.addEventListener("change",()=>{J=!0});const Nt=()=>{_.clientWidth&&($.aspect=_.clientWidth/Math.max(1,_.clientHeight),$.updateProjectionMatrix(),N.setSize(_.clientWidth,_.clientHeight),ie?.resize(_.clientWidth,_.clientHeight),J=!0)},It=new ResizeObserver(Nt);It.observe(_),Nt(),M.current(r),Ut(),Ue=()=>{cancelAnimationFrame(zt),It.disconnect(),k.dispose(),At.dispose(),ie?.dispose(),ot(Z),de.dispose(),N.dispose(),N.domElement.remove()};let Je=0;if(z.glb)try{const c=await Pe.loadAsync(new URL(z.glb.src,h.assets_base_snapshot).href);if(F){ot(c.scene);return}Le(c.scene),se.add(c.scene),J=!0}catch{Je++}for(const c of z.pisos?.slice(1)??[])if(typeof c.glb=="string")try{const S=await Pe.loadAsync(new URL(c.glb,h.assets_base_snapshot).href);if(F){ot(S.scene);return}Le(S.scene),se.add(S.scene),J=!0}catch{Je++}for(const c of z.props??[]){const S=new URL(c.glb,h.assets_base_snapshot).href;if(!h.pecas.some(x=>x.glb_url===S))try{const x=await Pe.loadAsync(S);if(F){ot(x.scene);return}const[A,ce]=te(c.px.x,c.px.y),he=z.areas?.find(me=>c.px.x>=me.x0&&c.px.x<=me.x1&&c.px.y>=me.y0&&c.px.y<=me.y1);x.scene.position.set(A,(he?.pisoY??z.glb?.pisoY??0)+(c.alt??0),ce),x.scene.rotation.y=c.rotY??0,x.scene.scale.setScalar(c.escala??1),se.add(x.scene),J=!0}catch{Je++}}const Lt=[...h.pecas],Ct=new Map;await Promise.all(Array.from({length:3},async()=>{for(;Lt.length&&!F;){const c=Lt.shift();let S;if(c.glb_url)try{Ct.has(c.glb_url)||Ct.set(c.glb_url,Pe.loadAsync(c.glb_url).then(oe=>(Ft(oe.scene,N.capabilities.getMaxAnisotropy()),oe.scene))),S=(await Ct.get(c.glb_url)).clone(!0)}catch{Je++}if(!S&&c.personalizado&&(S=ha(c)),!S){const oe=c.forma==="elipse"?new b.CylinderGeometry(.5,.5,1,24):new b.BoxGeometry(1,1,1);S=new b.Mesh(oe,new b.MeshStandardMaterial({color:c.cor,roughness:.8})),S.scale.set(c.largura,c.altura,c.profundidade),S.position.y=c.altura/2;const ve=new b.Group;ve.add(S),S=ve}if(F){ot(S);return}const[x,A]=te(c.x,c.y),ce=z.pisos?.[c.piso],he=ce?.areas??z.areas,me=he?.find(oe=>c.x>=oe.x0&&c.x<=oe.x1&&c.y>=oe.y0&&c.y<=oe.y1),rt=ce?.pisoY??me?.pisoY??z.glb?.pisoY??0;S.traverse(oe=>{const ve=oe;if(ve.isMesh){const et=Array.isArray(ve.material)?ve.material:[ve.material];ve.castShadow=et.some(ye=>(!ye.transparent||ye.opacity>.95)&&!ye.userData.vidroLayouts),ve.receiveShadow=!0;for(const ye of et)Ke.add(ye)}});const Ee=new b.Group;Ee.add(S),Ee.position.set(x,rt+(c.altura_base??0),A),Ee.rotation.y=-c.rotacao*Math.PI/180,Ee.visible=rt<=X+.15,We.push({grupo:Ee,altura:rt}),Z.add(Ee),J=!0}})),F||(N.extensions.has("EXT_color_buffer_float")&&(ie=ca(N,Z,$),ie.resize(_.clientWidth,_.clientHeight),ie.noite(U.current.periodo==="noite")),m(!0),M.current(r),N.shadowMap.autoUpdate=!1,N.shadowMap.needsUpdate=!0,J=!0,i(Je?`${Je} arquivo(s) não carregaram. Peças sem modelo aparecem pelas medidas.`:"Arraste para girar · roda para aproximar · botão direito para deslocar"+(h.pecas.some(c=>!c.glb_url)?" · Peças sem modelo 3D são volumes pelas medidas.":"")))}return je().catch(()=>{F||i("Não foi possível abrir o 3D neste aparelho. Continue montando pela planta 2D.")}),()=>{F=!0,Ue?.()}},[h.pecas,h.maquete_snapshot,h.assets_base_snapshot,h.espaco_nome,e,t,s,r]),I.jsxs("div",{className:"layout-cena-3d","aria-label":s?"Apresentação da montagem":"Maquete da montagem",children:[I.jsx("div",{ref:o,className:"layout-cena-canvas"}),R&&I.jsx("span",{className:"layout-marca-simulacao",children:Ot}),I.jsxs("div",{className:"layout-iluminacao",role:"group","aria-label":"Iluminação da montagem",children:[I.jsxs("div",{className:"layout-periodos",children:[I.jsxs("button",{disabled:!d,"aria-pressed":n==="dia",onClick:()=>{u("dia"),C.current("dia",f)},children:[I.jsx(Gi,{size:17})," Diurno"]}),I.jsxs("button",{disabled:!d,"aria-pressed":n==="noite",onClick:()=>{u("noite"),C.current("noite",f)},children:[I.jsx(Fi,{size:17})," Noturno"]})]}),I.jsxs("label",{children:["Luz do salão"," ",I.jsx("input",{"aria-label":"Intensidade da luz do salão",type:"range",min:"0.3",max:"1.8",step:"0.1",value:f,disabled:!d,onChange:_=>{const F=Number(_.target.value);P(F),C.current(n,F)}})]}),I.jsx("small",{children:"Simulação de iluminação"})]}),I.jsxs("div",{className:"layout-cena-controles",role:"group","aria-label":"Vistas da maquete",children:[[["geral","Visão geral"],["superior","Vista superior"],["pessoa","Dentro do salão"],["externa","Espaço completo"]].map(([_,F])=>I.jsxs("button",{disabled:!d,"aria-pressed":p===_,onClick:()=>M.current(_),children:[_==="pessoa"?I.jsx(zi,{size:16}):_==="superior"?I.jsx(Ui,{size:16}):I.jsx(Bi,{size:16}),F]},_)),t&&I.jsx("button",{disabled:!d,"aria-pressed":p==="detalhe",onClick:()=>M.current("detalhe"),children:"Detalhe da peça"}),!!h.pecas.length&&I.jsxs("select",{"aria-label":"Aproximar uma peça",disabled:!d,value:g,onChange:_=>M.current(_.target.value?"detalhe":"geral",_.target.value),children:[I.jsx("option",{value:"",children:"Ver detalhe de uma peça"}),h.pecas.map((_,F)=>_.piso===e?I.jsxs("option",{value:_.id,children:[F+1,". ",_.nome,_.glb_url?"":" (volume por medidas)"]},_.id):null)]}),I.jsxs("button",{disabled:!d,"aria-pressed":!y,onClick:()=>w.current(!y),children:[I.jsx(ri,{size:16}),y?"Mostrar teto":"Ocultar teto"]}),I.jsxs("button",{disabled:!d,onClick:()=>O.current(),title:"Salva a foto com moldura: nome da montagem, salão e marca.",children:[I.jsx(Ii,{size:16})," Baixar foto"]}),I.jsxs("button",{type:"button",onClick:()=>window.open(qi(Yi(h.nome,L)),"_blank","noopener"),title:"Abre o WhatsApp com o texto pronto. Anexe a foto baixada.",children:[I.jsx(Vi,{size:16})," Mandar no WhatsApp"]})]}),I.jsx("p",{role:"status",className:"layout-cena-status",children:a})]})}function ua(h,e){const t=h.width,s=h.height,o=Math.max(64,Math.round(s*.11)),a=document.createElement("canvas");a.width=t,a.height=s+o;const i=a.getContext("2d");if(!i)return h;i.drawImage(h,0,0),i.fillStyle="#1f3d33",i.fillRect(0,s,t,o);const r=o,p=Math.round(r*.5),l='system-ui, "Segoe UI", Roboto, sans-serif';return i.textBaseline="middle",i.fillStyle="#ffffff",i.font=`600 ${Math.round(r*.3)}px ${l}`,i.fillText((e.aviso.startsWith("SIMULAÇÃO")?"SIMULAÇÃO · ":"")+e.nome,p,s+r*.36,t*.6),i.fillStyle="#c9dbd1",i.font=`400 ${Math.round(r*.2)}px ${l}`,i.fillText([e.salao,e.piso,e.periodo==="noite"?"à noite":"luz do dia",e.aviso].filter(Boolean).join(" · "),p,s+r*.7,t*.6),i.textAlign="right",i.fillStyle="#ffffff",i.font=`600 ${Math.round(r*.28)}px ${l}`,i.fillText("Indaiá Eventos",t-p,s+r*.38),i.fillStyle="#c9dbd1",i.font=`400 ${Math.round(r*.19)}px ${l}`,i.fillText(new Date().toLocaleDateString("pt-BR"),t-p,s+r*.7),a}export{xa as default};
