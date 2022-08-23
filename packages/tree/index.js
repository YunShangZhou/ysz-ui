import cTree from "./tree.vue";

cTree.install = app => {
    app.component(cTree.name, cTree)
}

export default cTree;