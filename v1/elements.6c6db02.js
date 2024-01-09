function fs(n, e) {
  const t = /* @__PURE__ */ Object.create(null), r = n.split(",");
  for (let i = 0; i < r.length; i++)
    t[r[i]] = !0;
  return e ? (i) => !!t[i.toLowerCase()] : (i) => !!t[i];
}
const xe = Object.freeze({}), Ls = Object.freeze([]), nt = () => {
}, Hl = () => !1, Um = /^on[^a-z]/, da = (n) => Um.test(n), $a = (n) => n.startsWith("onUpdate:"), Se = Object.assign, cc = (n, e) => {
  const t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}, Lm = Object.prototype.hasOwnProperty, me = (n, e) => Lm.call(n, e), Q = Array.isArray, Ds = (n) => Qa(n) === "[object Map]", Dm = (n) => Qa(n) === "[object Set]", re = (n) => typeof n == "function", Ue = (n) => typeof n == "string", lc = (n) => typeof n == "symbol", Oe = (n) => n !== null && typeof n == "object", fc = (n) => Oe(n) && re(n.then) && re(n.catch), Cm = Object.prototype.toString, Qa = (n) => Cm.call(n), mc = (n) => Qa(n).slice(8, -1), qm = (n) => Qa(n) === "[object Object]", dc = (n) => Ue(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, va = /* @__PURE__ */ fs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Km = /* @__PURE__ */ fs(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), eu = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, Pm = /-(\w)/g, Ks = eu((n) => n.replace(Pm, (e, t) => t ? t.toUpperCase() : "")), _m = /\B([A-Z])/g, as = eu(
  (n) => n.replace(_m, "-$1").toLowerCase()
), tu = eu(
  (n) => n.charAt(0).toUpperCase() + n.slice(1)
), gs = eu(
  (n) => n ? `on${tu(n)}` : ""
), io = (n, e) => !Object.is(n, e), Ms = (n, e) => {
  for (let t = 0; t < n.length; t++)
    n[t](e);
}, Ma = (n, e, t) => {
  Object.defineProperty(n, e, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, $m = (n) => {
  const e = parseFloat(n);
  return isNaN(e) ? n : e;
};
let _c;
const Va = () => _c || (_c = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function ms(n) {
  if (Q(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const r = n[t], i = Ue(r) ? jm(r) : ms(r);
      if (i)
        for (const o in i)
          e[o] = i[o];
    }
    return e;
  } else {
    if (Ue(n))
      return n;
    if (Oe(n))
      return n;
  }
}
const Mm = /;(?![^(]*\))/g, Vm = /:([^]+)/, Hm = /\/\*[^]*?\*\//g;
function jm(n) {
  const e = {};
  return n.replace(Hm, "").split(Mm).forEach((t) => {
    if (t) {
      const r = t.split(Vm);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function hc(n) {
  let e = "";
  if (Ue(n))
    e = n;
  else if (Q(n))
    for (let t = 0; t < n.length; t++) {
      const r = hc(n[t]);
      r && (e += r + " ");
    }
  else if (Oe(n))
    for (const t in n)
      n[t] && (e += t + " ");
  return e.trim();
}
const zm = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Wm = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Rm = /* @__PURE__ */ fs(zm), Ym = /* @__PURE__ */ fs(Wm), Xm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zm = /* @__PURE__ */ fs(Xm);
function jl(n) {
  return !!n || n === "";
}
function Uu(n, ...e) {
  console.warn(`[Vue warn] ${n}`, ...e);
}
let gt;
class Gm {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = gt, !e && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = gt;
      try {
        return gt = this, e();
      } finally {
        gt = t;
      }
    } else
      Uu("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    gt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    gt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, r;
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].stop();
      for (t = 0, r = this.cleanups.length; t < r; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Qm(n, e = gt) {
  e && e.active && e.effects.push(n);
}
function ed() {
  return gt;
}
const pc = (n) => {
  const e = new Set(n);
  return e.w = 0, e.n = 0, e;
}, zl = (n) => (n.w & us) > 0, Wl = (n) => (n.n & us) > 0, td = ({ deps: n }) => {
  if (n.length)
    for (let e = 0; e < n.length; e++)
      n[e].w |= us;
}, nd = (n) => {
  const { deps: e } = n;
  if (e.length) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      zl(i) && !Wl(i) ? i.delete(n) : e[t++] = i, i.w &= ~us, i.n &= ~us;
    }
    e.length = t;
  }
}, Lu = /* @__PURE__ */ new WeakMap();
let Ws = 0, us = 1;
const Du = 30;
let Xe;
const Es = Symbol("iterate"), Cu = Symbol("Map key iterate");
class gc {
  constructor(e, t = null, r) {
    this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, Qm(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = Xe, t = is;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = Xe, Xe = this, is = !0, us = 1 << ++Ws, Ws <= Du ? td(this) : $c(this), this.fn();
    } finally {
      Ws <= Du && nd(this), us = 1 << --Ws, Xe = this.parent, is = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Xe === this ? this.deferStop = !0 : this.active && ($c(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function $c(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let t = 0; t < e.length; t++)
      e[t].delete(n);
    e.length = 0;
  }
}
let is = !0;
const Rl = [];
function Os() {
  Rl.push(is), is = !1;
}
function Is() {
  const n = Rl.pop();
  is = n === void 0 ? !0 : n;
}
function We(n, e, t) {
  if (is && Xe) {
    let r = Lu.get(n);
    r || Lu.set(n, r = /* @__PURE__ */ new Map());
    let i = r.get(t);
    i || r.set(t, i = pc()), Yl(i, { effect: Xe, target: n, type: e, key: t });
  }
}
function Yl(n, e) {
  let t = !1;
  Ws <= Du ? Wl(n) || (n.n |= us, t = !zl(n)) : t = !n.has(Xe), t && (n.add(Xe), Xe.deps.push(n), Xe.onTrack && Xe.onTrack(
    Se(
      {
        effect: Xe
      },
      e
    )
  ));
}
function Yt(n, e, t, r, i, o) {
  const u = Lu.get(n);
  if (!u)
    return;
  let c = [];
  if (e === "clear")
    c = [...u.values()];
  else if (t === "length" && Q(n)) {
    const d = Number(r);
    u.forEach((h, g) => {
      (g === "length" || g >= d) && c.push(h);
    });
  } else
    switch (t !== void 0 && c.push(u.get(t)), e) {
      case "add":
        Q(n) ? dc(t) && c.push(u.get("length")) : (c.push(u.get(Es)), Ds(n) && c.push(u.get(Cu)));
        break;
      case "delete":
        Q(n) || (c.push(u.get(Es)), Ds(n) && c.push(u.get(Cu)));
        break;
      case "set":
        Ds(n) && c.push(u.get(Es));
        break;
    }
  const f = { target: n, type: e, key: t, newValue: r, oldValue: i, oldTarget: o };
  if (c.length === 1)
    c[0] && qu(c[0], f);
  else {
    const d = [];
    for (const h of c)
      h && d.push(...h);
    qu(pc(d), f);
  }
}
function qu(n, e) {
  const t = Q(n) ? n : [...n];
  for (const r of t)
    r.computed && Mc(r, e);
  for (const r of t)
    r.computed || Mc(r, e);
}
function Mc(n, e) {
  (n !== Xe || n.allowRecurse) && (n.onTrigger && n.onTrigger(Se({ effect: n }, e)), n.scheduler ? n.scheduler() : n.run());
}
const rd = /* @__PURE__ */ fs("__proto__,__v_isRef,__isVue"), Xl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(lc)
), id = /* @__PURE__ */ nu(), sd = /* @__PURE__ */ nu(!1, !0), od = /* @__PURE__ */ nu(!0), ad = /* @__PURE__ */ nu(!0, !0), Vc = /* @__PURE__ */ ud();
function ud() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...t) {
      const r = ue(this);
      for (let o = 0, u = this.length; o < u; o++)
        We(r, "get", o + "");
      const i = r[e](...t);
      return i === -1 || i === !1 ? r[e](...t.map(ue)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...t) {
      Os();
      const r = ue(this)[e].apply(this, t);
      return Is(), r;
    };
  }), n;
}
function cd(n) {
  const e = ue(this);
  return We(e, "has", n), e.hasOwnProperty(n);
}
function nu(n = !1, e = !1) {
  return function(r, i, o) {
    if (i === "__v_isReactive")
      return !n;
    if (i === "__v_isReadonly")
      return n;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && o === (n ? e ? sf : rf : e ? nf : tf).get(r))
      return r;
    const u = Q(r);
    if (!n) {
      if (u && me(Vc, i))
        return Reflect.get(Vc, i, o);
      if (i === "hasOwnProperty")
        return cd;
    }
    const c = Reflect.get(r, i, o);
    return (lc(i) ? Xl.has(i) : rd(i)) || (n || We(r, "get", i), e) ? c : Ke(c) ? u && dc(i) ? c : c.value : Oe(c) ? n ? of(c) : su(c) : c;
  };
}
const ld = /* @__PURE__ */ Zl(), fd = /* @__PURE__ */ Zl(!0);
function Zl(n = !1) {
  return function(t, r, i, o) {
    let u = t[r];
    if (cs(u) && Ke(u) && !Ke(i))
      return !1;
    if (!n && (!Ha(i) && !cs(i) && (u = ue(u), i = ue(i)), !Q(t) && Ke(u) && !Ke(i)))
      return u.value = i, !0;
    const c = Q(t) && dc(r) ? Number(r) < t.length : me(t, r), f = Reflect.set(t, r, i, o);
    return t === ue(o) && (c ? io(i, u) && Yt(t, "set", r, i, u) : Yt(t, "add", r, i)), f;
  };
}
function md(n, e) {
  const t = me(n, e), r = n[e], i = Reflect.deleteProperty(n, e);
  return i && t && Yt(n, "delete", e, void 0, r), i;
}
function dd(n, e) {
  const t = Reflect.has(n, e);
  return (!lc(e) || !Xl.has(e)) && We(n, "has", e), t;
}
function hd(n) {
  return We(n, "iterate", Q(n) ? "length" : Es), Reflect.ownKeys(n);
}
const Gl = {
  get: id,
  set: ld,
  deleteProperty: md,
  has: dd,
  ownKeys: hd
}, Ql = {
  get: od,
  set(n, e) {
    return Uu(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      n
    ), !0;
  },
  deleteProperty(n, e) {
    return Uu(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      n
    ), !0;
  }
}, pd = /* @__PURE__ */ Se(
  {},
  Gl,
  {
    get: sd,
    set: fd
  }
), gd = /* @__PURE__ */ Se(
  {},
  Ql,
  {
    get: ad
  }
), wc = (n) => n, ru = (n) => Reflect.getPrototypeOf(n);
function Ea(n, e, t = !1, r = !1) {
  n = n.__v_raw;
  const i = ue(n), o = ue(e);
  t || (e !== o && We(i, "get", e), We(i, "get", o));
  const { has: u } = ru(i), c = r ? wc : t ? yc : so;
  if (u.call(i, e))
    return c(n.get(e));
  if (u.call(i, o))
    return c(n.get(o));
  n !== i && n.get(e);
}
function Na(n, e = !1) {
  const t = this.__v_raw, r = ue(t), i = ue(n);
  return e || (n !== i && We(r, "has", n), We(r, "has", i)), n === i ? t.has(n) : t.has(n) || t.has(i);
}
function ba(n, e = !1) {
  return n = n.__v_raw, !e && We(ue(n), "iterate", Es), Reflect.get(n, "size", n);
}
function Hc(n) {
  n = ue(n);
  const e = ue(this);
  return ru(e).has.call(e, n) || (e.add(n), Yt(e, "add", n, n)), this;
}
function jc(n, e) {
  e = ue(e);
  const t = ue(this), { has: r, get: i } = ru(t);
  let o = r.call(t, n);
  o ? ef(t, r, n) : (n = ue(n), o = r.call(t, n));
  const u = i.call(t, n);
  return t.set(n, e), o ? io(e, u) && Yt(t, "set", n, e, u) : Yt(t, "add", n, e), this;
}
function zc(n) {
  const e = ue(this), { has: t, get: r } = ru(e);
  let i = t.call(e, n);
  i ? ef(e, t, n) : (n = ue(n), i = t.call(e, n));
  const o = r ? r.call(e, n) : void 0, u = e.delete(n);
  return i && Yt(e, "delete", n, void 0, o), u;
}
function Wc() {
  const n = ue(this), e = n.size !== 0, t = Ds(n) ? new Map(n) : new Set(n), r = n.clear();
  return e && Yt(n, "clear", void 0, void 0, t), r;
}
function xa(n, e) {
  return function(r, i) {
    const o = this, u = o.__v_raw, c = ue(u), f = e ? wc : n ? yc : so;
    return !n && We(c, "iterate", Es), u.forEach((d, h) => r.call(i, f(d), f(h), o));
  };
}
function Ba(n, e, t) {
  return function(...r) {
    const i = this.__v_raw, o = ue(i), u = Ds(o), c = n === "entries" || n === Symbol.iterator && u, f = n === "keys" && u, d = i[n](...r), h = t ? wc : e ? yc : so;
    return !e && We(
      o,
      "iterate",
      f ? Cu : Es
    ), {
      // iterator protocol
      next() {
        const { value: g, done: y } = d.next();
        return y ? { value: g, done: y } : {
          value: c ? [h(g[0]), h(g[1])] : h(g),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vi(n) {
  return function(...e) {
    {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(
        `${tu(n)} operation ${t}failed: target is readonly.`,
        ue(this)
      );
    }
    return n === "delete" ? !1 : this;
  };
}
function wd() {
  const n = {
    get(o) {
      return Ea(this, o);
    },
    get size() {
      return ba(this);
    },
    has: Na,
    add: Hc,
    set: jc,
    delete: zc,
    clear: Wc,
    forEach: xa(!1, !1)
  }, e = {
    get(o) {
      return Ea(this, o, !1, !0);
    },
    get size() {
      return ba(this);
    },
    has: Na,
    add: Hc,
    set: jc,
    delete: zc,
    clear: Wc,
    forEach: xa(!1, !0)
  }, t = {
    get(o) {
      return Ea(this, o, !0);
    },
    get size() {
      return ba(this, !0);
    },
    has(o) {
      return Na.call(this, o, !0);
    },
    add: Vi("add"),
    set: Vi("set"),
    delete: Vi("delete"),
    clear: Vi("clear"),
    forEach: xa(!0, !1)
  }, r = {
    get(o) {
      return Ea(this, o, !0, !0);
    },
    get size() {
      return ba(this, !0);
    },
    has(o) {
      return Na.call(this, o, !0);
    },
    add: Vi("add"),
    set: Vi("set"),
    delete: Vi("delete"),
    clear: Vi("clear"),
    forEach: xa(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    n[o] = Ba(
      o,
      !1,
      !1
    ), t[o] = Ba(
      o,
      !0,
      !1
    ), e[o] = Ba(
      o,
      !1,
      !0
    ), r[o] = Ba(
      o,
      !0,
      !0
    );
  }), [
    n,
    t,
    e,
    r
  ];
}
const [
  yd,
  Td,
  Ed,
  Nd
] = /* @__PURE__ */ wd();
function iu(n, e) {
  const t = e ? n ? Nd : Ed : n ? Td : yd;
  return (r, i, o) => i === "__v_isReactive" ? !n : i === "__v_isReadonly" ? n : i === "__v_raw" ? r : Reflect.get(
    me(t, i) && i in r ? t : r,
    i,
    o
  );
}
const bd = {
  get: /* @__PURE__ */ iu(!1, !1)
}, xd = {
  get: /* @__PURE__ */ iu(!1, !0)
}, Bd = {
  get: /* @__PURE__ */ iu(!0, !1)
}, kd = {
  get: /* @__PURE__ */ iu(!0, !0)
};
function ef(n, e, t) {
  const r = ue(t);
  if (r !== t && e.call(n, r)) {
    const i = mc(n);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tf = /* @__PURE__ */ new WeakMap(), nf = /* @__PURE__ */ new WeakMap(), rf = /* @__PURE__ */ new WeakMap(), sf = /* @__PURE__ */ new WeakMap();
function Od(n) {
  switch (n) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Id(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : Od(mc(n));
}
function su(n) {
  return cs(n) ? n : ou(
    n,
    !1,
    Gl,
    bd,
    tf
  );
}
function Sd(n) {
  return ou(
    n,
    !1,
    pd,
    xd,
    nf
  );
}
function of(n) {
  return ou(
    n,
    !0,
    Ql,
    Bd,
    rf
  );
}
function Rs(n) {
  return ou(
    n,
    !0,
    gd,
    kd,
    sf
  );
}
function ou(n, e, t, r, i) {
  if (!Oe(n))
    return console.warn(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(e && n.__v_isReactive))
    return n;
  const o = i.get(n);
  if (o)
    return o;
  const u = Id(n);
  if (u === 0)
    return n;
  const c = new Proxy(
    n,
    u === 2 ? r : t
  );
  return i.set(n, c), c;
}
function Ns(n) {
  return cs(n) ? Ns(n.__v_raw) : !!(n && n.__v_isReactive);
}
function cs(n) {
  return !!(n && n.__v_isReadonly);
}
function Ha(n) {
  return !!(n && n.__v_isShallow);
}
function Ku(n) {
  return Ns(n) || cs(n);
}
function ue(n) {
  const e = n && n.__v_raw;
  return e ? ue(e) : n;
}
function af(n) {
  return Ma(n, "__v_skip", !0), n;
}
const so = (n) => Oe(n) ? su(n) : n, yc = (n) => Oe(n) ? of(n) : n;
function uf(n) {
  is && Xe && (n = ue(n), Yl(n.dep || (n.dep = pc()), {
    target: n,
    type: "get",
    key: "value"
  }));
}
function cf(n, e) {
  n = ue(n);
  const t = n.dep;
  t && qu(t, {
    target: n,
    type: "set",
    key: "value",
    newValue: e
  });
}
function Ke(n) {
  return !!(n && n.__v_isRef === !0);
}
function Bt(n) {
  return Jd(n, !1);
}
function Jd(n, e) {
  return Ke(n) ? n : new vd(n, e);
}
class vd {
  constructor(e, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : ue(e), this._value = t ? e : so(e);
  }
  get value() {
    return uf(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Ha(e) || cs(e);
    e = t ? e : ue(e), io(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : so(e), cf(this, e));
  }
}
function Xi(n) {
  return Ke(n) ? n.value : n;
}
const Fd = {
  get: (n, e, t) => Xi(Reflect.get(n, e, t)),
  set: (n, e, t, r) => {
    const i = n[e];
    return Ke(i) && !Ke(t) ? (i.value = t, !0) : Reflect.set(n, e, t, r);
  }
};
function lf(n) {
  return Ns(n) ? n : new Proxy(n, Fd);
}
class Ad {
  constructor(e, t, r, i) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new gc(e, () => {
      this._dirty || (this._dirty = !0, cf(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = ue(this);
    return uf(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Ud(n, e, t = !1) {
  let r, i;
  const o = re(n);
  o ? (r = n, i = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r = n.get, i = n.set);
  const u = new Ad(r, i, o || !i, t);
  return e && !t && (u.effect.onTrack = e.onTrack, u.effect.onTrigger = e.onTrigger), u;
}
const bs = [];
function Fa(n) {
  bs.push(n);
}
function Aa() {
  bs.pop();
}
function q(n, ...e) {
  Os();
  const t = bs.length ? bs[bs.length - 1].component : null, r = t && t.appContext.config.warnHandler, i = Ld();
  if (r)
    Pi(
      r,
      t,
      11,
      [
        n + e.join(""),
        t && t.proxy,
        i.map(
          ({ vnode: o }) => `at <${du(t, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${n}`, ...e];
    i.length && o.push(`
`, ...Dd(i)), console.warn(...o);
  }
  Is();
}
function Ld() {
  let n = bs[bs.length - 1];
  if (!n)
    return [];
  const e = [];
  for (; n; ) {
    const t = e[0];
    t && t.vnode === n ? t.recurseCount++ : e.push({
      vnode: n,
      recurseCount: 0
    });
    const r = n.component && n.component.parent;
    n = r && r.vnode;
  }
  return e;
}
function Dd(n) {
  const e = [];
  return n.forEach((t, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Cd(t));
  }), e;
}
function Cd({ vnode: n, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", r = n.component ? n.component.parent == null : !1, i = ` at <${du(
    n.component,
    n.type,
    r
  )}`, o = ">" + t;
  return n.props ? [i, ...qd(n.props), o] : [i + o];
}
function qd(n) {
  const e = [], t = Object.keys(n);
  return t.slice(0, 3).forEach((r) => {
    e.push(...ff(r, n[r]));
  }), t.length > 3 && e.push(" ..."), e;
}
function ff(n, e, t) {
  return Ue(e) ? (e = JSON.stringify(e), t ? e : [`${n}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${n}=${e}`] : Ke(e) ? (e = ff(n, ue(e.value), !0), t ? e : [`${n}=Ref<`, e, ">"]) : re(e) ? [`${n}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ue(e), t ? e : [`${n}=`, e]);
}
const Tc = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Pi(n, e, t, r) {
  let i;
  try {
    i = r ? n(...r) : n();
  } catch (o) {
    au(o, e, t);
  }
  return i;
}
function kt(n, e, t, r) {
  if (re(n)) {
    const o = Pi(n, e, t, r);
    return o && fc(o) && o.catch((u) => {
      au(u, e, t);
    }), o;
  }
  const i = [];
  for (let o = 0; o < n.length; o++)
    i.push(kt(n[o], e, t, r));
  return i;
}
function au(n, e, t, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const u = e.proxy, c = Tc[t];
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](n, u, c) === !1)
            return;
      }
      o = o.parent;
    }
    const f = e.appContext.config.errorHandler;
    if (f) {
      Pi(
        f,
        null,
        10,
        [n, u, c]
      );
      return;
    }
  }
  Kd(n, t, i, r);
}
function Kd(n, e, t, r = !0) {
  {
    const i = Tc[e];
    if (t && Fa(t), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), t && Aa(), r)
      throw n;
    console.error(n);
  }
}
let oo = !1, Pu = !1;
const ze = [];
let Ft = 0;
const Cs = [];
let vt = null, Zi = 0;
const mf = /* @__PURE__ */ Promise.resolve();
let Ec = null;
const Pd = 100;
function _u(n) {
  const e = Ec || mf;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function _d(n) {
  let e = Ft + 1, t = ze.length;
  for (; e < t; ) {
    const r = e + t >>> 1;
    ao(ze[r]) < n ? e = r + 1 : t = r;
  }
  return e;
}
function uu(n) {
  (!ze.length || !ze.includes(
    n,
    oo && n.allowRecurse ? Ft + 1 : Ft
  )) && (n.id == null ? ze.push(n) : ze.splice(_d(n.id), 0, n), df());
}
function df() {
  !oo && !Pu && (Pu = !0, Ec = mf.then(gf));
}
function $d(n) {
  const e = ze.indexOf(n);
  e > Ft && ze.splice(e, 1);
}
function hf(n) {
  Q(n) ? Cs.push(...n) : (!vt || !vt.includes(
    n,
    n.allowRecurse ? Zi + 1 : Zi
  )) && Cs.push(n), df();
}
function Rc(n, e = oo ? Ft + 1 : 0) {
  for (n = n || /* @__PURE__ */ new Map(); e < ze.length; e++) {
    const t = ze[e];
    if (t && t.pre) {
      if (Nc(n, t))
        continue;
      ze.splice(e, 1), e--, t();
    }
  }
}
function pf(n) {
  if (Cs.length) {
    const e = [...new Set(Cs)];
    if (Cs.length = 0, vt) {
      vt.push(...e);
      return;
    }
    for (vt = e, n = n || /* @__PURE__ */ new Map(), vt.sort((t, r) => ao(t) - ao(r)), Zi = 0; Zi < vt.length; Zi++)
      Nc(n, vt[Zi]) || vt[Zi]();
    vt = null, Zi = 0;
  }
}
const ao = (n) => n.id == null ? 1 / 0 : n.id, Md = (n, e) => {
  const t = ao(n) - ao(e);
  if (t === 0) {
    if (n.pre && !e.pre)
      return -1;
    if (e.pre && !n.pre)
      return 1;
  }
  return t;
};
function gf(n) {
  Pu = !1, oo = !0, n = n || /* @__PURE__ */ new Map(), ze.sort(Md);
  const e = (t) => Nc(n, t);
  try {
    for (Ft = 0; Ft < ze.length; Ft++) {
      const t = ze[Ft];
      if (t && t.active !== !1) {
        if (e(t))
          continue;
        Pi(t, null, 14);
      }
    }
  } finally {
    Ft = 0, ze.length = 0, pf(n), oo = !1, Ec = null, (ze.length || Cs.length) && gf(n);
  }
}
function Nc(n, e) {
  if (!n.has(e))
    n.set(e, 1);
  else {
    const t = n.get(e);
    if (t > Pd) {
      const r = e.ownerInstance, i = r && jf(r.type);
      return q(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      n.set(e, t + 1);
  }
}
let ss = !1;
const Fs = /* @__PURE__ */ new Set();
Va().__VUE_HMR_RUNTIME__ = {
  createRecord: yu(wf),
  rerender: yu(jd),
  reload: yu(zd)
};
const ks = /* @__PURE__ */ new Map();
function Vd(n) {
  const e = n.type.__hmrId;
  let t = ks.get(e);
  t || (wf(e, n.type), t = ks.get(e)), t.instances.add(n);
}
function Hd(n) {
  ks.get(n.type.__hmrId).instances.delete(n);
}
function wf(n, e) {
  return ks.has(n) ? !1 : (ks.set(n, {
    initialDef: eo(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function eo(n) {
  return zf(n) ? n.__vccOpts : n;
}
function jd(n, e) {
  const t = ks.get(n);
  t && (t.initialDef.render = e, [...t.instances].forEach((r) => {
    e && (r.render = e, eo(r.type).render = e), r.renderCache = [], ss = !0, r.update(), ss = !1;
  }));
}
function zd(n, e) {
  const t = ks.get(n);
  if (!t)
    return;
  e = eo(e), Yc(t.initialDef, e);
  const r = [...t.instances];
  for (const i of r) {
    const o = eo(i.type);
    Fs.has(o) || (o !== t.initialDef && Yc(o, e), Fs.add(o)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Fs.add(o), i.ceReload(e.styles), Fs.delete(o)) : i.parent ? uu(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  hf(() => {
    for (const i of r)
      Fs.delete(
        eo(i.type)
      );
  });
}
function Yc(n, e) {
  Se(n, e);
  for (const t in n)
    t !== "__file" && !(t in e) && delete n[t];
}
function yu(n) {
  return (e, t) => {
    try {
      return n(e, t);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let At, Ys = [], $u = !1;
function ha(n, ...e) {
  At ? At.emit(n, ...e) : $u || Ys.push({ event: n, args: e });
}
function yf(n, e) {
  var t, r;
  At = n, At ? (At.enabled = !0, Ys.forEach(({ event: i, args: o }) => At.emit(i, ...o)), Ys = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (t = window.navigator) == null ? void 0 : t.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    yf(o, e);
  }), setTimeout(() => {
    At || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $u = !0, Ys = []);
  }, 3e3)) : ($u = !0, Ys = []);
}
function Wd(n, e) {
  ha("app:init", n, e, {
    Fragment: wt,
    Text: pa,
    Comment: ut,
    Static: La
  });
}
function Rd(n) {
  ha("app:unmount", n);
}
const Yd = /* @__PURE__ */ bc(
  "component:added"
  /* COMPONENT_ADDED */
), Tf = /* @__PURE__ */ bc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Xd = /* @__PURE__ */ bc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Zd = (n) => {
  At && typeof At.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !At.cleanupBuffer(n) && Xd(n);
};
function bc(n) {
  return (e) => {
    ha(
      n,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Gd = /* @__PURE__ */ Ef(
  "perf:start"
  /* PERFORMANCE_START */
), Qd = /* @__PURE__ */ Ef(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ef(n) {
  return (e, t, r) => {
    ha(n, e.appContext.app, e.uid, e, t, r);
  };
}
function eh(n, e, t) {
  ha(
    "component:emit",
    n.appContext.app,
    n,
    e,
    t
  );
}
function th(n, e, ...t) {
  if (n.isUnmounted)
    return;
  const r = n.vnode.props || xe;
  {
    const {
      emitsOptions: h,
      propsOptions: [g]
    } = n;
    if (h)
      if (!(e in h))
        (!g || !(gs(e) in g)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${gs(e)}" prop.`
        );
      else {
        const y = h[e];
        re(y) && (y(...t) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = t;
  const o = e.startsWith("update:"), u = o && e.slice(7);
  if (u && u in r) {
    const h = `${u === "modelValue" ? "model" : u}Modifiers`, { number: g, trim: y } = r[h] || xe;
    y && (i = t.map((b) => Ue(b) ? b.trim() : b)), g && (i = t.map($m));
  }
  eh(n, e, i);
  {
    const h = e.toLowerCase();
    h !== e && r[gs(h)] && q(
      `Event "${h}" is emitted in component ${du(
        n,
        n.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${as(e)}" instead of "${e}".`
    );
  }
  let c, f = r[c = gs(e)] || // also try camelCase event handler (#2249)
  r[c = gs(Ks(e))];
  !f && o && (f = r[c = gs(as(e))]), f && kt(
    f,
    n,
    6,
    i
  );
  const d = r[c + "Once"];
  if (d) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[c])
      return;
    n.emitted[c] = !0, kt(
      d,
      n,
      6,
      i
    );
  }
}
function Nf(n, e, t = !1) {
  const r = e.emitsCache, i = r.get(n);
  if (i !== void 0)
    return i;
  const o = n.emits;
  let u = {}, c = !1;
  if (!re(n)) {
    const f = (d) => {
      const h = Nf(d, e, !0);
      h && (c = !0, Se(u, h));
    };
    !t && e.mixins.length && e.mixins.forEach(f), n.extends && f(n.extends), n.mixins && n.mixins.forEach(f);
  }
  return !o && !c ? (Oe(n) && r.set(n, null), null) : (Q(o) ? o.forEach((f) => u[f] = null) : Se(u, o), Oe(n) && r.set(n, u), u);
}
function cu(n, e) {
  return !n || !da(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), me(n, e[0].toLowerCase() + e.slice(1)) || me(n, as(e)) || me(n, e));
}
let mt = null, bf = null;
function ja(n) {
  const e = mt;
  return mt = n, bf = n && n.type.__scopeId || null, e;
}
function nh(n, e = mt, t) {
  if (!e || n._n)
    return n;
  const r = (...i) => {
    r._d && ul(-1);
    const o = ja(e);
    let u;
    try {
      u = n(...i);
    } finally {
      ja(o), r._d && ul(1);
    }
    return Tf(e), u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Mu = !1;
function za() {
  Mu = !0;
}
function Tu(n) {
  const {
    type: e,
    vnode: t,
    proxy: r,
    withProxy: i,
    props: o,
    propsOptions: [u],
    slots: c,
    attrs: f,
    emit: d,
    render: h,
    renderCache: g,
    data: y,
    setupState: b,
    ctx: S,
    inheritAttrs: A
  } = n;
  let M, W;
  const fe = ja(n);
  Mu = !1;
  try {
    if (t.shapeFlag & 4) {
      const F = i || r;
      M = yt(
        h.call(
          F,
          F,
          g,
          o,
          b,
          y,
          S
        )
      ), W = f;
    } else {
      const F = e;
      f === o && za(), M = yt(
        F.length > 1 ? F(
          o,
          {
            get attrs() {
              return za(), f;
            },
            slots: c,
            emit: d
          }
        ) : F(
          o,
          null
          /* we know it doesn't need it */
        )
      ), W = e.props ? f : ih(f);
    }
  } catch (F) {
    to.length = 0, au(F, n, 1), M = Rt(ut);
  }
  let _ = M, te;
  if (M.patchFlag > 0 && M.patchFlag & 2048 && ([_, te] = rh(M)), W && A !== !1) {
    const F = Object.keys(W), { shapeFlag: R } = _;
    if (F.length) {
      if (R & 7)
        u && F.some($a) && (W = sh(
          W,
          u
        )), _ = ls(_, W);
      else if (!Mu && _.type !== ut) {
        const G = Object.keys(f), ee = [], oe = [];
        for (let Be = 0, Ie = G.length; Be < Ie; Be++) {
          const Le = G[Be];
          da(Le) ? $a(Le) || ee.push(Le[2].toLowerCase() + Le.slice(3)) : oe.push(Le);
        }
        oe.length && q(
          `Extraneous non-props attributes (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ee.length && q(
          `Extraneous non-emits event listeners (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (Xc(_) || q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), _ = ls(_), _.dirs = _.dirs ? _.dirs.concat(t.dirs) : t.dirs), t.transition && (Xc(_) || q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), _.transition = t.transition), te ? te(_) : M = _, ja(fe), M;
}
const rh = (n) => {
  const e = n.children, t = n.dynamicChildren, r = xf(e);
  if (!r)
    return [n, void 0];
  const i = e.indexOf(r), o = t ? t.indexOf(r) : -1, u = (c) => {
    e[i] = c, t && (o > -1 ? t[o] = c : c.patchFlag > 0 && (n.dynamicChildren = [...t, c]));
  };
  return [yt(r), u];
};
function xf(n) {
  let e;
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (Sc(r)) {
      if (r.type !== ut || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const ih = (n) => {
  let e;
  for (const t in n)
    (t === "class" || t === "style" || da(t)) && ((e || (e = {}))[t] = n[t]);
  return e;
}, sh = (n, e) => {
  const t = {};
  for (const r in n)
    (!$a(r) || !(r.slice(9) in e)) && (t[r] = n[r]);
  return t;
}, Xc = (n) => n.shapeFlag & 7 || n.type === ut;
function oh(n, e, t) {
  const { props: r, children: i, component: o } = n, { props: u, children: c, patchFlag: f } = e, d = o.emitsOptions;
  if ((i || c) && ss || e.dirs || e.transition)
    return !0;
  if (t && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Zc(r, u, d) : !!u;
    if (f & 8) {
      const h = e.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const y = h[g];
        if (u[y] !== r[y] && !cu(d, y))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : r === u ? !1 : r ? u ? Zc(r, u, d) : !0 : !!u;
  return !1;
}
function Zc(n, e, t) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(n).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (e[o] !== n[o] && !cu(t, o))
      return !0;
  }
  return !1;
}
function ah({ vnode: n, parent: e }, t) {
  for (; e && e.subTree === n; )
    (n = e.vnode).el = t, e = e.parent;
}
const uh = (n) => n.__isSuspense;
function ch(n, e) {
  e && e.pendingBranch ? Q(n) ? e.effects.push(...n) : e.effects.push(n) : hf(n);
}
function Bf(n, e) {
  return xc(n, null, e);
}
const ka = {};
function Eu(n, e, t) {
  return re(e) || q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xc(n, e, t);
}
function xc(n, e, { immediate: t, deep: r, flush: i, onTrack: o, onTrigger: u } = xe) {
  var c;
  e || (t !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (F) => {
    q(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = ed() === ((c = Ve) == null ? void 0 : c.scope) ? Ve : null;
  let h, g = !1, y = !1;
  if (Ke(n) ? (h = () => n.value, g = Ha(n)) : Ns(n) ? (h = () => n, r = !0) : Q(n) ? (y = !0, g = n.some((F) => Ns(F) || Ha(F)), h = () => n.map((F) => {
    if (Ke(F))
      return F.value;
    if (Ns(F))
      return Us(F);
    if (re(F))
      return Pi(F, d, 2);
    f(F);
  })) : re(n) ? e ? h = () => Pi(n, d, 2) : h = () => {
    if (!(d && d.isUnmounted))
      return b && b(), kt(
        n,
        d,
        3,
        [S]
      );
  } : (h = nt, f(n)), e && r) {
    const F = h;
    h = () => Us(F());
  }
  let b, S = (F) => {
    b = _.onStop = () => {
      Pi(F, d, 4);
    };
  }, A;
  if (co)
    if (S = nt, e ? t && kt(e, d, 3, [
      h(),
      y ? [] : void 0,
      S
    ]) : h(), i === "sync") {
      const F = Np();
      A = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return nt;
  let M = y ? new Array(n.length).fill(ka) : ka;
  const W = () => {
    if (_.active)
      if (e) {
        const F = _.run();
        (r || g || (y ? F.some(
          (R, G) => io(R, M[G])
        ) : io(F, M))) && (b && b(), kt(e, d, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          M === ka ? void 0 : y && M[0] === ka ? [] : M,
          S
        ]), M = F);
      } else
        _.run();
  };
  W.allowRecurse = !!e;
  let fe;
  i === "sync" ? fe = W : i === "post" ? fe = () => Qe(W, d && d.suspense) : (W.pre = !0, d && (W.id = d.uid), fe = () => uu(W));
  const _ = new gc(h, fe);
  _.onTrack = o, _.onTrigger = u, e ? t ? W() : M = _.run() : i === "post" ? Qe(
    _.run.bind(_),
    d && d.suspense
  ) : _.run();
  const te = () => {
    _.stop(), d && d.scope && cc(d.scope.effects, _);
  };
  return A && A.push(te), te;
}
function lh(n, e, t) {
  const r = this.proxy, i = Ue(n) ? n.includes(".") ? kf(r, n) : () => r[n] : n.bind(r, r);
  let o;
  re(e) ? o = e : (o = e.handler, t = e);
  const u = Ve;
  Ps(this);
  const c = xc(i, o.bind(r), t);
  return u ? Ps(u) : Bs(), c;
}
function kf(n, e) {
  const t = e.split(".");
  return () => {
    let r = n;
    for (let i = 0; i < t.length && r; i++)
      r = r[t[i]];
    return r;
  };
}
function Us(n, e) {
  if (!Oe(n) || n.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(n)))
    return n;
  if (e.add(n), Ke(n))
    Us(n.value, e);
  else if (Q(n))
    for (let t = 0; t < n.length; t++)
      Us(n[t], e);
  else if (Dm(n) || Ds(n))
    n.forEach((t) => {
      Us(t, e);
    });
  else if (qm(n))
    for (const t in n)
      Us(n[t], e);
  return n;
}
function Of(n) {
  Km(n) && q("Do not use built-in directive ids as custom directive id: " + n);
}
function hs(n, e, t, r) {
  const i = n.dirs, o = e && e.dirs;
  for (let u = 0; u < i.length; u++) {
    const c = i[u];
    o && (c.oldValue = o[u].value);
    let f = c.dir[r];
    f && (Os(), kt(f, t, 8, [
      n.el,
      c,
      n,
      e
    ]), Is());
  }
}
function _s(n, e) {
  return re(n) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Se({ name: n.name }, e, { setup: n }))()
  ) : n;
}
const Ua = (n) => !!n.type.__asyncLoader, Bc = (n) => n.type.__isKeepAlive;
function fh(n, e) {
  If(n, "a", e);
}
function mh(n, e) {
  If(n, "da", e);
}
function If(n, e, t = Ve) {
  const r = n.__wdc || (n.__wdc = () => {
    let i = t;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return n();
  });
  if (lu(e, r, t), t) {
    let i = t.parent;
    for (; i && i.parent; )
      Bc(i.parent.vnode) && dh(r, e, t, i), i = i.parent;
  }
}
function dh(n, e, t, r) {
  const i = lu(
    e,
    n,
    r,
    !0
    /* prepend */
  );
  Sf(() => {
    cc(r[e], i);
  }, t);
}
function lu(n, e, t = Ve, r = !1) {
  if (t) {
    const i = t[n] || (t[n] = []), o = e.__weh || (e.__weh = (...u) => {
      if (t.isUnmounted)
        return;
      Os(), Ps(t);
      const c = kt(e, t, n, u);
      return Bs(), Is(), c;
    });
    return r ? i.unshift(o) : i.push(o), o;
  } else {
    const i = gs(Tc[n].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Mi = (n) => (e, t = Ve) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!co || n === "sp") && lu(n, (...r) => e(...r), t)
), hh = Mi("bm"), fu = Mi("m"), ph = Mi("bu"), gh = Mi("u"), wh = Mi("bum"), Sf = Mi("um"), yh = Mi("sp"), Th = Mi(
  "rtg"
), Eh = Mi(
  "rtc"
);
function Nh(n, e = Ve) {
  lu("ec", n, e);
}
const bh = Symbol.for("v-ndc"), Vu = (n) => n ? Vf(n) ? Fc(n) || n.proxy : Vu(n.parent) : null, xs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => Rs(n.props),
    $attrs: (n) => Rs(n.attrs),
    $slots: (n) => Rs(n.slots),
    $refs: (n) => Rs(n.refs),
    $parent: (n) => Vu(n.parent),
    $root: (n) => Vu(n.root),
    $emit: (n) => n.emit,
    $options: (n) => Oc(n),
    $forceUpdate: (n) => n.f || (n.f = () => uu(n.update)),
    $nextTick: (n) => n.n || (n.n = _u.bind(n.proxy)),
    $watch: (n) => lh.bind(n)
  })
), kc = (n) => n === "_" || n === "$", Nu = (n, e) => n !== xe && !n.__isScriptSetup && me(n, e), Jf = {
  get({ _: n }, e) {
    const { ctx: t, setupState: r, data: i, props: o, accessCache: u, type: c, appContext: f } = n;
    if (e === "__isVue")
      return !0;
    let d;
    if (e[0] !== "$") {
      const b = u[e];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return t[e];
          case 3:
            return o[e];
        }
      else {
        if (Nu(r, e))
          return u[e] = 1, r[e];
        if (i !== xe && me(i, e))
          return u[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = n.propsOptions[0]) && me(d, e)
        )
          return u[e] = 3, o[e];
        if (t !== xe && me(t, e))
          return u[e] = 4, t[e];
        Hu && (u[e] = 0);
      }
    }
    const h = xs[e];
    let g, y;
    if (h)
      return e === "$attrs" ? (We(n, "get", e), za()) : e === "$slots" && We(n, "get", e), h(n);
    if (
      // css module (injected by vue-loader)
      (g = c.__cssModules) && (g = g[e])
    )
      return g;
    if (t !== xe && me(t, e))
      return u[e] = 4, t[e];
    if (
      // {} properties
      y = f.config.globalProperties, me(y, e)
    )
      return y[e];
    mt && (!Ue(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== xe && kc(e[0]) && me(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : n === mt && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: n }, e, t) {
    const { data: r, setupState: i, ctx: o } = n;
    return Nu(i, e) ? (i[e] = t, !0) : i.__isScriptSetup && me(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== xe && me(r, e) ? (r[e] = t, !0) : me(n.props, e) ? (q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in n ? (q(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (e in n.appContext.config.globalProperties ? Object.defineProperty(o, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : o[e] = t, !0);
  },
  has({
    _: { data: n, setupState: e, accessCache: t, ctx: r, appContext: i, propsOptions: o }
  }, u) {
    let c;
    return !!t[u] || n !== xe && me(n, u) || Nu(e, u) || (c = o[0]) && me(c, u) || me(r, u) || me(xs, u) || me(i.config.globalProperties, u);
  },
  defineProperty(n, e, t) {
    return t.get != null ? n._.accessCache[e] = 0 : me(t, "value") && this.set(n, e, t.value, null), Reflect.defineProperty(n, e, t);
  }
};
Jf.ownKeys = (n) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(n));
function xh(n) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => n
  }), Object.keys(xs).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => xs[t](n),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: nt
    });
  }), e;
}
function Bh(n) {
  const {
    ctx: e,
    propsOptions: [t]
  } = n;
  t && Object.keys(t).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.props[r],
      set: nt
    });
  });
}
function kh(n) {
  const { ctx: e, setupState: t } = n;
  Object.keys(ue(t)).forEach((r) => {
    if (!t.__isScriptSetup) {
      if (kc(r[0])) {
        q(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => t[r],
        set: nt
      });
    }
  });
}
function Gc(n) {
  return Q(n) ? n.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : n;
}
function Oh() {
  const n = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    n[t] ? q(`${e} property "${t}" is already defined in ${n[t]}.`) : n[t] = e;
  };
}
let Hu = !0;
function Ih(n) {
  const e = Oc(n), t = n.proxy, r = n.ctx;
  Hu = !1, e.beforeCreate && Qc(e.beforeCreate, n, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: u,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: h,
    beforeMount: g,
    mounted: y,
    beforeUpdate: b,
    updated: S,
    activated: A,
    deactivated: M,
    beforeDestroy: W,
    beforeUnmount: fe,
    destroyed: _,
    unmounted: te,
    render: F,
    renderTracked: R,
    renderTriggered: G,
    errorCaptured: ee,
    serverPrefetch: oe,
    // public API
    expose: Be,
    inheritAttrs: Ie,
    // assets
    components: Le,
    directives: Ge,
    filters: Zt
  } = e, je = Oh();
  {
    const [he] = n.propsOptions;
    if (he)
      for (const K in he)
        je("Props", K);
  }
  if (d && Sh(d, r, je), u)
    for (const he in u) {
      const K = u[he];
      re(K) ? (Object.defineProperty(r, he, {
        value: K.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), je("Methods", he)) : q(
        `Method "${he}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    re(i) || q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const he = i.call(t, t);
    if (fc(he) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Oe(he))
      q("data() should return an object.");
    else {
      n.data = su(he);
      for (const K in he)
        je("Data", K), kc(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => he[K],
          set: nt
        });
    }
  }
  if (Hu = !0, o)
    for (const he in o) {
      const K = o[he], C = re(K) ? K.bind(t, t) : re(K.get) ? K.get.bind(t, t) : nt;
      C === nt && q(`Computed property "${he}" has no getter.`);
      const Y = !re(K) && re(K.set) ? K.set.bind(t) : () => {
        q(
          `Write operation failed: computed property "${he}" is readonly.`
        );
      }, z = Tp({
        get: C,
        set: Y
      });
      Object.defineProperty(r, he, {
        enumerable: !0,
        configurable: !0,
        get: () => z.value,
        set: (X) => z.value = X
      }), je("Computed", he);
    }
  if (c)
    for (const he in c)
      vf(c[he], r, t, he);
  if (f) {
    const he = re(f) ? f.call(t) : f;
    Reflect.ownKeys(he).forEach((K) => {
      Lh(K, he[K]);
    });
  }
  h && Qc(h, n, "c");
  function _e(he, K) {
    Q(K) ? K.forEach((C) => he(C.bind(t))) : K && he(K.bind(t));
  }
  if (_e(hh, g), _e(fu, y), _e(ph, b), _e(gh, S), _e(fh, A), _e(mh, M), _e(Nh, ee), _e(Eh, R), _e(Th, G), _e(wh, fe), _e(Sf, te), _e(yh, oe), Q(Be))
    if (Be.length) {
      const he = n.exposed || (n.exposed = {});
      Be.forEach((K) => {
        Object.defineProperty(he, K, {
          get: () => t[K],
          set: (C) => t[K] = C
        });
      });
    } else
      n.exposed || (n.exposed = {});
  F && n.render === nt && (n.render = F), Ie != null && (n.inheritAttrs = Ie), Le && (n.components = Le), Ge && (n.directives = Ge);
}
function Sh(n, e, t = nt) {
  Q(n) && (n = ju(n));
  for (const r in n) {
    const i = n[r];
    let o;
    Oe(i) ? "default" in i ? o = Ot(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : o = Ot(i.from || r) : o = Ot(i), Ke(o) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (u) => o.value = u
    }) : e[r] = o, t("Inject", r);
  }
}
function Qc(n, e, t) {
  kt(
    Q(n) ? n.map((r) => r.bind(e.proxy)) : n.bind(e.proxy),
    e,
    t
  );
}
function vf(n, e, t, r) {
  const i = r.includes(".") ? kf(t, r) : () => t[r];
  if (Ue(n)) {
    const o = e[n];
    re(o) ? Eu(i, o) : q(`Invalid watch handler specified by key "${n}"`, o);
  } else if (re(n))
    Eu(i, n.bind(t));
  else if (Oe(n))
    if (Q(n))
      n.forEach((o) => vf(o, e, t, r));
    else {
      const o = re(n.handler) ? n.handler.bind(t) : e[n.handler];
      re(o) ? Eu(i, o, n) : q(`Invalid watch handler specified by key "${n.handler}"`, o);
    }
  else
    q(`Invalid watch option: "${r}"`, n);
}
function Oc(n) {
  const e = n.type, { mixins: t, extends: r } = e, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: u }
  } = n.appContext, c = o.get(e);
  let f;
  return c ? f = c : !i.length && !t && !r ? f = e : (f = {}, i.length && i.forEach(
    (d) => Wa(f, d, u, !0)
  ), Wa(f, e, u)), Oe(e) && o.set(e, f), f;
}
function Wa(n, e, t, r = !1) {
  const { mixins: i, extends: o } = e;
  o && Wa(n, o, t, !0), i && i.forEach(
    (u) => Wa(n, u, t, !0)
  );
  for (const u in e)
    if (r && u === "expose")
      q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Jh[u] || t && t[u];
      n[u] = c ? c(n[u], e[u]) : e[u];
    }
  return n;
}
const Jh = {
  data: el,
  props: tl,
  emits: tl,
  // objects
  methods: Xs,
  computed: Xs,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: Xs,
  directives: Xs,
  // watch
  watch: Fh,
  // provide / inject
  provide: el,
  inject: vh
};
function el(n, e) {
  return e ? n ? function() {
    return Se(
      re(n) ? n.call(this, this) : n,
      re(e) ? e.call(this, this) : e
    );
  } : e : n;
}
function vh(n, e) {
  return Xs(ju(n), ju(e));
}
function ju(n) {
  if (Q(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++)
      e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Ye(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function Xs(n, e) {
  return n ? Se(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function tl(n, e) {
  return n ? Q(n) && Q(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : Se(
    /* @__PURE__ */ Object.create(null),
    Gc(n),
    Gc(e ?? {})
  ) : e;
}
function Fh(n, e) {
  if (!n)
    return e;
  if (!e)
    return n;
  const t = Se(/* @__PURE__ */ Object.create(null), n);
  for (const r in e)
    t[r] = Ye(n[r], e[r]);
  return t;
}
function Ff() {
  return {
    app: null,
    config: {
      isNativeTag: Hl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ah = 0;
function Uh(n, e) {
  return function(r, i = null) {
    re(r) || (r = Se({}, r)), i != null && !Oe(i) && (q("root props passed to app.mount() must be an object."), i = null);
    const o = Ff();
    Object.defineProperty(o.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        q(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const u = /* @__PURE__ */ new Set();
    let c = !1;
    const f = o.app = {
      _uid: Ah++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: fl,
      get config() {
        return o.config;
      },
      set config(d) {
        q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...h) {
        return u.has(d) ? q("Plugin has already been applied to target app.") : d && re(d.install) ? (u.add(d), d.install(f, ...h)) : re(d) ? (u.add(d), d(f, ...h)) : q(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return o.mixins.includes(d) ? q(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), f;
      },
      component(d, h) {
        return Xu(d, o.config), h ? (o.components[d] && q(`Component "${d}" has already been registered in target app.`), o.components[d] = h, f) : o.components[d];
      },
      directive(d, h) {
        return Of(d), h ? (o.directives[d] && q(`Directive "${d}" has already been registered in target app.`), o.directives[d] = h, f) : o.directives[d];
      },
      mount(d, h, g) {
        if (c)
          q(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && q(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = Rt(
            r,
            i
          );
          return y.appContext = o, o.reload = () => {
            n(ls(y), d, g);
          }, h && e ? e(y, d) : n(y, d, g), c = !0, f._container = d, d.__vue_app__ = f, f._instance = y.component, Wd(f, fl), Fc(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c ? (n(null, f._container), f._instance = null, Rd(f), delete f._container.__vue_app__) : q("Cannot unmount an app that is not mounted.");
      },
      provide(d, h) {
        return d in o.provides && q(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), o.provides[d] = h, f;
      },
      runWithContext(d) {
        Ra = f;
        try {
          return d();
        } finally {
          Ra = null;
        }
      }
    };
    return f;
  };
}
let Ra = null;
function Lh(n, e) {
  if (!Ve)
    q("provide() can only be used inside setup().");
  else {
    let t = Ve.provides;
    const r = Ve.parent && Ve.parent.provides;
    r === t && (t = Ve.provides = Object.create(r)), t[n] = e;
  }
}
function Ot(n, e, t = !1) {
  const r = Ve || mt;
  if (r || Ra) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Ra._context.provides;
    if (i && n in i)
      return i[n];
    if (arguments.length > 1)
      return t && re(e) ? e.call(r && r.proxy) : e;
    q(`injection "${String(n)}" not found.`);
  } else
    q("inject() can only be used inside setup() or functional components.");
}
function Dh(n, e, t, r = !1) {
  const i = {}, o = {};
  Ma(o, mu, 1), n.propsDefaults = /* @__PURE__ */ Object.create(null), Af(n, e, i, o);
  for (const u in n.propsOptions[0])
    u in i || (i[u] = void 0);
  Lf(e || {}, i, n), t ? n.props = r ? i : Sd(i) : n.type.props ? n.props = i : n.props = o, n.attrs = o;
}
function Ch(n) {
  for (; n; ) {
    if (n.type.__hmrId)
      return !0;
    n = n.parent;
  }
}
function qh(n, e, t, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: u }
  } = n, c = ue(i), [f] = n.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Ch(n) && (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const h = n.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let y = h[g];
        if (cu(n.emitsOptions, y))
          continue;
        const b = e[y];
        if (f)
          if (me(o, y))
            b !== o[y] && (o[y] = b, d = !0);
          else {
            const S = Ks(y);
            i[S] = zu(
              f,
              c,
              S,
              b,
              n,
              !1
              /* isAbsent */
            );
          }
        else
          b !== o[y] && (o[y] = b, d = !0);
      }
    }
  } else {
    Af(n, e, i, o) && (d = !0);
    let h;
    for (const g in c)
      (!e || // for camelCase
      !me(e, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = as(g)) === g || !me(e, h))) && (f ? t && // for camelCase
      (t[g] !== void 0 || // for kebab-case
      t[h] !== void 0) && (i[g] = zu(
        f,
        c,
        g,
        void 0,
        n,
        !0
        /* isAbsent */
      )) : delete i[g]);
    if (o !== c)
      for (const g in o)
        (!e || !me(e, g)) && (delete o[g], d = !0);
  }
  d && Yt(n, "set", "$attrs"), Lf(e || {}, i, n);
}
function Af(n, e, t, r) {
  const [i, o] = n.propsOptions;
  let u = !1, c;
  if (e)
    for (let f in e) {
      if (va(f))
        continue;
      const d = e[f];
      let h;
      i && me(i, h = Ks(f)) ? !o || !o.includes(h) ? t[h] = d : (c || (c = {}))[h] = d : cu(n.emitsOptions, f) || (!(f in r) || d !== r[f]) && (r[f] = d, u = !0);
    }
  if (o) {
    const f = ue(t), d = c || xe;
    for (let h = 0; h < o.length; h++) {
      const g = o[h];
      t[g] = zu(
        i,
        f,
        g,
        d[g],
        n,
        !me(d, g)
      );
    }
  }
  return u;
}
function zu(n, e, t, r, i, o) {
  const u = n[t];
  if (u != null) {
    const c = me(u, "default");
    if (c && r === void 0) {
      const f = u.default;
      if (u.type !== Function && !u.skipFactory && re(f)) {
        const { propsDefaults: d } = i;
        t in d ? r = d[t] : (Ps(i), r = d[t] = f.call(
          null,
          e
        ), Bs());
      } else
        r = f;
    }
    u[
      0
      /* shouldCast */
    ] && (o && !c ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === as(t)) && (r = !0));
  }
  return r;
}
function Uf(n, e, t = !1) {
  const r = e.propsCache, i = r.get(n);
  if (i)
    return i;
  const o = n.props, u = {}, c = [];
  let f = !1;
  if (!re(n)) {
    const h = (g) => {
      f = !0;
      const [y, b] = Uf(g, e, !0);
      Se(u, y), b && c.push(...b);
    };
    !t && e.mixins.length && e.mixins.forEach(h), n.extends && h(n.extends), n.mixins && n.mixins.forEach(h);
  }
  if (!o && !f)
    return Oe(n) && r.set(n, Ls), Ls;
  if (Q(o))
    for (let h = 0; h < o.length; h++) {
      Ue(o[h]) || q("props must be strings when using array syntax.", o[h]);
      const g = Ks(o[h]);
      nl(g) && (u[g] = xe);
    }
  else if (o) {
    Oe(o) || q("invalid props options", o);
    for (const h in o) {
      const g = Ks(h);
      if (nl(g)) {
        const y = o[h], b = u[g] = Q(y) || re(y) ? { type: y } : Se({}, y);
        if (b) {
          const S = il(Boolean, b.type), A = il(String, b.type);
          b[
            0
            /* shouldCast */
          ] = S > -1, b[
            1
            /* shouldCastTrue */
          ] = A < 0 || S < A, (S > -1 || me(b, "default")) && c.push(g);
        }
      }
    }
  }
  const d = [u, c];
  return Oe(n) && r.set(n, d), d;
}
function nl(n) {
  return n[0] !== "$" ? !0 : (q(`Invalid prop name: "${n}" is a reserved property.`), !1);
}
function Wu(n) {
  const e = n && n.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : n === null ? "null" : "";
}
function rl(n, e) {
  return Wu(n) === Wu(e);
}
function il(n, e) {
  return Q(e) ? e.findIndex((t) => rl(t, n)) : re(e) && rl(e, n) ? 0 : -1;
}
function Lf(n, e, t) {
  const r = ue(e), i = t.propsOptions[0];
  for (const o in i) {
    let u = i[o];
    u != null && Kh(
      o,
      r[o],
      u,
      !me(n, o) && !me(n, as(o))
    );
  }
}
function Kh(n, e, t, r) {
  const { type: i, required: o, validator: u, skipCheck: c } = t;
  if (o && r) {
    q('Missing required prop: "' + n + '"');
    return;
  }
  if (!(e == null && !o)) {
    if (i != null && i !== !0 && !c) {
      let f = !1;
      const d = Q(i) ? i : [i], h = [];
      for (let g = 0; g < d.length && !f; g++) {
        const { valid: y, expectedType: b } = _h(e, d[g]);
        h.push(b || ""), f = y;
      }
      if (!f) {
        q($h(n, e, h));
        return;
      }
    }
    u && !u(e) && q('Invalid prop: custom validator check failed for prop "' + n + '".');
  }
}
const Ph = /* @__PURE__ */ fs(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function _h(n, e) {
  let t;
  const r = Wu(e);
  if (Ph(r)) {
    const i = typeof n;
    t = i === r.toLowerCase(), !t && i === "object" && (t = n instanceof e);
  } else
    r === "Object" ? t = Oe(n) : r === "Array" ? t = Q(n) : r === "null" ? t = n === null : t = n instanceof e;
  return {
    valid: t,
    expectedType: r
  };
}
function $h(n, e, t) {
  let r = `Invalid prop: type check failed for prop "${n}". Expected ${t.map(tu).join(" | ")}`;
  const i = t[0], o = mc(e), u = sl(e, i), c = sl(e, o);
  return t.length === 1 && ol(i) && !Mh(i, o) && (r += ` with value ${u}`), r += `, got ${o} `, ol(o) && (r += `with value ${c}.`), r;
}
function sl(n, e) {
  return e === "String" ? `"${n}"` : e === "Number" ? `${Number(n)}` : `${n}`;
}
function ol(n) {
  return ["string", "number", "boolean"].some((t) => n.toLowerCase() === t);
}
function Mh(...n) {
  return n.some((e) => e.toLowerCase() === "boolean");
}
const Df = (n) => n[0] === "_" || n === "$stable", Ic = (n) => Q(n) ? n.map(yt) : [yt(n)], Vh = (n, e, t) => {
  if (e._n)
    return e;
  const r = nh((...i) => (Ve && q(
    `Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ic(e(...i))), t);
  return r._c = !1, r;
}, Cf = (n, e, t) => {
  const r = n._ctx;
  for (const i in n) {
    if (Df(i))
      continue;
    const o = n[i];
    if (re(o))
      e[i] = Vh(i, o, r);
    else if (o != null) {
      q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const u = Ic(o);
      e[i] = () => u;
    }
  }
}, qf = (n, e) => {
  Bc(n.vnode) || q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = Ic(e);
  n.slots.default = () => t;
}, Hh = (n, e) => {
  if (n.vnode.shapeFlag & 32) {
    const t = e._;
    t ? (n.slots = ue(e), Ma(e, "_", t)) : Cf(
      e,
      n.slots = {}
    );
  } else
    n.slots = {}, e && qf(n, e);
  Ma(n.slots, mu, 1);
}, jh = (n, e, t) => {
  const { vnode: r, slots: i } = n;
  let o = !0, u = xe;
  if (r.shapeFlag & 32) {
    const c = e._;
    c ? ss ? (Se(i, e), Yt(n, "set", "$slots")) : t && c === 1 ? o = !1 : (Se(i, e), !t && c === 1 && delete i._) : (o = !e.$stable, Cf(e, i)), u = e;
  } else
    e && (qf(n, e), u = { default: 1 });
  if (o)
    for (const c in i)
      !Df(c) && !(c in u) && delete i[c];
};
function Ru(n, e, t, r, i = !1) {
  if (Q(n)) {
    n.forEach(
      (y, b) => Ru(
        y,
        e && (Q(e) ? e[b] : e),
        t,
        r,
        i
      )
    );
    return;
  }
  if (Ua(r) && !i)
    return;
  const o = r.shapeFlag & 4 ? Fc(r.component) || r.component.proxy : r.el, u = i ? null : o, { i: c, r: f } = n;
  if (!c) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = e && e.r, h = c.refs === xe ? c.refs = {} : c.refs, g = c.setupState;
  if (d != null && d !== f && (Ue(d) ? (h[d] = null, me(g, d) && (g[d] = null)) : Ke(d) && (d.value = null)), re(f))
    Pi(f, c, 12, [u, h]);
  else {
    const y = Ue(f), b = Ke(f);
    if (y || b) {
      const S = () => {
        if (n.f) {
          const A = y ? me(g, f) ? g[f] : h[f] : f.value;
          i ? Q(A) && cc(A, o) : Q(A) ? A.includes(o) || A.push(o) : y ? (h[f] = [o], me(g, f) && (g[f] = h[f])) : (f.value = [o], n.k && (h[n.k] = f.value));
        } else
          y ? (h[f] = u, me(g, f) && (g[f] = u)) : b ? (f.value = u, n.k && (h[n.k] = u)) : q("Invalid template ref type:", f, `(${typeof f})`);
      };
      u ? (S.id = -1, Qe(S, t)) : S();
    } else
      q("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Vs, Qi;
function Gt(n, e) {
  n.appContext.config.performance && Ya() && Qi.mark(`vue-${e}-${n.uid}`), Gd(n, e, Ya() ? Qi.now() : Date.now());
}
function Qt(n, e) {
  if (n.appContext.config.performance && Ya()) {
    const t = `vue-${e}-${n.uid}`, r = t + ":end";
    Qi.mark(r), Qi.measure(
      `<${du(n, n.type)}> ${e}`,
      t,
      r
    ), Qi.clearMarks(t), Qi.clearMarks(r);
  }
  Qd(n, e, Ya() ? Qi.now() : Date.now());
}
function Ya() {
  return Vs !== void 0 || (typeof window < "u" && window.performance ? (Vs = !0, Qi = window.performance) : Vs = !1), Vs;
}
function zh() {
  const n = [];
  if (n.length) {
    const e = n.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${n.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Qe = ch;
function Wh(n) {
  return Rh(n);
}
function Rh(n, e) {
  zh();
  const t = Va();
  t.__VUE__ = !0, yf(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: u,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: h,
    parentNode: g,
    nextSibling: y,
    setScopeId: b = nt,
    insertStaticContent: S
  } = n, A = (w, E, B, v = null, I = null, L = null, $ = !1, U = null, D = ss ? !1 : !!E.dynamicChildren) => {
    if (w === E)
      return;
    w && !Hs(w, E) && (v = Ne(w), ae(w, I, L, !0), w = null), E.patchFlag === -2 && (D = !1, E.dynamicChildren = null);
    const { type: O, ref: j, shapeFlag: V } = E;
    switch (O) {
      case pa:
        M(w, E, B, v);
        break;
      case ut:
        W(w, E, B, v);
        break;
      case La:
        w == null ? fe(E, B, v, $) : _(w, E, B, $);
        break;
      case wt:
        Ge(
          w,
          E,
          B,
          v,
          I,
          L,
          $,
          U,
          D
        );
        break;
      default:
        V & 1 ? R(
          w,
          E,
          B,
          v,
          I,
          L,
          $,
          U,
          D
        ) : V & 6 ? Zt(
          w,
          E,
          B,
          v,
          I,
          L,
          $,
          U,
          D
        ) : V & 64 || V & 128 ? O.process(
          w,
          E,
          B,
          v,
          I,
          L,
          $,
          U,
          D,
          De
        ) : q("Invalid VNode type:", O, `(${typeof O})`);
    }
    j != null && I && Ru(j, w && w.ref, L, E || w, !E);
  }, M = (w, E, B, v) => {
    if (w == null)
      r(
        E.el = c(E.children),
        B,
        v
      );
    else {
      const I = E.el = w.el;
      E.children !== w.children && d(I, E.children);
    }
  }, W = (w, E, B, v) => {
    w == null ? r(
      E.el = f(E.children || ""),
      B,
      v
    ) : E.el = w.el;
  }, fe = (w, E, B, v) => {
    [w.el, w.anchor] = S(
      w.children,
      E,
      B,
      v,
      w.el,
      w.anchor
    );
  }, _ = (w, E, B, v) => {
    if (E.children !== w.children) {
      const I = y(w.anchor);
      F(w), [E.el, E.anchor] = S(
        E.children,
        B,
        I,
        v
      );
    } else
      E.el = w.el, E.anchor = w.anchor;
  }, te = ({ el: w, anchor: E }, B, v) => {
    let I;
    for (; w && w !== E; )
      I = y(w), r(w, B, v), w = I;
    r(E, B, v);
  }, F = ({ el: w, anchor: E }) => {
    let B;
    for (; w && w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, R = (w, E, B, v, I, L, $, U, D) => {
    $ = $ || E.type === "svg", w == null ? G(
      E,
      B,
      v,
      I,
      L,
      $,
      U,
      D
    ) : Be(
      w,
      E,
      I,
      L,
      $,
      U,
      D
    );
  }, G = (w, E, B, v, I, L, $, U) => {
    let D, O;
    const { type: j, props: V, shapeFlag: H, transition: Z, dirs: m } = w;
    if (D = w.el = u(
      w.type,
      L,
      V && V.is,
      V
    ), H & 8 ? h(D, w.children) : H & 16 && oe(
      w.children,
      D,
      null,
      v,
      I,
      L && j !== "foreignObject",
      $,
      U
    ), m && hs(w, null, v, "created"), ee(D, w, w.scopeId, $, v), V) {
      for (const l in V)
        l !== "value" && !va(l) && o(
          D,
          l,
          null,
          V[l],
          L,
          w.children,
          v,
          I,
          pe
        );
      "value" in V && o(D, "value", null, V.value), (O = V.onVnodeBeforeMount) && It(O, v, w);
    }
    Object.defineProperty(D, "__vnode", {
      value: w,
      enumerable: !1
    }), Object.defineProperty(D, "__vueParentComponent", {
      value: v,
      enumerable: !1
    }), m && hs(w, null, v, "beforeMount");
    const a = (!I || I && !I.pendingBranch) && Z && !Z.persisted;
    a && Z.beforeEnter(D), r(D, E, B), ((O = V && V.onVnodeMounted) || a || m) && Qe(() => {
      O && It(O, v, w), a && Z.enter(D), m && hs(w, null, v, "mounted");
    }, I);
  }, ee = (w, E, B, v, I) => {
    if (B && b(w, B), v)
      for (let L = 0; L < v.length; L++)
        b(w, v[L]);
    if (I) {
      let L = I.subTree;
      if (L.patchFlag > 0 && L.patchFlag & 2048 && (L = xf(L.children) || L), E === L) {
        const $ = I.vnode;
        ee(
          w,
          $,
          $.scopeId,
          $.slotScopeIds,
          I.parent
        );
      }
    }
  }, oe = (w, E, B, v, I, L, $, U, D = 0) => {
    for (let O = D; O < w.length; O++) {
      const j = w[O] = U ? Gi(w[O]) : yt(w[O]);
      A(
        null,
        j,
        E,
        B,
        v,
        I,
        L,
        $,
        U
      );
    }
  }, Be = (w, E, B, v, I, L, $) => {
    const U = E.el = w.el;
    let { patchFlag: D, dynamicChildren: O, dirs: j } = E;
    D |= w.patchFlag & 16;
    const V = w.props || xe, H = E.props || xe;
    let Z;
    B && ps(B, !1), (Z = H.onVnodeBeforeUpdate) && It(Z, B, E, w), j && hs(E, w, B, "beforeUpdate"), B && ps(B, !0), ss && (D = 0, $ = !1, O = null);
    const m = I && E.type !== "foreignObject";
    if (O ? (Ie(
      w.dynamicChildren,
      O,
      U,
      B,
      v,
      m,
      L
    ), Xa(w, E)) : $ || C(
      w,
      E,
      U,
      null,
      B,
      v,
      m,
      L,
      !1
    ), D > 0) {
      if (D & 16)
        Le(
          U,
          E,
          V,
          H,
          B,
          v,
          I
        );
      else if (D & 2 && V.class !== H.class && o(U, "class", null, H.class, I), D & 4 && o(U, "style", V.style, H.style, I), D & 8) {
        const a = E.dynamicProps;
        for (let l = 0; l < a.length; l++) {
          const p = a[l], T = V[p], x = H[p];
          (x !== T || p === "value") && o(
            U,
            p,
            T,
            x,
            I,
            w.children,
            B,
            v,
            pe
          );
        }
      }
      D & 1 && w.children !== E.children && h(U, E.children);
    } else
      !$ && O == null && Le(
        U,
        E,
        V,
        H,
        B,
        v,
        I
      );
    ((Z = H.onVnodeUpdated) || j) && Qe(() => {
      Z && It(Z, B, E, w), j && hs(E, w, B, "updated");
    }, v);
  }, Ie = (w, E, B, v, I, L, $) => {
    for (let U = 0; U < E.length; U++) {
      const D = w[U], O = E[U], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === wt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Hs(D, O) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 70) ? g(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      A(
        D,
        O,
        j,
        null,
        v,
        I,
        L,
        $,
        !0
      );
    }
  }, Le = (w, E, B, v, I, L, $) => {
    if (B !== v) {
      if (B !== xe)
        for (const U in B)
          !va(U) && !(U in v) && o(
            w,
            U,
            B[U],
            null,
            $,
            E.children,
            I,
            L,
            pe
          );
      for (const U in v) {
        if (va(U))
          continue;
        const D = v[U], O = B[U];
        D !== O && U !== "value" && o(
          w,
          U,
          O,
          D,
          $,
          E.children,
          I,
          L,
          pe
        );
      }
      "value" in v && o(w, "value", B.value, v.value);
    }
  }, Ge = (w, E, B, v, I, L, $, U, D) => {
    const O = E.el = w ? w.el : c(""), j = E.anchor = w ? w.anchor : c("");
    let { patchFlag: V, dynamicChildren: H, slotScopeIds: Z } = E;
    // #5523 dev root fragment may inherit directives
    (ss || V & 2048) && (V = 0, D = !1, H = null), Z && (U = U ? U.concat(Z) : Z), w == null ? (r(O, B, v), r(j, B, v), oe(
      E.children,
      B,
      j,
      I,
      L,
      $,
      U,
      D
    )) : V > 0 && V & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (Ie(
      w.dynamicChildren,
      H,
      B,
      I,
      L,
      $,
      U
    ), Xa(w, E)) : C(
      w,
      E,
      B,
      j,
      I,
      L,
      $,
      U,
      D
    );
  }, Zt = (w, E, B, v, I, L, $, U, D) => {
    E.slotScopeIds = U, w == null ? E.shapeFlag & 512 ? I.ctx.activate(
      E,
      B,
      v,
      $,
      D
    ) : je(
      E,
      B,
      v,
      I,
      L,
      $,
      D
    ) : _e(w, E, D);
  }, je = (w, E, B, v, I, L, $) => {
    const U = w.component = cp(
      w,
      v,
      I
    );
    if (U.type.__hmrId && Vd(U), Fa(w), Gt(U, "mount"), Bc(w) && (U.ctx.renderer = De), Gt(U, "init"), fp(U), Qt(U, "init"), U.asyncDep) {
      if (I && I.registerDep(U, he), !w.el) {
        const D = U.subTree = Rt(ut);
        W(null, D, E, B);
      }
      return;
    }
    he(
      U,
      w,
      E,
      B,
      I,
      L,
      $
    ), Aa(), Qt(U, "mount");
  }, _e = (w, E, B) => {
    const v = E.component = w.component;
    if (oh(w, E, B))
      if (v.asyncDep && !v.asyncResolved) {
        Fa(E), K(v, E, B), Aa();
        return;
      } else
        v.next = E, $d(v.update), v.update();
    else
      E.el = w.el, v.vnode = E;
  }, he = (w, E, B, v, I, L, $) => {
    const U = () => {
      if (w.isMounted) {
        let { next: j, bu: V, u: H, parent: Z, vnode: m } = w, a = j, l;
        Fa(j || w.vnode), ps(w, !1), j ? (j.el = m.el, K(w, j, $)) : j = m, V && Ms(V), (l = j.props && j.props.onVnodeBeforeUpdate) && It(l, Z, j, m), ps(w, !0), Gt(w, "render");
        const p = Tu(w);
        Qt(w, "render");
        const T = w.subTree;
        w.subTree = p, Gt(w, "patch"), A(
          T,
          p,
          // parent may have changed if it's in a teleport
          g(T.el),
          // anchor may have changed if it's in a fragment
          Ne(T),
          w,
          I,
          L
        ), Qt(w, "patch"), j.el = p.el, a === null && ah(w, p.el), H && Qe(H, I), (l = j.props && j.props.onVnodeUpdated) && Qe(
          () => It(l, Z, j, m),
          I
        ), Tf(w), Aa();
      } else {
        let j;
        const { el: V, props: H } = E, { bm: Z, m, parent: a } = w, l = Ua(E);
        if (ps(w, !1), Z && Ms(Z), !l && (j = H && H.onVnodeBeforeMount) && It(j, a, E), ps(w, !0), V && Re) {
          const p = () => {
            Gt(w, "render"), w.subTree = Tu(w), Qt(w, "render"), Gt(w, "hydrate"), Re(
              V,
              w.subTree,
              w,
              I,
              null
            ), Qt(w, "hydrate");
          };
          l ? E.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !w.isUnmounted && p()
          ) : p();
        } else {
          Gt(w, "render");
          const p = w.subTree = Tu(w);
          Qt(w, "render"), Gt(w, "patch"), A(
            null,
            p,
            B,
            v,
            w,
            I,
            L
          ), Qt(w, "patch"), E.el = p.el;
        }
        if (m && Qe(m, I), !l && (j = H && H.onVnodeMounted)) {
          const p = E;
          Qe(
            () => It(j, a, p),
            I
          );
        }
        (E.shapeFlag & 256 || a && Ua(a.vnode) && a.vnode.shapeFlag & 256) && w.a && Qe(w.a, I), w.isMounted = !0, Yd(w), E = B = v = null;
      }
    }, D = w.effect = new gc(
      U,
      () => uu(O),
      w.scope
      // track it in component's effect scope
    ), O = w.update = () => D.run();
    O.id = w.uid, ps(w, !0), D.onTrack = w.rtc ? (j) => Ms(w.rtc, j) : void 0, D.onTrigger = w.rtg ? (j) => Ms(w.rtg, j) : void 0, O.ownerInstance = w, O();
  }, K = (w, E, B) => {
    E.component = w;
    const v = w.vnode.props;
    w.vnode = E, w.next = null, qh(w, E.props, v, B), jh(w, E.children, B), Os(), Rc(), Is();
  }, C = (w, E, B, v, I, L, $, U, D = !1) => {
    const O = w && w.children, j = w ? w.shapeFlag : 0, V = E.children, { patchFlag: H, shapeFlag: Z } = E;
    if (H > 0) {
      if (H & 128) {
        z(
          O,
          V,
          B,
          v,
          I,
          L,
          $,
          U,
          D
        );
        return;
      } else if (H & 256) {
        Y(
          O,
          V,
          B,
          v,
          I,
          L,
          $,
          U,
          D
        );
        return;
      }
    }
    Z & 8 ? (j & 16 && pe(O, I, L), V !== O && h(B, V)) : j & 16 ? Z & 16 ? z(
      O,
      V,
      B,
      v,
      I,
      L,
      $,
      U,
      D
    ) : pe(O, I, L, !0) : (j & 8 && h(B, ""), Z & 16 && oe(
      V,
      B,
      v,
      I,
      L,
      $,
      U,
      D
    ));
  }, Y = (w, E, B, v, I, L, $, U, D) => {
    w = w || Ls, E = E || Ls;
    const O = w.length, j = E.length, V = Math.min(O, j);
    let H;
    for (H = 0; H < V; H++) {
      const Z = E[H] = D ? Gi(E[H]) : yt(E[H]);
      A(
        w[H],
        Z,
        B,
        null,
        I,
        L,
        $,
        U,
        D
      );
    }
    O > j ? pe(
      w,
      I,
      L,
      !0,
      !1,
      V
    ) : oe(
      E,
      B,
      v,
      I,
      L,
      $,
      U,
      D,
      V
    );
  }, z = (w, E, B, v, I, L, $, U, D) => {
    let O = 0;
    const j = E.length;
    let V = w.length - 1, H = j - 1;
    for (; O <= V && O <= H; ) {
      const Z = w[O], m = E[O] = D ? Gi(E[O]) : yt(E[O]);
      if (Hs(Z, m))
        A(
          Z,
          m,
          B,
          null,
          I,
          L,
          $,
          U,
          D
        );
      else
        break;
      O++;
    }
    for (; O <= V && O <= H; ) {
      const Z = w[V], m = E[H] = D ? Gi(E[H]) : yt(E[H]);
      if (Hs(Z, m))
        A(
          Z,
          m,
          B,
          null,
          I,
          L,
          $,
          U,
          D
        );
      else
        break;
      V--, H--;
    }
    if (O > V) {
      if (O <= H) {
        const Z = H + 1, m = Z < j ? E[Z].el : v;
        for (; O <= H; )
          A(
            null,
            E[O] = D ? Gi(E[O]) : yt(E[O]),
            B,
            m,
            I,
            L,
            $,
            U,
            D
          ), O++;
      }
    } else if (O > H)
      for (; O <= V; )
        ae(w[O], I, L, !0), O++;
    else {
      const Z = O, m = O, a = /* @__PURE__ */ new Map();
      for (O = m; O <= H; O++) {
        const ce = E[O] = D ? Gi(E[O]) : yt(E[O]);
        ce.key != null && (a.has(ce.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), a.set(ce.key, O));
      }
      let l, p = 0;
      const T = H - m + 1;
      let x = !1, k = 0;
      const ne = new Array(T);
      for (O = 0; O < T; O++)
        ne[O] = 0;
      for (O = Z; O <= V; O++) {
        const ce = w[O];
        if (p >= T) {
          ae(ce, I, L, !0);
          continue;
        }
        let ye;
        if (ce.key != null)
          ye = a.get(ce.key);
        else
          for (l = m; l <= H; l++)
            if (ne[l - m] === 0 && Hs(ce, E[l])) {
              ye = l;
              break;
            }
        ye === void 0 ? ae(ce, I, L, !0) : (ne[ye - m] = O + 1, ye >= k ? k = ye : x = !0, A(
          ce,
          E[ye],
          B,
          null,
          I,
          L,
          $,
          U,
          D
        ), p++);
      }
      const ke = x ? Yh(ne) : Ls;
      for (l = ke.length - 1, O = T - 1; O >= 0; O--) {
        const ce = m + O, ye = E[ce], Te = ce + 1 < j ? E[ce + 1].el : v;
        ne[O] === 0 ? A(
          null,
          ye,
          B,
          Te,
          I,
          L,
          $,
          U,
          D
        ) : x && (l < 0 || O !== ke[l] ? X(ye, B, Te, 2) : l--);
      }
    }
  }, X = (w, E, B, v, I = null) => {
    const { el: L, type: $, transition: U, children: D, shapeFlag: O } = w;
    if (O & 6) {
      X(w.component.subTree, E, B, v);
      return;
    }
    if (O & 128) {
      w.suspense.move(E, B, v);
      return;
    }
    if (O & 64) {
      $.move(w, E, B, De);
      return;
    }
    if ($ === wt) {
      r(L, E, B);
      for (let V = 0; V < D.length; V++)
        X(D[V], E, B, v);
      r(w.anchor, E, B);
      return;
    }
    if ($ === La) {
      te(w, E, B);
      return;
    }
    if (v !== 2 && O & 1 && U)
      if (v === 0)
        U.beforeEnter(L), r(L, E, B), Qe(() => U.enter(L), I);
      else {
        const { leave: V, delayLeave: H, afterLeave: Z } = U, m = () => r(L, E, B), a = () => {
          V(L, () => {
            m(), Z && Z();
          });
        };
        H ? H(L, m, a) : a();
      }
    else
      r(L, E, B);
  }, ae = (w, E, B, v = !1, I = !1) => {
    const {
      type: L,
      props: $,
      ref: U,
      children: D,
      dynamicChildren: O,
      shapeFlag: j,
      patchFlag: V,
      dirs: H
    } = w;
    if (U != null && Ru(U, null, B, w, !0), j & 256) {
      E.ctx.deactivate(w);
      return;
    }
    const Z = j & 1 && H, m = !Ua(w);
    let a;
    if (m && (a = $ && $.onVnodeBeforeUnmount) && It(a, E, w), j & 6)
      we(w.component, B, v);
    else {
      if (j & 128) {
        w.suspense.unmount(B, v);
        return;
      }
      Z && hs(w, null, E, "beforeUnmount"), j & 64 ? w.type.remove(
        w,
        E,
        B,
        I,
        De,
        v
      ) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== wt || V > 0 && V & 64) ? pe(
        O,
        E,
        B,
        !1,
        !0
      ) : (L === wt && V & 384 || !I && j & 16) && pe(D, E, B), v && ge(w);
    }
    (m && (a = $ && $.onVnodeUnmounted) || Z) && Qe(() => {
      a && It(a, E, w), Z && hs(w, null, E, "unmounted");
    }, B);
  }, ge = (w) => {
    const { type: E, el: B, anchor: v, transition: I } = w;
    if (E === wt) {
      w.patchFlag > 0 && w.patchFlag & 2048 && I && !I.persisted ? w.children.forEach(($) => {
        $.type === ut ? i($.el) : ge($);
      }) : be(B, v);
      return;
    }
    if (E === La) {
      F(w);
      return;
    }
    const L = () => {
      i(B), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (w.shapeFlag & 1 && I && !I.persisted) {
      const { leave: $, delayLeave: U } = I, D = () => $(B, L);
      U ? U(w.el, L, D) : D();
    } else
      L();
  }, be = (w, E) => {
    let B;
    for (; w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, we = (w, E, B) => {
    w.type.__hmrId && Hd(w);
    const { bum: v, scope: I, update: L, subTree: $, um: U } = w;
    v && Ms(v), I.stop(), L && (L.active = !1, ae($, w, E, B)), U && Qe(U, E), Qe(() => {
      w.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), Zd(w);
  }, pe = (w, E, B, v = !1, I = !1, L = 0) => {
    for (let $ = L; $ < w.length; $++)
      ae(w[$], E, B, v, I);
  }, Ne = (w) => w.shapeFlag & 6 ? Ne(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : y(w.anchor || w.el), ve = (w, E, B) => {
    w == null ? E._vnode && ae(E._vnode, null, null, !0) : A(E._vnode || null, w, E, null, null, null, B), Rc(), pf(), E._vnode = w;
  }, De = {
    p: A,
    um: ae,
    m: X,
    r: ge,
    mt: je,
    mc: oe,
    pc: C,
    pbc: Ie,
    n: Ne,
    o: n
  };
  let Ce, Re;
  return e && ([Ce, Re] = e(
    De
  )), {
    render: ve,
    hydrate: Ce,
    createApp: Uh(ve, Ce)
  };
}
function ps({ effect: n, update: e }, t) {
  n.allowRecurse = e.allowRecurse = t;
}
function Xa(n, e, t = !1) {
  const r = n.children, i = e.children;
  if (Q(r) && Q(i))
    for (let o = 0; o < r.length; o++) {
      const u = r[o];
      let c = i[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[o] = Gi(i[o]), c.el = u.el), t || Xa(u, c)), c.type === pa && (c.el = u.el), c.type === ut && !c.el && (c.el = u.el);
    }
}
function Yh(n) {
  const e = n.slice(), t = [0];
  let r, i, o, u, c;
  const f = n.length;
  for (r = 0; r < f; r++) {
    const d = n[r];
    if (d !== 0) {
      if (i = t[t.length - 1], n[i] < d) {
        e[r] = i, t.push(r);
        continue;
      }
      for (o = 0, u = t.length - 1; o < u; )
        c = o + u >> 1, n[t[c]] < d ? o = c + 1 : u = c;
      d < n[t[o]] && (o > 0 && (e[r] = t[o - 1]), t[o] = r);
    }
  }
  for (o = t.length, u = t[o - 1]; o-- > 0; )
    t[o] = u, u = e[u];
  return t;
}
const Xh = (n) => n.__isTeleport, qs = (n) => n && (n.disabled || n.disabled === ""), al = (n) => typeof SVGElement < "u" && n instanceof SVGElement, Yu = (n, e) => {
  const t = n && n.to;
  if (Ue(t))
    if (e) {
      const r = e(t);
      return r || q(
        `Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return q(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !t && !qs(n) && q(`Invalid Teleport target: ${t}`), t;
}, Zh = {
  __isTeleport: !0,
  process(n, e, t, r, i, o, u, c, f, d) {
    const {
      mc: h,
      pc: g,
      pbc: y,
      o: { insert: b, querySelector: S, createText: A, createComment: M }
    } = d, W = qs(e.props);
    let { shapeFlag: fe, children: _, dynamicChildren: te } = e;
    if (ss && (f = !1, te = null), n == null) {
      const F = e.el = M("teleport start"), R = e.anchor = M("teleport end");
      b(F, t, r), b(R, t, r);
      const G = e.target = Yu(e.props, S), ee = e.targetAnchor = A("");
      G ? (b(ee, G), u = u || al(G)) : W || q("Invalid Teleport target on mount:", G, `(${typeof G})`);
      const oe = (Be, Ie) => {
        fe & 16 && h(
          _,
          Be,
          Ie,
          i,
          o,
          u,
          c,
          f
        );
      };
      W ? oe(t, R) : G && oe(G, ee);
    } else {
      e.el = n.el;
      const F = e.anchor = n.anchor, R = e.target = n.target, G = e.targetAnchor = n.targetAnchor, ee = qs(n.props), oe = ee ? t : R, Be = ee ? F : G;
      if (u = u || al(R), te ? (y(
        n.dynamicChildren,
        te,
        oe,
        i,
        o,
        u,
        c
      ), Xa(n, e, !0)) : f || g(
        n,
        e,
        oe,
        Be,
        i,
        o,
        u,
        c,
        !1
      ), W)
        ee || Oa(
          e,
          t,
          F,
          d,
          1
        );
      else if ((e.props && e.props.to) !== (n.props && n.props.to)) {
        const Ie = e.target = Yu(
          e.props,
          S
        );
        Ie ? Oa(
          e,
          Ie,
          null,
          d,
          0
        ) : q(
          "Invalid Teleport target on update:",
          R,
          `(${typeof R})`
        );
      } else
        ee && Oa(
          e,
          R,
          G,
          d,
          1
        );
    }
    Kf(e);
  },
  remove(n, e, t, r, { um: i, o: { remove: o } }, u) {
    const { shapeFlag: c, children: f, anchor: d, targetAnchor: h, target: g, props: y } = n;
    if (g && o(h), (u || !qs(y)) && (o(d), c & 16))
      for (let b = 0; b < f.length; b++) {
        const S = f[b];
        i(
          S,
          e,
          t,
          !0,
          !!S.dynamicChildren
        );
      }
  },
  move: Oa,
  hydrate: Gh
};
function Oa(n, e, t, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(n.targetAnchor, e, t);
  const { el: u, anchor: c, shapeFlag: f, children: d, props: h } = n, g = o === 2;
  if (g && r(u, e, t), (!g || qs(h)) && f & 16)
    for (let y = 0; y < d.length; y++)
      i(
        d[y],
        e,
        t,
        2
      );
  g && r(c, e, t);
}
function Gh(n, e, t, r, i, o, {
  o: { nextSibling: u, parentNode: c, querySelector: f }
}, d) {
  const h = e.target = Yu(
    e.props,
    f
  );
  if (h) {
    const g = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (qs(e.props))
        e.anchor = d(
          u(n),
          e,
          c(n),
          t,
          r,
          i,
          o
        ), e.targetAnchor = g;
      else {
        e.anchor = u(n);
        let y = g;
        for (; y; )
          if (y = u(y), y && y.nodeType === 8 && y.data === "teleport anchor") {
            e.targetAnchor = y, h._lpa = e.targetAnchor && u(e.targetAnchor);
            break;
          }
        d(
          g,
          e,
          h,
          t,
          r,
          i,
          o
        );
      }
    Kf(e);
  }
  return e.anchor && u(e.anchor);
}
const Qh = Zh;
function Kf(n) {
  const e = n.ctx;
  if (e && e.ut) {
    let t = n.children[0].el;
    for (; t !== n.targetAnchor; )
      t.nodeType === 1 && t.setAttribute("data-v-owner", e.uid), t = t.nextSibling;
    e.ut();
  }
}
const wt = Symbol.for("v-fgt"), pa = Symbol.for("v-txt"), ut = Symbol.for("v-cmt"), La = Symbol.for("v-stc"), to = [];
let Tt = null;
function et(n = !1) {
  to.push(Tt = n ? null : []);
}
function ep() {
  to.pop(), Tt = to[to.length - 1] || null;
}
let uo = 1;
function ul(n) {
  uo += n;
}
function Pf(n) {
  return n.dynamicChildren = uo > 0 ? Tt || Ls : null, ep(), uo > 0 && Tt && Tt.push(n), n;
}
function os(n, e, t, r, i, o) {
  return Pf(
    $f(
      n,
      e,
      t,
      r,
      i,
      o,
      !0
      /* isBlock */
    )
  );
}
function As(n, e, t, r, i) {
  return Pf(
    Rt(
      n,
      e,
      t,
      r,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Sc(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Hs(n, e) {
  return e.shapeFlag & 6 && Fs.has(e.type) ? (n.shapeFlag &= -257, e.shapeFlag &= -513, !1) : n.type === e.type && n.key === e.key;
}
const tp = (...n) => np(
  ...n
), mu = "__vInternal", _f = ({ key: n }) => n ?? null, Da = ({
  ref: n,
  ref_key: e,
  ref_for: t
}) => (typeof n == "number" && (n = "" + n), n != null ? Ue(n) || Ke(n) || re(n) ? { i: mt, r: n, k: e, f: !!t } : n : null);
function $f(n, e = null, t = null, r = 0, i = null, o = n === wt ? 0 : 1, u = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && _f(e),
    ref: e && Da(e),
    scopeId: bf,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: mt
  };
  return c ? (Jc(f, t), o & 128 && n.normalize(f)) : t && (f.shapeFlag |= Ue(t) ? 8 : 16), f.key !== f.key && q("VNode created with invalid key (NaN). VNode type:", f.type), uo > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Tt.push(f), f;
}
const Rt = tp;
function np(n, e = null, t = null, r = 0, i = null, o = !1) {
  if ((!n || n === bh) && (n || q(`Invalid vnode type when creating vnode: ${n}.`), n = ut), Sc(n)) {
    const c = ls(
      n,
      e,
      !0
      /* mergeRef: true */
    );
    return t && Jc(c, t), uo > 0 && !o && Tt && (c.shapeFlag & 6 ? Tt[Tt.indexOf(n)] = c : Tt.push(c)), c.patchFlag |= -2, c;
  }
  if (zf(n) && (n = n.__vccOpts), e) {
    e = rp(e);
    let { class: c, style: f } = e;
    c && !Ue(c) && (e.class = hc(c)), Oe(f) && (Ku(f) && !Q(f) && (f = Se({}, f)), e.style = ms(f));
  }
  const u = Ue(n) ? 1 : uh(n) ? 128 : Xh(n) ? 64 : Oe(n) ? 4 : re(n) ? 2 : 0;
  return u & 4 && Ku(n) && (n = ue(n), q(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    n
  )), $f(
    n,
    e,
    t,
    r,
    i,
    u,
    o,
    !0
  );
}
function rp(n) {
  return n ? Ku(n) || mu in n ? Se({}, n) : n : null;
}
function ls(n, e, t = !1) {
  const { props: r, ref: i, patchFlag: o, children: u } = n, c = e ? op(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: c,
    key: c && _f(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && i ? Q(i) ? i.concat(Da(e)) : [i, Da(e)] : Da(e)
    ) : i,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: o === -1 && Q(u) ? u.map(Mf) : u,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && n.type !== wt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: n.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && ls(n.ssContent),
    ssFallback: n.ssFallback && ls(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
}
function Mf(n) {
  const e = ls(n);
  return Q(n.children) && (e.children = n.children.map(Mf)), e;
}
function ip(n = " ", e = 0) {
  return Rt(pa, null, n, e);
}
function sp(n = "", e = !1) {
  return e ? (et(), As(ut, null, n)) : Rt(ut, null, n);
}
function yt(n) {
  return n == null || typeof n == "boolean" ? Rt(ut) : Q(n) ? Rt(
    wt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : typeof n == "object" ? Gi(n) : Rt(pa, null, String(n));
}
function Gi(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : ls(n);
}
function Jc(n, e) {
  let t = 0;
  const { shapeFlag: r } = n;
  if (e == null)
    e = null;
  else if (Q(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Jc(n, i()), i._c && (i._d = !0));
      return;
    } else {
      t = 32;
      const i = e._;
      !i && !(mu in e) ? e._ctx = mt : i === 3 && mt && (mt.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024));
    }
  else
    re(e) ? (e = { default: e, _ctx: mt }, t = 32) : (e = String(e), r & 64 ? (t = 16, e = [ip(e)]) : t = 8);
  n.children = e, n.shapeFlag |= t;
}
function op(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = hc([e.class, r.class]));
      else if (i === "style")
        e.style = ms([e.style, r.style]);
      else if (da(i)) {
        const o = e[i], u = r[i];
        u && o !== u && !(Q(o) && o.includes(u)) && (e[i] = o ? [].concat(o, u) : u);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function It(n, e, t, r = null) {
  kt(n, e, 7, [
    t,
    r
  ]);
}
const ap = Ff();
let up = 0;
function cp(n, e, t) {
  const r = n.type, i = (e ? e.appContext : n.appContext) || ap, o = {
    uid: up++,
    vnode: n,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Gm(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Uf(r, i),
    emitsOptions: Nf(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = xh(o), o.root = e ? e.root : o, o.emit = th.bind(null, o), n.ce && n.ce(o), o;
}
let Ve = null, vc, Ss, cl = "__VUE_INSTANCE_SETTERS__";
(Ss = Va()[cl]) || (Ss = Va()[cl] = []), Ss.push((n) => Ve = n), vc = (n) => {
  Ss.length > 1 ? Ss.forEach((e) => e(n)) : Ss[0](n);
};
const Ps = (n) => {
  vc(n), n.scope.on();
}, Bs = () => {
  Ve && Ve.scope.off(), vc(null);
}, lp = /* @__PURE__ */ fs("slot,component");
function Xu(n, e) {
  const t = e.isNativeTag || Hl;
  (lp(n) || t(n)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + n
  );
}
function Vf(n) {
  return n.vnode.shapeFlag & 4;
}
let co = !1;
function fp(n, e = !1) {
  co = e;
  const { props: t, children: r } = n.vnode, i = Vf(n);
  Dh(n, t, i, e), Hh(n, r);
  const o = i ? mp(n, e) : void 0;
  return co = !1, o;
}
function mp(n, e) {
  var t;
  const r = n.type;
  {
    if (r.name && Xu(r.name, n.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let u = 0; u < o.length; u++)
        Xu(o[u], n.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let u = 0; u < o.length; u++)
        Of(o[u]);
    }
    r.compilerOptions && dp() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = af(new Proxy(n.ctx, Jf)), Bh(n);
  const { setup: i } = r;
  if (i) {
    const o = n.setupContext = i.length > 1 ? gp(n) : null;
    Ps(n), Os();
    const u = Pi(
      i,
      n,
      0,
      [Rs(n.props), o]
    );
    if (Is(), Bs(), fc(u)) {
      if (u.then(Bs, Bs), e)
        return u.then((c) => {
          ll(n, c, e);
        }).catch((c) => {
          au(c, n, 0);
        });
      if (n.asyncDep = u, !n.suspense) {
        const c = (t = r.name) != null ? t : "Anonymous";
        q(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ll(n, u, e);
  } else
    Hf(n, e);
}
function ll(n, e, t) {
  re(e) ? n.type.__ssrInlineRender ? n.ssrRender = e : n.render = e : Oe(e) ? (Sc(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), n.devtoolsRawSetupState = e, n.setupState = lf(e), kh(n)) : e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Hf(n, t);
}
let Zu;
const dp = () => !Zu;
function Hf(n, e, t) {
  const r = n.type;
  if (!n.render) {
    if (!e && Zu && !r.render) {
      const i = r.template || Oc(n).template;
      if (i) {
        Gt(n, "compile");
        const { isCustomElement: o, compilerOptions: u } = n.appContext.config, { delimiters: c, compilerOptions: f } = r, d = Se(
          Se(
            {
              isCustomElement: o,
              delimiters: c
            },
            u
          ),
          f
        );
        r.render = Zu(i, d), Qt(n, "compile");
      }
    }
    n.render = r.render || nt;
  }
  Ps(n), Os(), Ih(n), Is(), Bs(), !r.render && n.render === nt && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : q("Component is missing template or render function."));
}
function hp(n) {
  return n.attrsProxy || (n.attrsProxy = new Proxy(
    n.attrs,
    {
      get(e, t) {
        return za(), We(n, "get", "$attrs"), e[t];
      },
      set() {
        return q("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return q("setupContext.attrs is readonly."), !1;
      }
    }
  ));
}
function pp(n) {
  return n.slotsProxy || (n.slotsProxy = new Proxy(n.slots, {
    get(e, t) {
      return We(n, "get", "$slots"), e[t];
    }
  }));
}
function gp(n) {
  return Object.freeze({
    get attrs() {
      return hp(n);
    },
    get slots() {
      return pp(n);
    },
    get emit() {
      return (t, ...r) => n.emit(t, ...r);
    },
    expose: (t) => {
      if (n.exposed && q("expose() should be called only once per setup()."), t != null) {
        let r = typeof t;
        r === "object" && (Q(t) ? r = "array" : Ke(t) && (r = "ref")), r !== "object" && q(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      n.exposed = t || {};
    }
  });
}
function Fc(n) {
  if (n.exposed)
    return n.exposeProxy || (n.exposeProxy = new Proxy(lf(af(n.exposed)), {
      get(e, t) {
        if (t in e)
          return e[t];
        if (t in xs)
          return xs[t](n);
      },
      has(e, t) {
        return t in e || t in xs;
      }
    }));
}
const wp = /(?:^|[-_])(\w)/g, yp = (n) => n.replace(wp, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function jf(n, e = !0) {
  return re(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function du(n, e, t = !1) {
  let r = jf(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && n && n.parent) {
    const i = (o) => {
      for (const u in o)
        if (o[u] === e)
          return u;
    };
    r = i(
      n.components || n.parent.type.components
    ) || i(n.appContext.components);
  }
  return r ? yp(r) : t ? "App" : "Anonymous";
}
function zf(n) {
  return re(n) && "__vccOpts" in n;
}
const Tp = (n, e) => Ud(n, e, co), Ep = Symbol.for("v-scx"), Np = () => {
  {
    const n = Ot(Ep);
    return n || q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), n;
  }
};
function bu(n) {
  return !!(n && n.__v_isShallow);
}
function bp() {
  if (typeof window > "u")
    return;
  const n = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(g) {
      return Oe(g) ? g.__isVue ? ["div", n, "VueInstance"] : Ke(g) ? [
        "div",
        {},
        ["span", n, h(g)],
        "<",
        c(g.value),
        ">"
      ] : Ns(g) ? [
        "div",
        {},
        ["span", n, bu(g) ? "ShallowReactive" : "Reactive"],
        "<",
        c(g),
        `>${cs(g) ? " (readonly)" : ""}`
      ] : cs(g) ? [
        "div",
        {},
        ["span", n, bu(g) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(g),
        ">"
      ] : null : null;
    },
    hasBody(g) {
      return g && g.__isVue;
    },
    body(g) {
      if (g && g.__isVue)
        return [
          "div",
          {},
          ...o(g.$)
        ];
    }
  };
  function o(g) {
    const y = [];
    g.type.props && g.props && y.push(u("props", ue(g.props))), g.setupState !== xe && y.push(u("setup", g.setupState)), g.data !== xe && y.push(u("data", ue(g.data)));
    const b = f(g, "computed");
    b && y.push(u("computed", b));
    const S = f(g, "inject");
    return S && y.push(u("injected", S)), y.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: g }]
    ]), y;
  }
  function u(g, y) {
    return y = Se({}, y), Object.keys(y).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        g
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(y).map((b) => [
          "div",
          {},
          ["span", r, b + ": "],
          c(y[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(g, y = !0) {
    return typeof g == "number" ? ["span", e, g] : typeof g == "string" ? ["span", t, JSON.stringify(g)] : typeof g == "boolean" ? ["span", r, g] : Oe(g) ? ["object", { object: y ? ue(g) : g }] : ["span", t, String(g)];
  }
  function f(g, y) {
    const b = g.type;
    if (re(b))
      return;
    const S = {};
    for (const A in g.ctx)
      d(b, A, y) && (S[A] = g.ctx[A]);
    return S;
  }
  function d(g, y, b) {
    const S = g[b];
    if (Q(S) && S.includes(y) || Oe(S) && y in S || g.extends && d(g.extends, y, b) || g.mixins && g.mixins.some((A) => d(A, y, b)))
      return !0;
  }
  function h(g) {
    return bu(g) ? "ShallowRef" : g.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const fl = "3.3.4", xp = "http://www.w3.org/2000/svg", ys = typeof document < "u" ? document : null, ml = ys && /* @__PURE__ */ ys.createElement("template"), Bp = {
  insert: (n, e, t) => {
    e.insertBefore(n, t || null);
  },
  remove: (n) => {
    const e = n.parentNode;
    e && e.removeChild(n);
  },
  createElement: (n, e, t, r) => {
    const i = e ? ys.createElementNS(xp, n) : ys.createElement(n, t ? { is: t } : void 0);
    return n === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (n) => ys.createTextNode(n),
  createComment: (n) => ys.createComment(n),
  setText: (n, e) => {
    n.nodeValue = e;
  },
  setElementText: (n, e) => {
    n.textContent = e;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => ys.querySelector(n),
  setScopeId(n, e) {
    n.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, e, t, r, i, o) {
    const u = t ? t.previousSibling : e.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), t), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      ml.innerHTML = r ? `<svg>${n}</svg>` : n;
      const c = ml.content;
      if (r) {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      e.insertBefore(c, t);
    }
    return [
      // first
      u ? u.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
};
function kp(n, e, t) {
  const r = n._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? n.removeAttribute("class") : t ? n.setAttribute("class", e) : n.className = e;
}
function Op(n, e, t) {
  const r = n.style, i = Ue(t);
  if (t && !i) {
    if (e && !Ue(e))
      for (const o in e)
        t[o] == null && Gu(r, o, "");
    for (const o in t)
      Gu(r, o, t[o]);
  } else {
    const o = r.display;
    i ? e !== t && (r.cssText = t) : e && n.removeAttribute("style"), "_vod" in n && (r.display = o);
  }
}
const Ip = /[^\\];\s*$/, dl = /\s*!important$/;
function Gu(n, e, t) {
  if (Q(t))
    t.forEach((r) => Gu(n, e, r));
  else if (t == null && (t = ""), Ip.test(t) && q(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    n.setProperty(e, t);
  else {
    const r = Sp(n, e);
    dl.test(t) ? n.setProperty(
      as(r),
      t.replace(dl, ""),
      "important"
    ) : n[r] = t;
  }
}
const hl = ["Webkit", "Moz", "ms"], xu = {};
function Sp(n, e) {
  const t = xu[e];
  if (t)
    return t;
  let r = Ks(e);
  if (r !== "filter" && r in n)
    return xu[e] = r;
  r = tu(r);
  for (let i = 0; i < hl.length; i++) {
    const o = hl[i] + r;
    if (o in n)
      return xu[e] = o;
  }
  return e;
}
const pl = "http://www.w3.org/1999/xlink";
function Jp(n, e, t, r, i) {
  if (r && e.startsWith("xlink:"))
    t == null ? n.removeAttributeNS(pl, e.slice(6, e.length)) : n.setAttributeNS(pl, e, t);
  else {
    const o = Zm(e);
    t == null || o && !jl(t) ? n.removeAttribute(e) : n.setAttribute(e, o ? "" : t);
  }
}
function vp(n, e, t, r, i, o, u) {
  if (e === "innerHTML" || e === "textContent") {
    r && u(r, i, o), n[e] = t ?? "";
    return;
  }
  const c = n.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    n._value = t;
    const d = c === "OPTION" ? n.getAttribute("value") : n.value, h = t ?? "";
    d !== h && (n.value = h), t == null && n.removeAttribute(e);
    return;
  }
  let f = !1;
  if (t === "" || t == null) {
    const d = typeof n[e];
    d === "boolean" ? t = jl(t) : t == null && d === "string" ? (t = "", f = !0) : d === "number" && (t = 0, f = !0);
  }
  try {
    n[e] = t;
  } catch (d) {
    f || q(
      `Failed setting prop "${e}" on <${c.toLowerCase()}>: value ${t} is invalid.`,
      d
    );
  }
  f && n.removeAttribute(e);
}
function Fp(n, e, t, r) {
  n.addEventListener(e, t, r);
}
function Ap(n, e, t, r) {
  n.removeEventListener(e, t, r);
}
function Up(n, e, t, r, i = null) {
  const o = n._vei || (n._vei = {}), u = o[e];
  if (r && u)
    u.value = r;
  else {
    const [c, f] = Lp(e);
    if (r) {
      const d = o[e] = qp(r, i);
      Fp(n, c, d, f);
    } else
      u && (Ap(n, c, u, f), o[e] = void 0);
  }
}
const gl = /(?:Once|Passive|Capture)$/;
function Lp(n) {
  let e;
  if (gl.test(n)) {
    e = {};
    let r;
    for (; r = n.match(gl); )
      n = n.slice(0, n.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : as(n.slice(2)), e];
}
let Bu = 0;
const Dp = /* @__PURE__ */ Promise.resolve(), Cp = () => Bu || (Dp.then(() => Bu = 0), Bu = Date.now());
function qp(n, e) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    kt(
      Kp(r, t.value),
      e,
      5,
      [r]
    );
  };
  return t.value = n, t.attached = Cp(), t;
}
function Kp(n, e) {
  if (Q(e)) {
    const t = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      t.call(n), n._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const wl = /^on[a-z]/, Pp = (n, e, t, r, i = !1, o, u, c, f) => {
  e === "class" ? kp(n, r, i) : e === "style" ? Op(n, t, r) : da(e) ? $a(e) || Up(n, e, t, r, u) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : _p(n, e, r, i)) ? vp(
    n,
    e,
    r,
    o,
    u,
    c,
    f
  ) : (e === "true-value" ? n._trueValue = r : e === "false-value" && (n._falseValue = r), Jp(n, e, r, i));
};
function _p(n, e, t, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in n && wl.test(e) && re(t)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && n.tagName === "INPUT" || e === "type" && n.tagName === "TEXTAREA" || wl.test(e) && Ue(t) ? !1 : e in n;
}
const $p = /* @__PURE__ */ Se({ patchProp: Pp }, Bp);
let yl;
function Mp() {
  return yl || (yl = Wh($p));
}
const Wf = (...n) => {
  const e = Mp().createApp(...n);
  Vp(e), Hp(e);
  const { mount: t } = e;
  return e.mount = (r) => {
    const i = jp(r);
    if (!i)
      return;
    const o = e._component;
    !re(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const u = t(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), u;
  }, e;
};
function Vp(n) {
  Object.defineProperty(n.config, "isNativeTag", {
    value: (e) => Rm(e) || Ym(e),
    writable: !1
  });
}
function Hp(n) {
  {
    const e = n.config.isCustomElement;
    Object.defineProperty(n.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        q(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = n.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(n.config, "compilerOptions", {
      get() {
        return q(r), t;
      },
      set() {
        q(r);
      }
    });
  }
}
function jp(n) {
  if (Ue(n)) {
    const e = document.querySelector(n);
    return e || q(
      `Failed to mount app: mount target selector "${n}" returned null.`
    ), e;
  }
  return window.ShadowRoot && n instanceof window.ShadowRoot && n.mode === "closed" && q(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), n;
}
function zp() {
  bp();
}
zp();
const Wp = () => new Error("Config not initialized");
let Ca;
const Rp = (n) => {
  if (n.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Ca = Bt(n);
}, ga = () => {
  if (!Ca)
    throw Wp;
  return {
    config: Ca,
    codeSdk: () => Ca.value.codeSdk
  };
};
class $s {
  /**
   * Constructs an EventChannel.
   * @param id - Identifier for the connection.
   * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
   */
  constructor(e = $s.getId(), t) {
    this.listeners = {}, this.targetWindow = null, this.readyResolver = null, this.setTargetWindow = (r) => {
      this.readyPromise = new Promise((i) => {
        this.readyResolver = i;
      }), r != null && r.contentWindow ? (this.targetWindow = r.contentWindow, r.addEventListener("load", () => {
        this.readyResolver && this.readyResolver();
      })) : (this.targetWindow = window.parent, this.readyResolver && this.readyResolver());
    }, this.emit = async (r, i) => {
      var u;
      await this.ready(), this.targetWindow && this.targetWindow.postMessage({
        id: this.connectionId,
        type: "event",
        payload: { event: r, args: i }
      }, "*");
      const o = r;
      (u = this.listeners[o]) == null || u.forEach((c) => {
        try {
          c(i);
        } catch (f) {
          console.error(`Error in listener for event "${o}": ${f}`);
        }
      });
    }, this.on = (r, i) => {
      window.addEventListener("message", (u) => {
        u.data.type === "event" && u.data.payload.event === r && u.data.id === this.connectionId && i(u.data.payload.args);
      });
      const o = r;
      this.listeners[o] = [...this.listeners[o] || [], i];
    }, this.connectionId = e, this.setTargetWindow(t);
  }
  /**
   * Awaits until the event channel is ready.
   */
  async ready() {
    await this.readyPromise;
  }
  /**
   * Gets the connection identifier for this event channel.
   */
  get id() {
    return this.connectionId;
  }
}
$s.getId = () => Math.random().toString(36).substring(2, 15);
function tt(n, e) {
  if (!n)
    throw new Error(e);
}
const Yp = 34028234663852886e22, Xp = -34028234663852886e22, Zp = 4294967295, Gp = 2147483647, Qp = -2147483648;
function qa(n) {
  if (typeof n != "number")
    throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > Gp || n < Qp)
    throw new Error("invalid int 32: " + n);
}
function Qu(n) {
  if (typeof n != "number")
    throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > Zp || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function Rf(n) {
  if (typeof n != "number")
    throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > Yp || n < Xp))
    throw new Error("invalid float 32: " + n);
}
const Yf = Symbol("@bufbuild/protobuf/enum-type");
function eg(n) {
  const e = n[Yf];
  return tt(e, "missing enum type on enum object"), e;
}
function Xf(n, e, t, r) {
  n[Yf] = Zf(e, t.map((i) => ({
    no: i.no,
    name: i.name,
    localName: n[i.no]
  })));
}
function Zf(n, e, t) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), o = [];
  for (const u of e) {
    const c = Gf(u);
    o.push(c), r[u.name] = c, i[u.no] = c;
  }
  return {
    typeName: n,
    values: o,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(u) {
      return r[u];
    },
    findNumber(u) {
      return i[u];
    }
  };
}
function tg(n, e, t) {
  const r = {};
  for (const i of e) {
    const o = Gf(i);
    r[o.localName] = o.no, r[o.no] = o.localName;
  }
  return Xf(r, n, e), r;
}
function Gf(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
let N = class {
  /**
   * Compare with a message of the same type.
   */
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  /**
   * Create a deep copy.
   */
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  /**
   * Parse from binary data, merging fields.
   *
   * Repeated fields are appended. Map entries are added, overwriting
   * existing keys.
   *
   * If a message field is already present, it will be merged with the
   * new data.
   */
  fromBinary(e, t) {
    const r = this.getType(), i = r.runtime.bin, o = i.makeReadOptions(t);
    return i.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(e, t) {
    const r = this.getType(), i = r.runtime.json, o = i.makeReadOptions(t);
    return i.readMessage(r, e, o, this), this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(e, t) {
    let r;
    try {
      r = JSON.parse(e);
    } catch (i) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
    }
    return this.fromJson(r, t);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(e) {
    const t = this.getType(), r = t.runtime.bin, i = r.makeWriteOptions(e), o = i.writerFactory();
    return r.writeMessage(this, o, i), o.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(e) {
    const t = this.getType(), r = t.runtime.json, i = r.makeWriteOptions(e);
    return r.writeMessage(this, i);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(e) {
    var t;
    const r = this.toJson(e);
    return JSON.stringify(r, null, (t = e == null ? void 0 : e.prettySpaces) !== null && t !== void 0 ? t : 0);
  }
  /**
   * Override for serialization behavior. This will be invoked when calling
   * JSON.stringify on this message (i.e. JSON.stringify(msg)).
   *
   * Note that this will not serialize google.protobuf.Any with a packed
   * message because the protobuf JSON format specifies that it needs to be
   * unpacked, and this is only possible with a type registry to look up the
   * message type.  As a result, attempting to serialize a message with this
   * type will throw an Error.
   *
   * This method is protected because you should not need to invoke it
   * directly -- instead use JSON.stringify or toJsonString for
   * stringified JSON.  Alternatively, if actual JSON is desired, you should
   * use toJson.
   */
  toJSON() {
    return this.toJson({
      emitDefaultValues: !0
    });
  }
  /**
   * Retrieve the MessageType of this message - a singleton that represents
   * the protobuf message declaration and provides metadata for reflection-
   * based operations.
   */
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
};
function ng(n, e, t, r) {
  var i;
  const o = (i = r == null ? void 0 : r.localName) !== null && i !== void 0 ? i : e.substring(e.lastIndexOf(".") + 1), u = {
    [o]: function(c) {
      n.util.initFields(this), n.util.initPartial(c, this);
    }
  }[o];
  return Object.setPrototypeOf(u.prototype, new N()), Object.assign(u, {
    runtime: n,
    typeName: e,
    fields: n.util.newFieldList(t),
    fromBinary(c, f) {
      return new u().fromBinary(c, f);
    },
    fromJson(c, f) {
      return new u().fromJson(c, f);
    },
    fromJsonString(c, f) {
      return new u().fromJsonString(c, f);
    },
    equals(c, f) {
      return n.util.equals(u, c, f);
    }
  }), u;
}
function rg(n, e, t, r) {
  return {
    syntax: n,
    json: e,
    bin: t,
    util: r,
    makeMessageType(i, o, u) {
      return ng(this, i, o, u);
    },
    makeEnum: tg,
    makeEnumType: Zf,
    getEnumType: eg
  };
}
var J;
(function(n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(J || (J = {}));
function ig() {
  let n = 0, e = 0;
  for (let r = 0; r < 28; r += 7) {
    let i = this.buf[this.pos++];
    if (n |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (n |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128))
    return this.assertBounds(), [n, e];
  for (let r = 3; r <= 31; r += 7) {
    let i = this.buf[this.pos++];
    if (e |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function ku(n, e, t) {
  for (let o = 0; o < 28; o = o + 7) {
    const u = n >>> o, c = !(!(u >>> 7) && e == 0), f = (c ? u | 128 : u) & 255;
    if (t.push(f), !c)
      return;
  }
  const r = n >>> 28 & 15 | (e & 7) << 4, i = !!(e >> 3);
  if (t.push((i ? r | 128 : r) & 255), !!i) {
    for (let o = 3; o < 31; o = o + 7) {
      const u = e >>> o, c = !!(u >>> 7), f = (c ? u | 128 : u) & 255;
      if (t.push(f), !c)
        return;
    }
    t.push(e >>> 31 & 1);
  }
}
const Ka = 4294967296;
function Tl(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let r = 0, i = 0;
  function o(u, c) {
    const f = Number(n.slice(u, c));
    i *= t, r = r * t + f, r >= Ka && (i = i + (r / Ka | 0), r = r % Ka);
  }
  return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? em(r, i) : Ac(r, i);
}
function sg(n, e) {
  let t = Ac(n, e);
  const r = t.hi & 2147483648;
  r && (t = em(t.lo, t.hi));
  const i = Qf(t.lo, t.hi);
  return r ? "-" + i : i;
}
function Qf(n, e) {
  if ({ lo: n, hi: e } = og(n, e), e <= 2097151)
    return String(Ka * e + n);
  const t = n & 16777215, r = (n >>> 24 | e << 8) & 16777215, i = e >> 16 & 65535;
  let o = t + r * 6777216 + i * 6710656, u = r + i * 8147497, c = i * 2;
  const f = 1e7;
  return o >= f && (u += Math.floor(o / f), o %= f), u >= f && (c += Math.floor(u / f), u %= f), c.toString() + El(u) + El(o);
}
function og(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function Ac(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function em(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, Ac(n, e);
}
const El = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function Nl(n, e) {
  if (n >= 0) {
    for (; n > 127; )
      e.push(n & 127 | 128), n = n >>> 7;
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++)
      e.push(n & 127 | 128), n = n >> 7;
    e.push(1);
  }
}
function ag() {
  let n = this.buf[this.pos++], e = n & 127;
  if (!(n & 128))
    return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 7, !(n & 128))
    return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 14, !(n & 128))
    return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 21, !(n & 128))
    return this.assertBounds(), e;
  n = this.buf[this.pos++], e |= (n & 15) << 28;
  for (let t = 5; n & 128 && t < 10; t++)
    n = this.buf[this.pos++];
  if (n & 128)
    throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function ug() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const i = BigInt("-9223372036854775808"), o = BigInt("9223372036854775807"), u = BigInt("0"), c = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(f) {
        const d = typeof f == "bigint" ? f : BigInt(f);
        if (d > o || d < i)
          throw new Error(`int64 invalid: ${f}`);
        return d;
      },
      uParse(f) {
        const d = typeof f == "bigint" ? f : BigInt(f);
        if (d > c || d < u)
          throw new Error(`uint64 invalid: ${f}`);
        return d;
      },
      enc(f) {
        return n.setBigInt64(0, this.parse(f), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      uEnc(f) {
        return n.setBigInt64(0, this.uParse(f), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      dec(f, d) {
        return n.setInt32(0, f, !0), n.setInt32(4, d, !0), n.getBigInt64(0, !0);
      },
      uDec(f, d) {
        return n.setInt32(0, f, !0), n.setInt32(4, d, !0), n.getBigUint64(0, !0);
      }
    };
  }
  const t = (i) => tt(/^-?[0-9]+$/.test(i), `int64 invalid: ${i}`), r = (i) => tt(/^[0-9]+$/.test(i), `uint64 invalid: ${i}`);
  return {
    zero: "0",
    supported: !1,
    parse(i) {
      return typeof i != "string" && (i = i.toString()), t(i), i;
    },
    uParse(i) {
      return typeof i != "string" && (i = i.toString()), r(i), i;
    },
    enc(i) {
      return typeof i != "string" && (i = i.toString()), t(i), Tl(i);
    },
    uEnc(i) {
      return typeof i != "string" && (i = i.toString()), r(i), Tl(i);
    },
    dec(i, o) {
      return sg(i, o);
    },
    uDec(i, o) {
      return Qf(i, o);
    }
  };
}
const de = ug();
var Fe;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(Fe || (Fe = {}));
class cg {
  constructor(e) {
    this.stack = [], this.textEncoder = e ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let i = 0; i < this.chunks.length; i++)
      e += this.chunks[i].length;
    let t = new Uint8Array(e), r = 0;
    for (let i = 0; i < this.chunks.length; i++)
      t.set(this.chunks[i], r), r += this.chunks[i].length;
    return this.chunks = [], t;
  }
  /**
   * Start a new fork for length-delimited data like a message
   * or a packed repeated field.
   *
   * Must be joined later with `join()`.
   */
  fork() {
    return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
  }
  /**
   * Join the last fork. Write its length and bytes, then
   * return to the previous state.
   */
  join() {
    let e = this.finish(), t = this.stack.pop();
    if (!t)
      throw new Error("invalid state, fork stack empty");
    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0);
  }
  /**
   * Write a chunk of raw bytes.
   */
  raw(e) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
  }
  /**
   * Write a `uint32` value, an unsigned 32 bit varint.
   */
  uint32(e) {
    for (Qu(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return qa(e), Nl(e, this.buf), this;
  }
  /**
   * Write a `bool` value, a variant.
   */
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  /**
   * Write a `bytes` value, length-delimited arbitrary data.
   */
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Write a `string` value, length-delimited data converted to UTF-8 text.
   */
  string(e) {
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(e) {
    Rf(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(e) {
    Qu(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(e) {
    qa(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(e) {
    return qa(e), e = (e << 1 ^ e >> 31) >>> 0, Nl(e, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(e) {
    let t = new Uint8Array(8), r = new DataView(t.buffer), i = de.enc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(t);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(e) {
    let t = new Uint8Array(8), r = new DataView(t.buffer), i = de.uEnc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(t);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(e) {
    let t = de.enc(e);
    return ku(t.lo, t.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let t = de.enc(e), r = t.hi >> 31, i = t.lo << 1 ^ r, o = (t.hi << 1 | t.lo >>> 31) ^ r;
    return ku(i, o, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let t = de.uEnc(e);
    return ku(t.lo, t.hi, this.buf), this;
  }
}
class lg {
  constructor(e, t) {
    this.varint64 = ig, this.uint32 = ag, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let e = this.uint32(), t = e >>> 3, r = e & 7;
    if (t <= 0 || r < 0 || r > 5)
      throw new Error("illegal tag: field no " + t + " wire type " + r);
    return [t, r];
  }
  /**
   * Skip one element on the wire and return the skipped data.
   * Supports WireType.StartGroup since v2.0.0-alpha.23.
   */
  skip(e) {
    let t = this.pos;
    switch (e) {
      case Fe.Varint:
        for (; this.buf[this.pos++] & 128; )
          ;
        break;
      case Fe.Bit64:
        this.pos += 4;
      case Fe.Bit32:
        this.pos += 4;
        break;
      case Fe.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case Fe.StartGroup:
        let i;
        for (; (i = this.tag()[1]) !== Fe.EndGroup; )
          this.skip(i);
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(t, this.pos);
  }
  /**
   * Throws error if position in byte array is out of range.
   */
  assertBounds() {
    if (this.pos > this.len)
      throw new RangeError("premature EOF");
  }
  /**
   * Read a `int32` field, a signed 32 bit varint.
   */
  int32() {
    return this.uint32() | 0;
  }
  /**
   * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
   */
  sint32() {
    let e = this.uint32();
    return e >>> 1 ^ -(e & 1);
  }
  /**
   * Read a `int64` field, a signed 64-bit varint.
   */
  int64() {
    return de.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return de.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [e, t] = this.varint64(), r = -(e & 1);
    return e = (e >>> 1 | (t & 1) << 31) ^ r, t = t >>> 1 ^ r, de.dec(e, t);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
  }
  /**
   * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
   */
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  /**
   * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
   */
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  /**
   * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
   */
  fixed64() {
    return de.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return de.dec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `float` field, 32-bit floating point number.
   */
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  /**
   * Read a `double` field, a 64-bit floating point number.
   */
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  /**
   * Read a `bytes` field, length-delimited arbitrary data.
   */
  bytes() {
    let e = this.uint32(), t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function ec(n, e) {
  return e instanceof N || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
J.DOUBLE, J.FLOAT, J.INT64, J.UINT64, J.INT32, J.UINT32, J.BOOL, J.STRING, J.BYTES;
function Hi(n, e, t) {
  if (e === t)
    return !0;
  if (n == J.BYTES) {
    if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  switch (n) {
    case J.UINT64:
    case J.FIXED64:
    case J.INT64:
    case J.SFIXED64:
    case J.SINT64:
      return e == t;
  }
  return !1;
}
function tc(n) {
  switch (n) {
    case J.BOOL:
      return !1;
    case J.UINT64:
    case J.FIXED64:
    case J.INT64:
    case J.SFIXED64:
    case J.SINT64:
      return de.zero;
    case J.DOUBLE:
    case J.FLOAT:
      return 0;
    case J.BYTES:
      return new Uint8Array(0);
    case J.STRING:
      return "";
    default:
      return 0;
  }
}
function tm(n, e) {
  const t = e === void 0;
  let r = Fe.Varint, i = e === 0;
  switch (n) {
    case J.STRING:
      i = t || !e.length, r = Fe.LengthDelimited;
      break;
    case J.BOOL:
      i = e === !1;
      break;
    case J.DOUBLE:
      r = Fe.Bit64;
      break;
    case J.FLOAT:
      r = Fe.Bit32;
      break;
    case J.INT64:
      i = t || e == 0;
      break;
    case J.UINT64:
      i = t || e == 0;
      break;
    case J.FIXED64:
      i = t || e == 0, r = Fe.Bit64;
      break;
    case J.BYTES:
      i = t || !e.byteLength, r = Fe.LengthDelimited;
      break;
    case J.FIXED32:
      r = Fe.Bit32;
      break;
    case J.SFIXED32:
      r = Fe.Bit32;
      break;
    case J.SFIXED64:
      i = t || e == 0, r = Fe.Bit64;
      break;
    case J.SINT64:
      i = t || e == 0;
      break;
  }
  const o = J[n].toLowerCase();
  return [r, o, t || i];
}
const Js = Symbol("@bufbuild/protobuf/unknown-fields"), bl = {
  readUnknownFields: !0,
  readerFactory: (n) => new lg(n)
}, xl = {
  writeUnknownFields: !0,
  writerFactory: () => new cg()
};
function fg(n) {
  return n ? Object.assign(Object.assign({}, bl), n) : bl;
}
function mg(n) {
  return n ? Object.assign(Object.assign({}, xl), n) : xl;
}
function dg() {
  return {
    makeReadOptions: fg,
    makeWriteOptions: mg,
    listUnknownFields(n) {
      var e;
      return (e = n[Js]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[Js];
    },
    writeUnknownFields(n, e) {
      const r = n[Js];
      if (r)
        for (const i of r)
          e.tag(i.no, i.wireType).raw(i.data);
    },
    onUnknownField(n, e, t, r) {
      const i = n;
      Array.isArray(i[Js]) || (i[Js] = []), i[Js].push({ no: e, wireType: t, data: r });
    },
    readMessage(n, e, t, r) {
      const i = n.getType(), o = t === void 0 ? e.len : e.pos + t;
      for (; e.pos < o; ) {
        const [u, c] = e.tag(), f = i.fields.find(u);
        if (!f) {
          const y = e.skip(c);
          r.readUnknownFields && this.onUnknownField(n, u, c, y);
          continue;
        }
        let d = n, h = f.repeated, g = f.localName;
        switch (f.oneof && (d = d[f.oneof.localName], d.case != g && delete d.value, d.case = g, g = "value"), f.kind) {
          case "scalar":
          case "enum":
            const y = f.kind == "enum" ? J.INT32 : f.T;
            if (h) {
              let M = d[g];
              if (c == Fe.LengthDelimited && y != J.STRING && y != J.BYTES) {
                let W = e.uint32() + e.pos;
                for (; e.pos < W; )
                  M.push(no(e, y));
              } else
                M.push(no(e, y));
            } else
              d[g] = no(e, y);
            break;
          case "message":
            const b = f.T;
            h ? d[g].push(Pa(e, new b(), r)) : d[g] instanceof N ? Pa(e, d[g], r) : (d[g] = Pa(e, new b(), r), b.fieldWrapper && !f.oneof && !f.repeated && (d[g] = b.fieldWrapper.unwrapField(d[g])));
            break;
          case "map":
            let [S, A] = hg(f, e, r);
            d[g][S] = A;
            break;
        }
      }
    }
  };
}
function Pa(n, e, t) {
  return e.getType().runtime.bin.readMessage(e, n, n.uint32(), t), e;
}
function hg(n, e, t) {
  const r = e.uint32(), i = e.pos + r;
  let o, u;
  for (; e.pos < i; ) {
    let [c] = e.tag();
    switch (c) {
      case 1:
        o = no(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            u = no(e, n.V.T);
            break;
          case "enum":
            u = e.int32();
            break;
          case "message":
            u = Pa(e, new n.V.T(), t);
            break;
        }
        break;
    }
  }
  if (o === void 0) {
    let c = tc(n.K);
    o = n.K == J.BOOL ? c.toString() : c;
  }
  if (typeof o != "string" && typeof o != "number" && (o = o.toString()), u === void 0)
    switch (n.V.kind) {
      case "scalar":
        u = tc(n.V.T);
        break;
      case "enum":
        u = 0;
        break;
      case "message":
        u = new n.V.T();
        break;
    }
  return [o, u];
}
function no(n, e) {
  switch (e) {
    case J.STRING:
      return n.string();
    case J.BOOL:
      return n.bool();
    case J.DOUBLE:
      return n.double();
    case J.FLOAT:
      return n.float();
    case J.INT32:
      return n.int32();
    case J.INT64:
      return n.int64();
    case J.UINT64:
      return n.uint64();
    case J.FIXED64:
      return n.fixed64();
    case J.BYTES:
      return n.bytes();
    case J.FIXED32:
      return n.fixed32();
    case J.SFIXED32:
      return n.sfixed32();
    case J.SFIXED64:
      return n.sfixed64();
    case J.SINT64:
      return n.sint64();
    case J.UINT32:
      return n.uint32();
    case J.SINT32:
      return n.sint32();
  }
}
function pg(n, e, t, r, i) {
  n.tag(t.no, Fe.LengthDelimited), n.fork();
  let o = r;
  switch (t.K) {
    case J.INT32:
    case J.FIXED32:
    case J.UINT32:
    case J.SFIXED32:
    case J.SINT32:
      o = Number.parseInt(r);
      break;
    case J.BOOL:
      tt(r == "true" || r == "false"), o = r == "true";
      break;
  }
  switch (ro(n, t.K, 1, o, !0), t.V.kind) {
    case "scalar":
      ro(n, t.V.T, 2, i, !0);
      break;
    case "enum":
      ro(n, J.INT32, 2, i, !0);
      break;
    case "message":
      nc(n, e, t.V.T, 2, i);
      break;
  }
  n.join();
}
function nc(n, e, t, r, i) {
  if (i !== void 0) {
    const o = ec(t, i);
    n.tag(r, Fe.LengthDelimited).bytes(o.toBinary(e));
  }
}
function ro(n, e, t, r, i) {
  let [o, u, c] = tm(e, r);
  (!c || i) && n.tag(t, o)[u](r);
}
function gg(n, e, t, r) {
  if (!r.length)
    return;
  n.tag(t, Fe.LengthDelimited).fork();
  let [, i] = tm(e);
  for (let o = 0; o < r.length; o++)
    n[i](r[o]);
  n.join();
}
function wg() {
  return Object.assign(Object.assign({}, dg()), { writeMessage(n, e, t) {
    const r = n.getType();
    for (const i of r.fields.byNumber()) {
      let o, u = i.repeated, c = i.localName;
      if (i.oneof) {
        const f = n[i.oneof.localName];
        if (f.case !== c)
          continue;
        o = f.value;
      } else
        o = n[c];
      switch (i.kind) {
        case "scalar":
        case "enum":
          let f = i.kind == "enum" ? J.INT32 : i.T;
          if (u)
            if (i.packed)
              gg(e, f, i.no, o);
            else
              for (const d of o)
                ro(e, f, i.no, d, !0);
          else
            o !== void 0 && ro(e, f, i.no, o, !!i.oneof || i.opt);
          break;
        case "message":
          if (u)
            for (const d of o)
              nc(e, t, i.T, i.no, d);
          else
            nc(e, t, i.T, i.no, o);
          break;
        case "map":
          for (const [d, h] of Object.entries(o))
            pg(e, t, i, d, h);
          break;
      }
    }
    return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
  } });
}
let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), hu = [];
for (let n = 0; n < en.length; n++)
  hu[en[n].charCodeAt(0)] = n;
hu["-".charCodeAt(0)] = en.indexOf("+");
hu["_".charCodeAt(0)] = en.indexOf("/");
const nm = {
  /**
   * Decodes a base64 string to a byte array.
   *
   * - ignores white-space, including line breaks and tabs
   * - allows inner padding (can decode concatenated base64 strings)
   * - does not require padding
   * - understands base64url encoding:
   *   "-" instead of "+",
   *   "_" instead of "/",
   *   no padding
   */
  dec(n) {
    let e = n.length * 3 / 4;
    n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e), r = 0, i = 0, o, u = 0;
    for (let c = 0; c < n.length; c++) {
      if (o = hu[n.charCodeAt(c)], o === void 0)
        switch (n[c]) {
          case "=":
            i = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (i) {
        case 0:
          u = o, i = 1;
          break;
        case 1:
          t[r++] = u << 2 | (o & 48) >> 4, u = o, i = 2;
          break;
        case 2:
          t[r++] = (u & 15) << 4 | (o & 60) >> 2, u = o, i = 3;
          break;
        case 3:
          t[r++] = (u & 3) << 6 | o, i = 0;
          break;
      }
    }
    if (i == 1)
      throw Error("invalid base64 string.");
    return t.subarray(0, r);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(n) {
    let e = "", t = 0, r, i = 0;
    for (let o = 0; o < n.length; o++)
      switch (r = n[o], t) {
        case 0:
          e += en[r >> 2], i = (r & 3) << 4, t = 1;
          break;
        case 1:
          e += en[i | r >> 4], i = (r & 15) << 2, t = 2;
          break;
        case 2:
          e += en[i | r >> 6], e += en[r & 63], t = 0;
          break;
      }
    return t && (e += en[i], e += "=", t == 1 && (e += "=")), e;
  }
}, Bl = {
  ignoreUnknownFields: !1
}, kl = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function yg(n) {
  return n ? Object.assign(Object.assign({}, Bl), n) : Bl;
}
function Tg(n) {
  return n ? Object.assign(Object.assign({}, kl), n) : kl;
}
function Eg(n) {
  const e = n(Ng, Ol);
  return {
    makeReadOptions: yg,
    makeWriteOptions: Tg,
    readMessage(t, r, i, o) {
      if (r == null || Array.isArray(r) || typeof r != "object")
        throw new Error(`cannot decode message ${t.typeName} from JSON: ${this.debug(r)}`);
      o = o ?? new t();
      const u = {};
      for (const [c, f] of Object.entries(r)) {
        const d = t.fields.findJsonName(c);
        if (!d) {
          if (!i.ignoreUnknownFields)
            throw new Error(`cannot decode message ${t.typeName} from JSON: key "${c}" is unknown`);
          continue;
        }
        let h = d.localName, g = o;
        if (d.oneof) {
          if (f === null && d.kind == "scalar")
            continue;
          const y = u[d.oneof.localName];
          if (y)
            throw new Error(`cannot decode message ${t.typeName} from JSON: multiple keys for oneof "${d.oneof.name}" present: "${y}", "${c}"`);
          u[d.oneof.localName] = c, g = g[d.oneof.localName] = { case: h }, h = "value";
        }
        if (d.repeated) {
          if (f === null)
            continue;
          if (!Array.isArray(f))
            throw new Error(`cannot decode field ${t.typeName}.${d.name} from JSON: ${this.debug(f)}`);
          const y = g[h];
          for (const b of f) {
            if (b === null)
              throw new Error(`cannot decode field ${t.typeName}.${d.name} from JSON: ${this.debug(b)}`);
            let S;
            switch (d.kind) {
              case "message":
                S = d.T.fromJson(b, i);
                break;
              case "enum":
                if (S = Ou(d.T, b, i.ignoreUnknownFields), S === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  S = js(d.T, b);
                } catch (A) {
                  let M = `cannot decode field ${t.typeName}.${d.name} from JSON: ${this.debug(b)}`;
                  throw A instanceof Error && A.message.length > 0 && (M += `: ${A.message}`), new Error(M);
                }
                break;
            }
            y.push(S);
          }
        } else if (d.kind == "map") {
          if (f === null)
            continue;
          if (Array.isArray(f) || typeof f != "object")
            throw new Error(`cannot decode field ${t.typeName}.${d.name} from JSON: ${this.debug(f)}`);
          const y = g[h];
          for (const [b, S] of Object.entries(f)) {
            if (S === null)
              throw new Error(`cannot decode field ${t.typeName}.${d.name} from JSON: map value null`);
            let A;
            switch (d.V.kind) {
              case "message":
                A = d.V.T.fromJson(S, i);
                break;
              case "enum":
                if (A = Ou(d.V.T, S, i.ignoreUnknownFields), A === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  A = js(d.V.T, S);
                } catch (M) {
                  let W = `cannot decode map value for field ${t.typeName}.${d.name} from JSON: ${this.debug(f)}`;
                  throw M instanceof Error && M.message.length > 0 && (W += `: ${M.message}`), new Error(W);
                }
                break;
            }
            try {
              y[js(d.K, d.K == J.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = A;
            } catch (M) {
              let W = `cannot decode map key for field ${t.typeName}.${d.name} from JSON: ${this.debug(f)}`;
              throw M instanceof Error && M.message.length > 0 && (W += `: ${M.message}`), new Error(W);
            }
          }
        } else
          switch (d.kind) {
            case "message":
              const y = d.T;
              if (f === null && y.typeName != "google.protobuf.Value") {
                if (d.oneof)
                  throw new Error(`cannot decode field ${t.typeName}.${d.name} from JSON: null is invalid for oneof field "${c}"`);
                continue;
              }
              g[h] instanceof N ? g[h].fromJson(f, i) : (g[h] = y.fromJson(f, i), y.fieldWrapper && !d.oneof && (g[h] = y.fieldWrapper.unwrapField(g[h])));
              break;
            case "enum":
              const b = Ou(d.T, f, i.ignoreUnknownFields);
              b !== void 0 && (g[h] = b);
              break;
            case "scalar":
              try {
                g[h] = js(d.T, f);
              } catch (S) {
                let A = `cannot decode field ${t.typeName}.${d.name} from JSON: ${this.debug(f)}`;
                throw S instanceof Error && S.message.length > 0 && (A += `: ${S.message}`), new Error(A);
              }
              break;
          }
      }
      return o;
    },
    writeMessage(t, r) {
      const i = t.getType(), o = {};
      let u;
      try {
        for (const c of i.fields.byMember()) {
          let f;
          if (c.kind == "oneof") {
            const d = t[c.localName];
            if (d.value === void 0)
              continue;
            if (u = c.findField(d.case), !u)
              throw "oneof case not found: " + d.case;
            f = e(u, d.value, r);
          } else
            u = c, f = e(u, t[u.localName], r);
          f !== void 0 && (o[r.useProtoFieldName ? u.name : u.jsonName] = f);
        }
      } catch (c) {
        const f = u ? `cannot encode field ${i.typeName}.${u.name} to JSON` : `cannot encode message ${i.typeName} to JSON`, d = c instanceof Error ? c.message : String(c);
        throw new Error(f + (d.length > 0 ? `: ${d}` : ""));
      }
      return o;
    },
    readScalar: js,
    writeScalar: Ol,
    debug: rm
  };
}
function rm(n) {
  if (n === null)
    return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100 ? "string" : `"${n.split('"').join('\\"')}"`;
    default:
      return String(n);
  }
}
function js(n, e) {
  switch (n) {
    case J.DOUBLE:
    case J.FLOAT:
      if (e === null)
        return 0;
      if (e === "NaN")
        return Number.NaN;
      if (e === "Infinity")
        return Number.POSITIVE_INFINITY;
      if (e === "-Infinity")
        return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number")
        break;
      const t = Number(e);
      if (Number.isNaN(t) || !Number.isFinite(t))
        break;
      return n == J.FLOAT && Rf(t), t;
    case J.INT32:
    case J.FIXED32:
    case J.SFIXED32:
    case J.SINT32:
    case J.UINT32:
      if (e === null)
        return 0;
      let r;
      if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0)
        break;
      return n == J.UINT32 ? Qu(r) : qa(r), r;
    case J.INT64:
    case J.SFIXED64:
    case J.SINT64:
      if (e === null)
        return de.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return de.parse(e);
    case J.FIXED64:
    case J.UINT64:
      if (e === null)
        return de.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return de.uParse(e);
    case J.BOOL:
      if (e === null)
        return !1;
      if (typeof e != "boolean")
        break;
      return e;
    case J.STRING:
      if (e === null)
        return "";
      if (typeof e != "string")
        break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case J.BYTES:
      if (e === null || e === "")
        return new Uint8Array(0);
      if (typeof e != "string")
        break;
      return nm.dec(e);
  }
  throw new Error();
}
function Ou(n, e, t) {
  if (e === null)
    return 0;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e))
        return e;
      break;
    case "string":
      const r = n.findName(e);
      if (r || t)
        return r == null ? void 0 : r.no;
      break;
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${rm(e)}`);
}
function Ng(n, e, t, r) {
  var i;
  if (e === void 0)
    return e;
  if (e === 0 && !t)
    return;
  if (r)
    return e;
  if (n.typeName == "google.protobuf.NullValue")
    return null;
  const o = n.findNumber(e);
  return (i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : e;
}
function Ol(n, e, t) {
  if (e !== void 0)
    switch (n) {
      case J.INT32:
      case J.SFIXED32:
      case J.SINT32:
      case J.FIXED32:
      case J.UINT32:
        return tt(typeof e == "number"), e != 0 || t ? e : void 0;
      case J.FLOAT:
      case J.DOUBLE:
        return tt(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || t ? e : void 0;
      case J.STRING:
        return tt(typeof e == "string"), e.length > 0 || t ? e : void 0;
      case J.BOOL:
        return tt(typeof e == "boolean"), e || t ? e : void 0;
      case J.UINT64:
      case J.FIXED64:
      case J.INT64:
      case J.SFIXED64:
      case J.SINT64:
        return tt(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), t || e != 0 ? e.toString(10) : void 0;
      case J.BYTES:
        return tt(e instanceof Uint8Array), t || e.byteLength > 0 ? nm.enc(e) : void 0;
    }
}
function bg() {
  return Eg((n, e) => function(r, i, o) {
    if (r.kind == "map") {
      const u = {};
      switch (r.V.kind) {
        case "scalar":
          for (const [f, d] of Object.entries(i)) {
            const h = e(r.V.T, d, !0);
            tt(h !== void 0), u[f.toString()] = h;
          }
          break;
        case "message":
          for (const [f, d] of Object.entries(i))
            u[f.toString()] = d.toJson(o);
          break;
        case "enum":
          const c = r.V.T;
          for (const [f, d] of Object.entries(i)) {
            tt(d === void 0 || typeof d == "number");
            const h = n(c, d, !0, o.enumAsInteger);
            tt(h !== void 0), u[f.toString()] = h;
          }
          break;
      }
      return o.emitDefaultValues || Object.keys(u).length > 0 ? u : void 0;
    } else if (r.repeated) {
      const u = [];
      switch (r.kind) {
        case "scalar":
          for (let c = 0; c < i.length; c++)
            u.push(e(r.T, i[c], !0));
          break;
        case "enum":
          for (let c = 0; c < i.length; c++)
            u.push(n(r.T, i[c], !0, o.enumAsInteger));
          break;
        case "message":
          for (let c = 0; c < i.length; c++)
            u.push(ec(r.T, i[c]).toJson(o));
          break;
      }
      return o.emitDefaultValues || u.length > 0 ? u : void 0;
    } else
      switch (r.kind) {
        case "scalar":
          return e(r.T, i, !!r.oneof || r.opt || o.emitDefaultValues);
        case "enum":
          return n(r.T, i, !!r.oneof || r.opt || o.emitDefaultValues, o.enumAsInteger);
        case "message":
          return i !== void 0 ? ec(r.T, i).toJson(o) : void 0;
      }
  });
}
function xg() {
  return {
    setEnumType: Xf,
    initPartial(n, e) {
      if (n === void 0)
        return;
      const t = e.getType();
      for (const r of t.fields.byMember()) {
        const i = r.localName, o = e, u = n;
        if (u[i] !== void 0)
          switch (r.kind) {
            case "oneof":
              const c = u[i].case;
              if (c === void 0)
                continue;
              const f = r.findField(c);
              let d = u[i].value;
              f && f.kind == "message" && !(d instanceof f.T) ? d = new f.T(d) : f && f.kind === "scalar" && f.T === J.BYTES && (d = zs(d)), o[i] = { case: c, value: d };
              break;
            case "scalar":
            case "enum":
              let h = u[i];
              r.T === J.BYTES && (h = r.repeated ? h.map(zs) : zs(h)), o[i] = h;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === J.BYTES)
                    for (const [b, S] of Object.entries(u[i]))
                      o[i][b] = zs(S);
                  else
                    Object.assign(o[i], u[i]);
                  break;
                case "message":
                  const y = r.V.T;
                  for (const b of Object.keys(u[i])) {
                    let S = u[i][b];
                    y.fieldWrapper || (S = new y(S)), o[i][b] = S;
                  }
                  break;
              }
              break;
            case "message":
              const g = r.T;
              if (r.repeated)
                o[i] = u[i].map((y) => y instanceof g ? y : new g(y));
              else if (u[i] !== void 0) {
                const y = u[i];
                g.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ g.typeName === "google.protobuf.BytesValue" ? o[i] = zs(y) : o[i] = y : o[i] = y instanceof g ? y : new g(y);
              }
              break;
          }
      }
    },
    equals(n, e, t) {
      return e === t ? !0 : !e || !t ? !1 : n.fields.byMember().every((r) => {
        const i = e[r.localName], o = t[r.localName];
        if (r.repeated) {
          if (i.length !== o.length)
            return !1;
          switch (r.kind) {
            case "message":
              return i.every((u, c) => r.T.equals(u, o[c]));
            case "scalar":
              return i.every((u, c) => Hi(r.T, u, o[c]));
            case "enum":
              return i.every((u, c) => Hi(J.INT32, u, o[c]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(i, o);
          case "enum":
            return Hi(J.INT32, i, o);
          case "scalar":
            return Hi(r.T, i, o);
          case "oneof":
            if (i.case !== o.case)
              return !1;
            const u = r.findField(i.case);
            if (u === void 0)
              return !0;
            switch (u.kind) {
              case "message":
                return u.T.equals(i.value, o.value);
              case "enum":
                return Hi(J.INT32, i.value, o.value);
              case "scalar":
                return Hi(u.T, i.value, o.value);
            }
            throw new Error(`oneof cannot contain ${u.kind}`);
          case "map":
            const c = Object.keys(i).concat(Object.keys(o));
            switch (r.V.kind) {
              case "message":
                const f = r.V.T;
                return c.every((h) => f.equals(i[h], o[h]));
              case "enum":
                return c.every((h) => Hi(J.INT32, i[h], o[h]));
              case "scalar":
                const d = r.V.T;
                return c.every((h) => Hi(d, i[h], o[h]));
            }
            break;
        }
      });
    },
    clone(n) {
      const e = n.getType(), t = new e(), r = t;
      for (const i of e.fields.byMember()) {
        const o = n[i.localName];
        let u;
        if (i.repeated)
          u = o.map(Ia);
        else if (i.kind == "map") {
          u = r[i.localName];
          for (const [c, f] of Object.entries(o))
            u[c] = Ia(f);
        } else
          i.kind == "oneof" ? u = i.findField(o.case) ? { case: o.case, value: Ia(o.value) } : { case: void 0 } : u = Ia(o);
        r[i.localName] = u;
      }
      return t;
    }
  };
}
function Ia(n) {
  if (n === void 0)
    return n;
  if (n instanceof N)
    return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function zs(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
class Bg {
  constructor(e, t) {
    this._fields = e, this._normalizer = t;
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const r of this.list())
        t[r.jsonName] = t[r.name] = r;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const r of this.list())
        t[r.no] = r;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const r of this.list())
        r.oneof ? r.oneof !== t && (t = r.oneof, e.push(t)) : e.push(r);
    }
    return this.members;
  }
}
function im(n, e) {
  const t = sm(n);
  return e ? t : vg(Jg(t));
}
function kg(n) {
  return im(n, !1);
}
const Og = sm;
function sm(n) {
  let e = !1;
  const t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n.charAt(r);
    switch (i) {
      case "_":
        e = !0;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        t.push(i), e = !1;
        break;
      default:
        e && (e = !1, i = i.toUpperCase()), t.push(i);
        break;
    }
  }
  return t.join("");
}
const Ig = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), Sg = /* @__PURE__ */ new Set([
  // names reserved by the runtime
  "getType",
  "clone",
  "equals",
  "fromBinary",
  "fromJson",
  "fromJsonString",
  "toBinary",
  "toJson",
  "toJsonString",
  // names reserved by the runtime for the future
  "toObject"
]), om = (n) => `${n}$`, Jg = (n) => Sg.has(n) ? om(n) : n, vg = (n) => Ig.has(n) ? om(n) : n;
class Fg {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = kg(e);
  }
  addField(e) {
    tt(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let t = 0; t < this.fields.length; t++)
        this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
}
const s = rg("proto3", bg(), wg(), Object.assign(Object.assign({}, xg()), {
  newFieldList(n) {
    return new Bg(n, Ag);
  },
  initFields(n) {
    for (const e of n.getType().fields.byMember()) {
      if (e.opt)
        continue;
      const t = e.localName, r = n;
      if (e.repeated) {
        r[t] = [];
        continue;
      }
      switch (e.kind) {
        case "oneof":
          r[t] = { case: void 0 };
          break;
        case "enum":
          r[t] = 0;
          break;
        case "map":
          r[t] = {};
          break;
        case "scalar":
          r[t] = tc(e.T);
          break;
      }
    }
  }
}));
function Ag(n) {
  var e, t, r;
  const i = [];
  let o;
  for (const u of typeof n == "function" ? n() : n) {
    const c = u;
    if (c.localName = im(u.name, u.oneof !== void 0), c.jsonName = (e = u.jsonName) !== null && e !== void 0 ? e : Og(u.name), c.repeated = (t = u.repeated) !== null && t !== void 0 ? t : !1, c.packed = (r = u.packed) !== null && r !== void 0 ? r : u.kind == "enum" || u.kind == "scalar" && u.T != J.BYTES && u.T != J.STRING, u.oneof !== void 0) {
      const f = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
      (!o || o.name != f) && (o = new Fg(f)), c.oneof = o, o.addField(c);
    }
    i.push(c);
  }
  return i;
}
var se;
(function(n) {
  n[n.Unary = 0] = "Unary", n[n.ServerStreaming = 1] = "ServerStreaming", n[n.ClientStreaming = 2] = "ClientStreaming", n[n.BiDiStreaming = 3] = "BiDiStreaming";
})(se || (se = {}));
var Il;
(function(n) {
  n[n.NoSideEffects = 1] = "NoSideEffects", n[n.Idempotent = 2] = "Idempotent";
})(Il || (Il = {}));
class Je extends N {
  constructor(e) {
    super(), this.seconds = de.zero, this.nanos = 0, s.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${s.json.debug(e)}`);
    const r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r)
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i))
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = de.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0)
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const i = (this.nanos + 1e9).toString().substring(1);
      i.substring(3) === "000000" ? r = "." + i.substring(0, 3) + "Z" : i.substring(6) === "000" ? r = "." + i.substring(0, 6) + "Z" : r = "." + i + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Je.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new Je({
      seconds: de.parse(Math.floor(t / 1e3)),
      nanos: t % 1e3 * 1e6
    });
  }
  static fromBinary(e, t) {
    return new Je().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Je().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Je().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Je, e, t);
  }
}
Je.runtime = s;
Je.typeName = "google.protobuf.Timestamp";
Je.fields = s.util.newFieldList(() => [
  {
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
class tn extends N {
  constructor(e) {
    super(), this.seconds = de.zero, this.nanos = 0, s.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.json.debug(e)}`);
    const r = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.json.debug(e)}`);
    const i = Number(r[1]);
    if (i > 315576e6 || i < -315576e6)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.json.debug(e)}`);
    if (this.seconds = de.parse(i), typeof r[2] == "string") {
      const o = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(o), (i < 0 || Object.is(i, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(e) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
      throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let t = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), t += "." + r, this.nanos < 0 && this.seconds === de.zero && (t = "-" + t);
    }
    return t + "s";
  }
  static fromBinary(e, t) {
    return new tn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(tn, e, t);
  }
}
tn.runtime = s;
tn.typeName = "google.protobuf.Duration";
tn.fields = s.util.newFieldList(() => [
  {
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ct;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.PRIMARY = 1] = "PRIMARY", n[n.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", n[n.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", n[n.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", n[n.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", n[n.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", n[n.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", n[n.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", n[n.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", n[n.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", n[n.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", n[n.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD", n[n.RELATIONSHIP = 13] = "RELATIONSHIP", n[n.ASSOCIATED_TOKEN_ACCOUNT = 14] = "ASSOCIATED_TOKEN_ACCOUNT";
})(ct || (ct = {}));
s.util.setEnumType(ct, "code.common.v1.AccountType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "PRIMARY" },
  { no: 2, name: "TEMPORARY_INCOMING" },
  { no: 3, name: "TEMPORARY_OUTGOING" },
  { no: 4, name: "BUCKET_1_KIN" },
  { no: 5, name: "BUCKET_10_KIN" },
  { no: 6, name: "BUCKET_100_KIN" },
  { no: 7, name: "BUCKET_1_000_KIN" },
  { no: 8, name: "BUCKET_10_000_KIN" },
  { no: 9, name: "BUCKET_100_000_KIN" },
  { no: 10, name: "BUCKET_1_000_000_KIN" },
  { no: 11, name: "LEGACY_PRIMARY_2022" },
  { no: 12, name: "REMOTE_SEND_GIFT_CARD" },
  { no: 13, name: "RELATIONSHIP" },
  { no: 14, name: "ASSOCIATED_TOKEN_ACCOUNT" }
]);
class P extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new P().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new P().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new P().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(P, e, t);
  }
}
P.runtime = s;
P.typeName = "code.common.v1.SolanaAccountId";
P.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Lt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Lt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Lt, e, t);
  }
}
Lt.runtime = s;
Lt.typeName = "code.common.v1.Transaction";
Lt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class nn extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new nn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(nn, e, t);
  }
}
nn.runtime = s;
nn.typeName = "code.common.v1.Blockhash";
nn.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ie extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ie().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ie().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ie().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ie, e, t);
  }
}
ie.runtime = s;
ie.typeName = "code.common.v1.Signature";
ie.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class He extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new He().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new He().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new He().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(He, e, t);
  }
}
He.runtime = s;
He.typeName = "code.common.v1.IntentId";
He.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class dt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new dt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(dt, e, t);
  }
}
dt.runtime = s;
dt.typeName = "code.common.v1.UserId";
dt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class rt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new rt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(rt, e, t);
  }
}
rt.runtime = s;
rt.typeName = "code.common.v1.DataContainerId";
rt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Dt extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Dt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Dt, e, t);
  }
}
Dt.runtime = s;
Dt.typeName = "code.common.v1.DeviceToken";
Dt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Et extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Et().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Et().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Et().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Et, e, t);
  }
}
Et.runtime = s;
Et.typeName = "code.common.v1.AppInstallId";
Et.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Pe extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Pe, e, t);
  }
}
Pe.runtime = s;
Pe.typeName = "code.common.v1.PhoneNumber";
Pe.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class it extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new it().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new it().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new it().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(it, e, t);
  }
}
it.runtime = s;
it.typeName = "code.common.v1.Domain";
it.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Ct extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ct().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ct().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ct().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ct, e, t);
  }
}
Ct.runtime = s;
Ct.typeName = "code.common.v1.Relationship";
Ct.fields = s.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: it, oneof: "type" }
]);
let _i = class Zs extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Zs, e, t);
  }
};
_i.runtime = s;
_i.typeName = "code.common.v1.Hash";
_i.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class es extends N {
  constructor(e) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new es().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new es().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new es().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(es, e, t);
  }
}
es.runtime = s;
es.typeName = "code.common.v1.Request";
es.fields = s.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class ts extends N {
  constructor(e) {
    super(), this.result = lo.OK, this.body = new Uint8Array(0), this.message = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ts().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ts().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ts().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ts, e, t);
  }
}
ts.runtime = s;
ts.typeName = "code.common.v1.Response";
ts.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(lo) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var lo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ERROR = 1] = "ERROR";
})(lo || (lo = {}));
s.util.setEnumType(lo, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var Xt;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", n[n.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(Xt || (Xt = {}));
s.util.setEnumType(Xt, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class rn extends N {
  constructor(e) {
    super(), this.request = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new rn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(rn, e, t);
  }
}
rn.runtime = s;
rn.typeName = "code.transaction.v2.SubmitIntentRequest";
rn.fields = s.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: sn, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: on, oneof: "request" }
]);
class sn extends N {
  constructor(e) {
    super(), this.actions = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new sn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(sn, e, t);
  }
}
sn.runtime = s;
sn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
sn.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: He },
  { no: 2, name: "owner", kind: "message", T: P },
  { no: 3, name: "metadata", kind: "message", T: Nt },
  { no: 4, name: "actions", kind: "message", T: Un, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: ie },
  { no: 6, name: "device_token", kind: "message", T: Dt }
]);
class on extends N {
  constructor(e) {
    super(), this.signatures = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new on().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new on().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new on().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(on, e, t);
  }
}
on.runtime = s;
on.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
on.fields = s.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: ie, repeated: !0 }
]);
class an extends N {
  constructor(e) {
    super(), this.response = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new an().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new an().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new an().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(an, e, t);
  }
}
an.runtime = s;
an.typeName = "code.transaction.v2.SubmitIntentResponse";
an.fields = s.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: un, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: cn, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: ln, oneof: "response" }
]);
class un extends N {
  constructor(e) {
    super(), this.serverParameters = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new un().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new un().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new un().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(un, e, t);
  }
}
un.runtime = s;
un.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
un.fields = s.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: Vn, repeated: !0 }
]);
class cn extends N {
  constructor(e) {
    super(), this.code = fo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new cn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(cn, e, t);
  }
}
cn.runtime = s;
cn.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
cn.fields = s.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: s.getEnumType(fo) }
]);
var fo;
(function(n) {
  n[n.OK = 0] = "OK";
})(fo || (fo = {}));
s.util.setEnumType(fo, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class ln extends N {
  constructor(e) {
    super(), this.code = mo.DENIED, this.errorDetails = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ln().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ln().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ln().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ln, e, t);
  }
}
ln.runtime = s;
ln.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
ln.fields = s.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: s.getEnumType(mo) },
  { no: 2, name: "error_details", kind: "message", T: er, repeated: !0 }
]);
var mo;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.INVALID_INTENT = 1] = "INVALID_INTENT", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.STALE_STATE = 3] = "STALE_STATE";
})(mo || (mo = {}));
s.util.setEnumType(mo, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class fn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(fn, e, t);
  }
}
fn.runtime = s;
fn.typeName = "code.transaction.v2.GetIntentMetadataRequest";
fn.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: He },
  { no: 2, name: "owner", kind: "message", T: P },
  { no: 3, name: "signature", kind: "message", T: ie }
]);
class mn extends N {
  constructor(e) {
    super(), this.result = ho.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new mn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(mn, e, t);
  }
}
mn.runtime = s;
mn.typeName = "code.transaction.v2.GetIntentMetadataResponse";
mn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ho) },
  { no: 2, name: "metadata", kind: "message", T: Nt }
]);
var ho;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ho || (ho = {}));
s.util.setEnumType(ho, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class dn extends N {
  constructor(e) {
    super(), this.actionId = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new dn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(dn, e, t);
  }
}
dn.runtime = s;
dn.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
dn.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: He },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class hn extends N {
  constructor(e) {
    super(), this.result = po.OK, this.status = go.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(hn, e, t);
  }
}
hn.runtime = s;
hn.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
hn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(po) },
  { no: 2, name: "status", kind: "enum", T: s.getEnumType(go) }
]);
var po;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", n[n.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", n[n.INVALID_ACTION = 3] = "INVALID_ACTION";
})(po || (po = {}));
s.util.setEnumType(po, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var go;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", n[n.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", n[n.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", n[n.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(go || (go = {}));
s.util.setEnumType(go, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class pn extends N {
  constructor(e) {
    super(), this.limit = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(pn, e, t);
  }
}
pn.runtime = s;
pn.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
pn.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: ie }
]);
class gn extends N {
  constructor(e) {
    super(), this.result = wo.OK, this.items = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(gn, e, t);
  }
}
gn.runtime = s;
gn.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
gn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(wo) },
  { no: 2, name: "items", kind: "message", T: rr, repeated: !0 }
]);
var wo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(wo || (wo = {}));
s.util.setEnumType(wo, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class wn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new wn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(wn, e, t);
  }
}
wn.runtime = s;
wn.typeName = "code.transaction.v2.GetLimitsRequest";
wn.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "consumed_since", kind: "message", T: Je }
]);
class yn extends N {
  constructor(e) {
    super(), this.result = yo.OK, this.remainingSendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new yn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(yn, e, t);
  }
}
yn.runtime = s;
yn.typeName = "code.transaction.v2.GetLimitsResponse";
yn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(yo) },
  { no: 2, name: "remaining_send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: or } },
  { no: 3, name: "deposit_limit", kind: "message", T: ar },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: ur } }
]);
var yo;
(function(n) {
  n[n.OK = 0] = "OK";
})(yo || (yo = {}));
s.util.setEnumType(yo, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Tn extends N {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = To.ASC, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Tn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Tn, e, t);
  }
}
Tn.runtime = s;
Tn.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
Tn.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "cursor", kind: "message", T: wa },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: s.getEnumType(To) },
  { no: 5, name: "signature", kind: "message", T: ie }
]);
var To;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(To || (To = {}));
s.util.setEnumType(To, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class En extends N {
  constructor(e) {
    super(), this.result = Eo.OK, this.items = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new En().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new En().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new En().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(En, e, t);
  }
}
En.runtime = s;
En.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
En.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Eo) },
  { no: 2, name: "items", kind: "message", T: sr, repeated: !0 }
]);
var Eo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Eo || (Eo = {}));
s.util.setEnumType(Eo, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Nn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Nn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Nn, e, t);
  }
}
Nn.runtime = s;
Nn.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
Nn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: P }
]);
class bn extends N {
  constructor(e) {
    super(), this.accountType = No.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(bn, e, t);
  }
}
bn.runtime = s;
bn.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
bn.fields = s.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: s.getEnumType(No) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var No;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.TokenAccount = 1] = "TokenAccount", n[n.OwnerAccount = 2] = "OwnerAccount";
})(No || (No = {}));
s.util.setEnumType(No, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class xn extends N {
  constructor(e) {
    super(), this.airdropType = Xt.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(xn, e, t);
  }
}
xn.runtime = s;
xn.typeName = "code.transaction.v2.AirdropRequest";
xn.fields = s.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: s.getEnumType(Xt) },
  { no: 2, name: "owner", kind: "message", T: P },
  { no: 3, name: "signature", kind: "message", T: ie }
]);
class Bn extends N {
  constructor(e) {
    super(), this.result = bo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Bn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Bn, e, t);
  }
}
Bn.runtime = s;
Bn.typeName = "code.transaction.v2.AirdropResponse";
Bn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(bo) },
  { no: 2, name: "exchange_data", kind: "message", T: $e }
]);
var bo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.UNAVAILABLE = 1] = "UNAVAILABLE", n[n.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(bo || (bo = {}));
s.util.setEnumType(bo, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class Nt extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Nt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Nt, e, t);
  }
}
Nt.runtime = s;
Nt.typeName = "code.transaction.v2.Metadata";
Nt.fields = s.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: kn, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: On, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: Sn, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: vn, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: Fn, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: In, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: Jn, oneof: "type" },
  { no: 8, name: "establish_relationship", kind: "message", T: An, oneof: "type" }
]);
class kn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new kn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(kn, e, t);
  }
}
kn.runtime = s;
kn.typeName = "code.transaction.v2.OpenAccountsMetadata";
kn.fields = s.util.newFieldList(() => []);
class On extends N {
  constructor(e) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new On().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new On().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new On().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(On, e, t);
  }
}
On.runtime = s;
On.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
On.fields = s.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: P },
  { no: 2, name: "exchange_data", kind: "message", T: $e },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 }
]);
class In extends N {
  constructor(e) {
    super(), this.isWithdrawal = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new In().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new In().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new In().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(In, e, t);
  }
}
In.runtime = s;
In.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
In.fields = s.util.newFieldList(() => [
  { no: 4, name: "source", kind: "message", T: P },
  { no: 1, name: "destination", kind: "message", T: P },
  { no: 2, name: "exchange_data", kind: "message", T: $e },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class Sn extends N {
  constructor(e) {
    super(), this.quarks = de.zero, this.isDeposit = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Sn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Sn, e, t);
  }
}
Sn.runtime = s;
Sn.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
Sn.fields = s.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: P },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Jn extends N {
  constructor(e) {
    super(), this.quarks = de.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Jn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Jn, e, t);
  }
}
Jn.runtime = s;
Jn.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
Jn.fields = s.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: P },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: $e }
]);
class vn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(vn, e, t);
  }
}
vn.runtime = s;
vn.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
vn.fields = s.util.newFieldList(() => []);
class Fn extends N {
  constructor(e) {
    super(), this.quarks = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Fn, e, t);
  }
}
Fn.runtime = s;
Fn.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
Fn.fields = s.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class An extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new An().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new An().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new An().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(An, e, t);
  }
}
An.runtime = s;
An.typeName = "code.transaction.v2.EstablishRelationshipMetadata";
An.fields = s.util.newFieldList(() => [
  { no: 1, name: "relationship", kind: "message", T: Ct }
]);
class Un extends N {
  constructor(e) {
    super(), this.id = 0, this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Un().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Un().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Un().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Un, e, t);
  }
}
Un.runtime = s;
Un.typeName = "code.transaction.v2.Action";
Un.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: Ln, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: Dn, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: Cn, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: qn, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: Kn, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: Pn, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: _n, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: $n, oneof: "type" },
  { no: 10, name: "fee_payment", kind: "message", T: Mn, oneof: "type" }
]);
class Ln extends N {
  constructor(e) {
    super(), this.accountType = ct.UNKNOWN, this.index = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ln().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ln().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ln().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ln, e, t);
  }
}
Ln.runtime = s;
Ln.typeName = "code.transaction.v2.OpenAccountAction";
Ln.fields = s.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: s.getEnumType(ct) },
  { no: 2, name: "owner", kind: "message", T: P },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: P },
  { no: 5, name: "token", kind: "message", T: P },
  { no: 6, name: "authority_signature", kind: "message", T: ie }
]);
class Dn extends N {
  constructor(e) {
    super(), this.accountType = ct.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Dn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Dn, e, t);
  }
}
Dn.runtime = s;
Dn.typeName = "code.transaction.v2.CloseEmptyAccountAction";
Dn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: s.getEnumType(ct) },
  { no: 2, name: "authority", kind: "message", T: P },
  { no: 3, name: "token", kind: "message", T: P }
]);
class Cn extends N {
  constructor(e) {
    super(), this.accountType = ct.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Cn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Cn, e, t);
  }
}
Cn.runtime = s;
Cn.typeName = "code.transaction.v2.CloseDormantAccountAction";
Cn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: s.getEnumType(ct) },
  { no: 2, name: "authority", kind: "message", T: P },
  { no: 3, name: "token", kind: "message", T: P },
  { no: 4, name: "destination", kind: "message", T: P }
]);
class qn extends N {
  constructor(e) {
    super(), this.amount = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(qn, e, t);
  }
}
qn.runtime = s;
qn.typeName = "code.transaction.v2.NoPrivacyTransferAction";
qn.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: P },
  { no: 2, name: "source", kind: "message", T: P },
  { no: 3, name: "destination", kind: "message", T: P },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Kn extends N {
  constructor(e) {
    super(), this.amount = de.zero, this.shouldClose = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Kn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Kn, e, t);
  }
}
Kn.runtime = s;
Kn.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
Kn.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: P },
  { no: 2, name: "source", kind: "message", T: P },
  { no: 3, name: "destination", kind: "message", T: P },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class Pn extends N {
  constructor(e) {
    super(), this.amount = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Pn, e, t);
  }
}
Pn.runtime = s;
Pn.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
Pn.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: P },
  { no: 2, name: "source", kind: "message", T: P },
  { no: 3, name: "destination", kind: "message", T: P },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class _n extends N {
  constructor(e) {
    super(), this.amount = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _n().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _n().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _n().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(_n, e, t);
  }
}
_n.runtime = s;
_n.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
_n.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: P },
  { no: 2, name: "source", kind: "message", T: P },
  { no: 3, name: "destination", kind: "message", T: P },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class $n extends N {
  constructor(e) {
    super(), this.actionId = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $n().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $n().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $n().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals($n, e, t);
  }
}
$n.runtime = s;
$n.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
$n.fields = s.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class Mn extends N {
  constructor(e) {
    super(), this.amount = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Mn, e, t);
  }
}
Mn.runtime = s;
Mn.typeName = "code.transaction.v2.FeePaymentAction";
Mn.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: P },
  { no: 2, name: "source", kind: "message", T: P },
  { no: 3, name: "amount", kind: "scalar", T: 4 }
]);
class Vn extends N {
  constructor(e) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Vn, e, t);
  }
}
Vn.runtime = s;
Vn.typeName = "code.transaction.v2.ServerParameter";
Vn.fields = s.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: Hn, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: jn, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: zn, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: Wn, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: Rn, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: Yn, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: Xn, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: Zn, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: Gn, oneof: "type" },
  { no: 11, name: "fee_payment", kind: "message", T: Qn, oneof: "type" }
]);
class Hn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Hn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Hn, e, t);
  }
}
Hn.runtime = s;
Hn.typeName = "code.transaction.v2.NoncedTransactionMetadata";
Hn.fields = s.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: P },
  { no: 2, name: "blockhash", kind: "message", T: nn }
]);
class jn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new jn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(jn, e, t);
  }
}
jn.runtime = s;
jn.typeName = "code.transaction.v2.OpenAccountServerParameter";
jn.fields = s.util.newFieldList(() => []);
class zn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(zn, e, t);
  }
}
zn.runtime = s;
zn.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
zn.fields = s.util.newFieldList(() => []);
class Wn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Wn, e, t);
  }
}
Wn.runtime = s;
Wn.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
Wn.fields = s.util.newFieldList(() => []);
class Rn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Rn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Rn, e, t);
  }
}
Rn.runtime = s;
Rn.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
Rn.fields = s.util.newFieldList(() => []);
class Yn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Yn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Yn, e, t);
  }
}
Yn.runtime = s;
Yn.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
Yn.fields = s.util.newFieldList(() => []);
class Xn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Xn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Xn, e, t);
  }
}
Xn.runtime = s;
Xn.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
Xn.fields = s.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: P },
  { no: 2, name: "recent_root", kind: "message", T: _i }
]);
class Zn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Zn, e, t);
  }
}
Zn.runtime = s;
Zn.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
Zn.fields = s.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: P },
  { no: 2, name: "recent_root", kind: "message", T: _i }
]);
class Gn extends N {
  constructor(e) {
    super(), this.newCommitmentAmount = de.zero, this.merkleProof = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Gn, e, t);
  }
}
Gn.runtime = s;
Gn.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
Gn.fields = s.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: P },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: _i },
  { no: 3, name: "new_commitment_destination", kind: "message", T: P },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: _i },
  { no: 6, name: "merkle_proof", kind: "message", T: _i, repeated: !0 }
]);
class Qn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Qn, e, t);
  }
}
Qn.runtime = s;
Qn.typeName = "code.transaction.v2.FeePaymentServerParameter";
Qn.fields = s.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: P }
]);
class er extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new er().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new er().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new er().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(er, e, t);
  }
}
er.runtime = s;
er.typeName = "code.transaction.v2.ErrorDetails";
er.fields = s.util.newFieldList(() => [
  { no: 1, name: "reason_string", kind: "message", T: tr, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: nr, oneof: "type" }
]);
class tr extends N {
  constructor(e) {
    super(), this.reason = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new tr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(tr, e, t);
  }
}
tr.runtime = s;
tr.typeName = "code.transaction.v2.ReasonStringErrorDetails";
tr.fields = s.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class nr extends N {
  constructor(e) {
    super(), this.actionId = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new nr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(nr, e, t);
  }
}
nr.runtime = s;
nr.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
nr.fields = s.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: Lt },
  { no: 3, name: "provided_signature", kind: "message", T: ie }
]);
class rr extends N {
  constructor(e) {
    super(), this.actions = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new rr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(rr, e, t);
  }
}
rr.runtime = s;
rr.typeName = "code.transaction.v2.UpgradeableIntent";
rr.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: He },
  { no: 2, name: "actions", kind: "message", T: ir, repeated: !0 }
]);
class ir extends N {
  constructor(e) {
    super(), this.actionId = 0, this.sourceAccountType = ct.UNKNOWN, this.sourceDerivationIndex = de.zero, this.originalAmount = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ir, e, t);
  }
}
ir.runtime = s;
ir.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
ir.fields = s.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: Lt },
  { no: 2, name: "client_signature", kind: "message", T: ie },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: s.getEnumType(ct) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: P },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: P },
  { no: 9, name: "recent_root", kind: "message", T: _i }
]);
class sr extends N {
  constructor(e) {
    super(), this.paymentType = xo.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = Xt.UNKNOWN, this.isMicroPayment = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new sr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(sr, e, t);
  }
}
sr.runtime = s;
sr.typeName = "code.transaction.v2.PaymentHistoryItem";
sr.fields = s.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: wa },
  { no: 2, name: "exchange_data", kind: "message", T: $e },
  { no: 3, name: "payment_type", kind: "enum", T: s.getEnumType(xo) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: Je },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: s.getEnumType(Xt) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 },
  { no: 12, name: "intent_id", kind: "message", T: He }
]);
var xo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SEND = 1] = "SEND", n[n.RECEIVE = 2] = "RECEIVE";
})(xo || (xo = {}));
s.util.setEnumType(xo, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class $e extends N {
  constructor(e) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $e().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $e().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $e().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals($e, e, t);
  }
}
$e.runtime = s;
$e.typeName = "code.transaction.v2.ExchangeData";
$e.fields = s.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class bt extends N {
  constructor(e) {
    super(), this.currency = "", this.nativeAmount = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(bt, e, t);
  }
}
bt.runtime = s;
bt.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
bt.fields = s.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class or extends N {
  constructor(e) {
    super(), this.nextTransaction = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new or().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new or().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new or().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(or, e, t);
  }
}
or.runtime = s;
or.typeName = "code.transaction.v2.RemainingSendLimit";
or.fields = s.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 }
]);
class ar extends N {
  constructor(e) {
    super(), this.maxQuarks = de.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ar().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ar().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ar().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ar, e, t);
  }
}
ar.runtime = s;
ar.typeName = "code.transaction.v2.DepositLimit";
ar.fields = s.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class ur extends N {
  constructor(e) {
    super(), this.maxPerTransaction = 0, this.minPerTransaction = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ur().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ur().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ur().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ur, e, t);
  }
}
ur.runtime = s;
ur.typeName = "code.transaction.v2.MicroPaymentLimit";
ur.fields = s.util.newFieldList(() => [
  { no: 1, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "min_per_transaction", kind: "scalar", T: 2 }
]);
let wa = class Gs extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Gs, e, t);
  }
};
wa.runtime = s;
wa.typeName = "code.transaction.v2.Cursor";
wa.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class cr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new cr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(cr, e, t);
  }
}
cr.runtime = s;
cr.typeName = "code.account.v1.IsCodeAccountRequest";
cr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie }
]);
class lr extends N {
  constructor(e) {
    super(), this.result = Bo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new lr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(lr, e, t);
  }
}
lr.runtime = s;
lr.typeName = "code.account.v1.IsCodeAccountResponse";
lr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Bo) }
]);
var Bo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Bo || (Bo = {}));
s.util.setEnumType(Bo, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class fr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(fr, e, t);
  }
}
fr.runtime = s;
fr.typeName = "code.account.v1.GetTokenAccountInfosRequest";
fr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie }
]);
class mr extends N {
  constructor(e) {
    super(), this.result = ko.OK, this.tokenAccountInfos = {}, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new mr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(mr, e, t);
  }
}
mr.runtime = s;
mr.typeName = "code.account.v1.GetTokenAccountInfosResponse";
mr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ko) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: dr } }
]);
var ko;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ko || (ko = {}));
s.util.setEnumType(ko, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class dr extends N {
  constructor(e) {
    super(), this.accountType = ct.UNKNOWN, this.index = de.zero, this.balanceSource = Oo.UNKNOWN, this.balance = de.zero, this.managementState = Io.UNKNOWN, this.blockchainState = So.UNKNOWN, this.mustRotate = !1, this.claimState = Jo.UNKNOWN, this.mintDecimals = 0, this.mintDisplayName = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new dr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(dr, e, t);
  }
}
dr.runtime = s;
dr.typeName = "code.account.v1.TokenAccountInfo";
dr.fields = s.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: P },
  { no: 2, name: "owner", kind: "message", T: P },
  { no: 3, name: "authority", kind: "message", T: P },
  { no: 4, name: "account_type", kind: "enum", T: s.getEnumType(ct) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: s.getEnumType(Oo) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: s.getEnumType(Io) },
  { no: 9, name: "blockchain_state", kind: "enum", T: s.getEnumType(So) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: s.getEnumType(Jo) },
  { no: 12, name: "original_exchange_data", kind: "message", T: $e },
  { no: 13, name: "mint", kind: "message", T: P },
  { no: 14, name: "mint_decimals", kind: "scalar", T: 13 },
  { no: 15, name: "mint_display_name", kind: "scalar", T: 9 },
  { no: 16, name: "relationship", kind: "message", T: Ct }
]);
var Oo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.BLOCKCHAIN = 1] = "BLOCKCHAIN", n[n.CACHE = 2] = "CACHE";
})(Oo || (Oo = {}));
s.util.setEnumType(Oo, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var Io;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NONE = 1] = "NONE", n[n.LOCKING = 2] = "LOCKING", n[n.LOCKED = 3] = "LOCKED", n[n.UNLOCKING = 4] = "UNLOCKING", n[n.UNLOCKED = 5] = "UNLOCKED", n[n.CLOSING = 6] = "CLOSING", n[n.CLOSED = 7] = "CLOSED";
})(Io || (Io = {}));
s.util.setEnumType(Io, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var So;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", n[n.EXISTS = 2] = "EXISTS";
})(So || (So = {}));
s.util.setEnumType(So, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var Jo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NOT_CLAIMED = 1] = "NOT_CLAIMED", n[n.CLAIMED = 2] = "CLAIMED", n[n.EXPIRED = 3] = "EXPIRED";
})(Jo || (Jo = {}));
s.util.setEnumType(Jo, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
se.Unary, se.Unary;
class hr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(hr, e, t);
  }
}
hr.runtime = s;
hr.typeName = "code.badge.v1.ResetBadgeCountRequest";
hr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie }
]);
class pr extends N {
  constructor(e) {
    super(), this.result = vo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(pr, e, t);
  }
}
pr.runtime = s;
pr.typeName = "code.badge.v1.ResetBadgeCountResponse";
pr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(vo) }
]);
var vo;
(function(n) {
  n[n.OK = 0] = "OK";
})(vo || (vo = {}));
s.util.setEnumType(vo, "code.badge.v1.ResetBadgeCountResponse.Result", [
  { no: 0, name: "OK" }
]);
se.Unary;
class gr extends N {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Fo.ASC, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(gr, e, t);
  }
}
gr.runtime = s;
gr.typeName = "code.chat.v1.GetChatsRequest";
gr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "cursor", kind: "message", T: ht },
  { no: 5, name: "direction", kind: "enum", T: s.getEnumType(Fo) }
]);
var Fo;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Fo || (Fo = {}));
s.util.setEnumType(Fo, "code.chat.v1.GetChatsRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class wr extends N {
  constructor(e) {
    super(), this.result = Ao.OK, this.chats = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new wr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(wr, e, t);
  }
}
wr.runtime = s;
wr.typeName = "code.chat.v1.GetChatsResponse";
wr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Ao) },
  { no: 2, name: "chats", kind: "message", T: Or, repeated: !0 }
]);
var Ao;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Ao || (Ao = {}));
s.util.setEnumType(Ao, "code.chat.v1.GetChatsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class yr extends N {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Uo.ASC, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new yr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(yr, e, t);
  }
}
yr.runtime = s;
yr.typeName = "code.chat.v1.GetMessagesRequest";
yr.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ot },
  { no: 2, name: "owner", kind: "message", T: P },
  { no: 3, name: "signature", kind: "message", T: ie },
  { no: 4, name: "page_size", kind: "scalar", T: 13 },
  { no: 5, name: "cursor", kind: "message", T: ht },
  { no: 6, name: "direction", kind: "enum", T: s.getEnumType(Uo) }
]);
var Uo;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Uo || (Uo = {}));
s.util.setEnumType(Uo, "code.chat.v1.GetMessagesRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Tr extends N {
  constructor(e) {
    super(), this.result = Lo.OK, this.messages = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Tr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Tr, e, t);
  }
}
Tr.runtime = s;
Tr.typeName = "code.chat.v1.GetMessagesResponse";
Tr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Lo) },
  { no: 2, name: "messages", kind: "message", T: Ir, repeated: !0 }
]);
var Lo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Lo || (Lo = {}));
s.util.setEnumType(Lo, "code.chat.v1.GetMessagesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Er extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Er().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Er().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Er().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Er, e, t);
  }
}
Er.runtime = s;
Er.typeName = "code.chat.v1.AdvancePointerRequest";
Er.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ot },
  { no: 2, name: "pointer", kind: "message", T: Kt },
  { no: 3, name: "owner", kind: "message", T: P },
  { no: 4, name: "signature", kind: "message", T: ie }
]);
class Nr extends N {
  constructor(e) {
    super(), this.result = Do.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Nr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Nr, e, t);
  }
}
Nr.runtime = s;
Nr.typeName = "code.chat.v1.AdvancePointerResponse";
Nr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Do) }
]);
var Do;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.MESSAGE_NOT_FOUND = 2] = "MESSAGE_NOT_FOUND";
})(Do || (Do = {}));
s.util.setEnumType(Do, "code.chat.v1.AdvancePointerResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "MESSAGE_NOT_FOUND" }
]);
class br extends N {
  constructor(e) {
    super(), this.isMuted = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new br().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new br().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new br().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(br, e, t);
  }
}
br.runtime = s;
br.typeName = "code.chat.v1.SetMuteStateRequest";
br.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ot },
  { no: 2, name: "is_muted", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: P },
  { no: 4, name: "signature", kind: "message", T: ie }
]);
class xr extends N {
  constructor(e) {
    super(), this.result = Co.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(xr, e, t);
  }
}
xr.runtime = s;
xr.typeName = "code.chat.v1.SetMuteStateResponse";
xr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Co) }
]);
var Co;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_MUTE = 2] = "CANT_MUTE";
})(Co || (Co = {}));
s.util.setEnumType(Co, "code.chat.v1.SetMuteStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_MUTE" }
]);
class Br extends N {
  constructor(e) {
    super(), this.isSubscribed = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Br().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Br().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Br().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Br, e, t);
  }
}
Br.runtime = s;
Br.typeName = "code.chat.v1.SetSubscriptionStateRequest";
Br.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ot },
  { no: 2, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: P },
  { no: 4, name: "signature", kind: "message", T: ie }
]);
class kr extends N {
  constructor(e) {
    super(), this.result = qo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new kr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(kr, e, t);
  }
}
kr.runtime = s;
kr.typeName = "code.chat.v1.SetSubscriptionStateResponse";
kr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(qo) }
]);
var qo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_UNSUBSCRIBE = 2] = "CANT_UNSUBSCRIBE";
})(qo || (qo = {}));
s.util.setEnumType(qo, "code.chat.v1.SetSubscriptionStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_UNSUBSCRIBE" }
]);
class ot extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ot().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ot().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ot().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ot, e, t);
  }
}
ot.runtime = s;
ot.typeName = "code.chat.v1.ChatId";
ot.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class qt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(qt, e, t);
  }
}
qt.runtime = s;
qt.typeName = "code.chat.v1.ChatMessageId";
qt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Kt extends N {
  constructor(e) {
    super(), this.kind = Ko.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Kt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Kt, e, t);
  }
}
Kt.runtime = s;
Kt.typeName = "code.chat.v1.Pointer";
Kt.fields = s.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: s.getEnumType(Ko) },
  { no: 2, name: "value", kind: "message", T: qt }
]);
var Ko;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.READ = 1] = "READ";
})(Ko || (Ko = {}));
s.util.setEnumType(Ko, "code.chat.v1.Pointer.Kind", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "READ" }
]);
class Or extends N {
  constructor(e) {
    super(), this.title = { case: void 0 }, this.numUnread = 0, this.isMuted = !1, this.isSubscribed = !1, this.canMute = !1, this.canUnsubscribe = !1, this.isVerified = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Or().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Or().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Or().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Or, e, t);
  }
}
Or.runtime = s;
Or.typeName = "code.chat.v1.ChatMetadata";
Or.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ot },
  { no: 2, name: "localized", kind: "message", T: Pt, oneof: "title" },
  { no: 3, name: "domain", kind: "message", T: it, oneof: "title" },
  { no: 4, name: "read_pointer", kind: "message", T: Kt },
  { no: 5, name: "num_unread", kind: "scalar", T: 13 },
  { no: 6, name: "is_muted", kind: "scalar", T: 8 },
  { no: 7, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 8, name: "can_mute", kind: "scalar", T: 8 },
  { no: 9, name: "can_unsubscribe", kind: "scalar", T: 8 },
  { no: 10, name: "cursor", kind: "message", T: ht },
  { no: 11, name: "is_verified", kind: "scalar", T: 8 }
]);
class Ir extends N {
  constructor(e) {
    super(), this.content = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ir, e, t);
  }
}
Ir.runtime = s;
Ir.typeName = "code.chat.v1.ChatMessage";
Ir.fields = s.util.newFieldList(() => [
  { no: 1, name: "message_id", kind: "message", T: qt },
  { no: 2, name: "ts", kind: "message", T: Je },
  { no: 3, name: "content", kind: "message", T: Sr, repeated: !0 },
  { no: 4, name: "cursor", kind: "message", T: ht }
]);
class Sr extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Sr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Sr, e, t);
  }
}
Sr.runtime = s;
Sr.typeName = "code.chat.v1.Content";
Sr.fields = s.util.newFieldList(() => [
  { no: 1, name: "localized", kind: "message", T: Pt, oneof: "type" },
  { no: 2, name: "exchange_data", kind: "message", T: Jr, oneof: "type" },
  { no: 3, name: "nacl_box", kind: "message", T: vr, oneof: "type" }
]);
class Pt extends N {
  constructor(e) {
    super(), this.key = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Pt, e, t);
  }
}
Pt.runtime = s;
Pt.typeName = "code.chat.v1.LocalizedContent";
Pt.fields = s.util.newFieldList(() => [
  { no: 1, name: "key", kind: "scalar", T: 9 }
]);
class Jr extends N {
  constructor(e) {
    super(), this.verb = Po.UNKNOWN, this.exchangeData = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Jr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Jr, e, t);
  }
}
Jr.runtime = s;
Jr.typeName = "code.chat.v1.ExchangeDataContent";
Jr.fields = s.util.newFieldList(() => [
  { no: 1, name: "verb", kind: "enum", T: s.getEnumType(Po) },
  { no: 2, name: "exact", kind: "message", T: $e, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: bt, oneof: "exchange_data" }
]);
var Po;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GAVE = 1] = "GAVE", n[n.RECEIVED = 2] = "RECEIVED", n[n.WITHDREW = 3] = "WITHDREW", n[n.DEPOSITED = 4] = "DEPOSITED", n[n.SENT = 5] = "SENT", n[n.RETURNED = 6] = "RETURNED", n[n.SPENT = 7] = "SPENT", n[n.PAID = 8] = "PAID", n[n.PURCHASED = 9] = "PURCHASED";
})(Po || (Po = {}));
s.util.setEnumType(Po, "code.chat.v1.ExchangeDataContent.Verb", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GAVE" },
  { no: 2, name: "RECEIVED" },
  { no: 3, name: "WITHDREW" },
  { no: 4, name: "DEPOSITED" },
  { no: 5, name: "SENT" },
  { no: 6, name: "RETURNED" },
  { no: 7, name: "SPENT" },
  { no: 8, name: "PAID" },
  { no: 9, name: "PURCHASED" }
]);
class vr extends N {
  constructor(e) {
    super(), this.nonce = new Uint8Array(0), this.encryptedPayload = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(vr, e, t);
  }
}
vr.runtime = s;
vr.typeName = "code.chat.v1.NaclBoxEncryptedContent";
vr.fields = s.util.newFieldList(() => [
  { no: 1, name: "peer_public_key", kind: "message", T: P },
  { no: 2, name: "nonce", kind: "scalar", T: 12 },
  { no: 3, name: "encrypted_payload", kind: "scalar", T: 12 }
]);
class ht extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ht().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ht().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ht().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ht, e, t);
  }
}
ht.runtime = s;
ht.typeName = "code.chat.v1.Cursor";
ht.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
se.Unary, se.Unary, se.Unary, se.Unary, se.Unary;
class Fr extends N {
  constructor(e) {
    super(), this.contacts = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Fr, e, t);
  }
}
Fr.runtime = s;
Fr.typeName = "code.contact.v1.AddContactsRequest";
Fr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "container_id", kind: "message", T: rt },
  { no: 4, name: "contacts", kind: "message", T: Pe, repeated: !0 }
]);
class Ar extends N {
  constructor(e) {
    super(), this.result = _o.OK, this.contactStatus = {}, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ar().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ar().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ar().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ar, e, t);
  }
}
Ar.runtime = s;
Ar.typeName = "code.contact.v1.AddContactsResponse";
Ar.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(_o) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: _t } }
]);
var _o;
(function(n) {
  n[n.OK = 0] = "OK";
})(_o || (_o = {}));
s.util.setEnumType(_o, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Ur extends N {
  constructor(e) {
    super(), this.contacts = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ur().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ur().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ur().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ur, e, t);
  }
}
Ur.runtime = s;
Ur.typeName = "code.contact.v1.RemoveContactsRequest";
Ur.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "container_id", kind: "message", T: rt },
  { no: 4, name: "contacts", kind: "message", T: Pe, repeated: !0 }
]);
class Lr extends N {
  constructor(e) {
    super(), this.result = $o.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Lr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Lr, e, t);
  }
}
Lr.runtime = s;
Lr.typeName = "code.contact.v1.RemoveContactsResponse";
Lr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType($o) }
]);
var $o;
(function(n) {
  n[n.OK = 0] = "OK";
})($o || ($o = {}));
s.util.setEnumType($o, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Dr extends N {
  constructor(e) {
    super(), this.includeOnlyInAppContacts = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Dr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Dr, e, t);
  }
}
Dr.runtime = s;
Dr.typeName = "code.contact.v1.GetContactsRequest";
Dr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "container_id", kind: "message", T: rt },
  { no: 4, name: "page_token", kind: "message", T: ya },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class Cr extends N {
  constructor(e) {
    super(), this.result = Mo.OK, this.contacts = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Cr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Cr, e, t);
  }
}
Cr.runtime = s;
Cr.typeName = "code.contact.v1.GetContactsResponse";
Cr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Mo) },
  { no: 2, name: "contacts", kind: "message", T: qr, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: ya }
]);
var Mo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Mo || (Mo = {}));
s.util.setEnumType(Mo, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class qr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(qr, e, t);
  }
}
qr.runtime = s;
qr.typeName = "code.contact.v1.Contact";
qr.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "status", kind: "message", T: _t }
]);
class _t extends N {
  constructor(e) {
    super(), this.isRegistered = !1, this.isInvited = !1, this.isInviteRevoked = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _t().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _t().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _t().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(_t, e, t);
  }
}
_t.runtime = s;
_t.typeName = "code.contact.v1.ContactStatus";
_t.fields = s.util.newFieldList(() => [
  { no: 1, name: "is_registered", kind: "scalar", T: 8 },
  { no: 2, name: "is_invited", kind: "scalar", T: 8 },
  { no: 3, name: "is_invite_revoked", kind: "scalar", T: 8 }
]);
let ya = class Qs extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Qs, e, t);
  }
};
ya.runtime = s;
ya.typeName = "code.contact.v1.PageToken";
ya.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
se.Unary, se.Unary, se.Unary;
class Kr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Kr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Kr, e, t);
  }
}
Kr.runtime = s;
Kr.typeName = "code.currency.v1.GetAllRatesRequest";
Kr.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
class Pr extends N {
  constructor(e) {
    super(), this.result = Vo.OK, this.rates = {}, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Pr, e, t);
  }
}
Pr.runtime = s;
Pr.typeName = "code.currency.v1.GetAllRatesResponse";
Pr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Vo) },
  { no: 2, name: "as_of", kind: "message", T: Je },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var Vo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.MISSING_DATA = 1] = "MISSING_DATA";
})(Vo || (Vo = {}));
s.util.setEnumType(Vo, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
se.Unary;
class _r extends N {
  constructor(e) {
    super(), this.owners = [], this.signatures = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _r().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _r().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _r().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(_r, e, t);
  }
}
_r.runtime = s;
_r.typeName = "code.device.v1.RegisterLoggedInAccountsRequest";
_r.fields = s.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: Et },
  { no: 2, name: "owners", kind: "message", T: P, repeated: !0 },
  { no: 3, name: "signatures", kind: "message", T: ie, repeated: !0 }
]);
class $r extends N {
  constructor(e) {
    super(), this.result = Ho.OK, this.invalidOwners = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $r().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $r().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $r().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals($r, e, t);
  }
}
$r.runtime = s;
$r.typeName = "code.device.v1.RegisterLoggedInAccountsResponse";
$r.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Ho) },
  { no: 2, name: "invalid_owners", kind: "message", T: P, repeated: !0 }
]);
var Ho;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER";
})(Ho || (Ho = {}));
s.util.setEnumType(Ho, "code.device.v1.RegisterLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" }
]);
class Mr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Mr, e, t);
  }
}
Mr.runtime = s;
Mr.typeName = "code.device.v1.GetLoggedInAccountsRequest";
Mr.fields = s.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: Et }
]);
class Vr extends N {
  constructor(e) {
    super(), this.result = jo.OK, this.owners = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Vr, e, t);
  }
}
Vr.runtime = s;
Vr.typeName = "code.device.v1.GetLoggedInAccountsResponse";
Vr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(jo) },
  { no: 2, name: "owners", kind: "message", T: P, repeated: !0 }
]);
var jo;
(function(n) {
  n[n.OK = 0] = "OK";
})(jo || (jo = {}));
s.util.setEnumType(jo, "code.device.v1.GetLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" }
]);
se.Unary, se.Unary;
var zo;
(function(n) {
  n[n.NOT_INVITED = 0] = "NOT_INVITED", n[n.INVITED = 1] = "INVITED", n[n.REGISTERED = 2] = "REGISTERED", n[n.REVOKED = 3] = "REVOKED";
})(zo || (zo = {}));
s.util.setEnumType(zo, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class Hr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Hr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Hr, e, t);
  }
}
Hr.runtime = s;
Hr.typeName = "code.invite.v2.GetInviteCountRequest";
Hr.fields = s.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: dt }
]);
class jr extends N {
  constructor(e) {
    super(), this.result = Wo.OK, this.inviteCount = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new jr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(jr, e, t);
  }
}
jr.runtime = s;
jr.typeName = "code.invite.v2.GetInviteCountResponse";
jr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Wo) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var Wo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Wo || (Wo = {}));
s.util.setEnumType(Wo, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class zr extends N {
  constructor(e) {
    super(), this.source = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(zr, e, t);
  }
}
zr.runtime = s;
zr.typeName = "code.invite.v2.InvitePhoneNumberRequest";
zr.fields = s.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: dt, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: Xr, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: Pe }
]);
class Wr extends N {
  constructor(e) {
    super(), this.result = Ro.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Wr, e, t);
  }
}
Wr.runtime = s;
Wr.typeName = "code.invite.v2.InvitePhoneNumberResponse";
Wr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Ro) }
]);
var Ro;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", n[n.ALREADY_INVITED = 2] = "ALREADY_INVITED", n[n.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", n[n.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", n[n.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", n[n.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", n[n.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(Ro || (Ro = {}));
s.util.setEnumType(Ro, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class Rr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Rr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Rr, e, t);
  }
}
Rr.runtime = s;
Rr.typeName = "code.invite.v2.GetInvitationStatusRequest";
Rr.fields = s.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: dt }
]);
class Yr extends N {
  constructor(e) {
    super(), this.result = Yo.OK, this.status = zo.NOT_INVITED, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Yr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Yr, e, t);
  }
}
Yr.runtime = s;
Yr.typeName = "code.invite.v2.GetInvitationStatusResponse";
Yr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Yo) },
  { no: 2, name: "status", kind: "enum", T: s.getEnumType(zo) }
]);
var Yo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Yo || (Yo = {}));
s.util.setEnumType(Yo, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class Xr extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Xr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Xr, e, t);
  }
}
Xr.runtime = s;
Xr.typeName = "code.invite.v2.InviteCode";
Xr.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class ns extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ns().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ns().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ns().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ns, e, t);
  }
}
ns.runtime = s;
ns.typeName = "code.invite.v2.PageToken";
ns.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
se.Unary, se.Unary, se.Unary;
class $t extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $t().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $t().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $t().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals($t, e, t);
  }
}
$t.runtime = s;
$t.typeName = "code.messaging.v1.OpenMessageStreamRequest";
$t.fields = s.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: Ze },
  { no: 2, name: "signature", kind: "message", T: ie }
]);
class Mt extends N {
  constructor(e) {
    super(), this.messages = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Mt, e, t);
  }
}
Mt.runtime = s;
Mt.typeName = "code.messaging.v1.OpenMessageStreamResponse";
Mt.fields = s.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: at, repeated: !0 }
]);
class Zr extends N {
  constructor(e) {
    super(), this.requestOrPong = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Zr, e, t);
  }
}
Zr.runtime = s;
Zr.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
Zr.fields = s.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: $t, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: pi, oneof: "requestOrPong" }
]);
class Gr extends N {
  constructor(e) {
    super(), this.responseOrPing = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Gr, e, t);
  }
}
Gr.runtime = s;
Gr.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
Gr.fields = s.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: Mt, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: hi, oneof: "responseOrPing" }
]);
class Qr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Qr, e, t);
  }
}
Qr.runtime = s;
Qr.typeName = "code.messaging.v1.PollMessagesRequest";
Qr.fields = s.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: Ze },
  { no: 2, name: "signature", kind: "message", T: ie }
]);
class ei extends N {
  constructor(e) {
    super(), this.messages = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ei().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ei().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ei().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ei, e, t);
  }
}
ei.runtime = s;
ei.typeName = "code.messaging.v1.PollMessagesResponse";
ei.fields = s.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: at, repeated: !0 }
]);
class ti extends N {
  constructor(e) {
    super(), this.messageIds = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ti().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ti().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ti().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ti, e, t);
  }
}
ti.runtime = s;
ti.typeName = "code.messaging.v1.AckMessagesRequest";
ti.fields = s.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: Ze },
  { no: 2, name: "message_ids", kind: "message", T: xt, repeated: !0 }
]);
class ni extends N {
  constructor(e) {
    super(), this.result = Xo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ni().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ni().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ni().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ni, e, t);
  }
}
ni.runtime = s;
ni.typeName = "code.messaging.v1.AckMesssagesResponse";
ni.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Xo) }
]);
var Xo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Xo || (Xo = {}));
s.util.setEnumType(Xo, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class ri extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ri().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ri().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ri().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ri, e, t);
  }
}
ri.runtime = s;
ri.typeName = "code.messaging.v1.SendMessageRequest";
ri.fields = s.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: at },
  { no: 2, name: "rendezvous_key", kind: "message", T: Ze },
  { no: 3, name: "signature", kind: "message", T: ie }
]);
class ii extends N {
  constructor(e) {
    super(), this.result = Zo.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ii().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ii().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ii().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ii, e, t);
  }
}
ii.runtime = s;
ii.typeName = "code.messaging.v1.SendMessageResponse";
ii.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Zo) },
  { no: 2, name: "message_id", kind: "message", T: xt }
]);
var Zo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(Zo || (Zo = {}));
s.util.setEnumType(Zo, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class Ze extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ze().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ze().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ze().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ze, e, t);
  }
}
Ze.runtime = s;
Ze.typeName = "code.messaging.v1.RendezvousKey";
Ze.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class xt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(xt, e, t);
  }
}
xt.runtime = s;
xt.typeName = "code.messaging.v1.MessageId";
xt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class si extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new si().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new si().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new si().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(si, e, t);
  }
}
si.runtime = s;
si.typeName = "code.messaging.v1.RequestToGrabBill";
si.fields = s.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: P }
]);
class Vt extends N {
  constructor(e) {
    super(), this.exchangeData = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Vt, e, t);
  }
}
Vt.runtime = s;
Vt.typeName = "code.messaging.v1.RequestToReceiveBill";
Vt.fields = s.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: P },
  { no: 2, name: "exact", kind: "message", T: $e, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: bt, oneof: "exchange_data" },
  { no: 4, name: "domain", kind: "message", T: it },
  { no: 5, name: "verifier", kind: "message", T: P },
  { no: 6, name: "signature", kind: "message", T: ie },
  { no: 7, name: "rendezvous_key", kind: "message", T: Ze }
]);
class oi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new oi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(oi, e, t);
  }
}
oi.runtime = s;
oi.typeName = "code.messaging.v1.CodeScanned";
oi.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
class ai extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ai().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ai().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ai().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ai, e, t);
  }
}
ai.runtime = s;
ai.typeName = "code.messaging.v1.ClientRejectedPayment";
ai.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: He }
]);
class ui extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ui().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ui().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ui().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ui, e, t);
  }
}
ui.runtime = s;
ui.typeName = "code.messaging.v1.IntentSubmitted";
ui.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: He },
  { no: 2, name: "metadata", kind: "message", T: Nt }
]);
class ci extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ci().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ci().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ci().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ci, e, t);
  }
}
ci.runtime = s;
ci.typeName = "code.messaging.v1.WebhookCalled";
ci.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
class li extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new li().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new li().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new li().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(li, e, t);
  }
}
li.runtime = s;
li.typeName = "code.messaging.v1.RequestToLogin";
li.fields = s.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: it },
  { no: 2, name: "nonce", kind: "message", T: P },
  { no: 3, name: "timestamp", kind: "message", T: Je },
  { no: 4, name: "verifier", kind: "message", T: P },
  { no: 5, name: "signature", kind: "message", T: ie },
  { no: 6, name: "rendezvous_key", kind: "message", T: Ze }
]);
class fi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(fi, e, t);
  }
}
fi.runtime = s;
fi.typeName = "code.messaging.v1.LoginAttempt";
fi.fields = s.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: P },
  { no: 3, name: "domain", kind: "message", T: it },
  { no: 4, name: "nonce", kind: "message", T: P },
  { no: 5, name: "timestamp", kind: "message", T: Je },
  { no: 6, name: "signature", kind: "message", T: ie },
  { no: 7, name: "rendezvous_key", kind: "message", T: Ze }
]);
class mi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new mi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(mi, e, t);
  }
}
mi.runtime = s;
mi.typeName = "code.messaging.v1.LoginRejected";
mi.fields = s.util.newFieldList(() => [
  { no: 4, name: "timestamp", kind: "message", T: Je }
]);
class di extends N {
  constructor(e) {
    super(), this.airdropType = Xt.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new di().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new di().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new di().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(di, e, t);
  }
}
di.runtime = s;
di.typeName = "code.messaging.v1.AirdropReceived";
di.fields = s.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: s.getEnumType(Xt) },
  { no: 2, name: "exchange_data", kind: "message", T: $e },
  { no: 3, name: "timestamp", kind: "message", T: Je }
]);
class at extends N {
  constructor(e) {
    super(), this.kind = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new at().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new at().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new at().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(at, e, t);
  }
}
at.runtime = s;
at.typeName = "code.messaging.v1.Message";
at.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: xt },
  { no: 3, name: "send_message_request_signature", kind: "message", T: ie },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: si, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: Vt, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: oi, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: ai, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: ui, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: ci, oneof: "kind" },
  { no: 10, name: "request_to_login", kind: "message", T: li, oneof: "kind" },
  { no: 11, name: "login_attempt", kind: "message", T: fi, oneof: "kind" },
  { no: 12, name: "login_rejected", kind: "message", T: mi, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: di, oneof: "kind" }
]);
class hi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(hi, e, t);
  }
}
hi.runtime = s;
hi.typeName = "code.messaging.v1.ServerPing";
hi.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je },
  { no: 2, name: "ping_delay", kind: "message", T: tn }
]);
class pi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(pi, e, t);
  }
}
pi.runtime = s;
pi.typeName = "code.messaging.v1.ClientPong";
pi.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
se.ServerStreaming, se.BiDiStreaming, se.Unary, se.Unary, se.Unary;
class gi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(gi, e, t);
  }
}
gi.runtime = s;
gi.typeName = "code.micropayment.v1.GetStatusRequest";
gi.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: He }
]);
class wi extends N {
  constructor(e) {
    super(), this.exists = !1, this.codeScanned = !1, this.intentSubmitted = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new wi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(wi, e, t);
  }
}
wi.runtime = s;
wi.typeName = "code.micropayment.v1.GetStatusResponse";
wi.fields = s.util.newFieldList(() => [
  { no: 1, name: "exists", kind: "scalar", T: 8 },
  { no: 2, name: "code_scanned", kind: "scalar", T: 8 },
  { no: 3, name: "intent_submitted", kind: "scalar", T: 8 }
]);
class yi extends N {
  constructor(e) {
    super(), this.url = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new yi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(yi, e, t);
  }
}
yi.runtime = s;
yi.typeName = "code.micropayment.v1.RegisterWebhookRequest";
yi.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: He },
  { no: 2, name: "url", kind: "scalar", T: 9 }
]);
class Ti extends N {
  constructor(e) {
    super(), this.result = Go.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ti().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ti().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ti().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ti, e, t);
  }
}
Ti.runtime = s;
Ti.typeName = "code.micropayment.v1.RegisterWebhookResponse";
Ti.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Go) }
]);
var Go;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ALREADY_REGISTERED = 1] = "ALREADY_REGISTERED", n[n.PAYMENT_REQUEST_NOT_FOUND = 2] = "PAYMENT_REQUEST_NOT_FOUND", n[n.INTENT_EXISTS = 3] = "INTENT_EXISTS", n[n.INVALID_URL = 4] = "INVALID_URL";
})(Go || (Go = {}));
s.util.setEnumType(Go, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "PAYMENT_REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" }
]);
class Ei extends N {
  constructor(e) {
    super(), this.url = "", this.currency = "", this.nativeAmount = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ei().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ei().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ei().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ei, e, t);
  }
}
Ei.runtime = s;
Ei.typeName = "code.micropayment.v1.CodifyRequest";
Ei.fields = s.util.newFieldList(() => [
  { no: 1, name: "url", kind: "scalar", T: 9 },
  { no: 2, name: "currency", kind: "scalar", T: 9 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "owner_account", kind: "message", T: P },
  { no: 5, name: "primary_account", kind: "message", T: P },
  { no: 6, name: "signature", kind: "message", T: ie }
]);
class Ni extends N {
  constructor(e) {
    super(), this.result = Qo.OK, this.codifiedUrl = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ni().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ni().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ni().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ni, e, t);
  }
}
Ni.runtime = s;
Ni.typeName = "code.micropayment.v1.CodifyResponse";
Ni.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Qo) },
  { no: 2, name: "codified_url", kind: "scalar", T: 9 }
]);
var Qo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_URL = 1] = "INVALID_URL", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT", n[n.UNSUPPORTED_CURRENCY = 3] = "UNSUPPORTED_CURRENCY", n[n.NATIVE_AMOUNT_EXCEEDS_LIMIT = 4] = "NATIVE_AMOUNT_EXCEEDS_LIMIT";
})(Qo || (Qo = {}));
s.util.setEnumType(Qo, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" }
]);
class bi extends N {
  constructor(e) {
    super(), this.path = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(bi, e, t);
  }
}
bi.runtime = s;
bi.typeName = "code.micropayment.v1.GetPathMetadataRequest";
bi.fields = s.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9 }
]);
class xi extends N {
  constructor(e) {
    super(), this.result = ea.OK, this.currency = "", this.nativeAmount = 0, this.redirctUrl = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(xi, e, t);
  }
}
xi.runtime = s;
xi.typeName = "code.micropayment.v1.GetPathMetadataResponse";
xi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ea) },
  { no: 2, name: "destination", kind: "message", T: P },
  { no: 3, name: "currency", kind: "scalar", T: 9 },
  { no: 4, name: "native_amount", kind: "scalar", T: 1 },
  { no: 5, name: "redirct_url", kind: "scalar", T: 9 }
]);
var ea;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ea || (ea = {}));
s.util.setEnumType(ea, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
se.Unary, se.Unary, se.Unary, se.Unary;
class Bi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Bi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Bi, e, t);
  }
}
Bi.runtime = s;
Bi.typeName = "code.phone.v1.SendVerificationCodeRequest";
Bi.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "device_token", kind: "message", T: Dt }
]);
class ki extends N {
  constructor(e) {
    super(), this.result = ta.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ki().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ki().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ki().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ki, e, t);
  }
}
ki.runtime = s;
ki.typeName = "code.phone.v1.SendVerificationCodeResponse";
ki.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ta) }
]);
var ta;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_INVITED = 1] = "NOT_INVITED", n[n.RATE_LIMITED = 2] = "RATE_LIMITED", n[n.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", n[n.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(ta || (ta = {}));
s.util.setEnumType(ta, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class Oi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Oi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Oi, e, t);
  }
}
Oi.runtime = s;
Oi.typeName = "code.phone.v1.CheckVerificationCodeRequest";
Oi.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "code", kind: "message", T: Ht }
]);
class Ii extends N {
  constructor(e) {
    super(), this.result = na.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ii().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ii().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ii().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ii, e, t);
  }
}
Ii.runtime = s;
Ii.typeName = "code.phone.v1.CheckVerificationCodeResponse";
Ii.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(na) },
  { no: 2, name: "linking_token", kind: "message", T: jt }
]);
var na;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_CODE = 1] = "INVALID_CODE", n[n.NO_VERIFICATION = 2] = "NO_VERIFICATION", n[n.RATE_LIMITED = 3] = "RATE_LIMITED";
})(na || (na = {}));
s.util.setEnumType(na, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class Si extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Si().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Si().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Si().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Si, e, t);
  }
}
Si.runtime = s;
Si.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
Si.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie }
]);
class Ji extends N {
  constructor(e) {
    super(), this.result = ra.OK, this.isLinked = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ji, e, t);
  }
}
Ji.runtime = s;
Ji.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
Ji.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ra) },
  { no: 2, name: "phone_number", kind: "message", T: Pe },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var ra;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(ra || (ra = {}));
