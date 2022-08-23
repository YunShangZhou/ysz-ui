import template from "./template.vue";

template.install = app => {
    app.component(template.name,template);
}

export default template ;