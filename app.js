const crops=[
{name:'Zanahoria',en:'Carrot',icon:'🥕',season:['Primavera'],days:3,repeat:0,seed:0,price:[35,43,52,70],vendor:'Semillas encontradas',maxStarts:1},
{name:'Chirivía',en:'Parsnip',icon:'🥕',season:['Primavera'],days:4,repeat:0,seed:20,price:[35,43,52,70],vendor:'Pierre'},
{name:'Patata',en:'Potato',icon:'🥔',season:['Primavera'],days:6,repeat:0,seed:50,price:[80,100,120,160],vendor:'Pierre'},
{name:'Coliflor',en:'Cauliflower',icon:'🥦',season:['Primavera'],days:12,repeat:0,seed:80,price:[175,218,262,350],vendor:'Pierre'},
{name:'Judía verde',en:'Green Bean',icon:'🫘',season:['Primavera'],days:10,repeat:3,seed:60,price:[40,50,60,80],vendor:'Pierre'},
{name:'Fresa',en:'Strawberry',icon:'🍓',season:['Primavera'],days:8,repeat:4,seed:100,price:[120,150,180,240],vendor:'Festival del Huevo',festival:true},
{name:'Ruibarbo',en:'Rhubarb',icon:'🌱',season:['Primavera'],days:13,repeat:0,seed:100,price:[220,275,330,440],vendor:'Oasis (desierto)'},
{name:'Col rizada',en:'Kale',icon:'🥬',season:['Primavera'],days:6,repeat:0,seed:70,price:[110,137,165,220],vendor:'Pierre'},
{name:'Arroz sin moler',en:'Unmilled Rice',icon:'🌾',season:['Primavera'],days:8,repeat:0,seed:40,price:[30,37,45,60],vendor:'Pierre'},
{name:'Ajo',en:'Garlic',icon:'🧄',season:['Primavera'],days:4,repeat:0,seed:40,price:[60,75,90,120],vendor:'Pierre',year:2},
{name:'Tulipán',en:'Tulip',icon:'🌷',season:['Primavera'],days:6,repeat:0,seed:20,price:[30,37,45,60],vendor:'Pierre'},
{name:'Jacinto azul',en:'Blue Jazz',icon:'🪻',season:['Primavera'],days:7,repeat:0,seed:30,price:[50,62,75,100],vendor:'Pierre'},
{name:'Calabaza de verano',en:'Summer Squash',icon:'🎃',season:['Verano'],days:6,repeat:3,seed:0,price:[45,56,67,90],vendor:'Semillas encontradas',maxStarts:1},
{name:'Arándano',en:'Blueberry',icon:'🫐',season:['Verano'],days:13,repeat:4,seed:80,price:[50,62,75,100],vendor:'Pierre',yield:3},
{name:'Melón',en:'Melon',icon:'🍈',season:['Verano'],days:12,repeat:0,seed:80,price:[250,312,375,500],vendor:'Pierre'},
{name:'Tomate',en:'Tomate',icon:'🍅',season:['Verano'],days:11,repeat:4,seed:50,price:[60,75,90,120],vendor:'Pierre'},
{name:'Chile',en:'Hot Pepper',icon:'🌶️',season:['Verano'],days:5,repeat:3,seed:40,price:[40,50,60,80],vendor:'Pierre'},
{name:'Maíz',en:'Corn',icon:'🌽',season:['Verano','Otoño'],days:14,repeat:4,seed:150,price:[50,62,75,100],vendor:'Pierre'},
{name:'Lúpulo',en:'Hops',icon:'🌿',season:['Verano'],days:11,repeat:1,seed:60,price:[25,31,37,50],vendor:'Pierre'},
{name:'Carambola',en:'Starfruit',icon:'⭐',season:['Verano'],days:13,repeat:0,seed:400,price:[750,937,1125,1500],vendor:'Oasis (desierto)'},
{name:'Rábano',en:'Radish',icon:'🔴',season:['Verano'],days:6,repeat:0,seed:40,price:[90,112,135,180],vendor:'Pierre'},
{name:'Brócoli',en:'Broccoli',icon:'🥦',season:['Primavera','Otoño'],days:8,repeat:4,seed:0,price:[70,87,105,140],vendor:'Semillas encontradas',maxStarts:1},
{name:'Calabaza',en:'Pumpkin',icon:'🎃',season:['Otoño'],days:13,repeat:0,seed:100,price:[320,400,480,640],vendor:'Pierre'},
{name:'Arándanos rojos',en:'Cranberries',icon:'🔴',season:['Otoño'],days:7,repeat:5,seed:240,price:[75,93,112,150],vendor:'Pierre',yield:2},
{name:'Berenjena',en:'Eggplant',icon:'🍆',season:['Otoño'],days:5,repeat:5,seed:20,price:[60,75,90,120],vendor:'Pierre'},
{name:'Ñame',en:'Yam',icon:'🍠',season:['Otoño'],days:10,repeat:0,seed:60,price:[160,200,240,320],vendor:'Pierre'},
{name:'Col china',en:'Bok Choy',icon:'🥬',season:['Otoño'],days:4,repeat:0,seed:50,price:[80,100,120,160],vendor:'Pierre'},
{name:'Remolacha',en:'Beet',icon:'🟣',season:['Otoño'],days:6,repeat:0,seed:20,price:[100,125,150,200],vendor:'Oasis (desierto)'},
{name:'Amaranto',en:'Amaranth',icon:'🌾',season:['Otoño'],days:7,repeat:0,seed:70,price:[150,187,225,300],vendor:'Pierre'},
{name:'Alcachofa',en:'Artichoke',icon:'🌿',season:['Otoño'],days:8,repeat:0,seed:30,price:[160,200,240,320],vendor:'Pierre',year:2},
{name:'Trigo',en:'Wheat',icon:'🌾',season:['Verano','Otoño'],days:4,repeat:0,seed:10,price:[25,31,37,50],vendor:'Pierre'},
{name:'Girasol',en:'Sunflower',icon:'🌻',season:['Verano','Otoño'],days:8,repeat:0,seed:200,price:[80,100,120,160],vendor:'Pierre'},
{name:'Rosa hada',en:'Fairy Rose',icon:'🌸',season:['Otoño'],days:12,repeat:0,seed:200,price:[290,362,435,580],vendor:'Pierre'},
{name:'Melón de invierno',en:'Powdermelon',icon:'🍈',season:['Invierno'],days:7,repeat:0,seed:0,price:[60,75,90,120],vendor:'Semillas encontradas',maxStarts:1},
{name:'Baya de gema dulce',en:'Sweet Gem Berry',icon:'💎',season:['Otoño'],days:24,repeat:0,seed:1000,price:[3000,3750,4500,6000],vendor:'Viajera'}
];
const ccData=[
{room:'Despensa',icon:'🌾',bundles:[
{n:'Paquete de primavera',items:[['Chirivía','Primavera','Agricultura'],['Judía verde','Primavera','Agricultura'],['Coliflor','Primavera','Agricultura'],['Patata','Primavera','Agricultura']]},
{n:'Paquete de verano',items:[['Tomate','Verano','Agricultura'],['Chile','Verano','Agricultura'],['Arándano','Verano','Agricultura'],['Melón','Verano','Agricultura']]},
{n:'Paquete de otoño',items:[['Maíz','Verano/Otoño','Agricultura'],['Berenjena','Otoño','Agricultura'],['Calabaza','Otoño','Agricultura'],['Ñame','Otoño','Agricultura']]},
{n:'Paquete de calidad',items:[['Chirivía (plata)', 'Primavera','Agricultura'],['Melón (plata)','Verano','Agricultura'],['Calabaza (plata)','Otoño','Agricultura'],['Maíz (oro)','Verano/Otoño','Agricultura']]},
{n:'Paquete de animales',items:[['Leche grande','Todo el año','Animales'],['Huevo grande marrón','Todo el año','Animales'],['Huevo grande blanco','Todo el año','Animales'],['Leche grande de cabra','Todo el año','Animales'],['Lana','Todo el año','Animales'],['Huevo de pato','Todo el año','Animales']]},
{n:'Paquete artesanal',items:[['Trufa','Primavera/Otoño','Animales'],['Tela','Todo el año','Animales'],['Leche de cabra','Todo el año','Animales'],['Queso','Todo el año','Animales'],['Miel','Todo el año','Agricultura'],['Jalea','Todo el año','Agricultura'],['Manzana','Otoño','Agricultura'],['Albaricoque','Primavera','Agricultura'],['Naranja','Verano','Agricultura'],['Melocotón','Verano','Agricultura'],['Granada','Otoño','Agricultura'],['Cereza','Primavera','Agricultura']]}
]},
{room:'Sala de calderas',icon:'🔥',bundles:[
{n:'Paquete de herrero',items:[['Lingote de cobre','Minas','Minería'],['Lingote de hierro','Minas','Minería'],['Lingote de oro','Minas','Minería']]},
{n:'Paquete de geólogo',items:[['Cuarzo','Minas','Minería'],['Lágrima congelada','Minas','Minería'],['Cristal de tierra','Minas','Minería'],['Cuarzo de fuego','Minas','Minería']]},
{n:'Paquete de aventurero',items:[['Baba (99)','Todo el año','Combate'],['Ala de murciélago (10)','Minas','Combate'],['Esencia solar','Minas','Combate'],['Esencia del vacío','Minas','Combate']]}
]},
{room:'Bóveda',icon:'🪙',bundles:[{n:'Paquete de 2.500g',items:[['Donar 2.500g','Cualquier momento','Oro']]},{n:'Paquete de 5.000g',items:[['Donar 5.000g','Cualquier momento','Oro']]},{n:'Paquete de 10.000g',items:[['Donar 10.000g','Cualquier momento','Oro']]},{n:'Paquete de 25.000g',items:[['Donar 25.000g','Cualquier momento','Oro']]}]},
{room:'Tablón de anuncios',icon:'📌',bundles:[
{n:'Paquete de tintes',items:[['Erizo de mar','Verano','Pesca'],['Girasol','Verano/Otoño','Agricultura'],['Pluma de pato','Todo el año','Animales'],['Aguamarina','Minas','Minería'],['Col roja','Verano','Agricultura'],['Hongo rojo','Verano/Otoño','Recolección']]},
{n:'Paquete de investigación de campo',items:[['Hongo morado','Otoño','Recolección'],['Concha de nautilo','Invierno','Recolección'],['Cacho','Todo el año','Pesca'],['Geoda congelada','Minas','Minería']]},
{n:'Paquete de encantador',items:[['Resina de roble','Todo el año','Recolección'],['Vino','Todo el año','Agricultura'],['Pata de conejo','Todo el año','Animales'],['Granada','Otoño','Agricultura']]},
{n:'Paquete de chef',items:[['Sirope de arce','Todo el año','Recolección'],['Helecho','Verano','Recolección'],['Trufa','Primavera/Otoño','Animales'],['Amapola','Verano','Agricultura'],['Rollo maki','Todo el año','Cocina'],['Huevo frito','Todo el año','Cocina']]},
{n:'Paquete de forraje',items:[['Trigo (10)','Verano/Otoño','Agricultura'],['Heno (10)','Todo el año','Animales'],['Manzana (3)','Otoño','Agricultura']]},
]},
{room:'Pecera',icon:'🐟',bundles:[
{n:'Paquete de peces de río',items:[['Pez luna','Primavera/Verano','Pesca'],['Siluro','Primavera/Verano/Otoño','Pesca'],['Sábalo','Primavera/Verano/Otoño','Pesca'],['Trucha tigre','Otoño/Invierno','Pesca']]},
{n:'Paquete de peces de lago',items:[['Lubina','Todo el año','Pesca'],['Carpa','Todo el año','Pesca'],['Cabeza de toro','Todo el año','Pesca'],['Esturión','Verano/Invierno','Pesca']]},
{n:'Paquete de peces de mar',items:[['Sardina','Primavera/Otoño/Invierno','Pesca'],['Atún','Verano/Invierno','Pesca'],['Pargo rojo','Verano/Otoño','Pesca'],['Tilapia','Verano/Otoño','Pesca']]},
{n:'Paquete de pesca nocturna',items:[['Besugo','Todo el año','Pesca'],['Anguila','Primavera/Otoño','Pesca','Lluvia'],['Lucioperca','Otoño/Invierno','Pesca','Lluvia']]},
{n:'Paquete de cangrejos',items:[['Langosta','Todo el año','Pesca'],['Cangrejo de río','Todo el año','Pesca'],['Cangrejo','Todo el año','Pesca'],['Berberecho','Todo el año','Pesca'],['Mejillón','Todo el año','Pesca'],['Gamba','Todo el año','Pesca'],['Caracol','Todo el año','Pesca'],['Ostra','Todo el año','Pesca'],['Almeja','Todo el año','Pesca'],['Lapa','Todo el año','Pesca']]},
{n:'Paquete de peces especiales',items:[['Pez globo','Verano','Pesca','Sol'],['Pez fantasma','Minas','Pesca'],['Pez de arena','Todo el año','Pesca'],['Pez leña','Todo el año','Pesca']]}
]},
{room:'Sala',icon:'🎁',bundles:[
{n:'Paquete de primavera',items:[['Rábano silvestre','Primavera','Recolección'],['Narciso','Primavera','Recolección'],['Puerro','Primavera','Recolección'],['Diente de león','Primavera','Recolección']]},
{n:'Paquete de verano',items:[['Uva','Verano','Recolección'],['Baya especiada','Verano','Recolección'],['Guisante de olor','Verano','Recolección']]},
{n:'Paquete de otoño',items:[['Hongo común','Otoño','Recolección'],['Ciruela silvestre','Otoño','Recolección'],['Avellana','Otoño','Recolección'],['Mora','Otoño','Recolección']]},
{n:'Paquete de invierno',items:[['Raíz invernal','Invierno','Recolección'],['Fruta de cristal','Invierno','Recolección'],['Ñame de nieve','Invierno','Recolección'],['Crocus','Invierno','Recolección']]},
{n:'Paquete de construcción',items:[['Madera (99)','Todo el año','Recolección'],['Madera noble (10)','Todo el año','Recolección'],['Piedra (99)','Todo el año','Minería'],['Fibra (99)','Todo el año','Recolección']]},
{n:'Paquete exótico',items:[['Coco','Todo el año','Recolección'],['Fruta de cactus','Todo el año','Recolección'],['Zanahoria de cueva','Minas','Recolección'],['Hongo rojo','Verano/Otoño','Recolección'],['Hongo morado','Otoño','Recolección'],['Sirope de arce','Todo el año','Recolección'],['Resina de roble','Todo el año','Recolección'],['Alquitrán de pino','Todo el año','Recolección']]}
]}
];
const roomIcons={'Despensa':'🌾','Sala de calderas':'🔥','Tablón de anuncios':'📌','Pecera':'🐟','Sala':'🎁','Bóveda':'🪙'};
const state=JSON.parse(localStorage.getItem('vallecito_v1')||'{}');
let completed=state.completed||{},spoiler=!!state.spoiler, season='Primavera';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('vallecito_v1',JSON.stringify({completed,spoiler}));$('#spoilerState').textContent=spoiler?'Activado':'Desactivado';document.body.classList.toggle('spoiler',spoiler);}
function key(room,bundle,item){return [room,bundle,item].join('|')}
function toast(msg){let t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1900)}
function shopOpen(day,done){return done||(day-3)%7!==0}
function canBuy(c,day,stored){if(c.festival)return stored||day===13;if(c.vendor==='Pierre')return true;return true}
function qualityAverage(prices,fert,farming){
 const f={none:0,speed:0,speedDeluxe:0,hyper:0,basic:1,quality:2,deluxe:3}[fert]||0,level=Math.max(0,Math.min(10,farming));
 const gold=.01+.2*(level/10)+.2*f*((level+2)/12);
 let silver,normal,iridium=0;if(f===3){iridium=gold/2;silver=1-gold-iridium;normal=0}else{silver=(1-gold)*Math.min(.75,2*gold);normal=1-gold-silver}
 return {price:prices[0]*normal+prices[1]*silver+prices[2]*gold+prices[3]*iridium,normal,silver,gold,iridium};
}
function projectCrop(c,start,gold,plots,options){
 const mod={speed:.1,speedDeluxe:.25,hyper:.33}[options.fert]||0, quality=qualityAverage(c.price,options.fert,options.farming),repeatQuality=qualityAverage(c.price,'none',options.farming),qualityTier={basic:1,quality:2,deluxe:3}[options.fert]||0;
 const fertilizerPerPlant=options.fert==='none'?0:Math.max(0,options.fertCost);
 const salePerHarvest=(c.yield||1)>1&&qualityTier>0?c.price[0]*((c.yield||1)-1)+quality.price:quality.price*(c.yield||1),saleRepeat=(c.yield||1)>1&&qualityTier>0?c.price[0]*((c.yield||1)-1)+repeatQuality.price:repeatQuality.price*(c.yield||1);
 const growth=Math.max(1,Math.ceil(c.days*(1-mod))),repeat=c.repeat||0,unitsPerHarvest=c.yield||1;
 let cash=gold,pending=0,planted=false,harvests=0,bought=0,spend=0,earliest=Infinity,active=[],maxPlots=Math.max(0,plots),maxStarts=c.maxStarts??Infinity,seedStore=c.vendor==='Pierre'?'pierre':c.festival?'festival':'other';
 for(let day=start;day<=28;day++){
  const pierre=shopOpen(day,options.communityDone);
  if(pierre&&pending){cash+=pending;pending=0}
  const kept=[];
  for(const plant of active){if(plant.next===day){const revenue=plant.first?salePerHarvest:saleRepeat;harvests+=unitsPerHarvest;if(pierre)cash+=revenue;else pending+=revenue;plant.first=false;plant.left--;if(plant.left>0){plant.next=day+repeat;kept.push(plant)}}else kept.push(plant)}
  active=kept;
  const storeOpen=seedStore==='pierre'?pierre:seedStore==='festival'?canBuy(c,day,options.strawberrySeeds):true;
  const mayBuy=options.reinvest||!planted;
  if(mayBuy&&storeOpen&&canBuy(c,day,options.strawberrySeeds)&&day+growth<=28){
   let space=Math.min(maxPlots-active.length,maxStarts-bought);
   let unitCost=c.seed+fertilizerPerPlant,remaining=28-(day+growth),futureHarvests=repeat?1+Math.floor(Math.max(0,remaining)/repeat):1,projectedReturn=futureHarvests*salePerHarvest;let count=projectedReturn>=unitCost?Math.min(space,unitCost>0?Math.floor(cash/unitCost):space):0; 
   if(!options.reinvest&&planted)count=0;
   for(let i=0;i<count;i++){cash-=c.seed+fertilizerPerPlant;spend+=c.seed+fertilizerPerPlant;bought++;planted=true;let first=day+growth;earliest=Math.min(earliest,first);let total=repeat?1+Math.floor((28-first)/repeat):1;active.push({next:first,left:total,first:true})}
  }
 }
 return {net:cash+pending-gold,harvests,bought,spend,ending:cash+pending,growth,firstHarvest:earliest,qualityMultiplier:quality.price/c.price[0]};
}
function updateCrop(){const start=+$('#startDay').value,gold=Math.max(0,+$('#gold').value||0),requestedPlots=Math.max(0,+$('#plots').value||0),energy=Math.max(0,+$('#energy').value||0),water=$('#irrigation').value,range={can:1,copper:3,steel:5,gold:9,iridium:18}[water]||1,plots=Math.min(requestedPlots,water==='sprinkler'?requestedPlots:Math.floor(energy/2)*range),fert=$('#fertilizer').value,farming=+$('#farming').value,fertCost=+$('#fertCost').value||0,communityDone=$('#communityDone').checked,reinvest=$('#reinvent').checked,strawberrySeeds=$('#strawberrySeeds').checked,term=$('#cropSearch').value.trim().toLocaleLowerCase('es'),sort=$('#cropSort').value;
$('#startDayValue').textContent=start;
let list=crops.filter(c=>c.season.includes(season)&&(!term||c.name.toLocaleLowerCase('es').includes(term)||c.en.toLowerCase().includes(term))&&(!c.festival||season!=='Primavera'||start>=13||strawberrySeeds)&&(!c.year||$('#year2').checked));
list=list.map(c=>{let result=projectCrop(c,start,gold,plots,{fert,farming,fertCost,communityDone,reinvest,strawberrySeeds});return {...c,...result,water,firstHarvest:result.firstHarvest}}).filter(c=>c.harvests>0);
if(sort==='profit')list.sort((a,b)=>b.net-a.net);if(sort==='harvest')list.sort((a,b)=>b.harvests-a.harvests);if(sort==='matures')list.sort((a,b)=>a.growth-b.growth);if(sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name,'es'));
const best=list[0];$('#recommendation').innerHTML=best?`<span class="rec-icon">🌿</span><div><b>${best.icon} Con tus datos, ${best.name.toLowerCase()} sale mejor</b><p>${best.bought} plantas compradas · ${best.harvests} productos cosechados · neto estimado ${fmt(best.net)}g${reinvest?' · ventas reinvertidas':''}</p></div>`:`<span class="rec-icon">🪹</span><div><b>No hay cosechas a tiempo con estos datos</b><p>Prueba con otro cultivo, más oro o una fecha de inicio anterior.</p></div>`;
$('#cropGrid').innerHTML=list.map(c=>{let progress=Math.min(100,Math.max(8,(c.harvests/40)*100));return `<article class="crop-card"><div class="crop-top"><span class="crop-emoji">${c.icon}</span><div><h3>${c.name}</h3><small>${c.vendor}${c.maxStarts?' · máximo '+c.maxStarts+' semilla':''}${c.year?' · Año 2+':''}</small></div><div class="crop-gain"><b>${fmt(c.net)}g</b><small>neto · ${c.bought} plantas</small></div></div><div class="crop-meta"><span>⏳ ${c.growth} días</span><span>🧺 ${c.harvests} unidades</span><span>📅 primera: día ${c.firstHarvest}</span></div><div class="yieldbar"><i style="width:${progress}%"></i></div><div class="quality-prices">${['Normal','Plata','Oro','Iridio'].map((q,i)=>`<span>${q}<b>${fmt(c.price[i])}g</b></span>`).join('')}</div><div class="crop-extra">Semillas ${fmt(c.seed)}g · ${c.repeat?`rebrote cada ${c.repeat} días`:'una cosecha'} · calidad media ×${c.qualityMultiplier.toFixed(2)} · invertido ${fmt(c.spend)}g</div></article>`}).join('')||'<div class="empty-state">No encontramos cultivos. Prueba otra búsqueda o estación.</div>';
}
function fmt(n){return Math.round(n).toLocaleString('es-UY')}
function bundleNeed(room,b){let map={'Paquete de calidad':3,'Paquete artesanal':6,'Paquete de animales':5,'Paquete exótico':5,'Paquete de aventurero':2,'Paquete de cangrejos':5};return Math.min(b.items.length,map[b.n]||b.items.length)}
function updateCC(){const roomStats=$('#roomStats');let total=0,done=0;roomStats.innerHTML=ccData.map(room=>{let rt=0,rd=0;room.bundles.forEach(b=>{let need=bundleNeed(room,b),checked=b.items.filter(i=>completed[key(room.room,b.n,i[0])]).length;rt+=need;total+=need;rd+=Math.min(need,checked);done+=Math.min(need,checked)});return `<span class="room-stat">${roomIcons[room.room]} ${room.room} <b>${rd}/${rt}</b></span>`}).join('');let pct=total?Math.round(done/total*100):0;$('#ccPercent').textContent=pct+'%';$('#ccProgress').style.width=pct+'%';$('#ccTabCount').textContent=pct+'%';$('#ccCaption').textContent=done?`${done} de ${total} objetos marcados. ¡Sigue así!`:'Cada objeto cuenta. ¡Tú puedes!';$('#spoilerState').textContent=spoiler?'Activado':'Desactivado';
const q=$('#ccSearch').value.trim().toLocaleLowerCase('es'),filter=$('#ccFilter').value,sort=$('#ccSort').value;
let groups=[];ccData.forEach(room=>room.bundles.forEach(bundle=>bundle.items.forEach((it,idx)=>{let k=key(room.room,bundle.n,it[0]),isDone=!!completed[k];if(filter==='done'&&!isDone||filter==='pending'&&isDone)return;let hay=[room.room,bundle.n,it[0],it[1],it[2]].join(' ').toLocaleLowerCase('es');if(q&&!hay.includes(q))return;groups.push({room,bundle,it,k,isDone,idx})})));
let html='';if(sort==='bundle'){let by={};groups.forEach(g=>(by[g.room.room+'|'+g.bundle.n]??=[]).push(g));Object.values(by).forEach(items=>html+=renderBundle(items[0].room,items[0].bundle,items))}else{groups.sort((a,b)=>sort==='az'?a.it[0].localeCompare(b.it[0],'es'):sort==='season'?seasonRank(a.it[1])-seasonRank(b.it[1])||a.it[0].localeCompare(b.it[0],'es'):a.it[2].localeCompare(b.it[2],'es')||a.it[0].localeCompare(b.it[0],'es'));html=groups.map(g=>renderBundle(g.room,g.bundle,[g],true)).join('')}
$('#bundleList').innerHTML=html||'<div class="empty-state">No hay objetos que coincidan. Prueba otro filtro o búsqueda.</div>';
}
function seasonRank(value){const order=['Primavera','Verano','Otoño','Invierno','Todo el año','Cualquier momento','Minas'];return Math.min(...value.split('/').map(x=>{let i=order.indexOf(x);return i<0?99:i}))}
function renderBundle(room,bundle,items,flat=false){let all=bundle.items.length,need=bundleNeed(room,bundle),checked=bundle.items.filter(i=>completed[key(room.room,bundle.n,i[0])]).length;return `<article class="bundle-card"><div class="bundle-head"><h3>${roomIcons[room.room]} <span>${room.room}</span> · <span>${bundle.n}</span></h3><span class="bundle-progress">${Math.min(checked,need)}/${need} necesarios ✓</span></div><div class="bundle-items">${items.map(g=>{let it=g.it||g,isDone=g.isDone??!!completed[key(room.room,bundle.n,it[0])],k=g.k||key(room.room,bundle.n,it[0]);return `<label class="bundle-item ${isDone?'done':''}"><input type="checkbox" data-item="${encodeURIComponent(k)}" ${isDone?'checked':''}><span class="item-icon">${itemIcon(it[0])}</span><span class="item-info"><b>${it[0]}</b><small>${it[1]} · ${it[2]}${it[3]?' · '+it[3]:''}</small></span></label>`}).join('')}</div></article>`}
function itemIcon(n){let t=n.toLowerCase();if(/pez|sardina|atún|anguila|carpa|trucha|lubina|siluro|besugo|tilapia|sábalo|cangrejo|ostra|mejillón|langosta|berberecho|caracol|gamba|cacho|pargo/.test(t))return '🐟';if(/hongo|seta/.test(t))return '🍄';if(/madera|fibra|sirope|resina|alquitrán|puerro|narciso|diente|rábano silvestre|avellana|mora|ciruela silvestre|crocus|coco|cactus|cristal|ñame de nieve/.test(t))return '🌿';if(/lingote|cuarzo|geoda|esencia|ala de murciélago|baba|piedra|aguamarina/.test(t))return '⛏️';if(/huevo|leche|lana|trufa|queso|mayo|miel/.test(t))return '🐓';if(/vino|jalea|maki|huevo frito|manzana|melocotón|cereza|naranja|granada|albaricoque/.test(t))return '🧺';return '🌱'}
$('#startDay').addEventListener('input',updateCrop);['gold','plots','energy','farming','fertCost','fertilizer','irrigation','communityDone','strawberrySeeds','reinvent','year2','cropSearch','cropSort'].forEach(id=>$('#'+id).addEventListener('input',updateCrop));$('#seasonToggle').addEventListener('click',e=>{let b=e.target.closest('[data-season]');if(!b)return;season=b.dataset.season;$$('#seasonToggle button').forEach(x=>x.classList.toggle('selected',x===b));updateCrop()});
$$('.tab').forEach(b=>b.addEventListener('click',()=>{$$('.tab').forEach(x=>x.classList.toggle('active',x===b));$$('.panel').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab));if(b.dataset.tab==='centro')updateCC()}));
$('#spoilerBtn').addEventListener('click',()=>{spoiler=!spoiler;save();updateCC()});$('#ccSearch').addEventListener('input',updateCC);['ccSort','ccFilter'].forEach(id=>$('#'+id).addEventListener('change',updateCC));$('#bundleList').addEventListener('change',e=>{let box=e.target.closest('input[data-item]');if(!box)return;let k=decodeURIComponent(box.dataset.item);if(box.checked)completed[k]=true;else delete completed[k];save();updateCC()});
$('#exportBtn').addEventListener('click',()=>{let blob=new Blob([JSON.stringify({version:1,completed},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mi-progreso-vallecito.json';a.click();URL.revokeObjectURL(a.href);toast('Archivo exportado ♡')});$('#importBtn').addEventListener('click',()=>$('#importFile').click());$('#importFile').addEventListener('change',async e=>{try{let data=JSON.parse(await e.target.files[0].text());if(!data.completed||typeof data.completed!=='object')throw Error();completed=data.completed;save();updateCC();toast('Progreso importado ♡')}catch{toast('No pude leer ese archivo')}});
$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('vallecito_dark',document.body.classList.contains('dark'))});if(localStorage.getItem('vallecito_dark')==='true')document.body.classList.add('dark');save();updateCrop();updateCC();

// Plan diario, objetivos de temporada y bitácora de hallazgos.
const springForagePrices={'Rábano silvestre':50,'Narciso':30,'Puerro':60,'Diente de león':40,'Cebolleta':8,'Mora salmonera':5,'Semillas de primavera':35};
const resourceCatalog=[...Object.entries(springForagePrices).map(([name,price])=>({name,price,source:'Suelo / recolección',note:['Rábano silvestre','Narciso','Puerro','Diente de león'].includes(name)?'Guarda 1 para el Paquete de recolección de primavera si aún no lo completaste.':''})),
{name:'Basura',price:0,source:'Basura'},{name:'Periódico mojado',price:0,source:'Basura'},{name:'CD roto',price:0,source:'Basura'},{name:'Gafas rotas',price:0,source:'Basura'},{name:'Deriva',price:0,source:'Basura'},{name:'Cola Joja',price:25,source:'Basura'},
{name:'Madera',price:2,source:'Árboles / maleza',note:'Cada 300 de madera repara el puente de las pozas de marea en la playa.'},{name:'Fibra',price:1,source:'Árboles / maleza'},{name:'Piedra',price:2,source:'Minas'},{name:'Mineral de cobre',price:5,source:'Minas'},{name:'Carbón',price:15,source:'Minas'},{name:'Cuarzo',price:25,source:'Minas'},{name:'Cuarzo refinado',price:50,source:'Minas'},{name:'Geoda',price:50,source:'Minas'},{name:'Cebo',price:1,source:'Pesca'}];
let dailySeason='Primavera';
const extraKey='vallecito_extra_v1';
let extra=JSON.parse(localStorage.getItem(extraKey)||'{}');
extra.dailyChecks ||= {}; extra.routineChecks ||= {}; extra.objectives ||= {}; extra.resources ||= [];
const saveExtra=()=>localStorage.setItem(extraKey,JSON.stringify(extra));
const weekdays=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
function dailyTasks(day,seasonName){
 const tasks=[];
 if(day===1&&seasonName==='Primavera')tasks.push(['Preparar un lote pequeño de cultivos rápidos; reserva oro para fresas','Meta de temporada']);
 if(day===2&&seasonName==='Primavera')tasks.push(['Recibir la carta de Willy y visitar la playa si buscas iniciar pesca','Desbloqueo']);
 if(day===5&&seasonName==='Primavera'){tasks.push(['Las Minas se abren: baja algunos pisos y activa el ascensor cada 5','Minas']);tasks.push(['Entra al pueblo entre 8:00 y 13:00 si no llueve para activar el Centro Comunitario','Centro Comunitario']);}
 if(day===13&&seasonName==='Primavera')tasks.push(['Festival del Huevo: lleva oro y compra semillas de fresa a 100g cada una; planta y riega al volver','Evento clave']);
 if(seasonName==='Primavera'&&day>=15&&day<=18)tasks.push(['Temporada de moras salmoneras: sacude arbustos del pueblo y el bosque','Evento estacional']);
 if(seasonName==='Primavera'&&day===24)tasks.push(['Festival de la Danza de las Flores; tiendas cerradas','Festival']);
 if(seasonName==='Verano'&&day===11)tasks.push(['Festival del Luau en la playa; lleva un ingrediente de calidad si quieres','Festival']);
 if(seasonName==='Otoño'&&day===16)tasks.push(['Feria de Stardew Valley; guarda objetos para exhibición','Festival']);
 if(seasonName==='Invierno'&&day>=15&&day<=17)tasks.push(['Mercado Nocturno en la playa: explora sus tiendas y el submarino','Evento estacional']);
 if(!tasks.length)tasks.push(['Día flexible: elige Minas, pesca, recolección o granja según tu prioridad y la energía.','Plan libre']);
 return tasks;
}
function objectiveRows(){return [
 ['fresas','🍓','Ahorra para fresas','El Festival del Huevo es el día 13 de primavera; cada semilla cuesta 100g. Decide cuántas quieres comprar.'],
 ['minas','⛏️','Avanza en las Minas','Empiezan a estar disponibles en primavera 5. Activa el ascensor cada 5 pisos; el cobre ayuda con la primera mejora de herramientas.'],
 ['beachBridge','🌊','Repara el puente de la playa',`Reúne 300 de madera para acceder a las pozas de marea y los corales. En tu bitácora: ${extra.resources.filter(x=>x.name.toLocaleLowerCase('es')==='madera').reduce((a,x)=>a+x.qty,0)}/300. Es una meta opcional.`],
 ['quarryBridge','🪨','Desbloquea el puente de la Cantera','Es otro puente: se repara al completar los paquetes de la Sala de manualidades del Centro Comunitario.'],
 ['community','🏡','Activa el Centro Comunitario','Desde primavera 5, entra al pueblo entre 8:00 y 13:00 en un día sin lluvia; luego visita el edificio.']
 ];}
function simulateSpringSaving(c){
 const start=Math.max(1,+$('#startDay').value||1),until=Math.min(12,13-1),gold=Math.max(0,+$('#gold').value||0),energy=Math.max(0,+$('#energy').value||0),requested=Math.max(0,+$('#plots').value||0),tool=$('#irrigation').value,area={can:1,copper:3,steel:5,gold:9,iridium:18}[tool]||1,capacity=Math.min(requested,tool==='sprinkler'?requested:Math.floor(energy/2)*area);if(start>until)return null;
 const fert=$('#fertilizer').value,quality=qualityAverage(c.price,fert,+$('#farming').value||0).price,repeatQuality=qualityAverage(c.price,'none',+$('#farming').value||0).price,growth=Math.max(1,Math.ceil(c.days*(1-({speed:.1,speedDeluxe:.25,hyper:.33}[fert]||0)))),seedCost=c.seed+(+$('#fertCost').value||0),repeat=c.repeat||0,yieldCount=c.yield||1;let cash=gold,pending=0,bought=0,spent=0,active=[];
 for(let day=start;day<=until;day++){
  cash+=pending;pending=0;const open=shopOpen(day,$('#communityDone').checked),keep=[];
  for(const p of active){if(p.next===day){const revenue=(p.first?quality:repeatQuality)*yieldCount;if(open)cash+=revenue;else pending+=revenue;p.first=false;p.left--;if(p.left){p.next=day+repeat;keep.push(p)}}else keep.push(p)}active=keep;
  const mayBuy=$('#reinvent').checked||bought===0;if(open&&mayBuy&&capacity>active.length&&seedCost>0){const potential=quality*yieldCount*(repeat?1+Math.floor(Math.max(0,until-(day+growth))/repeat):1);if(potential>=seedCost){const count=Math.min(capacity-active.length,Math.floor(cash/seedCost));for(let i=0;i<count;i++){cash-=seedCost;spent+=seedCost;bought++;active.push({next:day+growth,left:repeat?1+Math.floor(Math.max(0,until-(day+growth))/repeat):1,first:true})}}}
 }
 return {crop:c,ending:cash+pending,bought,spent,capacity};
}
function renderSavings(){const candidates=crops.filter(c=>c.season.includes('Primavera')&&c.vendor==='Pierre'&&(!c.year||$('#year2').checked)&&c.seed>0);const ranked=candidates.map(simulateSpringSaving).filter(Boolean).sort((a,b)=>b.ending-a.ending);const best=ranked[0],remaining=Math.max(0,best?.ending||(+$('#gold').value||0)),seeds=Math.floor(remaining/100);return `<div class="saving-plan"><span class="saving-icon">🍓</span><div><b>${best?`Hasta el día 12: prueba con ${best.crop.name.toLowerCase()}`:'Día 13: ya puedes comprar fresas'}</b><p>${best?`Con ${fmt(+$('#gold').value||0)}g de partida, hasta ${best.capacity} espacios y tu configuración actual, la simulación estima ${fmt(best.ending)}g disponibles al empezar el día 13 (${seeds} semillas de fresa a 100g). Compró ${best.bought} semillas de ${best.crop.name.toLowerCase()} y reinvirtió ventas al vender a Pierre.`:`Oro disponible: ${fmt(+$('#gold').value||0)}g · hasta ${seeds} semillas a 100g cada una.`}</p><small>Estimación para primavera 1–12. No incluye tala, pesca, minería, regalos, clima/lluvia, arado ni objetos encontrados; el plan diario propone esas actividades por separado. Cultivos y riego se mantienen según tu configuración.</small></div></div>`}
function renderDaily(){
 const day=+$('#startDay').value||1,seasonName=dailySeason,goal=seasonName==='Primavera'&&day<13?`Día ${day}: revisa el plan de ahorro para llegar con más oro al Festival del Huevo.`:`Día ${day} de ${seasonName.toLowerCase()}: prioriza la rutina, revisa los objetivos y adapta el recorrido a tu energía.`;
 $('#dailySummary').innerHTML=`<div class="daily-banner"><span>🗓️</span><div><b>${goal}</b><small>El calendario supone estación de 28 días. Marca las tareas que hiciste; se guardan en este navegador.</small></div></div>${seasonName==='Primavera'&&day<13?renderSavings():''}<div class="objective-grid">${objectiveRows().map(([id,icon,title,desc])=>`<label class="objective-card ${extra.objectives[id]?'checked':''}"><input type="checkbox" data-objective="${id}" ${extra.objectives[id]?'checked':''}><span>${icon}</span><div><b>${title}</b><small>${desc}</small></div></label>`).join('')}</div>`;
 const routine=[['tv','Ver suerte y clima en la televisión'],['water','Regar lo que no cubren los aspersores'],['harvest','Cosechar y revisar procesadoras'],['forage','Recoger objetos que aparecieron en el suelo'],['grass','Cortar hierba o maleza si necesitas fibra (no limpies toda la hierba alta si quieres heno después)'],['animals','Atender animales, mascotas y máquinas si ya las tienes']];
 updateShopStatuses(day,seasonName);
 $('#routineList').innerHTML=routine.map(([id,label])=>`<label class="routine-row"><input type="checkbox" data-routine="${id}" ${extra.routineChecks[seasonName+'|'+day+'|'+id]?'checked':''}><span>${label}</span></label>`).join('');
 const days=Array.from({length:Math.min(13,29-day)},(_,i)=>day+i);
 $('#dayList').innerHTML=days.map(d=>{const tasks=dailyTasks(d,seasonName),isToday=d===day;return `<article class="day-card ${isToday?'today':''}"><div class="day-heading"><span class="day-number">${d}</span><div><b>${seasonName} ${d} · ${weekdays[(d-1)%7]}</b><small>${isToday?'TU DÍA ACTUAL':'Plan sugerido'}</small></div>${d===13&&seasonName==='Primavera'?'<span class="day-badge">🍓 Fresas</span>':''}</div><div class="day-tasks">${tasks.map(([task,tag],i)=>{const k=seasonName+'|'+d+'|'+i;return `<label class="day-task"><input type="checkbox" data-day-task="${encodeURIComponent(k)}" ${extra.dailyChecks[k]?'checked':''}><span>${task}<small>${tag}</small></span></label>`}).join('')}</div></article>`}).join('')||'<div class="empty-state">Elige un día para ver el calendario desde esa fecha.</div>';
}
function updateShopStatuses(day,seasonName){const dow=(day-1)%7,done=$('#communityDone').checked,open={pierre:done||dow!==2,robin:dow!==1,clint:!(done&&dow===4),marnie:dow!==0&&dow!==1,willy:dow!==5,cart:dow===4||dow===6};Object.entries(open).forEach(([id,isOpen])=>{const el=$(`[data-shop-status="${id}"]`);if(el)el.textContent=`Hoy (${weekdays[dow]}): ${isOpen?'abre':'cerrado'}`});const fish=$('[data-shop-status="willy"]');if(fish&&dow===5)fish.textContent='Hoy (sábado): depende de la lluvia';const egg=$('[data-shop-status="cart"]');if(egg)egg.textContent=`Hoy: ${open.cart?'abre':'cerrado'}`;}
function renderResources(){
 $('#resourceSummary').innerHTML=`<div class="resource-total"><small>VALOR DE VENTA REGISTRADO</small><b>${fmt(extra.resources.reduce((a,x)=>a+x.qty*x.price,0))}g</b></div><div class="resource-total"><small>OBJETOS REGISTRADOS</small><b>${extra.resources.reduce((a,x)=>a+x.qty,0)}</b></div>`;
 $('#resourceOptions').innerHTML=resourceCatalog.map(x=>`<option value="${x.name}">`).join('');
 $('#resourceList').innerHTML=extra.resources.length?extra.resources.slice().reverse().map(x=>`<article class="resource-row"><span>${x.source==='Basura'?'🗑️':x.source==='Minas'?'⛏️':x.source.includes('suelo')?'🌱':'🧺'}</span><div><b>${x.name} × ${x.qty}</b><small>${x.season} ${x.day} · ${x.source}${x.note?' · '+x.note:''}</small></div><strong>${fmt(x.qty*x.price)}g</strong><button class="icon-button" data-remove-resource="${x.id}" aria-label="Eliminar">×</button></article>`).join(''):'<div class="empty-state">Todavía no registraste hallazgos. Los objetos del paquete de primavera pueden convenir más guardados que vendidos.</div>';
}
function initExtra(){
 $('#dailySeason').addEventListener('click',e=>{const b=e.target.closest('[data-season]');if(!b)return;dailySeason=b.dataset.season;$$('#dailySeason button').forEach(x=>x.classList.toggle('selected',x===b));season=dailySeason;$$('#seasonToggle button').forEach(x=>x.classList.toggle('selected',x.dataset.season===season));updateCrop();renderDaily()});$('#seasonToggle').addEventListener('click',()=>setTimeout(()=>{dailySeason=season;$$('#dailySeason button').forEach(x=>x.classList.toggle('selected',x.dataset.season===dailySeason));renderDaily();renderLockedStrawberry()},0));
 $('#startDay').addEventListener('input',()=>{renderDaily();renderLockedStrawberry()});$('#communityDone').addEventListener('change',renderDaily);
 $('#dailySummary').addEventListener('change',e=>{const o=e.target.closest('[data-objective]');if(o){extra.objectives[o.dataset.objective]=o.checked;saveExtra();renderDaily()}});
 $('#routineList').addEventListener('change',e=>{const c=e.target.closest('[data-routine]');if(!c)return;const d=+$('#startDay').value;extra.routineChecks[dailySeason+'|'+d+'|'+c.dataset.routine]=c.checked;saveExtra()});
 $('#dayList').addEventListener('change',e=>{const c=e.target.closest('[data-day-task]');if(!c)return;const k=decodeURIComponent(c.dataset.dayTask);extra.dailyChecks[k]=c.checked;saveExtra()});
 $('#resourceItem').addEventListener('input',()=>{const found=resourceCatalog.find(x=>x.name.toLocaleLowerCase('es')===$('#resourceItem').value.trim().toLocaleLowerCase('es'));if(found){$('#resourcePrice').value=found.price;$('#resourceSource').value=found.source;$('#resourceHint').textContent=found.note||`Precio base de venta: ${found.price}g cada uno. Ajusta el importe si corresponde a calidad/plata/oro/iridio.`}});
 $('#addResource').addEventListener('click',()=>{const name=$('#resourceItem').value.trim(),qty=Math.max(1,+$('#resourceQty').value||1),price=Math.max(0,+$('#resourcePrice').value||0);if(!name){toast('Escribe el nombre del objeto');return}const found=resourceCatalog.find(x=>x.name.toLocaleLowerCase('es')===name.toLocaleLowerCase('es'));extra.resources.push({id:Date.now(),name,qty,price,source:$('#resourceSource').value,season:$('#resourceSeason').value,day:Math.min(28,Math.max(1,+$('#resourceDay').value||1)),note:found?.note||''});saveExtra();$('#resourceItem').value='';$('#resourceQty').value=1;$('#resourcePrice').value=0;$('#resourceHint').textContent='Elige un objeto sugerido para cargar su precio de venta. Puedes cambiarlo si tiene una calidad distinta.';renderResources();toast('Hallazgo guardado ♡')});
 $('#resourceList').addEventListener('click',e=>{const b=e.target.closest('[data-remove-resource]');if(!b)return;extra.resources=extra.resources.filter(x=>String(x.id)!==b.dataset.removeResource);saveExtra();renderResources()});
 document.querySelectorAll('#cultivos input,#cultivos select').forEach(el=>el.addEventListener('change',renderLockedStrawberry));
 renderDaily();renderResources();renderLockedStrawberry();
}
function renderLockedStrawberry(){const grid=$('#cropGrid');if(!grid)return;const exists=grid.querySelector('[data-strawberry-locked]');if(exists)exists.remove();if(season==='Primavera'&&+$('#startDay').value<13&&!$('#strawberrySeeds').checked){const card=document.createElement('article');card.className='crop-card strawberry-locked';card.dataset.strawberryLocked='1';card.innerHTML='<div class="crop-top"><span class="crop-emoji">🔒🍓</span><div><h3>Fresa · aún no disponible</h3><small>Festival del Huevo · Primavera 13</small></div></div><p>Se desbloquea para comprar en el festival, a 100g por semilla. Guarda oro hasta ese día. El Festival termina tarde; planta y riega al volver a la granja.</p><div class="quality-prices"><span>Maduración<b>8 días</b></span><span>Rebrote<b>cada 4 días</b></span><span>Precio base<b>120g</b></span><span>Primeras cosechas<b>días 21 y 25*</b></span></div><small class="locked-note">*Sin fertilizante acelerador.</small>';grid.prepend(card)}}
initExtra();
