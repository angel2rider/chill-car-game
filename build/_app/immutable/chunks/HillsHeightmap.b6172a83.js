var ur=Object.defineProperty;var pr=(t,a,r)=>a in t?ur(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;var T=(t,a,r)=>(pr(t,typeof a!="symbol"?a+"":a,r),r);import{R as Ut,p as mr,v as vr,a as Ar,f as _r,P as be,H as xr}from"./DevMidlineGenerator.d99584e3.js";import{aw as j,av as Pe,aC as K,aB as q,ak as s,am as M,b1 as X,de as Dr,df as Sr,dg as wr,an as Me,ap as Q,ao as Le,V as at,di as ye,c$ as Zt,dj as Ce,aq as R,dk as br,dl as H,ar as Mr,at as P,as as le,dQ as Lr,dm as Ft,au as he,f as ze,dn as yr,ax as Cr,ay as z}from"./normals.f63d4883.js";import{t as Ir,a as Rr,f as Er,i as Tr,p as Nr,g as Ur,s as Ot,h as Fr,j as Or,k as Hr,n as Pr,l as zr,m as Gr,o as kr,q as Br,r as Wr,u as Vr,w as jr,x as Xr,y as Zr,b as Qr,c as Yr,d as Kr,e as qr}from"./tree_04.6b3d8a5d.js";const rt=""+new URL("../assets/grass.15f2422c.webp",import.meta.url).href,it=""+new URL("../assets/summer_grasses.7ddf683f.webp",import.meta.url).href,Jr=""+new URL("../assets/spring_bushes.2db1f4bc.webp",import.meta.url).href,$r=""+new URL("../assets/forest_spring.a81cef17.webp",import.meta.url).href,ot=""+new URL("../assets/gravel.0c64b1c3.webp",import.meta.url).href,st=""+new URL("../assets/sand.43e5b6fc.webp",import.meta.url).href,ei=""+new URL("../assets/spring_rock.d1f6769c.webp",import.meta.url).href,Ie=""+new URL("../assets/rock_bump.8f8c68ad.webp",import.meta.url).href,Qt=""+new URL("../assets/summer_heather_05.5f56558d.webp",import.meta.url).href,lt=""+new URL("../assets/ground_detail_near.9099b9d5.webp",import.meta.url).href,nt=""+new URL("../assets/ground_detail_far.a63b212a.webp",import.meta.url).href,Re=""+new URL("../assets/grass_variation.209068de.webp",import.meta.url).href,dt=""+new URL("../assets/road_base.f6473539.webp",import.meta.url).href,ct=""+new URL("../assets/road_paint_dashed.246907ab.webp",import.meta.url).href,ft=""+new URL("../assets/road_paint_dashed_long.58ab8a61.webp",import.meta.url).href,gt=""+new URL("../assets/road_paint_solid.5d853556.webp",import.meta.url).href,ht=""+new URL("../assets/road_paint_solid_left.68b665c9.webp",import.meta.url).href,ut=""+new URL("../assets/road_paint_solid_right.3f96bedd.webp",import.meta.url).href,pt=""+new URL("../assets/road_paint_merge_left.27a677e8.webp",import.meta.url).href,mt=""+new URL("../assets/road_paint_merge_right.5c821b1d.webp",import.meta.url).href,ti=""+new URL("../assets/road_single_base_spring.2a1a3159.webp",import.meta.url).href,Ht=""+new URL("../assets/road_overlay_spring.10938687.webp",import.meta.url).href,ai=""+new URL("../assets/road_single_overlay_spring.a23e0db5.webp",import.meta.url).href,vt=""+new URL("../assets/road_single_wide.e9c6ee67.webp",import.meta.url).href,At=""+new URL("../assets/offroad_mask.07511369.webp",import.meta.url).href,ri=""+new URL("../assets/spring_imposters_0_d.2e67db77.webp",import.meta.url).href,ii=""+new URL("../assets/spring_imposters_0_n.1d5afe54.webp",import.meta.url).href,oi=""+new URL("../assets/spring_imposters_1_d.05133c03.webp",import.meta.url).href,si=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,li=""+new URL("../assets/spring_trees_0.aee94219.webp",import.meta.url).href,ni=""+new URL("../assets/spring_trees_0_n.8e3ce8fa.webp",import.meta.url).href,di=""+new URL("../assets/spring_trees_1_m.29ae06f6.webp",import.meta.url).href,ci=""+new URL("../assets/spring_trees_1_a.e8f53ceb.webp",import.meta.url).href,_t=""+new URL("../assets/wall_barrier.63193046.webp",import.meta.url).href,Ee="data:image/webp;base64,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",xt=""+new URL("../assets/wall_concrete.d56426dc.webp",import.meta.url).href,fi=""+new URL("../assets/spring_wall_barrier_wood.29edf0af.webp",import.meta.url).href,Te="data:image/webp;base64,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",gi=""+new URL("../assets/spring_wall_drystone.6c714f68.webp",import.meta.url).href,hi=""+new URL("../assets/ambiance_spring_01.a9124a9e.mp3",import.meta.url).href,V=""+new URL("../assets/ambiance_cloudy_01.f4e27d70.mp3",import.meta.url).href,E=""+new URL("../assets/wind_01.756d9073.mp3",import.meta.url).href,Ne=""+new URL("../assets/bridge.7eaed52d.webp",import.meta.url).href,Ue=""+new URL("../assets/clouds_01.700a3fdb.webp",import.meta.url).href,Yt=""+new URL("../assets/road_single_base.d5dbc374.webp",import.meta.url).href,Kt=""+new URL("../assets/summer_rock.674f8c5a.webp",import.meta.url).href,ui=""+new URL("../assets/summer_bushes.943c4258.webp",import.meta.url).href,pi=""+new URL("../assets/forest_01.b82a9e7e.webp",import.meta.url).href,mi=""+new URL("../assets/summer_imposters_0_d.6a3261f4.webp",import.meta.url).href,vi=""+new URL("../assets/summer_imposters_0_n.99abbc99.webp",import.meta.url).href,Ai=""+new URL("../assets/summer_imposters_1_d.a1e60bf5.webp",import.meta.url).href,_i=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,xi=""+new URL("../assets/summer_trees_1_m.866c5db4.webp",import.meta.url).href,Di=""+new URL("../assets/summer_trees_1_a.c88ed1f2.webp",import.meta.url).href,qt=""+new URL("../assets/wall_barrier_wood.a34ab34c.webp",import.meta.url).href,Jt=""+new URL("../assets/wall_drystone.c5584f29.webp",import.meta.url).href,Ge=""+new URL("../assets/ambiance_02.0641dc57.mp3",import.meta.url).href,Si={grass:rt,bushes:ui,forest:pi,heather:Qt,gravel:ot,detailNear:lt,detailFar:nt,grassVariation:Re,offroadMap:At,road:{base:dt,paintDashed:ct,paintDashedLong:ft,paintSolid:gt,paintSolidLeft:ht,paintSolidRight:ut,paintMergeLeft:pt,paintMergeRight:mt},roadSingle:{base:Yt,stretch:2},roadSingleWide:{base:vt,stretch:1},sand:st,rock:Kt,rockBump:Ie,imposterMap:mi,imposterMapB:Ai,imposterNorm:vi,imposterNormB:_i,grassSprites:it,clouds:Ue,bridge:Ne,walls:{barrier:_t,barrierNorm:Ee,seaWall:xt,fence:qt,fenceNorm:Te,drystone:Jt},trees:[{d:Ir,n:Rr},{d:xi,n:Di}]},wi={road:5986132,clear:12316415},A={road:.98,grass:.7,gravel:.8},_={road:1,grass:.84,gravel:.9},x={road:.025,grass:.5,gravel:.4},bi={common:{maps:Si,colours:wi,foliage:{grassAlphaTest:.5,bushAlphaTest:.2,imposterAlphaTest:.6},ground:{grassColA:4680504,grassColB:10002017,peakColA:12300171,peakColB:14777671,fieldDiscolouration:3016965},surfaces:{road:j.Tarmac,offroad:j.Gravel},effects:{shadowFactor:.9,treeDiscolouration:.9},lights:{fresnelFactor:.6,radiance:0}},morning:{clear:{lights:{headlights:{on:!1,intensity:100},sun:{col:16776421,intensity:.7},ambient:{col:7442338,intensity:.5},fresnelFactor:1.15,radiance:4},fog:{colA:16705951,colB:10205381,colC:16770698,near:0,far:1,hazeHeight:80,hazeIntensity:.5},water:{base:1321277,body:4541263,highlight:11972230,underwater:4539184},clouds:{hasClouds:!1,highlight:15971155,lowlight:7294626,shelfHeight0:1600,shelfHeight1:2e3,skyScale0:4,skyScale1:8,mode:4},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:Ge,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:8689843,intensity:.5},ambient:{col:9079434,intensity:1.1},fresnelFactor:.63,radiance:1.6},fog:{colA:7243430,colB:3033195,colC:856860,near:0,far:1,hazeHeight:-120,hazeIntensity:.9},water:{base:2238256,body:3488837,highlight:5727866,underwater:2372679},clouds:{hasClouds:!0,highlight:6391976,lowlight:12574973,shelfHeight0:500,shelfHeight1:800,skyScale0:14.5,skyScale1:35.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}}},day:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:16776677,intensity:6.2},ambient:{col:4545128,intensity:2.4,shadowCol:6191183},fresnelFactor:1.5,radiance:4},fog:{colA:10407935,colB:4292824,colC:7056383,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:1781318,body:5798311,highlight:10079487,underwater:5141666},clouds:{hasClouds:!0,highlight:16777215,lowlight:14404812,shelfHeight0:1600,shelfHeight1:2e3,skyScale0:5,skyScale1:24.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:Ge,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:15463423,intensity:2.3},ambient:{col:8224125,intensity:1.5,shadowCol:7304048},fresnelFactor:.65,radiance:2},fog:{colA:12243187,colB:12243187,colC:6919384,near:.8,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2106663,body:6055280,highlight:9674676,underwater:4212042},clouds:{hasClouds:!0,highlight:7572128,lowlight:6189949,shelfHeight0:1600,shelfHeight1:2e3,skyScale0:3,skyScale1:18.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}}},evening:{clear:{lights:{headlights:{on:!1,intensity:40},sun:{col:16700340,intensity:1.1},ambient:{col:6368773,intensity:1.1},fresnelFactor:1.4,radiance:1},fog:{colA:16763043,colB:10196907,colC:16099220,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2762034,body:7165500,highlight:13404774,underwater:7165032},clouds:{hasClouds:!0,highlight:16755066,lowlight:10706068,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:30.5,skyScale1:12,mode:2},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:Ge,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!1,intensity:20},sun:{col:12889819,intensity:.7},ambient:{col:9857461,intensity:.7},fresnelFactor:1,radiance:1},fog:{colA:10062815,colB:5522053,colC:5522053,near:0,far:1,hazeHeight:0,hazeIntensity:1},water:{base:2303279,body:4274788,highlight:8874660,underwater:4669789},clouds:{hasClouds:!0,highlight:10714570,lowlight:7486659,shelfHeight0:500,shelfHeight1:600,skyScale0:32.5,skyScale1:22.5,mode:1},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}}},night:{clear:{lights:{headlights:{on:!0,intensity:250},sun:{col:12045793,intensity:0},ambient:{col:4935272,intensity:.6},fresnelFactor:.25,radiance:1},fog:{colA:4866096,colB:1456474,colC:2436146,near:.85,far:1,hazeHeight:0,hazeIntensity:0},water:{base:922133,body:2567471,highlight:4276281,underwater:394758},clouds:{hasClouds:!1,highlight:0,lowlight:6381921,shelfHeight0:900,shelfHeight1:1100,skyScale0:6,skyScale1:15.5,mode:0},stars:{density:2,horizonOffset:0,horizonScale:4,horizonOpacity:0},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}},overcast:{lights:{headlights:{on:!0,intensity:300},sun:{col:15133426,intensity:0},ambient:{col:0,intensity:.4},fresnelFactor:0,radiance:8},fog:{colA:855309,colB:1513239,colC:0,near:.72,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2697513,highlight:2368548,underwater:0},clouds:{hasClouds:!0,highlight:0,lowlight:6710886,shelfHeight0:800,shelfHeight1:1e3,skyScale0:6,skyScale1:24.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}}}}},Mi={grass:rt,bushes:Jr,forest:$r,heather:Qt,gravel:ot,detailNear:lt,detailFar:nt,grassVariation:Re,offroadMap:At,sand:st,rock:ei,rockBump:Ie,imposterMap:ri,imposterMapB:oi,imposterNorm:ii,imposterNormB:si,grassSprites:it,clouds:Ue,bridge:Ne,road:{base:dt,paintDashed:ct,paintDashedLong:ft,paintSolid:gt,paintSolidLeft:ht,paintSolidRight:ut,paintMergeLeft:pt,paintMergeRight:mt,overlay:Ht},roadSingle:{base:ti,overlay:ai,stretch:2},roadSingleWide:{base:vt,overlay:Ht,stretch:1},walls:{barrier:_t,barrierNorm:Ee,seaWall:xt,fence:fi,fenceNorm:Te,drystone:gi},trees:[{d:li,n:ni},{d:di,n:ci}]},Li={road:6513248,clear:12316415},ae={ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}},Pt={ambiance:{src:hi,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}},yi={common:{maps:Mi,colours:Li,foliage:{grassAlphaTest:.5,bushAlphaTest:.2,imposterAlphaTest:.6},ground:{grassColA:5145922,grassColB:9742683,peakColA:13095061,peakColB:11632477,fieldDiscolouration:1575948},effects:{shadowFactor:.8,treeDiscolouration:1.5},surfaces:{road:j.Tarmac,offroad:j.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:16764126,intensity:.3},ambient:{col:5779826,intensity:.3},fresnelFactor:1,radiance:2.1},fog:{colA:15510719,colB:7643367,colC:7039851,near:-.2,far:1,hazeHeight:80,hazeIntensity:.25},water:{base:4074802,body:9461869,highlight:12219272,underwater:5730446},clouds:{hasClouds:!0,highlight:13539268,lowlight:10724259,shelfHeight0:1700,shelfHeight1:2100,skyScale0:6,skyScale1:24.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...Pt}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:16449520,intensity:.2},ambient:{col:5714056,intensity:.3},fresnelFactor:.8,radiance:1},fog:{colA:7761778,colB:6248797,colC:6249811,near:-.2,far:1,hazeHeight:-160,hazeIntensity:.11},water:{base:3026222,body:6249053,highlight:7895160,underwater:2959914},clouds:{hasClouds:!0,highlight:7039851,lowlight:7039851,shelfHeight0:1700,shelfHeight1:2100,skyScale0:6,skyScale1:24.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...ae}}},day:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:16710892,intensity:4},ambient:{col:7241810,intensity:1.4},fresnelFactor:1.6,radiance:2},fog:{colA:12835822,colB:6202340,colC:11060198,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2369837,body:6322826,highlight:9351122,underwater:5730446},clouds:{hasClouds:!0,highlight:16777215,lowlight:14411775,shelfHeight0:1900,shelfHeight1:2200,skyScale0:7,skyScale1:31.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...Pt}},overcast:{lights:{headlights:{on:!1,intensity:10},sun:{col:14668735,intensity:1.8},ambient:{col:0,intensity:1.6},fresnelFactor:1,radiance:1},fog:{colA:16119285,colB:11382189,colC:11382189,near:0,far:1,hazeHeight:-140,hazeIntensity:.11},water:{base:3946809,body:7698554,highlight:14146526,underwater:3751751},clouds:{hasClouds:!0,highlight:15132390,lowlight:14408667,shelfHeight0:1900,shelfHeight1:2200,skyScale0:6,skyScale1:22.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...ae}}},evening:{clear:{lights:{headlights:{on:!0,intensity:100},sun:{col:11963752,intensity:1},ambient:{col:2383492,intensity:1},fresnelFactor:.75,radiance:1},fog:{colA:12750433,colB:5331036,colC:12750433,near:.6,far:1,hazeHeight:100,hazeIntensity:.3},water:{base:3814705,body:9991517,highlight:13146244,underwater:6834743},clouds:{hasClouds:!0,highlight:15505503,lowlight:7495243,shelfHeight0:3e3,shelfHeight1:4500,skyScale0:11,skyScale1:24.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...ae}},overcast:{lights:{headlights:{on:!0,intensity:50},sun:{col:16769750,intensity:.25},ambient:{col:409414,intensity:.6},fresnelFactor:.6,radiance:1},fog:{colA:8878451,colB:8878451,colC:4733491,near:0,far:1,hazeHeight:-140,hazeIntensity:.4},water:{base:2763048,body:5788240,highlight:7826278,underwater:2368291},clouds:{hasClouds:!0,highlight:6710886,lowlight:4342338,shelfHeight0:3e3,shelfHeight1:4500,skyScale0:11,skyScale1:24.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...ae}}},night:{clear:{lights:{headlights:{on:!0,intensity:100},sun:{col:4088436,intensity:1},ambient:{col:5251591,intensity:1.5},fresnelFactor:.5,radiance:1},fog:{colA:7162935,colB:531510,colC:5783085,near:.8,far:1,hazeHeight:0,hazeIntensity:0},water:{base:1052689,body:2106413,highlight:4338734,underwater:394758},clouds:{hasClouds:!1,highlight:0,lowlight:6381921,shelfHeight0:900,shelfHeight1:1100,skyScale0:6,skyScale1:15.5,mode:0},stars:{density:1,horizonOffset:1,horizonScale:8,horizonOpacity:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...ae}},overcast:{lights:{headlights:{on:!0,intensity:100},sun:{col:9737364,intensity:.2},ambient:{col:9737364,intensity:.3},fresnelFactor:.25,radiance:1},fog:{colA:2368548,colB:1184274,colC:0,near:-.2,far:1,hazeHeight:0,hazeIntensity:0},water:{base:855309,body:2500134,highlight:3026478,underwater:394758},clouds:{hasClouds:!0,highlight:8882055,lowlight:9737364,shelfHeight0:1200,shelfHeight1:1500,skyScale0:37.5,skyScale1:20.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...ae}}}},Ci=""+new URL("../assets/autumn_bushes.b82ca395.webp",import.meta.url).href,Ii=""+new URL("../assets/forest_autumn.55ca08bd.webp",import.meta.url).href,Ri=""+new URL("../assets/autumn_heather.d890b430.webp",import.meta.url).href,zt=""+new URL("../assets/road_overlay_autumn.68f523cb.webp",import.meta.url).href,Ei=""+new URL("../assets/road_single_overlay_autumn.59ecdb8e.webp",import.meta.url).href,Ti=""+new URL("../assets/autumn_imposters_0_d.4c4b38fd.webp",import.meta.url).href,Ni=""+new URL("../assets/autumn_imposters_0_n.d10ccd46.webp",import.meta.url).href,Ui=""+new URL("../assets/autumn_imposters_1_d.0160320a.webp",import.meta.url).href,Fi=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,Oi=""+new URL("../assets/autumn_trees_0.2fe560b0.webp",import.meta.url).href,Hi=""+new URL("../assets/autumn_trees_0_n.a664e3e1.webp",import.meta.url).href,Pi=""+new URL("../assets/autumn_trees_1_m.2cd39e32.webp",import.meta.url).href,zi=""+new URL("../assets/autumn_trees_1_a.2aa926cb.webp",import.meta.url).href,Gi=""+new URL("../assets/ambiance_summer_low_01.70a344db.mp3",import.meta.url).href,ki={grass:rt,bushes:Ci,forest:Ii,heather:Ri,gravel:ot,detailNear:lt,detailFar:nt,grassVariation:Re,offroadMap:At,sand:st,rock:Kt,rockBump:Ie,imposterMap:Ti,imposterMapB:Ui,imposterNorm:Ni,imposterNormB:Fi,grassSprites:it,clouds:Ue,bridge:Ne,road:{base:dt,paintDashed:ct,paintDashedLong:ft,paintSolid:gt,paintSolidLeft:ht,paintSolidRight:ut,paintMergeLeft:pt,paintMergeRight:mt,overlay:zt},roadSingle:{base:Yt,overlay:Ei,stretch:2},roadSingleWide:{base:vt,overlay:zt,stretch:1},walls:{barrier:_t,barrierNorm:Ee,seaWall:xt,fence:qt,fenceNorm:Te,drystone:Jt},trees:[{d:Oi,n:Hi},{d:Pi,n:zi}]},Bi={road:6513248,clear:12316415},J={ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}},Wi={ambiance:{src:Gi,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}},Vi={common:{maps:ki,colours:Bi,foliage:{grassAlphaTest:.5,bushAlphaTest:.2,imposterAlphaTest:.6},ground:{grassColA:4881741,grassColB:12496761,peakColA:14925472,peakColB:10649893,fieldDiscolouration:2301205},effects:{shadowFactor:.8,treeDiscolouration:1.2},surfaces:{road:j.Tarmac,offroad:j.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:20},sun:{col:15464447,intensity:1.2},ambient:{col:467510,intensity:1},fresnelFactor:1.5,radiance:2},fog:{colA:14868181,colB:9163518,colC:12773631,near:0,far:1,hazeHeight:80,hazeIntensity:.5},water:{base:3159350,body:5469055,highlight:12377308,underwater:5730446},clouds:{hasClouds:!1,highlight:14132156,lowlight:12546950,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:13,mode:5},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:16775152,intensity:.7},ambient:{col:866664,intensity:.3},fresnelFactor:.5,radiance:.5},fog:{colA:10592673,colB:3552822,colC:6184542,near:0,far:1,hazeHeight:-120,hazeIntensity:.4},water:{base:2171169,body:5395026,highlight:8882055,underwater:2368548},clouds:{hasClouds:!0,highlight:13619151,lowlight:8224125,shelfHeight0:1600,shelfHeight1:1300,skyScale0:3,skyScale1:23.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}}},day:{clear:{lights:{headlights:{on:!1,intensity:40},sun:{col:16775141,intensity:4.4},ambient:{col:994637,intensity:1.2},fresnelFactor:.9,radiance:2.5},fog:{colA:13230067,colB:2651589,colC:13230067,near:0,far:1,hazeHeight:60,hazeIntensity:.22},water:{base:796455,body:4811395,highlight:10864353,underwater:5730446},clouds:{hasClouds:!0,highlight:16777215,lowlight:16777215,shelfHeight0:1600,shelfHeight1:1300,skyScale0:2,skyScale1:42,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...Wi}},overcast:{lights:{headlights:{on:!1,intensity:40},sun:{col:16775152,intensity:1.9},ambient:{col:3682606,intensity:1},fresnelFactor:.95,radiance:.5},fog:{colA:12763842,colB:6052956,colC:6184542,near:.25,far:1,hazeHeight:-380,hazeIntensity:.4},water:{base:2171169,body:7039851,highlight:10723225,underwater:2368548},clouds:{hasClouds:!0,highlight:13619151,lowlight:8224125,shelfHeight0:1600,shelfHeight1:1300,skyScale0:3,skyScale1:23.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}}},evening:{clear:{lights:{headlights:{on:!1,intensity:80},sun:{col:11186363,intensity:1.4},ambient:{col:0,intensity:2},fresnelFactor:1.25,radiance:1.5},fog:{colA:15185783,colB:9017254,colC:7234651,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:2106151,body:5986898,highlight:13348228,underwater:4215400},clouds:{hasClouds:!0,highlight:7106933,lowlight:6841956,shelfHeight0:1100,shelfHeight1:1300,skyScale0:4,skyScale1:16.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}},overcast:{lights:{headlights:{on:!0,intensity:80},sun:{col:9272992,intensity:1},ambient:{col:3351113,intensity:2},fresnelFactor:1,radiance:.1},fog:{colA:9008547,colB:4797286,colC:3877457,near:0,far:1,hazeHeight:-140,hazeIntensity:.25},water:{base:1973282,body:5787237,highlight:8811168,underwater:2431793},clouds:{hasClouds:!0,highlight:3813955,lowlight:4788371,shelfHeight0:1600,shelfHeight1:1300,skyScale0:6,skyScale1:42,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}}},night:{clear:{lights:{headlights:{on:!0,intensity:160},sun:{col:4541022,intensity:.4},ambient:{col:5984360,intensity:.5},fresnelFactor:0,radiance:0},fog:{colA:2564401,colB:525833,colC:2564401,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2697003,highlight:3289142,underwater:2697003},clouds:{hasClouds:!0,highlight:0,lowlight:0,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:0,skyScale1:11,mode:0},stars:{density:2,horizonOffset:0,horizonScale:4,horizonOpacity:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}},overcast:{lights:{headlights:{on:!0,intensity:190},sun:{col:4541022,intensity:.8},ambient:{col:4340299,intensity:.8},fresnelFactor:0,radiance:0},fog:{colA:1381139,colB:2630949,colC:2564401,near:0,far:.5,hazeHeight:-60,hazeIntensity:1},water:{base:0,body:2959914,highlight:2565413,underwater:0},clouds:{hasClouds:!0,highlight:5855577,lowlight:5261641,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:3,skyScale1:21.5,mode:0},friction:{...A},slip:{..._},roughness:{...x},audio:{...J}}}},Gt=""+new URL("../assets/winter_grass.2126ead2.webp",import.meta.url).href,ji=""+new URL("../assets/winter_grasses.fbb53d0d.webp",import.meta.url).href,Xi=""+new URL("../assets/winter_bushes.8e9f3165.webp",import.meta.url).href,Zi=""+new URL("../assets/forest_winter.0710a850.webp",import.meta.url).href,Qi=""+new URL("../assets/winter_rock.674a5de1.webp",import.meta.url).href,kt=""+new URL("../assets/winter_gravel.03b9e4e9.webp",import.meta.url).href,Yi=""+new URL("../assets/winter_heather.b9aeb76f.webp",import.meta.url).href,Ki=""+new URL("../assets/ground_detail_far_winter.003963d8.webp",import.meta.url).href,qi=""+new URL("../assets/winter_road.a2a6e9fa.webp",import.meta.url).href,Ji=""+new URL("../assets/winter_road_single.3028904b.webp",import.meta.url).href,$i=""+new URL("../assets/road_single_wide_winter.e588cd84.webp",import.meta.url).href,eo=""+new URL("../assets/offroad_mask_winter.3f84c777.webp",import.meta.url).href,to=""+new URL("../assets/winter_imposters_0_d.ce1a9b7d.webp",import.meta.url).href,ao=""+new URL("../assets/winter_imposters_0_n.8293f6b6.webp",import.meta.url).href,ro=""+new URL("../assets/winter_imposters_1_d.2882c5c9.webp",import.meta.url).href,io=""+new URL("../assets/autumn_imposters_1_n.2a7e8cf6.webp",import.meta.url).href,oo=""+new URL("../assets/winter_trees_0.99189e5d.webp",import.meta.url).href,so=""+new URL("../assets/winter_trees_0_n.24c5f705.webp",import.meta.url).href,lo=""+new URL("../assets/winter_trees_1_m.7ee3e863.webp",import.meta.url).href,no=""+new URL("../assets/winter_trees_1_a.142fe383.webp",import.meta.url).href,co=""+new URL("../assets/winter_wall_barrier.2f3faaf6.webp",import.meta.url).href,fo=""+new URL("../assets/winter_wall_concrete.edcd548c.webp",import.meta.url).href,go=""+new URL("../assets/winter_wall_barrier_wood.058b9fbc.webp",import.meta.url).href,ho=""+new URL("../assets/winter_wall_drystone.ef024453.webp",import.meta.url).href,uo={grass:Gt,bushes:Xi,forest:Zi,heather:Yi,gravel:kt,detailNear:Gt,detailFar:Ki,grassVariation:Re,offroadMap:eo,sand:kt,rock:Qi,rockBump:Ie,imposterMap:to,imposterMapB:ro,imposterNorm:ao,imposterNormB:io,grassSprites:ji,clouds:Ue,bridge:Ne,road:{base:qi},roadSingle:{base:Ji},roadSingleWide:{base:$i},walls:{barrier:co,barrierNorm:Ee,seaWall:fo,fence:go,fenceNorm:Te,drystone:ho},trees:[{d:oo,n:so},{d:lo,n:no}]},po={road:9802899,clear:12316415},G={road:.85,grass:.7,gravel:.7},k={road:.9,grass:.5,gravel:1},B={road:.05,grass:.6,gravel:.3},W={ambiance:{src:V,loopStart:.1,loopEnd:.1},wind:{src:E,loopStart:.07,loopEnd:.07}},mo={common:{maps:uo,colours:po,foliage:{grassAlphaTest:.2,bushAlphaTest:.3,imposterAlphaTest:.5},ground:{grassColA:16777215,grassColB:14409185,peakColA:14409185,peakColB:12172742,fieldDiscolouration:6381921},effects:{frozenWater:!0,shadowFactor:.75,treeDiscolouration:.2,hasSnow:!0},surfaces:{road:j.Ice,offroad:j.Gravel}},morning:{clear:{lights:{headlights:{on:!1,intensity:20},sun:{col:8295876,intensity:1.9},ambient:{col:4803147,intensity:1.9},fresnelFactor:1.25,radiance:1.08},fog:{colA:16634011,colB:5666463,colC:8882839,near:0,far:1,hazeHeight:0,hazeIntensity:0},water:{base:4011839,body:12359828,highlight:12692106,underwater:5730446},clouds:{hasClouds:!0,highlight:16742190,lowlight:11024058,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:15,mode:0},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}},overcast:{lights:{headlights:{on:!0,intensity:40},sun:{col:2718601,intensity:.5},ambient:{col:5073519,intensity:.8},fresnelFactor:1,radiance:1.93},fog:{colA:879229,colB:541519,colC:879229,near:0,far:.71,hazeHeight:240,hazeIntensity:.66},water:{base:1185303,body:1913141,highlight:4487811,underwater:13750737},clouds:{hasClouds:!0,highlight:5086636,lowlight:4563637,shelfHeight0:1800,shelfHeight1:2200,skyScale0:8,skyScale1:26.5,mode:0},snow:{density:.5,col:3692380,speed:1.75},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}}},day:{clear:{lights:{headlights:{on:!1,intensity:10},sun:{col:14479358,intensity:1.5},ambient:{col:10656918,intensity:1.5},fresnelFactor:3,radiance:1},fog:{colA:16186366,colB:3514851,colC:12763842,near:0,far:1,hazeHeight:100,hazeIntensity:.3},water:{base:2303012,body:8755613,highlight:10860741,underwater:7039851},clouds:{hasClouds:!0,highlight:16777215,lowlight:14535884,shelfHeight0:1e3,shelfHeight1:1100,skyScale0:10,skyScale1:5,mode:4},snow:{density:0,col:16777215,speed:1.8},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}},overcast:{lights:{headlights:{on:!1,intensity:50},sun:{col:12699622,intensity:1.2},ambient:{col:8095379,intensity:1},fresnelFactor:.5,radiance:2},fog:{colA:12567775,colB:8948901,colC:12567775,near:-.2,far:.8,hazeHeight:120,hazeIntensity:.42},water:{base:789517,body:1973791,highlight:8158595,underwater:12567775},clouds:{hasClouds:!0,highlight:11053491,lowlight:12764108,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:12,skyScale1:24.5,mode:0},snow:{density:1,col:11646409,speed:1.75},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}}},evening:{clear:{lights:{headlights:{on:!0,intensity:80},sun:{col:8296900,intensity:.7},ambient:{col:6118257,intensity:.5},fresnelFactor:.75,radiance:0},fog:{colA:11561352,colB:13680046,colC:9371698,near:-.2,far:1,hazeHeight:80,hazeIntensity:0},water:{base:2039583,body:5919574,highlight:10840443,underwater:5730446},clouds:{hasClouds:!1,highlight:11037586,lowlight:7416466,shelfHeight0:1500,shelfHeight1:1400,skyScale0:16,skyScale1:36,mode:5},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}},overcast:{lights:{headlights:{on:!0,intensity:50},sun:{col:10724259,intensity:.5},ambient:{col:7237230,intensity:.7},fresnelFactor:1,radiance:2.5},fog:{colA:7634049,colB:4079681,colC:8224125,near:0,far:1,hazeHeight:-100,hazeIntensity:.73},water:{base:2433571,body:7896189,highlight:8424078,underwater:5730446},clouds:{hasClouds:!0,highlight:7039851,lowlight:16777215,shelfHeight0:1800,shelfHeight1:2200,skyScale0:4,skyScale1:37.5,mode:0},snow:{density:.5,col:7895160,speed:1.8},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}}},night:{clear:{lights:{headlights:{on:!0,intensity:70},sun:{col:16777215,intensity:.04},ambient:{col:16777215,intensity:.05},fresnelFactor:.26,radiance:4},fog:{colA:1779767,colB:264208,colC:1779767,near:.9,far:1,hazeHeight:0,hazeIntensity:0},water:{base:0,body:2239285,highlight:2699064,underwater:1776669},clouds:{hasClouds:!1,highlight:1907739,lowlight:1907739,shelfHeight0:1e3,shelfHeight1:500,skyScale0:88,skyScale1:92,mode:0},stars:{density:2,horizonOffset:0,horizonScale:2,horizonOpacity:0},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}},overcast:{lights:{headlights:{on:!0,intensity:70},sun:{col:14083839,intensity:.06},ambient:{col:16777215,intensity:.05},fresnelFactor:.26,radiance:4},fog:{colA:1907739,colB:6052956,colC:1907739,near:-.2,far:1,hazeHeight:-60,hazeIntensity:.5},water:{base:0,body:2368547,highlight:2565670,underwater:1907739},clouds:{hasClouds:!0,highlight:1907739,lowlight:1907739,shelfHeight0:1e3,shelfHeight1:1200,skyScale0:10,skyScale1:36.5,mode:0},snow:{density:1,col:4210752,speed:2},friction:{...G},slip:{...k},roughness:{...B},audio:{...W}}}},Bt=["spring","summer","autumn","winter"],El=["morning","day","evening","night"],Tl=["clear","overcast"],te={styleMeta:{season:{key:"season",readable:"SEASON",labelKey:"styleSeason",type:Pe.Selection,default:1,options:[{key:"spring",readable:"Spring",icon:"/slow-roads/img/ico_scene_spring.svg"},{key:"summer",readable:"Summer",icon:"/slow-roads/img/ico_scene_summer.svg"},{key:"autumn",readable:"Autumn",icon:"/slow-roads/img/ico_scene_autumn.svg"},{key:"winter",readable:"Winter",icon:"/slow-roads/img/ico_scene_winter.svg"}]},time:{key:"time",readable:"TIME",labelKey:"styleTime",type:Pe.Selection,default:1,options:[{key:"morning",readable:"Morning",icon:"/slow-roads/img/ico_time_morning.svg"},{key:"day",readable:"Day",icon:"/slow-roads/img/ico_time_day.svg"},{key:"evening",readable:"Evening",icon:"/slow-roads/img/ico_time_evening.svg"},{key:"night",readable:"Night",icon:"/slow-roads/img/ico_time_night.svg"}]},weather:{key:"weather",readable:"WEATHER",labelKey:"styleWeather",type:Pe.Selection,default:0,options:[{key:"clear",readable:"Clear",icon:"/slow-roads/img/ico_weather_clear.svg"},{key:"overcast",readable:"Overcast",icon:"/slow-roads/img/ico_weather_overcast.svg"}]}},style:{spring:yi,summer:bi,autumn:Vi,winter:mo},roads:{style:[{midline:{isStraight:!0,smoothWindow:9,maxGrad:.2,genRadius:100,genMinRadius:100,minStartElev:10,maxStartElev:1e3,curvatureHeightFactor:50,minFineSegs:4,solidLineThreshold:.1,solidLineCrestThreshold:-.02,markingsMargin:12},heightmap:{scale:80,offset:90,layerResolutions:[3,21,17,31],squared:!0,depthHeightFactor:.7,temper:!0,temperBase:50,temperBelow:400,temperMin:0,spiralise:!1,tileScaleRandom:.3},treemap:{scale:3,offset:1.7,layerResolutions:[21,9,31],squared:!0,depthHeightFactor:1.2,temper:!1,tileScaleRandom:.3}},{midline:{isStraight:!1,smoothWindow:9,maxGrad:.16,feelDist:30,smoothFactor:.5,maxTurnDelta:.1,minFineSegs:3,solidLineThreshold:.08,solidLineCrestThreshold:-.3,markingsMargin:8},heightmap:{scale:110,offset:110,layerResolutions:[3,9,17],squared:!0,depthHeightFactor:.8,temper:!0,temperBase:50,temperBelow:400,temperMin:.2,tileScaleRandom:.35},treemap:{scale:.6,offset:2.2,layerResolutions:[3,13,29],squared:!1,depthHeightFactor:2.2,temper:!1,tileScaleRandom:.35}},{midline:{isStraight:!1,smoothWindow:7,maxGrad:.12,feelDist:10,smoothFactor:.7,maxTurnDelta:.2,minFineSegs:2,solidLineThreshold:.08,solidLineCrestThreshold:-.5,markingsMargin:6,maxStartElev:90},heightmap:{scale:15,offset:120,layerResolutions:[19,29,39,3,5],squared:!0,depthHeightFactor:2,temper:!0,temperBase:50,temperBelow:800,temperMin:.25,tileScaleRandom:.5,scale:75,offset:105,layerResolutions:[3,11,5,27],squared:!0,depthHeightFactor:1,temper:!0,temperBase:50,temperBelow:250,temperMin:.7,tileScaleRandom:.5},treemap:{scale:.5,offset:3,layerResolutions:[19,29,39,3,5,4,23,9,39],squared:!0,depthHeightFactor:1.5,temper:!1,tileScaleRandom:1,scale:.5,offset:2.6,layerResolutions:[3,11,5,17,29],squared:!0,depthHeightFactor:2,temper:!1,tileScaleRandom:.5}},{midline:{isStraight:!1,smoothWindow:7,maxGrad:.12,roadSink:.4,smoothFactor:.75,maxTurnDelta:.2,solidLineThreshold:.18,solidLineCrestThreshold:-.5,markingsMargin:5},heightmap:{scale:60,offset:100,layerResolutions:[3,9,13,27,31],squared:!0,depthHeightFactor:1.25,temper:!0,temperBase:50,temperBelow:500,temperMin:.5,tileScaleRandom:.25},treemap:{scale:.75,offset:2.75,layerResolutions:[3,9,11,29],squared:!1,depthHeightFactor:1.8,temper:!1,tileScaleRandom:.25}},{midline:{isStraight:!0,smoothWindow:7,maxGrad:.15,roadSink:.4,smoothFactor:.9,maxTurnDelta:.4,maxStartElev:1e3},heightmap:{scale:0,offset:150,layerResolutions:[2,3,5],squared:!0,depthHeightFactor:1.1,temper:!0,temperBase:50,temperBelow:250,temperMin:.75,tileScaleRandom:.25},treemap:{scale:0,offset:2.75,layerResolutions:[2,7,17,29],squared:!1,depthHeightFactor:1.8,temper:!1,tileScaleRandom:.25}}],laneWidth:{single:{standard:3.6,wide:7.2,wideOffroad:7.2},compound:{standard:3.4,wide:4}}},graphics:{viewDistance:[{tileSize:240,roadNodes:25,lod0Horizon:50,lod1Horizon:13,imposterDissolveStart:32,objectDespawnHorizon:5,bridgeLookahead:50,cloudAltitude:400,cloudScale:1200,fieldMapScale:700,midlineIndexMargin:140,midlineFineHorizon:200,maxWallLength:20,heightmapMaxCached:12,imposterInstanceSize:400,treeInstanceSize:400},{tileSize:480,roadNodes:25,lod0Horizon:80,lod1Horizon:16,imposterDissolveStart:48,objectDespawnHorizon:10,bridgeLookahead:90,cloudAltitude:500,cloudScale:3600,fieldMapScale:800,midlineIndexMargin:160,midlineFineHorizon:300,maxWallLength:25,heightmapMaxCached:16,imposterInstanceSize:1600,treeInstanceSize:450},{tileSize:840,roadNodes:30,lod0Horizon:100,lod1Horizon:19,imposterDissolveStart:64,objectDespawnHorizon:15,bridgeLookahead:160,cloudAltitude:600,cloudScale:7e3,fieldMapScale:1e3,midlineIndexMargin:180,midlineFineHorizon:400,maxWallLength:30,heightmapMaxCached:20,imposterInstanceSize:4e3,treeInstanceSize:475},{tileSize:1500,roadNodes:35,lod0Horizon:120,lod1Horizon:22,imposterDissolveStart:96,objectDespawnHorizon:15,bridgeLookahead:200,cloudAltitude:600,cloudScale:11e3,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:500,maxWallLength:30,heightmapMaxCached:28,imposterInstanceSize:7500,treeInstanceSize:500},{tileSize:2e3,roadNodes:42,lod0Horizon:140,lod1Horizon:25,imposterDissolveStart:128,objectDespawnHorizon:15,bridgeLookahead:300,cloudAltitude:700,cloudScale:15e3,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:600,maxWallLength:30,heightmapMaxCached:40,imposterInstanceSize:16e3,treeInstanceSize:525},{tileSize:2500,roadNodes:50,lod0Horizon:160,lod1Horizon:28,imposterDissolveStart:128,objectDespawnHorizon:15,bridgeLookahead:300,cloudAltitude:800,cloudScale:22e3,fieldMapScale:1e3,midlineIndexMargin:200,midlineFineHorizon:600,maxWallLength:30,heightmapMaxCached:40,imposterInstanceSize:16e3,treeInstanceSize:525}],detail:[{shadowRes:256,cellRes:10,sea:{res:.2,depth:!1,waves:!1},trees:{has3D:!1,typeCount:2},bridges:{genArches:!0,segments:4},grass:{margin:0,density:0},fields:{render:!1,treeDensity:0,col:!1,boundary:!1}},{shadowRes:512,cellRes:16,sea:{res:.3,depth:!1,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:6},grass:{margin:16,density:.5},fields:{render:!0,treeDensity:.7,col:!1,boundary:!1}},{shadowRes:1024,cellRes:20,sea:{res:.4,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:8},grass:{margin:20,density:.65},fields:{render:!0,treeDensity:1,col:!0,boundary:!1}},{shadowRes:2048,cellRes:20,sea:{res:.5,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:10},grass:{margin:24,density:.75},fields:{render:!0,treeDensity:1,col:!0,boundary:!1}},{shadowRes:2048,cellRes:20,sea:{res:.5,depth:!0,waves:!0},trees:{has3D:!0,typeCount:2},bridges:{genArches:!0,segments:10},grass:{margin:28,density:.85},fields:{render:!0,treeDensity:1,col:!0,boundary:!0}}]}},vo=`
    uniform float time;
    uniform vec3 camPos;
    uniform float shelfHeight0;
    uniform float shelfHeight1;
    uniform float skyScale0;
    uniform float skyScale1;
    uniform float altitude;

    varying vec4 wPos;
    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;

    varying float dist;

`,Ao=`
    wPos = modelMatrix * vec4( position, 1.0 );

    // Distance (height) from camera to virtual plane
    // Big hmm here, these values may intersect with road on rare occasions, could min them
    float h0 = shelfHeight0 - camPos.y;

    // Distance from camera to image plane
    float h1 = shelfHeight1 - camPos.y;

    vUv = uv;

    // First shelf...
    vUUv.x = wPos.x + time;
    vUUv.y = wPos.z + time;
    vUUv /= skyScale0 * altitude;

    float scale1 = skyScale1 * altitude;
    float lowerScale = scale1 * h1 / h0;
    float motionScale = (h1 - h0) / h0;

    // Second shelf
    vUUUv.x = ((wPos.x + camPos.x * motionScale ) / lowerScale) + time / scale1;
    vUUUv.y = ((wPos.z + camPos.z * motionScale ) / lowerScale) + time / scale1;


    // Offset copy of second shelf used for shading?
    vUUUUv.x = vUUUv.x + 0.001;
    vUUUUv.y = vUUUv.y - 0.001;


    //// EXPERIMENT
    // float h2 = ((shelfHeight0 + shelfHeight1) / 2.0) - camPos.y;
    // float scale2 = ((skyScale0 + skyScale1) / 2.0) * altitude;
    // float midScale = scale2 * h2 / h0;
    // float motionScale2 = (h2 - h0) / h0;
    // vUUUUv.x = ((wPos.x + camPos.x * motionScale2 ) / midScale);// + (time) / scale1;
    // vUUUUv.y = ((wPos.z + camPos.z * motionScale2 ) / midScale);// + (time) / scale1;


    // Mid-point experimentation
    // vUUUUv.x = (vUUUv.x + vUUv.x) / 2.0;
    // vUUUUv.y = (vUUUv.y + vUUv.y) / 2.0);


    // Use UVs to  look up  distance from camera...
    float vX = (uv.x - 0.5) * 2.0;
    float vY = (uv.y - 0.5) * 2.0;
    dist = max(0.0, 1.0 - sqrt((vX * vX) + (vY * vY)));
`,_o=`

    // Cloud curvature
    transformed.z += (1.0 - dist)*(1.0 - dist) * altitude * 0.5;

    vec4 mvPosition = vec4( transformed, 1.0 );

    #ifdef USE_BATCHING

        mvPosition = batchingMatrix * mvPosition;

    #endif

    #ifdef USE_INSTANCING

        mvPosition = instanceMatrix * mvPosition;

    #endif

    mvPosition = modelViewMatrix * mvPosition;

    gl_Position = projectionMatrix * mvPosition;
`,xo=`
#ifdef USE_FOG

	varying float vFogDepth;
    varying float vFogBlend;
    varying vec3 vFogPos;
    uniform float fogFar;
    varying float vHaze;
    varying float vDesat;

    #ifdef FOG_EXP2
        uniform float fogDensity;
    #endif

    uniform float fogNear;
    uniform float hazeHeight;
    uniform float hazeIntensity;

#endif
`,Do=`
    #ifdef USE_FOG

        vFogDepth = fogFar;

        vFogPos = (modelMatrix * vec4(transformed, 1.0)).xyz;

        vHaze = 0.0;

        vFogBlend = 1.0;
        float fogAvg = (fogFar + fogNear) / 2.0;
        if(fogAvg < 500.0) {
            if(fogAvg <  50.0) {
                vFogBlend = 0.0;
            } else {
                vFogBlend = (fogAvg-50.0) / 450.0;
            }
        }
        if(hazeHeight < 0.0) {
            vFogBlend *= (1.0 - hazeIntensity);
        }

        #ifdef FOG_EXP2
            vFogDepth = max(0.0, (vFogDepth - fogNear) * (fogFar / (fogFar - fogNear)));
        #endif

        #ifdef FOG_EXP2

            vFogDepth = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

        #else

            vFogDepth = smoothstep( fogNear, fogFar, vFogDepth );

        #endif

    #endif
`,So=`
    uniform vec3 highlight;
    uniform vec3 lowlight;
    uniform float mode;

    varying vec2 vUv;
    varying vec2 vUUv;
    varying vec2 vUUUv;
    varying vec2 vUUUUv;
    varying float dist;

    highp float random(vec2 coords) {
        return (fract(sin(dot(coords.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.2) - 0.1;
    }

    float remap(float value, float min1, float max1, float min2, float max2) {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }
`,wo=`

    vec4 c1 = texture2D(map, vUUv);
    vec4 c2 = texture2D(map, vUUUv);

    vec4 cloudCol = c1;

    //////////////////////////// BLEND MODES ///////////////////////////

    //// MAX

    // vec4 cloudCol = max(c1, c2);

    //// MIN

    // vec4 cloudCol = min(c1, c2);

    //// MULTIPLY

    // vec4 cloudCol = c1 * c2;

    /// ADD

    // vec4 cloudCol = c1 + c2;

    //// AVERAGE

    // vec4 cloudCol = (c1 + c2) / 2.0;

    //// SCREEN

    // vec4 ic1 = vec4(1.0) - c1;
    // vec4 ic2 = vec4(1.0) - c2;
    // cloudCol = vec4(1.0) - (ic1 * ic2);

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * (1.0-fogDepth));

    ///////////////////// ITERATIONS /////////////////////////

    if(mode == 0.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        // Remapping makes them a little sharper
        // c1.a = remap(c1.a, 0.0, 0.9, 0.0, 1.0);
        // c1.a = min(1.0, max(c1.a, 0.0));
        // c1.a = sqrt(c1.a);
        // c2.a = remap(c2.a, 0.0, 0.9, 0.0, 1.0);
        // c2.a = min(1.0, max(c2.a, 0.0));
        // c2.a = sqrt(c2.a);

        // Testing density

        // Density works like this kind of - might need to transition lowlight into highlighy as density lowers though
        // Also should use this to affect the blend between fog/cloud colour. At -1 density, should be full cloud.
        // float density = -0.5;

        // if(density > 0.0) {
        //     c1.a = remap(c1.a, density, 1.0, 0.0, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, density, 1.0, 0.0, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, density, 1.0, 0.0, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // } else {
        //     c1.a = remap(c1.a, 0.0, 1.0, -density, 1.0);
        //     c1.a = min(1.0, max(c1.a, 0.0));

        //     c2.a = remap(c2.a, 0.0, 1.0, -density, 1.0);
        //     c2.a = min(1.0, max(c2.a, 0.0));

        //     c3.a = remap(c3.a, 0.0, 1.0, -density, 1.0);
        //     c3.a = min(1.0, max(c3.a, 0.0));
        // }


        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        float ic = 1.0 - ic1 * ic2;

        // ic *= c1.a * c3.a;// * c2.a;
        ic *= c3.a;

        cloudCol = vec4(lowlight, ic);

        cloudCol.rgb = mix(cloudCol.rgb, highlight, c3.a * ic);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 1.0)  {

        vec4 c3 = texture2D(map, vUUUUv);

        cloudCol.rgb = lowlight;

        // Screen alpha
        cloudCol.a = 1.0 - (1.0 - c1.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight,  c1.a * cloudCol.a * c3.a);

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);

    } else if(mode == 2.0) {
        vec4 c3 = texture2D(map, vUUUUv);

        // Two-tone

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.25, 1.0);
        c3.a = remap(c3.a, 0.0, 1.0, 0.0, 0.5);

        c2.a *= c1.a;
        c3.a *= c1.a;

        cloudCol.rgb = lowlight;

        // Screen blend the initial alpha
        float ic1 = 1.0 - c1.a;
        float ic2 = 1.0 - c2.a;
        cloudCol.a = 1.0 - (ic1 * ic2);

        cloudCol.rgb = mix(cloudCol.rgb, highlight*1.5, c3.a * (dist * 2.0)); // More pink above


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * min(1.0,fogBlend)*dist);

    } else if(mode == 3.0) {

        vec4 c3 = texture2D(map, vUUUUv);

        float c23 = 1.0 - (1.0 - c3.a) * (1.0 - c2.a);

        cloudCol.rgb = mix(lowlight, highlight, min(c2.a, c3.a));

        cloudCol.a = max(c2.a, c1.a * c3.a);


        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist * dist);
    } else if(mode == 4.0) {


    }



    //// FAR HIGHLIGHT THING SUNSET

    /*

        vec4 highlight = vec4(1.0,0.7,0.4,1.0);

        c1 *= highlight;
        c2 *= highlight;

        c1.a = remap(c1.a, 0.0, 1.0, 0.0, 1.0);
        c2.a = remap(c2.a, 0.0, 1.0, 0.0, 1.0);

        vec4 cloudCol = (c1 + c2) / 2.0;

        if(cloudCol.a > 0.25) {
            cloudCol = mix(cloudCol, highlight*8.0, (cloudCol.a - 0.25) * (0.5 - (dist*dist)));
            cloudCol.a = min(1.0, cloudCol.a);
        }

        gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb, cloudCol.a * dist);

    */

    //// CIRRUS/MIN

    // c1 = remap(c1, 0.0, 1.0, 0.0, 1.0);
    // c2 = remap(c2, 0.0, 1.0, 0.0, 1.0);

    // cloudCol = max(vec4(c1), vec4(c2));
    // cloudCol /= 2;

    // cloudCol2.a = cloudCol.a;
    // if(cloudCol.a > 0.75) {
    //     // cloudCol = mix(cloudCol, cloudCol2, (cloudCol.a - 0.75) * 4.0);
    // }

    // vec4 cloudCol = texture2D( map, vUUv ) * texture2D(map, vUUUv); // MULTIPLY
    // vec4 cloudCol = (texture2D(map, vUUv) + texture2D( map, vUUUv )) / 2.0; // AVERAGE

    // Apply colour if we have it?

    /////////////////////// FINAL COLOUR APPLICATION //////////////////////////////////

    // gl_FragColor.rgb = mix(gl_FragColor.rgb, cloudCol.rgb * vec3(1.0,0.7,0.4) * 1.0 * cloudCol.a, cloudCol.a * dist);


    // diffuseColor = vec4(0.5,0.6,0.8,);

`,bo=`

attribute float roadProximity;
attribute float treeMask;
attribute float overlap;
attribute float fieldCol;
attribute vec2 roadUv;

varying float height;
varying float steepness;
varying float roadProx;
varying float hasRoadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying vec2 vRoadUv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vField;
varying float vHeather;
varying float vShadow;
varying float vCamDepth;

float wuvSize = 500.0;

uniform sampler2D displacementMap;
uniform sampler2D fadeFine;
uniform float sinkDist;
uniform float vehicleIndex;
uniform float shadowFactor;
uniform int seasonIndex;
uniform vec2 originOffset;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

float distSquared( vec3 A, vec3 B ) {
    vec3 C = A - B;
    return dot( C, C );
}

vec3 upvec = vec3(0.0,1.0,0.0);

`,Mo=`

vec4 wPos = modelMatrix * vec4( position, 1.0 );

// ORIGIN OFFSET HARD-CODED FOR NOW
// ALSO NEED TO HANDLE CAMERA OFFSET IN FRESNEL FRAG BELOW
// AND THE SAME THING IN GRASS SHADER
wPos.x -= originOffset.x;
wPos.z -= originOffset.y;

vFresnelPos = wPos.xyz;
vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

height = wPos.y;

// Set UVs from world pos
vUv.x = wPos.x / 10.0;
vUv.y = wPos.z / 10.0;

vUUv.x = vUv.x / 10.0;
vUUv.y = vUv.y / 10.0;

// 0 is perfectly flat, 1 is 90 degrees
steepness = 0.98 - dot(normal, upvec);
steepness = clamp(steepness * 1.4, 0.0, 1.0); // was multiplied by 2 before..?

vWv.x = wPos.x / wuvSize;
vWv.y = wPos.z / wuvSize;

vWWv.x = vWv.x / 8.0;
vWWv.y = vWv.y / 8.0;

vRoadUv = roadUv;

//// GET FADES

float fade0 = texture2D(fadeFine, vWv).r;
float fade1 = texture2D(fadeFine, vWWv).r;

// Reduce  vWWv for more utility in the fragment shader
vWWv *= 2.0;
// Same for uvs? Does this create issues for the origin offset?
vUv *= 1.4;

//// HEATHER

vHeather = smoothstep(0.4, 1.0, ((height + fade1 * 350.0) - 60.0) / 500.0);

vHeather *= screen(fade1, fade0);

vHeather = smoothstep(0.3, 0.6, vHeather);


//// GRASSES

float heightVal = min(1.0, max(0.0, (height - (30.0 + fade1 * 40.0))/150.0));

vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

// Keep it green close to road?
if(roadProximity > 0.0 && roadProximity < 0.5 + fade0) {

  vHeather *= roadProximity / (0.5 + fade0);

  if(seasonIndex < 3) {
    vLightGrass *= roadProximity / (0.5 + fade0);
  }
}  

vDarkGrass = min(max(0.0,(fade1 - 0.25) * 2.0), 1.0);

vField = fieldCol;

//// ROAD PROX

roadProx = roadProximity;
// Not safe but sets a flag for the frag shader to exit road-relative shading
hasRoadProx = step(0.00001, abs(roadProximity));

// Prevent rocks forming below the road, e.g. at bridges.
float underRoadFactor = 1.0 - step(0.000001, -roadProx);
steepness *= underRoadFactor;
vHeather *= underRoadFactor;

// if(roadProx < 0.0) {
//   steepness = 0.0;
//   vHeather = 0.0;
// }


//// SHADOW

vShadow = min(1.0, treeMask * min(1.0, max(0.0, height / 4.0)));


//// TREE MASK

vTreeMask = vShadow;

if(vTreeMask > 0.1) {
  vTreeMask = max(0.2, vTreeMask);
} else {
  vTreeMask = 0.0;
}

// Road-dependent factors
if(hasRoadProx > 0.5) {

  vTreeMask *= clamp(roadProx / 2.0, 0.0, 1.0);

  float intensity = clamp((16.0 - roadProx) / 6.0, 0.0, 1.0);

  intensity *= 0.8; // Scale it a bit

  transformed += normalize( objectNormal ) * ( (texture2D( displacementMap, vUUv ).x - 0.4) * min(1.0, steepness * 3.0) ) * intensity;

}

//// MV POSITION

vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

//// OVERLAP SINK

// TODO Use actual distance probably?

//// Curvature
// float ddist = -mvPosition.z;
// float ssink = ddist / 1000.0;
// ssink *= ssink;
// transformed.y -= ssink * 50.0;
// // Recalc mvPosition
//   mvPosition = modelViewMatrix * vec4( transformed, 1.0 );

if(overlap > 0.0) {

    float overlapDist = overlap - vehicleIndex;

    if(overlapDist > 0.0) {

      if(overlapDist < sinkDist) {

          float halfSinkDist = sinkDist * 0.75;

          if(overlapDist < halfSinkDist) {
            transformed.y -= 20.0;
          } else {
            transformed.y -= 20.0 * (sinkDist - overlapDist) / (sinkDist - halfSinkDist);
          }
      }

    } else {

      float fSinkDist = -sinkDist/2.0;

      if(overlapDist > fSinkDist) {

        float halfSinkDist = fSinkDist / 2.0;

        if(overlapDist > halfSinkDist) {
          transformed.y -= 20.0;
        } else {
          transformed.y -= 20.0 * (fSinkDist - overlapDist) / halfSinkDist;
        }

      }

    }

    // Recalc mvPosition
    mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
}

gl_Position = projectionMatrix * mvPosition;

vCamDepth = -mvPosition.z;

// vLightGrass = 0.0;
// vDarkGrass = 0.0;

vShadow *= shadowFactor;

`,Lo=`

varying float height;
varying float steepness;
varying float roadProx;
varying float hasRoadProx;
varying float vTreeMask;
varying vec2 vUv;
varying vec2 vUUv;
varying vec2 vWv;
varying vec2 vWWv;
varying float vLightGrass;
varying float vDarkGrass;
varying float vField;
varying float vHeather;
varying float vShadow;
varying float vCamDepth;
varying vec2 vRoadUv;

uniform int seasonIndex;

uniform sampler2D grassMap;
uniform sampler2D sandMap;
uniform sampler2D rockMap;
uniform sampler2D rockMapBump;
uniform sampler2D gravelMap;
uniform sampler2D forestMap;
uniform sampler2D heatherMap;

uniform sampler2D detailNearMap;
uniform sampler2D detailFarMap;
uniform sampler2D grassVariationMap;

uniform sampler2D offroadMap;

uniform sampler2D fadeFine;

uniform vec3 roadCol;

uniform vec3 grassColA;
uniform vec3 grassColB;
uniform vec3 peakColA;
uniform vec3 peakColB;

uniform vec3 fieldDiscolouration;

uniform float radiance;

uniform float offroad;
uniform float greenlane;

vec4 rockTex;

vec4 terrainBlend(vec4 tx1, float w1, vec4 tx2, float w2, float depth) {

  // Perform the blending

  float ma = max(tx1.a + w1, tx2.a + w2) - depth;
  float b1 = max(tx1.a + w1 - ma, 0.0);
  float b2 = max(tx2.a + w2 - ma, 0.0);

  return ((tx1 * b1) + (tx2 * b2)) / (b1 + b2);
}

// the ws are the height of that texture; biggest w wins
// The depth is the transition between them? maybe?

// The height goes in the alpha channel of the textures 1 and 2
// the w is the weight? the weight should be the transition?
// depth is.. I don't know, a weird offset? No idea tbh

float screen(float a, float b) {
  return 1.0 - ((1.0 - a) * (1.0 - b));
}

`,yo=`

float fade0 = texture2D(fadeFine, vUv).r;
float fade1 = texture2D(fadeFine, vUUv).r;
float fade2 = texture2D(fadeFine, vWv).r;

//// PREP MAP

vec4 texelColor = texture2D( grassMap, vUv ); 

//// DETAIL TEXTURING

float blendVal  = (1.0 - texture2D( detailFarMap, vWWv ).r);
float blendValB = (1.0 - texture2D( detailFarMap, vWv ).r);
float blendValC = (1.0 - texture2D( detailFarMap, vUUv).r);


blendValB = screen(blendValC, blendValB);
blendValB *= min(1.0, blendVal * 10.0);

// Reduce on winter?
if(seasonIndex == 3) {
  blendValB *= 0.7;
}

// Elevation alteration to large-scale blend
blendVal *= (0.6 + 0.4 * vLightGrass);

// Enhance the distant intensity relative to medium/close range
blendVal *= 2.0;

// Blend from large-scale to medium-scale
float depthLerpFar = saturate(vCamDepth / 800.0);
blendVal = blendVal * depthLerpFar + (1.0 - depthLerpFar) * blendValB;

// Large-scale texture toned down for fields
float fieldFactor = ceil(abs(vField));
// blendVal *= 1.0 - fieldFactor * 0.25;

// Depth for far
blendVal *= saturate(0.4 + 0.6 * (vCamDepth / 300.0));

// Dotty noisy...
blendVal += (1.0 - texture2D( detailNearMap, vUUv ).r ) * (0.7 + vLightGrass * 0.3);

//// GRASS COLOUR MIX

// Blend them into two colours

float variationVal = texture2D(grassVariationMap, vWWv).r - 0.5;
float closeVariation = ((1.0 - texture2D(grassVariationMap, vWv).r) - 0.5);

float grassBlend = (screen(fade1, fade0) + vDarkGrass) / 2.0;

// Square for more effect?
grassBlend = grassBlend * grassBlend;

grassBlend = saturate(grassBlend + variationVal + closeVariation);

float lightGrassFactor = saturate(vLightGrass + variationVal - closeVariation);

// Colour the grass tips versus base
lightGrassFactor = saturate(lightGrassFactor * 2.0 * texelColor.r);

vec3 grassCol = mix(
  mix(grassColA, grassColB, grassBlend),
  mix(peakColA, peakColB, grassBlend),
  lightGrassFactor
);

//// APPLY GRASS COLOUR

texelColor.rgb *= grassCol;

//// FIELDS

if(vField != 0.0) {

  // Rough lines using noise
  // Note that we step on vField for simplicity - should consider a separate varying for field mow dir though
  float fadeField = texture2D(
    fadeFine,
    vec2(
      vWv.x * 2.0 * step(0.001, vField),
      vWv.y * 2.0 * (1.0 - step(0.001, vField))
    )
  ).r;

  texelColor.rgb += vField * fieldDiscolouration * fadeField;

}

//// HEATHER


if(vHeather > 0.0) {

  vec4 heatherCol = texture2D(heatherMap, vUv);

  float depthLerp = 0.25 + 0.75 * min(1.0, vCamDepth / 400.0);
  heatherCol = mix(heatherCol, texture2D( heatherMap, vWv ), depthLerp);
  
  heatherCol = mix(texelColor, heatherCol, min(1.0, vHeather));
  heatherCol.a = heatherCol.r;
  texelColor.a = texelColor.g;
  texelColor = terrainBlend(
      texelColor,
      1.0 - vHeather,
      heatherCol,
      vHeather,
      0.1
  );
  
}
  
// Apply detail texture
texelColor *= 1.0 - blendVal;


//// TREE MASK

vec4 forestCol = texture2D(forestMap, vUv / (1.25 - offroad * 0.25)); // larger scale looks better?
forestCol.a = forestCol.r * 2.0 * fade2;

float fTreeMask = min(1.0, vTreeMask);

if(fTreeMask > 0.0) {

  texelColor = terrainBlend(
    texelColor,
    1.0-fTreeMask,
    forestCol,
    fTreeMask,
    0.1 + (1.0 - fTreeMask) * fade0 * 0.9
  );

  texelColor.a = 1.0;
}


//// SAND BLEND

float vHeight = height + min(1.0, height+0.5) * (fade2 * 2.0 + (fade0 + fade2) * 0.5);

if(vHeight < 4.0 && seasonIndex < 3) {

  float dark = 1.0;

  if(vHeight < 0.0) {
    texelColor = texture2D(sandMap, vUv) * 0.75;
  } else {

    if(vHeight < 2.0) {

      // Darken toward water
      dark = min(dark, 1.0 - (2.0 - vHeight) / 4.0);

    } else if(vHeight > 2.5) {

      // Darken into the grass
      dark = 1.0 - (vHeight-2.5) / 2.0;

    }

    // Lerp from grass to thingy
    float lerp = max(0.0, (vHeight - 1.0) / 3.0);

    vec4 sandCol = texture2D(sandMap, vUv);

    texelColor.a = texelColor.r;

    sandCol.a = sandCol.r;

    // Apply shading based on water/grass proximity
    sandCol.rgb *= dark;

    texelColor = terrainBlend(
      texelColor,
      lerp,
      sandCol,
      1.0 - lerp,
      0.05
    );

    // texelColor = mix(texture2D(sandMap, vUv) * dark, texelColor, height / 4.0);

    // texelColor = terrainBlend(
    //   texture2D(sandMap, vUv) * dark,
    //   dark,
    //   texelColor,
    //   texelColor.g,
    //   height / 4.0
    // );
  }
}

//// ROADSIDE GRAVEL

if((seasonIndex < 3 || offroad > 0.5) && hasRoadProx > 0.5) {

  if(offroad < 0.5 && roadProx < -0.2 && (vCamDepth > 100.0 || seasonIndex == 1)) {

    texelColor.rgb = roadCol;

  } else if(roadProx + fade2 * 0.1 < 0.5 * fade0) {

    float rp = saturate(1.0 - (roadProx + fade2 * 0.1) / (0.5 * fade0));    

    //// GREENLANE CENTER
    // NOTE - could inject this at attribute level instead?
    
    if(greenlane > 0.5) {
      if(roadProx < -0.7) { // Lower values = narrower strip in middle
        if(roadProx < -1.1) {
          rp = 0.0;
        } else {
          // needs to be 0 when -1.2, 1 when -0.8
          rp = 1.0 - (-roadProx - 0.7) / 0.4;
        }
      }
    } else if(offroad > 0.5) {

      // Off-road a bit noisier along grass edges
      rp = saturate((1.0 * fade0) - (roadProx + fade2 * 0.1) / (1.0 * fade0));    

    }

    // Mix into forest colour if we're under trees
    if(offroad > 0.5) {

      float edgeness = 1.0 - saturate(-roadProx/(2.0 - greenlane));

      vec4 gravelCol = texture2D(gravelMap, vUv) * (0.75 + rp * rp * 0.75);

      // texelColor.rgb = vec3(rp);
      texelColor = mix(

      
      mix(

        gravelCol,
          forestCol,
          min(0.8 - greenlane * 0.2, vShadow * 2.0) * edgeness
        ),
        
        texelColor,

        smoothstep(
          0.0, 
          rp,
          texelColor.g / rp
        )
        

      );

      // OFFROAD TEXTURE
      if((greenlane < 0.5 || seasonIndex == 3) && roadProx < 1.0) {
          vec4 roadMaskCol = texture2D(offroadMap, vRoadUv);
          texelColor.rgb *= 1.0 - roadMaskCol.r * 0.5 * ((1.0 - greenlane) + (greenlane * rp));
          
      }  

    } else if(seasonIndex != 1 && vShadow > 0.0) {

      float gravelBrightness = 1.3;
      // if(seasonIndex == 2) {
      //   gravelBrightness = 1.3;
      // }

      texelColor = mix(

        mix(
          texture2D(
            gravelMap,
            vUv
          ),
          forestCol * gravelBrightness,
          min(1.0, vShadow * 2.0)
        ),

        texelColor,

        smoothstep(
          0.0, 
          rp,
          texelColor.g / rp
        )
      );

    } else {

      texelColor = mix(
        texture2D(gravelMap, vUv) * (0.75 + rp * rp * 0.75),
        texelColor,
        smoothstep(
          0.0, 
          rp,
          texelColor.g / rp
        )
      );      
    }

  }

}

//// STEEPNESS CLIFF

// Note we do a branch here since cliffs take up such a small portion of the space; worthwhile
if(steepness > 0.1) {

  float steepBlend = 1.0 - steepness;
  rockTex = mix(
    texture2D(rockMap, vUv),
    texture2D(rockMap, vUUv),
    saturate((vCamDepth - 20.0) / 130.0) // Blend by proximity
  );
  
  // Gradual distance-based blend
  rockTex.a = texture2D(rockMapBump, vUv).r * texture2D(rockMapBump, vUUv).r;
  
  // Blend according to steepness etc.
  texelColor.a = 0.2 + fade2 * 0.2;
  
  // Lower steep blend is more snow?
  // float steepBlend = 1.0 - steepness; // Reduce steepess factor to reduce rockiness
  // Reduce the depth value to increase sharp transition from snow to rock
  texelColor = terrainBlend(texelColor, steepBlend, rockTex, (1.0 - steepBlend), 0.08);
  texelColor.a = 1.0;
}

//// PREVENT GLITTERING PIXELS

texelColor.r = saturate(texelColor.r);
texelColor.g = saturate(texelColor.g);
texelColor.b = saturate(texelColor.b);

//// PREP EMISSIVE?

// NOTE this must match the grass sprites. Ideally share a chunk?

totalEmissiveRadiance = texelColor.rgb * radiance;

//// FINAL COMPOSITION

diffuseColor *= texelColor;

// DEBUG COLOURS
// diffuseColor = vec4(vHeather, vCurvature, 0.0, 1.0);
// diffuseColor.rgb = vNormal.rgb;
// diffuseColor = vec4(vec3(vLightGrass), 1.0);

// Clamp to reduce glittering pixels? Needs a better fix though... this is a last resort

/*

This is a commercial project owned and developed solely by Topograph Interactive Ltd.
No derivatives or modifications are permitted 

*/


`,Co=`

    // TODO ORIGIN OFFSET USE OFFSET CAM POS
    vec3 offsetCameraPosition = vec3(
      cameraPosition.x - originOffset.x,
      cameraPosition.y,
      cameraPosition.z - originOffset.y
    );
    // REPLACE BELOW WITH cameraPosition WHEN DISABLING ORIGIN OFFSET
    
    float fresnel = 1.0 - max( 0.0, dot( normalize(offsetCameraPosition - vFresnelPos), vFresnelNorm ) );

    float lightFresnel = max(0.0, (fresnel - 0.75)) * 4.0 * (1.0 - blendVal * 0.5);
    lightFresnel *= lightFresnel;
    lightFresnel *= (1.0 - vShadow);
    lightFresnel *= fresnelIntensity;
    
    float darkFresnel = 1.0 - min(1.0, fresnel * 1.3333);
    darkFresnel *= fresnelIntensity;
    darkFresnel = 0.25 + min(0.25, max(0.0, darkFresnel - 0.25) * 0.5);

    diffuseColor.rgb *= 1.0 + lightFresnel - darkFresnel;

`,Io=`

    #ifdef WATER_DEPTH

        attribute float depth;
        // attribute vec3 shoreness;

    #endif

    #ifdef WATER_WAVES

        uniform float time;

        varying vec2 vUw;
        varying vec2 vUUw;
        varying vec2 vUUUw;

    #endif

    varying vec4 wPos;

    #ifdef WATER_DEPTH

        varying float vDepth;
        // varying vec3 vShoreness;

    #endif

`,Ro=`

    wPos = modelMatrix * vec4( position, 1.0 );

    #ifdef WATER_WAVES

    // 50 and 200 for normal map

        vUw.x = (time + wPos.x) / 200.0;
        vUw.y = (time + wPos.z) / 200.0;

        vUUw.x = (wPos.x - time) / 800.0;
        vUUw.y = (wPos.z - time) / 800.0;

        vUUUw.x = (wPos.x - time) / 300.0;
        vUUUw.y = (wPos.z - time) / 300.0;

    #endif

    #ifdef WATER_DEPTH
        vDepth = depth;
        // vShoreness = shoreness;
    #endif

`,Eo=`

    uniform vec3 camPos;
    uniform vec3 body;
    uniform vec3 highlight;

    #ifdef WATER_WAVES
        uniform sampler2D waves;

        varying vec2 vUw;
        varying vec2 vUUw;
        varying vec2 vUUUw;

    #endif

    varying vec4 wPos;

    #ifdef WATER_DEPTH
        varying float vDepth;
        // varying vec3 vShoreness;
    #endif

    vec3 upvec = vec3(0.0,1.0,0.0);

`,To=`

    #ifdef WATER_DEPTH
        // Abandon water rendering if it's well under ground
        if(vDepth > 10.0) {
            discard;
        }

        float vDepthFactor;
    #endif

    vec3 camNorm = normalize(vec3(
        camPos.x - wPos.x,
        camPos.y - wPos.y,
        camPos.z - wPos.z
    ));

    float seaDot = dot(camNorm, upvec);

    #if defined(WATER_WAVES) || defined(WATER_DEPTH)

        // Add lightness
        float wave1 = texture2D(waves, vUw).r + 0.1;
        float wave2 = texture2D(waves, vUUw).r + 0.1;

        // Add darkness?
        float wave4 = (texture2D(waves, vUUUw).r + 0.1);
        float wave5 = (texture2D(waves, vUUw - vUw).r + 0.1);

        //// WAVE RIPPLES

        float darkReflect = 0.0;

        #ifdef WATER_DEPTH

            // Disable specular highlights close to shore

            // if(vDepth > -2.0) {
            //     if(vDepth > -1.0) {
            //         darkReflect = 1.0;
            //     } else {
            //         darkReflect = (2.0 + vDepth);
            //     }
            // }

        #endif

        // Extra dark ripples by sea edge
        seaDot += wave4 * wave5 * (0.5 + darkReflect / 4.0);
        // No ripples by sea edge
        seaDot -= wave1 * wave2 * (1.0 - darkReflect);

        //// EDGE HIGHLIGHT

        #ifdef WATER_DEPTH

            // Make it darker closer to the shore for some reason
            // if(vDepth > -5.0) {
            //     vDepthFactor = min(5.0, (5.0 + vDepth)) * 0.1 * (1.0 - wave2);
            //     seaDot += vDepthFactor;
            // }

        #endif

        //// CLAMP SEADOT

        seaDot = min(max(0.0, seaDot), 1.0);

        //// BLEND SKY WITH DARK BY SEADOT

        float seaDotMix = 1.0 - seaDot;
        diffuseColor.rgb = mix(diffuseColor.rgb, body, seaDotMix * seaDotMix);

        //// DARKEN DEPTHS

        #ifdef WATER_DEPTH

        if(vDepth < 0.0) {
            diffuseColor *= 1.0 - min(1.0, vDepth / -15.0) * 0.3;
        }

        #endif

        //// HIGHLIGHTS ON SHALLOW ANGLES

        float sunDotMix = 0.0;

        #ifdef WATER_DEPTH

            // Undo the depth factor so it doesn't mess up the highlights
            if(vDepth > -5.0) {

                seaDot *= 0.7 + 0.3 * (vDepth / -5.0); //0.01;//1.0 - seaDot;//-= 0.1;//(vDepth / -5.0);// * 0.2;

                // seaDot *= max(0.0, (vDepth / -5.0)  * 0.25);
                // seaDot -= vDepthFactor * (1.0 + (max(0.0, (5.0 + vDepth)) / 40.0));
            }



            //// TESTING REFLECTIONS
            /*

            float shoreness = dot(vShoreness, camNorm);// - max(0.0, length(vShoreness) - 1.0);

            if(shoreness < 0.0) {
                diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.15, 0.03), min(0.95, -shoreness * 50.0));
                seaDot += -shoreness;
            }

            */
            ////


        #endif

        if(seaDot < 0.125) {
            sunDotMix = 1.0 - seaDot * 8.0;
        }

        // Mocking up the transition to dark reflection at the horizon
        // if(sunDotMix > 0.8) {
        //     diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.12, 0.11, 0.1), sunDotMix * sunDotMix);
        // } else {
        // }
        diffuseColor.rgb = mix(diffuseColor.rgb, highlight, sunDotMix * sunDotMix);


    #else
        float seaDotMix = 1.0 - seaDot;
        diffuseColor.rgb = mix(diffuseColor.rgb, body, seaDotMix * seaDotMix);
    #endif

    //// FINALISE

    // Transparency stuff

    #if defined(WATER_DEPTH)

    // if(vDepth < -20.0) {
    //     diffuseColor.a = 0.8;
    // } else {
    //     diffuseColor.a = 0.5 + (vDepth / -20.0) * 0.3;
    // }

    #endif

`,No=`

    precision highp float;

    uniform sampler2D noiseMap;
    uniform float shadowFactor;

    attribute float variant;
    attribute float type;
    attribute float orientation;
    attribute float dissolve;

    varying vec2 vUv;
    varying vec2 vUvBlend;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    varying float vRadianceBlend;
    varying float vLeafBrightness;

    varying float discolouration;

    uniform float dissolveFar;
    uniform float dissolveNear;
    uniform float dissolveInterval;
    uniform float discolourationFactor;

    vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot) {
        return vec2(
            cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
            cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
        );
    }
`,Uo=`
    // Use the world position of the camera to derive the angle
    vec4 wPos = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float angleToCamera = atan(wPos.x - cameraPosition.x, wPos.z - cameraPosition.z);
`,Fo=`

    vUv = uv;

    // Sample blend texture here - note we transform the imposter atlas UVs to the full square range
    // 21.32 here is 5.33 * 4.0
    vUvBlend = vec2(uv.x * 21.32, uv.y * 4.0);

    vType = type;

`+Er,Oo=`

    vec3 objectNormal = normalize(vec3( (cameraPosition.x - wPos.x), 0.0, (cameraPosition.z - wPos.z)));

`,Ho=`


    // Rotate the vertices to face the camera
    transformed.xz = getRotatePivot2d(transformed.xz, angleToCamera, vec2(0.0,0.0));

    // Crop around the trees depending on the type; conifers = 70%, deci = 80%
    float cropX = 0.8 - vType * 0.1;

    // Taper the conifers (type 1) a bit
    // * 4 here is because there are 4 conifer types; vUv.y goes to 0.25
    float cropTaper = 1.0 - (step(0.5, vType)) * vUv.y * 4.0 * 0.6;
    cropX *= cropTaper;
    transformed.xz *= cropX;


    // Offset UVs
    // * 16 here is because there are 16 orientations; vUv.x goes to 0.0625
    vUv.x = ((vUv.x * 16.0 * cropX) + ((1.0 - cropX) / 2.0)) / 16.0;        

    // Account for rotational offset in model
    angleToCamera -= orientation;

    // Normalise to inverval [-PI, PI]
    if(angleToCamera > PI) {
        angleToCamera -= PI*2.0;
    } else if(angleToCamera < -PI) {
        angleToCamera += PI*2.0;
    }

    // Choose tile from texture based on angle
    float tileIndex = (angleToCamera + PI) / (PI * 2.0 / 16.0);

    // Should be 0 when angle is exactly face-on, 1 when exactly betwen tiles
    // Note that this should be scaled to the alphaTest value?



    vUvOffset.x = (1.0 / 16.0) * floor(tileIndex);

    // Set vertical offset by variant type
    vUvOffset.y = variant / 4.0;

    // Need to get mvPosition here
    // #include <project_vertex>

    // Get mvPosition at instance origin
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0);


    vAngleBlend = (tileIndex - floor(tileIndex));

    // Prevent angle blend complexity beyond 400m

    // TODOCAM CAMERA MODE - DISABLE THIS FOR FILMING?
    vAngleBlend *= step(-mvPosition.z, 500.0);

    // Scale with distance maybe, and sink a bit...
    // Helps to cover gaps
    // May want to make this detail-dependent
    float imposterCamDist = saturate((-mvPosition.z - 200.0) / 800.0);
    transformed *= 1.0 + imposterCamDist * 0.3;
    transformed.y -= imposterCamDist * 4.0;

    // vDist = min(0.75, max(0.4, 1.0 - -mvPosition.z / 1000.0));
    vRadianceBlend = 1.0 - saturate((-mvPosition.z - 50.0) / 200.0) * 0.33;

    // Perform dissolve checks
    vDissolve = 1.0 - saturate((-mvPosition.z - dissolveNear) / dissolveInterval);
    vDissolve *= dissolve;

    // if vDissolve very high just shrink to 0
    transformed *= 1.0 - step(0.999, vDissolve);

    vCameraUp = normalMatrix * vec3(0.0, 1.0, 0.0);

    // Finally proper projection?

    mvPosition = modelViewMatrix * instanceMatrix * vec4( transformed, 1.0 );

    float densityFactor = 0.25 * shadowFactor;
    vLeafBrightness = 1.0 - densityFactor * saturate((0.25 - uv.y) / 0.08);
    // Fake darkness from density
    vRadianceBlend *= max(0.5, vLeafBrightness);

    gl_Position = projectionMatrix * mvPosition;

    
`,Po=`

    precision highp float;

    varying vec2 vUv;
    varying vec2 vUvBlend;
    varying vec2 vUvOffset;
    varying float vDissolve;
    varying float vAngleBlend;
    varying vec3 vCameraUp;
    varying float vType;
    varying float vRadianceBlend;
    varying float vLeafBrightness;

    varying float discolouration;

    uniform sampler2D noiseMap;
    uniform sampler2D mapB;
    uniform sampler2D normalMapB;
    uniform float radiance;
    uniform bool hasSnow;
`,zo=`

    // Early discard
    if(vDissolve > 0.999) {
        discard;
    }

    vec4 texelColor;

    if(vType < 0.5) {
        texelColor = texture2D( map, vUv + vUvOffset );
    } else {
        // Map B
        texelColor = texture2D( mapB, vUv + vUvOffset );
    }

    // Transform uvs to square to  sample from noise texture

    float blendNoise = 0.0;
    if(vAngleBlend > 0.0) {

        blendNoise = texture2D(noiseMap, vUvBlend).r;

        //// DIRECT APPROACH
        vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);
        if(blendUV.x > 1.0) {
            blendUV.x -= 1.0;
        }
        if(vType < 0.5) {
            texelColor = mix(texelColor, texture2D( map, blendUV ), step(blendNoise, vAngleBlend));
        } else {
            texelColor = mix(texelColor, texture2D( mapB, blendUV ), step(blendNoise, vAngleBlend));
        }

        //// GRADIENT APPROACH
        // Blend to next texture by angle offset?
        // if(blendNoise < vAngleBlend) {

        //     vec2 blendUV = vUv + vUvOffset + vec2(1.0 / 16.0, 0.0);

        //     if(blendUV.x > 1.0) {
        //         blendUV.x -= 1.0;
        //     }
    
        //     if(vType < 0.5) {
        //         texelColor = textureGrad(map, blendUV, dFdx(blendUV), dFdy(blendUV));
        //     } else {
        //         texelColor = textureGrad(mapB, blendUV, dFdx(blendUV), dFdy(blendUV));
        //     }

        // }

        // Dissolve on approach
        texelColor.a *= step(vDissolve, blendNoise);
    }


    diffuseColor *= texelColor;

`+Tr,Go=`
    vec2 vNormalMapUvOffset = vUv + vUvOffset;

    #ifdef USE_NORMALMAP_OBJECTSPACE

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }

        // vNormalMapUvOffset.x = min(max(vNormalMapUvOffset.x, 0.0), 1.0);

        // normal = texture2D( normalMap, vNormalMapUvOffset ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

        if(vType < 0.5) {
            normal = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            normal = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
        #endif

        normal = normalize( normal );

        diffuseColor.rgb = vec3(normal.x);

    #elif defined( USE_NORMALMAP_TANGENTSPACE )

        if(blendNoise <= vAngleBlend) {
            vNormalMapUvOffset.x += 1.0/16.0;
            if(vNormalMapUvOffset.x > 1.0) {
                vNormalMapUvOffset.x -= 1.0;
            }
        }


        vec3 mapN;
        if(vType < 0.5) {
            mapN = textureGrad(normalMap, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        } else {
            mapN = textureGrad(normalMapB, vNormalMapUvOffset, dFdx(vNormalMapUv), dFdy(vNormalMapUv)).xyz * 2.0 - 1.0;
        }

        mapN.xy *= normalScale;

        normal = normalize( tbn * mapN );

    #elif defined( USE_BUMPMAP )

        normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

    #endif

    // SNOW
    if(vType < 0.5 && hasSnow) {
        float dotUp = dot(normal, vCameraUp );
        // Note that we use different parameters to the regular trees
        if(dotUp > 0.0) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), min(1.0, dotUp * 8.0));
        }
    }
`,ko=`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

        reflectedLight.directSpecular = reflectedLight.directDiffuse;

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

        //// SR EDIT - FAKE DIM SPOTLIGHTS ON IMPOSTERS
        directLight.color *= 0.2;
        ////

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,Bo=`
    // attribute float variant;
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;
    uniform int seasonIndex;
    uniform vec3 vehiclePos;
    uniform bool flatten;

    uniform vec2 originOffset;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float cameraDist;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    // Must match the ground shader
    float wuvSize = 500.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Wo=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);
    vec4 iPos = modelMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0);

    // ORIGIN OFFSET
    wPos.x -= originOffset.x;
    wPos.z -= originOffset.y;
    iPos.x -= originOffset.x;
    iPos.z -= originOffset.y;
    //

    vFresnelPos = wPos.xyz;
    vFresnelPos.y -= 1.0; // Subtract the sprite midpoint to get the ground position?

    vFresnelNorm = groundNormal;

    // Grass colouration UVs
    vGv.x = iPos.x / 10.0;
    vGv.y = iPos.z / 10.0;

    vGGv.x = vGv.x / 16.0;
    vGGv.y = vGv.y / 16.0;

    vWv.x = iPos.x / wuvSize;
    vWv.y = iPos.z / wuvSize;

    vWWv.x = vWv.x / 8.0;
    vWWv.y = vWv.y / 8.0;

    // ORIGIN OFFSET UNSET FOR PROJECTION
    wPos.x += originOffset.x;
    wPos.z += originOffset.y;
    iPos.x += originOffset.x;
    iPos.z += originOffset.y;
    //

    //// GET FADES

    float fade0 = texture2D(noiseMap, vWv).r;
    float fade1 = texture2D(noiseMap, vWWv).r;

    // REduce vWWv to match ground shader
    vWWv *= 2.0;
    // Mimic setup with Hills ground
    vGv *= 1.4;

    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vRoadProx = roadProx;

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    // Get uvLookup  from variant
    /* Indexed into the texture as such:

        2 | 3
        - + -
        0 | 1

    */

    //// VARIANT SELECTION


    float v = texture2D(noiseMap, vGGv).r;

    float variant = 1.0;

    // CHECK HEATHER - has to match the ground function
    // Might want to find something cheaper to do here?
    float heather = smoothstep(0.4, 1.0, ((iPos.y + fade1 * 350.0) - 60.0) / 500.0);
    heather *= screen(fade1, fade0);
    // heather = smoothstep(0.3, 0.6, heather);
    if(vShadow < 0.1 && heather > 0.38 + v / 6.0 ) {
        variant = 3.0;

        if(roadProx > 1.0) {
            transformed.y -= v * 0.2;
        } else {
            transformed.y -= v * 0.2 * roadProx;
        }
    }


    if(vRoadProx < v * 2.0 + 0.2) {
        // Little grass
        variant = 0.0;
    } else if(variant < 3.0 && ( iPos.y > 100.0 && v + fade0 > 1.75 - (iPos.y - 50.0) / 250.0 ) || vShadow > v * 2.0 ) {

       // big grass

        variant = 2.0;
    } else if(variant == 3.0) {
        transformed.xyz *= 0.5 + fade0 * 1.5;
    }

    if(vRoadProx < -0.5) {
        variant = 1.0;
    }


    doDiscard = 0.0;
    doColor = 0.0;
    if(variant < 3.0) {
        doColor = 1.0;

        // SET UP GRASS COLOURATION PARAMS


        float heightVal = min(1.0, max(0.0, (iPos.y - (30.0 + fade1 * 40.0))/150.0));

        vLightGrass = min(1.0, heightVal * (fade0 + heightVal * 0.5));

        vDarkGrass =  min( max( 0.0, (fade1 - 0.25) * 2.0), 1.0);

        if(vRoadProx < 0.5 + fade1) {
            vLightGrass *= max(0.5, vRoadProx / (0.5 + fade1));
        }
    }

    vUvOffset.x = variant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition




    // Limit darkness by thingy
    // darkness = min(0.5, -tPos.z / sproutNear);

    //// MODIFY MV POSITION

    float dist = (iPos.x - cameraPosition.x)*(iPos.x - cameraPosition.x) + (iPos.z - cameraPosition.z)*(iPos.z - cameraPosition.z);

    cameraDist = dist;

    // Sink with distance
    transformed.y -= saturate((dist - sproutNear) / (sproutFar - sproutNear)) * 0.5;

    // And with proximity to the car?
    if(flatten) {
        float vehDist = (iPos.x - vehiclePos.x)*(iPos.x - vehiclePos.x) + (iPos.z - vehiclePos.z)*(iPos.z - vehiclePos.z);
        float vehFlatten = 1.0 - saturate((vehiclePos.y - 0.5) - iPos.y);
        // transformed.y -= (1.0 - saturate(vehDist / 2.0)) * vehFlatten * 0.5;
        transformed.y *= 1.0 - (1.0 - saturate(vehDist / 2.0)) * vehFlatten;
    }

    // Scale to 0 if no longer visible to save fragments?
    transformed *= 1.0 - step(sproutFar, dist);

    // Crop depending on variant and season

    if(seasonIndex < 3) {

        // First two variants and last variant halved
        float cropY = 1.0 - 0.5 * step(0.5, abs(variant - 2.0));
        transformed.y *= cropY;
        vUv.y *= cropY;

    } else {

        // Winter, first two options are crushed to 0

        float vStep = step(1.5, variant);
        transformed.xz *= vStep;
        transformed.y *= vStep * 0.5;
        vUv.y *= vStep * 0.5;

    }
    
    // if(variant < 2.0) {
    //     transformed.y *= 0.5;
    //     vUv.y *= 0.5;
    // }

    #include <project_vertex>


    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }

    vShadow *= shadowFactor;

