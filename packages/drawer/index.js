import cDrawer from './drawer.vue';
cDrawer.install = app => {
  app.component(cDrawer.name, cDrawer)
} 
export default cDrawer