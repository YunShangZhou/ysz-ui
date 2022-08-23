import cTip from "./tip.vue";

cTip.install = app=>{
    app.component(cTip.name,cTip)
}

export default cTip;