`,Vo=`

    uniform sampler2D noiseMap;
    uniform sampler2D grassVariationMap;
    uniform sampler2D detailFarMap;

    varying vec2 vUv;

    varying vec2 vGv;
    varying vec2 vGGv;
    varying vec2 vWv;
    varying vec2 vWWv;

    varying float doDiscard;
    varying float doColor;
    varying float vShadow;
    varying float vRoadProx;

    varying float vLightGrass;
    varying float vDarkGrass;

    varying vec2 vUvOffset;

    uniform vec3 grassColA;
    uniform vec3 grassColB;
    uniform vec3 peakColA;
    uniform vec3 peakColB;
    
    varying float cameraDist;

    uniform float radiance;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,jo=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Xo=`

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    // Make opaque for debug
    // texelColor.a = 1.0;

    // Limit darkness by distance?
    // texelColor.rgb = vec3(max(texelColor.r, darkness));

    if(doColor > 0.5) {

        // Shared with ground.glsl - TODO share a chunk instead?

        float fade0 = texture2D(noiseMap, vGv).r;
        float fade1 = texture2D(noiseMap, vGGv).r;        

        float variationVal = texture2D(grassVariationMap, vWWv).r - 0.5;
        float closeVariation = ((1.0 - texture2D(grassVariationMap, vWv).r) - 0.5);

        float grassBlend = (screen(fade0, fade1) + vDarkGrass) / 2.0;
        grassBlend = grassBlend * grassBlend;

        grassBlend = saturate(grassBlend + variationVal + closeVariation);

        float lightGrassFactor = saturate(vLightGrass + variationVal - closeVariation);

        lightGrassFactor = saturate(lightGrassFactor * 2.0 * texelColor.r);

        vec3 grassCol = mix(
            mix(grassColA, grassColB, grassBlend),
            mix(peakColA, peakColB, grassBlend),
            lightGrassFactor
        );

        // Detail noise
        float detailNoise = 1.0 - (1.0 - texture2D( detailFarMap, vWv ).r) * 0.7;

        texelColor.rgb *= grassCol * detailNoise;

    } else {
        if(texelColor.a < 0.98) {
            // Lazy fix for heather white pixels
            discard;
        }

        // Dappled brightness
        texelColor.rgb *= 1.0 + (texture2D(noiseMap, vGv).r - 0.6);        
    }



    diffuseColor *= texelColor;


    //// PREP EMISSIVE?

    // NOTE this must match the ground. Ideally share a chunk?
    totalEmissiveRadiance = texelColor.rgb * radiance;


`,Zo=`


    // TODO ORIGIN OFFSET USE OFFSET CAM POS
    vec3 offsetCameraPosition = vec3(
      cameraPosition.x - originOffset.x,
      cameraPosition.y,
      cameraPosition.z - originOffset.y
    );

    float fresnel = 1.0 - max( 0.0, dot( normalize(offsetCameraPosition - vFresnelPos), vFresnelNorm ) );

    float lightFresnel = max(0.0, (fresnel - 0.75)) * 4.0 * clamp((vUv.y * 3.0), 0.7, 0.9); // Bias fresnel brightness toward the top
    lightFresnel *= lightFresnel;
    lightFresnel *= (1.0 - vShadow);
    lightFresnel *= min(1.0, cameraDist / 100.0); // reduce with camera prox
    lightFresnel *= fresnelIntensity;
    lightFresnel *= max(doColor, 0.5);
    
    float darkFresnel = 1.0 - min(1.0, fresnel * 1.3333);
    darkFresnel *= fresnelIntensity;
    darkFresnel *= 0.5; // Reduce intensity for grass
    darkFresnel = 0.25 + min(0.25, max(0.0, darkFresnel - 0.25) * 0.5);

    diffuseColor.rgb *= 1.0 + lightFresnel - darkFresnel;

`,Qo=`
    attribute vec3 groundNormal;
    attribute float shadow;
    attribute float variant;
    // attribute float roadProx;

    uniform float sproutNear;
    uniform float sproutFar;
    uniform float sproutMargin;
    uniform sampler2D noiseMap;
    uniform float shadowFactor;
    // uniform float time;
    uniform vec3 vehiclePos;
    uniform bool flatten;

    varying vec2 vUv;
    varying vec2 vWv;


    varying float vAlphaTest;
    varying float vShadow;
    varying float doDiscard;

    varying float vAO;

    varying vec2 vUvOffset;

    float wuvSize = 512.0;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }
`,Yo=`

    vUv = uv;

    vec4 wPos = modelMatrix * instanceMatrix * vec4(1.0);
    vec4 iPos = modelMatrix * instanceMatrix * vec4(0.0,0.0,0.0,1.0);

    vWv.x = wPos.x / wuvSize;
    vWv.y = wPos.z / wuvSize;

    // objectNormal = groundNormal;
    vNormal = normalMatrix * groundNormal; // mat3(inverse(transpose(modelMatrix * instanceMatrix)));

    vShadow = min(1.0, shadow * min(1.0, max(0.0, wPos.y / 4.0)));

    vAO = max(0.0, min(0.5, position.y)) * 2.0;

    // Get uvLookup  from variant

    //// VARIANT SELECTION

    float fade0 = texture2D(noiseMap, vWv).r;

    // The fade is normally distributed; look up the variant from type thingy whatsit
    float vVariant = variant;

    // If variant is unset in the buffer, set it procedurally
    if(vVariant == 0.0) {
        if(vShadow > 0.1) {
            // Higher chance of fern
            if(fade0 > 0.41) {
                if(fade0 > 0.52) {
                    vVariant = 2.0;
                } else {
                    vVariant = 1.0;
                }
            }
        } else {
            // Lower chance for ferns
            if(fade0 > 0.46) {
                if(fade0 > 0.54) {
                    vVariant = 1.0;
                } else {
                    vVariant = 2.0;
                }
            }

            // Also check for gorse
            // if(wPos.y > 150.0) {
            //     if(wPos.y > 200.0) {
            //         if(wPos.y > 230.0) {
            //             vVariant = 3.0;
            //         } else {
            //             // Really high up, bushes must be gorse or generic?
            //             if(vVariant < 2.0) {
            //                 vVariant = 0.0;
            //             } else {
            //                 vVariant = 3.0;
            //             }
            //         }
            //     } else if(vVariant == 2.0) {
            //         vVariant = 3.0;
            //     }
            // }
        }
    }

    vShadow *= shadowFactor;

    // Thinking about rules...
    //  - Gorse higher up
    //  - Soft things alongside the road regardless of elevation
    //  - Ferns only close to trees

    // Should I add more variants?
    //  - nettles and brambles
    //  - cow parsley and generic
    //  - ferns
    //  - two types of gorse
    //  - dock
    //  - ..?

    // Could do variant-specific things here like flattening ferns?
    if(vVariant == 2.0) {
        transformed.y -= 0.1;
    }

    vUvOffset.x = vVariant * 0.25;
    vUvOffset.y = 0.0;

    // Need to replace projectVertex here so we can get mvPosition

    //// MODIFY MV POSITION

    doDiscard = 0.0;

    // TODO can this be done once somewhere?
    float dist = (iPos.x - cameraPosition.x)*(iPos.x - cameraPosition.x) + (iPos.z - cameraPosition.z)*(iPos.z - cameraPosition.z);
    if(dist > sproutNear) {

        // transformed.y -= (dist - sproutNear) / sproutMargin;

        float shrinkAndSink = saturate((dist - sproutNear) / (sproutFar - sproutNear));
        transformed *= 1.0 - shrinkAndSink * 0.5;
        transformed.y -= shrinkAndSink * 0.5;

        if(dist > sproutFar) {
            doDiscard = 1.0;
        }
    }

    if(flatten) {
        float vehDist = (iPos.x - vehiclePos.x)*(iPos.x - vehiclePos.x) + (iPos.z - vehiclePos.z)*(iPos.z - vehiclePos.z);

        if(vehDist < 4.0) {
            vehDist = sqrt(vehDist);
            float vehFlatten = 1.0 - saturate((vehiclePos.y) - iPos.y);
            transformed.y *= 1.0 - (1.0 - saturate(vehDist / 2.0)) * vehFlatten * 2.0;
        }
    }


    #include <project_vertex>

    // Keeping this here as a maybe.
    if(-mvPosition.z < 10.0) {
        vAlphaTest = 0.5;
    } else {
        vAlphaTest = max(0.2, 0.5 - (-mvPosition.z-10.0) / 110.0);
    }

    // ANIMATION TESTING
    // float tt = time * 0.05;
    // vec2 blowUV = vec2(vGGv.x + tt, vGGv.y + tt);
    // if(uv.y > 0.5) {
    //     float blow = texture2D(noiseMap, blowUV).r;
    //     transformed.x += blow * 0.2;//sin(blow) * 0.2;
    //     transformed.z += blow * 0.2;//cos(blow) * 0.2;
    // }


`,Ko=`

    uniform sampler2D noiseMap;
    uniform float radiance;

    varying vec2 vUv;
    varying vec2 vUvOffset;
    varying float vAlphaTest;

    varying float vShadow;
    varying float vAO;
    varying float doDiscard;

    float screen(float a, float b) {
        return 1.0 - ((1.0 - a) * (1.0 - b));
    }


`,qo=`
    float faceDirection = 1.0;
    vec3 normal = normalize(vNormal);
`,Jo=`

    // Don't draw beyond view dist?
    if(doDiscard > 0.0) {
        discard;
    }

    // Need to alter vLightGrass
    vec4 texelColor = texture2D( map, vUv + vUvOffset );// * (1.0 - vLightGrass * 0.25);

    if(texelColor.a < vAlphaTest) {
        discard;
    }

    diffuseColor *= texelColor;

    //// PREP EMISSIVE?

    totalEmissiveRadiance = texelColor.rgb * radiance * vAO;//texelColor.rgb * 2.0; // * (1.0 - vLightGrass * 0.8);

`,Dt=`
    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;
`,$o=`
    vFresnelPos = vec4(modelMatrix * vec4( position, 1.0 )).xyz;
    vFresnelNorm = normalize( vec3( vec4( normal, 0.0) * modelMatrix ) );

`,St=`

    uniform float fresnelIntensity;
    uniform vec2 originOffset;

    varying vec3 vFresnelPos;
    varying vec3 vFresnelNorm;

`,es=`

    float fresnel = 1.0 - max( 0.0, dot( normalize(cameraPosition - vFresnelPos), vFresnelNorm ) );
    
    float lightFresnel = max(0.0, (fresnel - 0.75)) * 4.0;
    lightFresnel *= lightFresnel;
    lightFresnel *= (1.0 - vShadow);
    lightFresnel *= fresnelIntensity;
    
    float darkFresnel = 1.0 - min(1.0, fresnel * 1.3333);
    darkFresnel *= fresnelIntensity;
    darkFresnel = 0.25 + min(0.25, max(0.0, darkFresnel - 0.25) * 0.5);

    diffuseColor.rgb *= 1.0 + lightFresnel - darkFresnel;

`,ue={pars_vert:`
        attribute float bridge;
        attribute float paintSolid;
        attribute float paintSolidLeft;
        attribute float paintSolidRight;
        attribute float paintMergeLeft;
        attribute float paintMergeRight;

        uniform float textureStretch;

        varying float vBridge;
        varying float vSolid;
        varying float vSolidLeft;
        varying float vSolidRight;
        varying float vMergeLeft;
        varying float vMergeRight;
        varying float vOverlayFactor;

        varying vec2 vRoadUv;

    `,vert:`
        vBridge = bridge;
        vSolid = paintSolid;
        vSolidLeft = paintSolidLeft;
        vSolidRight = paintSolidRight;
        vMergeLeft = paintMergeLeft;
        vMergeRight = paintMergeRight;

        // Use shadow to inform overlay
        vOverlayFactor = saturate(vShadow * 3.0);
        
        vRoadUv = vMapUv;
        vRoadUv.y /= textureStretch;

    `,pars_frag:`
        uniform sampler2D overlayMap;
        uniform bool hasOverlay;

        uniform bool hasPaint;

        uniform sampler2D dashedMap;
        // uniform sampler2D dashedLongMap;
        uniform sampler2D solidMap;
        uniform sampler2D solidLeftMap;
        uniform sampler2D solidRightMap;
        uniform sampler2D mergeLeftMap;
        uniform sampler2D mergeRightMap;

        varying float vBridge;
        varying float vSolid;
        varying float vSolidLeft;
        varying float vSolidRight;
        varying float vMergeLeft;
        varying float vMergeRight;
        varying float vOverlayFactor;

        varying vec2 vRoadUv;
    `,frag:`
        #ifdef USE_MAP

            //// BASE            

            vec4 texelColor = texture2D( map, vRoadUv );

            // Bridge has solid alpha
            texelColor.a = max(vBridge, texelColor.a);

            // TODO do we even want radiance here? seems strange for the road specifically
            // Especially if it's done on paint lines
            totalEmissiveRadiance = texelColor.rgb * radiance;

            //// PAINT

            if(hasPaint) {

                vec4 paintCol = texture( dashedMap, vMapUv, -0.3 );

                float wSolid = smoothstep(0.49, 0.51, vSolid);

                float wSolidLeft = smoothstep(0.49, 0.51, vSolidLeft);
                float wSolidRight = smoothstep(0.49, 0.51, vSolidRight);
            
                float wMergeLeft = smoothstep(0.49, 0.51, vMergeLeft)  * (1.0 - ceil(max(wSolidLeft, wSolidRight)));
                float wMergeRight = smoothstep(0.49, 0.51, vMergeRight)  * (1.0 - ceil(max(wSolidLeft, wSolidRight)));
                
                if(wMergeLeft + wMergeRight > 0.0) {
                    paintCol = mix(paintCol, texture( mergeLeftMap, vMapUv, -0.3 ), wMergeLeft);
                    paintCol = mix(paintCol, texture( mergeRightMap, vMapUv, -0.3 ), wMergeRight);
                }
                if(wSolidRight + wSolidLeft > 0.0) {
                    paintCol = mix(paintCol, texture( solidRightMap, vMapUv, -0.3 ), wSolidRight);
                    paintCol = mix(paintCol, texture( solidLeftMap, vMapUv, -0.3 ), wSolidLeft);
                    paintCol = mix(paintCol, texture( solidMap, vMapUv, -0.3 ), wSolid);
                }

                texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                
                // if(vSolid > 0.499) {
                //     vec4 paintCol = texture2D( solidMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                // } else if(vSolidLeft > 0.499) {
                //     vec4 paintCol = texture2D( solidLeftMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                // } else if(vSolidRight > 0.499) {
                //     vec4 paintCol = texture2D( solidRightMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);
                // } else if(vMergeLeft > 0.499) {
                //     vec4 paintCol = texture2D( mergeLeftMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);                
                // } else if(vMergeRight > 0.499) {
                //     vec4 paintCol = texture2D( mergeRightMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, paintCol.rgb, paintCol.a);                
                // } else {
                //     // Dash
                //     vec4 dashColor = texture2D( dashedMap, vMapUv );
                //     texelColor.rgb = mix(texelColor.rgb, dashColor.rgb, dashColor.a);
                // }
                
            }

            //// OVERLAY

            if(hasOverlay && vOverlayFactor > 0.0) {
                vec4 overlayCol = texture2D(overlayMap, vRoadUv);
                texelColor.rgb = mix(texelColor.rgb, overlayCol.rgb, vOverlayFactor * overlayCol.a);
            }

            diffuseColor *= texelColor;

        #endif
    `};class Nl extends Ut{constructor(...r){super(...r);T(this,"bridgeIndex");T(this,"bridgeArr");T(this,"shadowIndex");T(this,"shadowArr");T(this,"skipRender",!1);T(this,"lerpConstraints",{paintSolid:null,paintSolidLeft:null,paintSolidRight:null,paintMergeLeft:null,paintMergeRight:null});T(this,"nextSolidLerp",null);this.geo.setAttribute("bridge",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.bridge.setUsage(q),this.bridgeArr=this.geo.attributes.bridge.array,this.geo.setAttribute("shadow",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.shadow.setUsage(q),this.shadowArr=this.geo.attributes.shadow.array,this.geo.setAttribute("paintSolid",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.paintSolid.setUsage(q),this.solidArr=this.geo.attributes.paintSolid.array,this.geo.setAttribute("paintSolidLeft",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.paintSolidLeft.setUsage(q),this.solidLeftArr=this.geo.attributes.paintSolidLeft.array,this.geo.setAttribute("paintSolidRight",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.paintSolidRight.setUsage(q),this.solidRightArr=this.geo.attributes.paintSolidRight.array,this.geo.setAttribute("paintMergeLeft",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.paintMergeLeft.setUsage(q),this.mergeLeftArr=this.geo.attributes.paintMergeLeft.array,this.geo.setAttribute("paintMergeRight",new K(new Float32Array(this.vertCount),1)),this.geo.attributes.paintMergeRight.setUsage(q),this.mergeRightArr=this.geo.attributes.paintMergeRight.array}getMaterial(){return c}getRoadWidth(){return O}initGeneration(...r){var n;super.initGeneration(...r),this.bridgeIndex=0,this.bridgeArr[this.bridgeIndex++]=this.node.bridge?1:0,this.bridgeArr[this.bridgeIndex++]=this.node.bridge?1:0,this.shadowIndex=0,this.shadowArr[this.shadowIndex++]=this.node.shadowLeft??0,this.shadowArr[this.shadowIndex++]=this.node.shadowRight??0,this.solidIndex=0,this.solidLeftIndex=0,this.solidRightIndex=0,this.mergeLeftIndex=0,this.mergeRightIndex=0,this.skipRender=!1,N&&(!this.node.next.bridge&&!((n=this.node.prev)!=null&&n.bridge)&&(this.posArr[this.genIndex-2]-=1,this.posArr[this.genIndex-5]-=1),this.skipRender=!0);let o=this.headNode;for(;o.i<this.tailIndex;)o=o.next;o.paintMergeLeft=0,o.paintMergeRight=0;let l=o.next;o.paintSolidLeftWeight=l.paintSolidLeftWeight,o.paintSolidRightWeight=l.paintSolidRightWeight}customGenNext(r){var o;N&&(!r.next.bridge&&!r.prev.bridge?r.next.next.bridge||(o=r.prev.prev)!=null&&o.bridge?(this.posArr[this.genIndex-2]-=.25,this.posArr[this.genIndex-5]-=.25):(this.posArr[this.genIndex-2]-=1,this.posArr[this.genIndex-5]-=1):this.skipRender=!1),this.shadowArr[this.shadowIndex++]=r.shadowLeft??0,this.shadowArr[this.shadowIndex++]=r.shadowRight??0}getPaintWeight(r,o,l,n,d,f,m,C=!1){let L=this.lerpConstraints[r],h;if(o==l)L!==null?(h=L,this.lerpConstraints[r]=null):h=o?1:0;else{let I=Math.ceil(n),Y=Math.ceil(d);if(I==Y)h=o?1:0;else{let Nt=d-n,se=(I-n)/Nt;if(C&&l&&Y-I>=2&&(se+=(Y-I-1)/Nt),h=L,this.lerpConstraints[r]=null,h==null&&(h=f<se?o?1:0:l?1:0),f<se&&m>se){let hr=(se-f)/(m-f);this.lerpConstraints[r]=h+(.5-h)/hr}}}return h}customGenFine(r,o,l,n,d,f){let m=o.bridge?1:0,C=o.bridge?1:0;this.bridgeArr[this.bridgeIndex++]=m*(1-d)+C*d,this.bridgeArr[this.bridgeIndex++]=m*(1-d)+C*d,r.paintSolid=r.paintSolidLeftWeight>.5&&r.paintSolidRightWeight>.5,o.paintSolid=o.paintSolidLeftWeight>.5&&o.paintSolidRightWeight>.5;let L=this.getPaintWeight("paintSolid",r.paintSolid,o.paintSolid,l,n,d,f);this.solidArr[this.solidIndex++]=L,this.solidArr[this.solidIndex++]=L,r.paintSolidLeft=r.paintSolidLeftWeight>.5,o.paintSolidLeft=o.paintSolidLeftWeight>.5;let h=this.getPaintWeight("paintSolidLeft",r.paintSolidLeft,o.paintSolidLeft,l,n,d,f);this.solidLeftArr[this.solidLeftIndex++]=h,this.solidLeftArr[this.solidLeftIndex++]=h,r.paintSolidRight=r.paintSolidRightWeight>.5,o.paintSolidRight=o.paintSolidRightWeight>.5,h=this.getPaintWeight("paintSolidRight",r.paintSolidRight,o.paintSolidRight,l,n,d,f),this.solidRightArr[this.solidRightIndex++]=h,this.solidRightArr[this.solidRightIndex++]=h,h=this.getPaintWeight("paintMergeLeft",!!r.paintMergeLeft,!!o.paintMergeLeft,l,n,d,f,!0),this.mergeLeftArr[this.mergeLeftIndex++]=h,this.mergeLeftArr[this.mergeLeftIndex++]=h,h=this.getPaintWeight("paintMergeRight",!!r.paintMergeRight,!!o.paintMergeRight,l,n,d,f,!0),this.mergeRightArr[this.mergeRightIndex++]=h,this.mergeRightArr[this.mergeRightIndex++]=h}finalise(){super.finalise(),this.customGenFine(this.node,this.node.next,this.curUV,this.curUV+Ut.uvStep,0,1),this.geo.attributes.bridge.needsUpdate=!0,this.geo.attributes.shadow.needsUpdate=!0,this.geo.attributes.paintSolid.needsUpdate=!0,this.geo.attributes.paintSolidLeft.needsUpdate=!0,this.geo.attributes.paintSolidRight.needsUpdate=!0,this.geo.attributes.paintMergeLeft.needsUpdate=!0,this.geo.attributes.paintMergeRight.needsUpdate=!0,this.mesh.visible=!this.skipRender}regenerateShadows(){for(this.shadowIndex=0,this.node=this.headNode;this.node.next.prev.i<=this.tailIndex;)this.shadowArr[this.shadowIndex++]=this.node.shadowLeft??0,this.shadowArr[this.shadowIndex++]=this.node.shadowRight??0,this.node=this.node.nextFine;this.geo.attributes.shadow.needsUpdate=!0}}const $t=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_Direct_Lambert_Spot( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight, float blend ) {

	// Might be something more intelligent I could do here?

	//saturate( (0.1 - abs(dot( geometry.normal, directLight.direction )) * 0.1 ) * blend );

	float dotNL = 0.1 + (1.0 - abs(dot( geometry.normal, directLight.direction ))) * 0.1;
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_Direct_Spot          RE_Direct_Lambert_Spot
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,ea=`

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );

	}

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		// Could darken it at the bottom...
		// Note that some of the grasses are half-cropped...
		directLight.color *= 0.75 + min(0.25, vUv.y * 4.0);

		// Could also pass this in so we know what to do with the normal?

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		// - max(0.0, (1.0 - vRoadProx)) * (1.0 - vUv.y)
		RE_Direct_Spot( directLight, geometry, material, reflectedLight, 1.0);

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

        //// MAGIC LINE TO OVERRIDE DIRECTIONAL LIGHT SHADOW ////

        // TODO - might be best to change the underlying fragment for the scene?

        directLight.color *= 1.0 - vShadow;

        /////////////////////////////////////////////////////////

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,ts=""+new URL("../assets/noise_fine.592be1a0.webp",import.meta.url).href,as=""+new URL("../assets/noise_finer.98c1753c.webp",import.meta.url).href,Z="data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAAAAAAAAAAAAAAVlA4IBgAAABQAQCdASoBAAEAAUAmJaQABAAAAJrDyABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",rs=""+new URL("../assets/sea_waves.63ff8729.webp",import.meta.url).href,Wt=""+new URL("../assets/signs.c90afd62.webp",import.meta.url).href,is="data:image/webp;base64,UklGRlgBAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSMQAAAANgGPb2rHnPO/7f7/tKlZnlU6mmiH8bezKSWnbH97fGUNETAD1IiCmTGN/vqcn9X57fXHn1MUnZnK/tj8Vu1o8tkFPzv2Vwe9P9vct7/2SnrfLgDL4Z/pKJ1JMGk+EsnLN64J/u6yEMmBEBbWEH3mRuAYoG239eAHeLnpFKc8nLr6HR833fmcsiMZWnn85DM6mmfNALPPFsQWcb420aLzf8M9SVAB7bXu2zTJvKycRP/VvpSUrgolZQuPvs5M3pfh3uUxTVlA4IBgAAAAwAQCdASoQABAAAUAmJaQAA3AA/vz0AABQU0FJTgAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBEMAAAAAAA5QYmVXARAABgBQAAAAAA==",os=`

uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( LEGACY_LIGHTS )

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#else

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		// SR - added a small multiplier to reduce direct brightness on signs
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos ) * 0.2;

		if ( spotAttenuation > 0.0 ) {

			// SR - reduce distance of illumination to simulate retroreflection throw
			// Note can't do this, tricks thingies
			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,D=s(Z),fe=s(ts,4,void 0,R),ss=s(as,4,void 0,R),Ul=s(is,1);function Fl(){he.fog_pars_vertex=mr,he.fog_vertex=vr,he.fog_pars_fragment=Ar,he.fog_fragment=_r}function ls(t,a){var n;Mr({colors:{sky:a.fog.colB,horizon:a.fog.colA,ground:a.ground.grassColA,road:a.colours.road},lights:{sun:a.lights.sun,ambient:a.lights.ambient}}),Bt.length==2&&t=="winter"?i.userData.seasonIndex.value=3:i.userData.seasonIndex.value=Bt.indexOf(t),i.userData.grassMap.value=s(a.maps.grass,4,void 0,void 0),i.userData.forestMap.value=s(a.maps.forest),i.userData.heatherMap.value=s(a.maps.heather),i.userData.gravelMap.value=s(a.maps.gravel),i.userData.sandMap.value=s(a.maps.sand),i.userData.rockMap.value=s(a.maps.rock),i.userData.rockMapBump.value=s(a.maps.rockBump,4,P,R),i.userData.detailNearMap.value=s(a.maps.detailNear,4,P,R),i.userData.detailFarMap.value=s(a.maps.detailFar,4,P,R),i.userData.grassVariationMap.value=s(a.maps.grassVariation,4,P,R),N&&(i.userData.offroadMap.value=s(a.maps.offroadMap,16)),i.userData.grassColA.value=le(a.ground.grassColA),i.userData.grassColB.value=le(a.ground.grassColB),i.userData.peakColA.value=le(a.ground.peakColA),i.userData.peakColB.value=le(a.ground.peakColB),i.userData.fieldDiscolouration.value=Lr(a.ground.fieldDiscolouration),i.userData.radiance.value=a.lights.radiance??0,i.displacementMap=i.userData.rockMapBump.value,i.userData.roadCol.value=le(a.colours.road),i.userData.fresnelIntensity.value=a.lights.fresnelFactor??1,i.userData.offroad.value=N?1:0,i.userData.greenlane.value=F?1:0,S.map=s(a.maps.grassSprites,4,H),y.map=s(a.maps.bushes,2,H);let r;Oe?r=He?a.maps.roadSingle:a.maps.roadSingleWide:r=a.maps.road;let o=!!r.paintDashed;c.userData.hasPaint.value=o,c.map=s(r.base,o?4:16),t=="winter"?c.color.setHex(16777215):c.color.setHex(14540253),c.userData.dashedMap.value=o?s(r.paintDashed,16):void 0,c.userData.mergeLeftMap.value=o?s(r.paintMergeLeft,16):void 0,c.userData.mergeRightMap.value=o?s(r.paintMergeRight,16):void 0,c.userData.solidMap.value=o?s(r.paintSolid,16):void 0,c.userData.solidLeftMap.value=o?s(r.paintSolidLeft,16):void 0,c.userData.solidRightMap.value=o?s(r.paintSolidRight,16):void 0;let l=!!r.overlay;c.userData.hasOverlay.value=l,c.userData.overlayMap.value=l?s(r.overlay,4):void 0,c.userData.textureStretch.value=r.stretch??1,v.radiance.value=a.lights.radiance?a.lights.radiance/2:0,v.discolourationFactor.value=a.effects.treeDiscolouration?a.effects.treeDiscolouration:1,v.hasSnow.value=!!a.effects.hasSnow,p.map=s(a.maps.imposterMap,0,H),p.userData.mapB.value=s(a.maps.imposterMapB,0,H),p.normalMap=s(a.maps.imposterNorm,0,H,R),p.userData.normalMapB.value=s(a.maps.imposterNormB,1,H,R),p.uniformsNeedUpdate=!0,p.alphaTest=a.foliage.imposterAlphaTest;for(let d=0;d<2;d++){let f=d==0?H:P;ke[d].map=s(a.maps.trees[d].d,4,f),d==0?ke[d].normalMap=s(a.maps.trees[d].n,4,f,R):ke[d].alphaMap=s(a.maps.trees[d].n,4,f)}S.alphaTest=a.foliage.grassAlphaTest,y.alphaTest=a.foliage.bushAlphaTest,b.color.setHex(a.water.base),b.userData.body.value.setHex(a.water.body),b.userData.highlight.value.setHex(a.water.highlight),g.map=s(a.maps.clouds,4,void 0,R),g.userData.highlight.value.setHex(a.clouds.highlight),g.userData.lowlight.value.setHex(a.clouds.lowlight),g.userData.shelfHeight0.value=a.clouds.shelfHeight0,g.userData.shelfHeight1.value=a.clouds.shelfHeight1,g.userData.skyScale0.value=a.clouds.skyScale0,g.userData.skyScale1.value=a.clouds.skyScale1,g.userData.mode.value=a.clouds.mode,Ae.map=s(a.maps.walls.barrier,8,P),Ae.normalMap=s(a.maps.walls.barrierNorm,8,void 0,R),wt.map=s(a.maps.walls.seaWall,8,Ft),_e.map=s(a.maps.walls.fence,8,P),_e.normalMap=s(a.maps.walls.fenceNorm,8,void 0,R),xe.map=s(a.maps.walls.drystone,8,P),ta.map=xe.map,aa.map=s(a.maps.bridge,0,Ft),bt.emissiveIntensity=Math.min(a.lights.sun.intensity/20,.5),X.value=((n=a.effects)==null?void 0:n.shadowFactor)??1}function ns(t){fs(t.sea.depth,t.sea.waves)}function ds(t){v.dissolveFar.value=t.lod1Horizon*10,v.dissolveInterval.value=Math.floor(t.lod1Horizon*10*.3),v.dissolveNear.value=v.dissolveFar.value-v.dissolveInterval.value,p.userData.dissolveFar.value=v.dissolveNear.value+v.dissolveInterval.value*.6,p.userData.dissolveInterval.value=v.dissolveInterval.value,p.userData.dissolveNear.value=p.userData.dissolveFar.value-p.userData.dissolveInterval.value,S.userData.sproutFar.value=(t.lod1Horizon*12.5)**2,S.userData.sproutNear.value=(t.lod1Horizon*12.5*.5)**2,y.userData.sproutFar.value=S.userData.sproutFar.value*1.5,y.userData.sproutNear.value=S.userData.sproutNear.value*1.5,g.userData.altitude.value=t.cloudAltitude,i.userData.sinkDist.value=t.lod0Horizon}const ge={value:[4020,8240]},Ol=(t,a)=>{ge.value=[t,a]},i=new M({map:s(Z),displacementMap:s(Z),fog:!0,customProgramCacheKey:()=>"hills_ground"});i.needsCameraPosition=!0;i.userData.grassMap={value:null};i.userData.sandMap={value:null};i.userData.rockMap={value:null};i.userData.rockMapBump={value:null};i.userData.gravelMap={value:null};i.userData.heatherMap={value:null};i.userData.forestMap={value:null};i.userData.detailNearMap={value:null};i.userData.detailFarMap={value:null};i.userData.grassVariationMap={value:null};i.userData.offroadMap={value:null};i.userData.fadeFine={value:fe};i.userData.roadCol={value:[]};i.userData.fresnelIntensity={value:.5};i.userData.radiance={value:0};i.userData.grassColA={value:[]};i.userData.grassColB={value:[]};i.userData.peakColA={value:[]};i.userData.peakColB={value:[]};i.userData.fieldDiscolouration={value:[]};i.userData.vehicleIndex={value:0};i.userData.sinkDist={value:400};i.userData.seasonIndex={value:1};i.userData.offroad={value:0};i.userData.greenlane={value:0};i.onBeforeCompile=t=>(t.uniforms.grassMap=i.userData.grassMap,t.uniforms.sandMap=i.userData.sandMap,t.uniforms.rockMap=i.userData.rockMap,t.uniforms.rockMapBump=i.userData.rockMapBump,t.uniforms.gravelMap=i.userData.gravelMap,t.uniforms.heatherMap=i.userData.heatherMap,t.uniforms.forestMap=i.userData.forestMap,t.uniforms.detailNearMap=i.userData.detailNearMap,t.uniforms.detailFarMap=i.userData.detailFarMap,t.uniforms.grassVariationMap=i.userData.grassVariationMap,t.uniforms.offroadMap=i.userData.offroadMap,t.uniforms.fadeFine=i.userData.fadeFine,t.uniforms.grassColA=i.userData.grassColA,t.uniforms.grassColB=i.userData.grassColB,t.uniforms.peakColA=i.userData.peakColA,t.uniforms.peakColB=i.userData.peakColB,t.uniforms.fieldDiscolouration=i.userData.fieldDiscolouration,t.uniforms.roadCol=i.userData.roadCol,t.uniforms.fresnelIntensity=i.userData.fresnelIntensity,t.uniforms.radiance=i.userData.radiance,t.uniforms.sinkDist=i.userData.sinkDist,t.uniforms.vehicleIndex=i.userData.vehicleIndex,t.uniforms.shadowFactor=X,t.uniforms.seasonIndex=i.userData.seasonIndex,t.uniforms.offroad=i.userData.offroad,t.uniforms.greenlane=i.userData.greenlane,t.uniforms.originOffset=ge,t.vertexShader=t.vertexShader.replace("#include <displacementmap_pars_vertex>",bo+Dt),t.vertexShader=t.vertexShader.replace("#include <displacementmap_vertex>",Mo),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",""),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),t.fragmentShader=t.fragmentShader.replace("#include <map_pars_fragment>",Lo+St),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",yo+Co),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t);const c=new M({map:s(Z),alphaTest:.75,color:14540253,customProgramCacheKey:()=>"hills_road"});c.needsCameraPosition=!0;c.userData.hasPaint={value:!0};c.userData.dashedMap={value:D};c.userData.solidMap={value:D};c.userData.solidLeftMap={value:D};c.userData.solidRightMap={value:D};c.userData.mergeLeftMap={value:D};c.userData.mergeRightMap={value:D};c.userData.textureStretch={value:1};c.userData.overlayMap={value:D};c.userData.hasOverlay={value:!1};c.onBeforeCompile=t=>(t.uniforms.fresnelIntensity=i.userData.fresnelIntensity,t.uniforms.overlayMap=c.userData.overlayMap,t.uniforms.hasOverlay=c.userData.hasOverlay,t.uniforms.textureStretch=c.userData.textureStretch,t.uniforms.hasPaint=c.userData.hasPaint,t.uniforms.dashedMap=c.userData.dashedMap,t.uniforms.mergeLeftMap=c.userData.mergeLeftMap,t.uniforms.mergeRightMap=c.userData.mergeRightMap,t.uniforms.solidMap=c.userData.solidMap,t.uniforms.solidLeftMap=c.userData.solidLeftMap,t.uniforms.solidRightMap=c.userData.solidRightMap,t.uniforms.shadowFactor=X,t.vertexShader=t.vertexShader.replace("#include <displacementmap_pars_vertex>",`#include <displacementmap_pars_vertex>
`+ue.pars_vert+Dr+Dt),t.vertexShader=t.vertexShader.replace("#include <displacementmap_vertex>",`#include <displacementmap_vertex>
`+Sr+ue.vert+$o),t.fragmentShader=t.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float radiance;
`+ue.pars_frag+wr+St),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",ue.frag+es),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>","#include <lights_fragment_begin_shadow>"),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),t);const cs=new Me({depthTest:!0,fog:!0,wireframe:!1,toneMapped:!0,customProgramCacheKey:()=>"hills_sky"});cs.needsCameraPosition=!0;const g=new Me({depthTest:!1,fog:!0,map:D,toneMapped:!0,side:Q,customProgramCacheKey:()=>"hills_cloud"});g.needsCameraPosition=!0;g.userData.highlight={value:new Le(16777215)};g.userData.lowlight={value:new Le(15658734)};g.userData.hasClouds={value:!0};g.userData.camPos={value:new at};g.userData.time={value:0};g.userData.shelfHeight0={value:1e3};g.userData.shelfHeight1={value:1200};g.userData.skyScale0={value:6e3};g.userData.skyScale1={value:3e3};g.userData.mode={value:0};g.userData.altitude={value:200};g.customProgramCacheKey=()=>"hills_clouds";g.onBeforeCompile=t=>(t.uniforms.highlight=g.userData.highlight,t.uniforms.lowlight=g.userData.lowlight,t.uniforms.hasClouds=g.userData.hasClouds,t.uniforms.camPos=g.userData.camPos,t.uniforms.time=g.userData.time,t.uniforms.shelfHeight0=g.userData.shelfHeight0,t.uniforms.shelfHeight1=g.userData.shelfHeight1,t.uniforms.skyScale0=g.userData.skyScale0,t.uniforms.skyScale1=g.userData.skyScale1,t.uniforms.mode=g.userData.mode,t.uniforms.altitude=g.userData.altitude,t.vertexShader=t.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+vo),t.vertexShader=t.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
`+Ao),t.vertexShader=t.vertexShader.replace("#include <fog_pars_vertex>",xo),t.vertexShader=t.vertexShader.replace("#include <fog_vertex>",Do),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",_o),t.fragmentShader=t.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+So),t.fragmentShader=t.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
`+wo),t);let b=new Me({customProgramCacheKey:()=>"hills_water"});b.userData.camPos={value:new at};b.userData.waves={value:s(rs,4,void 0,br)};b.userData.body={value:new Le};b.userData.highlight={value:new Le};b.userData.time={value:0};function fs(t=!1,a=!1){b.defines={},t&&(b.defines.WATER_DEPTH=""),a&&(b.defines.WATER_WAVES=""),b.onBeforeCompile=r=>(r.uniforms.body=b.userData.body,r.uniforms.highlight=b.userData.highlight,r.uniforms.waves=b.userData.waves,r.uniforms.time=b.userData.time,r.uniforms.camPos=b.userData.camPos,r.vertexShader=r.vertexShader.replace("#include <color_pars_vertex>",`#include <color_pars_vertex>
`+Io),r.vertexShader=r.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
`+Ro),r.fragmentShader=r.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
`+Eo),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+To),r)}b.needsCameraPosition=!0;const v={dissolveNear:{value:175},dissolveFar:{value:250},dissolveInterval:{value:75},radiance:{value:.5},discolourationFactor:{value:1},hasSnow:{value:!1}};function Vt(t=!1){let a=new M({map:D,normalMap:t?null:D,alphaMap:t?D:null,alphaTest:t?.4:.5,side:Q,normalMapType:t?null:ye,forceSinglePass:!0,customProgramCacheKey:()=>"hills_tree"});return a.needsCameraPosition=!0,t?a.onBeforeCompile=r=>(r.uniforms.noiseMap={value:fe},r.uniforms.dissolveNear=v.dissolveNear,r.uniforms.dissolveFar=v.dissolveFar,r.uniforms.dissolveInterval=v.dissolveInterval,r.uniforms.discolourationFactor=v.discolourationFactor,r.uniforms.shadowFactor=X,r.uniforms.originOffset=ge,r.vertexShader=r.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+kr),r.vertexShader=r.vertexShader.replace("#include <project_vertex>",Br),r.vertexShader=r.vertexShader.replace("#include <shadowmap_vertex>",Ot),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",Wr),r.fragmentShader=r.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Vr),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+jr),r.fragmentShader=r.fragmentShader.replace("#include <lights_lambert_pars_fragment>",Xr),r.fragmentShader=r.fragmentShader.replace("#include <lights_fragment_begin>",Zr),r.fragmentShader=r.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),r):(a.customProgramCacheKey=()=>"hills_tree_deciduous",a.onBeforeCompile=r=>(r.uniforms.noiseMap={value:fe},r.uniforms.dissolveNear=v.dissolveNear,r.uniforms.dissolveFar=v.dissolveFar,r.uniforms.dissolveInterval=v.dissolveInterval,r.uniforms.radiance=v.radiance,r.uniforms.discolourationFactor=v.discolourationFactor,r.uniforms.shadowFactor=X,r.uniforms.hasSnow=v.hasSnow,r.uniforms.originOffset=ge,r.vertexShader=r.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
`+Nr),r.vertexShader=r.vertexShader.replace("#include <project_vertex>",Ur),r.vertexShader=r.vertexShader.replace("#include <shadowmap_vertex>",Ot),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_begin>",Zt),r.fragmentShader=r.fragmentShader.replace("#include <alphatest_fragment>",Fr),r.fragmentShader=r.fragmentShader.replace("#include <uv_pars_fragment>",`#include <uv_pars_fragment>
`+Or),r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+Hr),r.fragmentShader=r.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+Pr),r.fragmentShader=r.fragmentShader.replace("#include <lights_lambert_pars_fragment>",zr),r.fragmentShader=r.fragmentShader.replace("#include <lights_fragment_begin>",Gr),r.fragmentShader=r.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;"),r)),a}let ke=[Vt(),Vt(!0)];new M({map:D,alphaTest:.25,side:Q,forceSinglePass:!0});new M({color:110832});const p=new M({map:s(Z,0,H),normalMap:s(Z,0,void 0,R),normalMapType:ye,alphaTest:.5,customProgramCacheKey:()=>"hill_imposters"});p.needsCameraPosition=!0;p.userData.noiseMap={value:fe};p.userData.mapB={value:s(Z)};p.userData.normalMapB={value:s(Z)};p.userData.dissolveNear={value:100};p.userData.dissolveFar={value:200};p.userData.dissolveInterval={value:100};p.onBeforeCompile=t=>{t.uniforms.noiseMap=p.userData.noiseMap,t.uniforms.mapB=p.userData.mapB,t.uniforms.normalMapB=p.userData.normalMapB,t.uniforms.dissolveNear=p.userData.dissolveNear,t.uniforms.dissolveFar=p.userData.dissolveFar,t.uniforms.dissolveInterval=p.userData.dissolveInterval,t.uniforms.radiance=v.radiance,t.uniforms.discolourationFactor=v.discolourationFactor,t.uniforms.hasSnow=v.hasSnow,t.uniforms.shadowFactor=X,t.vertexShader=t.vertexShader.replace("#define LAMBERT",`#define LAMBERT
`+No),t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+Fo),t.vertexShader=t.vertexShader.replace("#include <beginnormal_vertex>",Uo+`
`+Oo),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",Ho),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",Zt),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",Go),t.fragmentShader=t.fragmentShader.replace("#define LAMBERT",`#define LAMBERT
`+Po),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",zo),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",ko),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular * totalEmissiveRadiance;")};let gs=.25;const S=new M({map:D,alphaTest:gs,side:Q});S.needsCameraPosition=!0;S.userData.noiseMap={value:fe};S.userData.sproutNear={value:100*100};S.userData.sproutFar={value:200*200};S.userData.vehiclePos={value:new at};S.userData.flatten={value:!1};S.customProgramCacheKey=()=>"hills_grass";S.onBeforeCompile=t=>{t.uniforms.noiseMap=S.userData.noiseMap,t.uniforms.sproutNear=S.userData.sproutNear,t.uniforms.sproutFar=S.userData.sproutFar,t.uniforms.vehiclePos=S.userData.vehiclePos,t.uniforms.flatten=S.userData.flatten,t.uniforms.grassColA=i.userData.grassColA,t.uniforms.grassColB=i.userData.grassColB,t.uniforms.peakColA=i.userData.peakColA,t.uniforms.peakColB=i.userData.peakColB,t.uniforms.grassVariationMap=i.userData.grassVariationMap,t.uniforms.detailFarMap=i.userData.detailFarMap,t.uniforms.fresnelIntensity=i.userData.fresnelIntensity,t.uniforms.radiance=i.userData.radiance,t.uniforms.shadowFactor=X,t.uniforms.seasonIndex=i.userData.seasonIndex,t.uniforms.originOffset=ge,t.vertexShader=t.vertexShader.replace("#include <common>","#include <common>"+Bo+Dt),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",""+Wo),t.fragmentShader=t.fragmentShader.replace("#include <common>","#include <common>"+Vo+St),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",Xo+`
`+Zo),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",jo),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",$t),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",ea),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};let hs=.5;const y=new M({map:D,alphaTest:hs,side:Q,forceSinglePass:!0,customProgramCacheKey:()=>"hills_bush"});y.needsCameraPosition=!0;y.userData.noiseMap={value:ss};y.userData.sproutNear={value:100*100};y.userData.sproutFar={value:200*200};y.userData.sproutMargin={value:y.userData.sproutFar.value-y.userData.sproutNear.value};y.onBeforeCompile=t=>{t.uniforms.noiseMap=y.userData.noiseMap,t.uniforms.sproutNear=y.userData.sproutNear,t.uniforms.sproutFar=y.userData.sproutFar,t.uniforms.sproutMargin=y.userData.sproutMargin,t.uniforms.radiance=i.userData.radiance,t.uniforms.shadowFactor=X,t.uniforms.vehiclePos=S.userData.vehiclePos,t.uniforms.flatten=S.userData.flatten,t.vertexShader=t.vertexShader.replace("#include <common>","#include <common>"+Qo),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",""+Yo),t.fragmentShader=t.fragmentShader.replace("#include <common>","#include <common>"+Ko),t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",Jo),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",qo),t.fragmentShader=t.fragmentShader.replace("#include <lights_lambert_pars_fragment>",$t),t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_begin>",ea),t.fragmentShader=t.fragmentShader.replace("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;","vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directDiffuse * totalEmissiveRadiance;")};const Ae=new M({map:D,normalMap:D,color:14540253,alphaTest:.5,side:Q,normalMapType:ye,forceSinglePass:!0,customProgramCacheKey:()=>"hills_barrier"});Ae.onBeforeCompile=Ce();Ae.needsCameraPosition=!0;const wt=new M({map:D,flatShading:!0});wt.onBeforeCompile=Ce();wt.needsCameraPosition=!0;const _e=new M({map:D,normalMap:D,flatShading:!0,alphaTest:.25,side:Q,normalMapType:ye,forceSinglePass:!0,customProgramCacheKey:()=>"hills_fence"});_e.onBeforeCompile=Ce();_e.needsCameraPosition=!0;const xe=new M({map:D,flatShading:!0,color:14540253});xe.onBeforeCompile=Ce();xe.needsCameraPosition=!0;const ta=new M({map:D,flatShading:!0,side:Q});ta.needsCameraPosition=!0;const Fe={white:new M({color:16777215,emissive:16777215,emissiveIntensity:.2}),black:new M({color:3355443,flatShading:!0}),reflect:new M({color:16720418,emissive:16720418,emissiveIntensity:.2})};Fe.white.needsCameraPosition=!0;Fe.black.needsCameraPosition=!0;Fe.reflect.needsCameraPosition=!0;const bt=new M({map:s(Wt,4,H),flatShading:!0,alphaTest:.75,emissive:16777215,emissiveMap:s(Wt,4),emissiveIntensity:0,customProgramCacheKey:()=>"hills_signs"});bt.onBeforeCompile=t=>(t.fragmentShader=t.fragmentShader.replace("#include <lights_pars_begin>",os),t);bt.needsCameraPosition=!0;const aa=new M({map:D,color:12303291,flatShading:!0,customProgramCacheKey:()=>"hills_bridge"});aa.needsCameraPosition=!0;const us=new Me({color:0,transparent:!0,opacity:.4});us.needsCameraPosition=!0;const ps=""+new URL("../assets/tree_05.d68751e5.obj",import.meta.url).href,ms=""+new URL("../assets/tree_06.693be0d9.obj",import.meta.url).href,vs=""+new URL("../assets/tree_07.1fef5d95.obj",import.meta.url).href,As=""+new URL("../assets/tree_08.b8bd204c.obj",import.meta.url).href,_s="data:model/obj;base64,IyBCbGVuZGVyIHYyLjkyLjAgT0JKIEZpbGU6ICcnCiMgd3d3LmJsZW5kZXIub3JnCm10bGxpYiB2ZXJnZW1hcmtlci5tdGwKbyB2ZXJnZW1hcmtlcl9ibGFjawp2IDAuMDU0OTMyIDAuNzY1NzEyIC0wLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjc2NTcxMiAtMC4wMjA2NDAKdiAtMC4wNTQ5MzIgMC43NjU3MTIgMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjc2NTcxMiAwLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjUzMzY4NyAwLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjUzMzY4NyAtMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjUzMzY4NyAtMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjUzMzY4NyAwLjAyMDY0MAp2IDAuMDU0OTMyIC0wLjE3NDk0NiAwLjAyMDY0MAp2IDAuMDU0OTMyIDAuMjUxMTc1IDAuMDIwNjQwCnYgLTAuMDU0OTMyIDAuMjUxMTc1IDAuMDIwNjQwCnYgLTAuMDU0OTMyIC0wLjE3NDk0NiAwLjAyMDY0MAp2IC0wLjA1NDkzMiAwLjI1MTE3NSAtMC4wMjA2NDAKdiAtMC4wNTQ5MzIgLTAuMTc0OTQ2IC0wLjAyMDY0MAp2IDAuMDU0OTMyIC0wLjE3NDk0NiAtMC4wMjA2NDAKdiAwLjA1NDkzMiAwLjI1MTE3NSAtMC4wMjA2NDAKdiAwLjAzODA5NiAwLjc0ODg3NSAwLjAyMDY0MAp2IDAuMDM4MDk2IDAuNTUwNTIzIDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNTUwNTIzIDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNzQ4ODc1IDAuMDIwNjQwCnZ0IDAuNjI1MDAwIDAuNTAwMDAwCnZ0IDAuODc1MDAwIDAuNTAwMDAwCnZ0IDAuODc1MDAwIDAuNzUwMDAwCnZ0IDAuNjI1MDAwIDAuNzUwMDAwCnZ0IDAuNTUyMjI0IDAuMDAwMDAwCnZ0IDAuNjI1MDAwIDAuMDAwMDAwCnZ0IDAuNjI1MDAwIDAuMjUwMDAwCnZ0IDAuNTUyMjI0IDAuMjUwMDAwCnZ0IDAuNTUyMjI0IDAuNTAwMDAwCnZ0IDAuNTUyMjI0IDAuNzUwMDAwCnZ0IDAuMzc1MDAwIDAuNzUwMDAwCnZ0IDAuNDYzNjEyIDAuNzUwMDAwCnZ0IDAuNDYzNjEyIDEuMDAwMDAwCnZ0IDAuMzc1MDAwIDEuMDAwMDAwCnZ0IDAuMzc1MDAwIDAuMDAwMDAwCnZ0IDAuNDYzNjEyIDAuMDAwMDAwCnZ0IDAuNDYzNjEyIDAuMjUwMDAwCnZ0IDAuMzc1MDAwIDAuMjUwMDAwCnZ0IDAuMzc1MDAwIDAuNTAwMDAwCnZ0IDAuNDYzNjEyIDAuNTAwMDAwCnZ0IDAuNjE5NzE5IDAuNzg4MzEyCnZ0IDAuNTU3NTA1IDAuNzg4MzEyCnZ0IDAuNTU3NTA1IDAuOTYxNjg4CnZ0IDAuNTUyMjI0IDEuMDAwMDAwCnZ0IDAuNjE5NzE5IDAuOTYxNjg4CnZ0IDAuNjI1MDAwIDEuMDAwMDAwCnZuIDAuNTc3NCAwLjU3NzQgLTAuNTc3NAp2biAtMC41Nzc0IDAuNTc3NCAtMC41Nzc0CnZuIC0wLjU3NzQgMC41Nzc0IDAuNTc3NAp2biAwLjU3NzQgMC41Nzc0IDAuNTc3NAp2biAtMC43MDcxIC0wLjAwMDAgMC43MDcxCnZuIC0wLjcwNzEgMC4wMDAwIC0wLjcwNzEKdm4gMC43MDcxIDAuMDAwMCAtMC43MDcxCnZuIDAuNzA3MSAtMC4wMDAwIDAuNzA3MQp2biAwLjAwMDAgLTAuMDAwMCAxLjAwMDAKdXNlbXRsIERlZmF1bHRfT0JKCnMgMQpmIDEvMS8xIDIvMi8yIDMvMy8zIDQvNC80CmYgNS81LzUgMy82LzMgMi83LzIgNi84LzYKZiA3LzkvNyAxLzEvMSA0LzQvNCA4LzEwLzgKZiA2LzgvNiAyLzcvMiAxLzEvMSA3LzkvNwpmIDkvMTEvOCAxMC8xMi84IDExLzEzLzUgMTIvMTQvNQpmIDEyLzE1LzUgMTEvMTYvNSAxMy8xNy82IDE0LzE4LzYKZiAxNS8xOS83IDE2LzIwLzcgMTAvMTIvOCA5LzExLzgKZiAxNC8xOC82IDEzLzE3LzYgMTYvMjAvNyAxNS8xOS83CmYgMTcvMjEvOSAxOC8yMi85IDgvMTAvOCA0LzQvNApmIDE4LzIyLzkgMTkvMjMvOSA1LzI0LzUgOC8xMC84CmYgMjAvMjUvOSAxNy8yMS85IDQvNC80IDMvMjYvMwpmIDE5LzIzLzkgMjAvMjUvOSAzLzI2LzMgNS8yNC81Cm8gdmVyZ2VtYXJrZXJfd2hpdGVfYm9sbGFyZC4wMDEKdiAtMC4wNTQ5MzIgMC4yNTExNzUgLTAuMDIwNjQwCnYgLTAuMDU0OTMyIDAuNTMzNjg3IC0wLjAyMDY0MAp2IDAuMDU0OTMyIDAuNTMzNjg3IC0wLjAyMDY0MAp2IDAuMDU0OTMyIDAuMjUxMTc1IC0wLjAyMDY0MAp2IDAuMDU0OTMyIDAuNTMzNjg3IDAuMDIwNjQwCnYgMC4wNTQ5MzIgMC4yNTExNzUgMC4wMjA2NDAKdiAtMC4wNTQ5MzIgMC4yNTExNzUgMC4wMjA2NDAKdiAtMC4wNTQ5MzIgMC41MzM2ODcgMC4wMjA2NDAKdnQgMC40NjM2MTIgMC4yNTAwMDAKdnQgMC41NTIyMjQgMC4yNTAwMDAKdnQgMC41NTIyMjQgMC41MDAwMDAKdnQgMC40NjM2MTIgMC41MDAwMDAKdnQgMC41NTIyMjQgMC43NTAwMDAKdnQgMC40NjM2MTIgMC43NTAwMDAKdnQgMC40NjM2MTIgMC4wMDAwMDAKdnQgMC41NTIyMjQgMC4wMDAwMDAKdnQgMC41NTIyMjQgMS4wMDAwMDAKdnQgMC40NjM2MTIgMS4wMDAwMDAKdm4gMC4wMDAwIDAuMDAwMCAtMS4wMDAwCnZuIDEuMDAwMCAtMC4wMDAwIDAuMDAwMAp2biAtMS4wMDAwIDAuMDAwMCAwLjAwMDAKdm4gMC4wMDAwIC0wLjAwMDAgMS4wMDAwCnVzZW10bCBEZWZhdWx0X09CSgpzIDEKZiAyMS8yNy8xMCAyMi8yOC8xMCAyMy8yOS8xMCAyNC8zMC8xMApmIDI0LzMwLzExIDIzLzI5LzExIDI1LzMxLzExIDI2LzMyLzExCmYgMjcvMzMvMTIgMjgvMzQvMTIgMjIvMjgvMTIgMjEvMjcvMTIKZiAyNi8zMi8xMyAyNS8zMS8xMyAyOC8zNS8xMyAyNy8zNi8xMwpvIHZlcmdlbWFya2VyX3JlZmxlY3QKdiAwLjAzODA5NiAwLjU1MDUyMyAwLjAyMDY0MAp2IDAuMDM4MDk2IDAuNzQ4ODc1IDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNzQ4ODc1IDAuMDIwNjQwCnYgLTAuMDM4MDk2IDAuNTUwNTIzIDAuMDIwNjQwCnZ0IDAuNTU3NTA1IDAuNzg4MzEyCnZ0IDAuNjE5NzE5IDAuNzg4MzEyCnZ0IDAuNjE5NzE5IDAuOTYxNjg4CnZ0IDAuNTU3NTA1IDAuOTYxNjg4CnZuIDAuMDAwMCAtMC4wMDAwIDEuMDAwMAp1c2VtdGwgRGVmYXVsdF9PQkoKcyAxCmYgMjkvMzcvMTQgMzAvMzgvMTQgMzEvMzkvMTQgMzIvNDAvMTQK";let U=1e3,ra={},ia=30,pe={},Mt=400,oa,O,Lt,yt=16,re=.4,Oe=!1,He=!1,sa=!0,N=!1,F=!1,xs=2.5,Ds=12,We=3,Ve=2,me=.2,la=[1.5],na=3,Ss=[.6,.3,.75,.7,.8,1,1,1],je,ws=20,ne,bs,Ms,Xe,de,Ze,da,ca=.5,fa=.8,ga=1,Ls=.5,ha=.7,ua=.75,pa=.85,ys=.5,ma=.025,va=.3,Aa=.2,Cs=0,Is=.4,Rs=.8,Es=1,Ts=1,_a=0,xa=1,Da,Sa,wa,oe,De,Ct,ee,Se,It,ba,$,Rt,Ma,La,ya,Ca,Ia={},Ns=30,Us=.6,Ra=256,Ea={},Ta=5e3,Fs=-.3,Os=11,Hs=4,Ps=2,zs=1.8,Gs=.7,ks=.7,Na=!0,Ua=2,Fa=5e3;const Bs=[[Qr,Yr,Kr,qr],[ps,ms,vs,As]];let Ws=!1,Qe=1e4,Vs=.8,js=1.5,Xs=.7,ve=20,Zs=40,ie=1,Oa=!1,Ha=4e3,Qs=.65,Ys=1,Pa=!0,we=30,Ks=3,Et=4,za=we/2-Et;const qs={BridgeWall:0,SeaWall:1,Barrier:2,Fence:3,Drystone:4};let Tt=2,Ga=O+Tt;const Js=2,ka=.19,$s=.38,el=.12,tl=1.12,al=ka*2,Ba=.475,rl=(1-Ba)*2,il=5;let Ye=2,Ke=1.5,qe=.4,Je=.2,$e=.4,et=.8,ol=4,Wa=10;const sl={VergeMarker:{src:_s,materials:Fe,retireMargin:10}};let Va=25,ja=10,Xa=100,ll=35,nl=3,dl=.75,Za=!1,ce=4,Qa=[];const cl=[1,.25,0,.25,1],fl=[1,.444,.111,0,.111,.444,1],gl=[1,.565,.25,.0625,0,.0625,.25,.565,1],hl=[1,.64,.36,.16,.04,0,.04,.16,.36,.64,1];let Ya=200,tt=1600,Ka=20,qa=!1,Ja=!1,$a=!1,er=!1,tr=!1,ar=1e3,rr=150,ir=!0,or=1,sr=!0,lr=!1;const ul=15,nr=220,pl=nr/2,ml=.5,vl=.15,Al=.7;let dr=40;const _l=(t,a)=>{let r=te.graphics.viewDistance[t],o=te.graphics.detail[a];ia=r.heightmapMaxCached,U=r.tileSize*2,r.tileSize<300&&(console.log("Small tiles, reducing fwd view distance"),U*=.75),Se=a>2,Ct=U*oe,ee=U*De,It=Math.sqrt(5/(ee*ee)),fr(),oa=r.roadNodes,je=r.tileSize,N?ne=24:ne=o.cellRes,Xe=r.lod0Horizon,de=r.lod1Horizon,Va=de*2,ja=de/2,Ra=o.shadowRes,Ze=Math.max(1,Math.floor(o.sea.res*(je/20))),da=Ze+1,Na=ze.detailTrees,Ua=o.trees.typeCount,Ta=r.imposterInstanceSize,Fa=r.treeInstanceSize,we=r.maxWallLength,za=we/2-Et,Wa=r.objectDespawnHorizon,Xa=r.bridgeLookahead,Za=o.bridges.genArches,ce=o.bridges.segments,Qa=ce==4?cl:ce==6?fl:ce==8?gl:hl,Ya=r.cloudAltitude,tt=r.cloudScale,Ka=Math.max(20,tt/400),ve=o.grass.margin,ie=o.grass.density,ze.grassDensity!==yr.Auto&&(ie=(ze.grassDensity-1)/3,ve=12+ie*16),Qe=ne*ne*ie*de*(1+ve/12),Ha=Qe*.2,Oa=ie==0,ar=r.fieldMapScale,rr=r.midlineIndexMargin,Mt=r.midlineFineHorizon,ir=o.fields.render,sr=o.fields.col,lr=o.fields.boundary,or=o.fields.treeDensity,dr=Xe,ns(o),ds(r)},xl=t=>{let a=t.roadStyle,r=Cr[t.laneStyle];N=!1,F=!1,(t.laneStyle==z.OffRoad||t.laneStyle==z.OffRoadWide)&&(N=!0,F=t.laneStyle==z.OffRoad,We=F?.25:1,me=F?.1:.2,Ve=F?.4:1);let o=te.roads,l=te.roads.style[a],n;r==0?n=o.laneWidth.single:n=o.laneWidth.compound;let d;t.laneStyle==z.OffRoadWide||t.laneStyle==z.SingleWide?(d=n.wide,t.laneStyle==z.OffRoadWide&&(d=n.wideOffroad)):d=n.standard;let f=0,m=[];if(r==0)m.push(0),f=d/2;else{let C=.1,L=.2;f=C;for(let h=0;h<r;h++)f+=d,m.push(f-d/2);f+=L}ra=l.heightmap,Ea=l.treemap,pe=l.midline,pe.fineHorizon=Mt,pe.oneDir=!0,O=f,na=d,la=m,Lt=f/2,Oe=r==0,He=t.laneStyle==z.Single||t.laneStyle==z.OffRoad,cr()},cr=()=>{Ga=Tt+O,yt=20-O,He?(Ye=4,Ke=2.5,qe=1,Je=.5,$e=.8,et=1.2):(Ye=2,Ke=1.5,qe=.3,Je=.15,$e=.4,et=.8),sa=!N&&!Oe};function fr(){if($=Rt,$<=0&&U<2e3){let t=U/2e3;$=(1+$)/2*t*2-1,$<-1&&($=-1)}}const Dl=t=>{var r;let a={...te.style[t.season].common,...te.style[t.season][t.time][t.weather]};ga=a.friction.road,ca=a.friction.grass,fa=a.friction.gravel,pa=a.slip.road,ha=a.slip.grass,ua=a.slip.gravel,ma=a.roughness.road,va=a.roughness.grass,Aa=a.roughness.gravel,Da=a.fog.colA,Sa=a.fog.colB,wa=a.fog.colC??a.fog.colB,Ma=a.water.underwater,La=a.water.body,Pa=!((r=a.effects)!=null&&r.frozenWater),oe=a.fog.near,De=a.fog.far,Ct=U*oe,ee=U*De,It=Math.sqrt(5/(ee*ee)),ba=a.fog.hazeHeight??0,Rt=a.fog.hazeIntensity??0,fr(),ya=a.colours.clear,Ja=!!a.stars,$a=a.stars,er=!!a.snow,tr=a.snow,Ca=a.lights,_a=a.surfaces.road,xa=a.surfaces.offroad,qa=a.clouds.hasClouds!==!1,Ia=a.audio,ls(t.season,a)};let Sl=te.styleMeta.presets;const wl=new be({scale:.03,offset:0,resolution:7,depth:2,upscale:3,tileSize:40,spiralise:!1,repeated:!0}),jt=new be({scale:.5,offset:0,resolution:5,depth:3,upscale:3,tileSize:25,spiralise:!1,repeated:!0}),bl=new be({scale:5,offset:0,resolution:5,depth:2,upscale:2,tileSize:200,spiralise:!1,repeated:!0}),Ml=new be({scale:8,offset:1,resolution:7,depth:2,upscale:3,tileSize:100,spiralise:!1,repeated:!0}),u={},Ll=(t,a,r,o)=>{var n,d;u.h=0,a.h=a.n.h+a.t*(a.n.next.h-a.n.h),a.gfa=a.n.gfa+a.t*(a.n.next.gfa-a.n.gfa),a.gt=a.n.g+a.t*(a.n.next.g-a.n.g),a.s==Math.sign(a.g)?a.ga=Math.max(0,Math.abs(a.gt)-1)/3:a.ga=0,a.rd=a.d,N?(a.rd=a.d,a.w=O,F?a.w+=re*2:a.w+=re+a.ga,u.widthLerp=1,a.d<a.w&&(u.widthLerp=a.d/a.w),a.d+=.4,F?(a.d+=.2,isNaN(r)&&(console.log("Nan stuff"),console.log(t),console.log(a),console.log(r,o)),a.d+=jt.getXZ(r,o)*.5):a.d+=jt.getXZ(r,o)):a.w=O+re+.25+a.ga,a.y-=.01+.01*a.gfa,a.ga=Math.min(1,Math.max(0,a.ga))**2,a.blend=a.n.blend+a.t*(a.n.next.blend-a.n.blend),u.rm=yt*(.4+.6*a.blend);let l=(a.d-a.w)/16;if(l<0&&(l=0),l>1&&(l=1),l=(1-l)**2,l>0&&(t+=l*bl.getXZ(r,o),a.ga>0&&(t+=Ml.getXZ(r,o)*l*a.ga)),a.d<a.w+u.rm){if(!N&&a.d<Lt&&!a.n.bridge)return a.y;if(u.lt=Math.max(0,Math.min(1,(a.d-a.w)/u.rm)),u.lt=gr(u.lt),N){let f=1-a.ga;if(f>0&&(a.rd<a.w?t+=We*f:t+=Xt(1-(a.rd-a.w)/u.rm)*We*f),a.d<a.w-Ve){if(F&&a.d<1.7){let I=Xt(1-a.d/1.7);a.y+=I*me*2}}else if(a.d<a.w){let I=1-(a.w-a.d)/Ve;I*=I,a.y+=I*me}else a.d<a.w+5&&(a.y+=me*(Math.cos(Math.PI*(a.d-a.w)/5)+1)/2);a.y+=wl.getXZ(r,o);let m=a.t;a.slope=a.n.bank*(1-m)+a.n.next.bank*m;let C=a.s;a.slope<0&&(C*=-1);let L=(u.widthLerp*C+1)/2;L=L*L*2-1;let h=F?.5:1;a.y+=Math.abs(a.slope)*L*h}if(u.h=t,u.rd=a.d-a.w,a.n.bridge&&((n=a.n.next)!=null&&n.bridge)){a.n.next.next.bridge?(d=a.n.prev)!=null&&d.bridge?u.lt=1:u.lt=Math.max(a.t,u.lt):u.lt=Math.max(1-a.t,u.lt);let f=4;if(a.d<O+re+f&&u.h>a.y){let m=1-Math.max(0,(O+re+f-a.d)/f),C=u.lt*.33;m=(m-C)*(1/(1-C)),u.lt=m}}return u.h*u.lt+a.y*(1-u.lt)}return t},Xt=t=>(t*(t*6-15)+10)*t*t*t,gr=t=>t>.3333?(u.lerp=1-(t-.3333)/.6667,1-u.lerp*u.lerp*.5):t*1.5,Hl=Object.freeze(Object.defineProperty({__proto__:null,get ANIMATE_WATER(){return Pa},get AUDIO(){return Ia},AUDIO_WIND_SPEED:Ns,AUDIO_WIND_VOL:Us,get BARRIER_DIST(){return $e},get BARRIER_GRADIENT_MAINT(){return Ke},get BARRIER_GRADIENT_THRESHOLD(){return Ye},get BARRIER_TURN_MAINT(){return Je},get BARRIER_TURN_THRESHOLD(){return qe},get BRIDGE_GEN_ARCHES(){return Za},get BRIDGE_HEIGHTS(){return Qa},get BRIDGE_LOOKAHEAD(){return Xa},BRIDGE_MAX_NODES:ll,BRIDGE_MIN_NODES:nl,get BRIDGE_SEGMENTS(){return ce},BRIDGE_WALL_HEIGHT:dl,get BUSH_INSTANCE_SIZE(){return Ha},BUSH_SPRITE_DENSITY:Ys,BUSH_SPRITE_MIN_FLATNESS:Qs,get CELL_RES(){return ne},CELL_SIZE:ws,get CLEAR_COL(){return ya},get CLOUD_ALTITUDE(){return Ya},get CLOUD_RES(){return Ka},get CLOUD_SCALE(){return tt},get DRYSTONE_DIST(){return Ga},DRYSTONE_GRADIENT_THRESHOLD:Js,DRYSTONE_HEIGHT:tl,DRYSTONE_MARGIN:Tt,DRYSTONE_SINK:el,DRYSTONE_UV_HEIGHT:Ba,DRYSTONE_UV_SCALE:il,DRYSTONE_UV_WIDTH:rl,DRYSTONE_WIDTH:al,DRYSTONE_WIDTH_BOTTOM:$s,DRYSTONE_WIDTH_TOP:ka,get FIELD_HAS_BOUNDARY(){return lr},get FIELD_HAS_COL(){return sr},get FIELD_HAS_RENDER(){return ir},get FIELD_MAP_SCALE(){return ar},FIELD_MAX_GRADE:Al,FIELD_MAX_HEIGHT:nr,FIELD_MAX_HEIGHT_HALF:pl,FIELD_MAX_TREE_DENSITY:vl,FIELD_MIN_HEIGHT:ul,FIELD_PROBABILITY_THRESHOLD:ml,get FIELD_TREE_DENSITY(){return or},get FOG_COL_A(){return Da},get FOG_COL_B(){return Sa},get FOG_COL_C(){return wa},get FOG_DENSITY(){return It},get FOG_EXP2(){return Se},get FOG_FAR(){return ee},get FOG_FAR_FACTOR(){return De},get FOG_HAZE_HEIGHT(){return ba},get FOG_HAZE_INTENSITY(){return $},get FOG_HAZE_INTENSITY_NOMINAL(){return Rt},get FOG_NEAR(){return Ct},get FOG_NEAR_FACTOR(){return oe},FOLIAGE_SPRITE_MIN_FLATNESS:Xs,get FWD_VIEW_DISTANCE(){return U},GRASS_BOUNCE:Is,get GRASS_FRICTION(){return ca},get GRASS_ROUGHNESS(){return va},get GRASS_SLIP(){return ha},get GRASS_SPRITE_DENSITY(){return ie},get GRASS_SPRITE_INSTANCE_SIZE(){return Qe},get GRASS_SPRITE_MARGIN(){return ve},GRASS_SPRITE_MIN_ELEVATION:js,GRASS_SPRITE_SCALE:Vs,GRASS_SPRITE_SINK_FACTOR:Zs,GRAVEL_BOUNCE:Rs,get GRAVEL_FRICTION(){return fa},get GRAVEL_ROUGHNESS(){return Aa},get GRAVEL_SLIP(){return ua},get HAS_CLOUDS(){return qa},get HAS_SNOW(){return er},get HAS_STARS(){return Ja},get HEIGHTMAP(){return ra},get HEIGHTMAP_MAX_CACHED(){return ia},ICE_BOUNCE:Ts,ICE_FRICTION:Ls,ICE_ROUGHNESS:Cs,ICE_SLIP:ys,get IS_GREENLANE(){return F},get IS_OFFROAD(){return N},LANE_CAUTION_FACTORS:Ss,get LANE_OFFSETS(){return la},get LANE_WIDTH(){return na},get LIGHTS(){return Ca},get LOD_0_HORIZON(){return Xe},get LOD_1_HORIZON(){return de},get MAX_WALL_LENGTH(){return we},get MIDLINE(){return pe},get MIDLINE_FINE_HORIZON(){return Mt},get MIDLINE_INDEX_MARGIN(){return rr},MIN_WALL_GAP:Et,MIN_WALL_LENGTH:Ks,get OBJECT_DESPAWN_MARGIN(){return Wa},OBJECT_LIBRARY:sl,get OFFROAD_SURFACE(){return xa},PRESETS:Sl,ROAD_BOUNCE:Es,ROAD_BUMP_MARGIN:Ds,ROAD_BUMP_SIDING:xs,get ROAD_FRICTION(){return ga},get ROAD_IS_NARROW(){return He},get ROAD_IS_SINGLE_TRACK(){return Oe},get ROAD_MARGIN(){return yt},get ROAD_NODES(){return oa},get ROAD_ROUGHNESS(){return ma},ROAD_SIDING:re,get ROAD_SLIP(){return pa},get ROAD_SURFACE(){return _a},get ROAD_WIDTH(){return O},get ROAD_WIDTH_HALF(){return Lt},get SEAWALL_DIST(){return et},SEAWALL_ELEV:ol,get SEA_RES(){return Ze},get SEA_RES_1(){return da},get SHADOW_RES(){return Ra},get SHOW_CATS_EYES(){return sa},SHOW_GRASS:Ws,get SIGN_LOOKAHEAD(){return Va},get SIGN_RETIRE_HORIZON(){return ja},get SKIP_FOLIAGE(){return Oa},get SNOW_CONFIG(){return tr},get STAR_CONFIG(){return $a},TILE_LOOKAHEAD_HORIZON:bs,get TILE_SIZE(){return je},TILE_STAGE_HORIZON:Ms,get TRAFFIC_HORIZON(){return dr},get TREEMAP(){return Ea},get TREE_HAS_3D(){return Na},TREE_MIN_ELEV:Ps,TREE_MIN_FLATNESS:Gs,TREE_MIN_FLATNESS_FAR:ks,get TREE_MODEL_INSTANCE_SIZE(){return Fa},TREE_OBJECTS:Bs,TREE_ROAD_MARGIN:zs,get TREE_SPRITE_INSTANCE_SIZE(){return Ta},TREE_SPRITE_OFFSET:Fs,TREE_SPRITE_SCALE:Os,get TREE_TYPE_COUNT(){return Ua},TREE_VARIANT_COUNT:Hs,get UNDERWATER_COL(){return Ma},get UNDERWATER_COL_SURFACE(){return La},get WALL_LENGTH_BACKFILL(){return za},WallType:qs,applyRoadWidth:cr,getRoadBlendedHeight:Ll,loadAestheticSettings:Dl,loadGraphicsSettings:_l,loadWorldSettings:xl,roadLerp:gr},Symbol.toStringTag,{value:"Module"})),e={id:0},w={},Be={};class Pl extends xr{constructor(r={}){super(r);T(this,"debug",!0);T(this,"config",{seed:"a",scale:1,offset:0,resolution:5,upresFactor:2,depth:3,depthHeightFactor:1,layerResolutions:[3,6,9],squared:!1,temper:!1,temperBelow:100,temperMin:.25,spiralise:!0,maxCached:32,tileScaleRandom:0});T(this,"distortMap");T(this,"protoTile",null);this.config={...this.config,...r},this.config.layerResolutions.length?this.config.depth=this.config.layerResolutions.length:this.generateLayerResolutions()}generateLayerResolutions(){let r=this.config.resolution;for(let o=0;o<this.config.depth;o++)this.layerResolutions.push(r),r=r+this.config.upresFactor*(o+1)}generateTile(r,o){if(this.config.repeated&&this.protoTile)return this.protoTile;let l=[],n;this.config.repeated?n=new window.alea(this.config.seed):n=new window.alea(this.config.seed+"#"+this.curLayer[r<0?0:1]+"#"+r+"#"+o);let d=1+n()*this.config.tileScaleRandom-this.config.tileScaleRandom/2,f,m,C,L=this.config.depthHeightFactor;for(f=0;f<this.config.depth;f++){m=this.config.layerResolutions[f],C=this.config.resolution/m*L,L*=this.config.depthHeightFactor;let h=[],I=1/m,Y;for(w.i=0;w.i<m;w.i++){for(Y=[],w.j=0;w.j<m;w.j++)w.h=n()*2-1,this.config.squared&&(w.h<0?w.h*=-(w.h*(1+w.h))*4:w.h*=w.h*(1-w.h)*4),w.h*=C,Y.push({x:(w.i+.5)/m,y:w.h*this.config.scale*d,z:(w.j+.5)/m,r:I,r2:I*I});h.push(Y)}l.push(h)}return this.config.repeated&&(this.protoTile=l),l}roadLerp(r){return r>.3333?(Be.lerp=1-(r-.3333)/.6667,1-Be.lerp*Be.lerp*.5):r*1.5}getCurvature(r,o){return 0}getMidlineXZ(r,o){return this.getXZ(r,o)}getXZ(r,o,l=null,n=!1){e.d=0,e.h=0,e.heightFactor=1,e.sq=this.config.layerResolutions[0],e.sqb=e.sq-1,e.wx=r/this.tileSize,e.wz=o/this.tileSize,e.ox=Math.floor(e.wx),e.oz=Math.floor(e.wz),e.px=e.wx-e.ox,e.pz=e.wz-e.oz,e.tile=this.getTile(e.ox,e.oz),l=l||this.config.depth,e.depth=0;for(e.layer of e.tile){if(e.depth==l)break;e.ix=Math.floor(e.px*e.sq-.5),e.iz=Math.floor(e.pz*e.sq-.5),e.th=0,e.ix>=0?(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix][e.iz]):e.th+=this.lerpHeight(e.d,e.px,e.pz+1,this.getTile(e.ox,e.oz-1)[e.depth][e.ix][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px,e.pz-1,this.getTile(e.ox,e.oz+1)[e.depth][e.ix][0])):(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px+1,e.pz,this.getTile(e.ox-1,e.oz)[e.depth][e.sqb][e.iz]):e.th+=this.lerpHeight(e.d,e.px+1,e.pz+1,this.getTile(e.ox-1,e.oz-1)[e.depth][e.sqb][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px+1,e.pz,this.getTile(e.ox-1,e.oz)[e.depth][e.sqb][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px+1,e.pz-1,this.getTile(e.ox-1,e.oz+1)[e.depth][e.sqb][0])),e.ix<e.sqb?(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix+1][e.iz]):e.th+=this.lerpHeight(e.d,e.px,e.pz+1,this.getTile(e.ox,e.oz-1)[e.depth][e.ix+1][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix+1][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px,e.pz-1,this.getTile(e.ox,e.oz+1)[e.depth][e.ix+1][0])):(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px-1,e.pz,this.getTile(e.ox+1,e.oz)[e.depth][0][e.iz]):e.th+=this.lerpHeight(e.d,e.px-1,e.pz+1,this.getTile(e.ox+1,e.oz-1)[e.depth][0][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px-1,e.pz,this.getTile(e.ox+1,e.oz)[e.depth][0][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px-1,e.pz-1,this.getTile(e.ox+1,e.oz+1)[e.depth][0][0])),e.temper=1,this.config.temper&&e.depth>0&&(e.temper=Math.min(Math.max(this.config.temperMin,(e.h+this.config.offset+this.config.temperBase)/this.config.temperBelow),1)),e.h+=e.th*e.temper,e.depth++,e.sq=this.config.layerResolutions[e.depth],e.sqb=e.sq-1}return e.h+this.config.offset}getXZLayer(r,o,l,n=this.config.depth){e.d=0,e.h=0,e.heightFactor=1,e.sq=this.config.layerResolutions[0],e.sqb=e.sq-1,e.wx=r/this.tileSize,e.wz=o/this.tileSize,e.ox=Math.floor(e.wx),e.oz=Math.floor(e.wz),e.px=e.wx-e.ox,e.pz=e.wz-e.oz,e.tile=this.getTile(e.ox,e.oz),n=n||this.config.depth,e.depth=0,e.i=0;for(e.layer of e.tile){if(e.depth==n)break;if(e.i++!==l){e.depth++,e.sq=this.config.layerResolutions[e.depth],e.sqb=e.sq-1;continue}e.ix=Math.floor(e.px*e.sq-.5),e.iz=Math.floor(e.pz*e.sq-.5),e.th=0,e.ix>=0?(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix][e.iz]):e.th+=this.lerpHeight(e.d,e.px,e.pz+1,this.getTile(e.ox,e.oz-1)[e.depth][e.ix][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px,e.pz-1,this.getTile(e.ox,e.oz+1)[e.depth][e.ix][0])):(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px+1,e.pz,this.getTile(e.ox-1,e.oz)[e.depth][e.sqb][e.iz]):e.th+=this.lerpHeight(e.d,e.px+1,e.pz+1,this.getTile(e.ox-1,e.oz-1)[e.depth][e.sqb][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px+1,e.pz,this.getTile(e.ox-1,e.oz)[e.depth][e.sqb][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px+1,e.pz-1,this.getTile(e.ox-1,e.oz+1)[e.depth][e.sqb][0])),e.ix<e.sqb?(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix+1][e.iz]):e.th+=this.lerpHeight(e.d,e.px,e.pz+1,this.getTile(e.ox,e.oz-1)[e.depth][e.ix+1][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px,e.pz,e.layer[e.ix+1][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px,e.pz-1,this.getTile(e.ox,e.oz+1)[e.depth][e.ix+1][0])):(e.iz>=0?e.th+=this.lerpHeight(e.d,e.px-1,e.pz,this.getTile(e.ox+1,e.oz)[e.depth][0][e.iz]):e.th+=this.lerpHeight(e.d,e.px-1,e.pz+1,this.getTile(e.ox+1,e.oz-1)[e.depth][0][e.sqb]),e.iz<e.sqb?e.th+=this.lerpHeight(e.d,e.px-1,e.pz,this.getTile(e.ox+1,e.oz)[e.depth][0][e.iz+1]):e.th+=this.lerpHeight(e.d,e.px-1,e.pz-1,this.getTile(e.ox+1,e.oz+1)[e.depth][0][0])),e.h+=e.th*e.temper;break}return e.h+this.config.offset}lerpHeight(r,o,l,n){return r=(n.x-o)*(n.x-o)+(n.z-l)*(n.z-l),r<n.r2?this.smootherLerp(r/n.r2)*n.y:0}}export{qs as $,S as A,Vs as B,Ha as C,xe as D,y as E,ir as F,Qe as G,te as H,N as I,Na as J,zs as K,Gs as L,Oa as M,F as N,js as O,Xs as P,ie as Q,O as R,Ze as S,je as T,ve as U,bt as V,b as W,Va as X,ja as Y,He as Z,Ae as _,Pl as a,sa as a$,za as a0,Et as a1,we as a2,Ks as a3,$e as a4,ol as a5,Ye as a6,qe as a7,Ke as a8,Je as a9,er as aA,Ca as aB,ga as aC,Da as aD,Sa as aE,wa as aF,oe as aG,Ct as aH,ee as aI,It as aJ,ba as aK,$ as aL,xl as aM,na as aN,la as aO,Ss as aP,cs as aQ,Ka as aR,g as aS,Ul as aT,ss as aU,$a as aV,ra as aW,ia as aX,Ea as aY,pe as aZ,rr as a_,wt as aa,et as ab,_e as ac,Xa as ad,Za as ae,aa as af,us as ag,dl as ah,ce as ai,Qa as aj,Bt as ak,El as al,Tl as am,_l as an,qa as ao,tt as ap,Bs as aq,ke as ar,Fa as as,Ys as at,ar as au,U as av,dr as aw,Dl as ax,Ia as ay,Ja as az,Hl as b,sl as b0,i as b1,oa as b2,Nl as b3,ws as b4,ne as b5,de as b6,Ll as b7,Mt as b8,ca as b9,Fl as bA,ha as ba,va as bb,Is as bc,pa as bd,ma as be,Es as bf,_a as bg,xa as bh,re as bi,fa as bj,ua as bk,Rs as bl,Aa as bm,Ya as bn,Ol as bo,Ma as bp,La as bq,Ns as br,Us as bs,tr as bt,Se as bu,Xe as bv,Pa as bw,Ls as bx,ys as by,Ts as bz,Ua as c,sr as d,ta as e,vl as f,ul as g,nr as h,Al as i,ml as j,Ga as k,Js as l,ka as m,il as n,$s as o,el as p,tl as q,Ba as r,Ta as s,p as t,Os as u,Hs as v,Fs as w,da as x,ks as y,Ps as z};
