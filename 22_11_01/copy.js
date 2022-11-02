function copyObject(obj) {
    const ret = {};
    ret.nid = obj.nid;  //{nod:3}
    ret.nm = obj.nm;    //{nid:3, nm:'Hong'}
    ret.addr = obj.addr;//{nid:3, nm:'Hong', addr:'busan'}
    return ret;
}

// const kim = { nid: 3, nm: 'Hong', addr: 'busan'};

// console.table(kim);
const kim = { nid: 3, nm: 'Hong', addr: 'busan', age:30};
const kim2 = { ...kim }; // Object.assign({}, kim)
const key = 'nm';
kim[key] = 'Kim';
// console.log(kim.nm, kim['nm'], kim[key]);
const newKim = copyObject(kim);
newKim.addr = 'seoul';