s.util.setEnumType(ra, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Ht extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ht().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ht().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ht().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ht, e, t);
  }
}
Ht.runtime = s;
Ht.typeName = "code.phone.v1.VerificationCode";
Ht.fields = s.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class jt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new jt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(jt, e, t);
  }
}
jt.runtime = s;
jt.typeName = "code.phone.v1.PhoneLinkingToken";
jt.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "code", kind: "message", T: Ht }
]);
se.Unary, se.Unary, se.Unary;
var ia;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.FCM_ANDROID = 1] = "FCM_ANDROID", n[n.FCM_APNS = 2] = "FCM_APNS";
})(ia || (ia = {}));
s.util.setEnumType(ia, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class vi extends N {
  constructor(e) {
    super(), this.pushToken = "", this.tokenType = ia.UNKNOWN, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(vi, e, t);
  }
}
vi.runtime = s;
vi.typeName = "code.push.v1.AddTokenRequest";
vi.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "container_id", kind: "message", T: rt },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: s.getEnumType(ia) },
  { no: 6, name: "app_install", kind: "message", T: Et }
]);
class Fi extends N {
  constructor(e) {
    super(), this.result = sa.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Fi, e, t);
  }
}
Fi.runtime = s;
Fi.typeName = "code.push.v1.AddTokenResponse";
Fi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(sa) }
]);
var sa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(sa || (sa = {}));
s.util.setEnumType(sa, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
se.Unary;
se.BiDiStreaming, se.Unary, se.Unary, se.Unary, se.Unary, se.Unary, se.Unary, se.Unary;
class Ai extends N {
  constructor(e) {
    super(), this.token = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ai().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ai().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ai().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ai, e, t);
  }
}
Ai.runtime = s;
Ai.typeName = "code.user.v1.LinkAccountRequest";
Ai.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "phone", kind: "message", T: jt, oneof: "token" }
]);
class Ui extends N {
  constructor(e) {
    super(), this.result = oa.OK, this.metadata = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ui().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ui().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ui().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ui, e, t);
  }
}
Ui.runtime = s;
Ui.typeName = "code.user.v1.LinkAccountResponse";
Ui.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(oa) },
  { no: 2, name: "user", kind: "message", T: zt },
  { no: 3, name: "data_container_id", kind: "message", T: rt },
  { no: 5, name: "phone", kind: "message", T: Wt, oneof: "metadata" }
]);
var oa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_TOKEN = 1] = "INVALID_TOKEN", n[n.RATE_LIMITED = 2] = "RATE_LIMITED";
})(oa || (oa = {}));
s.util.setEnumType(oa, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class Li extends N {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Li().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Li().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Li().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Li, e, t);
  }
}
Li.runtime = s;
Li.typeName = "code.user.v1.UnlinkAccountRequest";
Li.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 4, name: "phone_number", kind: "message", T: Pe, oneof: "identifying_feature" }
]);
class Di extends N {
  constructor(e) {
    super(), this.result = aa.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Di().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Di().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Di().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Di, e, t);
  }
}
Di.runtime = s;
Di.typeName = "code.user.v1.UnlinkAccountResponse";
Di.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(aa) }
]);
var aa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(aa || (aa = {}));
s.util.setEnumType(aa, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class Ci extends N {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ci().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ci().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ci().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ci, e, t);
  }
}
Ci.runtime = s;
Ci.typeName = "code.user.v1.GetUserRequest";
Ci.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: P },
  { no: 2, name: "signature", kind: "message", T: ie },
  { no: 3, name: "phone_number", kind: "message", T: Pe, oneof: "identifying_feature" }
]);
class qi extends N {
  constructor(e) {
    super(), this.result = ua.OK, this.metadata = { case: void 0 }, this.enableInternalFlags = !1, this.eligibleAirdrops = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(qi, e, t);
  }
}
qi.runtime = s;
qi.typeName = "code.user.v1.GetUserResponse";
qi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ua) },
  { no: 2, name: "user", kind: "message", T: zt },
  { no: 3, name: "data_container_id", kind: "message", T: rt },
  { no: 5, name: "phone", kind: "message", T: Wt, oneof: "metadata" },
  { no: 6, name: "enable_internal_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: s.getEnumType(Xt), repeated: !0 }
]);
var ua;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(ua || (ua = {}));
s.util.setEnumType(ua, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class zt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(zt, e, t);
  }
}
zt.runtime = s;
zt.typeName = "code.user.v1.User";
zt.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: dt },
  { no: 2, name: "view", kind: "message", T: Ki }
]);
class Ki extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ki().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ki().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ki().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ki, e, t);
  }
}
Ki.runtime = s;
Ki.typeName = "code.user.v1.View";
Ki.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe }
]);
class Wt extends N {
  constructor(e) {
    super(), this.isLinked = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Wt, e, t);
  }
}
Wt.runtime = s;
Wt.typeName = "code.user.v1.PhoneMetadata";
Wt.fields = s.util.newFieldList(() => [
  { no: 1, name: "is_linked", kind: "scalar", T: 8 }
]);
se.Unary, se.Unary, se.Unary;
function Ug(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Lg(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), o = i.charCodeAt(0);
    if (e[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[o] = r;
  }
  var u = n.length, c = n.charAt(0), f = Math.log(u) / Math.log(256), d = Math.log(256) / Math.log(u);
  function h(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var S = 0, A = 0, M = 0, W = b.length; M !== W && b[M] === 0; )
      M++, S++;
    for (var fe = (W - M) * d + 1 >>> 0, _ = new Uint8Array(fe); M !== W; ) {
      for (var te = b[M], F = 0, R = fe - 1; (te !== 0 || F < A) && R !== -1; R--, F++)
        te += 256 * _[R] >>> 0, _[R] = te % u >>> 0, te = te / u >>> 0;
      if (te !== 0)
        throw new Error("Non-zero carry");
      A = F, M++;
    }
    for (var G = fe - A; G !== fe && _[G] === 0; )
      G++;
    for (var ee = c.repeat(S); G < fe; ++G)
      ee += n.charAt(_[G]);
    return ee;
  }
  function g(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var S = 0, A = 0, M = 0; b[S] === c; )
      A++, S++;
    for (var W = (b.length - S) * f + 1 >>> 0, fe = new Uint8Array(W); b[S]; ) {
      var _ = e[b.charCodeAt(S)];
      if (_ === 255)
        return;
      for (var te = 0, F = W - 1; (_ !== 0 || te < M) && F !== -1; F--, te++)
        _ += u * fe[F] >>> 0, fe[F] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
      if (_ !== 0)
        throw new Error("Non-zero carry");
      M = te, S++;
    }
    for (var R = W - M; R !== W && fe[R] === 0; )
      R++;
    for (var G = new Uint8Array(A + (W - R)), ee = A; R !== W; )
      G[ee++] = fe[R++];
    return G;
  }
  function y(b) {
    var S = g(b);
    if (S)
      return S;
    throw new Error("Non-base" + u + " character");
  }
  return {
    encode: h,
    decodeUnsafe: g,
    decode: y
  };
}
var Dg = Lg;
const Cg = Dg, qg = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Kg = Cg(qg);
const ca = /* @__PURE__ */ Ug(Kg);
function Pg(n, ...e) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function Sl(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function _g(n, e) {
  Pg(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const Iu = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const am = (n) => n instanceof Uint8Array, Su = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), St = (n, e) => n << 32 - e | n >>> e, $g = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!$g)
  throw new Error("Non little-endian hardware is not supported");
function um(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function cm(n) {
  if (typeof n == "string" && (n = um(n)), !am(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
function Mg(...n) {
  const e = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let t = 0;
  return n.forEach((r) => {
    if (!am(r))
      throw new Error("Uint8Array expected");
    e.set(r, t), t += r.length;
  }), e;
}
class Vg {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function lm(n) {
  const e = (r) => n().update(cm(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function Hg(n = 32) {
  if (Iu && typeof Iu.getRandomValues == "function")
    return Iu.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
function jg(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const i = BigInt(32), o = BigInt(4294967295), u = Number(t >> i & o), c = Number(t & o), f = r ? 4 : 0, d = r ? 0 : 4;
  n.setUint32(e + f, u, r), n.setUint32(e + d, c, r);
}
class fm extends Vg {
  constructor(e, t, r, i) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Su(this.buffer);
  }
  update(e) {
    Sl(this);
    const { view: t, buffer: r, blockLen: i } = this;
    e = cm(e);
    const o = e.length;
    for (let u = 0; u < o; ) {
      const c = Math.min(i - this.pos, o - u);
      if (c === i) {
        const f = Su(e);
        for (; i <= o - u; u += i)
          this.process(f, u);
        continue;
      }
      r.set(e.subarray(u, u + c), this.pos), this.pos += c, u += c, this.pos === i && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Sl(this), _g(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: i, isLE: o } = this;
    let { pos: u } = this;
    t[u++] = 128, this.buffer.subarray(u).fill(0), this.padOffset > i - u && (this.process(r, 0), u = 0);
    for (let g = u; g < i; g++)
      t[g] = 0;
    jg(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = Su(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = f / 4, h = this.get();
    if (d > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < d; g++)
      c.setUint32(4 * g, h[g], o);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: i, finished: o, destroyed: u, pos: c } = this;
    return e.length = i, e.pos = c, e.finished = o, e.destroyed = u, i % t && e.buffer.set(r), e;
  }
}
const zg = (n, e, t) => n & e ^ ~n & t, Wg = (n, e, t) => n & e ^ n & t ^ e & t, Rg = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), ji = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), zi = /* @__PURE__ */ new Uint32Array(64);
class Yg extends fm {
  constructor() {
    super(64, 32, 8, !1), this.A = ji[0] | 0, this.B = ji[1] | 0, this.C = ji[2] | 0, this.D = ji[3] | 0, this.E = ji[4] | 0, this.F = ji[5] | 0, this.G = ji[6] | 0, this.H = ji[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: i, E: o, F: u, G: c, H: f } = this;
    return [e, t, r, i, o, u, c, f];
  }
  // prettier-ignore
  set(e, t, r, i, o, u, c, f) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0, this.F = u | 0, this.G = c | 0, this.H = f | 0;
  }
  process(e, t) {
    for (let g = 0; g < 16; g++, t += 4)
      zi[g] = e.getUint32(t, !1);
    for (let g = 16; g < 64; g++) {
      const y = zi[g - 15], b = zi[g - 2], S = St(y, 7) ^ St(y, 18) ^ y >>> 3, A = St(b, 17) ^ St(b, 19) ^ b >>> 10;
      zi[g] = A + zi[g - 7] + S + zi[g - 16] | 0;
    }
    let { A: r, B: i, C: o, D: u, E: c, F: f, G: d, H: h } = this;
    for (let g = 0; g < 64; g++) {
      const y = St(c, 6) ^ St(c, 11) ^ St(c, 25), b = h + y + zg(c, f, d) + Rg[g] + zi[g] | 0, A = (St(r, 2) ^ St(r, 13) ^ St(r, 22)) + Wg(r, i, o) | 0;
      h = d, d = f, f = c, c = u + b | 0, u = o, o = i, i = r, r = b + A | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, u = u + this.D | 0, c = c + this.E | 0, f = f + this.F | 0, d = d + this.G | 0, h = h + this.H | 0, this.set(r, i, o, u, c, f, d, h);
  }
  roundClean() {
    zi.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const mm = /* @__PURE__ */ lm(() => new Yg());
var pu = {}, gu = {};
gu.byteLength = Gg;
gu.toByteArray = e0;
gu.fromByteArray = r0;
var Ut = [], lt = [], Xg = typeof Uint8Array < "u" ? Uint8Array : Array, Ju = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vs = 0, Zg = Ju.length; vs < Zg; ++vs)
  Ut[vs] = Ju[vs], lt[Ju.charCodeAt(vs)] = vs;
lt["-".charCodeAt(0)] = 62;
lt["_".charCodeAt(0)] = 63;
function dm(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function Gg(n) {
  var e = dm(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function Qg(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function e0(n) {
  var e, t = dm(n), r = t[0], i = t[1], o = new Xg(Qg(n, r, i)), u = 0, c = i > 0 ? r - 4 : r, f;
  for (f = 0; f < c; f += 4)
    e = lt[n.charCodeAt(f)] << 18 | lt[n.charCodeAt(f + 1)] << 12 | lt[n.charCodeAt(f + 2)] << 6 | lt[n.charCodeAt(f + 3)], o[u++] = e >> 16 & 255, o[u++] = e >> 8 & 255, o[u++] = e & 255;
  return i === 2 && (e = lt[n.charCodeAt(f)] << 2 | lt[n.charCodeAt(f + 1)] >> 4, o[u++] = e & 255), i === 1 && (e = lt[n.charCodeAt(f)] << 10 | lt[n.charCodeAt(f + 1)] << 4 | lt[n.charCodeAt(f + 2)] >> 2, o[u++] = e >> 8 & 255, o[u++] = e & 255), o;
}
function t0(n) {
  return Ut[n >> 18 & 63] + Ut[n >> 12 & 63] + Ut[n >> 6 & 63] + Ut[n & 63];
}
function n0(n, e, t) {
  for (var r, i = [], o = e; o < t; o += 3)
    r = (n[o] << 16 & 16711680) + (n[o + 1] << 8 & 65280) + (n[o + 2] & 255), i.push(t0(r));
  return i.join("");
}
function r0(n) {
  for (var e, t = n.length, r = t % 3, i = [], o = 16383, u = 0, c = t - r; u < c; u += o)
    i.push(n0(n, u, u + o > c ? c : u + o));
  return r === 1 ? (e = n[t - 1], i.push(
    Ut[e >> 2] + Ut[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], i.push(
    Ut[e >> 10] + Ut[e >> 4 & 63] + Ut[e << 2 & 63] + "="
  )), i.join("");
}
var Uc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Uc.read = function(n, e, t, r, i) {
  var o, u, c = i * 8 - r - 1, f = (1 << c) - 1, d = f >> 1, h = -7, g = t ? i - 1 : 0, y = t ? -1 : 1, b = n[e + g];
  for (g += y, o = b & (1 << -h) - 1, b >>= -h, h += c; h > 0; o = o * 256 + n[e + g], g += y, h -= 8)
    ;
  for (u = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; u = u * 256 + n[e + g], g += y, h -= 8)
    ;
  if (o === 0)
    o = 1 - d;
  else {
    if (o === f)
      return u ? NaN : (b ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, r), o = o - d;
  }
  return (b ? -1 : 1) * u * Math.pow(2, o - r);
};
Uc.write = function(n, e, t, r, i, o) {
  var u, c, f, d = o * 8 - i - 1, h = (1 << d) - 1, g = h >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : o - 1, S = r ? 1 : -1, A = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, u = h) : (u = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + g >= 1 ? e += y / f : e += y * Math.pow(2, 1 - g), e * f >= 2 && (u++, f /= 2), u + g >= h ? (c = 0, u = h) : u + g >= 1 ? (c = (e * f - 1) * Math.pow(2, i), u = u + g) : (c = e * Math.pow(2, g - 1) * Math.pow(2, i), u = 0)); i >= 8; n[t + b] = c & 255, b += S, c /= 256, i -= 8)
    ;
  for (u = u << i | c, d += i; d > 0; n[t + b] = u & 255, b += S, u /= 256, d -= 8)
    ;
  n[t + b - S] |= A * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = gu, t = Uc, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = c, n.SlowBuffer = fe, n.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  n.kMaxLength = i, c.TYPED_ARRAY_SUPPORT = o(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      const m = new Uint8Array(1), a = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(a, Uint8Array.prototype), Object.setPrototypeOf(m, a), m.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(c.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(c.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.byteOffset;
    }
  });
  function u(m) {
    if (m > i)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
    const a = new Uint8Array(m);
    return Object.setPrototypeOf(a, c.prototype), a;
  }
  function c(m, a, l) {
    if (typeof m == "number") {
      if (typeof a == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(m);
    }
    return f(m, a, l);
  }
  c.poolSize = 8192;
  function f(m, a, l) {
    if (typeof m == "string")
      return y(m, a);
    if (ArrayBuffer.isView(m))
      return S(m);
    if (m == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
      );
    if (O(m, ArrayBuffer) || m && O(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (O(m, SharedArrayBuffer) || m && O(m.buffer, SharedArrayBuffer)))
      return A(m, a, l);
    if (typeof m == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = m.valueOf && m.valueOf();
    if (p != null && p !== m)
      return c.from(p, a, l);
    const T = M(m);
    if (T)
      return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
      return c.from(m[Symbol.toPrimitive]("string"), a, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m
    );
  }
  c.from = function(m, a, l) {
    return f(m, a, l);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function d(m) {
    if (typeof m != "number")
      throw new TypeError('"size" argument must be of type number');
    if (m < 0)
      throw new RangeError('The value "' + m + '" is invalid for option "size"');
  }
  function h(m, a, l) {
    return d(m), m <= 0 ? u(m) : a !== void 0 ? typeof l == "string" ? u(m).fill(a, l) : u(m).fill(a) : u(m);
  }
  c.alloc = function(m, a, l) {
    return h(m, a, l);
  };
  function g(m) {
    return d(m), u(m < 0 ? 0 : W(m) | 0);
  }
  c.allocUnsafe = function(m) {
    return g(m);
  }, c.allocUnsafeSlow = function(m) {
    return g(m);
  };
  function y(m, a) {
    if ((typeof a != "string" || a === "") && (a = "utf8"), !c.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
    const l = _(m, a) | 0;
    let p = u(l);
    const T = p.write(m, a);
    return T !== l && (p = p.slice(0, T)), p;
  }
  function b(m) {
    const a = m.length < 0 ? 0 : W(m.length) | 0, l = u(a);
    for (let p = 0; p < a; p += 1)
      l[p] = m[p] & 255;
    return l;
  }
  function S(m) {
    if (O(m, Uint8Array)) {
      const a = new Uint8Array(m);
      return A(a.buffer, a.byteOffset, a.byteLength);
    }
    return b(m);
  }
  function A(m, a, l) {
    if (a < 0 || m.byteLength < a)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (m.byteLength < a + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return a === void 0 && l === void 0 ? p = new Uint8Array(m) : l === void 0 ? p = new Uint8Array(m, a) : p = new Uint8Array(m, a, l), Object.setPrototypeOf(p, c.prototype), p;
  }
  function M(m) {
    if (c.isBuffer(m)) {
      const a = W(m.length) | 0, l = u(a);
      return l.length === 0 || m.copy(l, 0, 0, a), l;
    }
    if (m.length !== void 0)
      return typeof m.length != "number" || j(m.length) ? u(0) : b(m);
    if (m.type === "Buffer" && Array.isArray(m.data))
      return b(m.data);
  }
  function W(m) {
    if (m >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return m | 0;
  }
  function fe(m) {
    return +m != m && (m = 0), c.alloc(+m);
  }
  c.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== c.prototype;
  }, c.compare = function(a, l) {
    if (O(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), O(l, Uint8Array) && (l = c.from(l, l.offset, l.byteLength)), !c.isBuffer(a) || !c.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (a === l)
      return 0;
    let p = a.length, T = l.length;
    for (let x = 0, k = Math.min(p, T); x < k; ++x)
      if (a[x] !== l[x]) {
        p = a[x], T = l[x];
        break;
      }
    return p < T ? -1 : T < p ? 1 : 0;
  }, c.isEncoding = function(a) {
    switch (String(a).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, c.concat = function(a, l) {
    if (!Array.isArray(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (a.length === 0)
      return c.alloc(0);
    let p;
    if (l === void 0)
      for (l = 0, p = 0; p < a.length; ++p)
        l += a[p].length;
    const T = c.allocUnsafe(l);
    let x = 0;
    for (p = 0; p < a.length; ++p) {
      let k = a[p];
      if (O(k, Uint8Array))
        x + k.length > T.length ? (c.isBuffer(k) || (k = c.from(k)), k.copy(T, x)) : Uint8Array.prototype.set.call(
          T,
          k,
          x
        );
      else if (c.isBuffer(k))
        k.copy(T, x);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      x += k.length;
    }
    return T;
  };
  function _(m, a) {
    if (c.isBuffer(m))
      return m.length;
    if (ArrayBuffer.isView(m) || O(m, ArrayBuffer))
      return m.byteLength;
    if (typeof m != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m
      );
    const l = m.length, p = arguments.length > 2 && arguments[2] === !0;
    if (!p && l === 0)
      return 0;
    let T = !1;
    for (; ; )
      switch (a) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return I(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return U(m).length;
        default:
          if (T)
            return p ? -1 : I(m).length;
          a = ("" + a).toLowerCase(), T = !0;
      }
  }
  c.byteLength = _;
  function te(m, a, l) {
    let p = !1;
    if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, a >>>= 0, l <= a))
      return "";
    for (m || (m = "utf8"); ; )
      switch (m) {
        case "hex":
          return C(this, a, l);
        case "utf8":
        case "utf-8":
          return Zt(this, a, l);
        case "ascii":
          return he(this, a, l);
        case "latin1":
        case "binary":
          return K(this, a, l);
        case "base64":
          return Ge(this, a, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, a, l);
        default:
          if (p)
            throw new TypeError("Unknown encoding: " + m);
          m = (m + "").toLowerCase(), p = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function F(m, a, l) {
    const p = m[a];
    m[a] = m[l], m[l] = p;
  }
  c.prototype.swap16 = function() {
    const a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < a; l += 2)
      F(this, l, l + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < a; l += 4)
      F(this, l, l + 3), F(this, l + 1, l + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < a; l += 8)
      F(this, l, l + 7), F(this, l + 1, l + 6), F(this, l + 2, l + 5), F(this, l + 3, l + 4);
    return this;
  }, c.prototype.toString = function() {
    const a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? Zt(this, 0, a) : te.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(a) {
    if (!c.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : c.compare(this, a) === 0;
  }, c.prototype.inspect = function() {
    let a = "";
    const l = n.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(a, l, p, T, x) {
    if (O(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), !c.isBuffer(a))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
      );
    if (l === void 0 && (l = 0), p === void 0 && (p = a ? a.length : 0), T === void 0 && (T = 0), x === void 0 && (x = this.length), l < 0 || p > a.length || T < 0 || x > this.length)
      throw new RangeError("out of range index");
    if (T >= x && l >= p)
      return 0;
    if (T >= x)
      return -1;
    if (l >= p)
      return 1;
    if (l >>>= 0, p >>>= 0, T >>>= 0, x >>>= 0, this === a)
      return 0;
    let k = x - T, ne = p - l;
    const ke = Math.min(k, ne), ce = this.slice(T, x), ye = a.slice(l, p);
    for (let Te = 0; Te < ke; ++Te)
      if (ce[Te] !== ye[Te]) {
        k = ce[Te], ne = ye[Te];
        break;
      }
    return k < ne ? -1 : ne < k ? 1 : 0;
  };
  function R(m, a, l, p, T) {
    if (m.length === 0)
      return -1;
    if (typeof l == "string" ? (p = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, j(l) && (l = T ? 0 : m.length - 1), l < 0 && (l = m.length + l), l >= m.length) {
      if (T)
        return -1;
      l = m.length - 1;
    } else if (l < 0)
      if (T)
        l = 0;
      else
        return -1;
    if (typeof a == "string" && (a = c.from(a, p)), c.isBuffer(a))
      return a.length === 0 ? -1 : G(m, a, l, p, T);
    if (typeof a == "number")
      return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(m, a, l) : Uint8Array.prototype.lastIndexOf.call(m, a, l) : G(m, [a], l, p, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function G(m, a, l, p, T) {
    let x = 1, k = m.length, ne = a.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (m.length < 2 || a.length < 2)
        return -1;
      x = 2, k /= 2, ne /= 2, l /= 2;
    }
    function ke(ye, Te) {
      return x === 1 ? ye[Te] : ye.readUInt16BE(Te * x);
    }
    let ce;
    if (T) {
      let ye = -1;
      for (ce = l; ce < k; ce++)
        if (ke(m, ce) === ke(a, ye === -1 ? 0 : ce - ye)) {
          if (ye === -1 && (ye = ce), ce - ye + 1 === ne)
            return ye * x;
        } else
          ye !== -1 && (ce -= ce - ye), ye = -1;
    } else
      for (l + ne > k && (l = k - ne), ce = l; ce >= 0; ce--) {
        let ye = !0;
        for (let Te = 0; Te < ne; Te++)
          if (ke(m, ce + Te) !== ke(a, Te)) {
            ye = !1;
            break;
          }
        if (ye)
          return ce;
      }
    return -1;
  }
  c.prototype.includes = function(a, l, p) {
    return this.indexOf(a, l, p) !== -1;
  }, c.prototype.indexOf = function(a, l, p) {
    return R(this, a, l, p, !0);
  }, c.prototype.lastIndexOf = function(a, l, p) {
    return R(this, a, l, p, !1);
  };
  function ee(m, a, l, p) {
    l = Number(l) || 0;
    const T = m.length - l;
    p ? (p = Number(p), p > T && (p = T)) : p = T;
    const x = a.length;
    p > x / 2 && (p = x / 2);
    let k;
    for (k = 0; k < p; ++k) {
      const ne = parseInt(a.substr(k * 2, 2), 16);
      if (j(ne))
        return k;
      m[l + k] = ne;
    }
    return k;
  }
  function oe(m, a, l, p) {
    return D(I(a, m.length - l), m, l, p);
  }
  function Be(m, a, l, p) {
    return D(L(a), m, l, p);
  }
  function Ie(m, a, l, p) {
    return D(U(a), m, l, p);
  }
  function Le(m, a, l, p) {
    return D($(a, m.length - l), m, l, p);
  }
  c.prototype.write = function(a, l, p, T) {
    if (l === void 0)
      T = "utf8", p = this.length, l = 0;
    else if (p === void 0 && typeof l == "string")
      T = l, p = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(p) ? (p = p >>> 0, T === void 0 && (T = "utf8")) : (T = p, p = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const x = this.length - l;
    if ((p === void 0 || p > x) && (p = x), a.length > 0 && (p < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let k = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return ee(this, a, l, p);
        case "utf8":
        case "utf-8":
          return oe(this, a, l, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Be(this, a, l, p);
        case "base64":
          return Ie(this, a, l, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Le(this, a, l, p);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + T);
          T = ("" + T).toLowerCase(), k = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Ge(m, a, l) {
    return a === 0 && l === m.length ? e.fromByteArray(m) : e.fromByteArray(m.slice(a, l));
  }
  function Zt(m, a, l) {
    l = Math.min(m.length, l);
    const p = [];
    let T = a;
    for (; T < l; ) {
      const x = m[T];
      let k = null, ne = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
      if (T + ne <= l) {
        let ke, ce, ye, Te;
        switch (ne) {
          case 1:
            x < 128 && (k = x);
            break;
          case 2:
            ke = m[T + 1], (ke & 192) === 128 && (Te = (x & 31) << 6 | ke & 63, Te > 127 && (k = Te));
            break;
          case 3:
            ke = m[T + 1], ce = m[T + 2], (ke & 192) === 128 && (ce & 192) === 128 && (Te = (x & 15) << 12 | (ke & 63) << 6 | ce & 63, Te > 2047 && (Te < 55296 || Te > 57343) && (k = Te));
            break;
          case 4:
            ke = m[T + 1], ce = m[T + 2], ye = m[T + 3], (ke & 192) === 128 && (ce & 192) === 128 && (ye & 192) === 128 && (Te = (x & 15) << 18 | (ke & 63) << 12 | (ce & 63) << 6 | ye & 63, Te > 65535 && Te < 1114112 && (k = Te));
        }
      }
      k === null ? (k = 65533, ne = 1) : k > 65535 && (k -= 65536, p.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), p.push(k), T += ne;
    }
    return _e(p);
  }
  const je = 4096;
  function _e(m) {
    const a = m.length;
    if (a <= je)
      return String.fromCharCode.apply(String, m);
    let l = "", p = 0;
    for (; p < a; )
      l += String.fromCharCode.apply(
        String,
        m.slice(p, p += je)
      );
    return l;
  }
  function he(m, a, l) {
    let p = "";
    l = Math.min(m.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(m[T] & 127);
    return p;
  }
  function K(m, a, l) {
    let p = "";
    l = Math.min(m.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(m[T]);
    return p;
  }
  function C(m, a, l) {
    const p = m.length;
    (!a || a < 0) && (a = 0), (!l || l < 0 || l > p) && (l = p);
    let T = "";
    for (let x = a; x < l; ++x)
      T += V[m[x]];
    return T;
  }
  function Y(m, a, l) {
    const p = m.slice(a, l);
    let T = "";
    for (let x = 0; x < p.length - 1; x += 2)
      T += String.fromCharCode(p[x] + p[x + 1] * 256);
    return T;
  }
  c.prototype.slice = function(a, l) {
    const p = this.length;
    a = ~~a, l = l === void 0 ? p : ~~l, a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), l < 0 ? (l += p, l < 0 && (l = 0)) : l > p && (l = p), l < a && (l = a);
    const T = this.subarray(a, l);
    return Object.setPrototypeOf(T, c.prototype), T;
  };
  function z(m, a, l) {
    if (m % 1 !== 0 || m < 0)
      throw new RangeError("offset is not uint");
    if (m + a > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = this[a], x = 1, k = 0;
    for (; ++k < l && (x *= 256); )
      T += this[a + k] * x;
    return T;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = this[a + --l], x = 1;
    for (; l > 0 && (x *= 256); )
      T += this[a + --l] * x;
    return T;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(a, l) {
    return a = a >>> 0, l || z(a, 1, this.length), this[a];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(a, l) {
    return a = a >>> 0, l || z(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(a, l) {
    return a = a >>> 0, l || z(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, c.prototype.readBigUInt64LE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, x = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + p * 2 ** 24;
    return BigInt(T) + (BigInt(x) << BigInt(32));
  }), c.prototype.readBigUInt64BE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], x = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p;
    return (BigInt(T) << BigInt(32)) + BigInt(x);
  }), c.prototype.readIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = this[a], x = 1, k = 0;
    for (; ++k < l && (x *= 256); )
      T += this[a + k] * x;
    return x *= 128, T >= x && (T -= Math.pow(2, 8 * l)), T;
  }, c.prototype.readIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = l, x = 1, k = this[a + --T];
    for (; T > 0 && (x *= 256); )
      k += this[a + --T] * x;
    return x *= 128, k >= x && (k -= Math.pow(2, 8 * l)), k;
  }, c.prototype.readInt8 = function(a, l) {
    return a = a >>> 0, l || z(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, c.prototype.readInt16LE = function(a, l) {
    a = a >>> 0, l || z(a, 2, this.length);
    const p = this[a] | this[a + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, c.prototype.readInt16BE = function(a, l) {
    a = a >>> 0, l || z(a, 2, this.length);
    const p = this[a + 1] | this[a] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, c.prototype.readInt32LE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, c.prototype.readInt32BE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, c.prototype.readBigInt64LE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (p << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), c.prototype.readBigInt64BE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = (l << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p);
  }), c.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), t.read(this, a, !0, 23, 4);
  }, c.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), t.read(this, a, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || z(a, 8, this.length), t.read(this, a, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || z(a, 8, this.length), t.read(this, a, !1, 52, 8);
  };
  function X(m, a, l, p, T, x) {
    if (!c.isBuffer(m))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > T || a < x)
      throw new RangeError('"value" argument is out of bounds');
    if (l + p > m.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ne = Math.pow(2, 8 * p) - 1;
      X(this, a, l, p, ne, 0);
    }
    let x = 1, k = 0;
    for (this[l] = a & 255; ++k < p && (x *= 256); )
      this[l + k] = a / x & 255;
    return l + p;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ne = Math.pow(2, 8 * p) - 1;
      X(this, a, l, p, ne, 0);
    }
    let x = p - 1, k = 1;
    for (this[l + x] = a & 255; --x >= 0 && (k *= 256); )
      this[l + x] = a / k & 255;
    return l + p;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 1, 255, 0), this[l] = a & 255, l + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 65535, 0), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 65535, 0), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 4294967295, 0), this[l + 3] = a >>> 24, this[l + 2] = a >>> 16, this[l + 1] = a >>> 8, this[l] = a & 255, l + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 4294967295, 0), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  };
  function ae(m, a, l, p, T) {
    Re(a, p, T, m, l, 7);
    let x = Number(a & BigInt(4294967295));
    m[l++] = x, x = x >> 8, m[l++] = x, x = x >> 8, m[l++] = x, x = x >> 8, m[l++] = x;
    let k = Number(a >> BigInt(32) & BigInt(4294967295));
    return m[l++] = k, k = k >> 8, m[l++] = k, k = k >> 8, m[l++] = k, k = k >> 8, m[l++] = k, l;
  }
  function ge(m, a, l, p, T) {
    Re(a, p, T, m, l, 7);
    let x = Number(a & BigInt(4294967295));
    m[l + 7] = x, x = x >> 8, m[l + 6] = x, x = x >> 8, m[l + 5] = x, x = x >> 8, m[l + 4] = x;
    let k = Number(a >> BigInt(32) & BigInt(4294967295));
    return m[l + 3] = k, k = k >> 8, m[l + 2] = k, k = k >> 8, m[l + 1] = k, k = k >> 8, m[l] = k, l + 8;
  }
  c.prototype.writeBigUInt64LE = H(function(a, l = 0) {
    return ae(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = H(function(a, l = 0) {
    return ge(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const ke = Math.pow(2, 8 * p - 1);
      X(this, a, l, p, ke - 1, -ke);
    }
    let x = 0, k = 1, ne = 0;
    for (this[l] = a & 255; ++x < p && (k *= 256); )
      a < 0 && ne === 0 && this[l + x - 1] !== 0 && (ne = 1), this[l + x] = (a / k >> 0) - ne & 255;
    return l + p;
  }, c.prototype.writeIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const ke = Math.pow(2, 8 * p - 1);
      X(this, a, l, p, ke - 1, -ke);
    }
    let x = p - 1, k = 1, ne = 0;
    for (this[l + x] = a & 255; --x >= 0 && (k *= 256); )
      a < 0 && ne === 0 && this[l + x + 1] !== 0 && (ne = 1), this[l + x] = (a / k >> 0) - ne & 255;
    return l + p;
  }, c.prototype.writeInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[l] = a & 255, l + 1;
  }, c.prototype.writeInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 32767, -32768), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, c.prototype.writeInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 32767, -32768), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, c.prototype.writeInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 2147483647, -2147483648), this[l] = a & 255, this[l + 1] = a >>> 8, this[l + 2] = a >>> 16, this[l + 3] = a >>> 24, l + 4;
  }, c.prototype.writeInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  }, c.prototype.writeBigInt64LE = H(function(a, l = 0) {
    return ae(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = H(function(a, l = 0) {
    return ge(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function be(m, a, l, p, T, x) {
    if (l + p > m.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function we(m, a, l, p, T) {
    return a = +a, l = l >>> 0, T || be(m, a, l, 4), t.write(m, a, l, p, 23, 4), l + 4;
  }
  c.prototype.writeFloatLE = function(a, l, p) {
    return we(this, a, l, !0, p);
  }, c.prototype.writeFloatBE = function(a, l, p) {
    return we(this, a, l, !1, p);
  };
  function pe(m, a, l, p, T) {
    return a = +a, l = l >>> 0, T || be(m, a, l, 8), t.write(m, a, l, p, 52, 8), l + 8;
  }
  c.prototype.writeDoubleLE = function(a, l, p) {
    return pe(this, a, l, !0, p);
  }, c.prototype.writeDoubleBE = function(a, l, p) {
    return pe(this, a, l, !1, p);
  }, c.prototype.copy = function(a, l, p, T) {
    if (!c.isBuffer(a))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !T && T !== 0 && (T = this.length), l >= a.length && (l = a.length), l || (l = 0), T > 0 && T < p && (T = p), T === p || a.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (T < 0)
      throw new RangeError("sourceEnd out of bounds");
    T > this.length && (T = this.length), a.length - l < T - p && (T = a.length - l + p);
    const x = T - p;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, p, T) : Uint8Array.prototype.set.call(
      a,
      this.subarray(p, T),
      l
    ), x;
  }, c.prototype.fill = function(a, l, p, T) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (T = l, l = 0, p = this.length) : typeof p == "string" && (T = p, p = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !c.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (a.length === 1) {
        const k = a.charCodeAt(0);
        (T === "utf8" && k < 128 || T === "latin1") && (a = k);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (l < 0 || this.length < l || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= l)
      return this;
    l = l >>> 0, p = p === void 0 ? this.length : p >>> 0, a || (a = 0);
    let x;
    if (typeof a == "number")
      for (x = l; x < p; ++x)
        this[x] = a;
    else {
      const k = c.isBuffer(a) ? a : c.from(a, T), ne = k.length;
      if (ne === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (x = 0; x < p - l; ++x)
        this[x + l] = k[x % ne];
    }
    return this;
  };
  const Ne = {};
  function ve(m, a, l) {
    Ne[m] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: a.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${m}]`, this.stack, delete this.name;
      }
      get code() {
        return m;
      }
      set code(T) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: T,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${m}]: ${this.message}`;
      }
    };
  }
  ve(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(m) {
      return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ve(
    "ERR_INVALID_ARG_TYPE",
    function(m, a) {
      return `The "${m}" argument must be of type number. Received type ${typeof a}`;
    },
    TypeError
  ), ve(
    "ERR_OUT_OF_RANGE",
    function(m, a, l) {
      let p = `The value of "${m}" is out of range.`, T = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? T = De(String(l)) : typeof l == "bigint" && (T = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (T = De(T)), T += "n"), p += ` It must be ${a}. Received ${T}`, p;
    },
    RangeError
  );
  function De(m) {
    let a = "", l = m.length;
    const p = m[0] === "-" ? 1 : 0;
    for (; l >= p + 4; l -= 3)
      a = `_${m.slice(l - 3, l)}${a}`;
    return `${m.slice(0, l)}${a}`;
  }
  function Ce(m, a, l) {
    w(a, "offset"), (m[a] === void 0 || m[a + l] === void 0) && E(a, m.length - (l + 1));
  }
  function Re(m, a, l, p, T, x) {
    if (m > l || m < a) {
      const k = typeof a == "bigint" ? "n" : "";
      let ne;
      throw x > 3 ? a === 0 || a === BigInt(0) ? ne = `>= 0${k} and < 2${k} ** ${(x + 1) * 8}${k}` : ne = `>= -(2${k} ** ${(x + 1) * 8 - 1}${k}) and < 2 ** ${(x + 1) * 8 - 1}${k}` : ne = `>= ${a}${k} and <= ${l}${k}`, new Ne.ERR_OUT_OF_RANGE("value", ne, m);
    }
    Ce(p, T, x);
  }
  function w(m, a) {
    if (typeof m != "number")
      throw new Ne.ERR_INVALID_ARG_TYPE(a, "number", m);
  }
  function E(m, a, l) {
    throw Math.floor(m) !== m ? (w(m, l), new Ne.ERR_OUT_OF_RANGE(l || "offset", "an integer", m)) : a < 0 ? new Ne.ERR_BUFFER_OUT_OF_BOUNDS() : new Ne.ERR_OUT_OF_RANGE(
      l || "offset",
      `>= ${l ? 1 : 0} and <= ${a}`,
      m
    );
  }
  const B = /[^+/0-9A-Za-z-_]/g;
  function v(m) {
    if (m = m.split("=")[0], m = m.trim().replace(B, ""), m.length < 2)
      return "";
    for (; m.length % 4 !== 0; )
      m = m + "=";
    return m;
  }
  function I(m, a) {
    a = a || 1 / 0;
    let l;
    const p = m.length;
    let T = null;
    const x = [];
    for (let k = 0; k < p; ++k) {
      if (l = m.charCodeAt(k), l > 55295 && l < 57344) {
        if (!T) {
          if (l > 56319) {
            (a -= 3) > -1 && x.push(239, 191, 189);
            continue;
          } else if (k + 1 === p) {
            (a -= 3) > -1 && x.push(239, 191, 189);
            continue;
          }
          T = l;
          continue;
        }
        if (l < 56320) {
          (a -= 3) > -1 && x.push(239, 191, 189), T = l;
          continue;
        }
        l = (T - 55296 << 10 | l - 56320) + 65536;
      } else
        T && (a -= 3) > -1 && x.push(239, 191, 189);
      if (T = null, l < 128) {
        if ((a -= 1) < 0)
          break;
        x.push(l);
      } else if (l < 2048) {
        if ((a -= 2) < 0)
          break;
        x.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((a -= 3) < 0)
          break;
        x.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((a -= 4) < 0)
          break;
        x.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return x;
  }
  function L(m) {
    const a = [];
    for (let l = 0; l < m.length; ++l)
      a.push(m.charCodeAt(l) & 255);
    return a;
  }
  function $(m, a) {
    let l, p, T;
    const x = [];
    for (let k = 0; k < m.length && !((a -= 2) < 0); ++k)
      l = m.charCodeAt(k), p = l >> 8, T = l % 256, x.push(T), x.push(p);
    return x;
  }
  function U(m) {
    return e.toByteArray(v(m));
  }
  function D(m, a, l, p) {
    let T;
    for (T = 0; T < p && !(T + l >= a.length || T >= m.length); ++T)
      a[T + l] = m[T];
    return T;
  }
  function O(m, a) {
    return m instanceof a || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === a.name;
  }
  function j(m) {
    return m !== m;
  }
  const V = function() {
    const m = "0123456789abcdef", a = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const p = l * 16;
      for (let T = 0; T < 16; ++T)
        a[p + T] = m[l] + m[T];
    }
    return a;
  }();
  function H(m) {
    return typeof BigInt > "u" ? Z : m;
  }
  function Z() {
    throw new Error("BigInt not supported");
  }
})(pu);
const Sa = /* @__PURE__ */ BigInt(2 ** 32 - 1), rc = /* @__PURE__ */ BigInt(32);
function hm(n, e = !1) {
  return e ? { h: Number(n & Sa), l: Number(n >> rc & Sa) } : { h: Number(n >> rc & Sa) | 0, l: Number(n & Sa) | 0 };
}
function i0(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let i = 0; i < n.length; i++) {
    const { h: o, l: u } = hm(n[i], e);
    [t[i], r[i]] = [o, u];
  }
  return [t, r];
}
const s0 = (n, e) => BigInt(n >>> 0) << rc | BigInt(e >>> 0), o0 = (n, e, t) => n >>> t, a0 = (n, e, t) => n << 32 - t | e >>> t, u0 = (n, e, t) => n >>> t | e << 32 - t, c0 = (n, e, t) => n << 32 - t | e >>> t, l0 = (n, e, t) => n << 64 - t | e >>> t - 32, f0 = (n, e, t) => n >>> t - 32 | e << 64 - t, m0 = (n, e) => e, d0 = (n, e) => n, h0 = (n, e, t) => n << t | e >>> 32 - t, p0 = (n, e, t) => e << t | n >>> 32 - t, g0 = (n, e, t) => e << t - 32 | n >>> 64 - t, w0 = (n, e, t) => n << t - 32 | e >>> 64 - t;
function y0(n, e, t, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: n + t + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const T0 = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), E0 = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, N0 = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), b0 = (n, e, t, r, i) => e + t + r + i + (n / 2 ** 32 | 0) | 0, x0 = (n, e, t, r, i) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0), B0 = (n, e, t, r, i, o) => e + t + r + i + o + (n / 2 ** 32 | 0) | 0, k0 = {
  fromBig: hm,
  split: i0,
  toBig: s0,
  shrSH: o0,
  shrSL: a0,
  rotrSH: u0,
  rotrSL: c0,
  rotrBH: l0,
  rotrBL: f0,
  rotr32H: m0,
  rotr32L: d0,
  rotlSH: h0,
  rotlSL: p0,
  rotlBH: g0,
  rotlBL: w0,
  add: y0,
  add3L: T0,
  add3H: E0,
  add4L: N0,
  add4H: b0,
  add5H: B0,
  add5L: x0
}, le = k0, [O0, I0] = /* @__PURE__ */ (() => le.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n))))(), Wi = /* @__PURE__ */ new Uint32Array(80), Ri = /* @__PURE__ */ new Uint32Array(80);
class S0 extends fm {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: i, Ch: o, Cl: u, Dh: c, Dl: f, Eh: d, El: h, Fh: g, Fl: y, Gh: b, Gl: S, Hh: A, Hl: M } = this;
    return [e, t, r, i, o, u, c, f, d, h, g, y, b, S, A, M];
  }
  // prettier-ignore
  set(e, t, r, i, o, u, c, f, d, h, g, y, b, S, A, M) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = u | 0, this.Dh = c | 0, this.Dl = f | 0, this.Eh = d | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = y | 0, this.Gh = b | 0, this.Gl = S | 0, this.Hh = A | 0, this.Hl = M | 0;
  }
  process(e, t) {
    for (let _ = 0; _ < 16; _++, t += 4)
      Wi[_] = e.getUint32(t), Ri[_] = e.getUint32(t += 4);
    for (let _ = 16; _ < 80; _++) {
      const te = Wi[_ - 15] | 0, F = Ri[_ - 15] | 0, R = le.rotrSH(te, F, 1) ^ le.rotrSH(te, F, 8) ^ le.shrSH(te, F, 7), G = le.rotrSL(te, F, 1) ^ le.rotrSL(te, F, 8) ^ le.shrSL(te, F, 7), ee = Wi[_ - 2] | 0, oe = Ri[_ - 2] | 0, Be = le.rotrSH(ee, oe, 19) ^ le.rotrBH(ee, oe, 61) ^ le.shrSH(ee, oe, 6), Ie = le.rotrSL(ee, oe, 19) ^ le.rotrBL(ee, oe, 61) ^ le.shrSL(ee, oe, 6), Le = le.add4L(G, Ie, Ri[_ - 7], Ri[_ - 16]), Ge = le.add4H(Le, R, Be, Wi[_ - 7], Wi[_ - 16]);
      Wi[_] = Ge | 0, Ri[_] = Le | 0;
    }
    let { Ah: r, Al: i, Bh: o, Bl: u, Ch: c, Cl: f, Dh: d, Dl: h, Eh: g, El: y, Fh: b, Fl: S, Gh: A, Gl: M, Hh: W, Hl: fe } = this;
    for (let _ = 0; _ < 80; _++) {
      const te = le.rotrSH(g, y, 14) ^ le.rotrSH(g, y, 18) ^ le.rotrBH(g, y, 41), F = le.rotrSL(g, y, 14) ^ le.rotrSL(g, y, 18) ^ le.rotrBL(g, y, 41), R = g & b ^ ~g & A, G = y & S ^ ~y & M, ee = le.add5L(fe, F, G, I0[_], Ri[_]), oe = le.add5H(ee, W, te, R, O0[_], Wi[_]), Be = ee | 0, Ie = le.rotrSH(r, i, 28) ^ le.rotrBH(r, i, 34) ^ le.rotrBH(r, i, 39), Le = le.rotrSL(r, i, 28) ^ le.rotrBL(r, i, 34) ^ le.rotrBL(r, i, 39), Ge = r & o ^ r & c ^ o & c, Zt = i & u ^ i & f ^ u & f;
      W = A | 0, fe = M | 0, A = b | 0, M = S | 0, b = g | 0, S = y | 0, { h: g, l: y } = le.add(d | 0, h | 0, oe | 0, Be | 0), d = c | 0, h = f | 0, c = o | 0, f = u | 0, o = r | 0, u = i | 0;
      const je = le.add3L(Be, Le, Zt);
      r = le.add3H(je, oe, Ie, Ge), i = je | 0;
    }
    ({ h: r, l: i } = le.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: o, l: u } = le.add(this.Bh | 0, this.Bl | 0, o | 0, u | 0), { h: c, l: f } = le.add(this.Ch | 0, this.Cl | 0, c | 0, f | 0), { h: d, l: h } = le.add(this.Dh | 0, this.Dl | 0, d | 0, h | 0), { h: g, l: y } = le.add(this.Eh | 0, this.El | 0, g | 0, y | 0), { h: b, l: S } = le.add(this.Fh | 0, this.Fl | 0, b | 0, S | 0), { h: A, l: M } = le.add(this.Gh | 0, this.Gl | 0, A | 0, M | 0), { h: W, l: fe } = le.add(this.Hh | 0, this.Hl | 0, W | 0, fe | 0), this.set(r, i, o, u, c, f, d, h, g, y, b, S, A, M, W, fe);
  }
  roundClean() {
    Wi.fill(0), Ri.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const pm = /* @__PURE__ */ lm(() => new S0());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const J0 = BigInt(1), v0 = BigInt(2), wu = (n) => n instanceof Uint8Array, F0 = /* @__PURE__ */ Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Lc(n) {
  if (!wu(n))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += F0[n[t]];
  return e;
}
function gm(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
function wm(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const e = n.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const t = new Uint8Array(e / 2);
  for (let r = 0; r < t.length; r++) {
    const i = r * 2, o = n.slice(i, i + 2), u = Number.parseInt(o, 16);
    if (Number.isNaN(u) || u < 0)
      throw new Error("Invalid byte sequence");
    t[r] = u;
  }
  return t;
}
function A0(n) {
  return gm(Lc(n));
}
function _a(n) {
  if (!wu(n))
    throw new Error("Uint8Array expected");
  return gm(Lc(Uint8Array.from(n).reverse()));
}
function ym(n, e) {
  return wm(n.toString(16).padStart(e * 2, "0"));
}
function ic(n, e) {
  return ym(n, e).reverse();
}
function Yi(n, e, t) {
  let r;
  if (typeof e == "string")
    try {
      r = wm(e);
    } catch (o) {
      throw new Error(`${n} must be valid hex string, got "${e}". Cause: ${o}`);
    }
  else if (wu(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${n} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof t == "number" && i !== t)
    throw new Error(`${n} expected ${t} bytes, got ${i}`);
  return r;
}
function Jl(...n) {
  const e = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let t = 0;
  return n.forEach((r) => {
    if (!wu(r))
      throw new Error("Uint8Array expected");
    e.set(r, t), t += r.length;
  }), e;
}
const U0 = (n) => (v0 << BigInt(n - 1)) - J0, L0 = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || n instanceof Uint8Array,
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, e) => e.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen)
};
function Dc(n, e, t = {}) {
  const r = (i, o, u) => {
    const c = L0[o];
    if (typeof c != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const f = n[i];
    if (!(u && f === void 0) && !c(f, n))
      throw new Error(`Invalid param ${String(i)}=${f} (${typeof f}), expected ${o}`);
  };
  for (const [i, o] of Object.entries(e))
    r(i, o, !1);
  for (const [i, o] of Object.entries(t))
    r(i, o, !0);
  return n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Me = BigInt(0), Ae = BigInt(1), Ts = BigInt(2), D0 = BigInt(3), sc = BigInt(4), vl = BigInt(5), Fl = BigInt(8);
BigInt(9);
BigInt(16);
function qe(n, e) {
  const t = n % e;
  return t >= Me ? t : e + t;
}
function C0(n, e, t) {
  if (t <= Me || e < Me)
    throw new Error("Expected power/modulo > 0");
  if (t === Ae)
    return Me;
  let r = Ae;
  for (; e > Me; )
    e & Ae && (r = r * n % t), n = n * n % t, e >>= Ae;
  return r;
}
function Jt(n, e, t) {
  let r = n;
  for (; e-- > Me; )
    r *= r, r %= t;
  return r;
}
function Al(n, e) {
  if (n === Me || e <= Me)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = qe(n, e), r = e, i = Me, o = Ae;
  for (; t !== Me; ) {
    const c = r / t, f = r % t, d = i - o * c;
    r = t, t = f, i = o, o = d;
  }
  if (r !== Ae)
    throw new Error("invert: does not exist");
  return qe(i, e);
}
function q0(n) {
  const e = (n - Ae) / Ts;
  let t, r, i;
  for (t = n - Ae, r = 0; t % Ts === Me; t /= Ts, r++)
    ;
  for (i = Ts; i < n && C0(i, e, n) !== n - Ae; i++)
    ;
  if (r === 1) {
    const u = (n + Ae) / sc;
    return function(f, d) {
      const h = f.pow(d, u);
      if (!f.eql(f.sqr(h), d))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const o = (t + Ae) / Ts;
  return function(c, f) {
    if (c.pow(f, e) === c.neg(c.ONE))
      throw new Error("Cannot find square root");
    let d = r, h = c.pow(c.mul(c.ONE, i), t), g = c.pow(f, o), y = c.pow(f, t);
    for (; !c.eql(y, c.ONE); ) {
      if (c.eql(y, c.ZERO))
        return c.ZERO;
      let b = 1;
      for (let A = c.sqr(y); b < d && !c.eql(A, c.ONE); b++)
        A = c.sqr(A);
      const S = c.pow(h, Ae << BigInt(d - b - 1));
      h = c.sqr(S), g = c.mul(g, S), y = c.mul(y, h), d = b;
    }
    return g;
  };
}
function K0(n) {
  if (n % sc === D0) {
    const e = (n + Ae) / sc;
    return function(r, i) {
      const o = r.pow(i, e);
      if (!r.eql(r.sqr(o), i))
        throw new Error("Cannot find square root");
      return o;
    };
  }
  if (n % Fl === vl) {
    const e = (n - vl) / Fl;
    return function(r, i) {
      const o = r.mul(i, Ts), u = r.pow(o, e), c = r.mul(i, u), f = r.mul(r.mul(c, Ts), u), d = r.mul(c, r.sub(f, r.ONE));
      if (!r.eql(r.sqr(d), i))
        throw new Error("Cannot find square root");
      return d;
    };
  }
  return q0(n);
}
const P0 = (n, e) => (qe(n, e) & Ae) === Ae, _0 = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function $0(n) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = _0.reduce((r, i) => (r[i] = "function", r), e);
  return Dc(n, t);
}
function M0(n, e, t) {
  if (t < Me)
    throw new Error("Expected power > 0");
  if (t === Me)
    return n.ONE;
  if (t === Ae)
    return e;
  let r = n.ONE, i = e;
  for (; t > Me; )
    t & Ae && (r = n.mul(r, i)), i = n.sqr(i), t >>= Ae;
  return r;
}
function V0(n, e) {
  const t = new Array(e.length), r = e.reduce((o, u, c) => n.is0(u) ? o : (t[c] = o, n.mul(o, u)), n.ONE), i = n.inv(r);
  return e.reduceRight((o, u, c) => n.is0(u) ? o : (t[c] = n.mul(o, t[c]), n.mul(o, u)), i), t;
}
function Tm(n, e) {
  const t = e !== void 0 ? e : n.toString(2).length, r = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: r };
}
function H0(n, e, t = !1, r = {}) {
  if (n <= Me)
    throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: i, nByteLength: o } = Tm(n, e);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const u = K0(n), c = Object.freeze({
    ORDER: n,
    BITS: i,
    BYTES: o,
    MASK: U0(i),
    ZERO: Me,
    ONE: Ae,
    create: (f) => qe(f, n),
    isValid: (f) => {
      if (typeof f != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof f}`);
      return Me <= f && f < n;
    },
    is0: (f) => f === Me,
    isOdd: (f) => (f & Ae) === Ae,
    neg: (f) => qe(-f, n),
    eql: (f, d) => f === d,
    sqr: (f) => qe(f * f, n),
    add: (f, d) => qe(f + d, n),
    sub: (f, d) => qe(f - d, n),
    mul: (f, d) => qe(f * d, n),
    pow: (f, d) => M0(c, f, d),
    div: (f, d) => qe(f * Al(d, n), n),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, d) => f + d,
    subN: (f, d) => f - d,
    mulN: (f, d) => f * d,
    inv: (f) => Al(f, n),
    sqrt: r.sqrt || ((f) => u(c, f)),
    invertBatch: (f) => V0(c, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, d, h) => h ? d : f,
    toBytes: (f) => t ? ic(f, o) : ym(f, o),
    fromBytes: (f) => {
      if (f.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${f.length}`);
      return t ? _a(f) : A0(f);
    }
  });
  return Object.freeze(c);
}
function j0(n, e) {
  if (!n.isOdd)
    throw new Error("Field doesn't have isOdd");
  const t = n.sqrt(e);
  return n.isOdd(t) ? n.neg(t) : t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const z0 = BigInt(0), vu = BigInt(1);
function W0(n, e) {
  const t = (i, o) => {
    const u = o.negate();
    return i ? u : o;
  }, r = (i) => {
    const o = Math.ceil(e / i) + 1, u = 2 ** (i - 1);
    return { windows: o, windowSize: u };
  };
  return {
    constTimeNegate: t,
    // non-const time multiplication ladder
    unsafeLadder(i, o) {
      let u = n.ZERO, c = i;
      for (; o > z0; )
        o & vu && (u = u.add(c)), c = c.double(), o >>= vu;
      return u;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(i, o) {
      const { windows: u, windowSize: c } = r(o), f = [];
      let d = i, h = d;
      for (let g = 0; g < u; g++) {
        h = d, f.push(h);
        for (let y = 1; y < c; y++)
          h = h.add(d), f.push(h);
        d = h.double();
      }
      return f;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, o, u) {
      const { windows: c, windowSize: f } = r(i);
      let d = n.ZERO, h = n.BASE;
      const g = BigInt(2 ** i - 1), y = 2 ** i, b = BigInt(i);
      for (let S = 0; S < c; S++) {
        const A = S * f;
        let M = Number(u & g);
        u >>= b, M > f && (M -= y, u += vu);
        const W = A, fe = A + Math.abs(M) - 1, _ = S % 2 !== 0, te = M < 0;
        M === 0 ? h = h.add(t(_, o[W])) : d = d.add(t(te, o[fe]));
      }
      return { p: d, f: h };
    },
    wNAFCached(i, o, u, c) {
      const f = i._WINDOW_SIZE || 1;
      let d = o.get(i);
      return d || (d = this.precomputeWindow(i, f), f !== 1 && o.set(i, c(d))), this.wNAF(f, d, u);
    }
  };
}
function R0(n) {
  return $0(n.Fp), Dc(n, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Tm(n.n, n.nBitLength),
    ...n,
    p: n.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const pt = BigInt(0), st = BigInt(1), Ja = BigInt(2), Y0 = BigInt(8), X0 = { zip215: !0 };
function Z0(n) {
  const e = R0(n);
  return Dc(n, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...e });
}
function Cc(n) {
  const e = Z0(n), { Fp: t, n: r, prehash: i, hash: o, randomBytes: u, nByteLength: c, h: f } = e, d = Ja << BigInt(c * 8) - st, h = t.create, g = e.uvRatio || ((K, C) => {
    try {
      return { isValid: !0, value: t.sqrt(K * t.inv(C)) };
    } catch {
      return { isValid: !1, value: pt };
    }
  }), y = e.adjustScalarBytes || ((K) => K), b = e.domain || ((K, C, Y) => {
    if (C.length || Y)
      throw new Error("Contexts/pre-hash are not supported");
    return K;
  }), S = (K) => typeof K == "bigint" && pt < K, A = (K, C) => S(K) && S(C) && K < C, M = (K) => K === pt || A(K, d);
  function W(K, C) {
    if (A(K, C))
      return K;
    throw new Error(`Expected valid scalar < ${C}, got ${typeof K} ${K}`);
  }
  function fe(K) {
    return K === pt ? K : W(K, r);
  }
  const _ = /* @__PURE__ */ new Map();
  function te(K) {
    if (!(K instanceof F))
      throw new Error("ExtendedPoint expected");
  }
  class F {
    constructor(C, Y, z, X) {
      if (this.ex = C, this.ey = Y, this.ez = z, this.et = X, !M(C))
        throw new Error("x required");
      if (!M(Y))
        throw new Error("y required");
      if (!M(z))
        throw new Error("z required");
      if (!M(X))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(C) {
      if (C instanceof F)
        throw new Error("extended point not allowed");
      const { x: Y, y: z } = C || {};
      if (!M(Y) || !M(z))
        throw new Error("invalid affine point");
      return new F(Y, z, st, h(Y * z));
    }
    static normalizeZ(C) {
      const Y = t.invertBatch(C.map((z) => z.ez));
      return C.map((z, X) => z.toAffine(Y[X])).map(F.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(C) {
      this._WINDOW_SIZE = C, _.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: C, d: Y } = e;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: z, ey: X, ez: ae, et: ge } = this, be = h(z * z), we = h(X * X), pe = h(ae * ae), Ne = h(pe * pe), ve = h(be * C), De = h(pe * h(ve + we)), Ce = h(Ne + h(Y * h(be * we)));
      if (De !== Ce)
        throw new Error("bad point: equation left != right (1)");
      const Re = h(z * X), w = h(ae * ge);
      if (Re !== w)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(C) {
      te(C);
      const { ex: Y, ey: z, ez: X } = this, { ex: ae, ey: ge, ez: be } = C, we = h(Y * be), pe = h(ae * X), Ne = h(z * be), ve = h(ge * X);
      return we === pe && Ne === ve;
    }
    is0() {
      return this.equals(F.ZERO);
    }
    negate() {
      return new F(h(-this.ex), this.ey, this.ez, h(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: C } = e, { ex: Y, ey: z, ez: X } = this, ae = h(Y * Y), ge = h(z * z), be = h(Ja * h(X * X)), we = h(C * ae), pe = Y + z, Ne = h(h(pe * pe) - ae - ge), ve = we + ge, De = ve - be, Ce = we - ge, Re = h(Ne * De), w = h(ve * Ce), E = h(Ne * Ce), B = h(De * ve);
      return new F(Re, w, B, E);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(C) {
      te(C);
      const { a: Y, d: z } = e, { ex: X, ey: ae, ez: ge, et: be } = this, { ex: we, ey: pe, ez: Ne, et: ve } = C;
      if (Y === BigInt(-1)) {
        const O = h((ae - X) * (pe + we)), j = h((ae + X) * (pe - we)), V = h(j - O);
        if (V === pt)
          return this.double();
        const H = h(ge * Ja * ve), Z = h(be * Ja * Ne), m = Z + H, a = j + O, l = Z - H, p = h(m * V), T = h(a * l), x = h(m * l), k = h(V * a);
        return new F(p, T, k, x);
      }
      const De = h(X * we), Ce = h(ae * pe), Re = h(be * z * ve), w = h(ge * Ne), E = h((X + ae) * (we + pe) - De - Ce), B = w - Re, v = w + Re, I = h(Ce - Y * De), L = h(E * B), $ = h(v * I), U = h(E * I), D = h(B * v);
      return new F(L, $, D, U);
    }
    subtract(C) {
      return this.add(C.negate());
    }
    wNAF(C) {
      return ee.wNAFCached(this, _, C, F.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(C) {
      const { p: Y, f: z } = this.wNAF(W(C, r));
      return F.normalizeZ([Y, z])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(C) {
      let Y = fe(C);
      return Y === pt ? G : this.equals(G) || Y === st ? this : this.equals(R) ? this.wNAF(Y).p : ee.unsafeLadder(this, Y);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(f).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return ee.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(C) {
      const { ex: Y, ey: z, ez: X } = this, ae = this.is0();
      C == null && (C = ae ? Y0 : t.inv(X));
      const ge = h(Y * C), be = h(z * C), we = h(X * C);
      if (ae)
        return { x: pt, y: st };
      if (we !== st)
        throw new Error("invZ was invalid");
      return { x: ge, y: be };
    }
    clearCofactor() {
      const { h: C } = e;
      return C === st ? this : this.multiplyUnsafe(C);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(C, Y = !1) {
      const { d: z, a: X } = e, ae = t.BYTES;
      C = Yi("pointHex", C, ae);
      const ge = C.slice(), be = C[ae - 1];
      ge[ae - 1] = be & -129;
      const we = _a(ge);
      we === pt || (Y ? W(we, d) : W(we, t.ORDER));
      const pe = h(we * we), Ne = h(pe - st), ve = h(z * pe - X);
      let { isValid: De, value: Ce } = g(Ne, ve);
      if (!De)
        throw new Error("Point.fromHex: invalid y coordinate");
      const Re = (Ce & st) === st, w = (be & 128) !== 0;
      if (!Y && Ce === pt && w)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return w !== Re && (Ce = h(-Ce)), F.fromAffine({ x: Ce, y: we });
    }
    static fromPrivateKey(C) {
      return Ie(C).point;
    }
    toRawBytes() {
      const { x: C, y: Y } = this.toAffine(), z = ic(Y, t.BYTES);
      return z[z.length - 1] |= C & st ? 128 : 0, z;
    }
    toHex() {
      return Lc(this.toRawBytes());
    }
  }
  F.BASE = new F(e.Gx, e.Gy, st, h(e.Gx * e.Gy)), F.ZERO = new F(pt, st, st, pt);
  const { BASE: R, ZERO: G } = F, ee = W0(F, c * 8);
  function oe(K) {
    return qe(K, r);
  }
  function Be(K) {
    return oe(_a(K));
  }
  function Ie(K) {
    const C = c;
    K = Yi("private key", K, C);
    const Y = Yi("hashed private key", o(K), 2 * C), z = y(Y.slice(0, C)), X = Y.slice(C, 2 * C), ae = Be(z), ge = R.multiply(ae), be = ge.toRawBytes();
    return { head: z, prefix: X, scalar: ae, point: ge, pointBytes: be };
  }
  function Le(K) {
    return Ie(K).pointBytes;
  }
  function Ge(K = new Uint8Array(), ...C) {
    const Y = Jl(...C);
    return Be(o(b(Y, Yi("context", K), !!i)));
  }
  function Zt(K, C, Y = {}) {
    K = Yi("message", K), i && (K = i(K));
    const { prefix: z, scalar: X, pointBytes: ae } = Ie(C), ge = Ge(Y.context, z, K), be = R.multiply(ge).toRawBytes(), we = Ge(Y.context, be, ae, K), pe = oe(ge + we * X);
    fe(pe);
    const Ne = Jl(be, ic(pe, t.BYTES));
    return Yi("result", Ne, c * 2);
  }
  const je = X0;
  function _e(K, C, Y, z = je) {
    const { context: X, zip215: ae } = z, ge = t.BYTES;
    K = Yi("signature", K, 2 * ge), C = Yi("message", C), i && (C = i(C));
    const be = _a(K.slice(ge, 2 * ge));
    let we, pe, Ne;
    try {
      we = F.fromHex(Y, ae), pe = F.fromHex(K.slice(0, ge), ae), Ne = R.multiplyUnsafe(be);
    } catch {
      return !1;
    }
    if (!ae && we.isSmallOrder())
      return !1;
    const ve = Ge(X, pe.toRawBytes(), we.toRawBytes(), C);
    return pe.add(we.multiplyUnsafe(ve)).subtract(Ne).clearCofactor().equals(F.ZERO);
  }
  return R._setWindowSize(8), {
    CURVE: e,
    getPublicKey: Le,
    sign: Zt,
    verify: _e,
    ExtendedPoint: F,
    utils: {
      getExtendedPublicKey: Ie,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => u(t.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(K = 8, C = F.BASE) {
        return C._setWindowSize(K), C.multiply(BigInt(3)), C;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qc = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ul = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const G0 = BigInt(1), oc = BigInt(2), Q0 = BigInt(5), Ll = BigInt(10), ew = BigInt(20), tw = BigInt(40), Dl = BigInt(80);
function nw(n) {
  const e = qc, r = n * n % e * n % e, i = Jt(r, oc, e) * r % e, o = Jt(i, G0, e) * n % e, u = Jt(o, Q0, e) * o % e, c = Jt(u, Ll, e) * u % e, f = Jt(c, ew, e) * c % e, d = Jt(f, tw, e) * f % e, h = Jt(d, Dl, e) * d % e, g = Jt(h, Dl, e) * d % e, y = Jt(g, Ll, e) * u % e;
  return { pow_p_5_8: Jt(y, oc, e) * n % e, b2: r };
}
function rw(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function iw(n, e) {
  const t = qc, r = qe(e * e * e, t), i = qe(r * r * e, t), o = nw(n * i).pow_p_5_8;
  let u = qe(n * r * o, t);
  const c = qe(e * u * u, t), f = u, d = qe(u * Ul, t), h = c === n, g = c === qe(-n, t), y = c === qe(-n * Ul, t);
  return h && (u = f), (g || y) && (u = d), P0(u, t) && (u = qe(-u, t)), { isValid: h || g, value: u };
}
const $i = H0(qc, void 0, !0), Kc = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: $i,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: pm,
  randomBytes: Hg,
  adjustScalarBytes: rw,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: iw
}, ws = /* @__PURE__ */ Cc(Kc);
function Em(n, e, t) {
  if (e.length > 255)
    throw new Error("Context is too big");
  return Mg(um("SigEd25519 no Ed25519 collisions"), new Uint8Array([t ? 1 : 0, e.length]), e, n);
}
({
  ...Kc
});
({
  ...Kc
});
const sw = ($i.ORDER + BigInt(3)) / BigInt(8);
$i.pow(oc, sw);
$i.sqrt($i.neg($i.ONE));
($i.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
j0($i, $i.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const ow = () => new Error("not implemented"), Nm = () => new Error("invalid size"), bm = () => new Error("destination is required"), xm = () => new Error("amount is required"), Bm = () => new Error("currency is required"), la = () => new Error("invalid currency"), ac = () => new Error("unexpected error"), aw = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), uw = () => new Error("invalid value"), km = () => new Error("invalid mode"), Fu = () => new Error("invalid address"), Om = () => new Error("login is required"), Im = () => new Error("login domain is required"), uc = () => new Error("login verifier is required"), Cl = 32, cw = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class ds {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(e) {
    if (e.length !== Cl)
      throw Fu();
    this.publicKey = e;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(e) {
    if (!e.match(cw))
      throw Fu();
    const t = ca.decode(e);
    if (t.length !== Cl)
      throw Fu();
    return new ds(t);
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return pu.Buffer.from([...this.publicKey]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return ca.encode(this.publicKey);
  }
  /**
   * Returns the Base58 encoded string representation of the public key.
   *
   * @returns The Base58 encoded public key string.
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Verifies a signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify.
   * @returns `true` if the signature is valid, otherwise `false`.
   */
  verify(e, t) {
    return ws.verify(t, new Uint8Array(e), this.publicKey);
  }
}
class rs {
  /**
   * Constructs a new Keypair instance.
   *
   * @param privateKey - Private key of the key pair.
   * @param publicKey - Public key of the key pair.
   */
  constructor(e, t) {
    this.privateKey = e, this.publicKey = t;
  }
  /**
   * Generates a new random Keypair.
   *
   * @returns A new Keypair instance.
   */
  static generate() {
    const e = ws.utils.randomPrivateKey(), t = ws.getPublicKey(e);
    return new rs(e, t);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(e) {
    const t = e.subarray(0, 32), r = ws.getPublicKey(t);
    return new rs(t, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(e) {
    return rs.fromSecretKey(e);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(e) {
    const t = ws.getPublicKey(e);
    return new rs(e, t);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new ds(this.publicKey);
  }
  /**
   * Retrieves the raw public key value.
   *
   * @returns The public key as a Uint8Array.
   */
  getPublicValue() {
    return this.publicKey;
  }
  /**
   * Retrieves the raw private key value.
   *
   * @returns The private key as a Uint8Array.
   */
  getPrivateValue() {
    return this.privateKey;
  }
  /**
   * Constructs the secret key from the private and public keys.
   *
   * @returns The secret key as a Uint8Array.
   */
  getSecretKey() {
    return Uint8Array.from([...this.privateKey, ...this.publicKey]);
  }
  /**
   * Signs a message using the private key.
   *
   * @param message - The message to sign.
   * @returns The signature as a Uint8Array.
   */
  sign(e) {
    return ws.sign(new Uint8Array(e), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(e, t) {
    return ws.verify(t, new Uint8Array(e), this.publicKey);
  }
}
class ft {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(e = new Uint8Array(ft.MAX_LENGTH)) {
    if (e.length != ft.MAX_LENGTH)
      throw Nm();
    this.value = e;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(e) {
    return new ft(ca.decode(e));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(e) {
    return new ft(mm(e).subarray(0, ft.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const e = rs.generate().privateKey.subarray(0, ft.MAX_LENGTH);
    return new ft(e);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return ca.encode(this.value);
  }
}
ft.MAX_LENGTH = 11;
const Za = [
  // Crypto
  "kin",
  // Fiat
  "aed",
  "afn",
  "all",
  "amd",
  "ang",
  "aoa",
  "ars",
  "aud",
  "awg",
  "azn",
  "bam",
  "bbd",
  "bdt",
  "bgn",
  "bhd",
  "bif",
  "bmd",
  "bnd",
  "bob",
  "brl",
  "bsd",
  "btn",
  "bwp",
  "byn",
  "bzd",
  "cad",
  "cdf",
  "chf",
  "clp",
  "cny",
  "cop",
  "crc",
  "cup",
  "cve",
  "czk",
  "djf",
  "dkk",
  "dop",
  "dzd",
  "egp",
  "ern",
  "etb",
  "eur",
  "fjd",
  "fkp",
  "gbp",
  "gel",
  "ghs",
  "gip",
  "gmd",
  "gnf",
  "gtq",
  "gyd",
  "hkd",
  "hnl",
  "hrk",
  "htg",
  "huf",
  "idr",
  "ils",
  "inr",
  "iqd",
  "irr",
  "isk",
  "jmd",
  "jod",
  "jpy",
  "kes",
  "kgs",
  "khr",
  "kmf",
  "kpw",
  "krw",
  "kwd",
  "kyd",
  "kzt",
  "lak",
  "lbp",
  "lkr",
  "lrd",
  "lyd",
  "mad",
  "mdl",
  "mga",
  "mkd",
  "mmk",
  "mnt",
  "mop",
  "mru",
  "mur",
  "mvr",
  "mwk",
  "mxn",
  "myr",
  "mzn",
  "nad",
  "ngn",
  "nio",
  "nok",
  "npr",
  "nzd",
  "omr",
  "pab",
  "pen",
  "pgk",
  "php",
  "pkr",
  "pln",
  "pyg",
  "qar",
  "ron",
  "rsd",
  "rub",
  "rwf",
  "sar",
  "sbd",
  "scr",
  "sdg",
  "sek",
  "sgd",
  "shp",
  "sll",
  "sos",
  "srd",
  "ssp",
  "stn",
  "syp",
  "szl",
  "thb",
  "tjs",
  "tmt",
  "tnd",
  "top",
  "try",
  "ttd",
  "twd",
  "tzs",
  "uah",
  "ugx",
  "usd",
  "uyu",
  "uzs",
  "ves",
  "vnd",
  "vuv",
  "wst",
  "xaf",
  "xcd",
  "xof",
  "xpf",
  "yer",
  "zar",
  "zmw"
];
function lw(n) {
  const e = Za.indexOf(n);
  if (e === -1)
    throw la();
  return e;
}
function fw(n) {
  if (n < 0 || n >= Za.length)
    throw la();
  return Za[n];
}
function Sm(n) {
  return Za.indexOf(n) !== -1;
}
var fa;
(function(n) {
  n[n.Cash = 0] = "Cash", n[n.GiftCard = 1] = "GiftCard", n[n.RequestPayment = 2] = "RequestPayment";
})(fa || (fa = {}));
class ma {
  /**
   * Construct a new CodePayload.
   *
   * @param kind - The type of the code.
   * @param amount - The amount associated with the code.
   * @param nonce - A randomly-generated nonce.
   * @param currency - (Optional) Currency associated with the RequestPayment type.
   */
  constructor(e, t, r, i) {
    if (this.kind = e, this.amount = t, this.nonce = r, i && !Sm(i))
      throw la();
    this.currency = i;
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const e = new Uint8Array(20);
    if (e[0] = this.kind, this.kind === fa.RequestPayment) {
      if (!this.currency)
        throw la();
      const t = lw(this.currency);
      e[1] = t;
      for (let r = 0; r < 7; r++)
        e[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    } else
      for (let t = 0; t < 8; t++)
        e[t + 1] = Number(this.amount >> BigInt(8 * t) & BigInt(255));
    return e.set(this.nonce, 9), e;
  }
  /**
   * Create a CodePayload from its binary representation.
   *
   * @param data - The binary data.
   * @returns A new instance of CodePayload.
   */
  static fromData(e) {
    if (e.length !== ma.MAX_LENGTH)
      throw Nm();
    const t = e[0];
    let r, i, o;
    if (t === fa.RequestPayment) {
      const u = e[1];
      o = fw(u), r = e.slice(2, 9).reduce((c, f, d) => c + (BigInt(f) << BigInt(8 * d)), BigInt(0));
    } else
      r = e.slice(1, 9).reduce((u, c, f) => u + (BigInt(c) << BigInt(8 * f)), BigInt(0));
    return i = e.slice(9), new ma(t, r, i, o);
  }
}
ma.MAX_LENGTH = 20;
function mw(n) {
  return rs.fromSeed(mm(n.toBinary()));
}
function dw(n) {
  if (n.mode === void 0)
    throw km();
  if (n.idempotencyKey && n.clientSecret)
    throw aw();
}
function hw(n) {
  if (n.destination === void 0)
    throw bm();
  if (n.amount === void 0)
    throw xm();
  if (n.currency === void 0)
    throw Bm();
  if (!Sm(n.currency))
    throw la();
  ds.fromBase58(n.destination);
}
function pw(n) {
  if (n.login === void 0)
    throw Om();
  if (n.login.domain === void 0)
    throw Im();
  if (n.login.verifier === void 0)
    throw uc();
  ds.fromBase58(n.login.verifier);
}
function gw(n) {
  if (n.signers) {
    for (const e of n.signers)
      if (!(e instanceof rs))
        throw uw();
  }
}
function Jm(n) {
  switch (dw(n), n.mode) {
    case "login":
      throw ow();
    case "payment":
      hw(n), n.login && pw(n), n.signers && gw(n);
      break;
    default:
      throw km();
  }
}
class Ee {
  /**
   * Constructs a new Kin instance.
   * @param whole - The whole part of the Kin amount.
   * @param quarks - The fractional part (quarks) of the Kin amount. Default is 0.
   */
  constructor(e, t = 0) {
    this.whole = BigInt(e), this.quarks = BigInt(t), this.normalize();
  }
  /**
   * Normalizes the Kin values ensuring the `quarks` value is within the valid range.
   * Any overflow is added to the `whole` value.
   */
  normalize() {
    const e = this.quarks / Ee.quarksPerKin;
    this.whole += e, this.quarks %= Ee.quarksPerKin;
  }
  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks() {
    return this.whole * Ee.quarksPerKin + this.quarks;
  }
  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(Ee.quarksPerKin);
  }
  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(e) {
    const t = Number(e / Ee.quarksPerKin), r = Number(e % Ee.quarksPerKin);
    return new Ee(t, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(e) {
    const t = BigInt(Math.round(e * Number(Ee.quarksPerKin)));
    return Ee.fromQuarks(t);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(e) {
    const t = this.toQuarks() + e.toQuarks();
    return Ee.fromQuarks(t);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(e) {
    const t = this.toQuarks() - e.toQuarks();
    return Ee.fromQuarks(t);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(e) {
    const t = this.toQuarks() * BigInt(e);
    return Ee.fromQuarks(t);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(e) {
    const t = this.toQuarks() / BigInt(e);
    return Ee.fromQuarks(t);
  }
}
Ee.decimals = 5n;
Ee.quarksPerKin = 100000n;
Ee.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
Ee.mint = ds.fromBase58(Ee.mintAddress);
Ee.zero = new Ee(0, 0);
Ee.one = new Ee(1, 0);
Ee.max = new Ee(Number.MAX_SAFE_INTEGER, Number(Ee.quarksPerKin - 1n));
Ee.min = new Ee(Number.MIN_SAFE_INTEGER, 0);
class Pc {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    this.options = {
      ...e,
      // Normalize currency to lowercase 
      // (just in case the end user is not using TypeScript)
      currency: e.currency && e.currency.toLowerCase()
    }, this.validate(), this.options.idempotencyKey ? this.nonce = ft.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = ft.fromClientSecret(this.options.clientSecret) : this.nonce = ft.generate(), this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed());
    const t = fa.RequestPayment, r = BigInt(this.convertedAmount), i = this.nonce.value;
    this.rendezvousPayload = new ma(t, r, i, this.options.currency), this.rendezvousKeypair = mw(this.rendezvousPayload);
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Jm(this.options), !this.options.destination)
      throw bm();
    if (!this.options.amount)
      throw xm();
    if (!this.options.currency)
      throw Bm();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = ds.fromBase58(this.options.destination), { currency: t, amount: r } = this.options;
    let i;
    t === "kin" ? i = {
      case: "exact",
      value: new $e({
        currency: "kin",
        exchangeRate: 1,
        quarks: Ee.fromDecimal(r).toQuarks(),
        nativeAmount: r
      })
    } : i = {
      case: "partial",
      value: new bt({
        currency: t,
        nativeAmount: r
      })
    };
    const o = new Vt({
      requestorAccount: new P({
        value: e.toBuffer()
      }),
      exchangeData: i
    });
    return new at({
      kind: {
        case: "requestToReceiveBill",
        value: o
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw ac();
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58();
    return {
      message: t.toBinary(),
      intent: i,
      signature: r
    };
  }
  /**
   * Retrieves the client secret.
   *
   * @returns The client secret as a string.
   */
  getClientSecret() {
    return this.nonce.toString();
  }
  /**
   * Retrieves the intent ID.
   *
   * @returns The intent ID as a Base58 encoded string.
   */
  getIntentId() {
    return this.rendezvousKeypair.getPublicKey().toBase58();
  }
}
class ww extends Pc {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    super(e), this.validate();
    const { signers: t } = e, { domain: r, verifier: i } = e.login;
    this.domain = r, this.verifier = ds.fromBase58(i), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === i));
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (super.validate(), !this.options.login)
      throw Om();
    if (!this.options.login.domain)
      throw Im();
    if (!this.options.login.verifier)
      throw uc();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   * Specifically, this method adds the domain and verifier to the request to
   * receive bill message.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const t = super.toProto().kind.value;
    if (!t)
      throw ac();
    return t.domain = new it({
      value: this.domain
    }), t.verifier = new P({
      value: this.verifier.toBuffer()
    }), t.rendezvousKey = new P({
      value: this.rendezvousKeypair.getPublicKey().toBuffer()
    }), new at({
      kind: {
        case: "requestToReceiveBill",
        value: t
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    if (!this.signer)
      throw uc();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw ac();
    t.signature = new ie({
      value: this.signer.sign(t.toBinary())
    });
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58();
    return {
      message: e.toBinary(),
      intent: i,
      signature: r
    };
  }
  /**
   * Retrieves the client secret.
   *
   * @returns The client secret as a string.
   */
  getClientSecret() {
    return this.nonce.toString();
  }
  /**
   * Retrieves the intent ID.
   *
   * @returns The intent ID as a Base58 encoded string.
   */
  getIntentId() {
    return this.rendezvousKeypair.getPublicKey().toBase58();
  }
}
function yw(n) {
  return typeof btoa == "function" ? btoa(n) : pu.Buffer.from(n, "binary").toString("base64");
}
function Ta(n) {
  return encodeURIComponent(yw(JSON.stringify(n ?? {})));
}
const Tw = ["width", "height"], Ew = /* @__PURE__ */ _s({
  __name: "PaymentRequestButton",
  emits: ["resize", "invoke"],
  setup(n, { emit: e }) {
    const t = ga(), r = Ot("options"), i = new $s(), o = `${t.codeSdk()}/payment-request-button/#/${i.id}/p=${Ta(r)}`, u = Bt(null), c = Bt(0), f = Bt(0);
    fu(() => {
      u.value && (i.on("resize", (h) => {
        const { width: g, height: y } = h;
        u.value && (c.value = g, f.value = y);
      }), i.on("invoke", () => {
        e("invoke", void 0);
      }));
    });
    function d() {
      const h = (g) => g + " !important";
      return {
        display: h("inline-block"),
        width: h("222px"),
        height: h("60px"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: h("light")
      };
    }
    return (h, g) => (et(), os("iframe", {
      ref_key: "el",
      ref: u,
      src: o,
      width: c.value,
      height: f.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: ms(d())
    }, null, 12, Tw));
  }
}), vm = /* @__PURE__ */ _s({
  __name: "PaymentRequestModalDesktop",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(n, { emit: e }) {
    const t = ga(), r = Ot("options"), i = new $s(), o = `${t.codeSdk()}/payment-request-modal-desktop/#/${i.id}/p=${Ta(r)}`, u = Bt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), i.on("error", (f) => {
      `${f}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), e("streamClosed")) : (console.error(`CodeSDK: ${f}`), e("error", f));
    }), i.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), e("streamTimeout");
    }), i.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), e("streamClosed");
    }), fu(() => {
      u.value && (i.setTargetWindow(u.value), e("channelCreated", i));
    }), Bf(() => {
      var g, y;
      const { clientSecret: f, idempotencyKey: d, confirmParams: h } = r ?? {};
      f && i.emit("updatedClientSecret", { value: f }), d && i.emit("updatedIdempotencyKey", { value: d }), h && ((g = h.success) != null && g.url && i.emit("updatedSuccessUrl", { value: h.success.url }), (y = h.cancel) != null && y.url && i.emit("updatedCancelUrl", { value: h.cancel.url }));
    });
    function c() {
      const f = (d) => d + " !important";
      return {
        position: f("fixed"),
        inset: f("0"),
        zIndex: f("2147483647"),
        overflow: f("hidden"),
        width: f("100dvw"),
        height: f("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: f("light")
      };
    }
    return (f, d) => (et(), os("iframe", {
      ref_key: "el",
      ref: u,
      src: o,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: ms(c())
    }, null, 4));
  }
}), Nw = /* @__PURE__ */ _s({
  __name: "PaymentRequestModalMobile",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(n, { emit: e }) {
    const t = ga(), r = Ot("options"), i = new $s(), o = `${t.codeSdk()}/payment-request-modal-mobile/#/${i.id}/p=${Ta(r)}`, u = Bt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), i.on("navigate", (f) => {
      f.url && (window.location.href = f.url);
    }), i.on("error", (f) => {
      `${f}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), e("streamClosed")) : (console.error(`CodeSDK: ${f}`), e("error", f));
    }), i.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), e("streamTimeout");
    }), i.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), e("streamClosed");
    }), fu(() => {
      u.value && (i.setTargetWindow(u.value), e("channelCreated", i));
    }), Bf(() => {
      var g, y;
      const { clientSecret: f, idempotencyKey: d, confirmParams: h } = r ?? {};
      f && i.emit("updatedClientSecret", { value: f }), d && i.emit("updatedIdempotencyKey", { value: d }), h && ((g = h.success) != null && g.url && i.emit("updatedSuccessUrl", { value: h.success.url }), (y = h.cancel) != null && y.url && i.emit("updatedCancelUrl", { value: h.cancel.url }));
    });
    function c() {
      const f = (d) => d + " !important";
      return {
        position: f("fixed"),
        inset: f("0"),
        zIndex: f("2147483647"),
        overflow: f("hidden"),
        width: f("100dvw"),
        height: f("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: f("light")
      };
    }
    return (f, d) => (et(), os("iframe", {
      ref_key: "el",
      ref: u,
      src: o,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: ms(c())
    }, null, 4));
  }
}), bw = /* @__PURE__ */ _s({
  __name: "PreloadPaymentRequestModalDesktop",
  setup(n) {
    const e = ga(), t = Ot("options"), r = `${e.codeSdk()}/payment-request-modal-desktop/#/preload/p=${Ta(t)}`, i = Bt(null);
    function o() {
      const u = (c) => c + " !important";
      return {
        opacity: u("0"),
        visibility: u("hidden"),
        position: u("absolute"),
        top: u("-1px"),
        left: u("-1px"),
        zIndex: u("-1"),
        width: u("1px"),
        height: u("1px")
      };
    }
    return (u, c) => (et(), os("iframe", {
      ref_key: "el",
      ref: i,
      src: r,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: ms(o())
    }, null, 4));
  }
}), xw = /* @__PURE__ */ _s({
  __name: "PreloadPaymentRequestModalMobile",
  setup(n) {
    const e = ga(), t = Ot("options"), r = `${e.codeSdk()}/payment-request-modal-mobile/#/preload/p=${Ta(t)}`, i = Bt(null);
    function o() {
      const u = (c) => c + " !important";
      return {
        opacity: u("0"),
        visibility: u("hidden"),
        position: u("absolute"),
        top: u("-1px"),
        left: u("-1px"),
        zIndex: u("-1"),
        width: u("1px"),
        height: u("1px")
      };
    }
    return (u, c) => (et(), os("iframe", {
      ref_key: "el",
      ref: i,
      src: r,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: ms(o())
    }, null, 4));
  }
});
function Au(n) {
  try {
    return new URL(n), !0;
  } catch {
    return !1;
  }
}
function Bw(n, e) {
  try {
    return new URL(n, e).toString();
  } catch {
    return "";
  }
}
function kw(n, e) {
  let t = decodeURIComponent(n);
  for (const [r, i] of Object.entries(e))
    t = t.replace(`{{${r}}}`, i);
  return encodeURI(t);
}
function ql(n, e, t) {
  let r = (n == null ? void 0 : n.url) ?? e;
  if (r && (!Au(r) && e && Au(e) && (r = Bw(r, new URL(e).origin)), Au(r)))
    return t && (r = kw(r, t)), { url: r };
}
const Kl = () => new Error("unexpected error"), Pl = (n, e) => new Error(`unexpected HTTP status: ${n}, ${e}`), _l = (n) => new Error(`unexpected server error: ${n}`);
class Ow {
  /**
   * Initializes a new connection to the provided endpoint.
   *
   * @param endpoint - The URL of the endpoint to connect to.
   * @param fetch - Optional fetch function. Defaults to {} fetch.
   */
  constructor(e, t = globalThis.fetch) {
    this.endpoint = e, this.fetch = (...r) => t.apply(globalThis, r);
  }
  /**
   * Performs an HTTP GET request to the specified method with provided parameters.
   *
   * @param method - The API method to call.
   * @param params - The parameters for the method.
   * @returns The response JSON object on success.
   * @throws Will throw an error if the HTTP status is not 200 or if the server returns an error.
   */
  async get(e, t) {
    const r = `${this.endpoint}/${e}?${new URLSearchParams(t)}`, i = await this.fetch(r, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (i.status !== 200) {
      const u = await i.text();
      throw Pl(i.status, u);
    }
    const o = await i.json();
    if (o.error)
      throw _l(o.error);
    if (o.success)
      return o;
    throw console.error(o), Kl();
  }
  /**
   * Performs an HTTP POST request to the specified method with provided body data.
   *
   * @param method - The API method to call.
   * @param body - The data to be sent in the request body.
   * @returns `true` on success.
   * @throws Will throw an error if the HTTP status is not 200 or if the server returns an error.
   */
  async post(e, t) {
    const r = `${this.endpoint}/${e}`, i = await this.fetch(r, {
      method: "POST",
      body: JSON.stringify(t),
      headers: { "Content-Type": "application/json" }
    });
    if (i.status !== 200) {
      const u = await i.text();
      throw Pl(i.status, u);
    }
    const o = await i.json();
    if (o.error)
      throw _l(o.error);
    if (o.success)
      return !0;
    throw console.error(o), Kl();
  }
}
const Iw = "https://api.getcode.com/v1", $l = new Ow(Iw);
var Ga;
(function(n) {
  n.Pending = "pending", n.Confirmed = "confirmed";
})(Ga || (Ga = {}));
const Sw = { status: Ga.Pending }, Jw = { status: Ga.Confirmed }, vw = {
  /**
   * Creates a new payment intent.
   *
   * @param obj - The options for creating a payment intent.
   * @returns An object containing the client secret and intent ID.
   * @throws Will throw an error if unable to create the intent.
   */
  create: async (n) => {
    var i;
    n.mode = "payment";
    let e;
    n.login ? e = new ww(n) : e = new Pc(n);
    const t = e.sign(), r = {
      intent: t.intent,
      message: pu.Buffer.from(t.message).toString("base64url"),
      signature: ca.encode(t.signature),
      webhook: (i = e.options.webhook) == null ? void 0 : i.url
    };
    return await $l.post("createIntent", r), {
      clientSecret: e.getClientSecret(),
      id: e.getIntentId()
    };
  },
  /**
   * Retrieves the status of a specified payment intent.
   *
   * @param obj - The options containing the intent ID to check status for.
   * @returns An object representing the intent's status.
   * @throws Will throw an error if unable to retrieve the intent's status.
   */
  getStatus: async (n) => (await $l.get("getStatus", { intent: n.intent })).status === "SUBMITTED" ? Jw : Sw
}, Fw = { key: 0 }, Aw = { key: 1 }, Ml = 500, Uw = /* @__PURE__ */ _s({
  __name: "ButtonFlow",
  setup(n) {
    var fe, _, te, F;
    const e = (R) => new Promise((G) => setTimeout(G, R)), t = Ot("options"), r = Ot("emit", async () => !1), i = Bt(null), o = Bt(null), u = Bt(!1), c = Vw(), f = ((_ = (fe = t == null ? void 0 : t.confirmParams) == null ? void 0 : fe.success) == null ? void 0 : _.url) !== void 0, d = ((F = (te = t == null ? void 0 : t.confirmParams) == null ? void 0 : te.cancel) == null ? void 0 : F.url) !== void 0;
    function h() {
      return t && t.amount && t.currency && t.destination;
    }
    function g(R) {
      i.value = R;
    }
    async function y() {
      var oe, Be;
      if (u.value = !0, await _u(), !t)
        throw new Error("Missing options");
      if (!i.value)
        throw new Error("Missing channel");
      if (i.value.emit("beforeInvoke"), await r("invoke")) {
        u.value = !1;
        return;
      }
      o.value = new Pc(t).getIntentId();
      const G = {
        INTENT_ID: o.value
        // ...
      }, ee = window.location.href;
      if (t.confirmParams = {
        success: ql((oe = t.confirmParams) == null ? void 0 : oe.success, ee, G),
        cancel: ql((Be = t.confirmParams) == null ? void 0 : Be.cancel, ee, G)
      }, await _u(), !i.value)
        throw new Error("Missing channel");
      i.value.emit("afterInvoke");
    }
    async function b() {
      var ee, oe;
      u.value = !1, await e(Ml);
      const R = (oe = (ee = t == null ? void 0 : t.confirmParams) == null ? void 0 : ee.success) == null ? void 0 : oe.url;
      await r("success", { url: R, options: t, intent: o.value }) || f && (window.location.href = R);
    }
    async function S() {
      var ee, oe;
      u.value = !1, await e(Ml);
      const R = (oe = (ee = t == null ? void 0 : t.confirmParams) == null ? void 0 : ee.cancel) == null ? void 0 : oe.url;
      await r("cancel", { url: R, options: t, intent: o.value }) || d && (window.location.href = R);
    }
    async function A(R) {
      await r("error", { message: `${R}` });
    }
    async function M() {
      u.value = !1, await A("stream_timed_out");
    }
    async function W() {
      u.value = !1, await A("stream_closed");
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!o.value)
          return;
        const { status: R } = await vw.getStatus({ intent: o.value });
        R === "confirmed" && b();
      }
    }), (R, G) => h() ? (et(), os(wt, { key: 0 }, [
      Rt(Xi(Ew), { onInvoke: y }),
      (et(), As(Qh, { to: "body" }, [
        u.value ? (et(), os("div", Fw, [
          Xi(c) ? (et(), As(Xi(Nw), {
            key: 0,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S,
            onError: A,
            onStreamTimeout: M,
            onStreamClosed: W
          })) : (et(), As(Xi(vm), {
            key: 1,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S,
            onError: A,
            onStreamTimeout: M,
            onStreamClosed: W
          }))
        ])) : (et(), os("div", Aw, [
          Xi(c) ? (et(), As(Xi(xw), { key: 0 })) : (et(), As(Xi(bw), { key: 1 }))
        ]))
      ]))
    ], 64)) : sp("", !0);
  }
}), Lw = (n) => new Error(`Unknown element type: ${n}`), Ww = (n) => new Error(`Required parameter: ${n}`), Rw = (n) => new Error(`Invalid parameter: ${n}`), Vl = "payment", Dw = "en";
class Fm {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(e, t) {
    const r = { ...e };
    r.mode = r.mode ?? Vl, r.locale = r.locale ?? Dw, this.intent = su(r), this.listeners = [], this.app = t, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return Jm(this.intent);
  }
  /**
   * Retrieves the locale of the element.
   * @returns The locale string or undefined.
   */
  getLocale() {
    return this.intent.locale;
  }
  /**
   * Retrieves the mode of the element.
   * @returns The mode of the element.
   */
  getMode() {
    return this.intent.mode ?? Vl;
  }
  /**
   * Retrieves the appearance of the element.
   * @returns The appearance string or undefined.
   */
  getAppearance() {
    return this.intent.appearance;
  }
  /**
   * Retrieves the current options of the element.
   * @returns The element options.
   */
  getOptions() {
    return this.intent;
  }
  /**
   * Updates the element with new options.
   * @param options - New options to update the element with.
   */
  update(e) {
    Object.assign(this.intent, e), this.validate();
  }
  /**
   * Subscribes to an event with a callback.
   * @param event - The event to subscribe to.
   * @param callback - The function to call back when the event occurs.
   */
  on(e, t) {
    this.listeners.push({ event: e, callback: t });
  }
  /**
   * Mounts the Vue component onto an HTML element.
   * @param el - The element or a selector string for mounting.
   * @returns The mounted element.
   */
  mount(e) {
    const t = typeof e == "string" ? document.querySelector(e) : e;
    if (t && t.hasAttribute("data-v-app"))
      return console.warn("A component is already mounted on this element: " + e), null;
    const r = async (o, u) => {
      const c = Cw(u), f = this.listeners.filter((h) => h.event === o);
      return (await Promise.all(f.map((h) => h.callback(c)))).some((h) => h === !0);
    };
    return this.app.provide("locale", this.getLocale()), this.app.provide("options", this.getOptions()), this.app.provide("emit", r), this.app.mount(e).$el;
  }
  /**
   * Unmounts the Vue component from the HTML element.
   */
  unmount() {
    return this.app.unmount();
  }
}
function Cw(n) {
  return typeof n != "object" ? n : JSON.parse(JSON.stringify(n));
}
class qw extends Fm {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Wf(Uw));
  }
}
class Kw extends Fm {
  /**
   * Constructs a new CodeCard with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Wf(vm));
  }
}
const Pw = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (n, e) => {
    switch (n) {
      case "button":
        return { button: new qw(e) };
      case "card":
        return { card: new Kw(e) };
      default:
        throw Lw(n);
    }
  }
};
function _w() {
  return navigator.userAgent.includes("DebugMobile");
}
function Am() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function $w() {
  return Am() || [
    "iPad Simulator",
    "iPod Simulator",
    "iPad",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Yw() {
  return $w() || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Mw() {
  return /Android/i.test(navigator.userAgent);
}
function Vw() {
  return Am() || Mw() || _w();
}
const Hw = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
Rp(Hw);
const Xw = { elements: Pw };
export {
  Mw as Android,
  Rw as ErrInvalidParameter,
  Ww as ErrRequiredParameter,
  Lw as ErrUnknownElementType,
  Yw as Safari,
  Xw as default,
  Pw as elements,
  ql as getURLParam,
  $w as iOS,
  Am as iPhone,
  Vw as isMobileDevice,
  Au as isValidURL,
  Bw as makeFQDN,
  kw as replaceURLVariables
};
